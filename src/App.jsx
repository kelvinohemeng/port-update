import { useEffect, useState } from "react";
import { CloudinaryContext } from "cloudinary-react";
import cloudinaryConfig from "./components/cloudinaryConfig";
import LocomotiveScroll from "locomotive-scroll";
import { Navbar } from "./components/navbar";
import { IconContext } from "@phosphor-icons/react";
import AnimatedRoute from "./components/AnimatedRoute";
import Preloader from "./components/Preloader";
import BasicNav from "./components/BasicNav";
import { MainNav } from "./components/MainNav";
import gsap from "gsap";
// import { useNavigate } from "react-router-dom";

function App() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // const navigate = useNavigate();
  const dataFetch = () => {
    fetch("https://kelvinohemeng.github.io/api-endpoint/projects.json")
      .then((data) => data.json())
      .then((data) => {
        setProjects(data.projects);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(true);
      });
  };
  useEffect(() => {
    dataFetch();
    const intervalId = setInterval(dataFetch(), [1000]);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
    document.addEventListener("mouseover", function (e) {});
    document.addEventListener("mousemove", function (e) {
      let circle = document.getElementById("circle");
      const width = circle.offsetWidth;
      const height = circle.offsetHeight;

      const isCardLink =
        e.target.className && typeof e.target.className === "string"
          ? e.target.className.includes("card-link")
          : false;

      if (
        e.target.tagName === "A" ||
        e.target.tagName === "BUTTON" ||
        e.target.parentNode.tagName === "BUTTON" ||
        e.target.tagName === "IMG" ||
        isCardLink
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }

      gsap.to(circle, {
        top: `${e.pageY - width / 2}px`,
        left: `${e.pageX - height / 2}px`,
      });
      // requestAnimationFrame(() => {
      //   setTimeout(() => {
      //     circle.style.left = `${e.pageX - width / 2}px`;
      //     circle.style.top = `${e.pageY - height / 2}px`;
      //   });
      // });
    });
  }, []);
  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <IconContext.Provider
          value={{
            color: "#B5E65E",
            size: 32,
            weight: "medium",
          }}
        >
          {/* <Navbar /> */}
          <main className="max-w-screen h-full overflow-y-hidden px-4">
            <div
              id="circle"
              className={`circle ${
                isHovered ? "w-[80px]" : "w-[30px]"
              } aspect-square rounded-full hidden md:block bg-white mix-blend-difference`}
            />

            <div className=" relative mt-[10rem]">
              <MainNav />
              <AnimatedRoute projects={projects} />
            </div>
          </main>
        </IconContext.Provider>
      )}
    </>
  );
}

export default App;
