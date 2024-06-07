import { MDXRemote, MDXRemoteSerializeResult, compileMDX } from 'next-mdx-remote/rsc'
import { getPostBySlug, POSTS_PATH } from '../../../../lib/mdx';
import { serialize } from 'next-mdx-remote/serialize';
import Link from 'next/link';
import { absoluteUrl, cn } from '@/lib/utils';
import { ChevronLeft, Clock } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import readTime from 'reading-time';
import { Separator } from '@/components/ui/separator';
import remarkToc from 'remark-toc';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { Icons } from '@/components/icons';
import { Element } from 'hast';
import { siteConfig } from '@/config/site';

interface AutolinkContentProps {
  properties: Element['properties'];
}
type Params = {
  params: {
    slug: string;
  };
};


export async function generateMetadata({ params }: { params: { slug: string } }) {

  const { content, frontmatter } = await getPostBySlug(params.slug); // Destructure frontMatter correctly here

  if (content) {
    const { title,description } = frontmatter;
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
        url: absoluteUrl(params.slug),
        images: [
          {
            url: ogUrl.toString(),
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
        images: [ogUrl.toString()],
      },
    }
  } else {
    // Handle the case where article is null...
  }


}


export default async function PostPage({ params }: {
  params: { slug: string };
}) {

  const { content, frontmatter } = await getPostBySlug(params.slug); // Destructure frontMatter correctly here
  return (
    <article className="px-4 sm:px-6 md:px-8">
      <div className="relative max-w-3xl mx-auto">
        <Link
          href="/about-osho"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute left-[-200px] top-14 hidden xl:inline-flex"
          )}
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          See all posts
        </Link>
        <div>
          <h1 className="mt-2 inline-block font-heading text-4xl leading-tight lg:text-5xl">
            {frontmatter.title}
          </h1>
        </div>
        <div>
          <h2 className="mt-2 inline-block font-heading text-3xl leading-tight lg:text-5xl">
            {frontmatter.subtitle}
          </h2>
        </div>
        <div>
          <h3 className="mt-2 inline-block font-heading text-2xl leading-tight lg:text-5xl">
            {frontmatter.part}
          </h3>
        </div>


        <Separator className="my-4" />
        <div className="prose prose-lg prose-p:mb-2 text-justify dark:prose-invert max-w-3xl">
          <div
            className="prose-strong:text-gray-900 dark:prose-em:text-slate-400 dark:prose-strong:text-slate-400 prose-em:text-gray-900">
            {content}

          </div>

        </div>

        <hr className="mt-12" />
        <div className="flex justify-center py-6 lg:py-10">
          <Link href="/" className={cn(buttonVariants({ variant: "ghost" }))}>
            <ChevronLeft className="mr-2 h-4 w-4" />
            See all posts
          </Link>
        </div>
      </div>
    </article>
  );
}