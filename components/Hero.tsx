import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero-clip relative flex min-h-screen items-center justify-center overflow-hidden px-6 text-white">
      {/* Hero background — real golf shot */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=1920&q=85&auto=format&fit=crop"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      {/* Dark green overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D1F17]/80 via-[#0D1F17]/60 to-[#0D1F17]/80" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <h1 className="font-display text-7xl leading-none tracking-wide text-white md:text-8xl lg:text-9xl">
          PLAY WITH PRIDE
        </h1>
        <p className="mt-6 text-sm font-medium uppercase tracking-[0.3em] text-[#C9A84C] md:text-base">
          Premium Golf Apparel for the Modern Gentleman
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/shop"
            className="inline-block bg-[#C9A84C] px-10 py-4 text-sm font-bold tracking-[0.15em] text-[#0D1F17] transition-colors hover:bg-[#d4b65e]"
          >
            SHOP THE COLLECTION
          </Link>
          <Link
            href="/about"
            className="inline-block border-2 border-white px-10 py-4 text-sm font-bold tracking-[0.15em] text-white transition-colors hover:bg-white hover:text-[#0D1F17]"
          >
            OUR STORY
          </Link>
        </div>
      </div>
    </section>
  );
}
