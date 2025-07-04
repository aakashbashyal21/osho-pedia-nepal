import { Button } from "./ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { siteConfig } from '@/config/site';
import Image from "next/image";
import { MoveDown } from "lucide-react";
import { useScrollStore } from "@/store/zustand";
import Link from "next/link";

export const Hero = () => {

    return (

        <section className="space-y-6 pb-8 pt-4 md:pb-12 md:pt-10">
            <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
                <Link
                    href={siteConfig.links.twitter}
                    className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
                    target="_blank"
                >
                    OSHO
                </Link>
                <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
                    Never Born – Never Died

                </h1>
                <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                </p>
                <div className="space-x-4">
                    <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                        Only Visited this
                        Planet Earth between
                    </p>                <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                        Dec 11, 1931 – Jan 19, 1990


                    </p>
                </div>
            </div>
        </section>




    );
};
