import type { MetadataRoute } from "next";
import { fetchQuery } from "convex/nextjs";
import { api } from "@/convex/_generated/api";

const baseUrl = "https://qenai.com";

const staticRoutes = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/team", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/services/automation", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/services/custom-models", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/services/customer-experience", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/services/knowledge-systems", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/services/advisory", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/services/audits", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/solutions", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/solutions/corporate", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/solutions/smes", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/solutions/ngos", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/solutions/professional-services", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/solutions/ecommerce", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/solutions/financial", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/audit", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/consultation", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/assessment", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/resources", priority: 0.6, changeFrequency: "weekly" as const },
  { path: "/blog", priority: 0.6, changeFrequency: "weekly" as const },
  { path: "/story", priority: 0.5, changeFrequency: "monthly" as const },
  { path: "/technology", priority: 0.5, changeFrequency: "monthly" as const },
  { path: "/values", priority: 0.5, changeFrequency: "monthly" as const },
  { path: "/faq", priority: 0.5, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.6, changeFrequency: "yearly" as const },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  try {
    const posts = await fetchQuery(api.posts.list, {});
    for (const post of posts) {
      entries.push({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: post.publishedAt ? new Date(post.publishedAt) : new Date(),
        changeFrequency: "monthly",
        priority: 0.5,
      });
    }
  } catch {
    // Convex not reachable at build time (e.g. missing env var) — ship the
    // sitemap without individual post URLs rather than failing the build.
  }

  return entries;
}
