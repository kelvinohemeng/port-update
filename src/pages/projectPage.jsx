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
          <Tween
            from={{ y: 200, delay: 2.5 }}
            wrapper={<div className=" overflow-hidden py-3" />}
          >
            <h1 className="heading-tags text-[18vw] md:text-[14vw]">
              My works
            </h1>
          </Tween>
          <BtnDefNativeNoLink pointDown>scroll down</BtnDefNativeNoLink>
        </div>
        <div className=" flex flex-col justify-center w-full gap-20">
          {projects.map((item, index) => (
            <Link
              key={index}
              to={"/projects/" + item.title}
              className=" relative box w-full h-[80vh] flex flex-col md:flex-row items-center  md:justify-stretch md:items-end  aspect-square overflow-hidden"
            >
              <Image
                className=" flex-1 w-full h-full aspect-square"
                publicId={item.imageUrl}
                quality={50}
                style={{ objectFit: "cover" }}
                alt=""
              />
              <div className="flex-1 flex flex-col p-5 md:p-10">
                <Reveal
                  repeat
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
                        <div
                          className="tag text-6xl pb-2 md:py-5 text-bg-black "
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
                  <div className=" pt-2">
                    <BtnDef showIcon linkTo={`/projects/${item.title}`}>
                      see case study
                    </BtnDef>
                  </div>
                </Reveal>
              </div>
              {/* <h2 className=" max-w-2xl">{item.stack}</h2> */}
            </Link>
          ))}
        </div>
      </motion.div>
      {footer}
    </>
  );
};

export default transition(ProjectPage);
