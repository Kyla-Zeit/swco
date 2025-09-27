// components/header.tsx
"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Users, Quote } from "lucide-react";
import logo from "@/public/logo.webp";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const baseNav =
    "nav-link text-[1.125rem] lg:text-[1.2rem] font-medium tracking-[0.02em] opacity-80 hover:opacity-100 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 transition-colors";

  const navClass = (href: string) =>
    pathname === href ? `${baseNav} opacity-100 text-foreground` : baseNav;

  // Smooth scroll to a section by id (home page only)
  const scrollToId = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", `/#${id}`);
    }
  }, []);

  // Intercept in-page links only when we're already on "/"
  const handleInPage =
    (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (pathname === "/") {
        e.preventDefault();
        scrollToId(id);
        setIsMenuOpen(false);
      }
    };

// If already on home, clicking the logo just scrolls to top smoothly
const handleLogoClick = useCallback(
  (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      // Keep the current base path (e.g. /swco/) and just remove any #hash
      const url = window.location.pathname + window.location.search;
      history.replaceState(null, "", url);
    }
  },
  [pathname]
);


  // Submenu item base style (desktop)
  const subItemBase =
    "flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-foreground/90 hover:bg-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 transition";

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
            {/* About + modern dropdown */}
            <div className="relative group">
              <Link
                href="/#about"
                onClick={handleInPage("about")}
                className={`${baseNav} inline-flex items-center gap-1`}
                aria-haspopup="true"
                aria-expanded="false"
              >
                About
                <ChevronDown className="w-4 h-4 opacity-60 transition-transform group-hover:rotate-180" />
              </Link>

              {/* Dropdown (no dead gap; glassy panel + soft shadow + top accent line) */}
              <div
                className="
                  absolute left-0 top-full w-56 pt-3 z-50
                  opacity-0 translate-y-1 pointer-events-none
                  transition duration-150 ease-out
                  group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto
                  group-focus-within:opacity-100 group-focus-within:translate-y-0 group-focus-within:pointer-events-auto
                "
                role="menu"
              >
                <div className="relative rounded-2xl border border-border/70 bg-background/95 backdrop-blur-md shadow-2xl">
                  {/* subtle top gradient accent */}
                  <div className="absolute left-3 right-3 -top-px h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                  <div className="p-2">
                    <Link
                      href="/our-team"
                      className={`${subItemBase} ${pathname === "/our-team" ? "bg-muted/70" : ""}`}
                      role="menuitem"
                    >
                      <Users className="w-4 h-4 opacity-80" />
                      <span>Meet The Team</span>
                    </Link>
                    <Link
                      href="/#community-voices"
                      onClick={handleInPage("community-voices")}
                      className={subItemBase}
                      role="menuitem"
                    >
                      <Quote className="w-4 h-4 opacity-80" />
                      <span>Testimonials</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/#projects"
              onClick={handleInPage("projects")}
              className={baseNav}
            >
              Projects
            </Link>

            <Link
              href="/#contact"
              onClick={handleInPage("contact")}
              className={baseNav}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <Button
              asChild
              size="sm"
        className="btn-caps cursor-pointer h-11 px-6 text-[1rem] bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-none"
            >
              <Link href="/#donate" onClick={handleInPage("donate")}>
                Donate Now
              </Link>
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
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4 text-[1.125rem]">
              <Link
                href="/#about"
                onClick={handleInPage("about")}
                className={baseNav}
              >
                About
              </Link>
              {/* Sub-items under About */}
              <Link
                href="/our-team"
                className="pl-4 text-[1.05rem] opacity-80 hover:opacity-100 hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="inline-flex items-center gap-2">
                  <Users className="w-4 h-4" /> Meet The Team
                </span>
              </Link>
              <Link
                href="/#community-voices"
                onClick={handleInPage("community-voices")}
                className="pl-4 text-[1.05rem] opacity-80 hover:opacity-100 hover:text-foreground transition-colors"
              >
                <span className="inline-flex items-center gap-2">
                  <Quote className="w-4 h-4" /> Testimonials
                </span>
              </Link>

              <Link
                href="/#projects"
                onClick={handleInPage("projects")}
                className={baseNav}
              >
                Projects
              </Link>

              <Link
                href="/#contact"
                onClick={handleInPage("contact")}
                className={baseNav}
              >
                Contact
              </Link>

              <Button
                asChild
                size="sm"
                className="btn-caps mt-2 w-fit h-11 px-6 text-[1rem] bg-primary hover:bg-primary/90 text-primary-foreground font-semibold cursor-pointer"
              >
                <Link href="/#donate" onClick={handleInPage("donate")}>
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
