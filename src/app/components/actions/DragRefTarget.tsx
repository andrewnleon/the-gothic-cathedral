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
            color="#FFFFFF"
            size={20}
            speedMultiplier={0.5}
            className="ms-[15px] mt-[15px] opacity-55"
          />
        )}
      </motion.div>
    );
  },
);

DraggableRefTarget.displayName = "DraggableRefTarget";

export default DraggableRefTarget;
