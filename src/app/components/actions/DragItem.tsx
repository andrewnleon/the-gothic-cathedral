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
  dragElastic: number;
  isHorizontalDrag: boolean
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
  dragElastic,
  isHorizontalDrag
}: Props) {
  return (
    <motion.div
      id={id}
      drag={!isDropped || !isHorizontalDrag ? "x" : !isHorizontalDrag ?? false} // Allow dragging only left and right when not dropped
      style={{ x, y }}
      animate={{ opacity: isDropped || hideDragItem ? 0 : 1 }}
      dragMomentum={false}
      
      dragElastic={dragElastic}

      onDragEnd={handleDragEnd}
      className={`${isDropped ? "pointer-events-none" : "pointer-events-auto"} ${dragItemImage} ${className} z-10`}
    >
      <motion.div className="flex justify-center pt-1" />
    </motion.div>
  );
}
