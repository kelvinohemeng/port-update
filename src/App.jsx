import { useEffect, useState } from "react";
import { CloudinaryContext } from "cloudinary-react";
import cloudinaryConfig from "./components/cloudinaryConfig";
import LocomotiveScroll from "locomotive-scroll";
import { Navbar } from "./components/navbar";
import { IconContext } from "@phosphor-icons/react";
import AnimatedRoute from "./components/AnimatedRoute";
import Preloader from "./components/Preloader";
import { useNavigate } from "react-router-dom";
import { Test } from "./components/Test";

function App() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const dataFetch = () => {
    fetch("https://kelvinohemeng.github.io/api-endpoint/newProjectData.json")
      .then((response) => response.json())
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
  }, []);
  return (
    // <>
    //   <Test />
    // </>
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <IconContext.Provider
          value={{
            color: "#B5E65E",
            size: 32,
            weight: "medium",
            mirrored: false,
          }}
        >
          <Navbar />
          <main className="w-full bg-[#eeeeee] ">
            <AnimatedRoute projectData={projects} selectedProjects={projects} />
          </main>
        </IconContext.Provider>
      )}
    </>
  );
}

export default App;
