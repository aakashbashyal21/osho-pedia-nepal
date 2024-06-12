
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BlogArtwork } from '@/components/Blogs/Blog';

import { BlogItem } from '@/types';
import { cn } from '@/lib/utils';
import { getRecentMeditationList, getRecentMeditationListCard } from '@/data/action';
import LoadMoreMeditation from '@/components/LoadMoreMeditation';

export async function generateMetadata({ params }: { params: { slug: string } }) {

    return {
        title: "Osho Meditations technique",
        description: "Explore the latest Osho meditation sessions to enhance your mindfulness, spiritual growth, and well-being. Discover new ways to meditate and deepen your practice.",
        keyword:"Osho meditation, latest meditation sessions, mindfulness, spiritual growth, well-being, mental health, meditation practice, Osho teachings",
    }
}

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
