import { useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap/all";
import { Link } from "react-router-dom";

const transition = (OgComponent) => {
  // useEffect(() => {
  //   gsap.from(".logo", {
  //     y: 100,
  //     ease: "back.out",
  //     scrollTrigger: {
  //       trigger: chars,
  //       markers: true,
  //       start: "center center",
  //       end: "bottom top",
  //       toggleActions: "restart none none none",
  //     },
  //   });
  // }, []);
  return (props) => (
    <>
      <OgComponent {...props} />
      <nav className=" py-8 px-4 md:px-8 2xl:px-[8rem] absolute">
        <motion.div
          className="slidein2 bg-primary"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], delay: 2 }}
          key="slidein2"
        />
        <Link to={"/"}>
          <motion.div
            initial={{
              width: 150,
              top: "50%",
              left: "50%",
            }}
            animate={{ width: 100, top: "5%", left: "8%" }}
            exit={{
              width: 150,
              top: "50%",
              left: "50%",
            }}
            transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], delay: 1.8 }}
            className="fixed z-[9999999] mix-blend-difference -translate-x-1/2 -translate-y-1/2 mx-8 sm:mx-4 block md:hidden"
            key="animateItemMobile"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 309.48 58.22"
              // width="500"
              fill="white"
            >
              <defs>
                <style>{`.cls-1{fill:#fff;}.cls-2{fill:#fff;}`}</style>
              </defs>
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <polygon
                    className="cls-1"
                    points="24.95 57.58 0 57.58 19.58 42.13 25.11 37.76 72.94 0 72.94 19.69 44.52 42.13 24.95 57.58"
                  />
                  <path
                    className="cls-2"
                    d="M72.94,42.13V57.58H25L44.56,42.13Z"
                  />
                  <path d="M139.22,32.76H93.41c1.28,9.91,9.27,16.51,20.46,16.51,6.6,0,12.14-2.23,16.3-6.81l5.64,6.6c-5.11,6-12.89,9.16-22.26,9.16-18.22,0-30.36-12-30.36-28.87S95.22.59,111.52.59s27.92,11.72,27.92,29.08C139.44,30.52,139.33,31.8,139.22,32.76ZM93.41,25.41h36.23c-1.07-9.48-8.21-16.19-18.12-16.19S94.48,15.82,93.41,25.41Z" />
                  <path d="M148.5.59h10.22v57H148.5Z" />
                  <path d="M226.41,1.12,201.69,57.58H191.25L166.54,1.12h10.65L196.58,46.4,216.4,1.12Z" />
                  <rect x="236.04" y="1.12" width="10.23" height="56.46" />
                  <path d="M309.48,25.09V57.58H299.25V26.26c0-11.08-5.54-16.51-15.24-16.51-10.86,0-17.89,6.5-17.89,18.75V57.58H255.89V1.12h9.8V9.64c4.16-5.75,11.4-9,20.35-9C299.78.59,309.48,8.47,309.48,25.09Z" />
                </g>
              </g>
            </svg>
          </motion.div>
        </Link>

        <Link to={"/"}>
          {" "}
          <motion.div
            initial={{
              width: 300,
              top: "50%",
              left: "50%",
            }}
            animate={{ width: 100, top: "5%", left: "5%" }}
            exit={{
              width: 300,
              top: "50%",
              left: "50%",
            }}
            transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], delay: 1.8 }}
            className="fixed z-[9999999] mix-blend-difference -translate-x-1/2 -translate-y-1/2 hidden md:block"
            key="animateItem"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 309.48 58.22"
              // width="500"
              fill="white"
            >
              <defs>
                <style>{`.cls-1{fill:#fff;}.cls-2{fill:#fff;}`}</style>
              </defs>
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <polygon
                    className="cls-1"
                    points="24.95 57.58 0 57.58 19.58 42.13 25.11 37.76 72.94 0 72.94 19.69 44.52 42.13 24.95 57.58"
                  />
                  <path
                    className="cls-2"
                    d="M72.94,42.13V57.58H25L44.56,42.13Z"
                  />
                  <path d="M139.22,32.76H93.41c1.28,9.91,9.27,16.51,20.46,16.51,6.6,0,12.14-2.23,16.3-6.81l5.64,6.6c-5.11,6-12.89,9.16-22.26,9.16-18.22,0-30.36-12-30.36-28.87S95.22.59,111.52.59s27.92,11.72,27.92,29.08C139.44,30.52,139.33,31.8,139.22,32.76ZM93.41,25.41h36.23c-1.07-9.48-8.21-16.19-18.12-16.19S94.48,15.82,93.41,25.41Z" />
                  <path d="M148.5.59h10.22v57H148.5Z" />
                  <path d="M226.41,1.12,201.69,57.58H191.25L166.54,1.12h10.65L196.58,46.4,216.4,1.12Z" />
                  <rect x="236.04" y="1.12" width="10.23" height="56.46" />
                  <path d="M309.48,25.09V57.58H299.25V26.26c0-11.08-5.54-16.51-15.24-16.51-10.86,0-17.89,6.5-17.89,18.75V57.58H255.89V1.12h9.8V9.64c4.16-5.75,11.4-9,20.35-9C299.78.59,309.48,8.47,309.48,25.09Z" />
                </g>
              </g>
            </svg>
          </motion.div>
        </Link>
      </nav>
      <motion.div
        className="slidein"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="slidein2 "
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
      ></motion.div>
      <motion.div
        className="slideout"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );
};

export default transition;
