import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#1B2A4A] px-6 py-16 text-center text-white">
        <h1 className="font-serif text-4xl font-bold tracking-tight md:text-5xl">
          Our Story
        </h1>
        <p className="mt-4 text-white/70">
          Where Southern tradition meets the modern game.
        </p>
      </section>

      {/* Brand Story */}
      <section className="mx-auto max-w-3xl px-6 py-20">
        <h2 className="font-serif text-2xl font-bold text-[#1B2A4A]">
          Born on the Fairways
        </h2>
        <p className="mt-6 leading-relaxed text-[#1B2A4A]/70">
          Southern Sticks was founded with a simple belief: the game of golf
          deserves apparel that honors its traditions while moving forward. Rooted
          in the culture of Southern country clubs — where a firm handshake, a
          well-kept course, and good style are non-negotiable — we set out to
          create a brand that feels as good as it looks.
        </p>
        <p className="mt-4 leading-relaxed text-[#1B2A4A]/70">
          Every piece in our collection is designed for the golfer who cares about
          the details. From the weight of a polo collar to the curve of a hat
          brim, we sweat the small stuff so you can focus on your swing.
        </p>
      </section>

      {/* Image Break */}
      <div className="relative h-[400px] w-full">
        <Image
          src="https://picsum.photos/seed/about1/1600/600"
          alt="Golf course landscape"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Mission */}
      <section className="bg-[#F8F6F2] px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-2xl font-bold text-[#1B2A4A]">
            Our Mission
          </h2>
          <p className="mt-6 leading-relaxed text-[#1B2A4A]/70">
            To outfit the modern Southern golfer with apparel that bridges
            heritage and performance. We believe in quality over quantity,
            timeless style over trends, and that the best round of golf is the
            one played with pride and good company.
          </p>
        </div>
      </section>

      {/* Founders Note */}
      <section className="mx-auto max-w-3xl px-6 py-20">
        <h2 className="font-serif text-2xl font-bold text-[#1B2A4A]">
          A Note from the Founders
        </h2>
        <p className="mt-6 leading-relaxed text-[#1B2A4A]/70">
          We grew up on Southern courses where the dress code was just as
          important as your handicap. Where a well-made polo and a sharp hat
          weren&apos;t just expected — they were a point of pride. Southern Sticks
          is our love letter to that culture.
        </p>
        <p className="mt-4 leading-relaxed text-[#1B2A4A]/70">
          Whether you&apos;re teeing off at dawn or settling in at the 19th hole,
          we hope our gear makes you feel like you belong. Because you do.
        </p>
        <p className="mt-8 font-serif text-lg font-semibold text-[#1B2A4A]">
          — The Southern Sticks Team
        </p>
      </section>
    </>
  );
}
