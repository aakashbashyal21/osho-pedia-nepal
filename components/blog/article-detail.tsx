import React from 'react';
import { ArticleDetail } from '@/types';

import { Skeleton } from '@/components/ui/skeleton'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import {

    Separator,
} from "@/components/ui/separator"

import {
    Badge,
} from "@/components/ui/badge"
import Link from 'next/link';
interface ArticleDetailsProps {
    article: ArticleDetail | null;
}
function formatDate(dateString: string): string {
    return new Date().toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    });
}
type Props = {
    params: { id: string }
    searchParams: { [key: string]: string | string[] | undefined }
}



const BlogDetail: React.FC<ArticleDetailsProps> = ({ article }) => {
    if (!article) {
        return <div>No article to display</div>;
    }
    return (
        <div className="px-8 pt-8">
            <div className="max-w-4xl mx-auto">
                <article className="mx-auto">
                    <h1 className="text-3xl font-bold mb-4 text-center">{article.title}</h1>
                    {article.publishedBy && (
                        <div className="flex justify-center text-center">
                            <div className="">
                                <p className="text-sm text-muted-foreground">{formatDate(article.createdAt)}</p>
                            </div>
                        </div>
                    )}

                    <Separator className="my-4" />

                    {/* Render HTML content */}
                    <div className="mt-8 p-4 prose md:prose-lg lg:prose-xl leading-relaxed dark:bg-gray-800 bg-gray-100 font-serif mb-4 dark:text-slate-100 dark:prose-strong:text-slate-400 dark:prose-em:text-slate-400">
                        <img className="w-full bg-cover bg-center" src={article.image?.url} alt="Article Image" />
                        <div className="prose-p:mb-2" dangerouslySetInnerHTML={{ __html: article.content.html }} />
                    </div>
                </article>
            </div>
            <div className="mb-7 mt-7 flex justify-center">
                <Link
                    href="/"
                    className="bg-brand-secondary/20 rounded-full px-5 py-2 text-sm text-blue-600 dark:text-blue-500">
                    ← View all posts
                </Link>
            </div>
        </div>
    );
};


export default BlogDetail;
