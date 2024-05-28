import BiographySection from '@/components/about-osho/BiographySection';
import BreadCrumb from '@/components/breadcrumb';
import { UserClient } from '@/components/tables/user-tables/client';
import { ScrollArea } from '@/components/ui/scroll-area';
import { users } from '@/constants/data';
import { bioItem } from '@/constants/biography';

const breadcrumbItems = [{ title: 'User', link: '/dashboard/user' }];
export default function page() {

    return (
        <>
            <ScrollArea className="h-full">

                <main className="container mx-auto px-4">
                    <section className="text-center py-20">
                        <h1 className="text-4xl font-bold">Never Born Never Died
                        </h1>
                        <p className="text-lg mt-4">Only Visited this
                            Planet Earth between</p>
                        <p className="text-lg mt-4">Dec 11, 1931 – Jan 19, 1990</p>
                        <img src="https://placehold.co/600x400" alt="Abraham Lincoln" className="mx-auto mt-4" />
                    </section>
                    {bioItem.map((item, index) => (
                        <BiographySection key={index} {...item} />
                    ))}
                </main>


            </ScrollArea>

        </>
    );
}
