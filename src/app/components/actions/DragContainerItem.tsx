import React, { Ref } from 'react';
import DragItem from '@app/components/actions/DragItem';
import { MotionValue, PanInfo } from 'framer-motion';

type DragContainerItemProps = {
  id: string;
  label: string;
  handleDragEnd: (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => void;
  isDropped: boolean;
  hideDragItem: boolean;
  x: MotionValue<number>;
  y: MotionValue<number>;
  dragItemImage: string;
  labelClassName: string;
  itemClassName: string;
  dragElastic: number;
  isHorizontalDrag: boolean;
  refContainer?: React.RefObject<HTMLDivElement>;
};

const DragContainerItem: React.FC<DragContainerItemProps> = ({
  id,
  label,
  handleDragEnd,
  hideDragItem,
  isDropped,
  x,
  y,
  dragItemImage,
  labelClassName,
  itemClassName,
  dragElastic,
  isHorizontalDrag,
  refContainer
}) => (
  <>
    <div id={`${id}-label`} className={labelClassName}>
      <p>
        {label}
      </p>
    </div>
    <DragItem
      id={id}
      hideDragItem={hideDragItem}
      handleDragEnd={handleDragEnd}
      isDropped={isDropped}
      x={x}
      y={y}
      dragItemImage={dragItemImage}
      className={itemClassName}
      dragElastic={dragElastic}
      isHorizontalDrag={isHorizontalDrag}
      refContainer={refContainer}
    />
  </>
);

export default DragContainerItem;
