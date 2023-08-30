import { useState, useEffect } from "react";
import { motion, useAnimation, stagger } from "framer-motion";

const AnimatedBox = ({ children, isOpen }) => {
  const controls = useAnimation();

  useEffect(() => {
    if (isOpen) {
      controls.start("animate");
    } else {
      controls.start("initial");
    }
  }, [isOpen, controls]);

  return (
    <div className=" overflow-hidden">
      <motion.div
        initial="initial"
        animate={controls}
        variants={{
          initial: { y: 30 },
          animate: { y: 0 },
        }}
        transition={{
          duration: 0.5,
          ease: "circOut",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default AnimatedBox;
