import React from "react";
import { motion } from "framer-motion";

export default function SectionTransition({
  children,
  isVisible,
  onAnimationComplete,
}: any) {
  const slideDistance = 300; // Adjust this value for more or less sliding

  return (
    <motion.div
      initial={{ y: slideDistance, opacity: 0 }} // Start from below
      animate={{
        y: isVisible ? 0 : -slideDistance,
        opacity: isVisible ? 1 : 0,
      }} // Slide up to show and slide down to hide
      exit={{ y: slideDistance, opacity: 0 }} // Slide down on exit
      transition={{ duration: 0.5, ease: "easeInOut" }}
      onAnimationComplete={onAnimationComplete}
    >
      {children}
    </motion.div>
  );
}
