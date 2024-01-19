import { AnimatePresence, motion } from "framer-motion";
import React from "react";

interface infoWindowProps {
  className: string;
  text: string;
}

export default function InfoWindow({ className, text }: infoWindowProps) {
  return (
    <motion.div
      className={
        text &&
        className +
          ` border-[1px] border-secondary border-opacity-50 bg-primary bg-opacity-90 p-2 text-[13px] text-secondary`
      }
    >
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div dangerouslySetInnerHTML={{ __html: text }} />
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
