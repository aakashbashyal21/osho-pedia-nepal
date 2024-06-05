import { MDXRemote, MDXRemoteSerializeResult, compileMDX } from 'next-mdx-remote/rsc'
import { getPostBySlug, POSTS_PATH } from '../../../../lib/mdx';
import { useMDXComponents } from '../../mdx-components';
import { serialize } from 'next-mdx-remote/serialize';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ChevronLeft, Clock } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import readTime from 'reading-time';
import { Separator } from '@/components/ui/separator';
import remarkToc from 'remark-toc';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from "rehype-autolink-headings";

type Params = {
  params: {
    slug: string;
  };
};
export default async function PostPage({ params }: {
  params: { slug: string };
}) {


  const source = await getPostBySlug(params.slug); // Destructure frontMatter correctly here
  const components = useMDXComponents({});
  const { content, frontmatter } = await compileMDX<{ title: string, subtitle: string, part: string }>({
    source: source,
    components: components,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm, remarkToc],
        rehypePlugins: [rehypeSlug,rehypeAutolinkHeadings]
        // ... other options
      }
    },

  });
  console.log(content)
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