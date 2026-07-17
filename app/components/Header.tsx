"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Download, Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "Services", href: "/services" },
  { name: "E-Commerce", href: "/ecommerce-expertise" },
  { name: "Certificates", href: "/certificates" },
  { name: "Education", href: "/education" },
  { name: "Resume", href: "/resume" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const Header: React.FC = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isMenuOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-md dark:border-gray-700 dark:bg-gray-900/90">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" aria-label="Danish Shahzad home" onClick={() => setIsMenuOpen(false)} className="text-xl font-bold text-gray-900 dark:text-white">
            Danish Shahzad
          </Link>
          <nav aria-label="Primary navigation" className="hidden xl:flex items-center gap-4">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} aria-current={isActive(item.href) ? "page" : undefined} className={`rounded-md px-1 py-2 text-sm font-medium transition-colors ${isActive(item.href) ? "text-primary" : "text-gray-700 hover:text-primary dark:text-gray-300"}`}>
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Link href="/resume" aria-current={pathname === "/resume" ? "page" : undefined} className={`hidden items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-white sm:inline-flex ${pathname === "/resume" ? "bg-secondary ring-2 ring-purple-300" : "bg-primary hover:bg-primary/90"}`}>
              <Download size={16} /> CV
            </Link>
            <button onClick={toggleTheme} aria-label={`Switch to ${isDark ? "light" : "dark"} theme`} aria-pressed={isDark} className="rounded-lg bg-gray-100 p-2 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700">
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => setIsMenuOpen((open) => !open)} aria-label="Toggle navigation" aria-expanded={isMenuOpen} aria-controls="mobile-navigation" className="rounded-lg bg-gray-100 p-2 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700 xl:hidden">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <nav id="mobile-navigation" aria-label="Mobile navigation" className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-gray-200 py-4 dark:border-gray-700 xl:hidden">
            <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} aria-current={isActive(item.href) ? "page" : undefined} onClick={() => setIsMenuOpen(false)} className={`rounded-lg px-3 py-2 font-medium ${isActive(item.href) ? "bg-primary/10 text-primary" : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"}`}>
                  {item.name}
                </Link>
              ))}
              <Link href="/resume" aria-current={pathname === "/resume" ? "page" : undefined} onClick={() => setIsMenuOpen(false)} className={`rounded-lg px-3 py-2 font-medium sm:hidden ${pathname === "/resume" ? "bg-primary/10 text-primary" : "text-primary"}`}>Resume / Download CV</Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
