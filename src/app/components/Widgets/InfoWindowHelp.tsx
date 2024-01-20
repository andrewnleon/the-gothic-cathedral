import React, { useState } from "react";
import { infoWindowHelpText } from "@app/content";
import { motion } from "framer-motion";
import InfoWindow from "./InfoWindow";

export default function InfoWindowHelp() {
  const [isHovered, setIsHovered] = useState(false);

  const toggleInfoWindow = () => {
    setIsHovered(!isHovered);
  };

  return (
    <>
      <motion.button
        type="button"
        onClick={toggleInfoWindow}
        className="absolute right-[0px] top-[80px] h-[auto] w-[100px] p-2 text-end text-[13px] text-lg font-bold text-secondary"
      >
        Help?
      </motion.button>
      <div
        className={`absolute left-[580px] top-[120px] z-50 h-[auto] w-[240px] transition-opacity duration-300 ${isHovered ? "z-20 opacity-100" : " z-[0] opacity-0"}`}
      >
        <InfoWindow
          className={`h-[auto] w-[240px] text-nowrap border-[1px]`}
          text={infoWindowHelpText}
        />
      </div>
    </>
  );
}
