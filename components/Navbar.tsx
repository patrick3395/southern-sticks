"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { img } from "@/lib/image";
import Search from "@/components/Search";
import CartIcon from "@/components/CartIcon";

const links = [
  { href: "/shop", label: "SHOP" },
  { href: "/about", label: "ABOUT" },
  { href: "/contact", label: "CONTACT" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-[0_1px_3px_rgba(0,0,0,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        {/* Company Logo */}
        <Link href="/" className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={img("/images/logo-patch.jpg")}
            alt="Southern Sticks"
            className="h-[60px] w-[60px] object-contain"
          />
          <span className="font-display text-xl tracking-wider text-[#1A3A2A]">
            SOUTHERN STICKS
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-medium tracking-[0.15em] text-[#1A1A1A] transition-colors hover:text-[#1A3A2A]"
            >
              {link.label}
            </Link>
          ))}
          <Search />
          <CartIcon />
          <Link
            href="/shop"
            className="rounded-full bg-[#1A3A2A] px-6 py-2 text-xs font-semibold tracking-[0.15em] text-white transition-colors hover:bg-[#0D1F17]"
          >
            SHOP NOW
          </Link>
        </div>

        {/* Mobile: cart + hamburger */}
        <div className="flex items-center gap-4 md:hidden">
          <CartIcon />
          <button
            className="flex flex-col gap-1.5"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 bg-[#1A3A2A] transition-all duration-300 ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-[#1A3A2A] transition-all duration-300 ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-[#1A3A2A] transition-all duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu with slide animation */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-[#1A3A2A]/10 px-6 pb-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-xs font-medium tracking-[0.15em] text-[#1A1A1A] transition-colors hover:text-[#1A3A2A]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/shop"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-full bg-[#1A3A2A] px-6 py-2.5 text-center text-xs font-semibold tracking-[0.15em] text-white"
          >
            SHOP NOW
          </Link>
        </div>
      </div>

      {/* Mobile backdrop */}
      {open && (
        <div
          className="fixed inset-0 top-[72px] z-[-1] bg-black/20 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </nav>
  );
}
