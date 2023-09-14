import { useEffect, useState } from "react";
import { CloudinaryContext } from "cloudinary-react";
import cloudinaryConfig from "./components/cloudinaryConfig";
import LocomotiveScroll from "locomotive-scroll";
import { Navbar } from "./components/navbar";
import { IconContext } from "@phosphor-icons/react";
import AnimatedRoute from "./components/AnimatedRoute";
import Preloader from "./components/Preloader";

function App() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const dataFetch = () => {
    fetch("https://kelvinohemeng.github.io/api-endpoint/projectData.json")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data.projects);
        setTimeout(() => {
          setIsLoading(false);
        }, 5000);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setTimeout(() => {
          setIsLoading(false);
        }, 5000);
      });
  };
  useEffect(() => {
    dataFetch();

    const intervalId = setInterval(dataFetch, 1 * 60 * 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
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
            mirrored: false,
          }}
        >
          <CloudinaryContext
            cloudName={cloudinaryConfig.cloudName}
            quality="auto:good"
          >
            <Navbar />
            <main className="w-full bg-white ">
              <AnimatedRoute
                projectData={projects}
                selectedProjects={projects}
              />
            </main>
          </CloudinaryContext>
        </IconContext.Provider>
      )}
    </>
  );
}

export default App;
