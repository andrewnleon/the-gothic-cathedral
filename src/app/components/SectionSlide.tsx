import Image from "next/image";
import React from "react";

export default function SectionSlide({ children, bgImage }: any) {
  return (
    <div className="flex items-center justify-center">
      <div className="relative h-[564px] w-[1043px]">
        <div className="absolute left-1/2 top-1/2 z-50 h-[564px] w-[823px] -translate-x-1/2 -translate-y-1/2 transform px-1">
          {children}
        </div>
        <Image
          src="/images/angels.png"
          className="absolute bottom-0 left-[50px] z-10 m-auto"
          height="99"
          width="939"
          alt="Tray"
        />
        <Image
          src={bgImage}
          width={816}
          height={400}
          alt="Gargoyales"
          className="absolute inset-0 z-10 m-auto"
        />
        <Image src="/images/tray.png" layout="fill" alt="Tray" />
      </div>
    </div>
  );
}
