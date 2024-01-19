import { useState, useCallback, RefObject } from 'react';
import { useMotionValue, PanInfo } from 'framer-motion';

const useDraggable = (
  targetRef: RefObject<HTMLElement>,
  elementWidth: number,
  elementHeight: number,
  initialX: number, // Dynamic initial X position
  initialY: number  // Dynamic initial Y position
) => {
  const [isDropped, setIsDropped] = useState(false);
  const x = useMotionValue(initialX);
  const y = useMotionValue(initialY);

  const handleDragEnd = useCallback(
    (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      if (targetRef.current && event.target instanceof HTMLElement) {
        const targetRect = targetRef.current.getBoundingClientRect();
        const offsetParentRect = event.target.offsetParent?.getBoundingClientRect();

        const draggableLeft = info.point.x;
        const draggableTop = info.point.y;
        const draggableRight = draggableLeft + elementWidth;
        const draggableBottom = draggableTop + elementHeight;

        const isOverlapping =
          draggableLeft < targetRect.right &&
          draggableRight > targetRect.left &&
          draggableTop < targetRect.bottom &&
          draggableBottom > targetRect.top;

        if (isOverlapping) {
          console.log("Dropped in the target!");
          setIsDropped(true);
          if (offsetParentRect) {
            x.set(targetRect.left - offsetParentRect.left);
            y.set(targetRect.top - offsetParentRect.top);
          }
        } else {
          console.log("Dropped outside the target.");
          setIsDropped(false);
          x.set(initialX);
          y.set(initialY);
        }
      }
    },
    [targetRef, elementWidth, elementHeight, initialX, initialY, x, y]
  );

  return { isDropped, x, y, handleDragEnd };
};

export default useDraggable;
