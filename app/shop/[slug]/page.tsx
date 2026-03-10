import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
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
        className="text-sm text-[#1B2A4A]/60 transition-colors hover:text-[#1B2A4A]"
      >
        &larr; Back to Shop
      </Link>

      <div className="mt-8 grid grid-cols-1 gap-12 md:grid-cols-2">
        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden rounded-lg bg-[#F8F6F2]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-center">
          <p className="text-xs font-medium uppercase tracking-widest text-[#7BA7D4]">
            {product.category}
          </p>
          <h1 className="mt-2 font-serif text-3xl font-bold text-[#1B2A4A] md:text-4xl">
            {product.name}
          </h1>
          <p className="mt-4 text-2xl font-semibold text-[#1B2A4A]">
            ${product.price}
          </p>
          <p className="mt-6 leading-relaxed text-[#1B2A4A]/70">
            {product.description}
          </p>

          <AddToBag />
        </div>
      </div>
    </section>
  );
}
