import React from "react";
import { motion } from "framer-motion";

const Preloader = () => {
  const loaderVariants = {
    animation: {
      y: [0, -10, 0],
      transition: {
        y: {
          repeat: Infinity,
          duration: 0.5,
        },
      },
    },
  };

  return (
    <div className="preloader">
      <motion.div
        className="loader"
        variants={loaderVariants}
        animate="animation"
      />
    </div>
  );
};

export default Preloader;
