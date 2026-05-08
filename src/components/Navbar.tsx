"use client";

import React from "react";
import Image from "next/image";

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
            className="h-10 w-auto object-contain"
            priority
          />
        </a>

        {/* Nav Links */}
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

        {/* Auth Buttons */}
        <div className="flex items-center gap-2">
          <button className="btn-outline text-sm">Login</button>
          <button className="btn-primary text-sm">Sign Up</button>
        </div>
      </div>
    </nav>
  );
}
