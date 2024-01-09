import React, { lazy } from "react";
// const Three = lazy(() => import("../pages/three"));
// const HomeNew = lazy(() => import("../pages/HomeNew"));
// import HomeV2 from "../pages/HomeV2";

const HomeV2 = lazy(() => import("../pages/HomeV2"));
const About = lazy(() => import("../pages/About"));
const ProjectPage = lazy(() => import("../pages/projectPage"));
const ProjectDetailsNew = lazy(() => import("../pages/projectDetailsNew"));
const FooterNew = lazy(() => import("./FooterNew"));

import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { CloudinaryContext } from "cloudinary-react";
import cloudinaryConfig from "./cloudinaryConfig";
import { ErrorPage } from "../pages/ErrorPage";
import { GsapBtn, NewTest, SideBarNavComponent } from "../components/Test";
import BasicNav from "./BasicNav";
// import ProjectPage from "../pages/projectPage";

function AnimatedRoute({ projects }) {
  const location = useLocation();
  return (
    <CloudinaryContext cloudName={cloudinaryConfig.cloudName}>
      <AnimatePresence mode="wait" initial="false">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={<HomeV2 selected={projects} footer={<FooterNew />} />}
          />

          <Route path="/about" element={<About footer={<FooterNew />} />} />
          <Route
            path="/projects"
            element={<ProjectPage projects={projects} footer={<FooterNew />} />}
          />
          <Route
            path="/projects/:projectId"
            element={
              <ProjectDetailsNew
                navbar={<BasicNav />}
                projects={projects}
                footer={<FooterNew />}
              />
            }
          />
          <Route path="/gsapbtn" element={<GsapBtn />} />
          <Route path="/test" element={<NewTest />} />
          <Route path="/nav test" element={<SideBarNavComponent />} />
          {/* <Route path="*" element={<ErrorPage />} /> */}
        </Routes>
      </AnimatePresence>
    </CloudinaryContext>
  );
}
export default AnimatedRoute;
