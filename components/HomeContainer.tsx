'use client'
import BiographySection from '@/components/about-osho/BiographySection';
import { bioItem } from '@/constants/biography';
import { Hero } from './Hero';
import { useRouter } from 'next/navigation';
import { useScrollStore } from '@/store/zustand'; // Import your Zustand store
import { useEffect } from 'react';

const breadcrumbItems = [{ title: 'User', link: '/dashboard/user' }];
export default function HomeContainer() {
    const router = useRouter();
    const scrollToBio = useScrollStore((state: any) => state.scrollToBio);
    const setScrollToBio = useScrollStore((state: any) => state.setScrollToBio);
    useEffect(() => {
        if (scrollToBio) {
            const bioSection = document.getElementById('biography-section');
            if (bioSection) {
                bioSection.scrollIntoView({ behavior: 'smooth' });
                setScrollToBio(false); // Reset scroll state
            }
        }
    }, [scrollToBio, setScrollToBio]);
    return (
        <>
            <Hero />

            <div id="biography-section">
                {bioItem.map((item, index) => (
                    <BiographySection key={index}  {...item} /> // Add id to BiographySection
                ))}

            </div>

        </>
    );
}
