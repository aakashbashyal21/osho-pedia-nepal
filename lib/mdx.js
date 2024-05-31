// lib/mdx.js
import { serialize } from 'next-mdx-remote/serialize';
import { promises as fs } from 'fs';
import matter from 'gray-matter';

import path from 'path';

const postsDirectory = path.join(process.cwd(), 'content/biography');

export async function getPostBySlug() {
    const filePath = path.join(postsDirectory, `osho-past-life.mdx`);

    const mdxText = await fs.readFile(filePath, 'utf8');

    /// Parse the front matter and content
    const { content, data } = matter(mdxText);

    // Serialize the content
    const mdxSource = await serialize(content, { scope: data });

    return {
        source: mdxSource,
        frontmatter: data,
    };
}

export async function getAllPostSlugs() {
    const filenames = await fs.readdir(postsDirectory);
    return filenames.map((filename) => filename.replace('.mdx', ''));
}
