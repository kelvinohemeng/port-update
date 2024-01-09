import React, { useEffect, useRef } from "react";
import { SplitTextAnim } from "./SplitTextAnim";

const FooterNew = () => {
  return (
    <footer>
      <section className="my-[10vh] container mx-auto px-2">
        <div className=" min-h-[40rem] flex flex-col justify-around">
          <div className="flex justify-center md:justify-between items-stretch flex-wrap gap-8">
            <h1 className=" tracking-tighter flex flex-col leading-[100%] justify-center">
              <SplitTextAnim
                className={" text-[35px] md:text-[60px] i-font "}
                text="Let's work together!"
              />
            </h1>
            <a
              href="mailto:kelvinohemeng59@gmail.com"
              className=" md:px-8 py-4 bg-bg-black text-white text-[40px] rounded-full w-full md:max-w-[500px] min-h-full grid place-items-center"
            >
              <button>Get in touch</button>
            </a>
          </div>
          <div className="flex flex-col text-center md:text-left gap-[40px]">
            <div>
              <p>Kelvin Ohemeng</p>
              <span className="text-xl opacity-80">
                Multidisciplinary Developer
              </span>
            </div>
            <span className="text-[18px] opacity-50">
              <span>{`©️${new Date().getFullYear()}`}</span> Designed and
              developed by me
            </span>
          </div>
        </div>
      </section>
    </footer>
  );
};
export default FooterNew;
