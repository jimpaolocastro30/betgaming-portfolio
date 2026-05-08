"use client";

import React, { useState } from "react";
import Image from "next/image";
import { User, Lock, Send } from "lucide-react";

const chatMessages = [
  { user: "System", time: "23:45", message: "Anyone up for a match?", avatar: "/avatars/system.svg" },
  { user: "BattleMaster", time: "23:45", message: "I'm in! Let's do this!", avatar: "/avatars/battlemaster.svg" },
  { user: "No.1Player", time: "23:46", message: "What game are we playing?", avatar: "/avatars/no1player.svg" },
  { user: "GameKing", time: "23:46", message: "I made a 15k prize match. Anyone interested?", avatar: "/avatars/gameking.svg" },
  { user: "ChoiGamer", time: "23:47", message: "Count me in!", avatar: "/avatars/choigamer.svg" },
  { user: "ProGamer", time: "23:48", message: "I've joined the match!", avatar: "/avatars/progamer.svg" },
];

export default function LeftSidebar() {
  const [message, setMessage] = useState("");

  return (
    <aside className="w-[220px] flex-shrink-0 flex flex-col gap-4">
      {/* Login Box */}
      <div className="card p-4">
        <div className="space-y-3">
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Username"
              className="input-dark w-full pl-9 text-sm"
            />
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="password"
              placeholder="Password"
              className="input-dark w-full pl-9 text-sm"
            />
          </div>
          <button className="btn-primary w-full text-sm">Login</button>
          <div className="flex items-center justify-between text-xs text-gray-500">
            <label className="flex items-center gap-1 cursor-pointer">
              <input type="checkbox" className="w-3 h-3 accent-yellow-500" />
              Remember Me
            </label>
            <div className="flex gap-1">
              <a href="#" className="hover:text-white">Forgot Info</a>
              <span>|</span>
              <a href="#" className="hover:text-white">Sign Up</a>
            </div>
          </div>
        </div>
      </div>

      {/* Live Chat */}
      <div className="card flex-1 flex flex-col">
        <div className="p-3 border-b border-gray-800 flex items-center justify-between">
          <span className="font-semibold text-sm">Live Chat</span>
          <span className="flex items-center gap-1 text-xs text-green-400">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            120
          </span>
        </div>
        <div className="flex-1 overflow-y-auto p-3 space-y-3 max-h-[350px]">
          {chatMessages.map((msg, i) => (
            <div key={i} className="flex gap-2">
              <div className="w-7 h-7 rounded-full bg-dark-500 flex-shrink-0 overflow-hidden">
                <Image
                  src={msg.avatar}
                  alt={msg.user}
                  width={28}
                  height={28}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-gray-300">{msg.user}</span>
                  <span className="text-[10px] text-gray-600">{msg.time}</span>
                </div>
                <p className="text-xs text-gray-400 break-words">{msg.message}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="p-3 border-t border-gray-800">
          <div className="relative">
            <input
              type="text"
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="input-dark w-full pr-8 text-xs"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-primary">
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
