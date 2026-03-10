import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { img } from "@/lib/image";
import AddToBag from "./AddToBag";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) notFound();

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <Link
        href="/shop"
        className="text-sm font-medium text-[#1A3A2A]/50 transition-colors hover:text-[#1A3A2A]"
      >
        &larr; Back to Shop
      </Link>

      <div className="mt-8 grid grid-cols-1 gap-12 md:grid-cols-2">
        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden bg-[#F5F0E8]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={img(product.image)}
            alt={product.name}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A84C]">
            {product.category}
          </p>
          <h1 className="mt-3 font-serif text-3xl font-bold text-[#1A1A1A] md:text-4xl">
            {product.name}
          </h1>
          <p className="mt-4 text-2xl font-semibold text-[#C9A84C]">
            ${product.price}
          </p>
          <div className="mt-6 h-px w-12 bg-[#C9A84C]" />
          <p className="mt-6 leading-relaxed text-[#1A1A1A]/60">
            {product.description}
          </p>

          <AddToBag />
        </div>
      </div>
    </section>
  );
}
