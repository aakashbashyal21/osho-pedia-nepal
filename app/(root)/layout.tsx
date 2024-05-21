import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import Sidebar from '@/components/layout/sidebar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "ओशो-पिडिया नेपाल",
  description: "ओशोद्वारा अन्वेषण गरिएका विषयहरूको विस्तृत गहिराईमा डुब्नुहोस्, अध्यात्म, ध्यान, माइन्डफुलनेस र अन्य बिभिन्न विषयमा मार्गदर्शन र ज्ञान प्रदान गर्नुहोस्। हामीसँग आत्म-खोज र परिवर्तनको यात्रामा सामेल हुनुहोस् किनकि हामीले ओशोको कालातीत ज्ञान प्रस्तुति गरेका छौं।",
  icons: {
    icon: '/logo.png'
  }

};

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <main className="w-full pt-16">{children}</main>
      </div>

    </>
  );
}
