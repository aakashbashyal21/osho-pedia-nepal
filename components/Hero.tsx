import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { siteConfig } from '@/config/site';

import Image from "next/image";

export const Hero = () => {
    return (

        <section className="dark:bg-gray-900 pt-16">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">{siteConfig.heroSectionTitle}</h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">{siteConfig.description}</p>
                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                        <Image
                            alt='Mountains'
                            src='/OSHO_HD_1.jpg'
                            layout='fill'
                            objectFit='contain'
                        />
                    </div>                </div>
            </div>
        </section>

    );
};