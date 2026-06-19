import { Suspense } from "react";
import { createClient } from "@/lib/supabase/server";
import { GlassCard } from "@/components/dashboard/glass-card";
import { HeroTile } from "@/components/dashboard/hero-tile";
import { CourseTiles } from "@/components/dashboard/course-tiles";
import { ActivityTile } from "@/components/dashboard/activity-tile";
import { BentoGrid, GridItem } from "@/components/dashboard/bento-grid";
import type { Course } from "@/lib/supabase/types";

async function CoursesSection() {
  const supabase = await createClient();
  const { data: courses, error } = await supabase
    .from("courses")
    .select("*")
    .order("created_at", { ascending: true });

  if (error || !courses) {
    return (
      <GlassCard className="col-span-1 md:col-span-2 row-span-2">
        <div className="p-6 h-full flex flex-col items-center justify-center text-center">
          <p className="text-sm text-red-400 mb-2">Failed to load courses</p>
          <p className="text-xs text-muted">{error?.message || "Unknown error"}</p>
        </div>
      </GlassCard>
    );
  }

  if (courses.length === 0) {
    return (
      <GlassCard className="col-span-1 md:col-span-2 row-span-2">
        <div className="p-6 h-full flex items-center justify-center text-sm text-muted">
          No courses yet. Add one to get started.
        </div>
      </GlassCard>
    );
  }

  return <CourseTiles courses={courses as Course[]} />;
}

export default function DashboardPage() {
  return (
    <BentoGrid>
      <GridItem>
        <GlassCard className="col-span-1 md:col-span-2 row-span-2">
          <HeroTile name="Alex Chen" streak={12} />
        </GlassCard>
      </GridItem>

      <GridItem>
        <GlassCard className="col-span-1 row-span-1">
          <div className="p-4 h-full flex flex-col justify-between">
            <h3 className="text-sm font-medium text-muted">Enrolled Courses</h3>
            <p className="text-3xl font-bold text-white">4</p>
          </div>
        </GlassCard>
      </GridItem>

      <GridItem>
        <GlassCard className="col-span-1 row-span-1">
          <div className="p-4 h-full flex flex-col justify-between">
            <h3 className="text-sm font-medium text-muted">Current GPA</h3>
            <p className="text-3xl font-bold text-white">3.8</p>
          </div>
        </GlassCard>
      </GridItem>

      <GridItem>
        <Suspense
          fallback={
            <GlassCard className="col-span-1 md:col-span-2 row-span-2">
              <div className="p-6 h-full flex flex-col gap-4">
                <div className="h-4 w-24 bg-surface-hover rounded animate-pulse" />
                <div className="flex-1 flex flex-col gap-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-12 bg-surface-hover rounded-lg animate-pulse" style={{ animationDelay: `${i * 100}ms` }} />
                  ))}
                </div>
              </div>
            </GlassCard>
          }
        >
          <CoursesSection />
        </Suspense>
      </GridItem>

      <GridItem>
        <GlassCard className="col-span-1 md:col-span-2 row-span-2">
          <ActivityTile />
        </GlassCard>
      </GridItem>

      <GridItem>
        <GlassCard className="col-span-1 row-span-1">
          <div className="p-4 h-full flex flex-col justify-between">
            <h3 className="text-sm font-medium text-muted">Assignments</h3>
            <p className="text-3xl font-bold text-white">3</p>
            <p className="text-xs text-muted">Due this week</p>
          </div>
        </GlassCard>
      </GridItem>

      <GridItem>
        <GlassCard className="col-span-1 row-span-1">
          <div className="p-4 h-full flex flex-col justify-between">
            <h3 className="text-sm font-medium text-muted">Completed</h3>
            <p className="text-3xl font-bold text-white">18</p>
            <p className="text-xs text-muted">Total courses</p>
          </div>
        </GlassCard>
      </GridItem>
    </BentoGrid>
  );
}
