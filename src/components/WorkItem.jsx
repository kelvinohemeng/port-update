import { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { BtnDef } from "./BtnDef";
import { Link } from "react-router-dom";
import gsap from "gsap";
// import "./WorkItem.css"; // Create this CSS file for styling

const WorkItem = ({ select, ref, index }) => {
  const [topValue, setTopValue] = useState("");

  return (
    <div
      className={` 2xl:min-w-[300px] md:h-[35rem] flex gap-5 relative group`}
    >
      <Link
        to={select.live}
        target="_blank"
        className="  flex flex-row flex-wrap md:flex-col justify-between p-5 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-[1rem] items-start gap-8"
      >
        <div>
          {select.logo ? (
            <img src={select.logo} alt="logo-image" className=" w-[60px]" />
          ) : (
            ""
          )}
          <div className="space-y-4">
            <h3 className={`text-gray-800 leading-[3rem] font-bold`}>
              {select.title}
            </h3>
            <p className=" text-gray-500 flex flex-wrap gap-2">
              {select.category.split("|").map((cat, index) => (
                <span
                  key={index}
                  className=" px-2 text-[1rem] border-2 border-gray-500 rounded-full"
                >
                  {cat}
                </span>
              ))}
            </p>
          </div>
        </div>
        <div className="space-y-8">
          <p className=" max-w-lg text-gray-500">{select.description}</p>
          <div className="flex gap-4 flex-col">
            {/* <BtnDef
                  className="bg-black text-black"
                  // linkTo={select.live}
                  onClick={() =>
                    (window.location.href = `/projects/${select.title}`)
                  }
                >
                  Case Study
                </BtnDef> */}
            {/* <BtnDef
              className="bg-black w-full text-white"
              linkTo={select.live}
              // customIcon={
              //   <svg
              //     xmlns="http://www.w3.org/2000/svg"
              //     width="32"
              //     height="32"
              //     viewBox="0 0 256 256"
              //     fill="black"
              //   >
              //     <path d="M128,136v64a8,8,0,0,1-16,0V155.32L45.66,221.66a8,8,0,0,1-11.32-11.32L100.68,144H56a8,8,0,0,1,0-16h64A8,8,0,0,1,128,136ZM208,32H80A16,16,0,0,0,64,48V96a8,8,0,0,0,16,0V48H208V176H160a8,8,0,0,0,0,16h48a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Z"></path>
              //   </svg>
              // }
            >
              Live project
            </BtnDef> */}
          </div>
        </div>
      </Link>

      {/* <div
        style={{
          background: `url("${select.imageUrl}")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className={`absolute -right-[15rem] h-[300px] w-full rounded-[1rem]  pointer-events-none`}
      ></div> */}
    </div>
  );
};

export default WorkItem;
