import React, { useState } from "react";
import InfoWindow from "./InfoWindow";
import { infoWindowHelpText } from "@app/content";

function InfoWindowHelp() {
  const [isHovered, setIsHovered] = useState(false);

  const toggleInfoWindow = () => {
    setIsHovered(!isHovered);
  };

  return (
    <>
      <button
        type="button"
        onClick={toggleInfoWindow}
        className="absolute right-[0px] top-[80px] h-[auto] w-[100px] p-2 text-end text-[13px] text-lg font-bold uppercase text-secondary"
      >
        Help?
      </button>
      <div
        className={`absolute left-[580px] top-[120px] z-50 h-[auto] w-[240px] ${isHovered ? "opacity-100" : "-z-0 opacity-0"}`}
      >
        <InfoWindow
          className={`h-[auto] w-[240px] text-nowrap border-[1px] transition-opacity duration-500`}
          text={infoWindowHelpText}
        />
      </div>
    </>
  );
}

export default InfoWindowHelp;
