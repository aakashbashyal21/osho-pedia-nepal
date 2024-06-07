// lib/mdx.js
import { serialize } from 'next-mdx-remote/serialize';
import matter from 'gray-matter';
import fs from "fs";
import remarkToc from 'remark-toc';
import path from 'path';
import { remark } from 'remark';
import { useMDXComponents } from '@/app/(root)/mdx-components';
import { compileMDX } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

// POSTS_PATH is useful when you want to get the path to a specific file
export const POSTS_PATH = path.join(process.cwd(), "content/biography");

// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
export const postFilePaths = fs
  .readdirSync(POSTS_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path));

const filename = 'osho-past-life.mdx';

export async function getPostBySlug(slug: string) {
  const postFilePath = path.join(POSTS_PATH, `${slug}.mdx`);
  const fileContent = await fs.readFileSync(postFilePath);

  const components = useMDXComponents({});
  const { content, frontmatter } = await compileMDX<{ title: string, subtitle: string, part: string, description: string }>({
    source: fileContent,
    components: components,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm, remarkToc],
        rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings]
        // ... other options
      }
    },

  });


  return { content, frontmatter };
}
export async function getPostBySlugss(slug: string) {
  const postFilePath = path.join(POSTS_PATH, `${slug}.mdx`);
  const fileContent = await fs.readFileSync(postFilePath);
  const { content, data } = matter(fileContent);
  const result = await remark()
    .use(remarkToc)
    .process(content);

  return {
    content: result.toString(),
    frontmatter: data,
  };
}