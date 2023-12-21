import gsap from "gsap";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BtnDefFollow } from "./BtnDef";

export const MainNav = () => {
  const [trigger, setTrigger] = useState(false);
  const tl = gsap.timeline({ repeat: 0 });
  useEffect(() => {
    tl.to(".nav-cont", {
      opacity: trigger ? 1 : 0,
      width: trigger ? "100%" : 0,
      height: trigger ? 400 : 0,
      ease: "power4.out",
    });
    tl.from(
      ".links",
      {
        opacity: trigger ? 0 : 1,
        x: trigger ? 100 : 0,
        rotationY: trigger ? 45 : 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "circ.out",
      },
      0.5
    );
    return () => {
      tl.kill();
    };
  }, [trigger]);
  const triggerNav = () => {
    setTrigger((prevState) => !prevState);
    // !trigger && tl.restart();
  };

  return (
    <div className=" fixed bottom-0 p-5 right-0 px-1 sm:m-5 w-full flex justify-center  mx-auto md:w-max z-[999999]">
      <div
        className={` -z-[10] nav-cont absolute max-w-[90%] md:max-w-[99%] bottom-28 md:right-0 bg-primary opacity-0  p-5 rounded-[10px]`}
      >
        <div className="flex flex-col justify-between h-full text-bg-black font-normal tracking-tighter">
          <div className="flex flex-col text-[1.8rem]">
            <div className="links opacity-100">
              <BtnDefFollow
                onClick={() => setTrigger(false)}
                bg={"bg-transparent  "}
                className={""}
                text={"text-text-bg-black"}
                linkTo="/"
              >
                {" "}
                Home
              </BtnDefFollow>
            </div>
            <div className="links opacity-100">
              <BtnDefFollow
                onClick={() => setTrigger(false)}
                bg={"bg-transparent "}
                className={""}
                text={"text-text-bg-black"}
                linkTo="/about"
              >
                {" "}
                About
              </BtnDefFollow>
            </div>
            <div className="links opacity-100">
              <BtnDefFollow
                onClick={() => setTrigger(false)}
                bg={"bg-transparent "}
                className={""}
                text={"text-text-bg-black"}
                linkTo="/projects"
              >
                {" "}
                Projects
              </BtnDefFollow>
            </div>
            <div className="links opacity-100">
              <BtnDefFollow
                onClick={() => setTrigger(false)}
                bg={"bg-transparent "}
                className={""}
                text={"text-text-bg-black"}
                linkTo="https://bit.ly/resume-kelvin"
                target
              >
                {" "}
                Resume
              </BtnDefFollow>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="links opacity-100 flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="#111111"
                viewBox="0 0 256 256"
              >
                <path d="M196,64V168a4,4,0,0,1-8,0V73.66L66.83,194.83a4,4,0,0,1-5.66-5.66L182.34,68H88a4,4,0,0,1,0-8H192A4,4,0,0,1,196,64Z"></path>
              </svg>{" "}
              <BtnDefFollow
                onClick={() => setTrigger(false)}
                bg={"bg-transparent "}
                className={""}
                text={"text-text-bg-black"}
                linkTo="https://linkedin.com/in/kelvinohemeng/"
                target
              >
                {" "}
                LinkedIn
              </BtnDefFollow>
            </div>
            <div className="links opacity-100 flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="#111111"
                viewBox="0 0 256 256"
              >
                <path d="M196,64V168a4,4,0,0,1-8,0V73.66L66.83,194.83a4,4,0,0,1-5.66-5.66L182.34,68H88a4,4,0,0,1,0-8H192A4,4,0,0,1,196,64Z"></path>
              </svg>
              <BtnDefFollow
                onClick={() => setTrigger(false)}
                bg={"bg-transparent "}
                className={""}
                text={"text-text-bg-black"}
                linkTo="https://github.com/kelvinohemeng"
                target
              >
                {" "}
                Github
              </BtnDefFollow>
            </div>
            <div className="links opacity-100 flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="#111111"
                viewBox="0 0 256 256"
              >
                <path d="M196,64V168a4,4,0,0,1-8,0V73.66L66.83,194.83a4,4,0,0,1-5.66-5.66L182.34,68H88a4,4,0,0,1,0-8H192A4,4,0,0,1,196,64Z"></path>
              </svg>
              <BtnDefFollow
                onClick={() => setTrigger(false)}
                bg={"bg-transparent "}
                className={""}
                text={"text-text-bg-black"}
                linkTo="https://https://twitter.com/K_DesignBox"
                target
              >
                {" "}
                X(Twitter)
              </BtnDefFollow>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-full h-full bg-text bg-opacity-10 backdrop-blur-sm p-2 rounded-full flex gap-2 z-[9999]">
        <a
          href="mailto:kelvinohemeng59@gmail.com"
          className=" text-[20px] md:p-[15px] w-full md:px-[30px] grid place-items-center md:w-max bg-primary text-bg-black rounded-full"
        >
          <button>Get in touch</button>
        </a>
        <button
          className=" cursor-pointer text-[20px] w-full justify-center py-[15px] md:px-[30px] flex items-center gap-4 md:w-max bg-background text-white rounded-full"
          onClick={() => triggerNav()}
        >
          <span>{trigger ? "Close" : "Menu"}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
          >
            <rect
              x="0.25"
              y="0.497932"
              width="4.20045"
              height="4.20082"
              rx="2.10022"
              fill="#D9D9D9"
            />
            <rect
              x="8.65625"
              y="0.497932"
              width="4.20045"
              height="4.20082"
              rx="2.10022"
              fill="#D9D9D9"
              className={
                trigger
                  ? "translate-y-[35%] duration-300 transition-all ease-out"
                  : "translate-y-[0%] duration-300 transition-all ease-out"
              }
            />
            <rect
              x="17.0547"
              y="0.497932"
              width="4.20045"
              height="4.20082"
              rx="2.10022"
              fill="#D9D9D9"
            />
            <rect
              x="0.25"
              y="8.89956"
              width="4.20045"
              height="4.20082"
              rx="2.10022"
              fill="#D9D9D9"
              className={
                trigger
                  ? "translate-x-[35%] duration-300 transition-all ease-out"
                  : "translate-x-[0%] duration-300 transition-all ease-out"
              }
            />
            <rect
              x="8.65625"
              y="8.89956"
              width="4.20045"
              height="4.20082"
              rx="2.10022"
              fill="#D9D9D9"
            />
            <rect
              x="17.0547"
              y="8.89956"
              width="4.20045"
              height="4.20082"
              rx="2.10022"
              fill="#D9D9D9"
              className={
                trigger
                  ? "translate-x-[-35%] duration-300 transition-all ease-out"
                  : "translate-x-[0%] duration-300 transition-all ease-out"
              }
            />
            <rect
              x="0.25"
              y="17.3012"
              width="4.20045"
              height="4.20082"
              rx="2.10022"
              fill="#D9D9D9"
            />
            <rect
              x="8.65625"
              y="17.3012"
              width="4.20045"
              height="4.20082"
              rx="2.10022"
              fill="#D9D9D9"
              className={
                trigger
                  ? "translate-y-[-35%] duration-300 transition-all ease-out"
                  : "translate-y-[0%] duration-300 transition-all ease-out"
              }
            />
            <rect
              x="17.0547"
              y="17.3012"
              width="4.20045"
              height="4.20082"
              rx="2.10022"
              fill="#D9D9D9"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
