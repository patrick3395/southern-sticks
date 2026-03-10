"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative hero-clip">
      {/* Full-bleed background */}
      <div
        className="relative flex min-h-screen items-center justify-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=1920&q=85&auto=format&fit=crop)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

        {/* Centered text content */}
        <div className="relative z-10 mx-auto max-w-5xl px-6 pt-20 text-center">
          {/* Eyebrow */}
          <p
            className={`hero-line text-xs font-semibold uppercase tracking-[0.4em] text-[#C9A84C] ${mounted ? "hero-line-animate" : ""}`}
          >
            EST. 2024 &mdash; SOUTHERN STICKS
          </p>

          {/* Main headline */}
          <h1 className="mt-6 font-display leading-[0.9] tracking-wide text-white">
            <span
              className={`hero-line block text-8xl md:text-[120px] lg:text-[160px] ${mounted ? "hero-line-animate" : ""}`}
              style={{ animationDelay: "200ms" }}
            >
              PLAY WITH
            </span>
            <span
              className={`hero-line block text-8xl md:text-[120px] lg:text-[160px] ${mounted ? "hero-line-animate" : ""}`}
              style={{ animationDelay: "400ms" }}
            >
              PRIDE
            </span>
          </h1>

          {/* Subline */}
          <p
            className={`hero-line mx-auto mt-6 max-w-lg text-sm uppercase tracking-[0.25em] text-[#E8DCC8] md:text-base ${mounted ? "hero-line-animate" : ""}`}
            style={{ animationDelay: "500ms" }}
          >
            Premium Golf Apparel for the Modern Gentleman
          </p>

          {/* CTAs */}
          <div
            className={`mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center ${mounted ? "hero-line hero-line-animate" : "hero-line"}`}
            style={{ animationDelay: "700ms" }}
          >
            <Link
              href="/shop"
              className="inline-block bg-[#C9A84C] px-10 py-4 text-xs font-bold tracking-[0.2em] text-[#0D1F17] transition-colors hover:bg-[#d4b65e]"
            >
              SHOP THE COLLECTION
            </Link>
            <Link
              href="/about"
              className="inline-block border border-white/50 px-10 py-4 text-xs font-bold tracking-[0.2em] text-white transition-colors hover:border-white hover:bg-white/10"
            >
              OUR STORY
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
