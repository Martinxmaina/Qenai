import { mutation, query, internalMutation } from "./_generated/server";
import { v } from "convex/values";

// Public Query: Get a single post by slug
export const getPost = query({
    args: { slug: v.string() },
    handler: async (ctx, args) => {
        return await ctx.db
            .query("posts")
            .withIndex("by_slug", (q) => q.eq("slug", args.slug))
            .first();
    },
});

// Public Query: List all published posts
export const list = query({
    args: {},
    handler: async (ctx) => {
        return await ctx.db
            .query("posts")
            .filter(q => q.eq(q.field("status"), "published"))
            .order("desc") // Order by creation time (default in Convex for no index) or we could index publishedAt
            .collect();
    },
});

// Internal Mutation: Create post (Secure, only callable from internal actions like http)
export const createInternal = internalMutation({
    args: {
        slug: v.string(),
        title: v.string(),
        content: v.string(),
        excerpt: v.string(),
        coverImage: v.optional(v.string()),
        status: v.union(v.literal("draft"), v.literal("published")),
        tags: v.array(v.string()),
        meta: v.object({
            title: v.optional(v.string()),
            description: v.optional(v.string()),
            keywords: v.optional(v.string()),
        }),
    },
    handler: async (ctx, args) => {
        const existing = await ctx.db
            .query("posts")
            .withIndex("by_slug", (q) => q.eq("slug", args.slug))
            .first();

        if (existing) {
            throw new Error("Slug already exists");
        }

        const publishedAt = args.status === "published" ? Date.now() : undefined;

        return await ctx.db.insert("posts", {
            ...args,
            publishedAt,
        });
    },
});

// Internal Mutation: Update post
export const updateInternal = internalMutation({
    args: {
        slug: v.string(), // Identify by slug to update logic for automation (or we could use ID)
        updates: v.object({
            title: v.optional(v.string()),
            content: v.optional(v.string()),
            excerpt: v.optional(v.string()),
            coverImage: v.optional(v.string()),
            status: v.optional(v.union(v.literal("draft"), v.literal("published"))),
            tags: v.optional(v.array(v.string())),
            meta: v.optional(
                v.object({
                    title: v.optional(v.string()),
                    description: v.optional(v.string()),
                    keywords: v.optional(v.string()),
                })
            ),
        })
    },
    handler: async (ctx, args) => {
        const post = await ctx.db
            .query("posts")
            .withIndex("by_slug", (q) => q.eq("slug", args.slug))
            .first();

        if (!post) {
            throw new Error("Post not found");
        }

        let publishedAt = post.publishedAt;
        if (args.updates.status === "published" && post.status !== "published") {
            publishedAt = Date.now();
        }

        await ctx.db.patch(post._id, {
            ...args.updates,
            publishedAt,
        });
    },
});

// Internal Mutation: Delete post
export const deleteInternal = internalMutation({
    args: {
        slug: v.string(),
    },
    handler: async (ctx, args) => {
        const post = await ctx.db
            .query("posts")
            .withIndex("by_slug", (q) => q.eq("slug", args.slug))
            .first();

        if (!post) {
            throw new Error("Post not found");
        }

        await ctx.db.delete(post._id);
    },
});
