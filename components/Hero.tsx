import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export const Hero = () => {
    return (
        <section className="py-12 px-4 mx-auto max-w-screen-xl lg:py-24 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="text-center lg:text-left">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">ओशोको दर्शनको सागरमा आत्म-रूपांतरणको लागि</h1>
                    <p className="mb-6 text-lg font-normal text-gray-500 dark:text-gray-400 lg:text-xl">ओशो पेडिया मानिसलाई उसको आत्म-परिवर्तनको यात्रामा प्रेरणा र मार्गदर्शन गर्न प्रस्तुत गरिएको छ। ओशो पिडियामा, हामीले ओशोको जीवन दृष्टि, ओशोको अति सरल र वैज्ञानिक ध्यान विधि, ओशोका प्रवचनहरू, पुस्तकहरू, लेखहरू, र हाम्रो  प्रज्ञा विकासका लागि विभिन्न विषयहरूमा ओशोको धारा प्रवाह प्रवचनहरू हाम्रो नेपाली भाषामा प्रस्तुत गरेका छौं।</p>
                </div>
                <div className="flex justify-center lg:justify-end">
                    <img src="https://www.sannyas.wiki/images/5/5c/Osho_HD_036.jpg" alt="Illustration" className="w-full h-auto max-w-md" />
                </div>
            </div>
        </section>
    );
};