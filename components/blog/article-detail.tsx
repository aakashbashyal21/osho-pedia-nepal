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
        <div className="pt-8 px-6 md:container">
            <div className="max-w-5xl mx-auto">
                <article className="">
                    <h1 className="text-6xl font-bold mb-4 text-left noto-sans-devanagari pt-16">{article.title}</h1>
                    {article.publishedBy && (
                        <div className="flex text-left">
                            <div className="">
                                <p className="text-lg text-muted-foreground">{formatDate(article.createdAt)}</p>
                            </div>
                        </div>
                    )}
                    <Separator className="my-4" />
                    <div className="prose-p:mb-2 prose text-xl lg:text-xl xl:text-2xl 2xl:text-3xl leading-relaxed lg:leading-relaxed xl:leading-relaxed 2xl:leading-relaxed justify-center text-justify md:px-3 lg:px-4">
                        <div className="prose-strong:text-gray-900 dark:prose-em:text-slate-400 dark:prose-strong:text-slate-400 prose-em:text-gray-900" dangerouslySetInnerHTML={{ __html: article.content.html }} />
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
