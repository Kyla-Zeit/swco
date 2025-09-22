"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/public/logo.webp";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLink =
    "nav-link text-[1.125rem] lg:text-[1.2rem] font-medium tracking-[0.02em] opacity-80 hover:opacity-100 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 transition-colors";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[76px]">
          {/* Logo -> go home; if already on home, just scroll to top */}
          <Link
            href="/"
            onClick={(e) => {
              if (pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-12 lg:gap-16 xl:gap-20">
            <a href="#about" className={navLink}>Our Story</a>
            <a href="#projects" className={navLink}>Projects</a>
            <a href="#contact" className={navLink}>Contact</a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <Button
              size="sm"
              className="h-11 px-6 text-[1rem] bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              onClick={() => document.getElementById("donate")?.scrollIntoView({ behavior: "smooth" })}
            >
              Donate Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-6 h-6 text-foreground" /> : <Menu className="w-6 h-6 text-foreground" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-5 text-[1.125rem]">
              <a href="#about" className={navLink} onClick={() => setIsMenuOpen(false)}>About &amp; Story</a>
              <a href="#projects" className={navLink} onClick={() => setIsMenuOpen(false)}>Projects</a>
              <a href="#impact" className={navLink} onClick={() => setIsMenuOpen(false)}>Impact</a>
              <a href="#contact" className={navLink} onClick={() => setIsMenuOpen(false)}>Contact</a>
              <Button
                size="sm"
                className="mt-2 w-fit h-11 px-6 text-[1rem] bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                onClick={() => {
                  setIsMenuOpen(false);
                  document.getElementById("donate")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Donate Now
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
