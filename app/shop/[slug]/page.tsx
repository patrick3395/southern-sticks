import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { img } from "@/lib/image";
import AddToBag from "./AddToBag";
import ProductExtras from "./ProductExtras";
import ImageZoom from "@/components/ImageZoom";
import ProductCard from "@/components/ProductCard";
import FadeIn from "@/components/FadeIn";

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

  // Related products: same category, excluding current, up to 4
  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  // If not enough in same category, fill with others
  const fillerCount = 4 - related.length;
  if (fillerCount > 0) {
    const fillers = products
      .filter((p) => p.id !== product.id && !related.find((r) => r.id === p.id))
      .slice(0, fillerCount);
    related.push(...fillers);
  }

  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-12 md:py-20">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-[#1A1A1A]/40">
          <Link href="/shop" className="transition-colors hover:text-[#1A3A2A]">
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

            {/* Share Buttons */}
            <div className="mt-6 flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#1A1A1A]/40">
                SHARE:
              </span>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1A1A1A]/30 transition-colors hover:text-[#1A3A2A]"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1A1A1A]/30 transition-colors hover:text-[#1A3A2A]"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>

            {/* Trust Icons */}
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-[#1A3A2A]/10 pt-6">
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

            {/* Product Details Accordion */}
            <ProductExtras
              product={{
                slug: product.slug,
                name: product.name,
                price: product.price,
                image: product.image,
                category: product.category,
              }}
            />
          </div>
        </div>
      </section>

      {/* YOU MIGHT ALSO LIKE */}
      <FadeIn>
        <section className="border-t border-[#1A3A2A]/10 bg-[#FAFAF7] px-6 py-16">
          <div className="mx-auto max-w-7xl">
            <h2 className="font-display text-3xl tracking-wider text-[#1A3A2A]">
              YOU MIGHT ALSO LIKE
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p, i) => (
                <FadeIn key={p.id} delay={i * 100}>
                  <ProductCard product={p} />
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>
    </>
  );
}
