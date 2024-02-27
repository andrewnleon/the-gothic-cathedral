import React, { useRef, useState } from "react";
import useDrag from "@app/lib/hooks/useDrag";
import DragRefTarget from "@app/components/actions/DragRefTarget";
import DragContainerItem from "@app/components/actions/DragContainerItem";
import ContinueBtn from "@app/components/modules/ContinueBtn";
import InfoWindow from "@app/components/modules/InfoWindow";
import InfoWindowHelp from "@app/components/modules/InfoWindowHelp";
import useCompletionCount from "@app/lib/hooks/useCompletionCount";
import { useHandlers } from "@app/lib/handlers";
import {
  glassLeftText,
  glassMainText,
  glassMiddleText,
  glassRightText,
} from "@app/content";
import SectionSlide from "../SectionSlide";

export default function StainedGlassWindow({ showNextSlide }: any) {
  const glassLeftTargetRef = useRef<HTMLDivElement>(null);
  const glassMiddleTargetRef = useRef<HTMLDivElement>(null);
  const glassRightTargetRef = useRef<HTMLDivElement>(null);
  const [infoWindowText, setInfoWindowText] = useState<string>(glassMainText);

  //1. Drag enabled target Items
  const {
    isDropped: isDroppedGlassLeft,
    x: xGlassLeft,
    y: yGlassLeft,
    handleDragEnd: handleDragEndGlassLeft,
  } = useDrag(glassLeftTargetRef, 50, 50, -10, 15);

  const {
    isDropped: isDroppedGlassMiddle,
    x: xGlassMiddle,
    y: yGlassMiddle,
    handleDragEnd: handleDragEndGlassMiddle,
  } = useDrag(glassMiddleTargetRef, 50, 50, -10, 15);

  const {
    isDropped: isDroppedGlassRight,
    x: xGlassRight,
    y: yGlassRight,
    handleDragEnd: handleDragEndGlassRight,
  } = useDrag(glassRightTargetRef, 50, 50, -10, 15);

  //2. Define Handlers
  const dependencies = {
    handleDragEndGlassLeft,
    glassLeftTargetRef,
    glassLeftText,
    handleDragEndGlassMiddle,
    glassMiddleTargetRef,
    glassMiddleText,
    handleDragEndGlassRight,
    glassRightTargetRef,
    glassRightText,
    setInfoWindowText,
  };
  const {
    handleDragEndGlassLeftModified,
    handleDragEndGlassCenterModified,
    handleDragEndGlassRightModified,
  } = useHandlers(dependencies);

  // Count Completions
  const [isContinue, setIsContinue] = useState(false);
  const isDroppedStates = [
    isDroppedGlassLeft,
    isDroppedGlassMiddle,
    isDroppedGlassRight,
  ];
  const completedCount = useCompletionCount(
    isDroppedStates,
    showNextSlide,
    isContinue,
  );
  const hasCompletedCount = completedCount === isDroppedStates.length;

  return (
    <SectionSlide
      bgImage="/images/stainedwindows/stained_windows.png"
      refContainer={undefined}
    >
      {/* Help */}
      <InfoWindowHelp infoWindowTextSize="" />
      {/* Infowindow for dropped item */}
      <InfoWindow
        className="absolute left-[15px] top-[130px] z-20 w-[325px] border-0 border-black bg-black bg-opacity-20"
        text={infoWindowText}
      />

      {/* Targets */}
      <div className="absolute left-[5px] top-[120px] h-[360px] w-[620px] bg-white bg-opacity-0">
        <DragRefTarget
          key="glassLeftTarget"
          id="glassLeftTarget"
          hideMarker={false}
          targetBgImg="bg-[url('/images/stainedwindows/cleft.png')] bg-no-repeat bg-cover "
          targetBgPos="absolute left-[347px] top-[9px] h-[343px] w-[79px]"
          loaderPos=""
          isDropped={isDroppedGlassLeft}
          hideLoader={false}
          ref={glassLeftTargetRef}
          className="absolute left-[355px] top-[145px] h-[343px] w-[79px] bg-blue-500 bg-opacity-0"
        />

        <DragRefTarget
          key="glassMiddleTarget"
          id="glassMiddleTarget"
          hideMarker={false}
          targetBgImg="bg-[url('/images/stainedwindows/cmiddle.png')] bg-no-repeat"
          targetBgPos="absolute left-[445px] top-[9px] h-[343px] w-[80px]"
          loaderPos=""
          isDropped={isDroppedGlassMiddle}
          hideLoader={false}
          ref={glassMiddleTargetRef}
          isGrayScale={false}
          className="absolute left-[450px] top-[145px] h-[343px] w-[79px] bg-red-500 bg-opacity-0"
        />

        <DragRefTarget
          key="glassRightTarget"
          id="glassRightTarget"
          hideMarker={false}
          targetBgImg="bg-[url('/images/stainedwindows/cright.png')] bg-no-repeat"
          targetBgPos="absolute left-[546px] top-[9px] h-[343px] w-[79px]"
          loaderPos=""
          isDropped={isDroppedGlassRight}
          hideLoader={false}
          ref={glassRightTargetRef}
          isGrayScale={false}
          className="absolute left-[550px] top-[145px] h-[343px] w-[79px] bg-red-500 bg-opacity-0"
        />
      </div>

      {/* Drags */}
      <div className="absolute right-[12px] top-[130px] h-[350px] w-[171px] bg-white bg-opacity-0">
        {/* Left */}
        <DragContainerItem
          key="professor"
          id="professor"
          label="Professor"
          hideDragItem={false}
          labelClassName="relative left-[0px] top-[10px] z-20 h-[10px] w-[80px] text-center text-[9px] text-white"
          dragItemImage="bg-[url('/images/stainedwindows/cornaro_professor.png')]"
          handleDragEnd={handleDragEndGlassLeftModified}
          isDropped={isDroppedGlassLeft}
          x={xGlassLeft}
          y={yGlassLeft}
          itemClassName="absolute left-[16px] top-[10px] h-[80px] w-[160px] bg-red-500 bg-opacity-0 bg-cover"
          dragElastic={0}
          isHorizontalDrag={false}
        />

        {/* Middle */}
        <DragContainerItem
          key="princess"
          id="princess"
          hideDragItem={false}
          label="Princess"
          labelClassName="relative left-[-5px] top-[115px] z-20 h-[10px] w-[80px] text-center text-[9px] text-white"
          dragItemImage="bg-[url('/images/stainedwindows/cornaro_princess.png')]"
          handleDragEnd={handleDragEndGlassCenterModified}
          isDropped={isDroppedGlassMiddle}
          x={xGlassMiddle}
          y={yGlassMiddle}
          itemClassName="absolute left-[20px] top-[125px] h-[80px] w-[155px] bg-blue-500 bg-opacity-0 bg-cover"
          dragElastic={0}
          isHorizontalDrag={false}
        />

        {/* Right */}
        <DragContainerItem
          key="students"
          id="students"
          hideDragItem={false}
          label="Students"
          labelClassName="relative left-[-2px] top-[220px] z-20 h-[10px] w-[80px] text-center text-[9px] text-white"
          dragItemImage="bg-[url('/images/stainedwindows/cornaro_students.png')]"
          handleDragEnd={handleDragEndGlassRightModified}
          isDropped={isDroppedGlassRight}
          x={xGlassRight}
          y={yGlassRight}
          itemClassName="absolute left-[20px] top-[240px] h-[80px] w-[155px] bg-blue-500 bg-opacity-0 bg-cover"
          dragElastic={0}
          isHorizontalDrag={false}
        />
      </div>

      {/* Continue  */}
      {hasCompletedCount && (
        <ContinueBtn className="" onClick={() => setIsContinue(true)} />
      )}
    </SectionSlide>
  );
}
