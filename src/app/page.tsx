import { url } from "inspector";
import Image from "next/image";

export default function Home() {
  return (
    <main
      className="flex h-screen w-screen flex-col items-center justify-between"
      style={{
        background: `url('/images/background.jpg') repeat-x top center`,
        objectFit: "contain",
      }}
    >
      {/* Header */}
      <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto" />
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white lg:static lg:h-auto lg:w-auto lg:bg-none dark:from-black dark:via-black">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      {/* Body */}
      <div className="relative z-[10] -mt-[8.3rem] flex h-[564px] w-[1043px] bg-slate-700"></div>

      {/* Footer */}
      <div className="grid w-full bg-white p-10 text-center lg:mb-0 lg:grid-cols-4 lg:text-left"></div>
    </main>
  );
}
