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
            <h2 className="text-2xl font-bold mb-4 border-l-4 border-purple-500 rounded-l-md pl-2">Meditation</h2>
            {meditationArticle.map((post, index) => (
                <Link key={index} className='' href={`/article/${post.urlSlug}`}>
                    <div key={index} className="flex justify-between items-center mb-4">
                        <div>
                            <h3 className='hover:text-black-700 hover:underline decoration-yellow-500 hover:underline-offset-4'>
                                {post.title}
                            </h3>
                            <p className="text-sm text-gray-600">{formatDate(post.createdAt)}</p>
                        </div>
                        <img src={post.image?.url} alt={post.title} className="w-16 h-16 object-cover ml-4 object-cover rounded-md transition-all hover:scale-105" />
                    </div>
                </Link>
            ))}
            <div className="flex justify-end mt-4">
                <Link href={`/meditation`} className="text-black underline hover:text-black-700">
                    Read More
                </Link>
            </div>

        </div>
    )
}

export default RecentMeditation