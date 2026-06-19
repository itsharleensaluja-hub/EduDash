import {
  Code2,
  GitBranch,
  Server,
  Brain,
  BookOpen,
  Atom,
  BarChart3,
  Database,
  Shield,
  Zap,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  "code-2": Code2,
  "git-branch": GitBranch,
  server: Server,
  brain: Brain,
  "book-open": BookOpen,
  atom: Atom,
  "bar-chart-3": BarChart3,
  database: Database,
  shield: Shield,
  zap: Zap,
};

interface LucideIconProps {
  name: string;
  size?: number;
  className?: string;
}

export function DynamicIcon({ name, size = 18, className = "" }: LucideIconProps) {
  const Icon = iconMap[name] || BookOpen;
  return <Icon size={size} className={className} />;
}
