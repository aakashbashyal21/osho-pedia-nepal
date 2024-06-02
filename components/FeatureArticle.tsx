import { BlogItem } from '@/types';
import React from 'react'
import { Badge } from './ui/badge';
import Link from 'next/link';
import Image from 'next/image'

import { Button } from './ui/button';
import { formatDate, removeUnderscores } from '@/lib/utils';
type ArticlesProps = {
    articles: {
        featuredArticle: BlogItem;
        recentArticles: BlogItem[];
    };
};

const FeatureArticle = ({ articles }: ArticlesProps) => {

    if (!articles.featuredArticle) {
        return <div>Loading...</div>;
    }

    return (

        <div className="container mx-auto px-4 py-8">
            <div className="grid md:grid-cols-4 gap-4">
                {/* Feature article section */}
                <div className="col-span-4 md:col-span-2"> {/* Feature article on the left for larger devices */}
                    <Link className="block rounded-lg overflow-hidden" href={`/article/${articles.featuredArticle.urlSlug}`}>
                        <div>
                            <img
                                src={articles.featuredArticle.image.url}
                                alt={articles.featuredArticle.title}
                                className="w-full h-auto object-cover p-4"
                            />
                        </div>
                        <div className="p-4">
                            <h2 className="text-2xl font-bold mb-2">
                                {articles.featuredArticle.title}
                            </h2>
                            <p className="text-gray-600 mb-4 line-clamp-2">
                                {articles.featuredArticle.description}
                            </p>
                            <div className="text-sm">
                                <p className="text-gray-600">
                                    {formatDate(articles.featuredArticle.createdAt)}
                                </p>
                            </div>
                        </div>
                    </Link>
                </div>
                {/* Recent articles section */}
                <div className="col-span-4 md:col-span-2"> {/* Recent articles below feature article for medium devices */}
                    <Button className='mb-2 text-lg' variant="link">Recent Post</Button>
                    <div className="grid gap-2">
                        {articles.recentArticles.map((article, index) => (
                            <Link className="block rounded-lg overflow-hidden"
                                key={index}
                                href={`/article/${article.urlSlug}`}>
                                <div className="p-4 flex items-center justify-center"> { }
                                    {article.image &&
                                        <Image
                                            src={article.image.url}
                                            alt={article.title}
                                            width={100}
                                            height={200} className="rounded-md mr-4"
                                        />
                                    }
                                    <div className="space-y-2 flex-grow">
                                        <h2 className="text-md font-bold mb-2">{article.title}</h2>
                                        <div className="flex items-center justify-between">
                                            <p className="text-gray-600">{formatDate(article.createdAt)}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeatureArticle