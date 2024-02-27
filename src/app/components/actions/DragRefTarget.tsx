import React from "react";
import { motion } from "framer-motion";
import { PuffLoader } from "react-spinners";

type Props = {
  id: string;
  className: string;
  targetBgPos: string;
  loaderPos: string;
  isDropped: boolean;
  hideMarker: boolean;
  targetBgImg: string;
  hideLoader: boolean;
  isGrayScale?: boolean;
};

const DraggableRefTarget = React.forwardRef<HTMLDivElement, Props>(
  (
    {
      id,
      className,
      targetBgImg,
      targetBgPos,
      loaderPos,
      isDropped,
      hideMarker,
      hideLoader,
      isGrayScale
    },
    ref,
  ) => {
    return (
      <div>
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          animate={{ opacity: isDropped || hideMarker ? 0 : 1 }}
          className={`${targetBgPos} ${targetBgImg} ${isGrayScale ?? "grayscale"}`}
        />
        <motion.div ref={ref} id={id} className={`${className}`}>
          {!isDropped && !hideLoader && (
            <PuffLoader
              color="gold"
              size={34}
              speedMultiplier={1} 
              className={`${!loaderPos ? "ms-[15px] mt-[15px]" : loaderPos} opacity-75`}
            />
          )}
        </motion.div>
      </div>
    );
  },
);

DraggableRefTarget.displayName = "DraggableRefTarget";

export default DraggableRefTarget;
