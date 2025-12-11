import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section className="w-full h-[90vh] flex flex-col items-center justify-center text-center px-6">
      {/* Logo */}
      <div className="relative w-[300px] h-[300px] animate-fade-in">
        <Image
          src="/sparkz.svg"
          alt="Sparkz Logo"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Title */}
      <h1 className="mt-6 text-5xl font-bold tracking-tight">
        Sparkz <span className="text-primary">'25</span>
      </h1>

      {/* Tagline */}
      <p className="mt-3 text-2xl font-medium opacity-80 animate-slide-up">
        Innovation Unleashed
      </p>
    </section>
  );
}
