"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/dashboard/glass-card";
import { CourseTile } from "@/components/dashboard/course-tile";
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
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3 content-start">
          {courses.map((course, i) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.3 }}
            >
              <CourseTile course={course} />
            </motion.div>
          ))}
        </div>
      </div>
    </GlassCard>
  );
}
