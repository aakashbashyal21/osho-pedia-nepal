import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export const Hero = () => {
    return (
<section className="mb-8">
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-8 lg:px-12">
        <h1 className="mb-6 text-4xl font-black tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">ओशोको दर्शनको सागरमा आत्म-रूपांतरणको लागि</h1>
        <p className="mt-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">ओशो पेडिया मानिसलाई उसको आत्म-परिवर्तनको यात्रामा प्रेरणा र मार्गदर्शन गर्न प्रस्तुत गरिएको छ। ओशो पिडियामा, हामीले ओशोको जीवन दृष्टि, ओशोको अति सरल र वैज्ञानिक ध्यान विधि, ओशोका प्रवचनहरू, पुस्तकहरू, लेखहरू, र हाम्रो  प्रज्ञा विकासका लागि विभिन्न विषयहरूमा ओशोको धारा प्रवाह प्रवचनहरू हाम्रो नेपाली भाषामा प्रस्तुत गरेका छौं।</p>
    </div>
    <div className="shadow"></div>
</section>


    );
};