"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "@/lib/nav";
import Image from "next/image";

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-black text-white fixed top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/FawarisOneTechnologies-logo.png" // Make sure your logo is in the public/ folder
            alt="Infinity Techvision"
            className="h-14 w-auto" // Adjust height; width auto keeps aspect ratio
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`${isActive ? "text-blue-400 font-semibold" : "text-white"
                  } hover:text-blue-400 transition`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            href="/help"
            className="ml-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-full transition"
          >
            Get Help
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md text-white focus:outline-none"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black w-full px-4 py-2 flex flex-col gap-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`${isActive ? "text-blue-400 font-semibold" : "text-white"
                  } hover:text-blue-400 transition`}
                aria-current={isActive ? "page" : undefined}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            href="/help"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-full transition"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get Help
          </Link>
        </div>
      )}
    </header>
  );
}
