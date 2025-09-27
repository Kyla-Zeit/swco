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

  // Smooth-scroll helper (home page only)
  const scrollToId = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      // keep current path (/swco) – just update the hash
      history.replaceState(null, "", `#${id}`);
    }
  }, []);

  // Intercept hash links only on home page
  const handleInPage = (id: string) =>
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (pathname === "/") {
        e.preventDefault();
        scrollToId(id);
        setIsMenuOpen(false);
      }
    };

  // Logo: on home → smooth scroll; on other pages → normal link
  const handleLogoClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (pathname === "/") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        // do not touch history here so /swco is preserved
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
            {/* About + submenu */}
            <div className="relative group">
              <Link
                href="/#about"
                onClick={handleInPage("about")}
                className={`${baseNav} inline-flex items-center gap-1`}
              >
                About
                <ChevronDown className="w-4 h-4 opacity-60 group-hover:opacity-100 transition" />
              </Link>

              {/* Dropdown (flat corners per your request) */}
              <div
                className="
                  pointer-events-none absolute left-0 mt-2 w-64 border border-border
                  bg-background shadow-lg opacity-0 translate-y-1 transition
                  group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto
                  group-focus-within:opacity-100 group-focus-within:translate-y-0 group-focus-within:pointer-events-auto
                "
              >
                <Link
                  href="/our-team"
                  className="flex items-start gap-3 px-4 py-3 text-sm hover:bg-muted/60"
                >
                  <Users className="w-4 h-4 mt-[2px] opacity-70" />
                  <span>
                    <div className="font-medium">Meet The Team</div>
                    <div className="text-xs opacity-70">Leadership &amp; board</div>
                  </span>
                </Link>

                <Link
                  href="/#community-voices"
                  onClick={handleInPage("community-voices")}
                  className="flex items-start gap-3 px-4 py-3 text-sm hover:bg-muted/60"
                >
                  <Quote className="w-4 h-4 mt-[2px] opacity-70" />
                  <span>
                    <div className="font-medium">Testimonials</div>
                    <div className="text-xs opacity-70">Community voices</div>
                  </span>
                </Link>
              </div>

              {/* top border accent */}
              <div className="absolute inset-x-0 -top-[10px] h-[3px] bg-primary/70 opacity-0 group-hover:opacity-100 transition" />
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
                className="btn-caps mt-2 w-fit h-11 px-6 text-[1rem] bg-primary hover:bg-primary/90 text-primary-foreground font-semibold cursor-pointer rounded-none"
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
