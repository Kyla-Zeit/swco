"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
// NOTE: import the prop types so TS knows about `attribute`, `defaultTheme`, etc.
import type { ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
