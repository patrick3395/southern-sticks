"use client";

import { useState, useRef } from "react";

export default function EmailCapture() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");
  const inputRef = useRef<HTMLInputElement>(null);

  const isValidEmail = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setStatus("error");
      inputRef.current?.focus();
      return;
    }
    setStatus("success");
    setTimeout(() => {
      setStatus("idle");
      setEmail("");
    }, 3000);
  };

  const inputBorderClass =
    status === "error"
      ? "border-red-500 shadow-[0_0_0_3px_rgba(239,68,68,0.2)]"
      : status === "success"
        ? "border-green-500 shadow-[0_0_0_3px_rgba(34,197,94,0.2)]"
        : "border-white/20 focus:border-white/40";

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-3 sm:flex-row sm:gap-0">
        <input
          ref={inputRef}
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          className={`flex-1 border bg-transparent px-6 py-4 text-sm text-white placeholder-white/30 outline-none transition-all duration-300 ${inputBorderClass}`}
        />
        <button
          type="submit"
          disabled={status === "success"}
          className="bg-[#C9A84C] px-8 py-4 text-xs font-bold tracking-[0.2em] text-[#0D1F17] transition-colors hover:bg-[#d4b65e] disabled:opacity-80"
        >
          {status === "success" ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              YOU&apos;RE IN!
            </span>
          ) : (
            "JOIN"
          )}
        </button>
      </div>
      {status === "error" && (
        <p className="mt-2 text-xs text-red-400">
          Please enter a valid email address.
        </p>
      )}
    </form>
  );
}
