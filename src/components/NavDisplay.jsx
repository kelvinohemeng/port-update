import { Link } from "react-router-dom";
import AnimatedBox from "../components/AnimatedBox";
import { useEffect, useState } from "react";
import { BtnDefNativeNavLink } from "./BtnDef";
import transition from "./transition";
import { gsap } from "gsap";
// import Image1 from "assets/designbox/black.jpg";

const NavDisplay = ({ isOpen, setIsOpen }) => {
  const resetNavigation = () => {
    setIsOpen(false);
    // pageRefresh();
  };
  if (isOpen) {
    gsap.from(".nav-animate", {
      x: 100,
      transformOrigin: "top right",
      duration: 0.5,
      ease: "back",
    });
  }
  const defRounded = " rounded-[1.25rem]";

  return (
    <div
      onClick={setIsOpen}
      className={`nav-animate w-ll h-screen fixed  top-0 right-0 bg-white       ${
        !isOpen ? "hidden" : "flex "
      } `}
    >
      <div className=" h-full bg-white p-[4rem] flex flex-col justify-between">
        <div className="flex flex-col w-full h-full justify-center   ">
          <a href="#about" className=" text-left text-[1.5rem] w-full">
            About
          </a>

          <a
            href="https://bit.ly/resume-kelvin"
            target="_blank"
            className=" text-left text-[1.5rem] w-full"
          >
            Resume
          </a>

          <a href="#projects" className=" text-left text-[1.5rem] w-full">
            Projects
          </a>
        </div>

        <div className=" flex gap-4">
          <a href="https://www.linkedin.com/in/kelvinohemeng/" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 22 21"
              fill="none"
            >
              <path
                d="M15 7C16.5913 7 18.1174 7.63214 19.2426 8.75736C20.3679 9.88258 21 11.4087 21 13V20H17V13C17 12.4696 16.7893 11.9609 16.4142 11.5858C16.0391 11.2107 15.5304 11 15 11C14.4696 11 13.9609 11.2107 13.5858 11.5858C13.2107 11.9609 13 12.4696 13 13V20H9V13C9 11.4087 9.63214 9.88258 10.7574 8.75736C11.8826 7.63214 13.4087 7 15 7Z"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5 8H1V20H5V8Z"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 5C4.10457 5 5 4.10457 5 3C5 1.89543 4.10457 1 3 1C1.89543 1 1 1.89543 1 3C1 4.10457 1.89543 5 3 5Z"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a href="https://twitter.com/K_DesignBox" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 50 50"
              fill="#0000000"
            >
              <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
            </svg>
          </a>
          <a href="https://github.com/kelvinohemeng" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 21 23"
              fill="none"
            >
              <path
                d="M8 19.0268C3 20.5268 3 16.5268 1 16.0268M15 22.0268V18.1568C15.0375 17.68 14.9731 17.2006 14.811 16.7506C14.6489 16.3006 14.3929 15.8902 14.06 15.5468C17.2 15.1968 20.5 14.0068 20.5 8.54679C20.4997 7.15062 19.9627 5.80799 19 4.79679C19.4559 3.5753 19.4236 2.22514 18.91 1.02679C18.91 1.02679 17.73 0.676793 15 2.50679C12.708 1.88561 10.292 1.88561 8 2.50679C5.27 0.676793 4.09 1.02679 4.09 1.02679C3.57638 2.22514 3.54414 3.5753 4 4.79679C3.03013 5.81549 2.49252 7.17026 2.5 8.57679C2.5 13.9968 5.8 15.1868 8.94 15.5768C8.611 15.9168 8.35726 16.3222 8.19531 16.7667C8.03335 17.2112 7.96681 17.6849 8 18.1568V22.0268"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default transition(NavDisplay);
