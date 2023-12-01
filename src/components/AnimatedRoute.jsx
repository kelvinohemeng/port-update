import React, { lazy } from "react";
// import Home from "../pages/Home";
// import About from "../pages/About";
const Three = lazy(() => import("../pages/three"));
const HomeNew = lazy(() => import("../pages/HomeNew"));
const About = lazy(() => import("../pages/About"));
const ProjectDetailsNew = lazy(() => import("../pages/projectDetailsNew"));
const FooterNew = lazy(() => import("./FooterNew"));
const Footer = lazy(() => import("./Footer"));
// import { Footer } from "./Footer";
// import ProjectPage from "../pages/projectPage";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { CloudinaryContext } from "cloudinary-react";
import cloudinaryConfig from "./cloudinaryConfig";
import NavDisplay from "./NavDisplay";
import { ErrorPage } from "../pages/ErrorPage";
import { NewTest, SideBarNavComponent } from "../components/Test";

function AnimatedRoute({ projectData, selectedProjects }) {
  const location = useLocation();
  return (
    <CloudinaryContext cloudName={cloudinaryConfig.cloudName}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={<HomeNew selected={projectData} footer={<FooterNew />} />}
          />
          <Route
            path="/projects/:projectId"
            element={
              <ProjectDetailsNew
                projects={projectData}
                footer={<FooterNew />}
              />
            }
          />
          {/* <Route path="/three" element={<Three />} /> */}
          <Route path="/test" element={<NewTest />} />
          <Route path="/nav test" element={<SideBarNavComponent />} />
          {/* <Route path="/about" element={<About footer={<Footer />} />} /> */}
          {/* <Route
            path="/projects"
            element={<ProjectPage projects={projectData} footer={<Footer />} />}
          /> */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </AnimatePresence>
    </CloudinaryContext>
  );
}
export default AnimatedRoute;
