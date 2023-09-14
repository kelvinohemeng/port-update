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
    gsap.from(".nav", {
      scale: 0,
      transformOrigin: "top right",
      duration: 0.5,
      ease: "back",
    });
  }

  return (
    <div
      className={`navv w-screen relative h-fit container mx-auto flex justify-end items-start  transition-[200ms] px-4 pointer-events-none  ${
        !isOpen ? "hidden" : "block"
      } `}
    >
      <div className="nav  absolute w-fit p-4 text-white pointer-events-auto mt-[5vh]">
        <div className="nav-btns">
          <BtnDefNativeNavLink linkTo="/about" onClick={resetNavigation}>
            About
          </BtnDefNativeNavLink>
          {/* <span></span> */}
        </div>
        <div className="nav-btns">
          <BtnDefNativeNavLink linkTo="/projects" onClick={resetNavigation}>
            Projects
          </BtnDefNativeNavLink>
          {/* <span></span> */}
        </div>
        <div className=" nav-btns">
          <BtnDefNativeNavLink target linkTo="https://bit.ly/resume-kelvin">
            Resume
          </BtnDefNativeNavLink>
          {/* <span></span> */}
        </div>
      </div>
    </div>
  );
};

export default transition(NavDisplay);
