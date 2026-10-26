import { useEffect, useState } from "react";
import { Close } from "relume-icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BOOKING_URL } from "@/content";
import { t } from "@/i18n";

// Based on Relume Navbar 1: logo left, links + CTA right, full-screen menu on mobile.
export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      // Hide when scrolling down past 100px, show when scrolling up.
      // Always show when menu is open or near the top.
      if (open || y < 100) setHidden(false);
      else if (y > lastY + 4) setHidden(true);
      else if (y < lastY - 4) setHidden(false);
      lastY = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  const solid = scrolled || open;

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-white/20 transition-[transform,background-color,color] duration-[400ms] ease-out",
        solid ? "bg-black/70 text-white backdrop-blur" : "bg-transparent text-white",
        hidden && "-translate-y-full",
      )}
    >
      <div className="px-[5%]">
      <div className="container flex min-h-16 items-center justify-between md:min-h-18 lg:mx-auto lg:max-w-[960px]">
        <a href="#top" className="font-heading text-base font-semibold uppercase tracking-tight lg:text-[2rem] lg:leading-[1.1] lg:tracking-[-0.03em]">
          District Barbers
        </a>
        <div className="hidden items-center gap-8 lg:flex">
          {t.nav.map((link) => (
            <a key={link.href} href={link.href} className="font-heading text-regular font-medium uppercase hover:underline hover:underline-offset-[6px]">
              {link.title}
            </a>
          ))}
          <Button asChild variant="secondary-alt" size="sm" className="text-regular uppercase">
            <a href={BOOKING_URL} data-umami-event="book-click" data-umami-event-source="navbar">
              {t.bookCta}
            </a>
          </Button>
          <a
            href={t.switchTo.href}
            hrefLang={t.switchTo.code.toLowerCase()}
            lang={t.switchTo.code.toLowerCase()}
            aria-label={t.switchTo.label}
            className="font-heading text-regular font-medium uppercase hover:underline hover:underline-offset-[6px]"
          >
            {t.switchTo.code}
          </a>
        </div>
        <a
          href={t.switchTo.href}
          hrefLang={t.switchTo.code.toLowerCase()}
          lang={t.switchTo.code.toLowerCase()}
          aria-label={t.switchTo.label}
          className="ml-auto mr-4 font-heading text-sm font-medium uppercase hover:underline hover:underline-offset-4 lg:hidden"
        >
          {t.switchTo.code}
        </a>
        <button
          className="flex size-8 flex-col items-center justify-center gap-1.5 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? t.closeMenu : t.openMenu}
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
      </div>
      {open && (
        <div className="flex h-[calc(100dvh-4rem)] flex-col gap-3 border-t border-white/20 px-[5%] pt-12 lg:hidden">
          {t.nav.map((link) => (
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
            <a
              href={BOOKING_URL}
              onClick={() => setOpen(false)}
              data-umami-event="book-click"
              data-umami-event-source="mobile-menu"
            >
              {t.bookCta}
            </a>
          </Button>
          <a
            href={t.switchTo.href}
            hrefLang={t.switchTo.code.toLowerCase()}
            lang={t.switchTo.code.toLowerCase()}
            className="mt-6 font-heading text-sm font-medium uppercase underline underline-offset-4"
          >
            {t.switchTo.label}
          </a>
        </div>
      )}
    </nav>
  );
};
