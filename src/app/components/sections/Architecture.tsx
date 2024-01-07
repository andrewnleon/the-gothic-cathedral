import Image from "next/image";
import React from "react";

export default function Architecture() {
  return (
    <div className="flex items-center justify-center">
      <div className="relative h-[564px] w-[1043px]">
        <Image
          src="/images/architecture/architecture.png"
          width={816}
          height={400}
          alt="Architecture"
          className="absolute inset-0 m-auto z-10"
        />
        <Image src="/images/tray.png" layout="fill" alt="Tray" />
      </div>
    </div>
  );
}

{
  /* <div className="">
<Image
  src="/images/architecture/architecture_drag1.png"
  width={50}
  height={50}
  alt=""
/>
<Image
  src="/images/architecture/architecture_drag2.png"
  width={50}
  height={50}
  alt=""
/>
<Image
  src="/images/architecture/architecture_drag3.png"
  width={50}
  height={50}
  alt=""
/>
<Image
  src="/images/architecture/architecture_drag4.png"
  width={50}
  height={50}
  alt=""
/>
<Image
  src="/images/architecture/architecture_drag5.png"
  width={50}
  height={50}
  alt=""
/>

</div> */
}
