import React from 'react';
import DragItem from '@app/components/actions/DragItem';
import { MotionValue, PanInfo } from 'framer-motion';

type DraggableLabelItemProps = {
  id: string;
  label: string;
  handleDragEnd: (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => void;
  isDropped: boolean;
  x: MotionValue<number>;
  y: MotionValue<number>;
  dragItemImage: string;
  labelClassName: string;
  itemClassName: string;
};

const DraggableLabelItem: React.FC<DraggableLabelItemProps> = ({
  id,
  label,
  handleDragEnd,
  isDropped,
  x,
  y,
  dragItemImage,
  labelClassName,
  itemClassName,
}) => (
  <>
    <div id={`${id}-label`} className={labelClassName}>
      <p>
        {label}
      </p>
    </div>
    <DragItem
      id={id}
      handleDragEnd={handleDragEnd}
      isDropped={isDropped}
      x={x}
      y={y}
      dragItemImage={dragItemImage}
      className={itemClassName}
    />
  </>
);

export default DraggableLabelItem;
