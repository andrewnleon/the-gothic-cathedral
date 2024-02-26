import React from "react";

type Props = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  className: string;
};

function ContinueBtn({ onClick, className }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`text-glow blink absolute bottom-[40px] z-10 right-[80px] h-[auto] w-[100px] p-2 text-end text-[13px] text-lg font-extrabold text-secondary transition-opacity duration-75 ${className}`}
    >
      Continue
    </button>
  );
}

export default ContinueBtn;
