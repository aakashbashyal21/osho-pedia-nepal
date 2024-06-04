// lib/mdx.js
import { serialize } from 'next-mdx-remote/serialize';
import matter from 'gray-matter';
import fs from "fs";

import path from 'path';

// POSTS_PATH is useful when you want to get the path to a specific file
export const POSTS_PATH = path.join(process.cwd(), "content/biography");

// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
export const postFilePaths = fs
    .readdirSync(POSTS_PATH)
    // Only include md(x) files
    .filter((path) => /\.mdx?$/.test(path));

const filename = 'osho-past-life.mdx';

export async function getPostBySlug() {
    const postFilePath = path.join(POSTS_PATH, filename);
    const source = await fs.readFileSync(postFilePath);

    const { content, data } = matter(source);

    const mdxSource = await serialize(content, {
        // Optionally pass remark/rehype plugins
        mdxOptions: {
            remarkPlugins: [],
            rehypePlugins: [],
        },
        scope: data,
    });

    return {
        props: {
            source: mdxSource,
            frontMatter: data,
        },
    };
}

export async function getAllPostSlugs() {
    const filenames = await fs.readdir(postsDirectory);
    return filenames.map((filename) => filename.replace('.mdx', ''));
}

