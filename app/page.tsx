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

      {/* Editorial Value Strip */}
      <FadeIn>
        <section className="bg-white px-6 py-16">
          <div className="mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-3">
            {/* Tile 1 */}
            <div className="border-b border-[#C9A84C]/30 py-8 md:border-b-0 md:border-r md:py-0 md:pr-12">
              <p className="font-display text-2xl tracking-wider text-[#1A3A2A]">
                FREE SHIPPING
              </p>
              <p className="mt-1 text-sm text-[#1A1A1A]/50">
                On orders $75+
              </p>
            </div>
            {/* Tile 2 */}
            <div className="border-b border-[#C9A84C]/30 py-8 md:border-b-0 md:border-r md:py-0 md:px-12">
              <p className="font-display text-2xl tracking-wider text-[#1A3A2A]">
                UPF 50+
              </p>
              <p className="mt-1 text-sm text-[#1A1A1A]/50">
                Performance Fabrics
              </p>
            </div>
            {/* Tile 3 */}
            <div className="py-8 md:py-0 md:pl-12">
              <p className="font-display text-2xl tracking-wider text-[#1A3A2A]">
                THE 19TH HOLE
              </p>
              <p className="mt-1 text-sm text-[#1A1A1A]/50">
                Crafted for after the round
              </p>
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
                  <ProductCard
                    product={product}
                    showBadge={i < 2}
                  />
                </FadeIn>
              ))}
            </div>
            <div className="mt-14">
              <Link
                href="/shop"
                className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.15em] text-[#1A3A2A] transition-colors hover:text-[#C9A84C]"
              >
                View All Products
                <span className="transition-transform group-hover:translate-x-1">
                  &rarr;
                </span>
              </Link>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Shop the Look */}
      <FadeIn>
        <section className="bg-[#1B2D3F] px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-3">
              {/* Left: Title */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A84C]">
                  Curated Looks
                </p>
                <h2 className="mt-3 font-display text-5xl leading-[0.95] tracking-wider text-white md:text-6xl">
                  SHOP
                  <br />
                  THE
                  <br />
                  LOOK
                </h2>
              </div>
              {/* Right: 2 lifestyle images */}
              <div className="lg:col-span-2">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <Link href="/shop/the-fairway-stripe-polo" className="group relative block aspect-[2/3] overflow-hidden border-2 border-transparent transition-all duration-300 hover:border-[#C9A84C]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img("/images/polo-navy-stripe-model.jpg")}
                      alt="The Fairway Stripe Polo"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.08]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6 transition-transform duration-300 group-hover:-translate-y-1">
                      <p className="font-serif text-lg text-white">
                        The Fairway Stripe Polo
                      </p>
                      <p className="mt-1 text-sm font-medium text-[#C9A84C]">
                        $85
                      </p>
                    </div>
                  </Link>
                  <Link href="/shop/the-dot-performance-polo" className="group relative block aspect-[2/3] overflow-hidden border-2 border-transparent transition-all duration-300 hover:border-[#C9A84C]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img("/images/polo-dot-model.jpg")}
                      alt="The Dot Performance Polo"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.08]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6 transition-transform duration-300 group-hover:-translate-y-1">
                      <p className="font-serif text-lg text-white">
                        The Dot Performance Polo
                      </p>
                      <p className="mt-1 text-sm font-medium text-[#C9A84C]">
                        $95
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
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
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A84C]">
              Our Story
            </p>
            <h2 className="mt-4 font-display text-4xl tracking-wider text-white md:text-6xl">
              BORN ON THE FAIRWAYS OF THE SOUTH.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70">
              Southern Sticks is more than a brand — it&apos;s a lifestyle. We
              believe golf is best played with pride, good company, and style that
              honors tradition while pushing the game forward.
            </p>
            <Link
              href="/about"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.15em] text-[#C9A84C] transition-colors hover:text-[#d4b65e]"
            >
              Read More
              <span className="transition-transform group-hover:translate-x-1">
                &rarr;
              </span>
            </Link>
          </div>
        </section>
      </FadeIn>

      {/* Email Capture — Join the Club */}
      <FadeIn>
        <section className="bg-[#0D1F17] px-6 py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-5xl tracking-wider text-white md:text-6xl">
              JOIN THE CLUB
            </h2>
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
