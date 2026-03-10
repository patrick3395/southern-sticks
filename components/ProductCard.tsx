import Link from "next/link";
import { img } from "@/lib/image";
import type { Product } from "@/data/products";

export default function ProductCard({
  product,
  showBadge = false,
}: {
  product: Product;
  showBadge?: boolean;
}) {
  return (
    <Link
      href={`/shop/${product.slug}`}
      className="group block overflow-hidden bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
    >
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-[#F5F0E8]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={img(product.image)}
          alt={product.name}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
        />
        {/* Category pill */}
        <span className="absolute left-3 top-3 bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#1A3A2A]">
          {product.category}
        </span>
        {/* NEW badge */}
        {showBadge && (
          <span className="absolute right-3 top-3 bg-[#C9A84C] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#0D1F17]">
            NEW
          </span>
        )}
        {/* QUICK VIEW overlay */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full bg-[#1A3A2A]/90 px-4 py-3 text-center transition-transform duration-300 group-hover:translate-y-0">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">
            QUICK VIEW
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="border-t border-[#1A3A2A]/10 p-4">
        <h3 className="font-serif text-sm font-bold text-[#1A1A1A] transition-colors group-hover:text-[#1A3A2A]">
          <span className="bg-gradient-to-r from-[#C9A84C] to-[#C9A84C] bg-[length:0%_2px] bg-left-bottom bg-no-repeat pb-0.5 transition-[background-size] duration-300 group-hover:bg-[length:100%_2px]">
            {product.name}
          </span>
        </h3>
        <p className="mt-1.5 text-sm font-medium text-[#1A1A1A]/60">
          ${product.price}
        </p>
      </div>
    </Link>
  );
}
