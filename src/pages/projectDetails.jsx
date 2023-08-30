import transition from "../components/transition";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { selectedProjectData } from "../projectData.js";
import { Image } from "cloudinary-react";
import { BtnDef, BtnDefNative } from "../components/BtnDef";
import { motion } from "framer-motion";
import { GsapScrollZoom } from "../components/GsapScroll";

const ProjectDetails = ({ projects, footer }) => {
  const params = useParams();
  const navigate = useNavigate();
  const projectId = params.projectId;
  const selected = selectedProjectData;

  const project = projects.find((project) => project.title === projectId);
  const select = selected.find((selects) => selects.title === projectId);

  const currentIndex = projects.findIndex(
    (project) => project.title === projectId
  );

  const goToNextProject = () => {
    const nextIndex = (currentIndex + 1) % projects.length;
    const nextProject = projects[nextIndex];
    // Replace the URL to navigate to the next project
    window.location.href = `/projects/${nextProject.title}`;
    // navigate(`/projects/${nextProject.title}`);
  };

  const goToPreviousProject = () => {
    const previousIndex =
      (currentIndex - 1 + projects.length) % projects.length;
    const previousProject = projects[previousIndex];
    // Replace the URL to navigate to the previous project
    window.location.href = `/projects/${previousProject.title}`;
    // navigate(`/projects/${previousProject.title}`);
  };

  if (!project && !select) {
    return <div>Project not found.</div>;
  } else if (project) {
    return (
      <>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className=" container mx-auto px-4 pb-[20vh] pt-[20vh] w-full  min-h-[300vh]"
        >
          <div className="global-padding pt-[20vh] h-full">
            <GsapScrollZoom>
              <Image
                className=" w-full aspect-video object-cover images-box p-4"
                publicId={project.imageUrl}
              />
            </GsapScrollZoom>
          </div>
          <div className=" intro global-padding flex flex-col items-end">
            <div className=" md:w-[50%] images-box p-8">
              <div className="wid-tags">
                {project.category.map((cat, index) => (
                  <span key={index}>{cat}</span>
                ))}
              </div>
              <div className="py-8">
                <h1 className=" heading-tags ">{project.title}</h1>
                <p className="heading-tags-alt opacity-60">
                  {project.description}
                </p>
              </div>
              <div>
                <div className="hr-line"></div>
                <div className=" py-5">
                  <p className=" text-[1.6rem]">Project Date</p>
                  <p>{project.date}</p>
                </div>
                <div className="hr-line"></div>
                <div className=" py-5">
                  <p className=" text-[1.6rem]">Client</p>
                  <p>{project.client}</p>
                </div>
                <div className="hr-line"></div>
                <div className=" py-5">
                  <p className=" text-[1.6rem]">Location</p>
                  <p>{project.location}</p>
                </div>
                <div className="hr-line"></div>
              </div>
              <div className="py-8">
                <BtnDefNative target showIcon linkTo={project.live}>
                  explore live site
                </BtnDefNative>
              </div>
            </div>
          </div>
          <section className="global-padding w-full flex flex-col justify-center md:justify-between items-start gap-5">
            {project.images.map((image, index) => (
              <div className=" p-4 flex items-center justify-center w-full h-full images-box ">
                <Image
                  key={index}
                  className=" md:max-w-[580px] h-auto"
                  publicId={image}
                />
              </div>
            ))}
          </section>
          <div className=" flex gap-5">
            {currentIndex > 0 && (
              <BtnDef onClick={goToPreviousProject}>Prvevious</BtnDef>
            )}
            {currentIndex < projects.length - 1 && (
              <BtnDef onClick={goToNextProject}>next</BtnDef>
            )}
          </div>
        </motion.div>
        {footer}
      </>
    );
  } else if (select) {
    return (
      <>
        <div className="container mx-auto px-4 min-h-[300vh]">
          {select.title}
        </div>
        {footer}
      </>
    );
  }
};

export default transition(ProjectDetails);
