import { t } from "@/i18n";

export const NotFound = () => (
  <main className="flex min-h-svh flex-col items-start justify-center gap-4 bg-brand-ink px-[5%] text-white">
    <div className="container lg:mx-auto lg:max-w-[960px]">
      <h1 className="mb-2 text-h2 leading-[1.1]">{t.notFound.heading}</h1>
      <p className="mb-8 text-regular">{t.notFound.text}</p>
      <a href="/" className="font-heading text-regular font-medium uppercase underline underline-offset-8">
        {t.notFound.home}
      </a>
    </div>
  </main>
);
