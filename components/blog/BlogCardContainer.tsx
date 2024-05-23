import React from 'react'
import { getBlogList } from '@/data/action';
import LoadMore from '@/components/LoadMore';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Label } from '../ui/label';

async function BlogCardContainer() {
    const blogData = await getBlogList(1);

    return (
        <main className="grid flex-1 items-start gap-4 px-4 pt-10 mx-auto max-w-screen-xl sm:px-0 sm:py-0 md:gap-8 lg:px-8">
            <div className="grid max-w-[70rem] flex-1 auto-rows-max gap-6 px-4 py-6 sm:px-4 lg:gap-8">
                <div className="grid gap-6 md:grid-cols-[2fr_1fr] lg:grid-cols-3 lg:gap-8">
                    <div className="grid auto-rows-max items-start gap-4 md:col-span-2 lg:col-span-2 lg:gap-4">
                        {blogData}
                        <LoadMore />
                    </div>
                    {/*
                    <div className="hidden md:block lg:hidden"></div>
                    <div className="grid auto-rows-max items-start gap-6 lg:gap-8 hidden md:block lg:col-span-1">
                        <Card x-chunk="dashboard-07-chunk-3" className="hidden lg:block">
                            <CardHeader>
                                <CardTitle>Select Post</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid gap-6">
                                    <div className="grid gap-3">
                                        <Label htmlFor="status">Status</Label>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    */ }
                </div>
            </div>
        </main>

    )
}

export default BlogCardContainer