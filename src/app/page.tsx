"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Architecture from "./components/sections/Architecture";
import FlyingButtresses from "./components/sections/FlyingButtresses";
import Gargoyales from "./components/sections/Gargoyales";
import GothicVault from "./components/sections/GothicVault";
import Intro from "./components/sections/Intro";
import Section from "./components/Section";
import StainedGlassWindow from "./components/sections/StainedGlassWindow";
import ThankYou from "./components/sections/ThankYou";
import Image from "next/image";

export default function Home() {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [showIntro, setShowIntro] = useState(true);
  const [showArchitecture, setShowArchitecture] = useState(false);
  const [showGargoyales, setShowGargoyales] = useState(false);
  const [showFlyingButtresses, setShowFlyingButtresses] = useState(false);
  const [showGothicVault, setShowGothicVault] = useState(false);
  const [showStainedGlassWindow, setShowStainedGlassWindow] = useState(false);
  const [showOutro, setShowOutro] = useState(false);

  const sectionSetters = useMemo(
    () => [
      setShowIntro,
      setShowArchitecture,
      setShowGargoyales,
      setShowStainedGlassWindow,
      setShowFlyingButtresses,
      setShowGothicVault,
      setShowOutro,
    ],
    [],
  );

  useEffect(() => {
    if (currentSectionIndex < sectionSetters.length) {
      const timer = setTimeout(() => {
        sectionSetters[currentSectionIndex](true);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [currentSectionIndex, sectionSetters]);

  const goToNextSection = () => {
    if (currentSectionIndex < sectionSetters.length - 1) {
      sectionSetters[currentSectionIndex](false);
      setCurrentSectionIndex(currentSectionIndex + 1);
    }
  };

  const sections = [
    {
      label: "Enter",
      isVisible: showIntro,
      content: <Intro />,
      showButton: true,
    },
    {
      label: "Architecture",
      isVisible: showArchitecture,
      content: <Architecture showNextSlide={goToNextSection} />,
      showButton: false,
    },
    {
      label: "Gargoyales",
      isVisible: showGargoyales,
      content: <Gargoyales showNextSlide={goToNextSection} />,
      showButton: false,
    },
    {
      label: "Flying Buttresses",
      isVisible: showFlyingButtresses,
      content: <FlyingButtresses showNextSlide={goToNextSection} />,
      showButton: false,
    },
    {
      label: "Gothic Vault",
      isVisible: showGothicVault,
      content: <GothicVault showNextSlide={goToNextSection} />,
      showButton: false,
    },
    {
      label: "Stained Glass Window",
      isVisible: showStainedGlassWindow,
      content: <StainedGlassWindow showNextSlide={goToNextSection} />,
      showButton: false,
    },
    {
      label: "Thank You",
      isVisible: showOutro,
      content: <ThankYou />,
      showButton: false,
    },
  ];

  return (
    <main
      className="flex h-screen w-screen select-none flex-col items-center justify-between 
    bg-[url('/images/bg_wall.jpg')] bg-center"
    >
      <div className="relative top-0 flex w-full justify-center">
        <Image
          src="/images/top.png"
          className=""
          height="43"
          width="1200"
          alt=""
        />
      </div>

      <div className="relative z-50 flex flex-grow items-center justify-center">
        <div className="relative z-50 flex">
          <AnimatePresence mode="sync">
            {sections.map(
              (section, index) =>
                section.isVisible && (
                  <Section
                    key={index}
                    isVisible={section.isVisible}
                    onNext={goToNextSection}
                    showButton={section.showButton}
                    label={section.label}
                  >
                    {section.content}
                  </Section>
                ),
            )}
          </AnimatePresence>
        </div>
        <div className="z-1 absolute top-0 flex w-full justify-center md:mt-10 lg:mt-12">
          <Image
            src="/images/title.png"
            className="w-100 max-w-none mix-blend-overlay"
            height="30"
            width="461"
            quality={100}
            alt=""
          />
        </div>

        <div className="z-1 absolute mt-52 flex justify-center">
          <Image
            src="/images/line_rails.png"
            className="w-100 max-w-none mix-blend-overlay"
            width="962"
            height="771"
            quality={100}
            alt=""
          />
        </div>
      </div>

      <div className="flex justify-center">
        <Image
          src="/images/church.png"
          className="w-100 absolute z-20 max-w-none mix-blend-overlay"
          width="962"
          height="771"
          quality={100}
          alt=""
        />
      </div>

      <div className="relative bottom-0 z-50 flex justify-center">
        <Image
          src="/images/bottom.png"
          className=""
          height="55"
          width="1200"
          quality={100}
          alt=""
        />
      </div>
    </main>
  );
}
