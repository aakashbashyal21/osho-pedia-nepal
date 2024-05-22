import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export const Hero = () => {
    return (

        <section className="dark:bg-gray-900">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">ओशोको दर्शनको सागरमा आत्म-रूपांतरणको लागि</h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">ओशो पेडिया मानिसलाई उसको आत्म-परिवर्तनको यात्रामा प्रेरणा र मार्गदर्शन गर्न प्रस्तुत गरिएको छ। ओशो पिडियामा, हामीले ओशोको जीवन दृष्टि, ओशोको अति सरल र वैज्ञानिक ध्यान विधि, ओशोका प्रवचनहरू, पुस्तकहरू, लेखहरू, र हाम्रो  प्रज्ञा विकासका लागि विभिन्न विषयहरूमा ओशोको धारा प्रवाह प्रवचनहरू हाम्रो नेपाली भाषामा प्रस्तुत गरेका छौं।</p>
                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                        <Image
                            alt='Mountains'
                            src='/osho_hd_1.jpg'
                            layout='fill'
                            objectFit='contain'
                        />
                    </div>                </div>
            </div>
        </section>

    );
};