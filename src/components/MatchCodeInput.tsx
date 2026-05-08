"use client";

import React, { useState } from "react";
import { HelpCircle } from "lucide-react";

export default function MatchCodeInput() {
  const [code, setCode] = useState("");

  return (
    <div className="border-2 border-red-600 rounded-lg p-3 flex items-center gap-3">
      <span className="text-sm font-semibold text-white whitespace-nowrap">Enter Match Code</span>
      <input
        type="text"
        placeholder="Enter your match code (e.g., ABC123)"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="input-dark flex-1 text-sm"
      />
      <button className="btn-primary text-sm whitespace-nowrap">Join Match</button>
      <button className="text-gray-500 hover:text-white">
        <HelpCircle className="w-5 h-5" />
      </button>
    </div>
  );
}
