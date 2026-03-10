"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { products } from "@/data/products";
import { img } from "@/lib/image";

export default function Search() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const results = query.trim()
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()),
      )
    : [];

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setQuery("");
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  // Close on click outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
        setQuery("");
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={containerRef} className="relative flex items-center">
      <button
        onClick={() => {
          setOpen(!open);
          if (open) setQuery("");
        }}
        aria-label="Search"
        className="text-[#1A1A1A] transition-colors hover:text-[#1A3A2A]"
      >
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </button>

      <div
        className="overflow-hidden transition-all duration-300"
        style={{ width: open ? 240 : 0, opacity: open ? 1 : 0 }}
      >
        <input
          ref={inputRef}
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="ml-2 w-full border-b border-[#1A3A2A]/20 bg-transparent py-1 text-sm text-[#1A1A1A] outline-none placeholder:text-[#1A1A1A]/40 focus:border-[#1A3A2A]"
        />
      </div>

      {/* Results dropdown */}
      {open && query.trim() && (
        <div className="absolute right-0 top-full mt-2 w-80 max-h-96 overflow-y-auto bg-white shadow-xl border border-[#1A3A2A]/10 z-50">
          {results.length === 0 ? (
            <p className="px-4 py-6 text-center text-sm text-[#1A1A1A]/40">
              No products found
            </p>
          ) : (
            results.map((product) => (
              <Link
                key={product.id}
                href={`/shop/${product.slug}`}
                onClick={() => {
                  setOpen(false);
                  setQuery("");
                }}
                className="flex items-center gap-3 px-4 py-3 transition-colors hover:bg-[#F5F0E8]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img(product.image)}
                  alt={product.name}
                  className="h-10 w-10 object-cover"
                />
                <div className="flex-1 min-w-0">
                  <p className="truncate text-sm font-medium text-[#1A1A1A]">
                    {product.name}
                  </p>
                  <p className="text-xs text-[#1A1A1A]/50">${product.price}</p>
                </div>
                <span className="shrink-0 bg-[#F5F0E8] px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-[#1A3A2A]">
                  {product.category}
                </span>
              </Link>
            ))
          )}
        </div>
      )}
    </div>
  );
}
