import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
// import "./Preloader.css"; // Import your CSS file for styling

const Fallback = () => {
  const [progress, setProgress] = useState(0);

  // useEffect(() => {
  //   const loadingBar = document.querySelector(".logo");
  //   gsap.set(loadingBar, { scale: 0.5 });
  //   const tl = gsap.timeline({
  //     repeat: -1,
  //   });
  //   tl.from(loadingBar, {
  //     x: "-250%",
  //     duration: 1,
  //     rotate: -360,
  //   })
  //     .to(loadingBar, {
  //       x: "0%",
  //       rotate: 0,
  //       duration: 1,
  //     })
  //     .to(loadingBar, {
  //       rotate: -50,
  //       duration: 1,
  //     })
  //     .to(loadingBar, {
  //       x: "250%",
  //       rotate: 250,
  //       duration: 0.5,
  //     });

  //   setTimeout(() => {
  //     return () => {
  //       tl.kill();
  //     };
  //   }, 2000);
  // }, []);

  return (
    <div className="preloader flex flex-col">
      <img className="  max-w-[100px]" src="/assets/logo.png" alt="" />
    </div>
  );
};

export default Fallback;
