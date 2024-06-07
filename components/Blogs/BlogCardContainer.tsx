import React from 'react'
import { getBlogList, getRecentMeditationList } from '@/data/action';
import LoadMore from '@/components/LoadMore';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Label } from '../ui/label';
import RecentMeditation from '../RecentMeditation';

async function BlogCardContainer() {
    const blogData = await getBlogList(1);
    const recentMeditation = await getRecentMeditationList();

    return (
        <main className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                <div className="lg:col-span-2 md:col-span-1 order-2 lg:order-1">
                    {blogData}
                    <LoadMore />
                </div>
                <div className="lg:col-span-1 md:col-span-1 order-1 lg:order-2">
                    <RecentMeditation meditationArticle={recentMeditation} />
                </div>
            </div>
        </main>
    )
}

export default BlogCardContainer