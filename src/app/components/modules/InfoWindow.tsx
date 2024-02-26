import { AnimatePresence, motion } from "framer-motion";
import React from "react";

interface infoWindowProps {
  className: string;
  text: string;
}

export default function InfoWindow({ className, text }: infoWindowProps) {
  if (text === "") return;
  return (
    <motion.div
      className={`${className} border-[1px] w-72 p-3 text-[13px] text-white font-light` }
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={text}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="" dangerouslySetInnerHTML={{ __html: text }} />
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
