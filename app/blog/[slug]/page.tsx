import { fetchQuery } from "convex/nextjs";
import { api } from "@/convex/_generated/api";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { MDXComponents } from "@/components/mdx-components";
import { NeuTag } from "@/components/ui/neu-tag";
import { NeuCard } from "@/components/ui/neu-card";
import { format } from "date-fns";
import Link from "next/link";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

// Props type for the page
type Props = {
    params: Promise<{ slug: string }>;
};

// Generate metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = await fetchQuery(api.posts.getPost, { slug });

    if (!post) {
        return {
            title: "Post Not Found",
        };
    }

    return {
        title: `${post.title} | QENAI Blog`,
        description: post.meta?.description || post.excerpt,
        keywords: post.meta?.keywords ? post.meta.keywords.split(",") : post.tags,
        openGraph: {
            title: post.meta?.title || post.title,
            description: post.meta?.description || post.excerpt,
            type: "article",
            publishedTime: post.publishedAt ? new Date(post.publishedAt).toISOString() : undefined,
            tags: post.tags,
        },
    };
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = await fetchQuery(api.posts.getPost, { slug });

    if (!post) {
        notFound();
    }

    return (
        <main className="flex-1 bg-[#E0E5EC]">
            <BreadcrumbSchema
                items={[
                    { name: "Home", url: "https://qenai.com" },
                    { name: "Blog", url: "https://qenai.com/blog" },
                    { name: post.title, url: `https://qenai.com/blog/${post.slug}` },
                ]}
            />

            <article className="max-w-4xl mx-auto px-4 pt-32 pb-20">
                {/* Header */}
                <header className="mb-12 text-center">
                    <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
                        {post.tags.map((tag) => (
                            <NeuTag key={tag} variant="primary">{tag}</NeuTag>
                        ))}
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                        {post.title}
                    </h1>
                    {post.publishedAt && (
                        <time className="text-gray-500 font-medium">
                            {format(new Date(post.publishedAt), "MMMM d, yyyy")}
                        </time>
                    )}
                </header>

                {/* Content */}
                <NeuCard className="p-6 md:p-12 lg:p-16 overflow-hidden">
                    <div className="prose prose-lg prose-gray max-w-none prose-headings:font-serif prose-headings:font-bold prose-h1:text-4xl prose-h2:text-3xl prose-a:text-primary prose-img:rounded-xl">
                        <MDXRemote source={post.content} components={MDXComponents({})} />
                    </div>
                </NeuCard>

                {/* Back Link */}
                <div className="mt-12 text-center">
                    <Link href="/blog" className="text-gray-500 hover:text-primary font-bold transition-colors inline-flex items-center gap-2">
                        ← Back to All Articles
                    </Link>
                </div>
            </article>
        </main>
    );
}
