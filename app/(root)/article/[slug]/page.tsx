
import BlogDetail from '@/components/blog/article-detail';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/config/site";
import { getBlogBySlug } from '@/data/action';
import { absoluteUrl } from "@/lib/utils";
type Params = {
    params: {
        slug: string;
    };
};
export async function generateMetadata({ params }: { params: { slug: string } }) {

    const article = await getBlogBySlug(params?.slug);

    if (article) {
        const { title, description } = article;
        const url = process.env.NEXT_PUBLIC_APP_URL;

        const ogUrl = new URL(`${url}/api/og`)
        ogUrl.searchParams.set("heading", title);
        ogUrl.searchParams.set("type", siteConfig.name)
        ogUrl.searchParams.set("mode", "light")
        return {
            title: title,
            description: description,
            openGraph: {
                title: title,
                description: description,
                type: "article",
                url: absoluteUrl(params?.slug),
                images: [
                    {
                        url: `${article?.image.url}`,
                        width: 1200,
                        height: 630,
                        alt: title,
                    },
                ],
            },
            twitter: {
                card: "summary_large_image",
                title: title,
                description: description,
                images: `${article?.image.url}`,
            },
        }
    } else {
        // Handle the case where article is null...
    }


}
export default async function ArticleDetail({ params }: Params) {

    const { slug } = params;
    const article = await getBlogBySlug(slug);
    return (
        <ScrollArea className="h-full" >
            <div className="flex-1 space-y-4">
                <BlogDetail article={article} />
            </div>
        </ScrollArea>
    );
}
