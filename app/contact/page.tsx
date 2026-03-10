"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      {/* Header */}
      <section className="bg-[#1B2A4A] px-6 py-16 text-center text-white">
        <h1 className="font-serif text-4xl font-bold tracking-tight md:text-5xl">
          Get in Touch
        </h1>
        <p className="mt-4 text-white/70">
          Questions, feedback, or just want to talk golf? We&apos;d love to hear
          from you.
        </p>
      </section>

      {/* Contact Form */}
      <section className="mx-auto max-w-xl px-6 py-20">
        {submitted ? (
          <div className="text-center">
            <h2 className="font-serif text-2xl font-bold text-[#1B2A4A]">
              Message Sent
            </h2>
            <p className="mt-4 text-[#1B2A4A]/70">
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
                className="block text-sm font-medium text-[#1B2A4A]"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-2 w-full rounded border border-[#1B2A4A]/20 px-4 py-3 text-sm text-[#1B2A4A] outline-none transition-colors focus:border-[#1B2A4A]"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#1B2A4A]"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-2 w-full rounded border border-[#1B2A4A]/20 px-4 py-3 text-sm text-[#1B2A4A] outline-none transition-colors focus:border-[#1B2A4A]"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-[#1B2A4A]"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="mt-2 w-full resize-none rounded border border-[#1B2A4A]/20 px-4 py-3 text-sm text-[#1B2A4A] outline-none transition-colors focus:border-[#1B2A4A]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#1B2A4A] py-4 text-sm font-semibold tracking-widest text-white transition-colors hover:bg-[#1B2A4A]/90"
            >
              SEND MESSAGE
            </button>
          </form>
        )}
      </section>
    </>
  );
}
