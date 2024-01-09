import { useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap/all";
import { Link } from "react-router-dom";

const transition = (OgComponent) => {
  return (props) => (
    <>
      <OgComponent {...props} />
      <nav className=" py-8 px-4 md:px-8 2xl:px-[8rem] absolute">
        <motion.div
          className="slidein2 bg-primary"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          key="slidein2"
        />
      </nav>

      <motion.div
        className="slidein"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="slidein2 "
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      ></motion.div>
      <motion.div
        className="slideout"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );
};

export default transition;
