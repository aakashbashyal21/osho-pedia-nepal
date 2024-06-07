import { formatDate } from '@/lib/utils';
import { BlogItem } from '@/types';
import Link from 'next/link';
import React from 'react'
import { Button } from './ui/button';

type MeditationProps = {
    meditationArticle: BlogItem[];
};

const RecentMeditation: React.FC<MeditationProps> = ({ meditationArticle }) => {
    return (
        <div className="p-2">
            <h2 className="text-lg font-bold mb-4 border-l-4 border-purple-500 rounded-l-md pl-2">Meditation</h2>
            {meditationArticle.map((post, index) => (

                <div key={index} className="flex justify-between items-center mb-4">
                    <div>
                        <Link className='hover:text-black-700 hover:underline decoration-yellow-500 hover:underline-offset-4 hover:text-black' href={`/article/${post.urlSlug}`}>
                            {post.title}
                        </Link>
                        <p className="text-sm text-gray-600">{formatDate(post.createdAt)}</p>
                    </div>
                    <img src={post.image?.url} alt={post.title} className="w-16 h-16 object-cover ml-4" />
                </div>
            ))}
        </div>
    )
}

export default RecentMeditation