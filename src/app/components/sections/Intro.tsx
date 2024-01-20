import Image from "next/image";
import React from "react";

export default function Intro() {
  return (
    <>
      <div
        className="items-top relative flex justify-center"
        style={{ height: "362px" }}
      >
        <div className="absolute mt-[70px] text-xl text-secondary">
          Welcome to the gothic cathedral
        </div>
        <div className="text-md absolute left-10 mt-[120px] text-start text-secondary">
          <span className="font-default pe-3 text-5xl">A</span>
          <p>
            Gothic Cathedral is a symbol of god and his power. It also resembles
            how much people respect him and his representation. A lot of
            cathedrals have been destroyed or worn away from time.
          </p>
        </div>
        <Image src="/images/intro.png" width={816} height={362} alt="" />
      </div>
    </>
  );
}
