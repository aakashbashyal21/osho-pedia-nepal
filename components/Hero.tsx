'use client'

import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { siteConfig } from '@/config/site';

import Image from "next/image";
import { MoveDown } from "lucide-react";
import { useScrollStore } from "@/store/zustand";

export const Hero = () => {

    const setScrollToBio = useScrollStore((state: any) => state.setScrollToBio);

    const handleButtonClick = () => {
        setScrollToBio(true); // Set scroll state to true
    };
    return (

        <div className="relative h-screen">
            <div className="absolute inset-0">
                <Image
                    src="https://www.sannyas.wiki/images/thumb/6/66/Osho_HD_052.jpg/1200px-Osho_HD_052.jpg?20150514163234"
                    alt="Background Image"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    className="z-0"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="absolute inset-0 flex flex-col justify-center items-center">
                <div className="w-full px-4 text-center lg:absolute lg:right-10 lg:bottom-10 lg:text-right lg:w-auto lg:px-0"> {/* Adjusted for right alignment on large screens */}
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-lg text-yellow-300 animate-fade-in">
                        Never Born – Never Died
                    </h1>
                    <p className="mt-6 text-xl md:text-2xl drop-shadow-md text-yellow-300">
                        Only visited this planet Earth between
                    </p>
                    <p className="mt-4 text-xl md:text-2xl drop-shadow-md text-yellow-300">
                        December 11, 1931 and January 19, 1990
                    </p>
                </div>
                <div className="absolute bottom-10 animate-bounce cursor-pointer" onClick={handleButtonClick}>
                    <div className="h-16 w-16 flex items-center justify-center rounded-full bg-yellow-300 hover:bg-yellow-400 transition duration-300 ease-in-out">
                        <MoveDown className="h-8 w-8 text-black" />
                    </div>
                </div>
            </div>
        </div>
    );
};