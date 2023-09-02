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
  if (!isOpen) {
    gsap.to(".nav", {
      y: -1500,
      duration: 1,
    });
  } else {
    gsap.to(".nav", {
      y: 10,
      duration: 1,
    });
  }

  return (
    <div
      className={`absolute navv   w-screen h-screen flex flex-col justify-center items-center transition-[200ms] px-8 -z-10 ${
        !isOpen ? "hidden" : "block"
      } `}
    >
      <div className="nav images-box relative w-full container mx-auto p-4 ">
        <div className="nav-btns">
          <BtnDefNativeNavLink linkTo="/" onClick={resetNavigation}>
            Home
          </BtnDefNativeNavLink>
          <span></span>
        </div>
        <div className="nav-btns">
          <BtnDefNativeNavLink linkTo="/about" onClick={resetNavigation}>
            About
          </BtnDefNativeNavLink>
          <span></span>
        </div>
        <div className="nav-btns">
          <BtnDefNativeNavLink linkTo="/projects" onClick={resetNavigation}>
            Projects
          </BtnDefNativeNavLink>
          <span></span>
        </div>
        <div className=" nav-btns">
          <BtnDefNativeNavLink target linkTo="https://bit.ly/resume-kelvin">
            Resume
          </BtnDefNativeNavLink>
          <span></span>
        </div>
      </div>
      <div className="images-box flex flex-col md:flex-row space-y-2 justify-between md:items-center h-fit py-3 w-full container mx-auto px-4 my-5">
        <p>Designed and developed by me</p>
        <a href="mailto:kelvinohemeng59@gmail.com" className=" animate-pulse">
          <p>Contact me</p>
        </a>
      </div>
    </div>
  );
};

export default transition(NavDisplay);
