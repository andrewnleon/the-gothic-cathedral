import React from "react";
import { motion } from "framer-motion";

type Props = {
  id: string;
  className: string;
};

const DraggableRefTarget = React.forwardRef<HTMLDivElement, Props>(
  ({ id, className }, ref) => {
    return <motion.div ref={ref} id={id} className={className} />;
  },
);

DraggableRefTarget.displayName = "DraggableRefTarget"; // Set the display name

export default DraggableRefTarget;
