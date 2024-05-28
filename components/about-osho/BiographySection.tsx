
import { BiographyItem } from "@/types";

type NewType = BiographyItem;

const BiographySection = ({ title, subtitle, description, imageSrc, readMoreLink, reverse }: NewType) => {
    return (
        <section className={`flex flex-col md:flex-row items-center my-16 ${reverse ? 'md:flex-row-reverse' : ''}`}>
            <div className="md:w-1/2 p-4">
                <h2 className="text-3xl font-bold mb-4">{title}</h2>
                <h3 className="text-xl font-semibold mb-4">{subtitle}</h3>
                <p className="mb-4">{description}</p>
                <a href={readMoreLink} className="text-blue-500 hover:underline">Read More</a>
            </div>
            <div className="md:w-1/2 p-4">
                <img src={imageSrc} alt={title} className="w-full h-auto" />
            </div>
        </section>
    );
};

export default BiographySection;