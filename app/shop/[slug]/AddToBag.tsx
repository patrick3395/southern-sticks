"use client";

import { useState } from "react";
import { useCart } from "@/hooks/useCart";

const sizes = ["S", "M", "L", "XL", "XXL"];
const lowStockSizes = ["S", "XL"];

export default function AddToBag() {
  const [selectedSize, setSelectedSize] = useState("");
  const [showError, setShowError] = useState(false);
  const [shaking, setShaking] = useState(false);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const handleAddToBag = () => {
    if (!selectedSize) {
      setShowError(true);
      setShaking(true);
      setTimeout(() => setShaking(false), 400);
      return;
    }
    addItem();
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="mt-8">
      {/* Size Selector */}
      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#1A1A1A]">
        Size
      </p>
      <div className={`mt-3 flex flex-wrap gap-2 ${shaking ? "animate-shake" : ""}`}>
        {sizes.map((size) => (
          <div key={size} className="group/size relative">
            <button
              onClick={() => {
                setSelectedSize(size);
                setShowError(false);
              }}
              className={`h-12 w-12 text-sm font-semibold transition-all ${
                selectedSize === size
                  ? "border-2 border-[#1A3A2A] bg-[#1A3A2A] text-white"
                  : "border border-[#1A3A2A]/20 text-[#1A1A1A] hover:border-[#1A3A2A]"
              }`}
            >
              {size}
            </button>
            {/* Low stock tooltip */}
            {lowStockSizes.includes(size) && (
              <div className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-[#1A3A2A] px-2 py-1 text-[9px] font-medium text-white opacity-0 transition-opacity group-hover/size:opacity-100">
                Low Stock
                <div className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-[#1A3A2A]" />
              </div>
            )}
          </div>
        ))}
      </div>
      {showError && (
        <p className="mt-2 text-xs font-medium text-[#C9A84C]">
          Please select a size
        </p>
      )}

      {/* Add to Bag */}
      <button
        onClick={handleAddToBag}
        className={`mt-8 w-full py-5 font-display text-lg tracking-wider transition-all ${
          added
            ? "bg-[#C9A84C] text-[#0D1F17]"
            : "bg-[#1A3A2A] text-white hover:bg-[#0D1F17]"
        }`}
      >
        {added
          ? "ADDED!"
          : selectedSize
            ? `ADD TO BAG \u2014 SIZE ${selectedSize}`
            : "ADD TO BAG"}
      </button>
    </div>
  );
}
