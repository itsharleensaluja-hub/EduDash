import type { Course, Profile } from "@/lib/supabase/types";

export const mockCourses: Course[] = [
  {
    id: "mock-1",
    title: "Advanced React Patterns",
    progress: 75,
    icon_name: "code-2",
    created_at: new Date().toISOString(),
  },
  {
    id: "mock-2",
    title: "Data Structures & Algorithms",
    progress: 42,
    icon_name: "git-branch",
    created_at: new Date().toISOString(),
  },
  {
    id: "mock-3",
    title: "System Design Fundamentals",
    progress: 88,
    icon_name: "server",
    created_at: new Date().toISOString(),
  },
  {
    id: "mock-4",
    title: "Machine Learning Basics",
    progress: 23,
    icon_name: "brain",
    created_at: new Date().toISOString(),
  },
];

export const mockProfile: Profile = {
  id: "mock-profile",
  name: "Alex Chen",
  streak: 12,
  enrolled_courses: 4,
  gpa: 3.8,
  assignments_due: 3,
  completed_courses: 18,
};
