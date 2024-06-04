import React from 'react'
import { getBlogList } from '@/data/action';
import LoadMore from '@/components/LoadMore';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Label } from '../ui/label';

async function BlogCardContainer() {
    const blogData = await getBlogList(1);

    return (
        <main className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                <div className="lg:col-span-4">
                    {blogData}
                    <LoadMore />
                </div>
                {/* <div className="lg:col-span-1">
                    <div className="lg:col-span-1">
                        <div className="bg-gray-200 p-4">
                            <h2 className="text-lg font-bold mb-4">Recent Posts</h2>
                            <div className="mb-4">
                                <p className="text-sm text-gray-600">2024-06-01 12:34 PM</p>
                                <p>Post 1 title</p>
                            </div>
                            <div className="mb-4">
                                <p className="text-sm text-gray-600">2024-06-02 01:45 PM</p>
                                <p>Post 2 title</p>
                            </div>
                            <div className="mb-4">
                                <p className="text-sm text-gray-600">2024-06-03 03:56 PM</p>
                                <p>Post 3 title</p>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </main>


    )
}

export default BlogCardContainer