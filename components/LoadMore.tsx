"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { BlogItem } from "@/types";
import { getBlogList } from "@/data/action";

let page = 2;

export type BlogArtwork = JSX.Element;

function LoadMore() {
    const { ref, inView } = useInView();

    const [data, setData] = useState<BlogArtwork[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasMoreData, setHasMoreData] = useState(true); // New state to track if there is more data to load

    useEffect(() => {
        if (inView && hasMoreData) { // Check if there is more data to load
            setIsLoading(true);
            // Add a delay of 500 milliseconds
            const delay = 500;

            const timeoutId = setTimeout(() => {
                getBlogList(page).then((res) => {
                    if (res.length > 0) {
                        setData([...data, ...res]);
                        page++;
                    } else {
                        // If no more data returned, set hasMoreData to false
                        setHasMoreData(false);
                    }
                }).finally(() => {
                    setIsLoading(false);
                });
            }, delay);

            // Clear the timeout if the component is unmounted or inView becomes false
            return () => clearTimeout(timeoutId);
        }
    }, [inView, data, isLoading, hasMoreData]); // Add hasMoreData to the dependencies array

    return (
        <>
        <section className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {data}
            </section>
            <section className="flex justify-center items-center w-full">
                <div ref={ref}>
                    {inView && isLoading && (
                        <Image
                            src="./spinner.svg"
                            alt="spinner"
                            width={56}
                            height={56}
                            className="object-contain"
                        />
                    )}
                
                </div>
            </section>
        </>
    );
}

export default LoadMore;
