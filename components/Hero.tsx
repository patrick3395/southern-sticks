import Link from "next/link";

interface HeroProps {
  headline: string;
  subtext: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function Hero({ headline, subtext, ctaText, ctaHref }: HeroProps) {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center bg-[#1B2A4A] px-6 text-white">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="font-serif text-5xl font-bold tracking-tight md:text-7xl">
          {headline}
        </h1>
        <p className="mt-6 text-lg text-white/80 md:text-xl">{subtext}</p>
        {ctaText && ctaHref && (
          <Link
            href={ctaHref}
            className="mt-8 inline-block border-2 border-white px-8 py-3 text-sm font-semibold tracking-widest transition-colors hover:bg-white hover:text-[#1B2A4A]"
          >
            {ctaText}
          </Link>
        )}
      </div>
    </section>
  );
}
