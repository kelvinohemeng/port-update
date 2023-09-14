import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const GsapScrollZoom = ({ children }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  useEffect(() => {
    // gsap

    const element = ref.current;
    const containerElement = containerRef.current;
    // const timeline = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: containerElement,
    //     pin: true,
    //     scrub: 2,
    //     start: "bottom center",
    //     end: "30% center",
    //     ease: "expo.out",
    //     markers: true,
    //     toggleActions: "play none none reset",
    //   },
    // });

    gsap.from(element, {
      scale: 2,
      scrollTrigger: {
        trigger: element,
        pin: containerElement,
        scrub: 2,
        start: "top top",
        end: "center end",
        ease: "expo.out",
        markers: true,
      },
    });
    // timeline
    //   .from(element, {
    //     // y: "800px",
    //     // scale: 1,
    //     scale: 1,
    //     duration: 3,
    //     opacity: 0,
    //   })
    //   .to(element, {
    //     scale: 2,
    //     duration: 1.5,
    //     opacity: 1,
    //   });
  }, []);
  return (
    <div className="w-full h-full  overflow-hidden">
      <div ref={containerRef} className="">
        <div
          ref={ref}
          className="w-full h-full flex flex-col p-2 justify-center items-center "
        >
          {children}
        </div>
      </div>
    </div>
  );
};
export const GsapScrollX = ({ children }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // gsap
    const element = ref.current;
    const containerElement = containerRef.current;
    gsap.from(element, {
      scrollTrigger: {
        trigger: containerElement,
        pin: true,
        scrub: 1,
        // markers: true,
        // start: "top center",
      },
      opacity: 0,
      xPercent: 50,
      duration: 1,
    });
  }, []);
  return (
    <div
      ref={containerRef}
      className=" h-screen pointer-events-none overflow-hidden my-32 md:my-0"
    >
      <div className=" h-full flex items-center justify-center">
        <h1
          ref={ref}
          className=" text-5xl md:text-8xl text-center tracking-tighter font-medium"
        >
          {children}
        </h1>
      </div>
    </div>
  );
};

export const GsapScrollXPin = ({ children }) => {
  const ref = useRef(null);

  const containerRef = useRef(null);

  useEffect(() => {
    // gsap
    const element = ref.current;
    const containerElement = containerRef.current;
    let x = containerElement.scrollWidth;
    gsap.to(element, {
      x: () => {
        return (
          -(
            containerElement.scrollWidth - document.documentElement.clientWidth
          ) + "px"
        );
      },
      // ease: "power1",
      // duration: 2,
      scrollTrigger: {
        trigger: element,
        start: () => "center center",
        end: () => {
          return "+=" + x;
        },
        scrub: 0.6,
        pin: containerRef.current,
        anticipatePin: 1,
        // markers: true,
      },
    });
  }, []);
  return (
    <div
      ref={containerRef}
      className=" w-full h-screen relative overflow-hidden "
    >
      <div
        ref={ref}
        className="container-scroll w-full  h-full flex items-center "
      >
        <div className="  h-full flex items-center space-x-10 gap-8 md:gap-10  px-24">
          {children}
        </div>
      </div>
    </div>
  );
};
