"use client";

import { useSyncExternalStore } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const query = "(prefers-color-scheme: dark)";
function subscribe(callback: () => void) {
  const media = window.matchMedia(query);
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}
function getSnapshot() {
  return window.matchMedia(query).matches ? "dark" : "light";
}
function getServerSnapshot() {
  return undefined;
}

export function ThemeProvider(
  props: React.ComponentProps<typeof NextThemesProvider>,
) {
  const appearance = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );
  return (
    <NextThemesProvider
      {...props}
      defaultTheme="system"
      enableSystem
      forcedTheme={appearance}
      storageKey="components-system-appearance"
    />
  );
}
