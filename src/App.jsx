import { useEffect, useState } from "react";
import { CloudinaryContext } from "cloudinary-react";
import cloudinaryConfig from "./components/cloudinaryConfig";

import { Navbar } from "./components/navbar";
import { IconContext } from "@phosphor-icons/react";
import AnimatedRoute from "./components/AnimatedRoute";
import Preloader from "./components/Preloader";

function App() {
  const [projects, setProjects] = useState([]);
  const [selectedProjects, setSelectedProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    window.onload = setIsLoading(false);

    fetch("https://kelvinohemeng.github.io/api-endpoint/projectData.json")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data.projects);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
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
            mirrored: false,
          }}
        >
          <CloudinaryContext
            cloudName={cloudinaryConfig.cloudName}
            quality="auto:good"
          >
            <Navbar />
            <main className="w-full bg-white overscroll-x-contain">
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
