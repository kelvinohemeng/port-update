import { useEffect, useState, useRef } from "react";
import { Image } from "cloudinary-react";
import { Link } from "react-router-dom";
import { BtnDef, BtnDefNativeNoLink } from "../components/BtnDef";
import { ArrowElbowDownRight } from "@phosphor-icons/react";
import transition from "../components/transition";
import { motion } from "framer-motion";
import { Reveal, Tween, SplitChars, ScrollTrigger } from "react-gsap";
import VanillaTilt from "vanilla-tilt";
const About = ({ footer }) => {
  const [position, setPosition] = useState({ x: -5 });
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const imgRef = useRef(null);
  useEffect(() => {
    const handleMouseMove = (event) => {
      // vanilla tilt code
      VanillaTilt.init(ref1.current, {
        max: 20,
        speed: 200,
        transition: true,
        easing: "cubic-bezier(.03,.98,.52,.99)",
        perspective: 1000,
      });
      VanillaTilt.init(ref2.current, {
        max: 20,
        speed: 200,
        transition: true,
        easing: "cubic-bezier(.03,.98,.52,.99)",
        perspective: 1000,
      });
      VanillaTilt.init(ref3.current, {
        max: 20,
        speed: 200,
        transition: true,
        easing: "cubic-bezier(.03,.98,.52,.99)",
        perspective: 1000,
      });
      VanillaTilt.init(ref4.current, {
        max: 20,
        speed: 200,
        transition: true,
        easing: "cubic-bezier(.03,.98,.52,.99)",
        perspective: 1000,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  useEffect(() => {
    const handleMouseMove = (event) => {
      const slideImage = imgRef.current.childNodes;

      const x = (event.clientX * 50) / window.innerHeight + "px";

      slideImage.forEach((slide) => {
        slide.style.left = x;
      });
      slideImage.forEach((slide) => {
        slide.style.transform = `translate(${-x},)`;
      });
      slideImage[1].style.transform = `translate(${-x * 5},)`;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  useEffect(() => {
    const registerVideo = (bound, video) => {
      bound = document.querySelector(bound);
      video = document.querySelector(video);
      const scrollVideo = () => {
        if (video.duration) {
          const distanceFromTop =
            window.scrollY + bound.getBoundingClientRect().top;
          const rawPercentScrolled =
            (window.scrollY - distanceFromTop) /
            (bound.scrollHeight - window.innerHeight);
          const percentScrolled = Math.min(Math.max(rawPercentScrolled, 0), 1);

          video.currentTime = video.duration * percentScrolled;
        }
        requestAnimationFrame(scrollVideo);
      };
      requestAnimationFrame(scrollVideo);
    };

    registerVideo("#bound-three", "#bound-three video");
  });
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className=" text-bg-black pt-[30vh] container mx-auto px-5"
      >
        <div className=" flex flex-col w-full items-end space-y-10">
          <div className=" flex flex-col   justify-between w-full ">
            <h2 className="heading-tags flex flex-col  ">
              <div className=" overflow-hidden py-0">
                <motion.h1
                  initial={{ y: 300 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1 }}
                  className="heading-tags text-[18vw] md:text-[14vw]"
                >
                  Kelvin
                </motion.h1>
              </div>
              <span className=" text-[20px] abt-tag">Developer/Designer</span>
            </h2>
            <div className="">
              <BtnDefNativeNoLink target linkTo="#exp" pointDown>
                keep scrolling
              </BtnDefNativeNoLink>
            </div>
          </div>
          <div className=" flex flex-col w-full space-y-5">
            <div className=" flex justify-end relative">
              <div className=" images-box p-3 relative md:max-w-[30%] h-full overflow-hidden">
                <Image
                  className=" w-full  aspect-[1.5/2]  object-cover "
                  publicId="/portfolio%20images/mew_d1jf8j.jpg"
                  quality="20"
                />
                <ScrollTrigger
                  start="center center"
                  end="bottom center"
                  // markers
                  scrub={1.5}
                >
                  <Tween to={{ y: -800 }}>
                    <div className=" absolute inset-0 bg-[#1a1b1b]"></div>
                  </Tween>
                </ScrollTrigger>
              </div>
            </div>
            <p className=" max-w-2xl opacity-80 text-2xl">
              <b className=" text-[#bfea88]">Meet kelvin</b> <br />
              <br />
              Hey there! I'm Kelvin Ohemeng, and I'm passionate about bringing
              ideas to life through beautiful design and seamless web
              development. 🎨💻 <br /> <br />
              With a background in graphic design and a degree in my pocket, I'm
              now delving even deeper into this creative universe with ongoing
              studies. 🖌️✨ <br /> <br />
              For over three years, I've been a self-taught frontend developer,
              constantly exploring the ever-evolving world of web technologies.
              💡🚀 <br /> <br />I thrive right at the intersection of design and
              code, where I transform concepts into digital experiences that
              truly stand out. 🌐✨ <br /> <br />
              Join me on this exciting journey as I pour creativity and
              innovation into every project. Let's collaborate and craft
              something extraordinary together! 🤝✨
            </p>
            <BtnDef target linkTo="https://bit.ly/resume-kelvin" showIcon>
              Download Resume
            </BtnDef>
          </div>
        </div>
        <section className=" py-[30vh] hidden md:block">
          <div id="bound-three" className="scroll-bound">
            <div className="content relative container mx-auto px-4 flex-col md:flex-row md:justify-between md:flex-end">
              <div className="vid flex justify-start">
                <video
                  className=" object-cover w-screen h-full grayscale-[1]"
                  muted
                  preload="auto"
                >
                  <source src="https://res.cloudinary.com/base-data/video/upload/c_scale,q_81,w_376/v1693279416/portfolio%20images/mew_iwch8c.ogv" />
                  <source
                    src="https://res.cloudinary.com/base-data/video/upload/c_scale,q_81,w_376/v1693279416/portfolio%20images/mew_iwch8c.mp4"
                    media="(max-width: 767px)"
                  />
                  <source src="https://res.cloudinary.com/base-data/video/upload/c_scale,q_81,w_376/v1693279416/portfolio%20images/mew_iwch8c.webm" />
                </video>
              </div>

              <div className="flex-1 space-y-5 flex flex-col justify-start h-full py-8">
                <h2 className="heading-tags abt-tag ">
                  My love for basketball
                </h2>
                <p className=" max-w-2xl opacity-80 text-2xl">
                  Once, I dreamed of NBA stardom, pouring my heart and soul into
                  training. 🏀⭐
                  <br />
                  <br /> But life had other plans, and I embarked on a different
                  path. 🛤️💼
                </p>
              </div>
              <div ref={imgRef} className=" absolute overflow-hidden inset-0">
                <img
                  className="abss-ab pointer-events-none"
                  src="https://res.cloudinary.com/base-data/image/upload/v1693278556/portfolio%20images/impactyouthsports_3___B0oKsIhJFfN____wjpsgd.jpg"
                  alt=""
                />
                <img
                  className="abss-ab pointer-events-none"
                  src="https://res.cloudinary.com/base-data/image/upload/v1693279469/portfolio%20images/IMG-20220402-WA0045_inetcf.jpg"
                  alt=""
                />
                <img
                  className="abss-ab pointer-events-none"
                  src="https://res.cloudinary.com/base-data/image/upload/c_crop,h_1688,w_2188,x_1101,y_619/v1693280163/portfolio%20images/0722191735j_2_rwulee.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
        <section className=" py-[30vh] block md:hidden">
          <div className="content relative container mx-auto px-4 flex-col md:flex-row md:justify-between md:flex-end">
            <div className="vid flex justify-start">
              <video
                className=" object-cover w-screen h-full grayscale-[1]"
                muted
                preload="auto"
                autoPlay
                loop
              >
                <source src="https://res.cloudinary.com/base-data/video/upload/c_scale,q_81,w_376/v1693279416/portfolio%20images/mew_iwch8c.mp4" />
                <source src="https://res.cloudinary.com/base-data/video/upload/c_scale,q_81,w_376/v1693279416/portfolio%20images/mew_iwch8c.webm" />
              </video>
            </div>

            <div className="flex-1 space-y-5 flex flex-col justify-start h-full py-8">
              <h2 className="heading-tags abt-tag text-[2.5rem] md:text-[3.5rem]">
                My love for basketball
              </h2>
              <p className=" max-w-2xl opacity-80 text-2xl">
                Once, I dreamed of NBA stardom, pouring my heart and soul into
                training. 🏀⭐
                <br />
                <br /> But life had other plans, and I embarked on a different
                path. 🛤️💼
              </p>
            </div>
            <div ref={imgRef} className=" absolute inset-0">
              <img
                className="abss-ab"
                src="https://res.cloudinary.com/base-data/image/upload/v1693278556/portfolio%20images/impactyouthsports_3___B0oKsIhJFfN____wjpsgd.jpg"
                alt=""
              />
              <img
                className="abss-ab"
                src="https://res.cloudinary.com/base-data/image/upload/v1693279469/portfolio%20images/IMG-20220402-WA0045_inetcf.jpg"
                alt=""
              />
              <img
                className="abss-ab"
                src="https://res.cloudinary.com/base-data/image/upload/c_crop,h_1688,w_2188,x_1101,y_619/v1693280163/portfolio%20images/0722191735j_2_rwulee.jpg"
                alt=""
              />
            </div>
          </div>
        </section>
        <section className=" final-abt md:h-screen flex flex-col md:flex-row justify-between">
          <div className="">
            <Image
              className=" md:max-w-[400px] object-cover grayscale images-box p-4"
              publicId="/images/about-img.png"
              quality="20"
            />
          </div>
          <div className=" flex flex-col justify-end items-center">
            <h2 className="heading-tags text-[2.5rem] md:max-w-[50%] leading-[100%]">
              The urge to be a part of something great
            </h2>
          </div>
        </section>
        <section className=" flex justify-center py-10">
          <BtnDefNativeNoLink target linkTo="#exp" pointDown>
            Reach out
          </BtnDefNativeNoLink>
        </section>
      </motion.div>
      {footer}
    </>
  );
};

export default transition(About);
