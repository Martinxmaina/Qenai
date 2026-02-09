import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    posts: defineTable({
        slug: v.string(),
        title: v.string(),
        content: v.string(), // MDX content
        excerpt: v.string(),
        coverImage: v.optional(v.string()),
        status: v.union(v.literal("draft"), v.literal("published")),
        publishedAt: v.optional(v.number()),
        tags: v.array(v.string()),
        meta: v.object({
            title: v.optional(v.string()),
            description: v.optional(v.string()),
            keywords: v.optional(v.string()),
        }),
    }).index("by_slug", ["slug"]),
});
