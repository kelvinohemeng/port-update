import { useEffect, useState, useRef } from "react";
// import { useRouter } from "next/navigation";
import Hamburger from "./hamburger";
import { Image } from "cloudinary-react";
import NavDisplay from "../components/NavDisplay";
import { Link } from "react-router-dom";
// import Image1 from "../assets/mygif.gif";

export const Navbar = ({}) => {
  const [hideNav, setHideNav] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef(null);

  const navClasses = `navigation ${hideNav ? `hide-nav` : ""}`;
  return (
    <nav className=" nav-bar fixed w-full md:p-5 h-fit ">
      <div className=" relative container mx-auto px-4 py-5 flex items-center justify-between  w-full h-full ">
        <div className=" flex items-center gap-2">
          <Link to="/">
            {/* <Image
              className=" "
              src="https://res.cloudinary.com/base-data/image/upload/v1691748184/portfolio%20images/designbox/white_s5ot3b.png"
              width={30}
              alt=""
            /> */}
            <h1 className=" text-3xl  text-bold text-1xl font-bold">Kelvin</h1>
          </Link>
        </div>
        <div className=" flex items-center justify-center ">
          {/* <div className="">
                <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
              </div> */}
          <div className="">
            <a href="https://bit.ly/resume-kelvin" target="_blank">
              <h1 className=" text-3xl">Resume</h1>
            </a>
          </div>
        </div>
      </div>
      {/* <NavDisplay isOpen={isOpen} setIsOpen={setIsOpen} /> */}
    </nav>
  );
};
