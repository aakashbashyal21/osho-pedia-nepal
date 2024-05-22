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
import { Label } from '@/components/ui/label';
import BlogCardContainer from '@/components/blog/BlogCardContainer';

export default async function page() {
  const blogData = await getBlogList(1);

  return (
    <ScrollArea className="h-full" >
      <Hero />
      <BlogCardContainer />
      <Footer />
    </ScrollArea>
  );
}
