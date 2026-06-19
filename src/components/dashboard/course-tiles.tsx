"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/dashboard/glass-card";
import type { Course } from "@/lib/supabase/types";

interface CourseTilesProps {
  courses: Course[];
}

export function CourseTiles({ courses }: CourseTilesProps) {
  return (
    <GlassCard className="col-span-1 md:col-span-2 row-span-2">
      <div className="p-6 h-full flex flex-col">
        <h3 className="text-sm font-medium text-muted uppercase tracking-wider mb-4">
          Active Courses
        </h3>
        <div className="flex-1 flex flex-col gap-3">
          {courses.map((course, i) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, duration: 0.3 }}
              className="flex items-center gap-3 p-3 rounded-xl bg-surface/40 border border-border/50"
            >
              <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <span className="text-accent text-xs font-bold">
                  {course.icon_name?.charAt(0).toUpperCase() || "C"}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">
                  {course.title}
                </p>
                <div className="flex items-center gap-2 mt-1.5">
                  <div className="flex-1 h-1.5 rounded-full bg-surface-hover overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${course.progress}%` }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="h-full rounded-full bg-accent"
                    />
                  </div>
                  <span className="text-xs text-muted tabular-nums shrink-0">
                    {course.progress}%
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </GlassCard>
  );
}
