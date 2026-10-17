import { useEffect, useState } from "react";
import { Close } from "relume-icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BOOKING_URL, NAV_LINKS } from "@/content";

// Based on Relume Navbar 1: logo left, links + CTA right, full-screen menu on mobile.
export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <nav
      className={cn(
        "absolute inset-x-0 top-0 z-50 border-b border-white/20 transition-colors duration-300",
        solid ? "bg-black/50 text-white backdrop-blur" : "bg-transparent text-white",
      )}
    >
      <div className="flex min-h-16 items-center justify-between px-[5%] md:min-h-18">
        <a href="#top" className="font-heading text-base font-semibold uppercase tracking-tight">
          District Barbers
        </a>
        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} style={{ fontFamily: '"JetBrains Mono", ui-monospace, monospace', fontSize: "1rem" }} className="uppercase hover:underline hover:underline-offset-[6px]">
              {link.title}
            </a>
          ))}
          <Button asChild size="sm" className={cn(!solid && "border-white bg-white text-neutral-darkest")}>
            <a href={BOOKING_URL}>Book</a>
          </Button>
        </div>
        <button
          className="flex size-8 flex-col items-center justify-center gap-1.5 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? (
            <Close className="size-6" />
          ) : (
            <>
              <span className="h-0.5 w-5 bg-current" />
              <span className="h-0.5 w-5 bg-current" />
              <span className="h-0.5 w-5 bg-current" />
            </>
          )}
        </button>
      </div>
      {open && (
        <div className="flex h-[calc(100dvh-4rem)] flex-col gap-3 border-t border-white/20 px-[5%] pt-12 lg:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-heading text-sm font-medium uppercase"
            >
              {link.title}
            </a>
          ))}
          <Button asChild variant="secondary-alt" size="sm" className="mt-4 w-full text-sm uppercase">
            <a href={BOOKING_URL} onClick={() => setOpen(false)}>
              Book Your Session
            </a>
          </Button>
        </div>
      )}
    </nav>
  );
};
