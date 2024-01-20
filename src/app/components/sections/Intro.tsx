import Image from "next/image";
import React from "react";

export default function Intro() {
  return (
    <>
      <div
        className="items-top relative flex justify-center"
        style={{ height: "362px" }}
      >
        <h1 className="absolute mt-[50px] font-default text-xl text-secondary">
          Welcome to the gothic cathedral
        </h1>
        <div className="text-md absolute left-10 mt-[110px] pe-20 text-start text-secondary">
          <div className="flex">
            <div className="pe-3 font-default text-5xl">A</div>
            <p>
              Gothic Cathedral is a symbol of god and his power. It also resembles how much people respect him and his representation. A lot of cathedrals have been destroyed or worn away from time. But their artistic value will always be remembered and treaseured. 
              <br />
              <br />
              In this kiosk you will learn about these pieces from their contstruction to different types of gargoyales located on a gothic cathedral.
            </p>
          </div>
        </div>
        <Image src="/images/intro.png" width={816} height={362} alt="" />
      </div>
    </>
  );
}
