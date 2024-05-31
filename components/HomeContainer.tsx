import BiographySection from '@/components/about-osho/BiographySection';
import { bioItem } from '@/constants/biography';
import { Hero } from './Hero';
import { useRouter } from 'next/navigation';
import { useScrollStore } from '@/store/zustand'; // Import your Zustand store
import { useEffect } from 'react';
import BlogCardContainer from '@/components/blog/BlogCardContainer';

const breadcrumbItems = [{ title: 'User', link: '/dashboard/user' }];
export default async function HomeContainer() {

    return (
        <>
            <Hero />                    
            <BlogCardContainer />
        </>
    );
}
