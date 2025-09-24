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
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /** Base link style for nav items */
  const baseNav =
    "nav-link text-[1.125rem] lg:text-[1.2rem] font-medium tracking-[0.02em] opacity-80 hover:opacity-100 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 transition-colors";

  /** Add active state when we're actually on that route (e.g., /our-team) */
  const navClass = (href: string) =>
    pathname === href ? `${baseNav} opacity-100 text-foreground` : baseNav;

  /** If already on home, logo click scrolls to top smoothly */
  const handleLogoClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (pathname === "/") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    },
    [pathname]
  );

  /** Top-level groups → become dropdowns on desktop, sections in mobile */
  const groups = [
    {
      label: "About",
      items: [
        { label: "Our Story", href: "/#about" },
        { label: "Approach", href: "/what-we-do" }, // your "See Our Approach" page
        { label: "Team", href: "/our-team" },
      ],
    },
    {
      label: "Work",
      items: [
        { label: "Projects", href: "/#projects" },
        { label: "Impact", href: "/#impact" },
      ],
    },
    {
      label: "Stories", // or "Voices"
      items: [
        { label: "Community Voices", href: "/#testimonials" },
        { label: "Events", href: "/#events" },
      ],
    },
  ] as const;

  /** Singles that stay top-level */
  const singles = [{ label: "Contact", href: "/#contact" }] as const;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bar */}
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
          <nav className="hidden md:flex items-center gap-8 lg:gap-12 xl:gap-14">
            {/* Dropdown groups */}
            {groups.map((grp) => (
              <div key={grp.label} className="relative group">
                <button
                  className={`${baseNav} inline-flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50`}
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {grp.label}
                  <span aria-hidden>▾</span>
                </button>

                {/* Dropdown menu */}
                <div
                  className="invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0
                             group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-0
                             transition-all duration-150
                             absolute left-0 top-full mt-2 min-w-[200px] rounded-xl border border-border bg-card shadow-lg"
                >
                  <ul className="py-2">
                    {grp.items.map((it) => (
                      <li key={it.href}>
                        <Link
                          href={it.href}
                          className="block px-4 py-2 text-sm opacity-90 hover:opacity-100 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                        >
                          {it.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            {/* Single items */}
            {singles.map((it) => (
              <Link key={it.href} href={it.href} className={baseNav}>
                {it.label}
              </Link>
            ))}
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
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-5 text-[1.125rem]">
              {groups.map((grp) => (
                <div key={grp.label} className="space-y-2">
                  <div className="font-semibold opacity-90">{grp.label}</div>
                  <div className="ml-3 space-y-3">
                    {grp.items.map((it) => (
                      <Link
                        key={it.href}
                        href={it.href}
                        className={baseNav}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {it.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}

              {singles.map((it) => (
                <Link
                  key={it.href}
                  href={it.href}
                  className={baseNav}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {it.label}
                </Link>
              ))}

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
