
import { BiographyItem } from "@/types";

type NewType = BiographyItem;

const BiographySection = ({ title, subtitle, description, imageSrc, readMoreLink, reverse }: NewType) => {
    return (
        <section className={`noto-sans-devanagari flex flex-col md:flex-row items-center my-16 ${reverse ? 'md:flex-row-reverse' : ''} p-4`}> {/* Added padding to the parent component */}
        <div className="md:w-1/2 p-4">
            <img src={imageSrc} alt={title} className="w-full h-auto" />
        </div>
        <div className="md:w-1/2 p-4">
            <div className="bg-white shadow-lg rounded-lg p-6"> {/* Added padding to the content section */}
                <h2 className="text-3xl font-bold mb-4 text-gray-900 text-blue-800">{title}</h2> {/* Adjusted text color */}
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{subtitle}</h3> {/* Adjusted text color */}
                <p className="text-lg  mb-4 text-gray-700">{description}</p> {/* Adjusted text color */}
                <a href={readMoreLink} className="text-blue-500 hover:underline">Read More</a>
            </div>
        </div>
    </section>
    

    );
};

export default BiographySection;