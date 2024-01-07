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
      <div
        className={`${
          isVisible ? "relative flex h-[564px] w-[1043px] bg-slate-700" : ""
        }`}
      >
        {isVisible && (
          <>
            {children}
            {showButton && (
              <div className="btn-enter absolute bottom-0 right-0 pb-3 pr-5">
                <button onClick={handleClick}>{label}</button>
              </div>
            )}
          </>
        )}
      </div>
    </SectionTransition>
  );
}
