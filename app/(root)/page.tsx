import { CalendarDateRangePicker } from '@/components/date-range-picker';
import { Overview } from '@/components/overview';
import { RecentSales } from '@/components/recent-sales';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
export interface Artwork {
  artist: string
}
import { Separator } from '@/components/ui/separator';
import LoadMore from '@/components/LoadMore';
import { Hero } from '@/components/Hero';
import Footer from '@/components/layout/footer';
import { getBlogList } from '@/data/action';

export default async function page() {
  const blogData = await getBlogList(1);

  return (
    <ScrollArea className="h-full" >
      <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
        <Hero />

        <Separator className="my-4" />

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {blogData}
        </section>
        <LoadMore />
        <Footer />
      </div>
    </ScrollArea>
  );
}
