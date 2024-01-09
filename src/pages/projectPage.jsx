"use client";
import { useEffect, useState } from "react";
import { Image } from "cloudinary-react";
import { Link } from "react-router-dom";
import { BtnDef, BtnDefNativeNoLink } from "../components/BtnDef";
import { motion } from "framer-motion";
import transition from "../components/transition";
import { SplitTextAnim, SplitWordAnim } from "../components/SplitTextAnim";
import { gsap } from "gsap/all";
import { Container } from "../components/tailwindLib";
import { AnimatePresence } from "framer-motion";

const ProjectPage = ({ projects, footer }) => {
  const selected = projects;

  const [selectedCategory, setSelectedCategory] = useState(null);

  const higherLevelCategories = {
    Design: [
      "Branding",
      "Web design",
      "Logo design",
      "Mockup",
      "Web design",
      "animation",
    ],
    Websites: [
      "Website",
      "API Development",
      "Real-world",
      "Tailwind CSS",
      "Landingpage",
    ],
    Animation: ["animation"],
  };

  const mapCategoryToHigherLevel = (category) => {
    for (const [higherLevel, specificCategories] of Object.entries(
      higherLevelCategories
    )) {
      if (specificCategories.some((specific) => category.includes(specific))) {
        return higherLevel;
      }
    }
    return category; // If no match is found, use the original category
  };

  const filteredProjects = selectedCategory
    ? selected.filter((project) =>
        mapCategoryToHigherLevel(project.category).includes(selectedCategory)
      )
    : selected;

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
        <div className=" pb-0">
          <section className=" w-full mt-[5rem] h-full py-[3rem] space-y-[4rem] ">
            <div className="  space-y-8 flex flex-col items-start">
              <Container>
                <h1 className="tracking-tighter text-center i-font  text-[60px] md:text-[80px] 2xl:text-[120px] text-background leading-[100%]">
                  All Projects
                </h1>
                <div className="pt-[2rem] flex justify-center">
                  <div className="flex gap-[5px] flex-wrap justify-center max-w-[50%]">
                    <button>
                      <span
                        className={`px-2 py-0 text-[12px] border-background text-background border-[.1px] rounded-full ${
                          selectedCategory === null
                            ? "bg-background text-white"
                            : ""
                        }`}
                        onClick={() => setSelectedCategory(null)}
                      >
                        All
                      </span>
                    </button>

                    {Object.keys(higherLevelCategories).map(
                      (higherLevel, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedCategory(higherLevel)}
                        >
                          <span
                            className={`px-2 py-0 text-[12px] border-background text-background border-[.1px] rounded-full ${
                              selectedCategory === higherLevel
                                ? "bg-background text-white"
                                : ""
                            }`}
                          >
                            {higherLevel}
                          </span>
                        </button>
                      )
                    )}
                  </div>
                </div>
              </Container>
              <div className=" w-full h-[2px] bg-background opacity-80"></div>
            </div>

            <Container>
              {" "}
              <div className=" w-full ">
                <div className=" w-full relative ">
                  <div className="relative  h-full flex flex-wrap justify-center gap-8">
                    {" "}
                    {filteredProjects.map((select, selectIndex) => (
                      <AnimatePresence key={`c_${selectIndex}`}>
                        <motion.div
                          initial={{ opacity: 0, x: -50 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 50 }}
                        >
                          {" "}
                          <Link
                            target={select.images ? "_parent" : "_blank"}
                            to={
                              select.images
                                ? `/projects/${select.title}`
                                : select.live
                            }
                            className="group w-fit relative "
                          >
                            <div className=" max-w-[290px] 2xl:max-w-[350px] h-full min-h-[30rem] bg-background rounded-lg flex flex-col ">
                              <div className="bg-red-6 h-full  p-5 flex flex-col justify-between items-start gap-4">
                                <div className="flex gap-2 flex-wrap">
                                  {select.category
                                    .split("|")
                                    .map((cat, index) => (
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
                                      " text-[24px] leading-[130%] p-font text-white"
                                    }
                                  >
                                    {select.title}
                                  </h3>
                                  <div>
                                    {select.description && (
                                      <span className="text-[18px] text-white text-opacity-70 line-clamp-3">
                                        {" "}
                                        {select.description.split("\n\n")[0]}
                                      </span>
                                    )}
                                  </div>
                                </div>
                              </div>
                              <div className=" border-base-100 border-y border-opacity-40 px-5 py-5 flex justify-between items-center text-white">
                                <div className="flex items-center">
                                  <span>
                                    {select.images
                                      ? "Case Study"
                                      : "Live project"}
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
                            <img
                              src={select.imageUrl}
                              className="hidden md:block absolute z-[999] top-[-15%] right-[-50%] w-[0px] aspect-video object-cover object-center opacity-0 group-hover:opacity-100 group-hover:w-[300px] origin-bottom-right duration-100 rounded-lg"
                              alt=""
                            />
                          </Link>
                        </motion.div>
                      </AnimatePresence>
                    ))}
                  </div>
                </div>
              </div>
            </Container>
          </section>
        </div>
        {footer}
      </motion.div>
    </>
  );
};

export default transition(ProjectPage);
