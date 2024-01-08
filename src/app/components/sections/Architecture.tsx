import Image from "next/image";
import React, { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function Architecture() {
  const glassWindowTargetRef = useRef<HTMLDivElement>(null);

  const handleGlassWindowDragEnd = (event: any, info: { point: { x: number; y: number; }; }) => {
    if (glassWindowTargetRef.current) {
      const targetRect = glassWindowTargetRef.current.getBoundingClientRect();
      const draggableLeft = info.point.x;
      const draggableTop = info.point.y;
      const draggableRight = draggableLeft + 80; // Width of the draggable element
      const draggableBottom = draggableTop + 95; // Height of the draggable element

      // Check if any part of the draggable element overlaps with the target
      const isOverlapping =
        draggableLeft < targetRect.right &&
        draggableRight > targetRect.left &&
        draggableTop < targetRect.bottom &&
        draggableBottom > targetRect.top;

      if (isOverlapping) {
        console.log("Dropped in the target!");
        // Logic for successful drop
      } else {
        console.log("Dropped outside the target.");
        // Logic for unsuccessful drop
      }
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="relative h-[564px] w-[1043px]">
        <div className="absolute left-1/2 top-1/2 z-50 h-[564px] w-[823px] -translate-x-1/2 -translate-y-1/2 transform px-1">
          <div className="absolute left-[5px] top-[120px] h-[360px] w-[620px] bg-white bg-opacity-15">
            {/* Targets */}
            <div
              id="glassWindowTarget"
              ref={glassWindowTargetRef}
              className="target-area absolute left-[275px] top-[190px] h-[75px] w-[88px] bg-red-500"
            ></div>
            <div
              id="gargoyalesTarget"
              className="absolute left-[273px] top-[30px] h-[160px] w-[88px] bg-yellow-500"
            ></div>
            <div
              id="gothicVaultTarget"
              className="absolute left-[455px] top-[75px] h-[235px] w-[150px] bg-green-500"
            ></div>
            <div
              id="flyingButtressesTarget"
              className="absolute left-[363px] top-[190px] h-[135px] w-[145px] bg-blue-500"
            ></div>
            <div
              id="roofTarget"
              className="absolute left-[100px] top-[190px] h-[100px] w-[175px] bg-orange-500"
            ></div>
          </div>
          <div className="absolute right-[12px] top-[130px] h-[350px] w-[171px] bg-white bg-opacity-0">

            {/* Draggables */}
            <div className="relative left-[5px] top-[10px] z-10 h-[10px] w-[80px] text-center text-[10px] text-white">
              Glass Window
            </div>
            <motion.div
              drag
              onDragEnd={handleGlassWindowDragEnd}
              className="absolute left-[4px] top-[4px] h-[95px] w-[80px] bg-red-500 bg-opacity-0 bg-[url('/images/architecture/architecture_drag1.png')] bg-bottom bg-no-repeat pt-[5px]
              "
            >
              <motion.div className="flex justify-center pt-1" />
            </motion.div>


            <div
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
            </div>

            <div
              id="gargoyales"
              className="absolute left-[5px] top-[104px] h-[95px] w-[80px] bg-blue-500 pt-[5px] text-center text-[9px] text-white"
            >
              Flying Buttresses
              <div className="flex justify-center pt-1">
                <Image
                  src="/images/architecture/architecture_drag5.png"
                  width={75}
                  height={45}
                  alt="Glass Window"
                />
              </div>
            </div>

            <div
              id="gargoyales"
              className="absolute left-[87px] top-[104px] h-[95px] w-[80px] bg-green-500 pt-[5px] text-center text-[10px] text-white"
            >
              Gothic Vault
              <div className="flex justify-center pt-1">
                <Image
                  src="/images/architecture/architecture_drag4.png"
                  width={40}
                  height={45}
                  alt="Glass Window"
                />
              </div>
            </div>

            <div
              id="gargoyales"
              className="absolute left-[5px] top-[204px] h-[70px] w-[162px] bg-orange-500 pt-[5px] text-center text-[10px] text-white"
            >
              Roof
              <div className="flex justify-center pt-1">
                <Image
                  src="/images/architecture/architecture_drag3.png"
                  width={120}
                  height={75}
                  alt="Roof"
                />
              </div>
            </div>
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
