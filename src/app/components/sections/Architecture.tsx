import Image from "next/image";
import React, { useRef, useState } from "react";
import useDrag from "@app/lib/hooks/useDrag";
import DragRefTarget from "@app/components/actions/DragRefTarget";
import DraggableLabelItem from "@app/components/actions/DragLabelItem";
import {
  gargoyaleText,
  glassWindowText,
  flyingButtressesText,
  gothicVaultText,
  roofText,
} from "@app/content";
import ContinueBtn from "@app/components/buttons/ContinueBtn";
import InfoWindow from "@app/components/widgets/InfoWindow";
import InfoWindowHelp from "@app/components/widgets/InfoWindowHelp";
import useCompletionCount from "@app/lib/hooks/useCompletionCount";
import { useHandlers } from "@app/lib/handlers";

export default function Architecture({ showNextSlide }: any) {
  const glassWindowTargetRef = useRef<HTMLDivElement>(null);
  const gargoyalesTargetRef = useRef<HTMLDivElement>(null);
  const gothicVaultTargetRef = useRef<HTMLDivElement>(null);
  const flyingButtressesTargetRef = useRef<HTMLDivElement>(null);
  const roofTargetRef = useRef<HTMLDivElement>(null);
  const [infoWindowText, setInfoWindowText] = useState<string>("");

  // Drag enabled target Items
  const {
    isDropped: isDroppedGlassWindow,
    x: xGlassWindow,
    y: yGlassWindow,
    handleDragEnd: handleDragEndGlassWindow,
  } = useDrag(
    glassWindowTargetRef,
    50, // elementWidth
    50, // elementHeight
    -10, // initialX
    15, // initialY
  );
  const {
    isDropped: isDroppedGargoyales,
    x: xGargoyales,
    y: yGargoyales,
    handleDragEnd: handleDragEndGargoyales,
  } = useDrag(
    gargoyalesTargetRef,
    50, // elementWidth
    50, // elementHeight
    90, // initialX
    -20, // initialY
  );
  const {
    isDropped: isDroppedFlyingButtresses,
    x: xFlyingButtresses,
    y: yFlyingButtresses,
    handleDragEnd: handleDragEndFlyingButtresses,
  } = useDrag(
    flyingButtressesTargetRef,
    50, // elementWidth
    50, // elementHeight
    -10, // initialX
    15, // initialY
  );
  const {
    isDropped: isDroppedGothicVault,
    x: xGothicVault,
    y: yGothicVault,
    handleDragEnd: handleDragEndGothicVault,
  } = useDrag(
    gothicVaultTargetRef,
    50, // elementWidth
    50, // elementHeight
    20, // initialX
    15, // initialY
  );
  const {
    isDropped: isDroppedRoof,
    x: xRoof,
    y: yRoof,
    handleDragEnd: handleDragEndRoof,
  } = useDrag(
    roofTargetRef,
    50, // elementWidth
    50, // elementHeight
    20, // initialX
    25, // initialY
  );

  // Count Completions
  // If an action is completed to its respective target then do count
  const [isContinue, setIsContinue] = useState(false);
  // drop state initializers
  const isDroppedStates = [
    isDroppedGlassWindow,
    isDroppedGargoyales,
    isDroppedFlyingButtresses,
    isDroppedGothicVault,
    isDroppedRoof,
  ];

  // Use completion hook
  const completedCount = useCompletionCount(
    isDroppedStates,
    showNextSlide,
    isContinue,
  );
  // Do constraint count logic
  const hasCompletedCount = completedCount === isDroppedStates.length;

  //Define Handlers
  const dependencies = {
    handleDragEndGlassWindow,
    glassWindowTargetRef,
    glassWindowText,
    handleDragEndGargoyales,
    gargoyalesTargetRef,
    gargoyaleText,
    handleDragEndFlyingButtresses,
    flyingButtressesTargetRef,
    flyingButtressesText,
    handleDragEndGothicVault,
    gothicVaultTargetRef,
    gothicVaultText,
    handleDragEndRoof,
    roofTargetRef,
    roofText,
    setInfoWindowText,
  };

  const {
    handleDragEndGlassWindowModified,
    handleDragEndGargoyalesModified,
    handleDragEndFlyingButtressesModified,
    handleDragEndGothicVaultModified,
    handleDragEndRoofModified,
  } = useHandlers(dependencies);

  return (
    <div className="flex items-center justify-center">
      <div className="relative h-[564px] w-[1043px]">
        <div className="absolute left-1/2 top-1/2 z-50 h-[564px] w-[823px] -translate-x-1/2 -translate-y-1/2 transform px-1">
          {/* Help */}
          <InfoWindowHelp />

          {/* Infowindow for dropped item */}
          <InfoWindow
            className="absolute left-[15px] top-[130px] z-20 w-[240px] shadow-lg"
            text={infoWindowText}
          />

          {/* Targets */}
          <div className="absolute left-[5px] top-[120px] h-[360px] w-[620px] bg-white bg-opacity-0">
            <DragRefTarget
              key="glassWindowTarget"
              id="glassWindowTarget"
              isDropped={isDroppedGlassWindow}
              ref={glassWindowTargetRef}
              className="absolute left-[301px] top-[189px] h-[50px] w-[50px] bg-red-500 bg-opacity-0"
            />
            <DragRefTarget
              key="gargoyalesTarget"
              id="gargoyalesTarget"
              isDropped={isDroppedGargoyales}
              ref={gargoyalesTargetRef}
              className="absolute left-[285px] top-[80px] h-[50px] w-[50px] bg-yellow-500 bg-opacity-0"
            />
            <DragRefTarget
              key="gothicVaultTarget"
              id="gothicVaultTarget"
              isDropped={isDroppedGothicVault}
              ref={gothicVaultTargetRef}
              className="absolute left-[525px] top-[135px] h-[50px] w-[50px] bg-green-500 bg-opacity-0"
            />
            <DragRefTarget
              key="flyingButtressesTarget"
              id="flyingButtressesTarget"
              isDropped={isDroppedFlyingButtresses}
              ref={flyingButtressesTargetRef}
              className="absolute left-[430px] top-[220px] h-[50px] w-[50px] bg-blue-500 bg-opacity-0"
            />
            <DragRefTarget
              key="roofTarget"
              id="roofTarget"
              isDropped={isDroppedRoof}
              ref={roofTargetRef}
              className="absolute left-[170px] top-[180px] h-[50px] w-[50px] bg-orange-500 bg-opacity-0"
            />
          </div>

          {/* Drags */}
          <div className="absolute right-[12px] top-[130px] h-[350px] w-[171px] bg-white bg-opacity-0">
            {/* Glass Window */}
            <DraggableLabelItem
              key="glassWindow"
              id="glassWindow"
              label="Glass Window"
              labelClassName="relative left-[5px] top-[5px] z-10 h-[10px] w-[80px] text-center text-[10px] text-white"
              dragItemImage="bg-[url('/images/architecture/architecture_drag1.png')]"
              handleDragEnd={handleDragEndGlassWindowModified}
              isDropped={isDroppedGlassWindow}
              x={xGlassWindow}
              y={yGlassWindow}
              itemClassName="absolute left-[30px] top-[0px] h-[76px] w-[49px] bg-red-500 bg-opacity-0 bg-cover"
            />
            {/* Gargoyales */}
            <DraggableLabelItem
              key="gargoyales"
              id="gargoyales"
              label="Gargoyales"
              labelClassName="absolute left-[87px] top-[0px] z-10 h-[10px] w-[80px] bg-yellow-500 bg-opacity-0 pt-[5px] text-center text-[10px] text-white"
              dragItemImage="bg-[url('/images/architecture/architecture_drag2.png')]"
              handleDragEnd={handleDragEndGargoyalesModified}
              isDropped={isDroppedGargoyales}
              x={xGargoyales}
              y={yGargoyales}
              itemClassName="absolute left-[20px] top-[35px] h-[77px] w-[42px] bg-yellow-500 bg-opacity-0 bg-cover"
            />
            {/* Flying Buttresses */}
            <DraggableLabelItem
              key="flyingbuttresses"
              id="flyingbuttresses"
              label="Flying Buttresses"
              labelClassName="relative left-[5px] top-[95px] z-10 h-[10px] w-[80px] text-center text-[9px] text-white"
              dragItemImage="bg-[url('/images/architecture/architecture_drag5.png')]"
              handleDragEnd={handleDragEndFlyingButtressesModified}
              isDropped={isDroppedFlyingButtresses}
              x={xFlyingButtresses}
              y={yFlyingButtresses}
              itemClassName="absolute left-[17px] top-[100px] h-[70px] w-[70px] bg-blue-500 bg-opacity-0 bg-cover"
            />
            {/* Gothic Vault */}
            <DraggableLabelItem
              key="gothicVault"
              id="gothicVault"
              label="Gothic Vault"
              labelClassName="relative left-[90px] top-[85px] z-10 h-[57px] w-[77px] text-center text-[9px] text-white"
              dragItemImage="bg-[url('/images/architecture/architecture_drag4.png')]"
              handleDragEnd={handleDragEndGothicVaultModified}
              isDropped={isDroppedGothicVault}
              x={xGothicVault}
              y={yGothicVault}
              itemClassName="absolute left-[70px] top-[105px] h-[105px] w-[75px] bg-green-500 bg-opacity-0 bg-cover"
            />
            {/* Roof */}
            <DraggableLabelItem
              key="Roof"
              id="Roof"
              label="Roof"
              labelClassName="relative left-[-15px] top-[160px] z-10 h-[57px] w-[77px] text-center text-[10px] text-white"
              dragItemImage="bg-[url('/images/architecture/architecture_drag3.png')]"
              handleDragEnd={handleDragEndRoofModified}
              isDropped={isDroppedRoof}
              x={xRoof}
              y={yRoof}
              itemClassName="absolute left-[-10px] top-[225px] h-[35px] w-[152px] bg-orange-500 bg-opacity-0 bg-cover"
            />
          </div>

          {/* Continue  */}
          {hasCompletedCount && (
            <ContinueBtn
              className=""
              onClick={() => setIsContinue(true)}
              isPending={hasCompletedCount}
            />
          )}
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
