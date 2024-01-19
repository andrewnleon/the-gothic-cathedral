import React from "react";
import { motion } from "framer-motion";

type Props = {
  id: any;
  isDropped: any;
  x: any;
  y: any;
  handleDragEnd: any;
  dragItemImage: any;
  className: any;
};

export default function DraggableItem({
  id,
  isDropped,
  x,
  y,
  handleDragEnd,
  dragItemImage,
  className,
}: Props) {
  return (
    <motion.div
      id={id}
      drag={!isDropped} // Disable drag if the item is dropped on the target
      style={{ x, y }} // Disable pointer events when dropped
    //   animate={{ opacity: isDropped ? 0 : 1 }}
      transition={{
        type: "tween", // Use a tween transition
        ease: "easeOut", // Easing function (easeOut, easeIn, linear, etc.)
        duration: 0.5, // Duration of the transition (in seconds)
        // stiffness: 300,  // Spring stiffness
        // damping: 30,     // Spring damping
        // mass: 1,         // Mass of the moving element
        // duration: 0.5    // Duration of the transition (in seconds)
      }}
      dragMomentum={false}
      dragElastic={0}
      onDragEnd={handleDragEnd}
      className={`${isDropped ? "pointer-events-none" : "pointer-events-auto"} ${dragItemImage} ${className} bg-center bg-no-repeat`}
    >
      <motion.div className="flex justify-center pt-1" />
    </motion.div>
  );
}
