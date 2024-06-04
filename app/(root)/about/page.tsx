import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote/rsc'
import { getPostBySlug, getAllPostSlugs, POSTS_PATH } from '../../../lib/mdx';
import  { customMDXComponents } from "@/components/mdx-components"
export interface Props {
  source: MDXRemoteSerializeResult;
  frontmatter: {
    title: string;
    date: string;
  };
}
export default async function PostPage() {
  const { props: { source, frontMatter } } = await getPostBySlug(); // Destructure frontMatter correctly here
  console.log('MDX Source:', source);
  console.log('Frontmatter:', frontMatter);

  console.log(source)
  return (
    <div className="pt-16">
      <h1>{frontMatter.title}</h1>
      <MDXRemote source={source} components={customMDXComponents}/>
    </div>
  );
}
