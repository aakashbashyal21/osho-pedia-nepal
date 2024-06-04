import React from "react";
import Image from "next/image";
import { BlogItem } from "@/types";
import { cn, formatDate, removeUnderscores } from "@/lib/utils";
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



export function BlogArtwork({
  blog,
  aspectRatio = "portrait",
  className,
  index,
  ...props
}: BlogArtworkProps) {
  const { title, description, createdAt, categories, image } = blog;

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
      <Card className="flex flex-col md:flex-row justify-between h-full bg-white-0 border-none shadow-none px-4">
        <div className="flex flex-col justify-between md:w-2/3">
          <div className="flex items-center">
            {categories.map(category => (
              <span key={category} className="inline-flex items-center justify-center text-center bg-gray-100 rounded-md py-1 px-2 text-sm text-gray-600 mr-2 mt-4 md:mt-0">
                {removeUnderscores(category)}
              </span>
            ))}
          </div>
          <CardHeader className="px-0">
            <CardTitle className="font-bold text-2xl mb-1">{title}</CardTitle>
            <CardDescription className="text-base text-gray-700 mb-2 line-clamp-3">{description}</CardDescription>
          </CardHeader>
          <CardFooter className="flex items-center justify-between px-0">
            <div>
              <span className="text-sm text-red-700">Posted on {formatDate(blog.createdAt)}</span>
            </div>
          </CardFooter>
        </div>

        {image && (
          <div className="md:w-1/3 md:flex-shrink-0 order-first md:order-none flex items-center justify-center">
            <CardImage
              src={blog.image?.url}
              alt={blog.title}
              className="object-cover rounded-md transition-all hover:scale-105 w-full h-full md:w-48 md:h-36"
            />
          </div>
        )}
      </Card>





    </MotionDiv>


  );
}
