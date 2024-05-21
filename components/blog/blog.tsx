import React from "react";
import Image from "next/image";
import { BlogItem } from "@/types";
import { cn } from "@/lib/utils";
import { MotionDiv } from "../Motion";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardImage
} from "@/components/ui/card"
import { BellRing, Check } from "lucide-react";
// import { Switch } from "@radix-ui/react-switch";
import { Button } from "../ui/button";
const stagger = 0.25;

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
interface BlogArtworkProps extends React.HTMLAttributes<HTMLDivElement> {
  blog: BlogItem;
  aspectRatio?: 'portrait' | 'square';
  index: number;
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

export function BlogArtwork({
  blog,
  aspectRatio = "portrait",
  className,
  index,
  ...props
}: BlogArtworkProps) {
  const { title, description,createdAt, keywords } = blog;

  return (
    <MotionDiv
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{
        delay: index * stagger,
        ease: "easeInOut",
        duration: 0.5,
      }}
      viewport={{ amount: 0 }}
      className="rounded relative"
    >
      <Card className="flex flex-col justify-between h-full bg-stone-100 hover:bg-stone-50 hover:border-blue-400 ">
         {/*div className="flex-grow p-4">
          <CardImage
            src={blog.image?.url}
            alt={blog.title}
            className={cn(
              "object-cover transition-all hover:scale-105 rounded-md aspect-[4/3]",
            )}>

          </CardImage> 
        </div>*/}
        <CardHeader>
          <CardTitle className="noto-sans-devanagari font-bold text-2xl mb-2">{title}</CardTitle>
          <CardDescription className="noto-sans-devanagari font-regular text-lg mb-2 line-clamp-3">{description}</CardDescription>

        </CardHeader>
        {/* <div className="px-6 pt-4">
          <span className="text-sm text-primary">{formatDate(blog.createdAt)}</span>
        </div> */}
   
        <CardFooter>
          {keywords.map(tag => (
            <span key={tag} className="inline-block bg-gray-200 rounded-md py-1 px-2 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #{tag}
            </span>
          ))}

        </CardFooter>
      </Card>

    </MotionDiv>


  );
}
