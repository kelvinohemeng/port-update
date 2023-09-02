import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export const PortArc = ({ src, text, linkTo }) => {
  const lastImg = useRef(null);
  useEffect(() => {
    const handleMouseMove = (event) => {
      const slideImage = lastImg.current;

      const x = (event.clientX * 500) / window.innerHeight + "px";

      slideImage.style.left = x;
      slideImage.style.transform = `translate(${x},)`;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <Link to={linkTo} target="_blank">
      <div className="port-archieve z-20 relative py-8 text-center border-t-[0.5px] border-opacity-30 border-b-[0.5px] border-white">
        <h3 className=" heading-tags-alt text-[1.5rem]">{text}</h3>
        <img
          ref={lastImg}
          className=" max-w-[300px] absolute top-[-50%] left-10 -z-10"
          src={src}
          alt=""
        />
      </div>
    </Link>
  );
};
