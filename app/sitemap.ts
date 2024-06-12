import { unstable_noStore as noStore } from 'next/cache';


import { MetadataRoute } from "next";
import { bioItem } from '@/constants/biography';
import { getAllBlogList, getAllMeditationList } from "@/data/action";
import { title } from "process";
import { url } from 'inspector';
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const URL = process.env.NEXT_PUBLIC_APP_URL;

  const blogList = await getAllBlogList();
  const pages = [
    {
      url: `${URL}`, // Home Page
    },
    {
      url: `${URL}about-osho`,
    },
    {
      url: `${URL}meditation`
    }
  ];

  const posts = blogList.map(({ urlSlug, title, description }) => ({
    url: `${URL}article/${urlSlug}`,
  }));

  const aboutOsho = bioItem.map(({ urlSlug, title, description }) => ({
    url: `${URL}osho/${urlSlug}`,
  }));

  return [...posts, ...pages, ...aboutOsho];

}