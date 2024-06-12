import BiographySection from '@/components/about-osho/BiographySection';
import { bioItem } from '@/constants/biography';

export async function generateMetadata({ params }: { params: { slug: string } }) {
  return {
    title: "Biography of Osho: Life, Teachings, and Legacy",
    description: "Explore the complete biography of Osho, from his early life to his teachings and legacy. Discover how Osho's meditation techniques and spiritual insights have impacted millions worldwide.",
    keywords: "Osho biography, life of Osho, Osho teachings, Osho legacy, spiritual growth, meditation techniques, mindfulness, Osho early life, Osho death, Osho history",
  }
}
export default function page() {

  return (
    <>
      <main className="container mx-auto px-4 sm:px-6 md:px-8 flex flex-col items-center justify-start">
        {bioItem.map((item, index) => (
          <BiographySection key={index} {...item} />
        ))}
      </main>

    </>
  );
}
