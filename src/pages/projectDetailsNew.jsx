import transition from "../components/transition";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Image } from "cloudinary-react";
import { BtnDef, BtnDefNative } from "../components/BtnDef";
import { motion } from "framer-motion";
import { Tween, Reveal, ScrollTrigger } from "react-gsap";

const ProjectDetailsNew = ({ projects, footer }) => {
  const navigate = useNavigate();
  const params = useParams();
  const projectId = params.projectId;

  const project = projects.find((project) => project.title === projectId);

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

  const containerClass = "container mx-auto md:px-8 px-4";
  const mediumText = "text-[1.843rem]";
  const medText = "text-[1.873rem]";
  const bigText = "text-[2.5rem] md:text-[5.13975rem] leading-[95%]";
  const bg = "bg-[#e8e8ea]";
  const defRounded = " rounded-[1.25rem]";
  const globalPadding = " py-[20vh]";

  if (!project) {
    useEffect(() => {
      navigate("/404");
    }, []);
  } else {
    return (
      <>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={` grid grid-cols-1 md:grid-cols-2 ${containerClass}`}
        >
          {/* <motion.div
            initial={{ y: "0%" }}
            animate={{ y: "100%" }}
            transition={{ delay: 2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className={` fixed inset-0 bg-[#1a1b1b] pr-10 z-[99999999] flex items-start justify-start`}
          >
            <div className=" overflow-hidden w-full h-fit py-3 ">
              <div className={`${containerClass} w-full relative`}>
                <motion.h1
                  initial={{ y: "0%" }}
                  animate={{ y: "110%" }}
                  transition={{
                    delay: 1.5,
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`${bigText} md:text-[5rem] text-white`}
                >
                  {project.title}
                </motion.h1>
              </div>
            </div>
          </motion.div> */}

          <div
            className={`${containerClass} h-full flex items-center md:items-start relative mt-[20vh]`}
          >
            <div className=" text-white h-fit md:sticky top-[10rem] space-y-5 ">
              <div className="flex  items-center justify-between">
                <motion.h1
                  initial={{ y: "150%%" }}
                  animate={{ y: "0%" }}
                  transition={{
                    delay: 1.5,
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={bigText}
                >
                  {project.title}
                </motion.h1>
                {/* <p className=" hidden md:block">keep scrolling</p> */}
              </div>

              <div className=" w-full flex flex-col justify-between  self-center">
                <div className=" space-y-5">
                  <p className="text-[hsl(234,59%,60%)] flex flex-col md:flex-row gap-3 md:gap-6">
                    {project.category.split("|").map((cat, index) => (
                      <span>{cat}</span>
                    ))}
                  </p>
                  {project.description ? (
                    <div className="description space-y-5 max-w-[60%] md:max-w-lg opacity-60">
                      {project.description
                        .split("\n\n")
                        .map((paragraph, index) => (
                          <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="py-8">
                  <div className=" flex gap-5">
                    <BtnDef target linkTo={project.live}>
                      {project.status == "online"
                        ? "live website"
                        : "not online yet"}
                    </BtnDef>
                    {/* <BtnDef linkTo={project.code}>GitHub</BtnDef> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`${containerClass} space-y-5 md:space-y-10 mt-[20vh]`}
          >
            {project.video ? (
              <div className=" w-full ">
                <video className={`w-full  ${defRounded}`} autoPlay muted loop>
                  <source src={project.video} />
                </video>
              </div>
            ) : (
              ""
            )}
            <section className="global-padding w-full flex flex-col justify-center md:justify-between items-start gap-5 md:gap-10">
              {project.images
                ? project.images.map((image, index) => (
                    <div
                      key={index}
                      className={`  flex flex-col items-center justify-center w-full h-fit bg-[#f9f9f9] bg-opacity-10 border-2 border-white border-opacity-40 ${defRounded} `}
                    >
                      <div className="p-4 images-box w-full flex justify-center">
                        <Image
                          key={index}
                          className=" md:max-w-[100%] h-auto "
                          publicId={image}
                        />
                      </div>
                    </div>
                  ))
                : ""}
            </section>
            <div className=" flex  my-[10vh]">
              {currentIndex > 0 && (
                <BtnDef onClick={goToPreviousProject}>Prvevious project</BtnDef>
              )}
              {currentIndex < projects.length - 1 && (
                <div className=" ml-auto">
                  <BtnDef onClick={goToNextProject}>Next project</BtnDef>
                </div>
              )}
            </div>
          </div>
        </motion.div>
        {footer}
      </>
    );
  }
};

export default transition(ProjectDetailsNew);
