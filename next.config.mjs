/** @type {import('next').NextConfig} */

import remarkGfm from 'remark-gfm'
import createMDX from '@next/mdx'

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: {
    domains: ["avatars.githubusercontent.com", "images.unsplash.com", "media.graphassets.com","flowbite.s3.amazonaws.com","www.sannyas.wiki"],
  },
}

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
})
 
// Wrap MDX and Next.js config with each other
export default withMDX(nextConfig)
