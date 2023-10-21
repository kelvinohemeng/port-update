import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
// import "./Preloader.css"; // Import your CSS file for styling

const Fallback = () => {
  return (
    <div className="preloader flex-col h-screen flex items-center justify-center">
      <img className="  max-w-[80px]" src="/assets/logo.png" alt="" />
    </div>
  );
};

export default Fallback;
