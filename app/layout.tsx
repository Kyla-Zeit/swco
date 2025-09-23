// app/layout.tsx
import "./globals.css"; // keep this
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Work_Sans as WorkSans, Open_Sans as OpenSans } from "next/font/google";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

const workSans = WorkSans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
});

const openSans = OpenSans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Samawada - Clean Water for East Africa",
  description:
    "Canadian registered charity providing access to clean water to underserved communities in East Africa.",
  openGraph: {
    title: "Samawada - Clean Water for East Africa",
    description:
      "Providing access to clean water to underserved communities in East Africa.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${workSans.variable} ${openSans.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {/* header is fixed; pad the top so content isn't hidden */}
          <main className="pt-16 lg:pt-[76px]">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
