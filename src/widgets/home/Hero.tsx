"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#04050b] text-white">
      {/* Ambient + grid */}
      <div className="pointer-events-none absolute -left-32 -top-24 h-72 w-72 animate-pulse rounded-full bg-indigo-600/25 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-10 h-80 w-80 animate-[pulse_7s_ease-in-out_infinite] rounded-full bg-fuchsia-500/25 blur-[130px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.05),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(79,70,229,0.12),transparent_38%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:140px_140px] opacity-20" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(14,165,233,0.08),transparent_40%),linear-gradient(240deg,rgba(236,72,153,0.08),transparent_35%)] opacity-60" />
      {/* Circuit overlay */}
      <div className="pointer-events-none absolute inset-0 mix-blend-screen opacity-25">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(56,189,248,0.12)_1px,transparent_1px),linear-gradient(0deg,rgba(56,189,248,0.08)_1px,transparent_1px),linear-gradient(135deg,rgba(94,234,212,0.08)_1px,transparent_1px)] bg-[size:180px_180px,180px_180px,220px_220px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(56,189,248,0.2),transparent_16%),radial-gradient(circle_at_38%_62%,rgba(94,234,212,0.2),transparent_14%),radial-gradient(circle_at_78%_28%,rgba(236,72,153,0.2),transparent_16%),radial-gradient(circle_at_62%_82%,rgba(244,114,182,0.16),transparent_14%)]" />
      </div>

      {/* Floating chips */}
      {[
        {
          className:
            "left-[8%] top-[18%] h-7 w-7 rounded-lg border border-cyan-300/50 bg-cyan-400/20 blur-[1px]",
          y: -12,
          rot: 8,
          dur: 6,
          scale: 1.04,
        },
        {
          className:
            "right-[10%] top-[26%] h-9 w-9 rounded-xl border border-fuchsia-300/50 bg-fuchsia-400/15 blur-[1px]",
          y: 14,
          rot: -10,
          dur: 7,
          scale: 1.05,
        },
        {
          className:
            "left-1/2 bottom-[18%] h-11 w-11 -translate-x-1/2 rounded-2xl border border-amber-300/50 bg-amber-400/15 blur-[1px]",
          y: -10,
          rot: 12,
          dur: 8,
          scale: 1.06,
        },
        {
          className:
            "left-[18%] bottom-[26%] h-6 w-6 rounded-md border border-emerald-300/50 bg-emerald-300/15 blur-[1px]",
          y: 10,
          rot: -6,
          dur: 6.5,
          scale: 1.03,
        },
      ].map((chip, idx) => (
        <motion.div
          key={idx}
          className={`pointer-events-none absolute ${chip.className}`}
          animate={{
            y: [0, chip.y, 0],
            rotate: [0, chip.rot, -chip.rot, 0],
            scale: [1, chip.scale, 1],
          }}
          transition={{
            duration: chip.dur,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="relative mx-auto flex min-h-[92vh] max-w-6xl flex-col gap-12 px-6 py-16 md:flex-row md:items-center md:gap-10">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="order-2 w-full max-w-3xl space-y-6 text-center md:order-1 md:w-1/2 md:text-left"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[13px] font-semibold uppercase tracking-[0.18em] text-white/80 backdrop-blur"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Sparkz '25 • Engineering Tech Fest
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-4xl font-bold leading-tight text-white drop-shadow-sm sm:text-5xl lg:text-6xl"
          >
            Build loud. Think bold.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-fuchsia-300 to-amber-200 animate-[pulse_7s_ease-in-out_infinite]">
              Sparkz '25
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.05 }}
            className="max-w-2xl text-lg text-white/80 sm:text-xl"
          >
            Robotics, AI, circuits, code, and design — two days of prototyping,
            playful competition, and engineering energy after dark.
          </motion.p>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-start">
            <button className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-amber-400 px-6 py-3 text-base font-semibold text-white shadow-[0_20px_80px_rgba(99,102,241,0.35)] transition hover:scale-[1.02] hover:shadow-[0_20px_90px_rgba(236,72,153,0.45)]">
              Register Now
              <span className="transition group-hover:translate-x-1">→</span>
            </button>
            <button className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-base font-semibold text-white/90 backdrop-blur transition hover:border-white/30 hover:bg-white/10">
              View Tracks
            </button>
          </div>

          <div className="grid w-full max-w-2xl grid-cols-1 gap-3 text-sm sm:grid-cols-3">
            <Stat label="Engineering Tracks" value="Robotics • AI • IoT" />
            <Stat label="Participants" value="3k+" />
            <Stat label="Prize Pool" value="₹5L+" />
          </div>

          <div className="mx-auto mt-2 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[13px] text-white/80 backdrop-blur md:mx-0">
            <span className="h-2 w-2 animate-ping rounded-full bg-cyan-300" />
            Campus Arena • March 15 - 16 • Late-night lab hours
          </div>
        </motion.div>

        {/* Right visual */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.75, ease: "easeOut", delay: 0.05 }}
          className="order-1 relative flex w-full items-center justify-center md:order-2 md:w-1/2 md:-mt-6 lg:-mt-60"
        >
          <div className="absolute -inset-10 rounded-full bg-gradient-to-br from-indigo-500/25 via-fuchsia-500/20 to-amber-400/20 blur-3xl" />
          <div className="relative h-56 w-56 sm:h-64 sm:w-64">
            <motion.div
              className="absolute inset-2 rounded-full border border-dashed border-fuchsia-300/25"
              animate={{ rotate: 360 }}
              transition={{ duration: 18, ease: "linear", repeat: Infinity }}
            />
            <div className="absolute inset-6 rounded-full bg-gradient-to-br from-indigo-500/30 via-fuchsia-500/20 to-amber-400/18 blur-2xl" />
            <motion.div
              className="absolute inset-3 rounded-full bg-[conic-gradient(from_0deg,rgba(255,255,255,0.05),transparent,rgba(99,102,241,0.12),transparent)] opacity-50"
              animate={{ rotate: -360 }}
              transition={{ duration: 14, ease: "linear", repeat: Infinity }}
            />
            <motion.div
              className="pointer-events-none absolute inset-[-22%] rounded-full border border-cyan-300/20"
              animate={{
                rotate: [0, 12, -12, 0],
                scale: [1, 1.06, 1],
                opacity: [0.18, 0.32, 0.18],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="relative flex h-full w-full items-center justify-center rounded-full border border-white/15 bg-black/50 backdrop-blur"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/sparkz.svg"
                alt="Sparkz Logo"
                fill
                className="object-contain drop-shadow-[0_14px_36px_rgba(236,72,153,0.35)]"
                sizes="256px"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-left backdrop-blur">
      <span className="text-[11px] uppercase tracking-[0.18em] text-white/60">
        {label}
      </span>
      <span className="text-base font-semibold text-white">{value}</span>
    </div>
  );
}
