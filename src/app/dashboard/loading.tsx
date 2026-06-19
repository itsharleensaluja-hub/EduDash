import { GlassCard } from "@/components/dashboard/glass-card";

export default function DashboardLoading() {
  return (
    <section className="p-6 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 auto-rows-[200px]">
      <GlassCard className="col-span-1 md:col-span-2 row-span-2">
        <div className="p-6 h-full flex flex-col justify-end gap-2">
          <div className="h-3 w-24 bg-surface-hover rounded animate-pulse" />
          <div className="h-6 w-36 bg-surface-hover rounded animate-pulse" />
        </div>
      </GlassCard>

      <GlassCard className="col-span-1 row-span-1">
        <div className="p-4 h-full flex flex-col justify-between">
          <div className="h-3 w-20 bg-surface-hover rounded animate-pulse" />
          <div className="h-8 w-12 bg-surface-hover rounded animate-pulse" />
        </div>
      </GlassCard>

      <GlassCard className="col-span-1 row-span-1">
        <div className="p-4 h-full flex flex-col justify-between">
          <div className="h-3 w-16 bg-surface-hover rounded animate-pulse" />
          <div className="h-8 w-12 bg-surface-hover rounded animate-pulse" />
        </div>
      </GlassCard>

      <GlassCard className="col-span-1 md:col-span-2 row-span-2">
        <div className="p-6 h-full flex flex-col gap-4">
          <div className="h-4 w-28 bg-surface-hover rounded animate-pulse" />
          <div className="flex-1 flex flex-col gap-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-14 bg-surface-hover rounded-lg animate-pulse"
                style={{ animationDelay: `${i * 100}ms` }}
              />
            ))}
          </div>
        </div>
      </GlassCard>

      <GlassCard className="col-span-1 row-span-1">
        <div className="p-4 h-full flex flex-col justify-between">
          <div className="h-3 w-12 bg-surface-hover rounded animate-pulse" />
          <div className="h-8 w-20 bg-surface-hover rounded animate-pulse" />
        </div>
      </GlassCard>

      <GlassCard className="col-span-1 md:col-span-2 row-span-2">
        <div className="p-6 h-full flex flex-col gap-4">
          <div className="h-4 w-20 bg-surface-hover rounded animate-pulse" />
          <div className="flex-1 grid grid-cols-7 gap-1">
            {Array.from({ length: 35 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square bg-surface-hover rounded-sm animate-pulse"
                style={{ animationDelay: `${(i % 7) * 50}ms` }}
              />
            ))}
          </div>
        </div>
      </GlassCard>

      <GlassCard className="col-span-1 row-span-1">
        <div className="p-4 h-full flex flex-col justify-between">
          <div className="h-3 w-16 bg-surface-hover rounded animate-pulse" />
          <div className="h-8 w-12 bg-surface-hover rounded animate-pulse" />
          <div className="h-2 w-20 bg-surface-hover rounded animate-pulse" />
        </div>
      </GlassCard>

      <GlassCard className="col-span-1 row-span-1">
        <div className="p-4 h-full flex flex-col justify-between">
          <div className="h-3 w-14 bg-surface-hover rounded animate-pulse" />
          <div className="h-8 w-12 bg-surface-hover rounded animate-pulse" />
          <div className="h-2 w-16 bg-surface-hover rounded animate-pulse" />
        </div>
      </GlassCard>
    </section>
  );
}
