"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#", active: true },
  { label: "Live Match", href: "#" },
  { label: "Find Team / Recruit", href: "#" },
  { label: "Community", href: "#" },
  { label: "Info Sharing", href: "#" },
  { label: "Announcements", href: "#" },
  { label: "Support", href: "#" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-dark-800 border-b border-gray-800 px-4 py-3">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex-shrink-0">
          <Image
            src="/logo.png"
            alt="DONBBANG"
            width={160}
            height={40}
            className="h-8 sm:h-10 w-auto object-contain"
            priority
          />
        </a>

        {/* Nav Links - Desktop */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
                link.active
                  ? "bg-dark-600 text-white"
                  : "text-gray-400 hover:text-white hover:bg-dark-700"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Auth Buttons + Mobile Menu Toggle */}
        <div className="flex items-center gap-2">
          <button className="btn-outline text-sm hidden sm:block">Login</button>
          <button className="btn-primary text-sm hidden sm:block">Sign Up</button>
          <button
            className="lg:hidden p-2 text-gray-400 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 pb-3 border-t border-gray-800 pt-3">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
                  link.active
                    ? "bg-dark-600 text-white"
                    : "text-gray-400 hover:text-white hover:bg-dark-700"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex gap-2 mt-3 px-3 sm:hidden">
            <button className="btn-outline text-sm flex-1">Login</button>
            <button className="btn-primary text-sm flex-1">Sign Up</button>
          </div>
        </div>
      )}
    </nav>
  );
}
