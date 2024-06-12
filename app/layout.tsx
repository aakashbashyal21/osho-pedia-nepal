import Providers from '@/components/layout/providers';
import { Toaster } from '@/components/ui/toaster';
import '@uploadthing/react/styles.css';
import type { Metadata } from 'next';
import { Inter, Archivo_Narrow } from 'next/font/google';
import './globals.css';
import { auth } from '@/auth';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import ScrollToTop from '@/components/ScrollTop';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
const inter = Inter({ subsets: ['latin'] });
const archivoNarrow = Archivo_Narrow({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-archivo-narrow'
})


export const metadata: Metadata = {
  title: "Osho Pedia",
  description: siteConfig.description,
  icons: {
    icon: '/logo.svg'
  },
  keywords: [
    "Meditation",
    "Mindfulness",
    "Spirituality",
    "Personal Growth",
    "Philosophy",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.jpg`],
    creator: "oshopedia",
  },
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen bg-background antialiased",
        `${inter.className}`,
        `${archivoNarrow.className}`
      )}
      >
        
        <Providers session={session}>
          <Toaster />
          {children}
          <ScrollToTop />
        </Providers>

      </body>
    </html>
  );
}
