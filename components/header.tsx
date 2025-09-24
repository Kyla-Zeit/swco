// components/header.tsx
"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/public/logo.webp";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const baseNav =
    "nav-link text-[1.125rem] lg:text-[1.2rem] font-medium tracking-[0.02em] opacity-80 hover:opacity-100 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 transition-colors";

  // highlight when we're on an actual page route (e.g., /our-team)
  const navClass = (href: string) =>
    pathname === href ? `${baseNav} opacity-100 text-foreground` : baseNav;

  // If user is already on home, clicking logo scrolls to top smoothly
  const handleLogoClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (pathname === "/") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    },
    [pathname]
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[76px]">
          {/* Logo */}
          <Link
            href="/"
            onClick={handleLogoClick}
            className="flex items-center gap-3 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
          >
            <Image
              src={logo}
              alt="Samawada logo"
              width={160}
              height={40}
              priority
              className="h-10 w-auto object-contain"
            />
            <span className="text-[1.35rem] lg:text-[1.45rem] font-extrabold leading-none tracking-tight text-foreground">
              Samawada
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-12 lg:gap-16 xl:gap-20">
            <Link href="/#about" className={baseNav}>Our Story</Link>
            <Link href="/#projects" className={baseNav}>Projects</Link>
            <Link href="/our-team" className={navClass("/our-team")}>Team</Link>
            <Link href="/#impact" className={baseNav}>Impact</Link>
            <Link href="/#contact" className={baseNav}>Contact</Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <Button
              asChild
              size="sm"
              className="btn-caps cursor-pointer h-11 px-6 text-[1rem] bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            >
              <Link href="/#donate">Donate Now</Link>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-top border-border">
            <nav className="flex flex-col space-y-5 text-[1.125rem]">
              <Link href="/#about" className={baseNav} onClick={() => setIsMenuOpen(false)}>Our Story</Link>
              <Link href="/#projects" className={baseNav} onClick={() => setIsMenuOpen(false)}>Projects</Link>
              <Link href="/our-team" className={navClass("/our-team")} onClick={() => setIsMenuOpen(false)}>Team</Link>
              <Link href="/#impact" className={baseNav} onClick={() => setIsMenuOpen(false)}>Impact</Link>
              <Link href="/#contact" className={baseNav} onClick={() => setIsMenuOpen(false)}>Contact</Link>

              <Button
                asChild
                size="sm"
                className="btn-caps mt-2 w-fit h-11 px-6 text-[1rem] bg-primary hover:bg-primary/90 text-primary-foreground font-semibold cursor-pointer"
              >
                <Link href="/#donate" onClick={() => setIsMenuOpen(false)}>
                  Donate Now
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
