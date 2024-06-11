'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BlogArtwork } from '@/components/Blogs/Blog';
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationPrevious,
    PaginationNext,
} from "@/components/ui/pagination";
import { BlogItem } from '@/types';
import { cn } from '@/lib/utils';
import { getRecentMeditationList } from '@/data/action';

const Page = () => {
    const [blogs, setBlogs] = useState<BlogItem[]>([]);
    const [totalBlogs, setTotalBlogs] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const limitPerPage = 10; // Fixed limit per page
  
    useEffect(() => {
      const fetchData = async () => {
        const { blogs: newBlogs, totalCount } = await getRecentMeditationList(currentPage);
        setBlogs(newBlogs);
        setTotalBlogs(totalCount);
      };
  
      fetchData();
    }, [currentPage]);
  
    const handlePaginationClick = (page: number) => {
      setCurrentPage(page);
    };
  
    const getTotalPages = (totalBlogs: number) => {
      return Math.ceil(totalBlogs / limitPerPage);
    };
  
    const someNumbersList = Array.from({ length: getTotalPages(totalBlogs) }, (_, index) => index + 1);
    const lastPage = getTotalPages(totalBlogs); // Calculate the last page here

    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                {blogs.map((blog, index) => (
                    <Link key={blog.title} href={`/article/${blog.urlSlug}`} className="group">
                        <div className="w-full">
                            <BlogArtwork
                                key={blog.title}
                                blog={blog}
                                className="w-full"
                                aspectRatio="portrait"
                                index={index}
                            />
                        </div>
                    </Link>
                ))}
            </div>
            <Pagination currentPage={currentPage} lastPage={lastPage}>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious
                        
                            href="#"
                            onClick={() => handlePaginationClick(currentPage - 1)}
                        />
                    </PaginationItem>

                    {}

                    {someNumbersList.map((page, key) => (
                        <PaginationItem key={key}>
                            <PaginationLink
                                href="#"
                                onClick={() => handlePaginationClick(page + 1)}
                                isActive={currentPage === page + 1}
                            >
                                {page + 1}
                            </PaginationLink>
                        </PaginationItem>
                    ))}
                    <PaginationItem>
                        <PaginationNext
                            href="#"
                            onClick={() => handlePaginationClick(currentPage + 1)}
                        />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    );
};

export default Page;
