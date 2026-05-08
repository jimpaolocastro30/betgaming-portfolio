"use client";

import React from "react";
import Image from "next/image";

export default function HeroBanner() {
  return (
    <div className="relative rounded-lg overflow-hidden">
      <Image
        src="/hero-banner.png"
        alt="Prize Match - Intense Player vs Player Showdown"
        width={900}
        height={300}
        className="w-full h-auto object-cover"
        priority
      />
    </div>
  );
}
