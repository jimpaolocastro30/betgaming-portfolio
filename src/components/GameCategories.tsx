"use client";

import React, { useState } from "react";
import Image from "next/image";

const categories = ["All", "Strategy (RTS)", "Fighting", "Sports", "FPS"];

const games = {
  "Strategy (RTS)": [
    { name: "StarCraft Remastered", image: "/games/starcraft.png" },
    { name: "StarCraft II", image: "/games/starcraft2.png" },
    { name: "Dota 2", image: "/games/dota2.png" },
  ],
  Fighting: [
    { name: "Tekken 7", image: "/games/tekken7.png" },
  ],
  FPS: [
    { name: "Sudden Attack", image: "/games/sudden-attack.png" },
    { name: "Overwatch 2", image: "/games/overwatch2.png" },
    { name: "Valorant", image: "/games/valorant.png" },
    { name: "Counter Strike 2", image: "/games/cs2.png" },
  ],
};

function GameCard({ name, image }: { name: string; image: string }) {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-square rounded-lg overflow-hidden bg-dark-600 border border-gray-800 group-hover:border-primary transition-colors">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-2">
          <p className="text-xs text-center text-white font-bold truncate drop-shadow-lg">
            {name}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function GameCategories() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredGames = activeCategory === "All"
    ? games
    : { [activeCategory]: games[activeCategory as keyof typeof games] || [] };

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold">Game Categories</h3>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1.5 rounded text-xs font-medium transition-colors ${
              activeCategory === cat
                ? "bg-green-600 text-white"
                : "bg-dark-600 text-gray-400 hover:text-white border border-gray-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Game Sections */}
      {Object.entries(filteredGames).map(([category, gameList]) => (
        <div key={category}>
          <h4 className="text-xs font-semibold text-red-400 mb-3">{category}</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {gameList.map((game) => (
              <GameCard key={game.name} name={game.name} image={game.image} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
