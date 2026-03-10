"use client";

import { useState, useEffect } from "react";

interface ProductInfo {
  slug: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

const accordionItems = [
  {
    title: "DETAILS & CARE",
    content:
      "Premium performance fabric blend. Four-way stretch for unrestricted movement. UPF 50+ sun protection. Machine wash cold, tumble dry low. Do not bleach or iron directly on print.",
  },
  {
    title: "SHIPPING & RETURNS",
    content:
      "Free standard shipping on orders $75+. Standard delivery in 5\u20137 business days. Expedited shipping available at checkout. Free returns within 30 days of purchase \u2014 unworn, tags attached.",
  },
  {
    title: "SIZE GUIDE",
    content:
      "S: Chest 36\u201338\u2033 | M: Chest 38\u201340\u2033 | L: Chest 40\u201342\u2033 | XL: Chest 42\u201344\u2033 | XXL: Chest 44\u201346\u2033. Our polos feature a modern, tailored fit. If between sizes, we recommend sizing up.",
  },
];

export default function ProductExtras({ product }: { product: ProductInfo }) {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const [showSticky, setShowSticky] = useState(false);

  // Track recently viewed
  useEffect(() => {
    try {
      const stored = localStorage.getItem("ss-recently-viewed");
      const recent: ProductInfo[] = stored ? JSON.parse(stored) : [];
      const filtered = recent.filter((p) => p.slug !== product.slug);
      filtered.unshift(product);
      localStorage.setItem(
        "ss-recently-viewed",
        JSON.stringify(filtered.slice(0, 8))
      );
    } catch {
      // ignore
    }
  }, [product]);

  // Sticky mobile CTA — show when AddToBag button scrolls out of view
  useEffect(() => {
    const handleScroll = () => {
      // Show sticky after scrolling past ~600px (approx where AddToBag is)
      setShowSticky(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Accordion */}
      <div className="mt-8 border-t border-[#1A3A2A]/10">
        {accordionItems.map((item, i) => (
          <div key={i} className="border-b border-[#1A3A2A]/10">
            <button
              onClick={() => setOpenAccordion(openAccordion === i ? null : i)}
              className="flex w-full items-center justify-between py-4 text-left"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#1A1A1A]">
                {item.title}
              </span>
              <svg
                className={`h-4 w-4 text-[#1A1A1A]/40 transition-transform duration-300 ${
                  openAccordion === i ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={`accordion-content ${openAccordion === i ? "open" : ""}`}
            >
              <div>
                <p className="pb-4 text-sm leading-relaxed text-[#1A1A1A]/60">
                  {item.content}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Sticky Mobile Add to Bag */}
      <div
        className={`fixed inset-x-0 bottom-0 z-40 border-t border-[#1A3A2A]/10 bg-white px-4 py-3 shadow-[0_-2px_10px_rgba(0,0,0,0.08)] transition-transform duration-300 md:hidden ${
          showSticky ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-bold text-[#1A1A1A]">{product.name}</p>
            <p className="text-sm font-semibold text-[#C9A84C]">${product.price}</p>
          </div>
          <a
            href="#add-to-bag"
            className="bg-[#1A3A2A] px-6 py-3 text-xs font-bold uppercase tracking-[0.15em] text-white"
          >
            ADD TO BAG
          </a>
        </div>
      </div>
    </>
  );
}
