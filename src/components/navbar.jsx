import { useEffect, useState, useRef } from "react";
// import { useRouter } from "next/navigation";
import Hamburger from "./hamburger";
import { Image } from "cloudinary-react";
import NavDisplay from "../components/NavDisplay";
import { Link } from "react-router-dom";
import { BtnDef } from "./BtnDef";
// import Image1 from "../assets/mygif.gif";

export const Navbar = ({}) => {
  const [hideNav, setHideNav] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef(null);
  return (
    <nav className=" fixed  flex items-center justify-between px-4 md:px-10 w-full z-[9999999] py-10">
      <div className=" flex items-center gap-2 ">
        <Link to="/" className=" flex items-center gap-4">
          <img
            src="/assets/wink.png"
            alt=""
            className=" max-w-[50px] md:max-w-[50px]  bg-[#201e1e] w-fit h-fit bg-opacity-10 border-2 border-[#ffffff] border-opacity-80 rounded-full"
          />
          {/* <span className=" font-medium text-2xl">Kelvin Ohemeng</span> */}
        </Link>
      </div>

      <div className="z-[99]">
        {" "}
        <NavDisplay isOpen={isOpen} setIsOpen={() => setIsOpen(!isOpen)} />
      </div>
      <div className="relative z-[999]">
        {" "}
        <div
          className="relative w-[40px] h-full"
          onClick={() => setIsOpen(!isOpen)}
        >
          <button className=" space-y-3 " onClick={() => setIsOpen(!isOpen)}>
            <span
              className={`${
                isOpen ? "rotate-[45deg] bg-black" : " bg-white"
              } w-[40px] h-[3px] absolute inset-0 transition-all duration-300`}
            ></span>
            <span
              className={`${
                isOpen
                  ? "rotate-[-45deg] w-[20px] bg-black"
                  : " w-[40px] bg-white"
              }  h-[3px] absolute inset-0 transition-all duration-300`}
            ></span>
          </button>
        </div>
      </div>
    </nav>
  );
};
