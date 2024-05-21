 
import { MetadataRoute } from "next";
 
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const URL = process.env.NEXT_PUBLIC_APP_URL;
 
  return  [
    {
      url: `${URL}/`, // Home Page
      lastModified: new Date(),
      priority: 1.0,
      changeFrequency: "weekly",
    },
    
  ];
}