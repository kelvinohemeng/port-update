import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
// import "./Preloader.css"; // Import your CSS file for styling

const Fallback = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const loadingBar = document.querySelector(".logo");
    gsap.set(loadingBar, { scale: 0.8 });
    const tl = gsap.timeline({
      repeat: -1,
    });
    tl.from(loadingBar, {
      x: "-200%",
      duration: 1,
      rotate: -250,
    })
      .to(loadingBar, {
        x: "0%",
        duration: 1,
      })
      .to(
        loadingBar,
        {
          scale: 1,
        },
        1
      )
      .to(loadingBar, {
        scale: 15,
        opacity: 0,
      });

    setTimeout(() => {
      return () => {
        tl.kill();
      };
    }, 2000);
  }, []);

  return (
    <div className="preloader flex flex-col">
      <img className="logo absolute " src="/assets/logo.png" alt="" />
    </div>
  );
};

export default Fallback;
