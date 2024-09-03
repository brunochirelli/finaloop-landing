"use client";

import { useEffect } from "react";
import { Observer } from "tailwindcss-intersect";

/**
 * If we need to wrap the entire app in a provider, we can do it here.
 */
export function AllProviders({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // We also can start client side only services here.
    if (window) {
      Observer.start();
    }
  }, []);

  return <>{children}</>;
}
