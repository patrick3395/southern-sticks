"use client";

import { useEffect, useRef, useState } from "react";

export function useInView(options?: { threshold?: number; triggerOnce?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const threshold = options?.threshold ?? 0.15;
  const triggerOnce = options?.triggerOnce ?? true;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (triggerOnce) observer.unobserve(el);
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, triggerOnce]);

  return [ref, isInView] as const;
}
