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
      <section className="bg-gradient-to-b from-[#0D1F17] to-[#1A3A2A] px-6 py-20 text-center text-white">
        <h1 className="font-display text-5xl tracking-wider md:text-6xl">
          SHOP
        </h1>
        <p className="mt-4 text-sm uppercase tracking-[0.2em] text-[#C9A84C]">
          Premium essentials for the modern golfer
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] transition-colors ${
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
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}
