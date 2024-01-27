import React from "react";
import { MotionValue, motion } from "framer-motion";

type Props = {
  id: string;
  isDropped: boolean;
  hideDragItem: boolean;
  x: MotionValue<number>;
  y: MotionValue<number>;
  handleDragEnd: any;
  dragItemImage: string;
  className: string;
};

export default function DraggableItem({
  id,
  isDropped,
  x,
  y,
  handleDragEnd,
  dragItemImage,
  hideDragItem,
  className,
}: Props) {
  return (
    <motion.div
      id={id}
      drag={!isDropped}
      style={{ x, y }}
      animate={{ opacity: isDropped || hideDragItem ? 0 : 1 }}
      transition={{
        type: "tween",
        ease: "easeOut",
        duration: 0.5,
      }}
      dragMomentum={false}
      dragElastic={0}
      onDragEnd={handleDragEnd}
      className={`${isDropped ? "pointer-events-none" : "pointer-events-auto"} ${dragItemImage} ${className} z-10`}
    >
      <motion.div className="flex justify-center pt-1" />
    </motion.div>
  );
}
