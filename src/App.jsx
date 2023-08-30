import { useEffect, useState } from "react";
import { CloudinaryContext } from "cloudinary-react";
import cloudinaryConfig from "./components/cloudinaryConfig";

import { Navbar } from "./components/navbar";
import { Footer } from "./components/Footer";

import { projectData } from "./projectData";

import ScrollToTop from "./components/ScrollToTop";
import { IconContext } from "@phosphor-icons/react";
import AnimatedRoute from "./components/AnimatedRoute";
import Preloader from "./components/Preloader";

function App() {
  // const [darkMode, setDarkMode] = useState(false);
  // const toggleDarkMode = () => {
  //   setDarkMode(!darkMode);
  // };
  const [projects, setProjects] = useState([]);
  const [selectedProjects, setSelectedProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    window.onload = () => {
      setIsLoading(false);
    };
    fetch("http://localhost:3002/projects")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
        setTimeout(() => {
          setIsLoading(false);
        }, 5000);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    window.onload = null;
  }, []);

  // Simulate loading effect whenever route changes
  // useEffect(() => {
  //   const loadingTimeout = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2000);

  //   return () => clearTimeout(loadingTimeout);
  // }, []);
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
          <CloudinaryContext cloudName={cloudinaryConfig.cloudName}>
            {/* <ScrollToTop /> */}
            <Navbar />
            <main className="  w-full   bg-white">
              <AnimatedRoute
                projectData={projects}
                selectedProjects={selectedProjects}
              />
            </main>
          </CloudinaryContext>
        </IconContext.Provider>
      )}
    </>
  );
}

export default App;
