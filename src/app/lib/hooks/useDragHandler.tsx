import { PanInfo } from 'framer-motion';
import { RefObject } from 'react';

type DragEndHandler = (
  event: MouseEvent | TouchEvent | PointerEvent,
  info: PanInfo,
) => void;

type UseModifiedDragEndOptions = {
  handleDragEnd: DragEndHandler;
  targetRef: RefObject<HTMLElement>;
  text: string;
  setInfoWindowText: (text: string) => void;
};

export const useModifiedDragEnd = ({
  handleDragEnd,
  targetRef,
  text,
  setInfoWindowText,
}: UseModifiedDragEndOptions) => {
  const handleDragEndModified = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    handleDragEnd(event, info);
    const targetRect = targetRef.current?.getBoundingClientRect();
    if (targetRect && isWithinBounds(info.point, targetRect)) {
      setInfoWindowText(text);
    }
  };

  const isWithinBounds = (point: { x: number; y: number }, rect: DOMRect) => {
    return (
      point.x >= rect.left &&
      point.x <= rect.right &&
      point.y >= rect.top &&
      point.y <= rect.bottom
    );
  };

  return handleDragEndModified;
};

export default useModifiedDragEnd;