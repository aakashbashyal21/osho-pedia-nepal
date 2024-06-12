
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BlogArtwork } from '@/components/Blogs/Blog';

import { BlogItem } from '@/types';
import { cn } from '@/lib/utils';
import { getRecentMeditationList, getRecentMeditationListCard } from '@/data/action';
import LoadMoreMeditation from '@/components/LoadMoreMeditation';

const Page = async () => {

    const recentMeditationListCard = await getRecentMeditationListCard(1);
    return (


        <main className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-1 gap-6 lg:gap-8">
                {recentMeditationListCard}
            </div>
            <LoadMoreMeditation />

        </main>


    );
};

export default Page;
