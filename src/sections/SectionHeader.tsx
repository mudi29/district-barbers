import { cn } from "@/lib/utils";

// Relume section header: H2 + intro paragraph, left-aligned and width-capped.
export const SectionHeader = ({
  heading,
  description,
  className,
}: {
  heading: string;
  description: string;
  className?: string;
}) => (
  <div className={cn("mb-12 max-w-3xl md:mb-18 lg:mb-12", className)}>
    <h2 className="mb-2 text-h2">{heading}</h2>
    <p className="max-w-[35rem] text-regular">{description}</p>
  </div>
);
