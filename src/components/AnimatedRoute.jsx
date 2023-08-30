import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import { Footer } from "./Footer";
import ProjectDetails from "../pages/projectDetails";
import ProjectPage from "../pages/projectPage";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { CloudinaryContext } from "cloudinary-react";
import cloudinaryConfig from "./cloudinaryConfig";
import NavDisplay from "./NavDisplay";

function AnimatedRoute({ projectData, selectedProjects }) {
  const location = useLocation();
  return (
    <CloudinaryContext cloudName={cloudinaryConfig.cloudName}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            exact
            path="/"
            element={<Home selected={selectedProjects} footer={<Footer />} />}
          />
          <Route path="/about" element={<About footer={<Footer />} />} />
          <Route
            path="/projects"
            element={<ProjectPage projects={projectData} footer={<Footer />} />}
          />
          <Route
            path="/projects/:projectId"
            element={
              <ProjectDetails
                projects={projectData}
                selected={selectedProjects}
                footer={<Footer />}
              />
            }
          />
        </Routes>
      </AnimatePresence>
    </CloudinaryContext>
  );
}

export default AnimatedRoute;
