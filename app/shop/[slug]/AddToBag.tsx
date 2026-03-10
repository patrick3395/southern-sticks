"use client";

import { useState } from "react";

const sizes = ["S", "M", "L", "XL", "XXL"];

export default function AddToBag() {
  const [selectedSize, setSelectedSize] = useState("");

  return (
    <div className="mt-8">
      {/* Size Selector */}
      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#1A1A1A]">
        Size
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => setSelectedSize(size)}
            className={`h-12 w-12 text-sm font-semibold transition-colors ${
              selectedSize === size
                ? "border-2 border-[#1A3A2A] bg-[#1A3A2A] text-white"
                : "border border-[#1A3A2A]/20 text-[#1A1A1A] hover:border-[#1A3A2A]"
            }`}
          >
            {size}
          </button>
        ))}
      </div>

      {/* Add to Bag */}
      <button className="mt-8 w-full bg-[#1A3A2A] py-5 font-display text-lg tracking-wider text-white transition-colors hover:bg-[#0D1F17]">
        ADD TO BAG
      </button>
    </div>
  );
}
