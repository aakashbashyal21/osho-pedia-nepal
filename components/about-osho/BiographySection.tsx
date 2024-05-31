import { BiographyItem } from "@/types";

type NewType = BiographyItem;

const BiographySection = ({ title, subtitle, description, imageSrc, readMoreLink, reverse }: NewType) => {
  return (
    <section className="flex justify-center py-2 px-4">
      <div className="w-full flex flex-col items-center">
        <div className={`w-full ${reverse ? 'order-1' : ''}`}>
          <div className="text-container">
            <h2 className="text-lg lg:text-3xl font-bold mb-2 text-gray-900">{title} {subtitle}</h2>
            <h3 className="text-md lg:text-xl font-semibold mb-2 text-gray-800"></h3>
            <a href={readMoreLink} className="text-blue-500 hover:underline">Read More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BiographySection;
