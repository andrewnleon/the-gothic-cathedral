import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import useDrag from "@app/lib/hooks/useDrag";
import DragRefTarget from "@app/components/actions/DragRefTarget";
import DraggableLabelItem from "@app/components/actions/DragLabelItem";
import ContinueBtn from "@app/components/modules/ContinueBtn";
import InfoWindow from "@app/components/modules/InfoWindow";
import InfoWindowHelp from "@app/components/modules/InfoWindowHelp";
import useCompletionCount from "@app/lib/hooks/useCompletionCount";
import { useHandlers } from "@app/lib/handlers";
import {
  lionText,
  dogText,
  wolfText,
  eagleText,
  snakeText,
  goatText,
  monkeyText,
} from "@app/content";
import SectionSlide from "../SectionSlide";
import useModifiedDragEnd from "@app/lib/hooks/useDragHandler";

export default function Architecture({ showNextSlide }: any) {
  const lionTargetRef = useRef<HTMLDivElement>(null);
  const dogTargetRef = useRef<HTMLDivElement>(null);
  const wolfTargetRef = useRef<HTMLDivElement>(null);
  const eagleTargetRef = useRef<HTMLDivElement>(null);
  const snakeTargetRef = useRef<HTMLDivElement>(null);
  const goatTargetRef = useRef<HTMLDivElement>(null);
  const monkeyTargetRef = useRef<HTMLDivElement>(null);
  const [infoWindowText, setInfoWindowText] = useState<string>(lionText);

  //1. Drag enabled target Items
  const {
    isDropped: isDroppedLion,
    x,
    y,
    handleDragEnd: handleDragEndLion,
  } = useDrag(
    lionTargetRef,
    20,
    20,
    -10,
    12,
  );
  const {
    isDropped: isDroppedDog,
    x: xDog,
    y: yDog,
    handleDragEnd: handleDragEndDog,
  } = useDrag(
    dogTargetRef,
    20,
    20,
    0,
    0,
  );
  const {
    isDropped: isDroppedWolf,
    x: xWolf,
    y: yWolf,
    handleDragEnd: handleDragEndWolf,
  } = useDrag(
    wolfTargetRef,
    20,
    20,
    0,
    0,
  );

  const {
    isDropped: isDroppedEagle,
    x: xEagle,
    y: yEagle,
    handleDragEnd: handleDragEndEagle,
  } = useDrag(
    eagleTargetRef,
    20,
    20,
    0,
    0,
  );

  const {
    isDropped: isDroppedSnake,
    x: xSnake,
    y: ySnake,
    handleDragEnd: handleDragEndSnake,
  } = useDrag(
    snakeTargetRef,
    20,
    20,
    0,
    0,
  );
  const {
    isDropped: isDroppedGoat,
    x: xGoat,
    y: yGoat,
    handleDragEnd: handleDragEndGoat,
  } = useDrag(
    goatTargetRef,
    20,
    20,
    0,
    0,
  );

  const {
    isDropped: isDroppedMonkey,
    x: xMonkey,
    y: yMonkey,
    handleDragEnd: handleDragEndMonkey,
  } = useDrag(
    goatTargetRef,
    20,
    20,
    0,
    0,
  );

  // Count Completions
  // If an action is completed to its respective target then do count
  const [isContinue, setIsContinue] = useState(false);

  // Use completion hook
  const isDroppedStates = [isDroppedLion, isDroppedDog, isDroppedWolf];
  const completedCount = useCompletionCount(
    isDroppedStates,
    showNextSlide,
    isContinue,
  );
  
  // Do constraint count logic
  const hasCompletedCount = completedCount === isDroppedStates.length;

  const handleDragEndScroll = (event: any) => {
    const dropX = event.clientX;
    const dropY = event.clientY;
  
    const targets = [lionTargetRef, dogTargetRef, wolfTargetRef, eagleTargetRef, snakeTargetRef, goatTargetRef, monkeyTargetRef];
    const texts = [lionText, dogText, wolfText, eagleText, snakeText, goatText, monkeyText];
  
    for (let i = 0; i < targets.length; i++) {
      const target = targets[i].current;
      if (target) {
        const rect = target.getBoundingClientRect();
        if (
          dropX >= rect.left &&
          dropX <= rect.right &&
          dropY >= rect.top &&
          dropY <= rect.bottom
        ) {
          // If the drop coordinates are within a target's bounds, update state as needed
          setInfoWindowText(texts[i]);
          // Handle any other necessary state updates here, such as marking the target as completed
          break; // Stop checking once a target is found
        }
      }
    }
  };

  const handleTargetDrop = (targetId: React.RefObject<HTMLDivElement>) => {
    if(isDroppedDog) {
      return false;
    }
    return true;
  }

  return (
    <SectionSlide bgImage="/images/gargoyales/gargoyales.png">
      {/* Help */}
      <InfoWindowHelp infoWindowTextSize="text-[11px]" />

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
          hideLoader
          isDropped={isDroppedLion}
          ref={lionTargetRef}
          className="absolute left-[96.2px] top-[-5px] h-[20px] w-[20px] bg-red-500 bg-opacity-0"
        />

        <DragRefTarget
          key="scrollDog"
          id="scrollDog"
          targetBgImg=""
          targetBgPos=""
          loaderPos="ms-[-5px] mt-[-5px]"
          hideMarker={false}
          hideLoader={handleTargetDrop(dogTargetRef)}
          isDropped={isDroppedDog}
          ref={dogTargetRef}
          className="absolute left-[193px] top-[-5px] h-[20px] w-[20px] bg-yellow-500 bg-opacity-0"
        />

        <DragRefTarget
          key="scrollWolf"
          id="scrollWolf"
          targetBgImg=""
          targetBgPos=""
          loaderPos="ms-[-5px] mt-[-5px]"
          hideMarker={false}
          hideLoader={handleTargetDrop(wolfTargetRef)}
          isDropped={isDroppedWolf}
          ref={wolfTargetRef}
          className="absolute left-[291px] top-[-5px] h-[20px] w-[20px] bg-orange-500 bg-opacity-0"
        />

        <DragRefTarget
          key="scrollEagle"
          id="scrollEagle"
          targetBgImg=""
          targetBgPos=""
          loaderPos="ms-[-5px] mt-[-5px]"
          hideMarker={false}
          hideLoader={handleTargetDrop(eagleTargetRef)}
          isDropped={isDroppedEagle}
          ref={eagleTargetRef}
          className="absolute left-[394px] top-[-5px] h-[20px] w-[20px] bg-green-500 bg-opacity-0"
        />

        <DragRefTarget
          key="scrollSnake"
          id="scrollSnake"
          targetBgImg=""
          targetBgPos=""
          loaderPos="ms-[-5px] mt-[-5px]"
          hideMarker={false}
          hideLoader={handleTargetDrop(snakeTargetRef)}
          isDropped={isDroppedSnake}
          ref={snakeTargetRef}
          className="absolute left-[503px] top-[-5px] h-[20px] w-[20px] bg-blue-500 bg-opacity-0"
        />

        <DragRefTarget
          key="scrollGoat"
          id="scrollGoat"
          targetBgImg=""
          targetBgPos=""
          loaderPos="ms-[-5px] mt-[-5px]"
          hideMarker={false}
          hideLoader={handleTargetDrop(goatTargetRef)}
          isDropped={isDroppedGoat}
          ref={goatTargetRef}
          className="absolute left-[611px] top-[-5px] h-[20px] w-[20px] bg-purple-500 bg-opacity-0"
        />

        <DragRefTarget
          key="scrollMonkey"
          id="scrollMonkey"
          targetBgImg=""
          targetBgPos=""
          loaderPos="ms-[-5px] mt-[-5px]"
          hideMarker={false}
          hideLoader={handleTargetDrop(monkeyTargetRef)}
          isDropped={isDroppedMonkey}
          ref={monkeyTargetRef}
          className="absolute left-[724px] top-[-5px] h-[20px] w-[20px] bg-cyan-500 bg-opacity-0"
        />
      </div>

      {/* Drags */}
      <div className="absolute right-[12px] top-[130px] h-[350px] w-[171px] bg-white bg-opacity-0">
        {/* Scroller */}
        <DraggableLabelItem
          key="scroller"
          id="scrollerItem"
          label=""
          hideDragItem={false}
          labelClassName=""
          itemClassName="absolute left-[-529.5px] top-[-30px] h-[76px] w-[49px] bg-red-500 bg-opacity-0 bg-no-repeat"
          dragItemImage="bg-[url('/images/gargoyales/scroller.png')]"
          handleDragEnd={handleDragEndScroll}
          isDropped={isDroppedDog}
          x={x}
          y={y}
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
