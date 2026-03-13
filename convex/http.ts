import { httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";
import { internal } from "./_generated/api";

const http = httpRouter();

http.route({
    path: "/api/posts", // Renamed from /n8n/webhook for clarity
    method: "POST",
    handler: httpAction(async (ctx, request) => {
        // 1. Authentication
        const apiKey = request.headers.get("x-api-key");
        const expectedKey = process.env.BLOG_API_KEY;

        if (!expectedKey) {
            console.error("BLOG_API_KEY is not set in environment variables.");
            return new Response("Server Configuration Error", { status: 500 });
        }

        if (apiKey !== expectedKey) {
            return new Response("Unauthorized", { status: 401 });
        }

        // Handle DELETE requests
        if (request.method === "DELETE") {
            const url = new URL(request.url);
            const slug = url.searchParams.get("slug");

            if (!slug) {
                // Try getting from body if not in query params
                try {
                    const body = await request.json();
                    if (body.slug) {
                        await ctx.runMutation(internal.posts.deleteInternal, { slug: body.slug });
                        return new Response(JSON.stringify({ success: true, action: "deleted", slug: body.slug }), { status: 200, headers: { 'Content-Type': 'application/json' } });
                    }
                } catch (e) {
                    // Ignore body parse error, just fail if no slug
                }
                return new Response("Missing slug in query params or body", { status: 400 });
            }

            try {
                await ctx.runMutation(internal.posts.deleteInternal, { slug });
                return new Response(JSON.stringify({ success: true, action: "deleted", slug }), { status: 200, headers: { 'Content-Type': 'application/json' } });
            } catch (error: any) {
                return new Response(JSON.stringify({ error: "Failed to delete: " + error.message }), { status: 500 });
            }
        }

        // 2. Parse Body (for POST)
        if (request.method !== "POST") {
            return new Response("Method not allowed", { status: 405 });
        }

        let body;
        try {
            body = await request.json();
        } catch (e) {
            return new Response("Invalid JSON", { status: 400 });
        }

        // 3. Validation
        if (!body.slug || !body.title || !body.content) {
            return new Response("Missing required fields: slug, title, content", { status: 400 });
        }

        // 4. Action (Create or Update)
        try {
            // Try to create
            await ctx.runMutation(internal.posts.createInternal, {
                slug: body.slug,
                title: body.title,
                content: body.content,
                excerpt: body.excerpt || "",
                coverImage: body.coverImage,
                status: body.status || "draft",
                tags: body.tags || [],
                meta: body.meta || {}
            });

            return new Response(JSON.stringify({ success: true, action: "created", slug: body.slug }), { status: 200, headers: { 'Content-Type': 'application/json' } });

        } catch (error: any) {
            if (error.message.includes("Slug already exists")) {
                // It exists, so let's update it
                try {
                    await ctx.runMutation(internal.posts.updateInternal, {
                        slug: body.slug,
                        updates: {
                            title: body.title,
                            content: body.content,
                            excerpt: body.excerpt,
                            coverImage: body.coverImage,
                            status: body.status,
                            tags: body.tags,
                            meta: body.meta
                        }
                    });
                    return new Response(JSON.stringify({ success: true, action: "updated", slug: body.slug }), { status: 200, headers: { 'Content-Type': 'application/json' } });
                } catch (updateError: any) {
                    return new Response(JSON.stringify({ error: "Failed to update: " + updateError.message }), { status: 500 });
                }
            }

            return new Response(JSON.stringify({ error: "Failed to create: " + error.message }), { status: 500 });
        }
    }),
});

export default http;
