import { ADDRESS, PHONE_DISPLAY, PHONE_HREF } from "@/content";
import { t } from "@/i18n";

const [street, city] = ADDRESS.split(", ");

// Based on Relume Footer 1: links and contact details, with a legal row underneath.
export const Footer = () => (
  <footer id="book" className="border-t border-white/20 bg-black/80 px-[5%] py-12 text-white md:py-18 lg:py-20">
    <div id="contact" className="container lg:mx-auto lg:max-w-[960px]">
      <p className="mb-2 font-heading text-[2rem] font-semibold uppercase leading-[1.1] tracking-[-0.03em] md:text-[3rem]">District Barbers</p>
      <p className="mb-12 text-regular text-white/75">{t.footer.tagline}</p>
      <div className="grid grid-cols-1 gap-10 pb-12 md:grid-cols-3 md:pb-18">
        <div>
          <p className="mb-3 font-heading text-regular font-semibold uppercase tracking-wider text-white/90">{t.footer.pages}</p>
          <ul className="flex flex-col gap-2">
            {t.nav.filter((l) => l.href !== "#contact").map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-regular uppercase hover:underline hover:underline-offset-4">
                  {l.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-3 font-heading text-regular font-semibold uppercase tracking-wider text-white/90">{t.footer.contact}</p>
          <p className="text-regular">
            {street}
            <br />
            {city}
          </p>
          <a href={PHONE_HREF} className="mt-2 block text-regular font-medium hover:underline hover:underline-offset-4">
            {PHONE_DISPLAY}
          </a>
        </div>
        <div>
          <p className="mb-3 font-heading text-regular font-semibold uppercase tracking-wider text-white/90">{t.footer.hours}</p>
          <p className="text-regular">{t.footer.monday}</p>
          <p className="text-regular">{t.footer.openDays}</p>
        </div>
      </div>
      <div className="flex flex-col gap-4 border-t border-white/20 pt-6 text-regular text-white/75 md:flex-row md:items-center md:justify-between">
        <p>{`© ${new Date().getFullYear()} District Barbers`}</p>
        <div className="flex gap-6">
          <a href="/privatlivspolitik" className="hover:underline">{t.footer.privacy}</a>
          <a href="/cookiepolitik" className="hover:underline">{t.footer.cookies}</a>
        </div>
      </div>
    </div>
  </footer>
);
