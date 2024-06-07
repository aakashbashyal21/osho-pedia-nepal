import ScrollToTop from '@/components/ScrollTop';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import Sidebar from '@/components/layout/sidebar';
import type { Metadata } from 'next';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <header className="container z-40 bg-background">
          <div className="flex h-20 items-center justify-between py-6">
            <Header />

          </div>
        </header>
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </>
  );
}
