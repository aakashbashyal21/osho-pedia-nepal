import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { siteConfig } from '@/config/site';

import Image from "next/image";

export const Hero = () => {
    return (

        <section className="dark:bg-gray-900 pt-16 px-8">
            <div className="grid max-w-screen-xl py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-2xl font-extrabold tracking-tight leading-loose  md:text-5xl xl:text-6xl dark:text-white">{siteConfig.heroSectionTitle}</h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 text-xl lg:mb-8 md:text-xl lg:text-2xl dark:text-gray-400">{siteConfig.description}</p>
                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <Image src="/Osho_HD_1.jpg"
                        width={0}
                        height={0}
                        alt="Osho photo"
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }} // optional
                    />
                </div>
            </div>
        </section>

    );
};