"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// Let TS infer the prop types from the library component
type ThemeProviderProps = React.ComponentProps<typeof NextThemesProvider>;

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
