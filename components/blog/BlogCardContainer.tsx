import React from 'react'
import { getBlogList } from '@/data/action';
import LoadMore from '@/components/LoadMore';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Label } from '../ui/label';

async function BlogCardContainer() {
    const blogData = await getBlogList(1);

    return (
        <main className="mx-auto max-w-screen-lg px-12 pt-8 sm:px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 lg:gap-8">
                {blogData}
                <LoadMore />
            </div>
        </main>
    )
}

export default BlogCardContainer