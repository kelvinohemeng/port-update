import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { BtnDef } from "./BtnDef";
import { Link } from "react-router-dom";
// import "./WorkItem.css"; // Create this CSS file for styling

const WorkItem = ({ select, top, index }) => {
  const [topValue, setTopValue] = useState("");
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (select.id === 1) {
      setTopValue("5vh");
    } else if (select.id === 2) {
      setTopValue("10vh");
    } else if (select.id === 3) {
      setTopValue("15vh");
    } else if (select.id === 4) {
      setTopValue("20vh");
    }
  }, []);

  return (
    <Link to={select.live} key={index} className="">
      <div
        ref={ref}
        style={{ top: `${inView ? topValue : "10vh"}` }}
        className={`w-full h-[90vh] md:h-[70vh] bg-[hsl(0,11%,96%)]  border-blue-600 rounded-[1.5rem] overflow-hidden ${
          inView ? "in-view shadow-[0px_-8px_52px_0px_#00000024]" : ""
        }`}
      >
        <div className=" w-full h-full flex flex-col md:flex-row">
          <div className="flex-1 flex h-full flex-col justify-between gap-8 p-5 md:p-10">
            <div>
              {" "}
              {select.logo ? (
                <img src={select.logo} alt="logo-image" className=" w-[60px]" />
              ) : (
                ""
              )}
              <div className=" ">
                <h3 className={``}>{select.title}</h3>
                <p className=" text-black flex flex-wrap gap-2">
                  {select.category.split("|").map((cat, index) => (
                    <span className=" px-2 text-[1rem] border-2 border-black rounded-full">
                      {cat}
                    </span>
                  ))}
                </p>
              </div>
            </div>
            <div className=" space-y-8">
              {" "}
              <p className=" max-w-lg">{select.description}</p>
              <div className="flex gap-4">
                <BtnDef
                  className="bg-black text-white"
                  linkTo={select.live}
                  //   onClick={() =>
                  //     (window.location.href = `/projects/${select.title}`)
                  //   }
                >
                  Explore Live Project
                </BtnDef>
              </div>
            </div>
          </div>
          <div
            className={`flex-1 w-full h-full overflow-hidden drop-shadow-lg`}
          >
            <img
              className=" h-full w-full  object-cover"
              src={select.imageUrl}
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkItem;
