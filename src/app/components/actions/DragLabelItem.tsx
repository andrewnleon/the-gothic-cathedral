import React from 'react';
import DragItem from '@app/components/actions/DragItem';
import { MotionValue, PanInfo } from 'framer-motion';

type DraggableLabelItemProps = {
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
};



const DraggableLabelItem: React.FC<DraggableLabelItemProps> = ({
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
  isHorizontalDrag
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
    />
  </>
);

export default DraggableLabelItem;
