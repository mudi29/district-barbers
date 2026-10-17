import { Button } from "@/components/ui/button";
import { ADDRESS, BOOKING_URL, HOURS_SHORT, NAV_LINKS } from "@/content";

// Based on Relume Footer 1: links, contact details and CTA, with a legal row underneath.
export const Footer = () => (
  <footer id="book" className="border-t border-white/20 bg-black/50 px-[5%] py-12 text-white backdrop-blur md:py-18 lg:py-20">
    <div className="container">
      <div className="grid grid-cols-1 gap-10 pb-12 md:grid-cols-4 md:pb-18">
        <div>
          <p className="mb-4 font-heading text-base font-semibold uppercase tracking-tight">District Barbers</p>
          <ul className="flex flex-col gap-2">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="font-heading text-sm font-medium uppercase hover:underline hover:underline-offset-4">
                  {l.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-2 font-heading text-sm font-semibold uppercase tracking-wider">Address</p>
          <p className="text-sm">{ADDRESS}</p>
        </div>
        <div>
          <p className="mb-2 font-heading text-sm font-semibold uppercase tracking-wider">Hours</p>
          <p className="text-sm">{HOURS_SHORT}</p>
        </div>
        <div>
          <p className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider">Book a chair</p>
          <Button asChild variant="secondary-alt" size="sm" className="text-sm uppercase">
            <a href={BOOKING_URL}>Book An Appointment</a>
          </Button>
        </div>
      </div>
      <div className="flex flex-col-reverse gap-4 border-t border-white/20 pt-6 text-sm md:flex-row md:justify-between">
        <p>district barbers, all rights reserved.</p>
        <div className="flex gap-6">
          <a href="/privatlivspolitik" className="hover:underline">privatlivspolitik</a>
          <a href="/cookiepolitik" className="hover:underline">cookiepolitik</a>
        </div>
      </div>
    </div>
  </footer>
);
