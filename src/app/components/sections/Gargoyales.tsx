/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React, { useRef, useState } from "react";
import useDrag from "@app/lib/hooks/useDrag";
import DragRefTarget from "@app/components/actions/DragRefTarget";
import DraggableLabelItem from "@app/components/actions/DragContainerItem";
import ContinueBtn from "@app/components/modules/ContinueBtn";
import InfoWindow from "@app/components/modules/InfoWindow";
import InfoWindowHelp from "@app/components/modules/InfoWindowHelp";
import { AnimatePresence, motion } from "framer-motion";
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

export default function Gargoyales({ showNextSlide }: any) {
  const targetsRef = {
    lion: useRef<HTMLDivElement>(null),
    dog: useRef<HTMLDivElement>(null),
    wolf: useRef<HTMLDivElement>(null),
    eagle: useRef<HTMLDivElement>(null),
    snake: useRef<HTMLDivElement>(null),
    goat: useRef<HTMLDivElement>(null),
    monkey: useRef<HTMLDivElement>(null),
    containerRef: useRef<HTMLDivElement>(null),
  };
  const { isDropped, x, y } = useDrag(targetsRef.lion, 20, 20, -10, 12);
  const [infoWindowText, setInfoWindowText] = useState<string>(lionText);
  const [slideImage, setSlideImage] = useState("lion");
  const [spinnerVisibility, setSpinnerVisibility] = useState({
    dog: true,
    wolf: false,
    eagle: false,
    snake: false,
    goat: false,
    monkey: false,
  });

  const [isDropState, setIsDropState] = useState({
    lion: true,
    dog: true,
    wolf: false,
    eagle: false,
    snake: false,
    goat: false,
    monkey: false,
  });

  const [position, setPosition]: any = useState({ x: -10, y: 12 });
  const handleDragEnd = (event: any) => {
    const dropX = event.clientX;
    const dropY = event.clientY;
    let hitTarget = false; // flag

    const targets = [
      {
        ref: targetsRef.lion,
        name: "lion",
        text: lionText,
        initialPos: { x: -10, y: 12 },
        index: 1,
      },
      {
        ref: targetsRef.dog,
        name: "dog",
        text: dogText,
        initialPos: { x: 30, y: 12 },
        index: 2,
      },
      {
        ref: targetsRef.wolf,
        name: "wolf",
        text: wolfText,
        initialPos: { x: 40, y: 12 },
        index: 3,
      },
      {
        ref: targetsRef.eagle,
        name: "eagle",
        text: eagleText,
        initialPos: { x: 50, y: 12 },
        index: 4,
      },
      {
        ref: targetsRef.snake,
        name: "snake",
        text: snakeText,
        initialPos: { x: 60, y: 12 },
        index: 5,
      },
      {
        ref: targetsRef.goat,
        name: "goat",
        text: goatText,
        initialPos: { x: 70, y: 12 },
        index: 6,
      },
      {
        ref: targetsRef.monkey,
        name: "monkey",
        text: monkeyText,
        initialPos: { x: 80, y: 12 },
        index: 1,
      },
    ];

    targets.forEach(({ ref, name, text }, index) => {
      const rect = ref.current?.getBoundingClientRect();
      if (
        rect &&
        dropX >= rect.left &&
        dropX <= rect.right &&
        dropY >= rect.top &&
        dropY <= rect.bottom
      ) {
        hitTarget = true; // flag

        const newSpinnerVisibility: any = { ...spinnerVisibility };
        newSpinnerVisibility[name] = false;

        if (index + 1 < targets.length) {
          const nextTargetName = targets[index + 1].name;
          newSpinnerVisibility[nextTargetName] = true;
        }
        setSpinnerVisibility(newSpinnerVisibility);

        const newDropState: any = { ...isDropState };
        Object.keys(newDropState).forEach((key, idx) => {
          newDropState[key] = idx === index + 1;
        });

        setIsDropState(newDropState);
        setInfoWindowText(text);
        setSlideImage(name);
      }
    });
  };

  // Use completion hook
  const isDroppedStates = [
    isDropState.lion,
    isDropState.dog,
    isDropState.wolf,
    isDropState.eagle,
    isDropState.goat,
    isDropState.snake,
    isDropState.monkey,
  ];
  const completedCount = isDroppedStates.filter((state) => state).length;
  const hasCompletedCount = completedCount === 0;

  const continueHandler = () => {
    showNextSlide();
  };

  return (
    <SectionSlide bgImage="/images/gargoyales/gargoyales.png">
      {/* Help */}
      <InfoWindowHelp infoWindowTextSize="text-[11px]" />

      {/* Infowindow for dropped item */}
      <div className="me-[65px] ms-[95px]" ref={targetsRef.containerRef}>
        <InfoWindow
          className="absolute left-[147px] top-[155px] z-20 h-[300px] w-[671px] border-black border-opacity-50 bg-black bg-opacity-10 text-[16px] shadow-lg"
          text={infoWindowText}
        />

        {/* Targets */}
        <div className="absolute left-[5px] top-[120px] h-[360px] w-[820px] bg-white bg-opacity-0">
          <div className="absolute left-[2px] top-[39px] h-[299px] w-[128px] bg-red-500 bg-opacity-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={slideImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={`/images/gargoyales/${slideImage}.jpg`}
                  alt=""
                  width={128}
                  height={299}
                  className=""
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <DragRefTarget
            key="scrollLion"
            id="scrollLion"
            targetBgImg=""
            targetBgPos=""
            loaderPos="ms-[-5px] mt-[-5px]"
            hideMarker={false}
            hideLoader
            isDropped={isDropState.lion}
            ref={targetsRef.lion}
            className="absolute left-[80px] top-[-15px] h-[50px] w-[50px] bg-red-500 bg-opacity-0"
          />

          <DragRefTarget
            key="scrollDog"
            id="scrollDog"
            targetBgImg="bg-[url('/images/gargoyales/scroller.png')]"
            targetBgPos=""
            loaderPos="ms-[10px] mt-[5px]"
            hideMarker={false}
            hideLoader={!isDropState.dog} // Use the state to control loader visibility directly
            isDropped={!isDropState.dog}
            ref={targetsRef.dog}
            className="absolute left-[178px] top-[-15px] h-[50px] w-[50px] bg-yellow-500 bg-opacity-0"
          />

          <DragRefTarget
            key="scrollWolf"
            id="scrollWolf"
            targetBgImg=""
            targetBgPos=""
            loaderPos="ms-[10px] mt-[5px]"
            hideMarker={false}
            hideLoader={!isDropState.wolf}
            isDropped={!isDropState.wolf}
            ref={targetsRef.wolf}
            className="absolute left-[275px] top-[-15px] h-[50px] w-[50px] bg-orange-500 bg-opacity-0"
          />

          <DragRefTarget
            key="scrollEagle"
            id="scrollEagle"
            targetBgImg=""
            targetBgPos=""
            loaderPos="ms-[10px] mt-[5px]"
            hideMarker={false}
            hideLoader={!isDropState.eagle}
            isDropped={!isDropState.eagle}
            ref={targetsRef.eagle}
            className="absolute left-[380px] top-[-15px] h-[50px] w-[50px] bg-green-500 bg-opacity-0"
          />

          <DragRefTarget
            key="scrollSnake"
            id="scrollSnake"
            targetBgImg=""
            targetBgPos=""
            loaderPos="ms-[10px] mt-[5px]"
            hideMarker={false}
            hideLoader={!isDropState.snake}
            isDropped={!isDropState.snake}
            ref={targetsRef.snake}
            className="absolute left-[490px] top-[-15px] h-[50px] w-[50px] bg-blue-500 bg-opacity-0"
          />

          <DragRefTarget
            key="scrollGoat"
            id="scrollGoat"
            targetBgImg=""
            targetBgPos=""
            loaderPos="ms-[10px] mt-[5px]"
            hideMarker={false}
            hideLoader={!isDropState.goat}
            isDropped={!isDropState.goat}
            ref={targetsRef.goat}
            className="absolute left-[598px] top-[-15px] h-[50px] w-[50px] bg-purple-500 bg-opacity-0"
          />
          <DragRefTarget
            key="scrollMonkey"
            id="scrollMonkey"
            targetBgImg=""
            targetBgPos=""
            loaderPos="ms-[10px] mt-[5px]"
            hideMarker={false}
            hideLoader={!isDropState.monkey}
            isDropped={!isDropState.monkey}
            ref={targetsRef.monkey}
            className="absolute left-[710px] top-[-15px] h-[50px] w-[50px] bg-cyan-500 bg-opacity-0"
          />
        </div>

        {/* Scroller */}
        <div className="absolute right-[12px] top-[130px] w-[171px]">
          <DraggableLabelItem
            key="scroller"
            id="scrollerItem"
            label=""
            hideDragItem={false}
            labelClassName=""
            itemClassName="shadow-xs shadow-primary absolute left-[-529.5px] top-[-29px] h-[20px] w-[20px] bg-red-500 bg-opacity-0 bg-no-repeat"
            dragItemImage="bg-[url('/images/gargoyales/scroller.png')]"
            handleDragEnd={handleDragEnd}
            isDropped={false}
            x={position.x}
            y={position.y}
            dragElastic={0}
            isHorizontalDrag={true}
            refContainer={targetsRef.containerRef}
          />
        </div>
      </div>

      {/* Continue  */}
      {hasCompletedCount && (
        <ContinueBtn className="z-50" onClick={continueHandler} />
      )}
    </SectionSlide>
  );
}
