/** @type {import('next').NextConfig} */

import remarkGfm from 'remark-gfm'
import createMDX from '@next/mdx'
import remarkToc from "remark-toc";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: {
    domains: ["avatars.githubusercontent.com", "images.unsplash.com", "media.graphassets.com", "flowbite.s3.amazonaws.com", "www.sannyas.wiki"],
  },
}

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [remarkGfm, [remarkToc, { heading: 'toc|table[ -]of[ -]contents?' }]],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behaviour: 'append',
          properties: {
            ariaHidden: true,
            tabIndex: -1,
            className: 'hash-link'
          }
        }
      ]
    ]
  },
})

// Wrap MDX and Next.js config with each other
export default withMDX(nextConfig)
