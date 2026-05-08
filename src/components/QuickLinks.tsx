"use client";

import React from "react";
import { Zap, Users, MessageCircle, Bell, Headphones } from "lucide-react";

const links = [
  { icon: Zap, label: "Join Live Match", sub: "Jump into action" },
  { icon: Users, label: "Find / Recruit", sub: "Team Members" },
  { icon: MessageCircle, label: "Community", sub: "Discussions" },
  { icon: Bell, label: "Latest", sub: "Announcements" },
  { icon: Headphones, label: "Customer Support", sub: "Help & Support" },
];

export default function QuickLinks() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 py-4 border-b border-gray-800">
      {links.map((link) => (
        <button
          key={link.label}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
        >
          <link.icon className="w-4 h-4 text-gray-500 group-hover:text-primary" />
          <div className="text-left">
            <p className="text-xs font-medium">{link.label}</p>
            <p className="text-[10px] text-gray-600 hidden sm:block">{link.sub}</p>
          </div>
        </button>
      ))}
    </div>
  );
}
