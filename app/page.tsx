import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const featured = products.slice(0, 4);

const marqueeText =
  "FREE SHIPPING OVER $75  \u00B7  THE FAIRWAY POLO IS BACK  \u00B7  NEW: THE CADDIE BUCKET HAT  \u00B7  PLAY WITH PRIDE  \u00B7  ";

const categories = [
  {
    name: "HATS",
    href: "/shop",
    // Golfer walking the fairway — warm morning light
    image: "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=800&q=80&auto=format&fit=crop",
  },
  {
    name: "POLOS",
    href: "/shop",
    // Aerial golf course green
    image: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=800&q=80&auto=format&fit=crop",
  },
  {
    name: "SHIRTS",
    href: "/shop",
    // Morning mist on the course
    image: "https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?w=800&q=80&auto=format&fit=crop",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Brand Strip Marquee */}
      <div className="overflow-hidden bg-[#1A3A2A] py-3">
        <div className="animate-marquee flex whitespace-nowrap">
          {Array.from({ length: 4 }).map((_, i) => (
            <span
              key={i}
              className="mx-0 text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A84C]"
            >
              {marqueeText}
            </span>
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center font-display text-4xl tracking-wider text-[#1A3A2A] md:text-5xl">
            THIS SEASON&apos;S LINEUP
          </h2>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((product, i) => (
              <ProductCard
                key={product.id}
                product={product}
                showBadge={i < 3}
              />
            ))}
          </div>
          <div className="mt-14 text-center">
            <Link
              href="/shop"
              className="inline-block border-2 border-[#1A3A2A] px-10 py-4 text-xs font-bold tracking-[0.15em] text-[#1A3A2A] transition-colors hover:bg-[#1A3A2A] hover:text-white"
            >
              VIEW ALL PRODUCTS
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Banner */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-3">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={cat.href}
              className="group relative flex h-80 items-center justify-center overflow-hidden"
            >
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-[#0D1F17]/60 transition-colors group-hover:bg-[#0D1F17]/50" />
              <span className="relative z-10 font-display text-4xl tracking-wider text-white md:text-5xl">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="bg-[#F5F0E8] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            {/* Pull Quote */}
            <div>
              <p className="font-serif text-3xl italic leading-snug text-[#1A3A2A] md:text-4xl">
                &ldquo;Golf is not just a game. It&apos;s a way of life.&rdquo;
              </p>
              <div className="mt-6 h-px w-20 bg-[#C9A84C]" />
            </div>

            {/* Brand Story */}
            <div>
              <p className="leading-relaxed text-[#1A1A1A]/70">
                Born on the fairways of the South, Southern Sticks is more than
                a brand — it&apos;s a lifestyle. We believe golf is best played
                with pride, good company, and style that honors tradition while
                pushing the game forward.
              </p>
              <p className="mt-4 leading-relaxed text-[#1A1A1A]/70">
                From the first tee to the 19th hole, we outfit the modern
                gentleman with premium performance apparel designed for the
                course and crafted for everywhere else.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
