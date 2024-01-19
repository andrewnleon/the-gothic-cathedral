import React from "react";
import { motion } from "framer-motion";
import { BounceLoader } from "react-spinners";

type Props = {
  id: string;
  className: string;
};

const DraggableRefTarget = React.forwardRef<HTMLDivElement, Props>(
  ({ id, className }, ref) => {
    return (
      <motion.div ref={ref} id={id} className={className}>
        <BounceLoader color="#ffac43"  size={30} speedMultiplier={0.5} className="ms-[10px] mt-[10px]" />
      </motion.div>
    );
  },
);

DraggableRefTarget.displayName = "DraggableRefTarget";

export default DraggableRefTarget;
