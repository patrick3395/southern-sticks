import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-[#1B2A4A] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <Logo className="h-6 w-6" />
            <span className="font-serif text-sm font-bold tracking-widest">
              SOUTHERN STICKS
            </span>
          </div>

          {/* Links */}
          <div className="flex gap-8">
            <Link
              href="/shop"
              className="text-sm transition-colors hover:text-[#7BA7D4]"
            >
              Shop
            </Link>
            <Link
              href="/about"
              className="text-sm transition-colors hover:text-[#7BA7D4]"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm transition-colors hover:text-[#7BA7D4]"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-8 text-center">
          <p className="text-xs text-white/60">
            &copy; {new Date().getFullYear()} Southern Sticks. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
