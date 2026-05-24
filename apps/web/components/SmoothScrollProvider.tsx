"use client";

import { ReactNode, useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

interface SmoothScrollProviderProps {
  children: ReactNode;
}

export default function SmoothScrollProvider({
  children,
}: SmoothScrollProviderProps) {
  const lenisRef = useRef<Lenis | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    // Disable smooth scroll for accessibility users
    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (mediaQuery.matches) return;

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
    //   smoothTouch: false, 
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      easing: (t: number) => 1 - Math.pow(1 - t, 4),
    });

    lenisRef.current = lenis;

    const raf = (time: number) => {
      lenis.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    };

    rafRef.current = requestAnimationFrame(raf);

    // Refresh on resize
    const resizeObserver = new ResizeObserver(() => {
      lenis.resize();
    });

    resizeObserver.observe(document.body);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      resizeObserver.disconnect();

      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <>{children}</>;
}