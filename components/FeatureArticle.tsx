import { BlogItem } from '@/types';
import React from 'react'
import { Badge } from './ui/badge';
import Link from 'next/link';
import { Button } from './ui/button';
import { formatDate } from '@/lib/utils';
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
                <div className="col-span-4 lg:col-span-2"> {/* Feature article on the left for larger devices */}
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
                                    {new Date(articles.featuredArticle.createdAt).toLocaleDateString()}
                                </p>
                            </div>
                        </div>
                    </Link>
                </div>
                {/* Recent articles section */}
                <div className="col-span-4 lg:col-span-2"> {/* Recent articles below feature article for medium devices */}
                    <Button className='mb-2 text-lg' variant="link">Recent Post</Button>

                    <div className="grid gap-4">
                        {/* Recent articles cover text width on medium and above */}
                        {articles.recentArticles.map((article, index) => (
                            <Link className="block rounded-lg overflow-hidden" key={index} href={`/article/${article.urlSlug}`}>
                                <div className="p-4">
                                    {article.keywords.map(tag => (
                                        <span key={tag} className="inline-flex items-center justify-center text-center bg-gray-100 rounded-md py-1 px-2 mb-2 text-sm text-gray-600 mr-2">
                                            {tag}
                                        </span>
                                    ))}
                                    <h2 className="text-xl font-bold mb-2">{article.title}</h2>
                                    <p className="text-gray-600 mb-4 line-clamp-2">{article.description}</p>
                                    <div className="text-sm">
                                        <p className="text-gray-600">
                                            {new Date(article.createdAt).toLocaleDateString()}
                                        </p>
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