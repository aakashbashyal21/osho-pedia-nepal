import { cn } from "@/lib/utils";

export const customMDXComponents = {
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={cn(
        "mt-2 scroll-m-20 leading-[3rem] text-2xl md:text-3xl lg:text-[2rem] font-bold text-grayscale-textIcon-title",
        className
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={cn(
        "mt-2 scroll-m-20 leading-[2rem] text-base md:text-lg lg:text-xl text-grayscale-textIcon-body",
        className
      )}
      {...props}
    />
  ),
};