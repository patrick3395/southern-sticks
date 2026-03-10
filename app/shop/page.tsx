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
      <section className="bg-[#1B2A4A] px-6 py-16 text-center text-white">
        <h1 className="font-serif text-4xl font-bold tracking-tight md:text-5xl">
          Shop
        </h1>
        <p className="mt-4 text-white/70">
          Southern-rooted essentials for the modern golfer.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium capitalize tracking-wide transition-colors ${
                active === cat
                  ? "bg-[#1B2A4A] text-white"
                  : "bg-[#F8F6F2] text-[#1B2A4A] hover:bg-[#1B2A4A]/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}
