"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const categories = ["all", "hats", "polos", "shirts", "accessories"] as const;

export default function ShopPage() {
  const [active, setActive] = useState<string>("all");

  const filtered =
    active === "all"
      ? products
      : products.filter((p) => p.category === active);

  return (
    <>
      {/* Hero Banner */}
      <section className="bg-[#0D1F17] px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <h1 className="font-display text-6xl tracking-wider text-white md:text-8xl">
            THE COLLECTION
          </h1>
          <p className="mt-4 text-sm uppercase tracking-[0.25em] text-[#C9A84C]">
            Premium essentials for the modern golfer
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] transition-all ${
                active === cat
                  ? "bg-[#1A3A2A] text-white"
                  : "border border-[#1A3A2A]/20 text-[#1A3A2A] hover:border-[#1A3A2A] hover:bg-[#1A3A2A]/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}
