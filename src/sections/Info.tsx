import { Button } from "@/components/ui/button";
import { ADDRESS, MAPS_URL } from "@/content";
import { SectionHeader } from "./SectionHeader";

export const Info = () => (
  <section id="contact" className="scheme-1 bg-[#E8E8E8] px-[5%] py-16 md:py-24 lg:py-28">
    <div className="container">
      <SectionHeader
        heading="Kontakt"
        description="dansk og engelsk tales. kom forbi, eller book online."
      />
      <div className="grid grid-cols-1 gap-x-16 gap-y-12 md:grid-cols-2">
        <InfoItem heading="Find os" text={ADDRESS}>
          <Button asChild variant="link" size="link" className="mt-4">
            <a href={MAPS_URL} target="_blank" rel="noreferrer">
              Åbn i Maps →
            </a>
          </Button>
        </InfoItem>
        <InfoItem heading="Åbningstider" text="tirsdag til søndag, 10-18. lukket mandag." />
      </div>
    </div>
  </section>
);

const InfoItem = ({ heading, text, children }: { heading: string; text: string; children?: React.ReactNode }) => (
  <div className="border-t border-scheme-border pt-6">
    <h3 className="mb-3 text-h5">{heading}</h3>
    <p>{text}</p>
    {children}
  </div>
);
