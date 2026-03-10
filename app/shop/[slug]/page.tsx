import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { img } from "@/lib/image";
import AddToBag from "./AddToBag";
import ImageZoom from "@/components/ImageZoom";

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

  const categoryLabel =
    product.category.charAt(0).toUpperCase() + product.category.slice(1);

  return (
    <section className="mx-auto max-w-7xl px-6 py-12 md:py-20">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-[#1A1A1A]/40">
        <Link
          href="/shop"
          className="transition-colors hover:text-[#1A3A2A]"
        >
          Shop
        </Link>
        <span>/</span>
        <span>{categoryLabel}</span>
        <span>/</span>
        <span className="text-[#1A1A1A]/70">{product.name}</span>
      </nav>

      <div className="mt-8 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
        {/* Product Image with Lightbox */}
        <ImageZoom src={img(product.image)} alt={product.name} />

        {/* Product Info */}
        <div className="flex flex-col justify-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C9A84C]">
            {product.category}
          </p>
          <h1 className="mt-3 font-serif text-3xl font-bold text-[#1A1A1A] md:text-4xl">
            {product.name}
          </h1>
          <p className="mt-4 text-2xl font-semibold text-[#C9A84C]">
            ${product.price}
          </p>
          <p className="mt-2 text-xs text-[#1A1A1A]/40">
            Free shipping on orders $75+
          </p>

          <div className="mt-8 h-px w-full bg-[#1A3A2A]/10" />

          <p className="mt-8 leading-relaxed text-[#1A1A1A]/60">
            {product.description}
          </p>

          <AddToBag />

          {/* Trust Icons */}
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-[#1A3A2A]/10 pt-6">
            <span className="flex items-center gap-2 text-xs text-[#1A1A1A]/40">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>
              Sustainable Fabrics
            </span>
            <span className="text-[#1A3A2A]/10">|</span>
            <span className="flex items-center gap-2 text-xs text-[#1A1A1A]/40">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
              </svg>
              Free Returns
            </span>
            <span className="text-[#1A3A2A]/10">|</span>
            <span className="flex items-center gap-2 text-xs text-[#1A1A1A]/40">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>
              Premium Quality
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
