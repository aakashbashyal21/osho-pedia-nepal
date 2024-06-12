import { unstable_noStore as noStore } from 'next/cache';


import { MetadataRoute } from "next";
import { bioItem } from '@/constants/biography';
import { getAllBlogList, getAllMeditationList } from "@/data/action";
import { title } from "process";
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
   const URL = process.env.NEXT_PUBLIC_APP_URL;

  const blogList = await getAllBlogList();
  const pages = [
    {
      url: `${URL}`, // Home Page
      tile: "Osho Pedia",
      description: ""
    },
    {
      url: `${URL}about-osho`,
      tile: "Biography of Osho",
      description: `Biography of Osho page provides a comprehensive overview of the life and teachings of Osho, also known as Bhagwan Shree Rajneesh. 
          It likely covers key events from his early life in India to his rise as a spiritual leader, his establishment of the Rajneesh movement, and his controversial legacy. 
          Additionally, it may delve into his philosophy, meditation techniques, and impact on spirituality and culture worldwide.`
    }
  ];

  const posts = blogList.map(({ urlSlug, title, description }) => ({
    url: `${URL}article/${urlSlug}`,
    title: title,
    description: description
  }));

  const aboutOsho = bioItem.map(({ urlSlug, title, description }) => ({
    url: `${URL}osho/${urlSlug}`,
    title: title,
    description: description
  }));

  return [...posts, ...pages, ...aboutOsho];

}