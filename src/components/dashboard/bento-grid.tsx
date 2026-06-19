"use client";

import { motion, type Variants } from "framer-motion";

interface BentoGridProps {
  children: React.ReactNode;
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const childVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export function BentoGrid({ children }: BentoGridProps) {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="p-6 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 auto-rows-[200px]"
    >
      {children}
    </motion.section>
  );
}

export function GridItem({ children }: { children: React.ReactNode }) {
  return <motion.div variants={childVariants}>{children}</motion.div>;
}
