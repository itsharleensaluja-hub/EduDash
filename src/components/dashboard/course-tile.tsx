"use client";

import { DynamicIcon } from "@/components/dashboard/lucide-icon";
import { AnimatedProgress } from "@/components/dashboard/animated-progress";
import type { Course } from "@/lib/supabase/types";

function hashId(id: string): number {
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    hash = ((hash << 5) - hash) + id.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

interface CourseTileProps {
  course: Course;
}

export function CourseTile({ course }: CourseTileProps) {
  const seed = hashId(course.id);
  const x1 = 10 + (seed % 80);
  const y1 = 10 + ((seed >> 4) % 80);
  const x2 = 10 + ((seed >> 8) % 80);
  const y2 = 10 + ((seed >> 12) % 80);

  return (
    <article className="relative overflow-hidden rounded-xl bg-surface/40 border border-border/50 p-4 flex flex-col gap-3 min-h-[140px]">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          background: `
            radial-gradient(ellipse at ${x1}% ${y1}%, rgba(99,102,241,0.6) 0%, transparent 50%),
            radial-gradient(ellipse at ${x2}% ${y2}%, rgba(168,85,247,0.4) 0%, transparent 50%)
          `,
        }}
      />
      <div className="flex items-center gap-3 relative z-10">
        <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
          <DynamicIcon
            name={course.icon_name}
            size={16}
            className="text-accent"
          />
        </div>
        <p className="text-sm font-medium text-white truncate">{course.title}</p>
      </div>
      <div className="mt-auto relative z-10">
        <AnimatedProgress value={course.progress} />
      </div>
    </article>
  );
}
