import Image from "next/image";
import React, { useRef, useState } from "react";
import useDrag from "@app/lib/hooks/useDrag";
import DragRefTarget from "@app/components/actions/DragRefTarget";
import DraggableLabelItem from "@app/components/actions/DragLabelItem";
import ContinueBtn from "@app/components/modules/ContinueBtn";
import InfoWindow from "@app/components/modules/InfoWindow";
import InfoWindowHelp from "@app/components/modules/InfoWindowHelp";
import useCompletionCount from "@app/lib/hooks/useCompletionCount";
import { useHandlers } from "@app/lib/handlers";
import {
  gargoyaleText,
  glassWindowText,
  flyingButtressesText,
  gothicVaultText,
  roofText,
} from "@app/content";
import SectionSlide from "../SectionSlide";

export default function Architecture({ showNextSlide }: any) {
  const lionTargetRef = useRef<HTMLDivElement>(null);
  const gargoyalesTargetRef = useRef<HTMLDivElement>(null);
  const gothicVaultTargetRef = useRef<HTMLDivElement>(null);
  const flyingButtressesTargetRef = useRef<HTMLDivElement>(null);
  const roofTargetRef = useRef<HTMLDivElement>(null);
  const [infoWindowText, setInfoWindowText] = useState<string>("");

  //1. Drag enabled target Items
  const {
    isDropped: isDroppedLion,
    x: xLion,
    y: yLion,
    handleDragEnd: handleDragEndLion,
  } = useDrag(
    lionTargetRef,
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

  //2. Define Handlers
  const dependencies = {
    handleDragEndLion,
    lionTargetRef,
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
    handleDragEndLionModified,
    handleDragEndGargoyalesModified,
    handleDragEndFlyingButtressesModified,
    handleDragEndGothicVaultModified,
    handleDragEndRoofModified,
  } = useHandlers(dependencies);

  // Count Completions
  // If an action is completed to its respective target then do count
  const [isContinue, setIsContinue] = useState(false);
  // drop state initializers
  const isDroppedStates = [
    isDroppedLion,
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

  return (
    <SectionSlide bgImage="/images/gargoyales/gargoyales.png">
      {/* Help */}
      <InfoWindowHelp />

      {/* Infowindow for dropped item */}
      <InfoWindow
        className="absolute left-[155px] top-[170px] z-20 h-[300px] w-[655px] shadow-lg"
        text={infoWindowText}
      />

      {/* Targets */}
      <div className="absolute left-[5px] top-[120px] h-[360px] w-[620px] bg-white bg-opacity-0">
        <div className="absolute left-[10px] top-[50px] h-[299px] w-[128px] bg-red-500 bg-opacity-100">
          <Image
            width={128}
            height={299}
            alt=""
            src={"/images/gargoyales/lion.jpg"}
          />
        </div>

        <DragRefTarget
          key="scrollLion"
          id="scrollLion"
          targetBgImg=""
          targetBgPos=""
          loaderPos="ms-[-5px] mt-[-5px]"
          hideMarker={false}
          isDropped={isDroppedLion}
          ref={lionTargetRef}
          className="absolute left-[100px] top-[5px] h-[20px] w-[20px] bg-red-500 bg-opacity-100"
        />

        <DragRefTarget
          key="scrollDog"
          id="scrollDog"
          targetBgImg=""
          targetBgPos=""
          loaderPos="ms-[-5px] mt-[-5px]"
          hideMarker={false}
          isDropped={isDroppedLion}
          ref={lionTargetRef}
          className="absolute left-[185px] top-[5px] h-[20px] w-[20px] bg-yellow-500 bg-opacity-50"
        />

        <DragRefTarget
          key="scrollWolf"
          id="scrollWolf"
          targetBgImg=""
          targetBgPos=""
          loaderPos="ms-[-5px] mt-[-5px]"
          hideMarker={false}
          isDropped={isDroppedLion}
          ref={lionTargetRef}
          className="absolute left-[275px] top-[5px] h-[20px] w-[20px] bg-orange-500 bg-opacity-50"
        />

        <DragRefTarget
          key="scrollEagle"
          id="scrollEagle"
          targetBgImg=""
          targetBgPos=""
          loaderPos="ms-[-5px] mt-[-5px]"
          hideMarker={false}
          isDropped={isDroppedLion}
          ref={lionTargetRef}
          className="absolute left-[390px] top-[5px] h-[20px] w-[20px] bg-green-500 bg-opacity-50"
        />

        <DragRefTarget
          key="scrollSnake"
          id="scrollSnake"
          targetBgImg=""
          targetBgPos=""
          loaderPos="ms-[-5px] mt-[-5px]"
          hideMarker={false}
          isDropped={isDroppedLion}
          ref={lionTargetRef}
          className="absolute left-[500px] top-[5px] h-[20px] w-[20px] bg-blue-500 bg-opacity-50"
        />

        <DragRefTarget
          key="scrollGoat"
          id="scrollGoat"
          targetBgImg=""
          targetBgPos=""
          loaderPos="ms-[-5px] mt-[-5px]"
          hideMarker={false}
          isDropped={isDroppedLion}
          ref={lionTargetRef}
          className="absolute left-[625px] top-[5px] h-[20px] w-[20px] bg-purple-500 bg-opacity-50"
        />
        <DragRefTarget
          key="scrollGoat"
          id="scrollGoat"
          targetBgImg=""
          targetBgPos=""
          loaderPos="ms-[-5px] mt-[-5px]"
          hideMarker={false}
          isDropped={isDroppedLion}
          ref={lionTargetRef}
          className="absolute left-[728px] top-[5px] h-[20px] w-[20px] bg-cyan-500 bg-opacity-50"
        />
      </div>

      {/* Drags */}
      <div className="absolute right-[12px] top-[130px] h-[350px] w-[171px] bg-white bg-opacity-0">
        {/* Scroller */}
        <DraggableLabelItem
          key="lion"
          id="lion"
          label=""
          hideDragItem={false}
          labelClassName="relative left-[5px] top-[5px] z-20 h-[10px] w-[80px] text-center text-[9px] text-white"
          itemClassName="absolute left-[-526px] top-[-23px] h-[76px] w-[49px] bg-red-500 bg-opacity-0 bg-no-repeat"
          dragItemImage="bg-[url('/images/gargoyales/scroller.png')]"
          handleDragEnd={handleDragEndLionModified}
          isDropped={isDroppedLion}
          x={xLion}
          y={yLion}
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
    </SectionSlide>
  );
}
