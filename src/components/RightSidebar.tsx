"use client";

import React from "react";
import { Minus, Plus, ChevronDown } from "lucide-react";

const recentResults = [
  { result: "Win", player1: "KillerPro", player2: "—", score: "1:0", amount: "+100,000", color: "text-green-400" },
  { result: "Loss", player1: "—", player2: "IronKhan", score: "0:2", amount: "-100,000", color: "text-red-400" },
  { result: "Win", player1: "—", player2: "ShadowX", score: "—", amount: "+200,000", color: "text-green-400" },
  { result: "Win", player1: "—", player2: "SuperNova", score: "2:0", amount: "+150,000", color: "text-green-400" },
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
        <h3 className="text-sm font-semibold mb-3">Recent Match Results</h3>
        <div className="space-y-2">
          {recentResults.map((r, i) => (
            <div key={i} className="flex items-center justify-between text-xs">
              <span className={`font-medium w-8 ${r.color}`}>{r.result}</span>
              <span className="text-gray-500">VS</span>
              <div className="flex items-center gap-1">
                <div className="w-4 h-4 rounded-full bg-dark-500"></div>
                <span className="text-gray-400 text-[10px]">{r.player1 !== "—" ? r.player1 : r.player2}</span>
              </div>
              <span className="text-gray-500 text-[10px]">{r.score}</span>
              <span className={`font-medium ${r.color}`}>{r.amount}</span>
            </div>
          ))}
        </div>
        <button className="w-full text-center text-xs text-gray-500 hover:text-white mt-3 py-1 border-t border-gray-800">
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
        <h3 className="text-sm font-semibold mb-1">Live Support</h3>
        <p className="text-xs text-gray-500 mb-3">24/7 Fast & Friendly Support</p>
        <div className="flex gap-3">
          <button className="w-10 h-10 rounded-full bg-blue-500 hover:bg-blue-400 flex items-center justify-center transition-colors">
            <span className="text-lg">✈️</span>
          </button>
          <button className="w-10 h-10 rounded-full bg-indigo-600 hover:bg-indigo-500 flex items-center justify-center transition-colors">
            <span className="text-lg">🎮</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
