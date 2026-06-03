"use client";

import { useEffect } from "react";

export default function LenisProvider({ children }) {
  useEffect(() => {
    let lenis;
    let rafId;

    // Dynamically import Lenis only on the client when effect runs
    let mounted = true;
    import("lenis").then(({ default: Lenis }) => {
      if (!mounted) return;
      lenis = new Lenis({
        duration: 1.2,
        smoothWheel: true,
        smoothTouch: false,
      });

      function raf(time) {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      }

      rafId = requestAnimationFrame(raf);
    }).catch(() => {
      // ignore import failure in environments without window
    });

    return () => {
      mounted = false;
      if (rafId) cancelAnimationFrame(rafId);
      try { lenis?.destroy(); } catch (e) { }
    };
  }, []);

  return children;
}
