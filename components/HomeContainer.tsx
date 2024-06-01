import BiographySection from '@/components/about-osho/BiographySection';
import { bioItem } from '@/constants/biography';
import { Hero } from './Hero';
import { useRouter } from 'next/navigation';
import { useScrollStore } from '@/store/zustand'; // Import your Zustand store
import { useEffect } from 'react';
import BlogCardContainer from '@/components/blog/BlogCardContainer';
import FeatureArticle from './FeatureArticle';
import { getFeatureList } from '@/data/action';

const breadcrumbItems = [{ title: 'User', link: '/dashboard/user' }];
export default async function HomeContainer() {
    const featureArticle = await getFeatureList();

    return (
        <>
            <FeatureArticle articles={featureArticle} />
            <BlogCardContainer />
        </>
    );
}
