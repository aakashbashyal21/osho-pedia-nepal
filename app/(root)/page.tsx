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

export default async function page() {
  const blogData = await getBlogList(1);

  return (
    <ScrollArea className="h-full" >
      <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
        <Hero />

        <Separator className="my-4" />

        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <div className="mx-auto grid max-w-[70rem] flex-1 auto-rows-max gap-6 p-4 lg:gap-8">
            <div className="grid gap-6 md:grid-cols-[2fr_1fr] lg:grid-cols-3 lg:gap-8">
              <div className="grid auto-rows-max items-start gap-4 md:col-span-2 lg:col-span-2 lg:gap-4">
                {blogData}
                <LoadMore />
              </div>
              <div className="hidden md:block lg:hidden"></div> {/* This empty div ensures the layout remains consistent */}
              <div className="grid auto-rows-max items-start gap-6 lg:gap-8 hidden md:block lg:col-span-1">
                <Card x-chunk="dashboard-07-chunk-3" className="hidden lg:block">
                  <CardHeader>
                    <CardTitle>Select Post</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      <div className="grid gap-3">
                        <Label htmlFor="status">Status</Label>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>

        {/* <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 gap-4">
        </section>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 gap-4">
          <>
          </section> */}

        <Footer />
      </div>
    </ScrollArea>
  );
}
