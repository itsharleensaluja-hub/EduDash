CREATE TABLE courses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  progress integer NOT NULL DEFAULT 0 CHECK (progress >= 0 AND progress <= 100),
  icon_name text NOT NULL DEFAULT 'book-open',
  created_at timestamptz DEFAULT now()
);

INSERT INTO courses (title, progress, icon_name) VALUES
  ('Advanced React Patterns', 75, 'code-2'),
  ('Data Structures & Algorithms', 42, 'git-branch'),
  ('System Design Fundamentals', 88, 'server'),
  ('Machine Learning Basics', 23, 'brain');
