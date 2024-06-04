import { BiographyItem } from "@/types";
import { Button } from "../ui/button";
import Link from "next/link";
import { link } from "fs";

type NewType = BiographyItem;

const BiographySection = ({ title, subtitle }: NewType) => {
  return (
    <div className="mb-8 text-center">
      <Link href={`/article/${title}`}>
        <Button variant="link" className="text-2xl sm:text-3xl md:text-4xl font-bold text-black transition duration-300 inline-block cursor-pointer">
          {title}
        </Button>
      </Link>
      <p className="text-lg sm:text-xl md:text-2xl mt-2 uppercase">{subtitle.toUpperCase()}</p>
    </div>

  );
};

export default BiographySection;
