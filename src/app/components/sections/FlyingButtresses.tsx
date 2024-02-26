import React, { useRef, useState } from "react";
import useDrag from "@app/lib/hooks/useDrag";
import DragRefTarget from "@app/components/actions/DragRefTarget";
import DragContainerItem from "@app/components/actions/DragContainerItem";
import ContinueBtn from "@app/components/modules/ContinueBtn";
import InfoWindow from "@app/components/modules/InfoWindow";
import InfoWindowHelp from "@app/components/modules/InfoWindowHelp";
import useCompletionCount from "@app/lib/hooks/useCompletionCount";
import { useHandlers } from "@app/lib/handlers";
import { woodFrameText, flyingButtressesSideText } from "@app/content";
import SectionSlide from "../SectionSlide";

export default function FlyingButtresses({ showNextSlide }: any) {
  const woodFrameTargetRef = useRef<HTMLDivElement>(null);
  const flyingButtressesTargetRef = useRef<HTMLDivElement>(null);
  const [infoWindowText, setInfoWindowText] = useState<string>("");

  //1. Drag enabled target Items
  const {
    isDropped: isDroppedWoodFrame,
    x: xWoodFrame,
    y: yWoodFrame,
    handleDragEnd: handleDragEndWoodFrame,
  } = useDrag(woodFrameTargetRef, 50, 50, -10, 15);

  const {
    isDropped: isDroppedFlyingButtressesSiding,
    x: xFlyingButtresses,
    y: yFlyingButtresses,
    handleDragEnd: handleDragEndFlyingButtressesSiding,
  } = useDrag(flyingButtressesTargetRef, 50, 50, -10, 15);

  //2. Define Handlers
  const dependencies = {
    handleDragEndWoodFrame,
    woodFrameTargetRef,
    woodFrameText,
    handleDragEndFlyingButtressesSiding,
    flyingButtressesTargetRef,
    flyingButtressesSideText,
    setInfoWindowText,
  };
  const {
    handleDragEndWoodFrameModified,
    handleDragEndFlyingButtressesSidingModified,
  } = useHandlers(dependencies);

  // Count Completions
  const [isContinue, setIsContinue] = useState(false);
  const isDroppedStates = [isDroppedWoodFrame, isDroppedFlyingButtressesSiding];
  const completedCount = useCompletionCount(
    isDroppedStates,
    showNextSlide,
    isContinue,
  );
  const hasCompletedCount = completedCount === isDroppedStates.length;

  return (
    <SectionSlide
      bgImage="/images/flyingbuttresses/flyingbuttress.png"
      refContainer={undefined}
    >
      {/* Help */}
      <InfoWindowHelp infoWindowTextSize="" />
      {/* Infowindow for dropped item */}
      <InfoWindow
        className="absolute left-[15px] top-[130px] z-20 w-[290px] border-secondary border-opacity-50 bg-primary bg-opacity-95"
        text={infoWindowText}
      />

      {/* Targets */}
      <div className="absolute left-[5px] top-[120px] h-[360px] w-[620px] bg-white bg-opacity-0">
        <DragRefTarget
          key="flyingButtressesTarget"
          id="flyingButtressesTarget"
          hideMarker={false}
          targetBgImg="bg-[url('/images/flyingbuttresses/flyingbuttress_siding_grayed.png')] bg-no-repeat bg-cover "
          targetBgPos="absolute left-[60px] top-[24px] h-[315px] w-[583px]"
          loaderPos=""
          isDropped={isDroppedFlyingButtressesSiding}
          hideLoader={false}
          ref={flyingButtressesTargetRef}
          className="absolute left-[340px] top-[150px] h-[80px] w-[80px] bg-blue-500 bg-opacity-0"
        />

        <DragRefTarget
          key="woodFrameTarget"
          id="woodFrameTarget"
          hideMarker={false}
          targetBgImg="bg-[url('/images/flyingbuttresses/woodframe.png')] bg-no-repeat"
          targetBgPos="absolute left-[104px] top-[55px] h-[241px] w-[467px]"
          loaderPos=""
          isDropped={isDroppedWoodFrame}
          hideLoader={false}
          ref={woodFrameTargetRef}
          isGrayScale={false}
          className="absolute left-[328px] top-[45px] h-[80px] w-[80px] bg-red-500 bg-opacity-0"
        />
      </div>

      {/* Drags */}
      <div className="absolute right-[12px] top-[130px] h-[350px] w-[171px] bg-white bg-opacity-0">
        {/* Wood Frame */}
        <DragContainerItem
          key="woodFrame"
          id="woodFrame"
          label="Wood Frame"
          hideDragItem={false}
          labelClassName="relative left-[5px] top-[5px] z-20 h-[10px] w-[80px] text-center text-[9px] text-white"
          dragItemImage="bg-[url('/images/flyingbuttresses/woodframe.png')]"
          handleDragEnd={handleDragEndWoodFrameModified}
          isDropped={isDroppedWoodFrame}
          x={xWoodFrame}
          y={yWoodFrame}
          itemClassName="absolute left-[25px] top-[0px] h-[60px] w-[140px] bg-red-500 bg-opacity-0 bg-cover"
          dragElastic={0}
          isHorizontalDrag={false}
        />

        {/* Flying Buttresses */}
        <DragContainerItem
          key="flyingbuttresses"
          id="flyingbuttresses"
          hideDragItem={false}
          label="Outer Frame"
          labelClassName="relative left-[5px] top-[95px] z-20 h-[10px] w-[80px] text-center text-[9px] text-white"
          dragItemImage="bg-[url('/images/flyingbuttresses/flyingbuttress_siding.png')]"
          handleDragEnd={handleDragEndFlyingButtressesSidingModified}
          isDropped={isDroppedFlyingButtressesSiding}
          x={xFlyingButtresses}
          y={yFlyingButtresses}
          itemClassName="absolute left-[25px] top-[100px] h-[65px] w-[140px] bg-blue-500 bg-opacity-0 bg-cover"
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
