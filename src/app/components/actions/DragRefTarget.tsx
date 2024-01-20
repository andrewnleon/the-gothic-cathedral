import React from "react";
import { motion } from "framer-motion";
import { BounceLoader } from "react-spinners";

type Props = {
  id: string;
  className: string;
  isDropped: boolean;
};

const DraggableRefTarget = React.forwardRef<HTMLDivElement, Props>(
  ({ id, className, isDropped }, ref) => {
    return (
      <motion.div
        ref={ref}
        id={id}
        className={`${className}`}
        // style={{ background: "transparent", backdropFilter: "grayscale(100%)" }}
      >
        {!isDropped && (
          <BounceLoader
            color="#ffac43"
            size={20}
            speedMultiplier={0.3}
            className="ms-[15px] mt-[15px]"
          />
        )}
      </motion.div>
    );
  },
);

DraggableRefTarget.displayName = "DraggableRefTarget";

export default DraggableRefTarget;
