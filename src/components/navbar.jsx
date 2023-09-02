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

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > lastScrollY) {
        setHideNav(true);
      } else {
        setHideNav(false);
      }

      setLastScrollY(scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  const navClasses = `navigation ${hideNav ? `hide-nav` : ""}`;
  return (
    <nav className=" nav-bar fixed h-full bg-black ">
      <div ref={ref} className={navClasses}>
        <div className=" relative flex items-center  w-full h-ful">
          <div className=" relative container mx-auto  p-5 flex items-center gap-2 justify-between bg-white bg-opacity-10">
            <div className=" flex items-center gap-2">
              <Link to="/">
                <Image
                  className=" "
                  src="https://res.cloudinary.com/base-data/image/upload/v1691748184/portfolio%20images/designbox/white_s5ot3b.png"
                  width={30}
                  alt=""
                />
              </Link>
              <p className=" hidden md:block text-bold text-1xl font-bold">
                DesignBox/Kelvin
              </p>
            </div>
            <div className="">
              <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
            <div className="hidden md:block">
              <a href="#">Download resume</a>
            </div>
          </div>
        </div>
      </div>
      <NavDisplay isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  );
};
