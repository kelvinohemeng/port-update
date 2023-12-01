import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
// import "./Preloader.css"; // Import your CSS file for styling

const Preloader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const loadingBar = document.querySelector(".loading-bar");

    const tl = gsap.timeline({
      repeat: 0, // No need for repetition
      onComplete: () => {
        setProgress(100); // Ensure the progress reaches 100 at the end
      },
    });

    // Animate the loading bar's width from 0% to 100% over 5 seconds
    tl.to(loadingBar, { width: "100%", duration: 5, ease: "linear" });

    // Create a custom onUpdate function to incrementally update progress
    function updateProgress() {
      setProgress(
        Math.round(
          (loadingBar.offsetWidth / loadingBar.parentElement.offsetWidth) * 100
        )
      );
    }

    // Update the progress value incrementally from 0 to 100 in smaller steps
    gsap.to(loadingBar, {
      width: "100%", // End width
      duration: 2, // Same duration as the loading bar animation
      ease: "linear",
      onUpdate: updateProgress, // Use the custom updateProgress function
    });

    setTimeout(() => {
      return () => {
        tl.kill();
      };
    }, 2000);
  }, []);

  return (
    <div className="preloader flex flex-col relative h-screen">
      <div className="loading-bar absolute bg-red-black h-[3px]"></div>
      <h1 className="progress text-[16vw]">{progress}%</h1>
      <img
        src="/assets/load.png"
        className=" max-w-sm md:max-w-md absolute bottom-[-10px] right-0"
        alt=""
      />
    </div>
  );
};

export default Preloader;
