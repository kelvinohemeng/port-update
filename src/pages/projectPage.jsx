"use client";
import { useEffect, useState } from "react";
import { Image } from "cloudinary-react";
import { Link } from "react-router-dom";
import { BtnDef, BtnDefNativeNoLink } from "../components/BtnDef";
import { motion } from "framer-motion";
import transition from "../components/transition";
import { SplitTextAnim, SplitWordAnim } from "../components/SplitTextAnim";
import { gsap } from "gsap/all";

const ProjectPage = ({ projects, footer }) => {
  const selected = projects;

  useEffect(() => {
    const views = document.querySelectorAll(".review");
    const cats = document.querySelectorAll(".cat");
    cats.forEach((cat) => {
      console.log(cat.children);
      gsap.set(cat.children, {
        y: 50,
        opacity: 0,
      });
      gsap.to(cat.children, {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: cat,
          start: "bottom bottom",
          toggleActions: "restart none none reset",
        },
      });
    });

    // views.forEach((view) => {
    //   gsap.to(view, {
    //     x: "120%",
    //     duration: 2,
    //     ease: "power4.out",
    //     scrollTrigger: {
    //       trigger: view,
    //       start: "20% center",
    //     },
    //   });
    // });
  }, []);

  function isOdd(number) {
    return number % 2 !== 0;
  }
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className=" w-full container mx-auto"
      >
        <div className=" pb-10">
          <section className=" w-full mt-[5rem] md:mt-[10rem] h-full  py-[3rem]  md:py-[5rem] space-y-[4rem] md:space-y-[4rem] ">
            <div className="  space-y-8 flex flex-col items-start">
              <h1 className="tracking-tighter b-font text-[100px] md:text-[100px] 2xl:text-[120px]">
                All Projects
              </h1>
              <div className=" w-full h-[2px] bg-background"></div>
            </div>

            <div className=" w-full ">
              <div className=" w-full relative ">
                <div className="relative  h-full grid grid-cols-fluid gap-[4rem]">
                  {selected.map((select, selectIndex) => (
                    <Link
                      target={select.images ? "_parent" : "_blank"}
                      to={
                        select.images
                          ? `/projects/${select.title}`
                          : select.live
                      }
                      className="group w-fit"
                    >
                      <div className=" md:min-w-[20rem] h-[30rem] bg-bg-black rounded-lg flex flex-col md:hover:shadow-[5px_5px_0px_0px_#e0a22e] transition-all duration-300 ease-out md:hover:translate-x-[-5%] md:hover:translate-y-[-2%]">
                        <div className="bg-red-6 h-full  p-5 flex flex-col justify-between items-start">
                          <div className="flex gap-2 flex-wrap">
                            {select.category.split("|").map((cat, index) => (
                              <span
                                className=" px-2 py-0 text-[12px] border-white text-white border-[.1px] rounded-full"
                                key={index}
                              >
                                {cat}
                              </span>
                            ))}
                          </div>
                          <div className=" space-y-5">
                            <img
                              src={select.logo}
                              alt=""
                              className="w-[50px]"
                            />

                            <h3
                              className={
                                " text-[30px] leading-[130%] p-font text-white"
                              }
                            >
                              {select.title}
                            </h3>
                            {select.description && (
                              <p className="leading-3 text-white opacity-60">
                                <span className="text-[12px]">
                                  {" "}
                                  {select.description.split("\n\n")[0]}
                                </span>
                              </p>
                            )}
                          </div>
                        </div>
                        <div className=" border-base-100 border-y border-opacity-40 px-5 py-5 flex justify-between items-center text-white">
                          <div className="flex items-center">
                            <span>
                              {select.images ? "Case Study" : "Live project"}
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
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
        {footer}
      </motion.div>
    </>
  );
};

export default transition(ProjectPage);
