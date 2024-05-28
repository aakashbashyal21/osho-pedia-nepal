import BiographySection from '@/components/about-osho/BiographySection';
import BreadCrumb from '@/components/breadcrumb';
import { UserClient } from '@/components/tables/user-tables/client';
import { ScrollArea } from '@/components/ui/scroll-area';
import { users } from '@/constants/data';
import { bioItem } from '@/constants/biography';
import BlogCardContainer from '@/components/blog/BlogCardContainer';

const breadcrumbItems = [{ title: 'User', link: '/dashboard/user' }];
export default function page() {

    return (
        <>
            {/* <ScrollArea className="h-full">
            </ScrollArea> */}
            <BlogCardContainer />

        </>
    );
}
