"use client";

import { motion, useMotionValue, animate, useMotionValueEvent } from "framer-motion";
import { useState, useEffect } from "react";

interface AnimatedProgressProps {
  value: number;
  className?: string;
}

export function AnimatedProgress({ value, className = "" }: AnimatedProgressProps) {
  const count = useMotionValue(0);
  const [display, setDisplay] = useState(value);
  const [mounted, setMounted] = useState(false);

  useMotionValueEvent(count, "change", (latest) => {
    setDisplay(Math.round(latest));
  });

  useEffect(() => {
    setMounted(true);
    const controls = animate(count, value, {
      duration: 1,
      ease: "easeOut",
    });
    return controls.stop;
  }, [value, count]);

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex-1 h-1.5 rounded-full bg-surface-hover overflow-hidden">
        {mounted ? (
          <motion.div
            key="progress-bar"
            initial={{ width: 0 }}
            animate={{ width: `${value}%` }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-full rounded-full bg-gradient-to-r from-accent to-purple-500"
          />
        ) : (
          <div
            className="h-full rounded-full bg-gradient-to-r from-accent to-purple-500"
            style={{ width: `${value}%` }}
          />
        )}
      </div>
      <span className="text-xs text-muted tabular-nums shrink-0 min-w-[2.5ch] text-right">
        {mounted ? display : value}<span className="ml-px">%</span>
      </span>
    </div>
  );
}
