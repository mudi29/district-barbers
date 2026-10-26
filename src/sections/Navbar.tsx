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
  const [active, setActive] = useState("");

  // Mark the nav link whose section crosses the middle of the viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(`#${entry.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    // #top and #reviews are not in the menu; watching them clears the mark when you pass them.
    [...t.nav.map((l) => l.href), "#top", "#reviews"].forEach((href) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Close the menu when tapping anywhere except the bar and the links, or on Escape.
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!(e.target as Element).closest("[data-menu-keep]")) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

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
        solid ? "bg-black/70 text-white" : "bg-transparent text-white",
        hidden && "-translate-y-full",
      )}
    >
      <div className="px-[5%]">
      <div data-menu-keep className="container flex min-h-16 items-center md:min-h-18 lg:mx-auto lg:grid lg:max-w-[960px] lg:grid-cols-[1fr_auto_1fr]">
        <button
          className="order-3 flex size-8 flex-col items-center justify-center gap-1.5 lg:order-1 lg:justify-self-start"
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
        <a href="#top" className="order-1 font-heading text-base font-semibold uppercase tracking-tight lg:order-2 lg:text-[2rem] lg:leading-[1.1] lg:tracking-[-0.03em]">
          District Barbers
        </a>
        <a
          href={t.switchTo.href}
          hrefLang={t.switchTo.code.toLowerCase()}
          lang={t.switchTo.code.toLowerCase()}
          aria-label={t.switchTo.label}
          className="order-2 ml-auto mr-4 font-heading text-sm font-medium uppercase hover:underline hover:underline-offset-4 lg:order-3 lg:m-0 lg:justify-self-end"
        >
          {t.switchTo.code}
        </a>
      </div>
      </div>
      {open && (
        <div className="h-[calc(100dvh-4rem)] border-t border-white/20 px-[5%] pt-12 lg:h-auto lg:pb-12">
        <div className="container flex flex-col gap-2 lg:mx-auto lg:max-w-[960px]">
          {t.nav.map((link) => (
            <a
              data-menu-keep
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              aria-current={active === link.href ? "location" : undefined}
              className={cn(
                "w-fit font-heading text-regular uppercase text-white lg:text-medium",
                active === link.href ? "font-semibold underline" : "font-medium",
                "underline-offset-8 hover:underline",
              )}
            >
              {link.title}
            </a>
          ))}
          <Button asChild data-menu-keep variant="secondary-alt" size="sm" className="mt-4 w-full font-heading text-regular font-medium uppercase lg:w-fit">
            <a
              href={BOOKING_URL}
              onClick={() => setOpen(false)}
              data-umami-event="book-click"
              data-umami-event-source="mobile-menu"
            >
              {t.bookCta}
            </a>
          </Button>
        </div>
        </div>
      )}
    </nav>
  );
};
