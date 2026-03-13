# API Guide for Blog Automation

## Overview
- **Endpoint**: `https://wary-bloodhound-636.convex.site/api/posts`
- **Method**: `POST` (Create/Update), `DELETE` (Delete)
- **Headers**:
    - `Content-Type: application/json`
    - `x-api-key: YOUR_BLOG_API_KEY` (Set in Convex Dashboard)

## 1. Create or Update a Post (Upsert)
This command will create a new post if the `slug` is unique, or update the existing post if the `slug` exists.

```bash
curl -X POST https://wary-bloodhound-636.convex.site/api/posts \
  -H "Content-Type: application/json" \
  -H "x-api-key: YOUR_API_KEY" \
  -d '{
    "slug": "my-first-blog-post",
    "title": "My First Blog Post",
    "content": "# Hello World\n\nThis is my first post content.",
    "excerpt": "A short summary for the card.",
    "status": "published",
    "tags": ["AI", "Tech"],
    "coverImage": "https://example.com/image.jpg"
  }'
```

## 2. Create a Draft
Set `status` to `"draft"` to keep it hidden from the public blog list.

```bash
curl -X POST https://wary-bloodhound-636.convex.site/api/posts \
  -H "Content-Type: application/json" \
  -H "x-api-key: YOUR_API_KEY" \
  -d '{
    "slug": "draft-post",
    "title": "Draft Idea",
    "content": "Work in progress...",
    "status": "draft"
  }'
```

## 3. Delete a Post
**Identifier**: The `slug` is the unique identifier used to delete a post.

```bash
curl -X DELETE "https://wary-bloodhound-636.convex.site/api/posts?slug=my-first-blog-post" \
  -H "x-api-key: YOUR_API_KEY"
```

*Alternatively, you can send the slug in the JSON body:*

```bash
curl -X DELETE https://wary-bloodhound-636.convex.site/api/posts \
  -H "Content-Type: application/json" \
  -H "x-api-key: YOUR_API_KEY" \
  -d '{ "slug": "my-first-blog-post" }'
```
