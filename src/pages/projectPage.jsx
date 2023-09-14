"use client";
import { useEffect } from "react";
import { Image } from "cloudinary-react";
import { Link } from "react-router-dom";
import { Tween, SplitWords, Reveal } from "react-gsap";
import { BtnDef, BtnDefNativeNoLink } from "../components/BtnDef";
import { motion } from "framer-motion";
import transition from "../components/transition";

const ProjectPage = ({ projects, footer }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className=" container mx-auto px-4 pb-[20vh] pt-[20vh] w-full  "
      >
        <div className="  flex flex-col items-end pb-10">
          <div className="overflow-hidden py-3">
            <motion.h1
              initial={{ y: 300 }}
              animate={{ y: 0 }}
              transition={{ duration: 1 }}
              className="heading-tags text-[18vw] md:text-[14vw] text-white"
            >
              My works
            </motion.h1>
          </div>
          <BtnDefNativeNoLink pointDown>scroll down</BtnDefNativeNoLink>
        </div>
        <div className=" flex flex-col justify-center w-full gap-20">
          {projects.map((item, index) => (
            <div className="images-box overflow-hidden   ">
              <Link
                to={`/projects/${item.title}`}
                className=" relative box w-full h-fit flex flex-col md:flex-row items-start justify-center  md:justify-stretch md:items-end   overflow-hidden"
              >
                <div className=" flex-1 w-full overflow-hidden">
                  <Image
                    className="  aspect-square object-center"
                    publicId={item.imageUrl}
                    quality={50}
                    alt=""
                  />
                </div>
                <div className=" flex-1 flex flex-col p-10">
                  <Reveal
                    trigger={
                      <div className="  flex flex-col md:block items-start justify-end md:justify-between h-full  space-y-2" />
                    }
                  >
                    <Tween
                      from={{ y: "200px" }}
                      stagger={0.1}
                      ease="circIn"
                      wrapper={<div className=" overflow-hidden" />}
                    >
                      <SplitWords
                        wrapper={
                          <h2
                            className="tag title text-6xl text-center text-white  "
                            style={{ display: "inline-block" }}
                          />
                        }
                      >
                        {item.title}
                      </SplitWords>
                    </Tween>
                    <div className="wid-tags">
                      {item.category.map((cat, index) => (
                        <span key={index}>{cat}</span>
                      ))}
                    </div>
                    <Tween
                      from={{ y: "200px" }}
                      stagger={0.1}
                      ease="circIn"
                      wrapper={<div />}
                    >
                      <BtnDef showIcon linkTo={`/projects/${item.title}`}>
                        see case stury
                      </BtnDef>
                    </Tween>
                  </Reveal>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className=" py-20 flex justify-center">
          <BtnDefNativeNoLink>More coming soon</BtnDefNativeNoLink>
        </div>
      </motion.div>
      {footer}
    </>
  );
};

export default transition(ProjectPage);
