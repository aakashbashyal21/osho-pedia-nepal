import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote/rsc'
import { getPostBySlug, getAllPostSlugs } from '../../../lib/mdx';

export interface Props {
  source: MDXRemoteSerializeResult;
  frontmatter: {
    title: string;
    date: string;
  };
}
export default async function PostPage() {
  const { source, frontmatter }  = await getPostBySlug();
console.log(source)
  return (
    <div className="pt-16">
       <h1>{frontmatter.title}</h1>
       <MDXRemote source={source} />
    </div>
  );
}