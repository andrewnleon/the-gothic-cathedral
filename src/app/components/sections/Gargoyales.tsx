import Image from "next/image";
import React, { useRef, useState } from "react";
import useDrag from "@app/lib/hooks/useDrag";
import DragRefTarget from "@app/components/actions/DragRefTarget";
import DraggableLabelItem from "@app/components/actions/DragLabelItem";
import ContinueBtn from "@app/components/modules/ContinueBtn";
import InfoWindow from "@app/components/modules/InfoWindow";
import InfoWindowHelp from "@app/components/modules/InfoWindowHelp";
import useCompletionCount from "@app/lib/hooks/useCompletionCount";
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

export default function Architecture({ showNextSlide }: any) {

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

  const [infoWindowText, setInfoWindowText] = useState<string>(lionText);

  //1. Drag enabled target Items
  const {
    isDropped: isDroppedLion,
    x,
    y,
  } = useDrag(
    targetsRef.lion,
    20,
    20,
    -10,
    12,
  );
  const {
    isDropped: isDroppedDog,
    x: xDog,
    y: yDog,
  } = useDrag(
    targetsRef.dog,
    30,
    30,
    0,
    0,
  );
  const {
    isDropped: isDroppedWolf,
    x: xWolf,
    y: yWolf,
  } = useDrag(
    targetsRef.wolf,
    30,
    30,
    0,
    0,
  );
  const {
    isDropped: isDroppedEagle,
    x: xEagle,
    y: yEagle,
  } = useDrag(
    targetsRef.eagle,
    30,
    30,
    0,
    0,
  );
  const {
    isDropped: isDroppedSnake,
    x: xSnake,
    y: ySnake,
  } = useDrag(
    targetsRef.snake,
    30,
    30,
    0,
    0,
  );
  const {
    isDropped: isDroppedGoat,
    x: xGoat,
    y: yGoat,
  } = useDrag(
    targetsRef.goat,
    30,
    30,
    0,
    0,
  );
  const {
    isDropped: isDroppedMonkey,
    x: xMonkey,
    y: yMonkey,
  } = useDrag(
    targetsRef.monkey,
    30,
    30,
    0,
    0,
  );

  // Count Completions
  // If an action is completed to its respective target then do count
  const [isContinue, setIsContinue] = useState(false);
  const isDroppedStates = [isDroppedLion, isDroppedDog, isDroppedWolf, isDroppedEagle, isDroppedSnake, isDroppedGoat, isDroppedMonkey];
  const completedCount = useCompletionCount( isDroppedStates, showNextSlide, isContinue, );
  const hasCompletedCount = completedCount === isDroppedStates.length;

  const [loadersVisibility, setLoadersVisibility] = useState({
    dog: true,
    wolf: false,
    eagle: false,
    snake: false,
    goat: false,
    monkey: false,
  });
  
  const handleDragEndScroll = (event: any) => {
    const dropX = event.clientX;
    const dropY = event.clientY;
    const targets = [
      { ref: targetsRef.lion, name: 'lion', text: lionText },
      { ref: targetsRef.dog, name: 'dog', text: dogText },
      { ref: targetsRef.wolf, name: 'wolf', text: wolfText },
      { ref: targetsRef.eagle, name: 'eagle', text: eagleText },
      { ref: targetsRef.snake, name: 'snake', text: snakeText },
      { ref: targetsRef.goat, name: 'goat', text: goatText },
      { ref: targetsRef.monkey, name: 'monkey', text: monkeyText },
    ];
  
    targets.forEach(({ ref, name, text }) => {
      const rect = ref.current?.getBoundingClientRect();
      if (rect && dropX >= rect.left && dropX <= rect.right && dropY >= rect.top && dropY <= rect.bottom) {
        setLoadersVisibility(prevState => {
          let newState = { ...prevState, [name]: false }; 
          if (name === 'dog') {
            newState = { ...newState, wolf: true };
          }
          if (name === 'wolf') {
            newState = { ...newState, eagle: true };
          }
          if (name === 'eagle') {
            newState = { ...newState, snake: true };
          }
          if (name === 'snake') {
            newState = { ...newState, goat: true };
          }
          if (name === 'goat') {
            newState = { ...newState, monkey: true };
          }
          return newState;
        });
        setInfoWindowText(text);
      }
    });
  };

  return (
    <SectionSlide bgImage="/images/gargoyales/gargoyales.png" ref={targetsRef.containerRef}>
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
          ref={targetsRef.lion}
          className="absolute left-[96.2px] top-[-5px] h-[20px] w-[20px] bg-red-500 bg-opacity-0"
        />

        <DragRefTarget
          key="scrollDog"
          id="scrollDog"
          targetBgImg=""
          targetBgPos=""
          loaderPos="ms-[-5px] mt-[-5px]"
          hideMarker={false}
          hideLoader={!loadersVisibility.dog} // Use the state to control loader visibility directly
          isDropped={isDroppedDog}
          ref={targetsRef.dog}
          className="absolute left-[193px] top-[-5px] h-[20px] w-[20px] bg-yellow-500 bg-opacity-0"
        />

        <DragRefTarget
          key="scrollWolf"
          id="scrollWolf"
          targetBgImg=""
          targetBgPos=""
          loaderPos="ms-[-5px] mt-[-5px]"
          hideMarker={false}
          hideLoader={!loadersVisibility.wolf}
          isDropped={isDroppedWolf}
          ref={targetsRef.wolf}
          className="absolute left-[291px] top-[-5px] h-[20px] w-[20px] bg-orange-500 bg-opacity-0"
        />

        <DragRefTarget
          key="scrollEagle"
          id="scrollEagle"
          targetBgImg=""
          targetBgPos=""
          loaderPos="ms-[-5px] mt-[-5px]"
          hideMarker={false}
          hideLoader={!loadersVisibility.eagle}
          isDropped={isDroppedEagle}
          ref={targetsRef.eagle}
          className="absolute left-[394px] top-[-5px] h-[20px] w-[20px] bg-green-500 bg-opacity-0"
        />

        <DragRefTarget
          key="scrollSnake"
          id="scrollSnake"
          targetBgImg=""
          targetBgPos=""
          loaderPos="ms-[-5px] mt-[-5px]"
          hideMarker={false}
          hideLoader={!loadersVisibility.snake}
          isDropped={isDroppedSnake}
          ref={targetsRef.snake}
          className="absolute left-[503px] top-[-5px] h-[20px] w-[20px] bg-blue-500 bg-opacity-0"
        />

        <DragRefTarget
          key="scrollGoat"
          id="scrollGoat"
          targetBgImg=""
          targetBgPos=""
          loaderPos="ms-[-5px] mt-[-5px]"
          hideMarker={false}
          hideLoader={!loadersVisibility.goat}
          isDropped={isDroppedGoat}
          ref={targetsRef.goat}
          className="absolute left-[611px] top-[-5px] h-[20px] w-[20px] bg-purple-500 bg-opacity-0"
        />

        <DragRefTarget
          key="scrollMonkey"
          id="scrollMonkey"
          targetBgImg=""
          targetBgPos=""
          loaderPos="ms-[-5px] mt-[-5px]"
          hideMarker={false}
          hideLoader={!loadersVisibility.monkey}
          isDropped={isDroppedMonkey}
          ref={targetsRef.monkey}
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
          dragElastic={0}
          isHorizontalDrag={true}
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
