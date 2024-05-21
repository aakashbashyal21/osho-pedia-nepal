
import { MetadataRoute } from "next";
import { getAllBlogList } from "@/data/action";
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const URL = process.env.NEXT_PUBLIC_APP_URL;

  const blogList = await getAllBlogList();

  const pages = [
    {
      url: `${URL}`, // Home Page
    },

  ];

  const posts = blogList.map(({ urlSlug }) => ({
    url: `${URL}blog/${urlSlug}`,
  }));

  return [...posts, ...pages];

}