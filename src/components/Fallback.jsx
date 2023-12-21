import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
// import "./Preloader.css"; // Import your CSS file for styling

const Fallback = () => {
  return (
    <div className="preloader flex-col h-screen flex items-center justify-center">
      <div className=" flex gap-2">
        <img src="/assets/k.svg" alt="" />
        <img src="/assets/e.svg" alt="" />
        <img src="/assets/l.svg" alt="" />
        <img src="/assets/v.svg" alt="" />
        <img src="/assets/i.svg" alt="" />
        <img src="/assets/n.svg" alt="" />
      </div>
    </div>
  );
};

export default Fallback;
