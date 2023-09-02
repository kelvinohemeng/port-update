import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BtnDef } from "./BtnDef";
// import { GsapScrollZoom } from "./GsapScroll";
import { ArrowElbowDownRight } from "@phosphor-icons/react";
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // gsap

    const element = ref.current;
    const containerElement = containerRef.current;
    const timeline = gsap.timeline({
      duration: 2,
      scrollTrigger: {
        trigger: element,
        ease: "expo.out",
        // pin: containerElement,
        scrub: 2,
        offset: "50%",
        // markers: true,
        onEnter: () => timeline.play(),
        onLeaveBack: () => timeline.reverse(),
        onUpdate: (self) => {
          if (self.isDragging) {
            timeline.time(self.scrollPos / self.getVelocity());
          }
        },
        // scrub: true,
        // toggleActions: "play none none reset",
      },
    });
    timeline.add(
      gsap.from(element, {
        y: "-800px",
        scale: 0.5,
      })
    );
    timeline.add(
      gsap.to(element, {
        y: "0px",
        scale: 1.1,
      })
    );

    // timeline.restart();
    // ScrollTrigger.update();
    // ScrollTrigger.refresh();

    // return () => {
    //   // Clean up ScrollTrigger instances
    //   ScrollTrigger.getAll().forEach((instance) => instance.kill());
    // };
  }, []);
  return (
    <footer className="footer  w-screen  h-screen py-[5vh] flex items-center overflow-hidden">
      <div
        ref={containerRef}
        className="container  w-[95%] md:w-[80%]  h-[80%] mx-auto px-8  md:px-0  flex justify-center items-center  "
      >
        <div
          ref={ref}
          className="fot-fot w-full px-4 h-full flex flex-col p-8 justify-between items-center "
        >
          <div className=" flex flex-col md:flex-row items-center gap-8 md:justify-between w-full">
            <div className="">
              <p className="text-sm md:text-1xl text-center md:text-left ">
                Designer and Developer
              </p>
              <p className="text-sm md:text-1xl text-center md:text-left ">
                Portfolio 2022-2023
              </p>
            </div>
            <p className=" hidden md:block">Designbox</p>
            <div>
              <p className="text-sm md:text-1xl text-center md:text-right ">
                Available for freelance works
              </p>
              <p className="text-sm md:text-1xl text-center md:text-right ">
                Designed and developed by me
              </p>
            </div>
          </div>
          <div className=" space-y-10 flex flex-col  items-center">
            <h1 className="text">
              Convinced?
              <span className="hov-span">
                <a href="mailto:kelvinohemeng59@gmail.com" target="_blank">
                  LET'S CONNECT
                </a>
              </span>
            </h1>
            <div className=" footer-cta hidden md:flex flex-col items-center">
              <p>Drop me an email</p>
              <Link
                to="mailto:kelvinohemeng59@gmail.com"
                className="  flex gap-3  items-center transition"
              >
                <ArrowElbowDownRight width={15} weight="fill" fill="black" />
                kelvinohemeng59@gmail.com
              </Link>
            </div>
            <div className=" footer-cta flex md:hidden flex-col items-center">
              <Link
                to="mailto:kelvinohemeng59@gmail.com"
                className="  flex gap-3 items-center hover:opacity-50 transition"
              >
                <ArrowElbowDownRight width={15} weight="fill" fill="black" />
                Email me
              </Link>
            </div>
            <div className="text-center">
              <ul className=" flex flex-wrap justify-center gap-5">
                <li>
                  <BtnDef
                    target
                    linkTo="https://github.com/kelvinohemeng"
                    showIcon
                  >
                    Github
                  </BtnDef>
                </li>
                <li>
                  <BtnDef
                    target
                    linkTo="https://www.tiktok.com/@kelvinsdesignbox"
                    showIcon
                  >
                    ticktok
                  </BtnDef>
                </li>
                {/* <li>
                            <Link href="">Youtube</Link>
                          </li> */}
                <li>
                  <BtnDef
                    target
                    linkTo="https://www.linkedin.com/in/kelvinohemeng/"
                    showIcon
                  >
                    LinkedIn
                  </BtnDef>
                </li>
                <li>
                  <BtnDef
                    target
                    linkTo="https://twitter.com/K_DesignBox"
                    showIcon
                  >
                    twitter
                  </BtnDef>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full flex justify-center ">
            <p className=" text-sm md:text-1xl text-center  opacity-70 ">
              <a href="#top">Back to top</a> <br />© 2023 All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
