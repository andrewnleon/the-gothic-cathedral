import Image from "next/image";
import React from "react";

export default function Intro() {
  return (
    <>
      <div
        className="items-top relative flex justify-center"
        style={{ height: "362px" }}
      >
        <h1 className="absolute mt-[45px] text-center font-default text-2xl font-bold leading-normal text-secondary">
          Welcome!
        </h1>
        <div className="text-md absolute left-10 mt-[100px] pe-10 text-start text-secondary">
          <div className="flex">
            <div className="-mt-1 pe-3 font-default text-5xl">A</div>
            <p className="md:text-md heading-tight text-[2vw] lg:text-lg">
              Gothic Cathedral is a symbol of god and his power. It also
              resembles how much people respect him and his representation. A
              lot of cathedrals have been destroyed or worn away from time. But
              their artistic value will always be remembered and treaseured.
              <br />
              <br />
              In this kiosk you will learn about these pieces from their
              contstruction to different types of gargoyales located on a gothic
              cathedral.
            </p>
          </div>
        </div>
        <Image src="/images/intro.png" width={816} height={362} alt="" />
      </div>
    </>
  );
}
