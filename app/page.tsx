import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const featured = products.slice(0, 4);

const lifestyleImages = [
  "https://picsum.photos/seed/golf1/800/600",
  "https://picsum.photos/seed/golf2/800/600",
  "https://picsum.photos/seed/golf3/800/600",
  "https://picsum.photos/seed/golf4/800/600",
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Hero
        headline="PLAY WITH PRIDE"
        subtext="Southern-rooted golf apparel for the modern player. Classic style, modern performance."
        ctaText="SHOP THE COLLECTION"
        ctaHref="/shop"
      />

      {/* Featured Products */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-center font-serif text-3xl font-bold text-[#1B2A4A]">
          Featured
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/shop"
            className="inline-block border-2 border-[#1B2A4A] px-8 py-3 text-sm font-semibold tracking-widest text-[#1B2A4A] transition-colors hover:bg-[#1B2A4A] hover:text-white"
          >
            VIEW ALL
          </Link>
        </div>
      </section>

      {/* Brand Story */}
      <section className="bg-[#1B2A4A] px-6 py-20 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-bold">Our Story</h2>
          <p className="mt-6 text-lg leading-relaxed text-white/80">
            Born on the fairways of the South, Southern Sticks is more than a
            brand — it&apos;s a way of life. We believe golf is best played with
            pride, good company, and style that honors tradition while embracing
            the game&apos;s future. From the first tee to the 19th hole, we outfit
            the modern Southern golfer.
          </p>
        </div>
      </section>

      {/* Lifestyle Grid */}
      <section className="bg-[#F8F6F2] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center font-serif text-3xl font-bold text-[#1B2A4A]">
            The Lifestyle
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {lifestyleImages.map((src, i) => (
              <div
                key={i}
                className="relative aspect-[4/3] overflow-hidden rounded-lg"
              >
                <Image
                  src={src}
                  alt={`Southern Sticks lifestyle ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
