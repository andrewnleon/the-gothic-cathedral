import React from "react";
import { MotionValue, motion } from "framer-motion";

type DragItemProps = {
  id: string;
  isDropped: boolean;
  hideDragItem: boolean;
  x: MotionValue<number>;
  y: MotionValue<number>;
  handleDragEnd: any;
  dragItemImage: string;
  className: string;
  dragElastic: number;
  isHorizontalDrag: boolean
  refContainer?: React.RefObject<HTMLDivElement>;
};

export default function DragItem({
  id,
  isDropped,
  x,
  y,
  handleDragEnd,
  dragItemImage,
  hideDragItem,
  className,
  dragElastic,
  isHorizontalDrag,
  refContainer
}: DragItemProps) {
  return (
    <motion.div
      id={id}
      drag={!isHorizontalDrag ? true : "x" }
      style={{ x, y }}
      animate={{ opacity: isDropped || hideDragItem ? 0 : 1 }}
      dragMomentum={false}
      dragElastic={dragElastic}
      dragConstraints={refContainer}
      onDragEnd={(event, info) => handleDragEnd(event, info)}
      className={`${isDropped ? "pointer-events-none" : "pointer-events-auto"} ${dragItemImage} ${className} z-10 cursor-grabbing`}
    >
      <motion.div className="flex justify-center pt-1" />
    </motion.div>
  );
}
