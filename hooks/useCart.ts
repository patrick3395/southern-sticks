"use client";

import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "ss-cart-count";

function readCount(): number {
  if (typeof window === "undefined") return 0;
  const v = localStorage.getItem(STORAGE_KEY);
  return v ? parseInt(v, 10) || 0 : 0;
}

export function useCart() {
  const [count, setCount] = useState(0);

  // Hydrate from localStorage after mount
  useEffect(() => {
    setCount(readCount());

    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) setCount(readCount());
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const addItem = useCallback(() => {
    const next = readCount() + 1;
    localStorage.setItem(STORAGE_KEY, String(next));
    setCount(next);
    // Dispatch a custom event so other components on the same page update
    window.dispatchEvent(new CustomEvent("cart-update", { detail: next }));
  }, []);

  // Listen to custom cart-update events from other components
  useEffect(() => {
    const handler = (e: Event) => {
      setCount((e as CustomEvent).detail as number);
    };
    window.addEventListener("cart-update", handler);
    return () => window.removeEventListener("cart-update", handler);
  }, []);

  return { count, addItem };
}
