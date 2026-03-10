import Link from "next/link";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import FadeIn from "@/components/FadeIn";
import EmailCapture from "@/components/EmailCapture";
import { products } from "@/data/products";
import { img } from "@/lib/image";

const featured = products.slice(0, 4);

const marqueeText =
  "FREE SHIPPING OVER $75  \u00B7  THE FAIRWAY POLO IS BACK  \u00B7  NEW: THE CADDIE BUCKET HAT  \u00B7  PLAY WITH PRIDE  \u00B7  ";

const publications = [
  { name: "GOLF DIGEST", weight: "font-bold" },
  { name: "GOLF MAGAZINE", weight: "font-normal italic" },
  { name: "GOLFWEEK", weight: "font-bold" },
  { name: "MEN\u2019S JOURNAL", weight: "font-normal" },
  { name: "SOUTHERN LIVING", weight: "font-bold italic" },
];

const lookbookImages = [
  { src: "/images/polo-navy-stripe-model.jpg", name: "The Fairway Stripe Polo" },
  { src: "/images/polo-dot-model.jpg", name: "The Dot Performance Polo" },
  { src: "/images/polo-blue-pinstripe-model.jpg", name: "The Solid Performance Polo" },
  { src: "/images/polo-blue-stripe-hanger.jpg", name: "The Blue Ridge Polo" },
  { src: "/images/hat-classic-mockup.jpg", name: "The Classic Navy Rope Hat" },
];

const testimonials = [
  {
    quote: "Best polo I\u2019ve ever played in. The Fairway Stripe moves like a second skin.",
    name: "James H.",
    location: "Augusta, GA",
  },
  {
    quote: "Southern Sticks has completely replaced my golf wardrobe. Worth every penny.",
    name: "Tyler M.",
    location: "Charleston, SC",
  },
  {
    quote: "The hat is always the first thing people ask about on the course.",
    name: "Chris B.",
    location: "Nashville, TN",
  },
];

