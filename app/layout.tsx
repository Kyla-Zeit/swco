import type React from "react"
import type { Metadata } from "next"
import { Work_Sans, Open_Sans } from "next/font/google"
import "./globals.css"

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Samawada - Clean Water for East Africa",
  description:
    "Canadian registered charity providing access to clean water to underserved communities in East Africa, with particular focus in Somalia.",
  keywords: "charity, clean water, East Africa, Somalia, donation, humanitarian aid",
  openGraph: {
    title: "Samawada - Clean Water for East Africa",
    description: "Providing access to clean water to underserved communities in East Africa",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${workSans.variable} ${openSans.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
