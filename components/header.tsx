// components/header.tsx
"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Users, Quote } from "lucide-react";
import logo from "@/public/logo.webp";

export function Header() {
  const pathname = usePathname();

  // mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // desktop "About" dropdown
  const [aboutOpen, setAboutOpen] = useState(false);
  const aboutTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openAbout = useCallback(() => {
    if (aboutTimer.current) clearTimeout(aboutTimer.current);
    setAboutOpen(true);
  }, []);

  const closeAbout = useCallback(() => {
    // small grace so tiny gaps don't close it instantly
    if (aboutTimer.current) clearTimeout(aboutTimer.current);
    aboutTimer.current = setTimeout(() => setAboutOpen(false), 120);
  }, []);

  const baseNav =
    "nav-link text-[1.125rem] lg:text-[1.2rem] font-medium tracking-[0.02em] opacity-80 hover:opacity-100 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 transition-colors";

  const navClass = (href: string) =>
    pathname === href ? `${baseNav} opacity-100 text-foreground` : baseNav;

  // Smooth-scroll helper for sections on the home page
  const scrollToId = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      // keep the hash in the URL without a jump
      history.replaceState(null, "", `/#${id}`);
    }
  }, []);

  // Intercept only when already on "/"
  const handleInPage = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      scrollToId(id);
      setIsMenuOpen(false);
    }
  };

  // Logo behavior: smooth scroll to top when already on "/"
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
            {/* About (keeps menu open while hovering anywhere over trigger+menu) */}
            <div
              className="relative"
              onMouseEnter={openAbout}
              onMouseLeave={closeAbout}
              onFocusCapture={openAbout}
              onBlurCapture={closeAbout}
            >
              <Link
                href="/#about"
                onClick={handleInPage("about")}
                className={`${baseNav} inline-flex items-center gap-1`}
                aria-expanded={aboutOpen}
                aria-haspopup="menu"
              >
                About
                <ChevronDown className={`w-4 h-4 transition ${aboutOpen ? "opacity-100 rotate-180" : "opacity-60"}`} />
              </Link>

              {/* Dropdown */}
              <div
                className={`absolute left-0 top-full z-50 w-72 border border-border bg-background shadow-xl
                            rounded-none transition origin-top
                            ${aboutOpen ? "pointer-events-auto opacity-100 translate-y-0" : "pointer-events-none opacity-0 -translate-y-1"}`}
                role="menu"
              >
                {/* top accent */}
                <div className="h-[3px] w-full bg-gradient-to-r from-primary via-emerald-400 to-primary" />

                <ul className="p-2">
                  <li>
                    <Link
                      href="/our-team"
                      className="flex items-start gap-3 px-3 py-3 rounded-none hover:bg-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                      role="menuitem"
                    >
                      <Users className="mt-[2px] h-5 w-5 opacity-80" />
                      <span className="leading-tight">
                        <span className="font-medium">Meet The Team</span>
                        <br />
                        <span className="text-sm text-muted-foreground">Leadership &amp; board</span>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#community-voices"
                      onClick={handleInPage("community-voices")}
                      className="flex items-start gap-3 px-3 py-3 rounded-none hover:bg-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                      role="menuitem"
                    >
                      <Quote className="mt-[2px] h-5 w-5 opacity-80" />
                      <span className="leading-tight">
                        <span className="font-medium">Testimonials</span>
                        <br />
                        <span className="text-sm text-muted-foreground">Community voices</span>
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <Link href="/#projects" onClick={handleInPage("projects")} className={baseNav}>
              Projects
            </Link>

            <Link href="/#events" onClick={handleInPage("events")} className={baseNav}>
              Events
            </Link>

            <Link href="/#contact" onClick={handleInPage("contact")} className={baseNav}>
              Contact
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <Button
              asChild
              size="sm"
              className="btn-caps h-11 px-6 text-[1rem] bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-none cursor-pointer"
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
              {/* sub-items under About */}
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
                className="btn-caps mt-2 w-fit h-11 px-6 text-[1rem] bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-none cursor-pointer"
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
