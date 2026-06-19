"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface Day {
  date: string;
  count: number;
}

function generateMockData(): Day[] {
  const days: Day[] = [];
  const today = new Date();
  for (let i = 83; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    days.push({
      date: d.toISOString().slice(0, 10),
      count: Math.random() < 0.4 ? 0 : Math.floor(Math.random() * 5),
    });
  }
  return days;
}

const levels = [
  "bg-surface-hover",
  "bg-accent/15",
  "bg-accent/30",
  "bg-accent/50",
  "bg-accent/70",
];

export function ActivityTile() {
  const [data, setData] = useState<Day[] | null>(null);

  useEffect(() => {
    setData(generateMockData());
  }, []);

  if (!data) {
    return (
      <article className="p-6 h-full flex flex-col">
        <h3 className="text-sm font-medium text-muted uppercase tracking-wider mb-4">
          Activity
        </h3>
        <div className="flex-1 flex items-end gap-[3px]">
          {Array.from({ length: 12 }).map((_, wi) => (
            <div key={wi} className="flex flex-col gap-[3px]">
              {Array.from({ length: 7 }).map((_, di) => (
                <div
                  key={di}
                  className="w-3 h-3 rounded-sm bg-surface-hover animate-pulse"
                />
              ))}
            </div>
          ))}
        </div>
      </article>
    );
  }

  const weeks: Day[][] = [];
  for (let i = 0; i < data.length; i += 7) {
    weeks.push(data.slice(i, i + 7));
  }

  return (
    <article className="p-6 h-full flex flex-col">
      <h3 className="text-sm font-medium text-muted uppercase tracking-wider mb-4">
        Activity
      </h3>
      <div className="flex-1 flex items-end gap-[3px] overflow-x-auto">
        {weeks.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-[3px]">
            {week.map((day, di) => (
              <motion.div
                key={day.date}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: (wi * 7 + di) * 0.003, duration: 0.2 }}
                className={`w-3 h-3 rounded-sm ${levels[day.count]} cursor-default`}
                title={`${day.date}: ${day.count} activities`}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-1 mt-3 justify-end">
        <span className="text-[10px] text-muted mr-1">Less</span>
        {levels.map((l, i) => (
          <div key={i} className={`w-2.5 h-2.5 rounded-sm ${l}`} />
        ))}
        <span className="text-[10px] text-muted ml-1">More</span>
      </div>
    </article>
  );
}
