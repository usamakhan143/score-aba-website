import { useEffect } from 'react';
import Lenis from 'lenis';

let __lenisInstance = null;
let __rafId = null;

export function useLenis(options = {}) {
  useEffect(() => {
    if (!__lenisInstance) {
      __lenisInstance = new Lenis({
        duration: 0.6,
        smoothWheel: true,
        smoothTouch: false,
        touchMultiplier: 1.5,
        gestureOrientation: 'vertical',
        lerp: 0.15,
        wheelMultiplier: 1,
        infinite: false,
        normalizeWheel: true,
        ...options,
      });

      const raf = (time) => {
        __lenisInstance?.raf(time);
        __rafId = requestAnimationFrame(raf);
      };
      __rafId = requestAnimationFrame(raf);
    }

    return () => {
      // Keep singleton alive across route changes/HMR; do not destroy instance
      // If you need to fully disable on unmount, uncomment below
      // if (__rafId) cancelAnimationFrame(__rafId);
      // __lenisInstance?.destroy();
      // __lenisInstance = null;
    };
  }, []);

  return __lenisInstance;
}