const igImages = [
  "/images/polo-navy-stripe-model.jpg",
  "/images/polo-dot-model.jpg",
  "/images/hat-classic-mockup.jpg",
  "/images/polo-blue-pinstripe-model.jpg",
  "/images/polo-blue-stripe-hanger.jpg",
  "/images/logo-embroidery.jpg",
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Brand Strip Marquee */}
      <div className="marquee-wrap overflow-hidden bg-[#1A3A2A] py-4">
        <div className="animate-marquee flex whitespace-nowrap">
          {Array.from({ length: 4 }).map((_, i) => (
            <span
              key={i}
              className="mx-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A84C]"
            >
              {marqueeText}
            </span>
          ))}
        </div>
      </div>

      {/* ═══════ A. SOCIAL PROOF BAR ═══════ */}
      <FadeIn>
        <section className="border-b border-gray-200 border-t border-t-gray-200 bg-white px-6 py-10">
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.4em] text-[#1A1A1A]/40">
              As Seen In
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
              {publications.map((pub, i) => (
                <span key={pub.name} className="flex items-center gap-4">
                  <span
                    className={`font-serif text-base tracking-wide text-[#1A1A1A]/60 md:text-lg ${pub.weight}`}
                  >
                    {pub.name}
                  </span>
                  {i < publications.length - 1 && (
                    <span className="text-[#C9A84C]">&middot;</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Editorial Value Strip */}
      <FadeIn>
        <section className="bg-white px-6 py-16">
          <div className="mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-3">
            <div className="border-b border-[#C9A84C]/30 py-8 md:border-b-0 md:border-r md:py-0 md:pr-12">
              <p className="font-display text-2xl tracking-wider text-[#1A3A2A]">
                FREE SHIPPING
              </p>
              <p className="mt-1 text-sm text-[#1A1A1A]/50">On orders $75+</p>
            </div>
            <div className="border-b border-[#C9A84C]/30 py-8 md:border-b-0 md:border-r md:py-0 md:px-12">
              <p className="font-display text-2xl tracking-wider text-[#1A3A2A]">
                UPF 50+
              </p>
              <p className="mt-1 text-sm text-[#1A1A1A]/50">Performance Fabrics</p>
            </div>
            <div className="py-8 md:py-0 md:pl-12">
              <p className="font-display text-2xl tracking-wider text-[#1A3A2A]">
                THE 19TH HOLE
              </p>
              <p className="mt-1 text-sm text-[#1A1A1A]/50">Crafted for after the round</p>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Featured Products */}
      <FadeIn>
        <section className="bg-white px-6 pb-24 pt-8">
          <div className="mx-auto max-w-6xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A84C]">
              What We Do Best
            </p>
            <h2 className="mt-3 font-display text-5xl tracking-wider text-[#1A3A2A] md:text-6xl">
              THIS SEASON&apos;S LINEUP
            </h2>
            <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2">
              {featured.map((product, i) => (
                <FadeIn key={product.id} delay={i * 100}>
                  <ProductCard product={product} showBadge={i < 2} />
                </FadeIn>
              ))}
            </div>
            <div className="mt-14">
              <Link
                href="/shop"
                className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.15em] text-[#1A3A2A] transition-colors hover:text-[#C9A84C]"
              >
                View All Products
                <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
              </Link>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ═══════ B. HERO PRODUCT FEATURE ═══════ */}
      <FadeIn>
        <section className="bg-white">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative aspect-[3/4] md:aspect-auto">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img("/images/polo-dot-model.jpg")}
                  alt="The Dot Performance Polo"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center px-8 py-16 md:px-16 lg:px-24">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A84C]">
                  Featured Drop
                </p>
                <h3 className="mt-4 font-display text-4xl tracking-wider text-[#1A3A2A] md:text-5xl">
                  THE DOT PERFORMANCE POLO
                </h3>
                <p className="mt-4 text-2xl font-semibold text-[#C9A84C]">$95</p>
                <p className="mt-6 leading-relaxed text-[#1A1A1A]/60">
                  Subtle navy micro-dot pattern on our premium performance fabric.
                  The most refined polo in the lineup &mdash; office to 18th hole.
                  Four-way stretch with UPF 50+ sun protection.
                </p>
                <Link
                  href="/shop/the-dot-performance-polo"
                  className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.15em] text-[#1A3A2A] transition-colors hover:text-[#C9A84C]"
                >
                  SHOP NOW
                  <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Shop the Look */}
      <FadeIn>
        <section className="bg-[#1B2D3F] px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A84C]">
                  Curated Looks
                </p>
                <h2 className="mt-3 font-display text-5xl leading-[0.95] tracking-wider text-white md:text-6xl">
                  SHOP<br />THE<br />LOOK
                </h2>
              </div>
              <div className="lg:col-span-2">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <Link href="/shop/the-fairway-stripe-polo" className="group relative block aspect-[2/3] overflow-hidden border-2 border-transparent transition-all duration-300 hover:border-[#C9A84C]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={img("/images/polo-navy-stripe-model.jpg")} alt="The Fairway Stripe Polo" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.08]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6 transition-transform duration-300 group-hover:-translate-y-1">
                      <p className="font-serif text-lg text-white">The Fairway Stripe Polo</p>
                      <p className="mt-1 text-sm font-medium text-[#C9A84C]">$85</p>
                    </div>
                  </Link>
                  <Link href="/shop/the-dot-performance-polo" className="group relative block aspect-[2/3] overflow-hidden border-2 border-transparent transition-all duration-300 hover:border-[#C9A84C]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={img("/images/polo-dot-model.jpg")} alt="The Dot Performance Polo" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.08]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6 transition-transform duration-300 group-hover:-translate-y-1">
                      <p className="font-serif text-lg text-white">The Dot Performance Polo</p>
                      <p className="mt-1 text-sm font-medium text-[#C9A84C]">$95</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ═══════ C. LIFESTYLE LOOKBOOK GRID ═══════ */}
      <FadeIn>
        <section className="bg-white px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <h2 className="font-display text-5xl tracking-wider text-[#1A3A2A] md:text-6xl">
                THE LOOKBOOK
              </h2>
              <div className="mx-auto mt-4 h-px w-16 bg-[#C9A84C]" />
            </div>
            <div className="masonry-grid mt-14">
              {lookbookImages.map((item, i) => (
                <div key={i} className="group relative overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img(item.src)}
                    alt={item.name}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black/70 to-transparent px-4 py-6 transition-transform duration-300 group-hover:translate-y-0">
                    <p className="text-sm font-medium text-white">{item.name}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link
                href="/shop"
                className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.15em] text-[#1A3A2A] transition-colors hover:text-[#C9A84C]"
              >
                VIEW FULL LOOKBOOK
                <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
              </Link>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Pull Quote */}
      <FadeIn>
        <section className="bg-[#F5F0E8] px-6 py-32">
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-serif text-3xl italic leading-relaxed text-[#1A3A2A] md:text-4xl lg:text-5xl">
              &ldquo;The course is just the beginning.&rdquo;
            </p>
            <div className="mx-auto mt-8 h-px w-16 bg-[#C9A84C]" />
            <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.4em] text-[#1A3A2A]/40">
              Southern Sticks
            </p>
          </div>
        </section>
      </FadeIn>

      {/* ═══════ D. TESTIMONIALS / REVIEWS ═══════ */}
      <FadeIn>
        <section className="bg-[#FAFAF7] px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center font-display text-5xl tracking-wider text-[#1A3A2A] md:text-6xl">
              WHAT THEY&apos;RE SAYING
            </h2>
            <div className="mx-auto mt-4 h-px w-16 bg-[#C9A84C]" />
            <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
              {testimonials.map((t, i) => (
                <FadeIn key={i} delay={i * 150}>
                  <div className="bg-white p-8 shadow-sm">
                    <span className="font-serif text-5xl leading-none text-[#C9A84C]/40">&ldquo;</span>
                    <p className="mt-2 font-serif text-base italic leading-relaxed text-[#1A1A1A]/70">
                      {t.quote}
                    </p>
                    <div className="mt-6 h-px w-8 bg-[#C9A84C]/40" />
                    <p className="mt-4 text-xs font-semibold text-[#1A1A1A]">{t.name}</p>
                    <p className="text-xs text-[#1A1A1A]/40">{t.location}</p>
                    <p className="mt-2 text-sm text-[#C9A84C]">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Brand Story — Image Overlay */}
      <FadeIn>
        <section
          className="relative flex min-h-[500px] items-center px-6 py-24"
          style={{
            backgroundImage: `url(${img("/images/polo-blue-pinstripe-model.jpg")})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-[#0D1F17]/75" />
          <div className="relative z-10 mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A84C]">Our Story</p>
            <h2 className="mt-4 font-display text-4xl tracking-wider text-white md:text-6xl">
              BORN ON THE FAIRWAYS OF THE SOUTH.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70">
              Southern Sticks is more than a brand &mdash; it&apos;s a lifestyle. We
              believe golf is best played with pride, good company, and style that
              honors tradition while pushing the game forward.
            </p>
            <Link
              href="/about"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.15em] text-[#C9A84C] transition-colors hover:text-[#d4b65e]"
            >
              Read More
              <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
            </Link>
          </div>
        </section>
      </FadeIn>

      {/* ═══════ E. INSTAGRAM GRID TEASER ═══════ */}
      <FadeIn>
        <section className="bg-white px-6 py-24">
          <div className="mx-auto max-w-6xl text-center">
            <h2 className="font-display text-5xl tracking-wider text-[#1A3A2A] md:text-6xl">
              FOLLOW THE JOURNEY
            </h2>
            <p className="mt-3 text-sm font-medium tracking-[0.15em] text-[#C9A84C]">@SouthernSticks</p>
            <div className="mt-12 grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-6">
              {igImages.map((src, i) => (
                <div key={i} className="group relative aspect-square overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img(src)}
                    alt={`Instagram post ${i + 1}`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#C9A84C]/0 transition-colors duration-300 group-hover:bg-[#C9A84C]/20" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <svg className="h-8 w-8 text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.15em] text-[#1A3A2A] transition-colors hover:text-[#C9A84C]"
              >
                FOLLOW US ON INSTAGRAM
                <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
              </a>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ═══════ F. SIZE GUIDE CALLOUT ═══════ */}
      <FadeIn>
        <section className="bg-[#1A3A2A] px-6 py-12">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
            <div>
              <p className="font-display text-2xl tracking-wider text-white">NOT SURE ABOUT YOUR SIZE?</p>
              <p className="mt-1 text-sm text-white/50">Download our fit guide for the perfect fit every time.</p>
            </div>
            <span className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold uppercase tracking-[0.15em] text-[#C9A84C]">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
              DOWNLOAD FIT GUIDE
            </span>
          </div>
        </section>
      </FadeIn>

      {/* Email Capture — Join the Club */}
      <FadeIn>
        <section className="bg-[#0D1F17] px-6 py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-5xl tracking-wider text-white md:text-6xl">JOIN THE CLUB</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/50">
              Early access, exclusive drops, and stories from the course.
            </p>
            <div className="mt-8">
              <EmailCapture />
            </div>
          </div>
        </section>
      </FadeIn>
    </>
  );
}
