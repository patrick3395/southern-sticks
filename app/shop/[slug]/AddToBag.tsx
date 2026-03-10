"use client";

import { useState } from "react";

const sizes = ["S", "M", "L", "XL", "XXL"];

export default function AddToBag() {
  const [selectedSize, setSelectedSize] = useState("");

  return (
    <div className="mt-8">
      {/* Size Selector */}
      <p className="text-sm font-medium text-[#1B2A4A]">Size</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => setSelectedSize(size)}
            className={`rounded border px-4 py-2 text-sm font-medium transition-colors ${
              selectedSize === size
                ? "border-[#1B2A4A] bg-[#1B2A4A] text-white"
                : "border-[#1B2A4A]/20 text-[#1B2A4A] hover:border-[#1B2A4A]"
            }`}
          >
            {size}
          </button>
        ))}
      </div>

      {/* Add to Bag */}
      <button className="mt-8 w-full bg-[#1B2A4A] py-4 text-sm font-semibold tracking-widest text-white transition-colors hover:bg-[#1B2A4A]/90">
        ADD TO BAG
      </button>
    </div>
  );
}
