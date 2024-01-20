import React from "react";
import SectionTransition from "./SectionTransition";

export default function Section({
  isVisible,
  onNext,
  children,
  label,
  showButton,
}: any) {
  const handleClick = () => {
    onNext(false);
  };

  return (
    <SectionTransition isVisible={isVisible}>
      <div className={`${isVisible ? "relative flex h-[auto] w-[auto]" : ""}`}>
        {isVisible && (
          <>
            {children}
            {showButton && (
              <div className="text-glow blink absolute bottom-[15px] right-[55px] h-[auto] w-[100px] p-2 text-end text-[26px] font-bold uppercase text-secondary transition-opacity duration-75">
                <button onClick={handleClick}>{label}</button>
              </div>
            )}
          </>
        )}
      </div>
    </SectionTransition>
  );
}
