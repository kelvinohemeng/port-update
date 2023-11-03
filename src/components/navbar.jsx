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

  const navClasses = `navigation ${hideNav ? `hide-nav` : ""}`;
  const containerClass = "container mx-auto md:px-8 px-4";
  const mediumText = "text-[1.843rem]";
  const medText = "text-[1.873rem]";
  const bigText = "text-[2.5rem] md:text-[5.13975rem] leading-[95%]";
  const bg = "bg-[#e8e8ea]";
  const defRounded = " rounded-[1.25rem]";
  const globalPadding = " py-[20vh]";
  return (
    <nav className=" nav-bar absolute w-full p-5 md:p-8 h-fit  z-[9999999]">
      <div className=" relative container mx-auto flex items-center justify-between backdrop-blur-sm  w-[100%] border-[2px] shadow-[0px_-8px_52px_0px_#00000024] border-opacity-60 p-5 rounded-[1rem] h-full">
        <div className=" flex items-center gap-2">
          <Link to="/" className=" flex items-center gap-4">
            {/* <Image
              className=" "
              src="https://res.cloudinary.com/base-data/image/upload/v1691748184/portfolio%20images/designbox/white_s5ot3b.png"
              width={30}
              alt=""
            /> */}
            <h1 className=" text-[1.4rem] text-[#201e1e] md:text-[2rem]">
              THE BOX
            </h1>
          </Link>
        </div>
        <div className=" flex gap-2 md:gap-4">
          <BtnDef
            linkTo="https://bit.ly/resume-kelvin"
            target
            className=" text-white bg-blue-800"
            customIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="#000000"
                viewBox="0 0 256 256"
              >
                <path d="M128,136v64a8,8,0,0,1-16,0V155.32L45.66,221.66a8,8,0,0,1-11.32-11.32L100.68,144H56a8,8,0,0,1,0-16h64A8,8,0,0,1,128,136ZM208,32H80A16,16,0,0,0,64,48V96a8,8,0,0,0,16,0V48H208V176H160a8,8,0,0,0,0,16h48a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Z"></path>
              </svg>
            }
          >
            Resume
          </BtnDef>
        </div>
        {/* <div className=" flex items-center justify-center ">
          <BtnDef linkTo="https://bit.ly/resume-kelvin" target>
            View Resume
          </BtnDef>
        </div> */}
      </div>
      {/* <NavDisplay isOpen={isOpen} setIsOpen={setIsOpen} /> */}
    </nav>
  );
};
