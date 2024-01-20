import { useState, useCallback, useEffect, RefObject } from "react";
import {
  useMotionValue,
  useAnimation,
  PanInfo,
  MotionValue,
  AnimationControls,
} from "framer-motion";

type UseDragReturnType = {
  isDropped: boolean;
  x: MotionValue<number>;
  y: MotionValue<number>;
  handleDragEnd: (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
    onDropCompleted?: () => void
  ) => Promise<void>;
};

const useDrag = (
  targetRef: RefObject<HTMLElement>,
  elementWidth: number,
  elementHeight: number,
  initialX: number,
  initialY: number
): UseDragReturnType => {
  const [isDropped, setIsDropped] = useState<boolean>(false);
  const x = useMotionValue<number>(initialX);
  const y = useMotionValue<number>(initialY);
  const xControls: AnimationControls = useAnimation();
  const yControls: AnimationControls = useAnimation();

  const handleDragEnd = useCallback(
    async (
      event: MouseEvent | TouchEvent | PointerEvent,
      info: PanInfo,
      onDropCompleted?: () => void
    ) => {
      if (targetRef.current && event.target instanceof HTMLElement) {
        const targetRect = targetRef.current.getBoundingClientRect();
        const offsetParentRect = event.target.offsetParent?.getBoundingClientRect();

        const draggableLeft = info.point.x;
        const draggableTop = info.point.y;
        const draggableRight = draggableLeft + elementWidth;
        const draggableBottom = draggableTop + elementHeight;

        // Determine if the drop was successful
        const dropSuccessful =
          draggableLeft < targetRect.right &&
          draggableRight > targetRect.left &&
          draggableTop < targetRect.bottom &&
          draggableBottom > targetRect.top;

        if (dropSuccessful) {
          setIsDropped(true);
          await xControls.start({
            x: targetRect.left - (offsetParentRect?.left ?? 0),
          });
          await yControls.start({
            y: targetRect.top - (offsetParentRect?.top ?? 0),
          });
          if (onDropCompleted) onDropCompleted(); // Call the callback after updating isDropped
        } else {
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
    ]
  );

  useEffect(() => {
    xControls.start({ x: x.get() });
    yControls.start({ y: y.get() });
  }, [xControls, yControls, x, y]);

  return { isDropped, x, y, handleDragEnd };
};

export default useDrag;
