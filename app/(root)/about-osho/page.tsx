import BiographySection from '@/components/about-osho/BiographySection';
import BreadCrumb from '@/components/breadcrumb';
import { UserClient } from '@/components/tables/user-tables/client';
import { ScrollArea } from '@/components/ui/scroll-area';
import { users } from '@/constants/data';
import { bioItem } from '@/constants/biography';
export default function page() {

    return (
        <>
<main className="container mx-auto px-4 sm:px-6 md:px-8 flex flex-col items-center justify-start">
  {bioItem.map((item, index) => (
    <BiographySection key={index} {...item} />
  ))}
</main>

        </>
    );
}
