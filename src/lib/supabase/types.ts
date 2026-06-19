export type Course = {
  id: string;
  title: string;
  progress: number;
  icon_name: string;
  created_at: string;
};

export type Profile = {
  id: string;
  name: string;
  streak: number;
  enrolled_courses: number;
  gpa: number;
  assignments_due: number;
  completed_courses: number;
};
