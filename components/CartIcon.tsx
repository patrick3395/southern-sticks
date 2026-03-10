"use client";

import { useCart } from "@/hooks/useCart";
import { useEffect, useRef, useState } from "react";

export default function CartIcon() {
  const { count } = useCart();
  const [bounce, setBounce] = useState(false);
  const prevCount = useRef(count);

  useEffect(() => {
    if (count > prevCount.current) {
      setBounce(true);
      const t = setTimeout(() => setBounce(false), 300);
      return () => clearTimeout(t);
    }
    prevCount.current = count;
  }, [count]);

  return (
    <div className="relative">
      <svg
        className="h-5 w-5 text-[#1A1A1A] transition-colors hover:text-[#1A3A2A]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
        />
      </svg>
      {count > 0 && (
        <span
          className={`absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#C9A84C] text-[9px] font-bold text-[#0D1F17] ${
            bounce ? "animate-cart-bounce" : ""
          }`}
        >
          {count}
        </span>
      )}
    </div>
  );
}
