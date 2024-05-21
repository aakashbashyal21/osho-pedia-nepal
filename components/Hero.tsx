import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export const Hero = () => {
    return (
        <section className="">
            <div className="py-4 px-4 mx-auto max-w-screen-xl text-center lg:py-4 lg:px-12">
                <h1 className="mb-4 text-4xl font-bold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">ओशोको कालातीत प्रज्ञाको खजाना</h1>
                <p className="text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">ओशोका शिक्षाहरूमा अन्तर्दृष्टि, लेख र छलफलहरूको विस्तृत संग्रह पत्ता लगाउनुहोस्। अध्यात्म, ध्यान, माइन्डफुलनेसमा विषयहरू अन्वेषण गर्नुहोस्, र आत्म-खोज र रूपान्तरणको यात्रामा लाग्नुहोस्।</p>
            </div>
            <div className="shadow"></div>

        </section>
    );
};