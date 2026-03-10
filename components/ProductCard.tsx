import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/shop/${product.slug}`}
      className="group block overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-lg"
    >
      <div className="relative aspect-square overflow-hidden bg-[#F8F6F2]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </div>
      <div className="p-4">
        <h3 className="font-serif text-sm font-semibold text-[#1B2A4A]">
          {product.name}
        </h3>
        <p className="mt-1 text-sm text-[#1B2A4A]/70">${product.price}</p>
      </div>
    </Link>
  );
}
