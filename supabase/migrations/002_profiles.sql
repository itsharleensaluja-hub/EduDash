CREATE TABLE profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  streak integer DEFAULT 0,
  enrolled_courses integer DEFAULT 0,
  gpa numeric(3,1) DEFAULT 0.0,
  assignments_due integer DEFAULT 0,
  completed_courses integer DEFAULT 0
);

INSERT INTO profiles (name, streak, enrolled_courses, gpa, assignments_due, completed_courses)
VALUES ('Alex Chen', 12, 4, 3.8, 3, 18);
