import { Sidebar } from '@/components/sidebar'
import { Separator } from '@/components/ui/separator'
import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

export default function Loading() {
    return (
        <div className="container mx-auto p-4">
        <article className="max-w-3xl mx-auto">
            <Skeleton className="h-10 w-full" />
            <div className="flex items-center mt-2">

                <Skeleton className="rounded-full h-10 w-10">
                </Skeleton>

                <div className='ml-2'>
                    <Skeleton className="h-4 w-40 mb-2" />

                    <Skeleton className="h-2 w-40" />
                </div>
            </div>
            <div className='mt-2'>
            <Skeleton className="h-4 w-100" />

            </div>
            <Separator className="my-4" />
            {/* Render HTML content */}
            <div className="mt-8 p-4 prose md:prose-lg lg:prose-xl leading-relaxed dark:bg-gray-800 bg-gray-100 font-serif mb-4 dark:text-slate-100 dark:prose-strong:text-slate-400 dark:prose-em:text-slate-400">
                <div className="prose-p:mb-2">
                    <Skeleton className="text-gray-500 h-[400px] w-full" />

                </div>
            </div>
        </article>
    </div>
    )
}
