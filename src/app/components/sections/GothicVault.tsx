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
  gothicVaultAText,
  gothicVaultBText,
  gothicVaultCText,
  gothicVaultDText,
} from "@app/content";
import SectionSlide from "../SectionSlide";

export default function GothicVault({ showNextSlide }: any) {
  const vaultATargetRef = useRef<HTMLDivElement>(null);
  const vaultBTargetRef = useRef<HTMLDivElement>(null);
  const vaultCTargetRef = useRef<HTMLDivElement>(null);
  const vaultDTargetRef = useRef<HTMLDivElement>(null);
  const [infoWindowText, setInfoWindowText] = useState<string>("");

  //1. Drag enabled target Items
  const {
    isDropped: isDroppedVaultA,
    x: xVaultA,
    y: yVaultA,
    handleDragEnd: handleDragEndVaultA,
  } = useDrag(vaultATargetRef, 50, 50, -10, 15);

  const {
    isDropped: isDroppedVaultB,
    x: xVaultB,
    y: yVaultB,
    handleDragEnd: handleDragEndVaultB,
  } = useDrag(vaultBTargetRef, 50, 50, -10, 15);

  const {
    isDropped: isDroppedVaultC,
    x: xVaultC,
    y: yVaultC,
    handleDragEnd: handleDragEndVaultC,
  } = useDrag(vaultCTargetRef, 50, 50, -10, 15);

  const {
    isDropped: isDroppedVaultD,
    x: xVaultD,
    y: yVaultD,
    handleDragEnd: handleDragEndVaultD,
  } = useDrag(vaultDTargetRef, 50, 50, -10, 15);

  //2. Define Handlers
  const dependencies = {
    handleDragEndVaultA,
    vaultATargetRef,
    gothicVaultAText,
    handleDragEndVaultB,
    vaultBTargetRef,
    gothicVaultBText,
    handleDragEndVaultC,
    vaultCTargetRef,
    gothicVaultCText,
    handleDragEndVaultD,
    vaultDTargetRef,
    gothicVaultDText,
    setInfoWindowText
  };
  const {
    handleDragEndVaultAModified,
    handleDragEndVaultBModified,
    handleDragEndVaultCModified,
    handleDragEndVaultDModified,
  } = useHandlers(dependencies);

  // Count Completions
  const [isContinue, setIsContinue] = useState(false);
  const isDroppedStates = [
    isDroppedVaultA,
    isDroppedVaultB,
    isDroppedVaultC,
    isDroppedVaultD,
  ];
  const completedCount = useCompletionCount(
    isDroppedStates,
    showNextSlide,
    isContinue,
  );
  const hasCompletedCount = completedCount === isDroppedStates.length;

  return (
    <SectionSlide
      bgImage="/images/gothicvault/gothicvault.png"
      refContainer={undefined}
    >
      {/* Help */}
      <InfoWindowHelp infoWindowTextSize="" />
      {/* Infowindow for dropped item */}
      <InfoWindow
        className="absolute left-[15px] top-[140px] z-20 w-[610px] border-secondary border-opacity-50 bg-primary bg-opacity-95"
        text={infoWindowText}
      />

      {/* Targets */}
      <div className="absolute left-[5px] top-[120px] h-[360px] w-[620px] bg-white bg-opacity-0">
        <DragRefTarget
          key="vaultATarget"
          id="vaultATarget"
          hideMarker={false}
          targetBgImg="bg-[url('/images/gothicvault/gothicvault_begin.jpg')] bg-no-repeat bg-cover"
          targetBgPos="absolute left-[12px] top-[0px] h-[362px] w-[180px]"
          loaderPos="mt-40 ms-[80px]"
          isDropped={isDroppedVaultA}
          hideLoader={false}
          ref={vaultATargetRef}
          className="absolute left-[10px] top-[0px] h-[362px] w-[180px] bg-blue-500 bg-opacity-0"
        />
        <DragRefTarget
          key="vaultBTarget"
          id="vaultBTarget"
          hideMarker={false}
          targetBgImg="bg-[url('/images/gothicvault/gothicvault_start.jpg')] bg-no-repeat"
          targetBgPos="absolute left-[190px] top-[0px] h-[362px] w-[156px]"
          loaderPos="mt-40 ms-[65px]"
          isDropped={isDroppedVaultB}
          hideLoader={false}
          ref={vaultBTargetRef}
          className="absolute left-[190px] top-[0px] h-[362px] w-[156px] bg-red-500 bg-opacity-0"
        />
        <DragRefTarget
          key="vaultCTarget"
          id="vaultCTarget"
          hideMarker={false}
          targetBgImg="bg-[url('/images/gothicvault/gothicvault_middle.jpg')] bg-no-repeat"
          targetBgPos="absolute left-[345px] top-[0px] h-[362px] w-[156px]"
          loaderPos="mt-40 ms-[55px]"
          isDropped={isDroppedVaultC}
          hideLoader={false}
          ref={vaultCTargetRef}
          className="absolute left-[348px] top-[0px] h-[362px] w-[156px] bg-yellow-500 bg-opacity-0"
        />
        <DragRefTarget
          key="vaultDTarget"
          id="vaultDTarget"
          hideMarker={false}
          targetBgImg="bg-[url('/images/gothicvault/gothicvault_end.jpg')] bg-no-repeat"
          targetBgPos="absolute left-[490px] top-[0px] h-[362px] w-[156px]"
          loaderPos="mt-40 ms-[65px]"
          isDropped={isDroppedVaultD}
          hideLoader={false}
          ref={vaultDTargetRef}
          className="absolute left-[490px] top-[0px] h-[362px] w-[156px] bg-green-500 bg-opacity-0"
        />
      </div>

      {/* Drags */}
      <div className="absolute right-[12px] top-[130px] h-[350px] w-[171px] bg-white bg-opacity-0">
        {/* vaultA */}
        <DragContainerItem
          key="vaultA"
          id="vaultA"
          label="Vault A"
          hideDragItem={false}
          labelClassName="relative left-[10px] top-[10px] z-20 h-[10px] w-[80px] text-center text-[9px] text-white"
          dragItemImage="bg-[url('/images/gothicvault/gothicvault_begin.jpg')]"
          handleDragEnd={handleDragEndVaultAModified}
          isDropped={isDroppedVaultA}
          x={xVaultA}
          y={yVaultA}
          itemClassName="absolute left-[25px] top-[10px] h-[120px] w-[63px] bg-blue-500 bg-opacity-20 bg-cover"
          dragElastic={0}
          isHorizontalDrag={false}
        />

        {/* vaultB */}
        <DragContainerItem
          key="vaultB"
          id="vaultB"
          hideDragItem={false}
          label="Vault B"
          labelClassName="relative left-[90px] top-[0px] z-20 h-[10px] w-[80px] text-center text-[9px] text-white"
          dragItemImage="bg-[url('/images/gothicvault/gothicvault_start.jpg')]"
          handleDragEnd={handleDragEndVaultBModified}
          isDropped={isDroppedVaultB}
          x={xVaultB}
          y={yVaultB}
          itemClassName="absolute left-[105px] top-[10px] h-[120px] w-[63px] bg-blue-500 bg-opacity-20 bg-cover"
          dragElastic={0}
          isHorizontalDrag={false}
        />

        {/* vaultC */}
        <DragContainerItem
          key="vaultB"
          id="vaultB"
          hideDragItem={false}
          label="Vault C"
          labelClassName="relative left-[10px] top-[145px] z-20 h-[10px] w-[80px] text-center text-[9px] text-white"
          dragItemImage="bg-[url('/images/gothicvault/gothicvault_middle.jpg')]"
          handleDragEnd={handleDragEndVaultCModified}
          isDropped={isDroppedVaultC}
          x={xVaultC}
          y={yVaultC}
          itemClassName="absolute left-[25px] top-[165px] h-[125px] w-[63px] bg-blue-500 bg-opacity-20 bg-cover"
          dragElastic={0}
          isHorizontalDrag={false}
        />

        {/* vaultD */}
        <DragContainerItem
          key="vaultD"
          id="vaultD"
          hideDragItem={false}
          label="Vault D"
          labelClassName="relative left-[88px] top-[135px] z-20 h-[10px] w-[80px] text-center text-[9px] text-white"
          dragItemImage="bg-[url('/images/gothicvault/gothicvault_end.jpg')]"
          handleDragEnd={handleDragEndVaultDModified}
          isDropped={isDroppedVaultD}
          x={xVaultD}
          y={yVaultD}
          itemClassName="absolute left-[102px] top-[165px] h-[125px] w-[68px] bg-blue-500 bg-opacity-20 bg-cover"
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
