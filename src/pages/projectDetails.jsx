import transition from "../components/transition";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Image } from "cloudinary-react";
import { BtnDef, BtnDefNative } from "../components/BtnDef";
import { motion } from "framer-motion";
import { Tween, Reveal, ScrollTrigger } from "react-gsap";

const ProjectDetails = ({ projects, selected, footer }) => {
  const params = useParams();
  const navigate = useNavigate();
  const projectId = params.projectId;

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
          className="  min-h-[300vh]"
        >
          <div className=" pt-[20vh] ">
            <ScrollTrigger start="-200px center" end="800px center" scrub={1.5}>
              <div className="relative overflow-hidden flex items-center h-[50vh]">
                <Tween
                  to={{
                    x: "-80%",
                  }}
                  wrapper={
                    <div
                      className="absolute overflow-hidden px-2 text-[15vw] md:text-[10vw]"
                      style={{
                        width: "max-content",
                        display: "flex",
                        alignItems: "center",
                        gap: "20px",
                        fontWeight: "600",
                      }}
                    />
                  }
                >
                  <h1 className="text-center">{project.title}</h1>
                  <h1 className="text-center">{project.title}</h1>
                  <h1 className="text-center">{project.title}</h1>
                  <h1 className="text-center">{project.title}</h1>
                  <h1 className="text-center">{project.title}</h1>
                  <h1 className="text-center">{project.title}</h1>
                </Tween>
              </div>
            </ScrollTrigger>
            <div className=" container mx-auto px-4 gap-10 intro global-padding flex flex-col md:flex-row justify-between items-start">
              <div className=" w-full md:max-w-[50%] images-box p-8">
                <div className="wid-tags pb-8">
                  {project.category.map((cat, index) => (
                    <span key={index}>{cat}</span>
                  ))}
                </div>

                <div>
                  <div className="hr-line"></div>
                  <div className=" py-5">
                    <p className=" text-[1.6rem]">Project Date</p>
                    <p>{project.date}</p>
                  </div>
                  <div className="hr-line"></div>
                  {project.client ? (
                    <>
                      <div className=" py-5">
                        <p className=" text-[1.6rem]">Client</p>
                        <p>{project.client}</p>
                      </div>
                      <div className="hr-line"></div>
                    </>
                  ) : (
                    ""
                  )}
                  <div className=" py-5">
                    <p className=" text-[1.6rem]">Location</p>
                    <p>{project.location}</p>
                  </div>
                  <div className="hr-line"></div>
                </div>
                <div className="py-8">
                  <BtnDefNative target showIcon linkTo={project.live}>
                    {project.status == "online"
                      ? "explore live site"
                      : "not online yet"}
                  </BtnDefNative>
                </div>
              </div>
              <div className="md:max-w-[50%] ">
                <p className="heading-tags-alt max-w-[600px]">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
          <div className="container mx-auto px-4 pb-[20vh]">
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
            <div className=" flex gap-5 justify-between">
              {currentIndex > 0 && (
                <BtnDef onClick={goToPreviousProject}>Prvevious project</BtnDef>
              )}
              {currentIndex < projects.length - 1 && (
                <BtnDef onClick={goToNextProject}>Next project</BtnDef>
              )}
            </div>
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
