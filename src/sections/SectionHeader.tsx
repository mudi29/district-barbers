// Relume section header: H2 + intro paragraph, left-aligned and width-capped.
export const SectionHeader = ({ heading, description }: { heading: string; description: string }) => (
  <div className="mb-12 max-w-3xl md:mb-18 lg:mb-12">
    <h2 className="mb-2 text-h2">{heading}</h2>
    <p className="max-w-[35rem] text-regular">{description}</p>
  </div>
);
