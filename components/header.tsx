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

  // smooth-scroll helper (home page only)
  const scrollToId = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", `/#${id}`);
    }
  }, []);

  const handleInPage =
    (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (pathname === "/") {
        e.preventDefault();
        scrollToId(id);
        setIsMenuOpen(false);
      }
    };

  const handleLogoClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (pathname === "/") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        history.replaceState(null, "", "/");
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
            className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
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
            {/* About + dropdown (modern, square) */}
            <div className="relative group">
              <Link
                href="/#about"
                onClick={handleInPage("about")}
                className={`${baseNav} inline-flex items-center gap-1`}
              >
                About
                <ChevronDown className="w-4 h-4 opacity-60 transition group-hover:opacity-100 group-hover:-rotate-180" />
              </Link>

              {/* Animated panel wrapper */}
<div
  className="
    pointer-events-none absolute left-0 top-full w-[280px] pt-2 origin-top-left
    scale-95 opacity-0 transition duration-200 z-50
    group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto
  "
>

                {/* Panel */}
                <div className="rounded-[0px] border border-border/70 bg-background/95 backdrop-blur-md shadow-[0_12px_40px_rgba(0,0,0,0.10)]">
                  {/* Thin accent bar */}
                  <div className="h-[3px] bg-gradient-to-r from-primary via-emerald-400 to-primary" />

                  {/* Items */}
                  <Link
                    href="/our-team"
                    className="group/item flex items-start gap-3 px-4 py-3 hover:bg-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-[0px]"
                  >
                    <div className="mt-0.5 grid h-7 w-7 place-items-center border border-border/60 bg-muted/30 text-foreground/70 rounded-[0px] transition group-hover/item:text-primary group-hover/item:border-primary/60">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-medium leading-none">Meet The Team</div>
                      <div className="mt-1 text-[12px] leading-tight text-muted-foreground">
                        Leadership & board
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/#community-voices"
                    onClick={handleInPage("community-voices")}
                    className="group/item flex items-start gap-3 px-4 py-3 hover:bg-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-[0px]"
                  >
                    <div className="mt-0.5 grid h-7 w-7 place-items-center border border-border/60 bg-muted/30 text-foreground/70 rounded-[0px] transition group-hover/item:text-primary group-hover/item:border-primary/60">
                      <Quote className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-medium leading-none">Testimonials</div>
                      <div className="mt-1 text-[12px] leading-tight text-muted-foreground">
                        Community voices
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/#projects" onClick={handleInPage("projects")} className={baseNav}>
              Projects
            </Link>

            {/* Events in nav */}
            <Link href="/#events" onClick={handleInPage("events")} className={baseNav}>
              Events
            </Link>

            <Link href="/#contact" onClick={handleInPage("contact")} className={baseNav}>
              Contact
            </Link>
          </nav>

          {/* Desktop CTA (square) */}
          <div className="hidden md:flex">
            <Button
              asChild
              size="sm"
              className="btn-caps cursor-pointer h-11 px-6 text-[1rem] bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-[0px]"
            >
              <Link href="/#donate" onClick={handleInPage("donate")}>
                Donate Now
              </Link>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-6 h-6 text-foreground" /> : <Menu className="w-6 h-6 text-foreground" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4 text-[1.125rem]">
              <Link href="/#about" onClick={handleInPage("about")} className={baseNav}>
                About
              </Link>
              <Link
                href="/our-team"
                className="pl-4 text-[1.05rem] opacity-80 hover:opacity-100 hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Meet The Team
              </Link>
              <Link
                href="/#community-voices"
                onClick={handleInPage("community-voices")}
                className="pl-4 text-[1.05rem] opacity-80 hover:opacity-100 hover:text-foreground transition-colors"
              >
                Testimonials
              </Link>

              <Link href="/#projects" onClick={handleInPage("projects")} className={baseNav}>
                Projects
              </Link>
              <Link href="/#events" onClick={handleInPage("events")} className={baseNav}>
                Events
              </Link>
              <Link href="/#contact" onClick={handleInPage("contact")} className={baseNav}>
                Contact
              </Link>

              <Button
                asChild
                size="sm"
                className="btn-caps mt-2 w-fit h-11 px-6 text-[1rem] bg-primary hover:bg-primary/90 text-primary-foreground font-semibold cursor-pointer rounded-[0px]"
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
