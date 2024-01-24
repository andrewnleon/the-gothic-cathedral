import React from "react";
import { motion } from "framer-motion";
import { PuffLoader } from "react-spinners";

type Props = {
  id: string;
  className: string;
  targetBgPos: string;
  isDropped: boolean;
  targetBgImg: string;
};

const DraggableRefTarget = React.forwardRef<HTMLDivElement, Props>(
  ({ id, className, targetBgImg, targetBgPos, isDropped }, ref) => {
    return (
      <>
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          animate={{ opacity: isDropped ? 0 : 1 }}
          className={`${targetBgPos} ${targetBgImg} grayscale`}
        />
        
        <motion.div ref={ref} id={id} className={`${className}`}>
          {!isDropped && (
            <PuffLoader
              color="gold"
              size={30}
              speedMultiplier={0.9}
              className="ms-[15px] mt-[15px] opacity-55"
            />
          )}
        </motion.div>
      </>
    );
  },
);

DraggableRefTarget.displayName = "DraggableRefTarget";

export default DraggableRefTarget;
