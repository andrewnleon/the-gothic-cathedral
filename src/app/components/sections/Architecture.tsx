import Image from "next/image";
import React, { useRef } from "react";
import useDraggable from "@/app/lib/hooks/useDraggable";
import DraggableItem from "../Modules/DraggableItem";
import DraggableRefTarget from "../Modules/DraggableRefTarget";

export default function Architecture() {
  const glassWindowTargetRef = useRef<HTMLDivElement>(null);
  const gargoyalesTargetRef = useRef<HTMLDivElement>(null);
  const gothicVaultTargetRef = useRef<HTMLDivElement>(null);
  const flyingButtressesTargetRef = useRef<HTMLDivElement>(null);
  const roofTargetRef = useRef<HTMLDivElement>(null);
  const {
    isDropped: isDroppedGlassWindow,
    x: xGlassWindow,
    y: yGlassWindow,
    handleDragEnd: handleDragEndGlassWindow,
  } = useDraggable(
    glassWindowTargetRef,
    80, // elementWidth
    95, // elementHeight
    -10, // initialX
    15, // initialY
  );

  const { isDropped, x, y, handleDragEnd } = useDraggable(
    gargoyalesTargetRef,
    80, // elementWidth
    95, // elementHeight
    90, // initialX
    -20, // initialY
  );
  // absolute left-[273px] top-[30px] h-[160px] w-[88px] bg-yellow-500
  return (
    <div className="flex items-center justify-center">
      <div className="relative h-[564px] w-[1043px]">
        <div className="absolute left-1/2 top-1/2 z-50 h-[564px] w-[823px] -translate-x-1/2 -translate-y-1/2 transform px-1">
          <div className="absolute left-[5px] top-[120px] h-[360px] w-[620px] bg-white bg-opacity-15">
            {/* Targets */}
            <DraggableRefTarget
              id="glassWindowTarget"
              ref={glassWindowTargetRef}
              className="target-area absolute left-[285px] top-[190px] h-[75px] w-[80px] bg-red-500 bg-opacity-0"
            />
            <DraggableRefTarget
              id="gargoyalesTarget"
              ref={gargoyalesTargetRef}
              className="absolute left-[273px] top-[30px] h-[160px] w-[88px] bg-yellow-500 bg-opacity-0"
            />
          </div>
          <div className="absolute right-[12px] top-[130px] h-[350px] w-[171px] bg-white bg-opacity-0">
            {/* Draggables */}
            <div className="relative left-[5px] top-[10px] z-10 h-[10px] w-[80px] text-center text-[10px] text-white">
              Glass Window
            </div>
            <DraggableItem
              id="glassWindow"
              dragItemImage="bg-[url('/images/architecture/architecture_drag1.png')]"
              handleDragEnd={handleDragEndGlassWindow}
              isDropped={isDroppedGlassWindow}
              x={xGlassWindow}
              y={yGlassWindow}
              className="absolute left-[12px] top-[-4px] h-[75px] w-[80px] bg-red-500 bg-opacity-0 bg-bottom bg-no-repeat pt-[5px]"
            />
            <div
              id="gargoyales"
              className="absolute left-[87px] top-[4px] z-10 h-[10px] w-[80px] bg-yellow-500 bg-opacity-0 pt-[5px] text-center text-[10px] text-white"
            >
              Gargoyales
            </div>
            <DraggableItem
              id="gargoyales"
              dragItemImage="bg-[url('/images/architecture/architecture_drag2.png')]"
              handleDragEnd={handleDragEnd}
              isDropped={isDropped}
              x={x}
              y={y}
              className="absolute left-[0px] top-[20px] h-[95px] w-[80px]  pt-[5px] text-center text-[10px] text-white"
            />

            {/* <div
              id="gargoyales"
              className="absolute left-[87px] top-[4px] h-[95px] w-[80px] bg-yellow-500 pt-[5px] text-center text-[10px] text-white"
            >
              Gargoyales
              <div className="flex justify-center pt-1">
                <Image
                  src="/images/architecture/architecture_drag2.png"
                  width={38}
                  height={45}
                  alt="Glass Window"
                />
              </div>
            </div> */}
          </div>
        </div>
        <Image
          src="/images/architecture/architecture.png"
          width={816}
          height={400}
          alt="Architecture"
          className="absolute inset-0 z-10 m-auto"
        />
        <Image src="/images/tray.png" layout="fill" alt="Tray" />
      </div>
    </div>
  );
}
