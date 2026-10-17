// Relume section header: H2 + intro paragraph, left-aligned and width-capped.
export const SectionHeader = ({ heading, description }: { heading: string; description: string }) => (
  <div className="mb-12 max-w-3xl md:mb-18 lg:mb-20">
    <h2 className="mb-5 text-h2 md:mb-6">{heading}</h2>
    <p className="max-w-[35rem] text-medium">{description}</p>
  </div>
);
