import Link from "next/link";
import { img } from "@/lib/image";

export default function Hero() {
  return (
    <section className="relative">
      {/* Split Hero */}
      <div className="flex min-h-[90vh] flex-col md:flex-row">
        {/* Mobile: Image on top */}
        <div className="relative h-[40vh] md:hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={img("/images/polo-navy-stripe-model.jpg")}
            alt="Southern Sticks lifestyle"
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
          <div className="absolute left-0 top-0 h-full w-1 bg-[#C9A84C]" />
        </div>

        {/* LEFT: Dark green editorial text */}
        <div className="flex flex-1 flex-col justify-center bg-[#0D1F17] px-8 py-16 md:px-16 lg:px-24">
          <div className="max-w-md">
            <h1 className="font-display leading-[0.9] tracking-wide text-white">
              <span className="block text-[100px] md:text-[140px] lg:text-[180px]">
                PLAY
              </span>
              <span className="text-outline block text-[100px] md:text-[140px] lg:text-[180px]">
                WITH
              </span>
              <span className="block text-[100px] md:text-[140px] lg:text-[180px]">
                PRIDE
              </span>
            </h1>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/shop"
                className="inline-block bg-[#C9A84C] px-10 py-4 text-center text-xs font-bold tracking-[0.2em] text-[#0D1F17] transition-colors hover:bg-[#d4b65e]"
              >
                SHOP THE COLLECTION
              </Link>
              <Link
                href="/about"
                className="inline-block border border-white/40 px-10 py-4 text-center text-xs font-bold tracking-[0.2em] text-white transition-colors hover:border-white hover:bg-white/10"
              >
                OUR STORY
              </Link>
            </div>
          </div>
        </div>

        {/* RIGHT: Full-bleed lifestyle image (desktop only) */}
        <div className="relative hidden flex-1 md:block">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={img("/images/polo-navy-stripe-model.jpg")}
            alt="Southern Sticks lifestyle"
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
          {/* Gold left border accent */}
          <div className="absolute left-0 top-0 h-full w-1 bg-[#C9A84C]" />
        </div>
      </div>

      {/* Bottom caption bar */}
      <div className="border-t border-[#C9A84C]/30 bg-[#0D1F17] px-6 py-4">
        <p className="text-center text-[10px] font-medium uppercase tracking-[0.4em] text-[#C9A84C]/70">
          Est. &mdash; Southern Sticks &mdash; Premium Golf Apparel
        </p>
      </div>
    </section>
  );
}
