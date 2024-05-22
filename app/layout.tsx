import Providers from '@/components/layout/providers';
import { Toaster } from '@/components/ui/toaster';
import '@uploadthing/react/styles.css';
import type { Metadata } from 'next';
import { Inter, Noto_Serif_Devanagari } from 'next/font/google';
import './globals.css';
import { auth } from '@/auth';
import { siteConfig } from '@/config/site';

const inter = Inter({ subsets: ['latin'] });
const notoSansDevanagari = Noto_Serif_Devanagari({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-noto-sans-devanagari'
})


export const metadata: Metadata = {
  title: "ओशो-पिडिया नेपाल",
  description: siteConfig.description,
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
