import { useState, useCallback, useEffect, RefObject } from "react";
import {
  useMotionValue,
  useAnimation,
  PanInfo,
  MotionValue,
} from "framer-motion";

const useDrag = (
  targetRef: RefObject<HTMLElement>,
  elementWidth: number,
  elementHeight: number,
  initialX: number,
  initialY: number,
): {
  isDropped: boolean;
  x: MotionValue<number>;
  y: MotionValue<number>;
  handleDragEnd: (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => Promise<void>;
} => {
  const [isDropped, setIsDropped] = useState<boolean>(false);
  const x = useMotionValue<number>(initialX);
  const y = useMotionValue<number>(initialY);
  const xControls = useAnimation();
  const yControls = useAnimation();

  const handleDragEnd = useCallback(
    async (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      if (targetRef.current && event.target instanceof HTMLElement) {
        const targetRect = targetRef.current.getBoundingClientRect();
        const offsetParentRect =
          event.target.offsetParent?.getBoundingClientRect();

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
          await xControls.start({
            x: targetRect.left - (offsetParentRect?.left ?? 0),
          });
          await yControls.start({
            y: targetRect.top - (offsetParentRect?.top ?? 0),
          });
        } else {
          console.log("Dropped outside the target.");
          setIsDropped(false);
          x.set(initialX);
          y.set(initialY);
        }
      }
    },
    [
      targetRef,
      elementWidth,
      elementHeight,
      xControls,
      yControls,
      x,
      initialX,
      y,
      initialY,
    ],
  );

  useEffect(() => {
    xControls.start({ x: x.get() });
    yControls.start({ y: y.get() });
  }, [xControls, yControls, x, y]);

  return { isDropped, x, y, handleDragEnd };
};

export default useDrag;
