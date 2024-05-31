import React from 'react';
import { ArticleDetail } from '@/types';
import { buttonVariants } from "@/components/ui/button"

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
import { cn } from '@/lib/utils';
import { ChevronLeft } from 'lucide-react';
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

        <article className="container relative max-w-3xl py-6 lg:py-12">
            <Link
                href="/"
                className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "absolute left-[-200px] top-14 hidden xl:inline-flex"
                )}
            >
                <ChevronLeft className="mr-2 h-4 w-4" />
                See all posts
            </Link>
            <div>

                <h1 className="mt-2 inline-block font-heading text-4xl leading-tight lg:text-5xl">
                    {article.title}
                </h1>
                <div className="mt-4 flex space-x-4">

                    {article.createdAt && (
                        <time
                            dateTime={article.createdAt}
                            className="block text-sm text-muted-foreground"
                        >
                            Published on {formatDate(article.createdAt)}
                        </time>
                    )}
                </div>
            </div>
            <article className="max-w-full md:max-w-none">
                <Separator className="my-4" />
                <div className="prose prose-lg prose-p:mb-2 text-justify">
                    <div className="prose-strong:text-gray-900 dark:prose-em:text-slate-400 dark:prose-strong:text-slate-400 prose-em:text-gray-900" dangerouslySetInnerHTML={{ __html: article.content.html }} />
                </div>
            </article>
            <hr className="mt-12" />
            <div className="flex justify-center py-6 lg:py-10">
                <Link href="/" className={cn(buttonVariants({ variant: "ghost" }))}>
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    See all posts
                </Link>
            </div>
        </article>

    );
};


export default BlogDetail;
