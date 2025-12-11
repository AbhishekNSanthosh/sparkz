"use client";

import React from "react";
import { motion } from "framer-motion";

const accentGradient =
  "bg-gradient-to-r from-indigo-500/30 via-fuchsia-500/25 to-amber-400/25";

const aboutPoints = [
  {
    title: "Built for makers",
    body: "Hands-on challenges in robotics, AI, embedded, design, and full-stack that push rapid prototyping.",
  },
  {
    title: "Community-driven",
    body: "Mentors, alumni, and industry partners on-site to review builds, share playbooks, and unblock teams fast.",
  },
  {
    title: "Night labs energy",
    body: "48 hours of late-night labs, live showcases, and music so teams can iterate, test, and ship under the lights.",
  },
];

const pillars = [
  { label: "Tracks", value: "Robotics • AI • IoT" },
  { label: "Teams", value: "500+" },
  { label: "Workshops", value: "15+" },
  { label: "Prize Pool", value: "₹5L+" },
];

export default function About() {
  return (
    <section className="relative isolate overflow-hidden bg-[#04050b] py-20 text-white sm:py-24">
      {/* TOP = PURE BLACK (no glow at the very top) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#04050b] via-transparent to-transparent h-64" />

      {/* GLOW STARTS LOWER & FLOWS DOWN — seamless from Hero */}
      <div className="pointer-events-none absolute left-[-10%] top-[10%] h-96 w-96 rounded-full bg-indigo-600/25 blur-[140px] animate-pulse" />
      <div className="pointer-events-none absolute right-[-5%] top-[15%] h-96 w-96 rounded-full bg-fuchsia-500/25 blur-[150px] animate-[pulse_8s_ease-in-out_infinite]" />
      <div className="pointer-events-none absolute inset-x-0 top-[20%] h-full bg-gradient-to-b from-indigo-600/12 via-fuchsia-500/10 to-amber-400/8 blur-3xl opacity-70" />

      {/* Rest of ambient effects (grid, circuits, etc.) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(79,70,229,0.15),transparent_45%),radial-gradient(circle_at_70%_70%,rgba(236,72,153,0.12),transparent_40%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_transparent_1px)] bg-[size:140px_140px] opacity-20" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(14,165,233,0.08),transparent_40%),linear-gradient(240deg,rgba(236,72,153,0.08),transparent_35%)] opacity-60" />

      {/* Circuit overlay */}
      <div className="pointer-events-none absolute inset-0 mix-blend-screen opacity-25">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(56,189,248,0.12)_1px,transparent_1px),linear-gradient(0deg,rgba(56,189,248,0.08)_1px,transparent_1px),linear-gradient(135deg,rgba(94,234,212,0.08)_1px,transparent_1px)] bg-[size:180px_180px,180px_180px,220px_220px]" />
      </div>

      {/* Floating chips — now spread smoothly */}
      {[
        { className: "left-[15%] top-[12%] h-8 w-8", color: "cyan" },
        { className: "right-[12%] top-[20%] h-10 w-10", color: "fuchsia" },
        {
          className: "left-1/2 top-[55%] -translate-x-1/2 h-12 w-12",
          color: "amber",
        },
        { className: "left-[22%] bottom-[15%] h-7 w-7", color: "emerald" },
      ].map((chip, i) => (
        <motion.div
          key={i}
          className={`pointer-events-none absolute ${chip.className} rounded-xl border border-${chip.color}-300/50 bg-${chip.color}-400/15 blur-[1px]`}
          animate={{ y: [-10, 15, -10], rotate: [-8, 8, -8] }}
          transition={{ duration: 7 + i, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-16 lg:flex-row lg:items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 lg:w-2/5"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[13px] font-bold uppercase tracking-widest backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              About Sparkz
            </div>

            <h2 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Where engineering gets loud,
              <br />
              <span className="bg-gradient-to-r from-indigo-300 via-fuchsia-300 to-amber-200 bg-clip-text text-transparent">
                creative, and chaotic.
              </span>
            </h2>

            <p className="text-lg text-white/80 max-w-xl">
              Sparkz is SJEC’s annual 48-hour playground for builders. Robots,
              AI, circuits, code, and pure adrenaline — all under one roof, all
              night long.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {pillars.map((p, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur"
                >
                  <div className="text-[11px] uppercase tracking-widest text-white/60">
                    {p.label}
                  </div>
                  <div className="mt-1 text-xl font-bold">{p.value}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="space-y-8 lg:w-3/5"
          >
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur overflow-hidden">
              <div
                className={`px-6 py-4 ${accentGradient} border-b border-white/10`}
              >
                <div className="text-sm font-bold uppercase tracking-widest text-white/80">
                  Why Sparkz Hits Different
                </div>
              </div>
              <div className="divide-y divide-white/10">
                {aboutPoints.map((point, i) => (
                  <div key={i} className="flex gap-5 p-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 font-bold">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{point.title}</h3>
                      <p className="mt-1 text-white/70">{point.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <h4 className="text-sm uppercase tracking-widest text-white/60">
                  Mentors & Judges
                </h4>
                <p className="mt-3 text-white">
                  Real engineers & founders roaming the floor, giving instant
                  feedback so you never get stuck.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <h4 className="text-sm uppercase tracking-widest text-white/60">
                  Build + Demo
                </h4>
                <p className="mt-3 text-white">
                  48 hrs → working prototype → 90-sec fire demo on main stage.
                  No slides. Just sparks.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
