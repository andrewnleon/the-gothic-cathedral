"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Architecture from "./components/sections/Architecture";
import FlyingButtresses from "./components/sections/FlyingButtresses";
import Gargoyales from "./components/sections/Gargoyales";
import GothicVault from "./components/sections/GothicVault";
import Intro from "./components/sections/Intro";
import Roof from "./components/sections/Roof";
import Section from "./components/Section";
import StainedGlassWindow from "./components/sections/StainedGlassWindow";
import ThankYou from "./components/sections/ThankYou";

export default function Home() {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [showIntro, setShowIntro] = useState(true);
  const [showArchitecture, setShowArchitecture] = useState(false);
  const [showGargoyales, setShowGargoyales] = useState(false);
  const [showFlyingButtresses, setShowFlyingButtresses] = useState(false);
  const [showGothicVault, setShowGothicVault] = useState(false);
  const [showRoof, setShowRoof] = useState(false);
  const [showStainedGlassWindow, setShowStainedGlassWindow] = useState(false);
  const [showOutro, setShowOutro] = useState(false);

  const sectionSetters = useMemo(
    () => [
      setShowIntro,
      setShowArchitecture,
      setShowGargoyales,
      setShowFlyingButtresses,
      setShowGothicVault,
      setShowRoof,
      setShowStainedGlassWindow,
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
    console.log("Advancing to next section from", currentSectionIndex); // Debugging line
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
      content: <Gargoyales  showNextSlide={goToNextSection} />,
      showButton: false,
    },
    {
      label: "Flying Buttresses",
      isVisible: showFlyingButtresses,
      content: <FlyingButtresses />,
      showButton: true,
    },
    {
      label: "Gothic Vault",
      isVisible: showGothicVault,
      content: <GothicVault />,
      showButton: true,
    },
    { label: "Roof", isVisible: showRoof, content: <Roof />, showButton: true },
    {
      label: "Stained Glass Window",
      isVisible: showStainedGlassWindow,
      content: <StainedGlassWindow />,
      showButton: true,
    },
    {
      label: "Thank You",
      isVisible: showOutro,
      content: <ThankYou />,
      showButton: true,
    },
  ];

  return (
    <main className="flex h-screen w-screen select-none flex-col items-center justify-between overflow-hidden">
      <div className="relative z-[10] flex flex-grow items-center justify-center">
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
    </main>
  );
}
