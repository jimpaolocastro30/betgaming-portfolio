"use client";

import React from "react";
import Image from "next/image";
import { Minus, Plus, ChevronDown } from "lucide-react";

const recentResults = [
  { result: "Win", player: "KillerPro", score: "1 : 0", amount: "+100,000", isWin: true, avatar: "/avatars/killerpro.png" },
  { result: "Loss", player: "IronMan", score: "0 : 2", amount: "-100,000", isWin: false, avatar: "/avatars/ironman.png" },
  { result: "Win", player: "ShadowX", score: "2 : 1", amount: "+200,000", isWin: true, avatar: "/avatars/shadowx.png" },
  { result: "Win", player: "SuperNova", score: "2 : 0", amount: "+150,000", isWin: true, avatar: "/avatars/supernova.png" },
];

const announcements = [
  { tag: "[Maintenance]", title: "Server Maintenance Notice", date: "05-14" },
  { tag: "[Event]", title: "Family Day Event Notice", date: "05-10" },
  { tag: "[Notice]", title: "New Season 1 Update", date: "05-08" },
];

export default function RightSidebar() {
  return (
    <aside className="w-[260px] flex-shrink-0 space-y-4">
      {/* Ongoing Matches / Create Match */}
      <div className="card p-4 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold">Ongoing Matches</h3>
          <a href="#" className="text-xs text-gray-500 hover:text-white">View More &gt;</a>
        </div>

        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-white">Create Match</h4>

          {/* Select Game */}
          <div>
            <label className="text-xs text-gray-400 mb-1 block">Select Game</label>
            <div className="relative">
              <select className="input-dark w-full text-sm appearance-none pr-8">
                <option>Select Game</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>
          </div>

          {/* Match Type */}
          <div>
            <label className="text-xs text-gray-400 mb-1 block">Match Type</label>
            <div className="relative">
              <select className="input-dark w-full text-sm appearance-none pr-8">
                <option>1v1 Match</option>
                <option>Team Match</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>
          </div>

          {/* Stake Amount */}
          <div>
            <label className="text-xs text-gray-400 mb-1 block">Stake Amount</label>
            <div className="flex items-center gap-2">
              <button className="w-8 h-8 rounded bg-dark-600 border border-gray-700 flex items-center justify-center hover:border-primary">
                <Minus className="w-3 h-3" />
              </button>
              <input
                type="text"
                defaultValue="100,000"
                className="input-dark flex-1 text-center text-sm"
              />
              <button className="w-8 h-8 rounded bg-dark-600 border border-gray-700 flex items-center justify-center hover:border-primary">
                <Plus className="w-3 h-3" />
              </button>
            </div>
          </div>

          <button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white font-semibold py-2.5 rounded-lg text-sm transition-all">
            Create Match
          </button>
        </div>
      </div>

      {/* Recent Match Results */}
      <div className="card p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-bold text-white">Recent Match Results</h3>
          <a href="#" className="text-xs text-gray-400 hover:text-white">View More &gt;</a>
        </div>
        <div className="space-y-3">
          {recentResults.map((r, i) => (
            <div key={i} className="flex items-center gap-3 py-2 border-b border-gray-800 last:border-b-0">
              {/* Result */}
              <span className={`text-sm font-bold w-10 ${r.isWin ? "text-green-400" : "text-red-400"}`}>
                {r.result}
              </span>
              {/* VS */}
              <span className="text-sm text-gray-500 font-medium">VS</span>
              {/* Avatar */}
              <div className="w-9 h-9 rounded-full bg-dark-500 overflow-hidden flex-shrink-0 border border-gray-700">
                <Image
                  src={r.avatar}
                  alt={r.player}
                  width={36}
                  height={36}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Player + Score */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-white truncate">{r.player}</p>
                <p className="text-xs text-gray-500">{r.score}</p>
              </div>
              {/* Amount */}
              <span className={`text-sm font-bold ${r.isWin ? "text-green-400" : "text-red-400"}`}>
                {r.amount}
              </span>
            </div>
          ))}
        </div>
        <button className="w-full text-center text-sm font-semibold text-gray-400 hover:text-white mt-3 py-2 border-t border-gray-700">
          View All Results
        </button>
      </div>

      {/* Announcements / Mayday */}
      <div className="card p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white font-black text-lg px-3 py-1 rounded">
            Mayday
          </div>
          <a href="#" className="text-xs text-gray-500 hover:text-white">View More &gt;</a>
        </div>
        <div className="space-y-2">
          {announcements.map((a, i) => (
            <div key={i} className="flex items-center justify-between text-xs">
              <span className="text-gray-400 truncate flex-1">
                <span className="text-yellow-500">{a.tag}</span> {a.title}
              </span>
              <span className="text-gray-600 ml-2">{a.date}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Live Support */}
      <div className="card p-4">
        <h3 className="text-base font-bold text-white mb-1">Live Support</h3>
        <p className="text-sm text-gray-400 mb-4">24/7 Fast & Friendly Support</p>
        <div className="flex items-center justify-center gap-6">
          <a
            href="#"
            className="w-12 h-12 rounded-full bg-[#29a9ea] hover:bg-[#3bb8f5] flex items-center justify-center transition-colors shadow-lg"
            aria-label="Telegram Support"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 text-white fill-current">
              <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"/>
            </svg>
          </a>
          <a
            href="#"
            className="w-12 h-12 rounded-full bg-[#5865F2] hover:bg-[#6b76f5] flex items-center justify-center transition-colors shadow-lg"
            aria-label="Discord Support"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 text-white fill-current">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
          </a>
        </div>
      </div>
    </aside>
  );
}
