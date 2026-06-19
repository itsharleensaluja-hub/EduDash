"use client";

import { motion } from "framer-motion";
import {
  LayoutDashboard,
  BookOpen,
  BarChart3,
  Calendar,
  User,
  Settings,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Courses", icon: BookOpen },
  { label: "Grades", icon: BarChart3 },
  { label: "Calendar", icon: Calendar },
  { label: "Profile", icon: User },
  { label: "Settings", icon: Settings },
];

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [active, setActive] = useState("Dashboard");

  return (
    <nav
      className={`relative flex flex-col border-r border-border bg-background/80 backdrop-blur-xl transition-all duration-300 ${
        collapsed ? "w-16" : "w-56"
      }`}
    >
      <div className="flex items-center gap-3 border-b border-border px-4 h-16">
        {!collapsed && (
          <span className="text-sm font-semibold tracking-wider text-white">
            EduDash
          </span>
        )}
      </div>

      <ul className="flex flex-col gap-1 px-2 py-4 flex-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.label;

          return (
            <li key={item.label} className="relative">
              {isActive && (
                <motion.div
                  layoutId="active-nav"
                  className="absolute inset-0 rounded-lg bg-accent/10 border border-accent/20"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
              <button
                onClick={() => setActive(item.label)}
                className={`relative flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm transition-colors ${
                  isActive
                    ? "text-accent"
                    : "text-muted hover:text-white hover:bg-surface-hover"
                }`}
              >
                <Icon size={18} />
                {!collapsed && <span>{item.label}</span>}
              </button>
            </li>
          );
        })}
      </ul>

      <div className="border-t border-border p-2">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="flex items-center justify-center w-full py-2 rounded-lg text-muted hover:text-white hover:bg-surface-hover transition-colors"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>
    </nav>
  );
}
