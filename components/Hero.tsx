import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero-clip relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-[#0D1F17] to-[#1A3A2A] px-6 text-white">
      {/* Background golf flag watermark */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.04]"
        viewBox="0 0 400 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <line x1="200" y1="50" x2="200" y2="520" stroke="white" strokeWidth="4" />
        <polygon points="200,50 320,100 200,150" fill="white" />
        <circle cx="200" cy="540" r="30" fill="none" stroke="white" strokeWidth="4" />
      </svg>

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
