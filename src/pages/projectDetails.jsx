import transition from "../components/transition";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Image } from "cloudinary-react";
import { BtnDef, BtnDefNative } from "../components/BtnDef";
import { motion } from "framer-motion";
import { Tween, Reveal, ScrollTrigger } from "react-gsap";

const ProjectDetails = ({ projects, selected, footer }) => {
  const params = useParams();
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
          className="  min-h-[100vh]"
        >
          <motion.div
            initial={{ y: "0%" }}
            animate={{ y: "100%" }}
            transition={{ delay: 2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className=" fixed inset-0 bg-[#1a1b1b] pr-10 z-[9999] flex items-start justify-end"
          >
            <div className=" overflow-hidden w-fit h-fit py-3 ">
              <motion.h1
                initial={{ y: "0%" }}
                animate={{ y: "110%" }}
                transition={{
                  delay: 1.5,
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-[15vw] md:text-[10vw]"
              >
                {project.title}
              </motion.h1>
            </div>
          </motion.div>
          <div className=" pt-[20vh] ">
            {project.video ? (
              <div className=" w-screen h-full container mx-auto px-4">
                <video className=" w-full h-fit " autoPlay muted loop>
                  <source src={project.video} />
                </video>
              </div>
            ) : (
              <div className=" w-screen h-full container mx-auto px-4">
                <Image
                  publicId={project.imageUrl}
                  className=" w-full aspect-video object-cover object-top"
                />
              </div>
            )}
            {/* <ScrollTrigger start="-800px center" end="800px center" scrub={1.5}>
              <div className="relative overflow-hidden flex items-center h-[50vh]">
                <Tween
                  to={{
                    x: "-180%",
                  }}
                  wrapper={
                    <div
                      className="absolute overflow-hidden px-2 text-[20vw] md:text-[10vw]"
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
            </ScrollTrigger> */}
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
                    <p className=" text-[1.6rem]">Project Name</p>
                    <p className=" text-[#ffff]">{project.title}</p>
                  </div>
                  <div className="hr-line"></div>
                  <div className=" py-5">
                    <p className=" text-[1.6rem]">Project Date</p>
                    <p className=" text-[#ffff]">{project.date}</p>
                  </div>
                  <div className="hr-line"></div>
                  {project.client ? (
                    <>
                      <div className=" py-5">
                        <p className=" text-[1.6rem]">Client</p>
                        <p className=" text-[#ffff]">{project.client}</p>
                      </div>
                      <div className="hr-line"></div>
                    </>
                  ) : (
                    ""
                  )}
                  <div className=" py-5">
                    <p className=" text-[1.6rem]">Location</p>
                    <p className=" text-[#ffff]">{project.location}</p>
                  </div>
                  <div className="hr-line"></div>
                </div>
                <div className="py-8">
                  <div className=" flex gap-5">
                    <BtnDefNative target showIcon linkTo={project.live}>
                      {project.status == "online"
                        ? "explore live site"
                        : "not online yet"}
                    </BtnDefNative>
                  </div>
                </div>
              </div>
              <div className="md:max-w-[50%] ">
                {project.description ? (
                  <div className="description space-y-5">
                    {project.description
                      .split("\n\n")
                      .map((paragraph, index) => (
                        <p key={index} className=" text-2xl">
                          {paragraph}
                        </p>
                      ))}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          <div className="container mx-auto px-4 pb-[20vh]">
            <section className="global-padding w-full flex flex-col justify-center md:justify-between items-start gap-5">
              {project.images
                ? project.images.map((image, index) => (
                    <>
                      {project.description.split("\n\n")[1] ? (
                        <div className="  flex flex-col items-center justify-center w-full h-fit ">
                          <div className="p-4 images-box w-full flex justify-center">
                            <Image
                              key={index}
                              className=" md:max-w-[600px] h-auto "
                              publicId={image}
                            />
                          </div>
                          {/* {index === 3 && (
                        <p className=" py-10 max-w-[80%] md:max-w-[50%]">
                          {project.description.split("\n\n")[1]}
                        </p>
                      )} */}
                        </div>
                      ) : (
                        <div className="  flex flex-col items-center justify-center w-full h-fit ">
                          <div className="p-4 images-box w-full flex justify-center">
                            <Image
                              key={index}
                              className=" md:max-w-[600px] h-auto "
                              publicId={image}
                            />
                          </div>
                        </div>
                      )}
                    </>
                  ))
                : ""}
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
