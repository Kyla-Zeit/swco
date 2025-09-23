"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// Infer the props from the library's ThemeProvider so TS stays happy
type ThemeProviderProps = React.ComponentProps<typeof NextThemesProvider>;

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
