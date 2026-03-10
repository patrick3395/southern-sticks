"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-b from-[#0D1F17] to-[#1A3A2A] px-6 py-20 text-center text-white">
        <h1 className="font-display text-5xl tracking-wider md:text-6xl">
          GET IN TOUCH
        </h1>
        <p className="mt-4 text-sm uppercase tracking-[0.2em] text-[#C9A84C]">
          Questions, feedback, or just want to talk golf?
        </p>
      </section>

      {/* Contact Form */}
      <section className="mx-auto max-w-xl px-6 py-20">
        {submitted ? (
          <div className="text-center">
            <h2 className="font-display text-3xl tracking-wider text-[#1A3A2A]">
              MESSAGE SENT
            </h2>
            <div className="mx-auto mt-4 h-px w-12 bg-[#C9A84C]" />
            <p className="mt-6 text-[#1A1A1A]/60">
              Thanks for reaching out. We&apos;ll get back to you soon.
            </p>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-semibold uppercase tracking-[0.15em] text-[#1A1A1A]"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-2 w-full border border-[#1A3A2A]/20 px-4 py-3 text-sm text-[#1A1A1A] outline-none transition-colors focus:border-[#1A3A2A]"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs font-semibold uppercase tracking-[0.15em] text-[#1A1A1A]"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-2 w-full border border-[#1A3A2A]/20 px-4 py-3 text-sm text-[#1A1A1A] outline-none transition-colors focus:border-[#1A3A2A]"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-xs font-semibold uppercase tracking-[0.15em] text-[#1A1A1A]"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="mt-2 w-full resize-none border border-[#1A3A2A]/20 px-4 py-3 text-sm text-[#1A1A1A] outline-none transition-colors focus:border-[#1A3A2A]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#1A3A2A] py-5 font-display text-lg tracking-wider text-white transition-colors hover:bg-[#0D1F17]"
            >
              SEND MESSAGE
            </button>
          </form>
        )}
      </section>
    </>
  );
}
