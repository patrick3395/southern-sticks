"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparent = isHome && !scrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-[0_1px_3px_rgba(0,0,0,0.08)]"
          : transparent
            ? "bg-transparent"
            : "bg-white shadow-[0_1px_3px_rgba(0,0,0,0.08)]"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        {/* Company Logo */}
        <Link href="/" className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={img("/images/logo-patch.jpg")}
            alt="Southern Sticks"
            className="h-[60px] w-[60px] rounded-full object-contain"
          />
          <span
            className={`font-display text-xl tracking-wider transition-colors duration-300 ${
              transparent ? "text-white" : "text-[#1A3A2A]"
            }`}
          >
            SOUTHERN STICKS
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs font-medium tracking-[0.15em] transition-colors ${
                transparent
                  ? "text-white/90 hover:text-white"
                  : "text-[#1A1A1A] hover:text-[#1A3A2A]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Search />
          <CartIcon />
          <Link
            href="/shop"
            className={`rounded-full px-6 py-2 text-xs font-semibold tracking-[0.15em] transition-colors ${
              transparent
                ? "bg-white/20 text-white backdrop-blur-sm hover:bg-white/30"
                : "bg-[#1A3A2A] text-white hover:bg-[#0D1F17]"
            }`}
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
              className={`block h-0.5 w-6 transition-all duration-300 ${
                transparent && !open ? "bg-white" : "bg-[#1A3A2A]"
              } ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 transition-all duration-300 ${
                transparent && !open ? "bg-white" : "bg-[#1A3A2A]"
              } ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 transition-all duration-300 ${
                transparent && !open ? "bg-white" : "bg-[#1A3A2A]"
              } ${open ? "-translate-y-2 -rotate-45" : ""}`}
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
        <div className="border-t border-[#1A3A2A]/10 bg-white px-6 pb-4">
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
