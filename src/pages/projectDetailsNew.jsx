import transition from "../components/transition";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Image } from "cloudinary-react";
import { BtnDef, BtnDefFollow, BtnDefNative } from "../components/BtnDef";
import { motion } from "framer-motion";
import { SplitTextAnim } from "../components/SplitTextAnim";

const ProjectDetailsNew = ({ navbar, projects, footer }) => {
  const navigate = useNavigate();
  const params = useParams();
  const projectId = params.projectId;

  const project = projects.find((project) => project.title === projectId);

  const currentIndex = projects.findIndex(
    (project) => project.title === projectId
  );

  if (!project) {
    // useEffect(() => {
    //   navigate("/404");
    // }, []);\
    <p>page not found</p>;
  } else {
    return (
      <>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={` container mx-auto px-4 md:px-2`}
        >
          <motion.div
            initial={{ y: "0%" }}
            animate={{ y: "100%" }}
            transition={{ delay: 2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className={` fixed inset-0 bg-[#ffffff] pr-10 z-[99999999] hidden md:flex items-start justify-start`}
          >
            <div className=" overflow-hidden w-full h-full grid place-items-center py-3 ">
              <motion.img
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  delay: 1,
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                src={project.logo}
                alt=""
                className="w-[50px]"
              />
            </div>
          </motion.div>

          <div
            className={` h-full flex flex-col items-center md:items-start relative `}
          >
            <div className=" my-8">
              <BtnDefFollow linkTo="/projects" paddings>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="white"
                  viewBox="0 0 256 256"
                >
                  <path d="M220,128a4,4,0,0,1-4,4H49.66l65.17,65.17a4,4,0,0,1-5.66,5.66l-72-72a4,4,0,0,1,0-5.66l72-72a4,4,0,0,1,5.66,5.66L49.66,124H216A4,4,0,0,1,220,128Z"></path>
                </svg>
                Back to projects
              </BtnDefFollow>
            </div>
            <header className=" w-full h-full">
              <div className="flex flex-col md:flex-row gap-8 ">
                <Link to={project.live && project.live}>
                  <div className=" md:w-[25rem] h-full bg-background rounded-lg flex flex-col">
                    <div className="bg-red-6 h-full  p-5 flex flex-col justify-between items-start gap-4">
                      <div className="flex gap-2 flex-wrap">
                        {project.category.split("|").map((cat, index) => (
                          <span
                            className=" px-2 py-0 text-[12px] border-white text-white border-[.1px] rounded-full"
                            key={index}
                          >
                            {cat}
                          </span>
                        ))}
                      </div>
                      <div className=" space-y-5">
                        <img src={project.logo} alt="" className="w-[50px]" />

                        <h3
                          className={
                            " text-[30px] leading-[130%] p-font text-white"
                          }
                        >
                          {project.title}
                        </h3>
                        <div>
                          {project.description && (
                            <span className="text-[18px] text-white text-opacity-70 ">
                              {" "}
                              {project.description
                                .split("\n\n")
                                .map((descri, i) => (
                                  <span>
                                    {descri} <br /> <br />
                                  </span>
                                ))}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className=" border-base-100 border-y border-opacity-40 px-5 py-5 flex justify-between items-center text-white">
                      <div className="flex items-center">
                        <span>
                          {project.live ? "Live project" : "Coming Soon"}
                        </span>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="white"
                        viewBox="0 0 256 256"
                      >
                        <path d="M220,104a4,4,0,0,1-8,0V49.66l-73.16,73.17a4,4,0,0,1-5.66-5.66L206.34,44H152a4,4,0,0,1,0-8h64a4,4,0,0,1,4,4Zm-36,28a4,4,0,0,0-4,4v72a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V80a4,4,0,0,1,4-4h72a4,4,0,0,0,0-8H48A12,12,0,0,0,36,80V208a12,12,0,0,0,12,12H176a12,12,0,0,0,12-12V136A4,4,0,0,0,184,132Z"></path>
                      </svg>
                    </div>
                  </div>
                </Link>

                {/* <button className=" bg-text-black w-max h-fit px-8 py-4 text-xl text-white rounded-full relative after:absolute after:inset-0 after:bg-light-purple after:z-[-20] after:rounded-full hover:after:translate-x-2 hover:after:translate-y-2 transition-all duration-150 after:transition">
                    <a href={project.live}> {project.status}</a>
                  </button> */}
                <div className=" rounded-lg overflow-hidden w-full aspect-video">
                  {project.video ? (
                    <video
                      className={` w-full h-full object-cover object-center`}
                      autoPlay
                      muted
                      loop
                    >
                      <source src={project.video} />
                    </video>
                  ) : (
                    <img
                      src={project.imageUrl}
                      alt=""
                      className=" w-full h-full object-center object-cover"
                    />
                  )}
                </div>
              </div>
            </header>
          </div>

          <div className={` my-[5vh]`}>
            <div className={`py-5`}>
              <h5>
                <span className=" text-[18px]">- more imagery</span>
              </h5>
            </div>
            <section className=" w-full grid md:grid-cols-3 gap-4 ">
              {project.images
                ? project.images.map((image, index) => (
                    <div key={index}>
                      <Image
                        key={index}
                        className="w-full h-full aspect-square object-cover rounded-lg"
                        publicId={image}
                      />
                    </div>
                  ))
                : ""}
            </section>
          </div>
        </motion.div>
      </>
    );
  }
};

export default ProjectDetailsNew;
