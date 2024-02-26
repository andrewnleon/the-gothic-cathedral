import React, { useState } from "react";
import { infoWindowHelpText } from "@app/content";
import { motion } from "framer-motion";
import InfoWindow from "./InfoWindow";

interface InfoWindowProps {
  infoWindowTextSize: string;
}

export default function InfoWindowHelp({
  infoWindowTextSize,
}: InfoWindowProps) {
  const [isHovered, setIsHovered] = useState(false);

  const toggleInfoWindow = () => {
    setIsHovered(!isHovered);
  };

  return (
    <>
      <motion.button
        type="button"
        onClick={toggleInfoWindow}
        className="text-md absolute right-[0px] top-[80px] h-[auto] w-[100px] p-2 text-end font-bold text-secondary"
      >
        Help?
      </motion.button>
      <div
        className={`absolute left-[540px] top-[120px] z-50 h-[auto] w-[240px] transition-opacity duration-300 ${isHovered ? "z-20 opacity-100" : " z-[0] opacity-0"}`}
      >
        <InfoWindow
          className={`${infoWindowTextSize} h-[auto] w-[280px] text-nowrap border-[1px] border-secondary bg-primary bg-opacity-95 border-opacity-50`}
          text={infoWindowHelpText}
        />
      </div>
    </>
  );
}
