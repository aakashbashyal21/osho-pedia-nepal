import Providers from '@/components/layout/providers';
import { Toaster } from '@/components/ui/toaster';
import '@uploadthing/react/styles.css';
import type { Metadata } from 'next';
import { Inter, Noto_Serif_Devanagari} from 'next/font/google';
import './globals.css';
import { auth } from '@/auth';

const inter = Inter({ subsets: ['latin'] });
const notoSansDevanagari = Noto_Serif_Devanagari ({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-noto-sans-devanagari'
})
export const metadata: Metadata = {
  title: "ओशो-पिडिया नेपाल",
  description: "ओशो पेडिया हाम्रो आत्म-परिवर्तनको यात्रामा प्रेरणा र मार्गदर्शन गर्न प्रस्तुत गरिएको छ। ओशो पिडियामा, हामीले ओशोको जीवन दृष्टि, ओशोको अति सरल र वैज्ञानिक ध्यान विधि, ओशोका प्रवचनहरू, पुस्तकहरू, लेखहरू, र हाम्रो प्रज्ञा विकासका लागि विभिन्न विषयहरूमा ओशोको धारा प्रवाह प्रवचनहरू नेपाली भाषामा प्रस्तुत गरेका छौं।",
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
