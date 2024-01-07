"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import SlidingTransition from "./components/SlidingTransition";

function Section({ isVisible, onNext, children }: any) {
  const handleClick = () => {
    onNext(false);
  };

  return (
    <SlidingTransition isVisible={isVisible}>
      <div className={`${isVisible ? "relative flex h-[564px] w-[1043px] bg-slate-700" : ""}`}>
        <div className="btn-enter absolute bottom-0 right-0 pb-3 pr-5">
          {isVisible && <button onClick={handleClick}>{children}</button>}
        </div>
      </div>
    </SlidingTransition>
  );
}

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [showArchitecture, setShowArchitecture] = useState(false);

  // Handle transitions
  useEffect(() => {
    if (!showIntro) {
      const timer = setTimeout(() => setShowArchitecture(true), 500);
      return () => clearTimeout(timer);
    }
  }, [showIntro]);

  useEffect(() => {
    if (!showArchitecture) {
      const timer = setTimeout(() => setShowIntro(true), 500);
      return () => clearTimeout(timer);
    }
  }, [showArchitecture]);

  return (
    <main className="flex h-screen w-screen flex-col items-center justify-between overflow-hidden">
      <div className="relative z-[10] flex flex-grow items-center justify-center">
        <AnimatePresence mode="sync">
          {showIntro && (
            <Section isVisible={showIntro} onNext={setShowIntro}>
              Enter
            </Section>
          )}
          {showArchitecture && (
            <Section isVisible={showArchitecture} onNext={setShowArchitecture}>
              Architecture
            </Section>
          )}
          {/* Additional sections can be added here similarly */}
        </AnimatePresence>
      </div>
    </main>
  );
}
