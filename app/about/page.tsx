import Image from "next/image";

const values = [
  {
    title: "QUALITY FIRST",
    description:
      "Every stitch, every fabric, every detail — obsessively curated for the golfer who demands the best.",
  },
  {
    title: "COURSE TO CLUBHOUSE",
    description:
      "Apparel that performs on the fairway and looks sharp at the 19th hole. No compromise.",
  },
  {
    title: "SOUTHERN ROOTS",
    description:
      "Born on the courses of the South, where tradition, style, and a firm handshake are non-negotiable.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Dark Green Hero Banner */}
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden bg-gradient-to-b from-[#0D1F17] to-[#1A3A2A] px-6 text-center text-white">
        <div className="relative z-10">
          <h1 className="font-display text-5xl tracking-wider md:text-7xl">
            BUILT FOR THE COURSE.
          </h1>
          <h1 className="mt-2 font-display text-5xl tracking-wider md:text-7xl">
            WORN EVERYWHERE.
          </h1>
          <p className="mt-6 text-sm uppercase tracking-[0.3em] text-[#C9A84C]">
            Our Story
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="mx-auto max-w-3xl px-6 py-24">
        <h2 className="font-display text-3xl tracking-wider text-[#1A3A2A]">
          BORN ON THE FAIRWAYS
        </h2>
        <div className="mt-6 h-px w-16 bg-[#C9A84C]" />
        <p className="mt-8 leading-relaxed text-[#1A1A1A]/70">
          Southern Sticks was founded with a simple belief: the game of golf
          deserves apparel that honors its traditions while moving forward.
          Rooted in the culture of Southern country clubs — where a firm
          handshake, a well-kept course, and good style are non-negotiable — we
          set out to create a brand that feels as good as it looks.
        </p>
        <p className="mt-4 leading-relaxed text-[#1A1A1A]/70">
          Every piece in our collection is designed for the golfer who cares
          about the details. From the weight of a polo collar to the curve of a
          hat brim, we sweat the small stuff so you can focus on your swing.
        </p>
      </section>

      {/* Full-Width Image */}
      <div className="relative h-[400px] w-full">
        <Image
          src="https://images.unsplash.com/photo-1611374243147-44a702c2d44c?w=1600&q=85&auto=format&fit=crop"
          alt="Golf course landscape"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#0D1F17]/30" />
      </div>

      {/* Values Section */}
      <section className="bg-[#F5F0E8] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-display text-3xl tracking-wider text-[#1A3A2A]">
            WHAT WE STAND FOR
          </h2>
          <div className="mt-14 grid grid-cols-1 gap-12 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title}>
                <h3 className="font-display text-xl tracking-wider text-[#1A3A2A]">
                  {v.title}
                </h3>
                <div className="mt-3 h-px w-10 bg-[#C9A84C]" />
                <p className="mt-4 text-sm leading-relaxed text-[#1A1A1A]/60">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders Note */}
      <section className="mx-auto max-w-3xl px-6 py-24">
        <h2 className="font-display text-3xl tracking-wider text-[#1A3A2A]">
          A NOTE FROM THE FOUNDERS
        </h2>
        <div className="mt-6 h-px w-16 bg-[#C9A84C]" />
        <p className="mt-8 leading-relaxed text-[#1A1A1A]/70">
          We grew up on Southern courses where the dress code was just as
          important as your handicap. Where a well-made polo and a sharp hat
          weren&apos;t just expected — they were a point of pride. Southern
          Sticks is our love letter to that culture.
        </p>
        <p className="mt-4 leading-relaxed text-[#1A1A1A]/70">
          Whether you&apos;re teeing off at dawn or settling in at the 19th
          hole, we hope our gear makes you feel like you belong. Because you do.
        </p>
        <p className="mt-8 font-serif text-lg font-bold text-[#1A3A2A]">
          — The Southern Sticks Team
        </p>
      </section>
    </>
  );
}
