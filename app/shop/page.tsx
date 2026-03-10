"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import FadeIn from "@/components/FadeIn";
import { products } from "@/data/products";
import { img } from "@/lib/image";

const categories = ["all", "hats", "polos", "shirts", "accessories"] as const;

const bestSellers = [
  products.find((p) => p.slug === "the-fairway-stripe-polo")!,
  products.find((p) => p.slug === "the-classic-navy-rope-hat")!,
  products.find((p) => p.slug === "the-dot-performance-polo")!,
  products.find((p) => p.slug === "the-caddie-bucket-hat")!,
];

interface RecentProduct {
  slug: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

export default function ShopPage() {
  const [active, setActive] = useState<string>("all");
  const [recentlyViewed, setRecentlyViewed] = useState<RecentProduct[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("ss-recently-viewed");
      if (stored) {
        setRecentlyViewed(JSON.parse(stored));
      }
    } catch {
      // ignore
    }
  }, []);

  const filtered =
    active === "all"
      ? products
      : products.filter((p) => p.category === active);

  return (
    <>
      {/* Hero Banner — aerial course overhead */}
      <section className="relative flex min-h-[420px] items-end overflow-hidden px-6 pb-16 md:min-h-[500px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1920&q=85&auto=format&fit=crop"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1F17]/90 via-[#0D1F17]/50 to-[#0D1F17]/20" />
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#C9A84C]">Spring / Summer 2025</p>
          <h1 className="mt-3 font-display text-7xl tracking-wider text-white md:text-9xl">
            THE COLLECTION
          </h1>
          <p className="mt-4 text-sm uppercase tracking-[0.25em] text-white/60">
            Premium essentials for the modern golfer
          </p>
        </div>
      </section>

      {/* FREE SHIPPING BANNER */}
      <div className="bg-[#C9A84C] px-6 py-3 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0D1F17]">
          FREE SHIPPING ON ORDERS $75+
        </p>
      </div>

      {/* BEST SELLERS STRIP */}
      <section className="bg-[#F5F0E8] px-6 py-14">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-3xl tracking-wider text-[#1A3A2A]">
            BEST SELLERS
          </h2>
          <div className="best-sellers-scroll mt-8 flex gap-6 overflow-x-auto pb-4">
            {bestSellers.map((product) => (
              <Link
                key={product.id}
                href={`/shop/${product.slug}`}
                className="group block w-64 shrink-0 overflow-hidden bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-[#F5F0E8]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img(product.image)}
                    alt={product.name}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                  />
                  <span className="absolute right-3 top-3 bg-[#C9A84C] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#0D1F17]">
                    BEST SELLER
                  </span>
                </div>
                <div className="border-t border-[#1A3A2A]/10 p-4">
                  <h3 className="font-serif text-sm font-bold text-[#1A1A1A]">
                    {product.name}
                  </h3>
                  <p className="mt-1.5 text-sm font-medium text-[#1A1A1A]/60">
                    ${product.price}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN SHOP AREA: Sidebar + Grid */}
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="flex flex-col gap-10 lg:flex-row">
          {/* Sticky Filter Sidebar (desktop) */}
          <aside className="shrink-0 lg:w-56">
            <div className="lg:sticky lg:top-[100px]">
              <h3 className="font-display text-lg tracking-wider text-[#1A3A2A]">
                FILTER
              </h3>
              <div className="mt-4 h-px w-8 bg-[#C9A84C]" />
              <div className="mt-6 space-y-3">
                {categories.map((cat) => (
                  <label
                    key={cat}
                    className="flex cursor-pointer items-center gap-3 text-sm capitalize text-[#1A1A1A]/70 transition-colors hover:text-[#1A3A2A]"
                  >
                    <span
                      className={`flex h-4 w-4 items-center justify-center border transition-colors ${
                        active === cat
                          ? "border-[#1A3A2A] bg-[#1A3A2A]"
                          : "border-[#1A3A2A]/30"
                      }`}
                    >
                      {active === cat && (
                        <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </span>
                    <button
                      onClick={() => setActive(cat)}
                      className="text-left"
                    >
                      {cat}
                    </button>
                  </label>
                ))}
              </div>

              {/* Mobile filter pills */}
              <div className="mt-4 flex flex-wrap gap-2 lg:hidden">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActive(cat)}
                    className={`px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] transition-all ${
                      active === cat
                        ? "bg-[#1A3A2A] text-white"
                        : "border border-[#1A3A2A]/20 text-[#1A3A2A]"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((product, i) => (
                <FadeIn key={product.id} delay={i * 100}>
                  <ProductCard product={product} />
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RECENTLY VIEWED */}
      {recentlyViewed.length > 0 && (
        <FadeIn>
          <section className="border-t border-[#1A3A2A]/10 bg-[#FAFAF7] px-6 py-16">
            <div className="mx-auto max-w-7xl">
              <h2 className="font-display text-2xl tracking-wider text-[#1A3A2A]">
                RECENTLY VIEWED
              </h2>
              <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
                {recentlyViewed.slice(0, 4).map((item) => (
                  <Link
                    key={item.slug}
                    href={`/shop/${item.slug}`}
                    className="group block overflow-hidden bg-white shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
                  >
                    <div className="relative aspect-[3/4] overflow-hidden bg-[#F5F0E8]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={img(item.image)}
                        alt={item.name}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                      />
                    </div>
                    <div className="border-t border-[#1A3A2A]/10 p-4">
                      <h3 className="font-serif text-sm font-bold text-[#1A1A1A]">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-sm text-[#1A1A1A]/60">${item.price}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </FadeIn>
      )}
    </>
  );
}
