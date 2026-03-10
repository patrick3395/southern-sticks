"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";

const subjects = [
  "General Inquiry",
  "Order Support",
  "Returns & Exchanges",
  "Wholesale / Partnership",
  "Press / Media",
  "Other",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      {/* Hero Banner */}
      <section className="bg-[#0D1F17] px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <h1 className="font-display text-6xl tracking-wider text-white md:text-8xl">
            GET IN TOUCH
          </h1>
          <p className="mt-4 text-sm uppercase tracking-[0.25em] text-[#C9A84C]">
            Questions, feedback, or just want to talk golf?
          </p>
        </div>
      </section>

      {/* Two-column layout */}
      <FadeIn>
        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-5">
            {/* LEFT: Contact Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="py-16 text-center">
                  <h2 className="font-display text-4xl tracking-wider text-[#1A3A2A]">
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
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
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
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-xs font-semibold uppercase tracking-[0.15em] text-[#1A1A1A]"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="mt-2 w-full border border-[#1A3A2A]/20 bg-white px-4 py-3 text-sm text-[#1A1A1A] outline-none transition-colors focus:border-[#1A3A2A]"
                    >
                      <option value="">Select a topic...</option>
                      {subjects.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
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
                      rows={6}
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
            </div>

            {/* RIGHT: Contact Info */}
            <div className="lg:col-span-2">
              <div className="lg:sticky lg:top-[100px]">
                <h3 className="font-display text-xl tracking-wider text-[#1A3A2A]">
                  WHERE TO FIND US
                </h3>
                <div className="mt-4 h-px w-10 bg-[#C9A84C]" />

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-3">
                    <svg className="mt-0.5 h-5 w-5 shrink-0 text-[#C9A84C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <div>
                      <p className="text-sm font-semibold text-[#1A1A1A]">Southern Sticks HQ</p>
                      <p className="text-sm text-[#1A1A1A]/60">Nashville, TN</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="mt-0.5 h-5 w-5 shrink-0 text-[#C9A84C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    <div>
                      <p className="text-sm font-semibold text-[#1A1A1A]">Email</p>
                      <p className="text-sm text-[#1A1A1A]/60">hello@southernsticks.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="mt-0.5 h-5 w-5 shrink-0 text-[#C9A84C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                    </svg>
                    <div>
                      <p className="text-sm font-semibold text-[#1A1A1A]">Follow</p>
                      <p className="text-sm text-[#1A1A1A]/60">@SouthernSticks</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#1A1A1A]/40">
                    Follow Us
                  </p>
                  <div className="mt-4 flex gap-4">
                    {/* Instagram */}
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center border border-[#1A3A2A]/20 text-[#1A1A1A]/50 transition-all hover:border-[#1A3A2A] hover:text-[#1A3A2A]"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                    </a>
                    {/* TikTok */}
                    <a
                      href="https://tiktok.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center border border-[#1A3A2A]/20 text-[#1A1A1A]/50 transition-all hover:border-[#1A3A2A] hover:text-[#1A3A2A]"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46V13a8.1 8.1 0 005.58 2.2V11.8a4.85 4.85 0 01-3.58-1.53v-.01a4.83 4.83 0 003.58-3.57z" />
                      </svg>
                    </a>
                    {/* X / Twitter */}
                    <a
                      href="https://x.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center border border-[#1A3A2A]/20 text-[#1A1A1A]/50 transition-all hover:border-[#1A3A2A] hover:text-[#1A3A2A]"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Response time trust note */}
                <div className="mt-10 border-t border-[#1A3A2A]/10 pt-6">
                  <p className="flex items-center gap-2 text-xs text-[#1A1A1A]/40">
                    <svg className="h-4 w-4 text-[#C9A84C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-semibold uppercase tracking-[0.1em]">
                      Response Time: 24&ndash;48 Hours
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>
    </>
  );
}
