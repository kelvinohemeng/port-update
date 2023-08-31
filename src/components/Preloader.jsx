import { delay } from "framer-motion";
import React from "react";
import { Tween, SplitChars, Timeline, PlayState } from "react-gsap";

const Preloader = () => {
  return (
    <div className="preloader">
      <div className=" overflow-hidden">
        <Timeline
          repeat
          target={
            <SplitChars
              wrapper={
                <h1
                  className=" text-[18vw] md:text-[16vw] tracking-[0rem] md:tracking-[-0.2rem]"
                  style={{
                    display: "inline-block",
                    fontWeight: "600",
                  }}
                />
              }
            >
              Designbox
            </SplitChars>
          }
        >
          <Tween from={{ y: "500px", opacity: "0" }} />
          <Tween to={{ y: "0", opacity: "1" }} />
          <Tween to={{ y: "-500px", opacity: "0" }} />
        </Timeline>
      </div>
    </div>
  );
};

export default Preloader;
