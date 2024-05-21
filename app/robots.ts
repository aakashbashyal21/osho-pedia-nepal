// app/robots.ts  (App Router)
 
import { MetadataRoute } from "next";
 
const robots: MetadataRoute.Robots = () => {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/", // Disallow private routes
    },
    sitemap: `${process.env.NEXT_PUBLIC_APP_URL}sitemap.xml`,
  };
};
 
export default robots;