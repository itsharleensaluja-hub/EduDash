"use client";

import { motion } from "framer-motion";
import { Flame } from "lucide-react";

interface HeroTileProps {
  name: string;
  streak: number;
}

export function HeroTile({ name, streak }: HeroTileProps) {
  return (
    <article className="p-6 h-full flex flex-col justify-end relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          background: `
            radial-gradient(ellipse at 20% 80%, rgba(99,102,241,0.8) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 20%, rgba(168,85,247,0.6) 0%, transparent 50%)
          `,
        }}
      />
      <p className="text-xs font-medium text-muted uppercase tracking-wider relative z-10">
        Welcome back
      </p>
      <div className="flex items-end justify-between mt-1 relative z-10">
        <h2 className="text-2xl font-bold text-white">{name}</h2>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 15, delay: 0.3 }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20"
        >
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Flame size={16} className="text-amber-400" />
          </motion.div>
          <span className="text-sm font-semibold text-amber-400">
            {streak}
          </span>
          <span className="text-xs text-amber-400/60">day streak</span>
        </motion.div>
      </div>
    </article>
  );
}
