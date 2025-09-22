"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// Re-export a thin wrapper with the same props as next-themes
export function ThemeProvider(
  props: React.ComponentProps<typeof NextThemesProvider>
) {
  return <NextThemesProvider {...props} />;
}
