import React from "react";
import SectionSlide from "../SectionSlide";

export default function ThankYou() {
  return (
    <SectionSlide bgImage="/images/tray_gray.jpg" refContainer={undefined}>
      <div
        className="items-top relative mt-20 flex justify-center"
        style={{ height: "362px" }}
      >
        <h1 className="absolute mt-[50px] text-center font-default text-2xl font-bold leading-normal text-secondary">
          Thank You
        </h1>
        <div className="text-md absolute mt-[120px] text-secondary">
          <p className="md:text-md px-24 sm:text-sm lg:text-lg">
            I sincerely hope you found the experience both educational and
            informative. Your engagement is highly valued, and I appreciate your
            interest in learning more about this historical architectural
            marvel.
            <br />
            <br />
            ~Andrew Leonberger
          </p>
        </div>
      </div>
    </SectionSlide>
  );
}
