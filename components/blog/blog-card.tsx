import Link from "next/link";
import { format } from "date-fns";
import { NeuCard } from "@/components/ui/neu-card";
import { NeuTag } from "@/components/ui/neu-tag";

interface BlogCardProps {
    post: {
        slug: string;
        title: string;
        excerpt: string;
        publishedAt?: number;
        tags: string[];
        author?: string;
    };
}

export function BlogCard({ post }: BlogCardProps) {
    return (
        <Link href={`/blog/${post.slug}`} className="block h-full">
            <NeuCard className="p-8 h-full flex flex-col items-start gap-4">
                <div className="flex flex-wrap items-center gap-3 w-full">
                    {post.tags.slice(0, 2).map((tag) => (
                        <NeuTag key={tag} variant="primary">
                            {tag}
                        </NeuTag>
                    ))}
                    {post.publishedAt && (
                        <span className="text-xs text-gray-400 ml-auto">
                            {format(new Date(post.publishedAt), "MMM d, yyyy")}
                        </span>
                    )}
                </div>

                <h2 className="text-xl md:text-2xl font-bold text-gray-800 tracking-tight">
                    {post.title}
                </h2>

                <p className="text-gray-500 leading-relaxed line-clamp-3 mb-4">
                    {post.excerpt}
                </p>

                <div className="mt-auto pt-2 text-sm font-bold text-primary flex items-center gap-2 group">
                    Read Article
                    <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                </div>
            </NeuCard>
        </Link>
    );
}
