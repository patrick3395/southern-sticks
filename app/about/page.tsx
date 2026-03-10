import FadeIn from "@/components/FadeIn";

const values = [
  {
    num: "01",
    title: "QUALITY FIRST",
    description:
      "Every stitch, every fabric, every detail \u2014 obsessively curated for the golfer who demands the best.",
  },
  {
    num: "02",
    title: "COURSE TO CLUBHOUSE",
    description:
      "Apparel that performs on the fairway and looks sharp at the 19th hole. No compromise.",
  },
  {
    num: "03",
    title: "SOUTHERN ROOTS",
    description:
      "Born on the courses of the South, where tradition, style, and a firm handshake are non-negotiable.",
  },
];

const trustSignals = [
  {
    icon: (
      <svg className="h-8 w-8 text-[#C9A84C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.996.178-1.768.65-2.08 1.377C2.643 6.819 5.295 9.499 9.478 11.06a21.02 21.02 0 005.044 1.19M18.75 4.236c.996.178 1.768.65 2.08 1.377.527 1.206-2.125 3.886-6.308 5.447a21.02 21.02 0 01-5.044 1.19" />
      </svg>
    ),
    title: "Tour-Tested Performance",
    description: "Fabrics and fits trusted on championship courses across the South.",
  },
  {
    icon: (
      <svg className="h-8 w-8 text-[#C9A84C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
      </svg>
    ),
    title: "Sustainably Sourced",
    description: "Responsible materials and ethical manufacturing, every step of the way.",
  },
  {
    icon: (
      <svg className="h-8 w-8 text-[#C9A84C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    title: "Satisfaction Guaranteed",
    description: "If it doesn\u2019t feel right, we\u2019ll make it right. No questions asked.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Full-Bleed Hero with Overlaid Text */}
      <section
        className="relative flex min-h-[60vh] items-end px-6 py-20 md:min-h-[70vh] md:py-28"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?w=1600&q=85&auto=format&fit=crop)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#0D1F17]/70" />
        <div className="relative z-10 mx-auto max-w-7xl w-full">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A84C]">
            Our Story
          </p>
          <h1 className="mt-4 font-display text-5xl tracking-wider text-white md:text-7xl lg:text-8xl">
            BUILT FOR THE COURSE.
          </h1>
          <h1 className="mt-1 font-display text-5xl tracking-wider text-white md:text-7xl lg:text-8xl">
            WORN EVERYWHERE.
          </h1>
        </div>
      </section>

      {/* Brand Story */}
      <FadeIn>
        <section className="mx-auto max-w-3xl px-6 py-24">
          <h2 className="font-display text-3xl tracking-wider text-[#1A3A2A]">
            BORN ON THE FAIRWAYS
          </h2>
          <div className="mt-6 h-px w-16 bg-[#C9A84C]" />
          <p className="mt-8 leading-relaxed text-[#1A1A1A]/70">
            Southern Sticks was founded with a simple belief: the game of golf
            deserves apparel that honors its traditions while moving forward.
            Rooted in the culture of Southern country clubs &mdash; where a firm
            handshake, a well-kept course, and good style are non-negotiable &mdash; we
            set out to create a brand that feels as good as it looks.
          </p>
          <p className="mt-4 leading-relaxed text-[#1A1A1A]/70">
            Every piece in our collection is designed for the golfer who cares
            about the details. From the weight of a polo collar to the curve of a
            hat brim, we sweat the small stuff so you can focus on your swing.
          </p>
        </section>
      </FadeIn>

      {/* Values Section — with numbered headers */}
      <FadeIn>
        <section className="bg-[#F5F0E8] px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center font-display text-3xl tracking-wider text-[#1A3A2A]">
              WHAT WE STAND FOR
            </h2>
            <div className="mt-14 grid grid-cols-1 gap-12 md:grid-cols-3">
              {values.map((v, i) => (
                <FadeIn key={v.num} delay={i * 150}>
                  <div>
                    <span className="font-display text-5xl text-[#C9A84C]/30">
                      {v.num}
                    </span>
                    <h3 className="mt-2 font-display text-xl tracking-wider text-[#1A3A2A]">
                      {v.title}
                    </h3>
                    <div className="mt-3 h-px w-10 bg-[#C9A84C]" />
                    <p className="mt-4 text-sm leading-relaxed text-[#1A1A1A]/60">
                      {v.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ═══════ G. TRUSTED BY THE COURSE ═══════ */}
      <FadeIn>
        <section className="bg-white px-6 py-24">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center font-display text-3xl tracking-wider text-[#1A3A2A]">
              TRUSTED BY THE COURSE
            </h2>
            <div className="mx-auto mt-4 h-px w-16 bg-[#C9A84C]" />
            <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3">
              {trustSignals.map((signal, i) => (
                <FadeIn key={i} delay={i * 150}>
                  <div className="text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#F5F0E8]">
                      {signal.icon}
                    </div>
                    <h3 className="mt-4 font-display text-lg tracking-wider text-[#1A3A2A]">
                      {signal.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#1A1A1A]/60">
                      {signal.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Founders Note — bordered pull-quote style */}
      <FadeIn>
        <section className="px-6 py-24">
          <div className="mx-auto max-w-3xl border-l-4 border-[#C9A84C] py-4 pl-8 md:pl-12">
            <h2 className="font-display text-2xl tracking-wider text-[#1A3A2A]">
              A NOTE FROM THE FOUNDERS
            </h2>
            <p className="mt-6 font-serif text-lg italic leading-relaxed text-[#1A1A1A]/70">
              &ldquo;We grew up on Southern courses where the dress code was just as
              important as your handicap. Where a well-made polo and a sharp hat
              weren&apos;t just expected &mdash; they were a point of pride. Southern
              Sticks is our love letter to that culture.&rdquo;
            </p>
            <p className="mt-4 leading-relaxed text-[#1A1A1A]/70">
              Whether you&apos;re teeing off at dawn or settling in at the 19th
              hole, we hope our gear makes you feel like you belong. Because you do.
            </p>
            <p className="mt-8 font-serif text-lg font-bold text-[#1A3A2A]">
              &mdash; The Southern Sticks Team
            </p>
          </div>
        </section>
      </FadeIn>
    </>
  );
}
