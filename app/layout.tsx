import Providers from '@/components/layout/providers';
import { Toaster } from '@/components/ui/toaster';
import '@uploadthing/react/styles.css';
import type { Metadata } from 'next';
import { Inter, Noto_Sans_Devanagari } from 'next/font/google';
import './globals.css';
import { auth } from '@/auth';

const inter = Inter({ subsets: ['latin'] });
const notoSansDevanagari = Noto_Sans_Devanagari({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-noto-sans-devanagari'
})
export const metadata: Metadata = {
  title: "ओशो-पिडिया नेपाल",
  description: "ओशोक अन्तर्दृष्टि, विविध लेख, गतिविधि र छलफलहरूको विस्तृत भण्डारको माध्यमबाट गहिरो अन्वेषण गर्नुहोस् । ओशोद्वारा अन्वेषण गरिएका विषयहरूको विस्तृत गहिराईमा डुब्नुहोस्, अध्यात्म, ध्यान, माइन्डफुलनेस र अन्य बिभिन्न विषयमा मार्गदर्शन र ज्ञान प्रदान गर्नुहोस्। हामीसँग आत्म-खोज र परिवर्तनको यात्रामा सामेल हुनुहोस् किनकि हामीले ओशोको कालातीत ज्ञान प्रस्तुति गरेका छौं।",
  icons: {
    icon: '/logo.svg'
  }

};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${notoSansDevanagari.className} overflow-hidden`}>
        <Providers session={session}>
          <Toaster />
          {children}
        </Providers>
      </body>
    </html>
  );
}
