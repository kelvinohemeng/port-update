import { useState, useEffect, useRef } from "react";
// import Image from "next/image";
import { RevealNative } from "../components/Reveal.jsx";
import { Image, Video } from "cloudinary-react";
import {
  Tween,
  SplitWords,
  SplitChars,
  Reveal,
  ScrollTrigger,
} from "react-gsap";
import { motion } from "framer-motion";
import transition from "../components/transition.jsx";
import VanillaTilt from "vanilla-tilt";
import { selectedProjectData } from "../projectData.js";
import { gsap } from "gsap";
import {
  GsapScrollX,
  GsapScrollXPin,
  GsapScrollZoom,
} from "../components/GsapScroll";
// import { gsap } from "gsap";

import { Link } from "react-router-dom";
import {
  PlayCircle,
  ArrowElbowDownRight,
  ArrowRight,
  Cube,
} from "@phosphor-icons/react";
import { BtnDefNative, BtnDef, BtnDefNativeNoLink } from "../components/BtnDef";

const Home = ({ footer }) => {
  const selected = selectedProjectData;
  const [position, setPosition] = useState({ x: 0 });
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const scrubUp = document.querySelectorAll(".ddp-text");
    scrubUp.forEach((srubb) => {
      gsap.to(srubb, {
        // opacity: 0,
        y: -500,
        scrollTrigger: {
          trigger: srubb,
          start: "1000px center",
          end: "2000px center",
          // markers: true,
          scrub: 6,
        },
      });
    });
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
    const handleMouseMove = (event) => {
      const slideImage = imgRef.current;

      const x = (event.clientX * 500) / window.innerHeight + "px";

      slideImage.style.left = x;
      slideImage.style.transform = `translate(${x},)`;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  });
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
    registerVideo("#bound-four", "#bound-four video");
  });
  return (
    <>
      {/* {navDisplay ? navDisplay : ""} */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className=""
      >
        <section className=" w-full h-full home-bg">
          <div className=" container mx-auto px-4 py-10 pt-40 w-full flex flex-col md:justify-end ">
            <Reveal repeat trigger={<div className=" text-center" />}>
              <Tween
                from={{ y: "200px", opacity: "0" }}
                stagger={0.1}
                wrapper={<div className="overflow-hidden px-2" />}
              >
                <SplitChars
                  wrapper={
                    <h2
                      className=" text-[18vw] md:text-[16vw] tracking-[-0.4rem] md:tracking-[-0.2rem]"
                      style={{
                        fontFamily: '"Bebas Neue", sans-serif',
                        display: "inline-block",
                        fontWeight: "600",
                      }}
                    />
                  }
                >
                  Designbox
                </SplitChars>
              </Tween>
            </Reveal>
          </div>
          <GsapScrollZoom>
            <div className="flex flex-col md:flex-row justify-center h-screen  md:h-full  bg-gray-300">
              <div className="left-abt flex flex-col gap-8 justify-between flex-1 p-4">
                <Reveal repeat>
                  <Tween
                    from={{ y: "50px", opacity: "0" }}
                    stagger={0.2}
                    duration={3.5}
                    ease="back.out(1.7)"
                    wrapper={
                      <div
                        style={{
                          maxWidth: "80%",
                        }}
                      />
                    }
                  >
                    <SplitWords
                      delimiter=" "
                      wrapper={
                        <div
                          style={{
                            display: "inline-flex",
                            overflow: "hidden",
                            padding: "5px",
                          }}
                          className="ab-tag"
                        />
                      }
                    >
                      Hi, I am kelvin, I build brands and website with the
                      vision of the future
                    </SplitWords>
                  </Tween>
                </Reveal>
                <div className=" flex flex-col md:flex-row gap-5">
                  <BtnDef linkTo="/about" showIcon>
                    Read more
                  </BtnDef>
                  <BtnDef linkTo="/about" showIcon>
                    Download resume
                  </BtnDef>
                </div>
              </div>
              <div className="prof-img flex-1 md:h-[80vh] "></div>
            </div>
          </GsapScrollZoom>
        </section>
        <section className=" global-padding">
          <ScrollTrigger start="-200px center" end="800px center" scrub={1.5}>
            <Tween
              to={{
                x: "-80%",
              }}
              wrapper={
                <div
                  className="overflow-hidden px-2 text-[18vw] md:text-[16vw]"
                  style={{
                    fontFamily: '"Bebas Neue", sans-serif',
                    width: "max-content",
                    display: "flex",
                    gap: "20px",
                    fontWeight: "600",
                  }}
                />
              }
            >
              <h1 className="text-center">Deigner Developer</h1>
              <h1 className="text-center">Deigner Developer</h1>
              <h1 className="text-center">Deigner Developer</h1>
              <h1 className="text-center">Deigner Developer</h1>
            </Tween>
          </ScrollTrigger>
        </section>

        <section className=" global-padding">
          <div id="bound-three" className="scroll-bound">
            <div className="content container mx-auto px-4 flex-col md:flex-row md:justify-between md:flex-end">
              <div className="vid flex justify-start">
                <video
                  className=" object-cover w-screen h-full grayscale-[1]"
                  muted
                  preload
                >
                  <source src="https://res.cloudinary.com/base-data/video/upload/v1693269920/portfolio%20images/projects/0001-0130_alpcuo.ogv" />
                </video>
              </div>
              <div className=" ddp">
                <div className="ddp-text  h-full flex items-end justify-end">
                  <h1 className="heading-tags-alt relative text-left md:max-w-[70%] cursor-pointer">
                    A box where i have carefully horned my talent and skills,
                    coming to form the ultinmate box - designbox
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* services section */}
        <section className=" global-padding">
          <div className="container flex flex-col md:flex-row mx-auto px-4 gap-20 ">
            <div className="flex-1 flex flex-col justify-between md:items-end md:order-last relative">
              <div className="relative h-full">
                <h1 className="heading-tags pb-10 md:text-right sticky top-[50px] ">
                  What I do
                </h1>
              </div>
              <BtnDefNative linkTo="#projects" pointDown>
                Featured Works
              </BtnDefNative>
            </div>
            <div className=" flex-1 flex h-full flex-col md:flex-row flex-wrap w-full gap-6 items-start ">
              <div ref={ref1} className="service1 basis-2/5 space-y-5 p-5">
                <div>
                  <Cube fill="white" weight="light" size={25} />
                  <h2 className="">Frontend Development</h2>
                </div>
                <p className=" text-sm">
                  Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Doloribus, excepturi.
                </p>
                <div>
                  <div className="wid-tags">
                    <span>tailwind</span>
                    <span>Scss</span>
                    <span>HTML</span>
                    <span>CSS 3</span>
                    <span>React</span>
                    <span>GSAP</span>
                    <span>JavaScript</span>
                    <span>threejs</span>
                  </div>
                </div>
              </div>
              <div ref={ref2} className="service1 basis-2/5 space-y-5 p-5">
                <div>
                  <Cube fill="white" weight="light" size={25} />
                  <h2 className=" ">Website with CMS</h2>
                </div>
                <p className=" text-sm">
                  Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Doloribus, excepturi.
                </p>
                <div>
                  <div className="wid-tags">
                    <span>Frammer</span>
                    <span>Wordpress</span>
                    <span>Webflow</span>
                    <span>Figma</span>
                  </div>
                </div>
              </div>
              <div ref={ref3} className="service1 basis-2/5 space-y-5 p-5">
                <div>
                  <Cube fill="white" weight="light" size={25} />
                  <h2 className=" ">Graphic Design</h2>
                </div>
                <p className=" text-sm">
                  Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Doloribus, excepturi.
                </p>
                <div>
                  <div className="wid-tags">
                    <span>Branding</span>
                    <span>Logo Design</span>
                    <span>Page Design</span>
                    <span>Web Design</span>
                    <span>Consulting</span>
                  </div>
                </div>
              </div>
              <div ref={ref4} className="service1 basis-2/5 space-y-5 p-5">
                <div>
                  <Cube fill="white" weight="light" size={25} />
                  <h2 className=" ">Motion Design</h2>
                </div>
                <p className=" text-sm">
                  Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Doloribus, excepturi.
                </p>
                <div>
                  <div className="wid-tags">
                    <span>VFX</span>
                    <span>3D animation</span>
                    <span>Blender</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* project section */}
        <div className=" h-full global-padding" id="projects">
          <GsapScrollXPin>
            {selected.map((item, index) => (
              <div className="images-box p-2">
                <Link
                  key={index}
                  to={`/projects/${item.title}`}
                  className=" relative box w-[80vw] h-[80vh] flex flex-col md:flex-row items-center  md:justify-stretch md:items-end  aspect-square  overflow-hidden"
                >
                  <Image
                    className=" flex-1 w-full h-full aspect-square"
                    publicId={item.imageUrl}
                    quality={50}
                    style={{ objectFit: "cover" }}
                    alt=""
                  />
                  <div className="flex-1 flex flex-col p-10">
                    <Reveal
                      repeat
                      trigger={
                        <div className="  flex flex-col md:block items-start justify-between h-full  space-y-2" />
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
                              className="tag title text-6xl text-center text-bg-black "
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
                  {/* <h2 className=" max-w-2xl">{item.stack}</h2> */}
                </Link>
              </div>
            ))}
          </GsapScrollXPin>
          <div className="container mx-auto px-4 relative flex justify-end h-full">
            <BtnDef linkTo="/projects" showIcon>
              See more projects
            </BtnDef>
          </div>
        </div>

        <section className=" global-padding">
          <div id="bound-four" className="scroll-bound">
            <div className="content container mx-auto px-4 flex-col md:flex-row-reverse md:justify-between md:flex-end">
              <div className="vid flex justify-end ">
                <video className=" object-cover " muted preload>
                  <source src="https://res.cloudinary.com/base-data/video/upload/v1693160126/0827_fhzd3a.mp4" />
                </video>
              </div>
              <div className=" ddp flex flex-col gap-10 items-center  justify-end w-full h-full  ">
                <div className=" ">
                  <img
                    ref={imgRef}
                    src="https://i.pinimg.com/originals/e6/85/eb/e685ebb3543ecabc29c1126e54f15898.jpg"
                    style={{ left: `${position.x}px` }}
                  />
                  <img
                    ref={imgRef}
                    src="https://i.pinimg.com/originals/e6/85/eb/e685ebb3543ecabc29c1126e54f15898.jpg"
                  />
                  <div className="ddp-text space-y-5">
                    <h1 className=" heading-tags-alt relative text-left   cursor-pointer">
                      A box where i have carefully horned my talent and skills,
                      coming to form the ultinmate box - designbox
                    </h1>
                    <RevealNative className="cursor-pointer">
                      <BtnDefNative linkTo="#archieves" pointDown>
                        Archieves
                      </BtnDefNative>
                    </RevealNative>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div
          className=" container mx-auto px-4  h-[80vh] flex items-center justify-stretch "
          id="archieves"
        >
          <div className="flex flex-col w-full gap-5 " id="archieve">
            <div className=" grid grid-cols-1 h-full ">
              <Link to="https://ramadannigeria2023.mx4.app" target="_blank">
                <div className=" w-full flex justify-between items center px-5 py-3 archieves-box">
                  <h3>Poster Design</h3>
                  <ArrowRight weight="light" size={28} fill="white" />
                  <img
                    src="https://res.cloudinary.com/base-data/image/upload/q_50/v1691740360/images/shoe_iipc7s.webp"
                    alt=""
                  />
                </div>
              </Link>
              <Link to="https://ramadannigeria2023.mx4.app" target="_blank">
                <div className=" w-full flex justify-between items center px-5 py-3 archieves-box">
                  <h3>Meta website</h3>
                  <ArrowRight weight="light" size={28} fill="white" />
                  <img
                    src="https://res.cloudinary.com/base-data/image/upload/q_50/v1691740360/images/shoe_iipc7s.webp"
                    alt=""
                  />
                </div>
              </Link>
              <Link to="https://myfavshoe-2.netlify.app/" target="_blank">
                <div className=" w-full flex justify-between items center px-5 py-3 archieves-box">
                  <h3>ThreeJS Shoe</h3>
                  <ArrowRight weight="light" size={28} fill="white" />
                  <img
                    src="https://res.cloudinary.com/base-data/image/upload/q_50/v1691740360/images/shoe_iipc7s.webp"
                    alt=""
                  />
                </div>
              </Link>
              <Link
                to="https://www.tiktok.com/@kelvinsdesignbox/video/7228723476062850310?is_from_webapp=1&sender_device=pc"
                target="_blank"
              >
                <div className=" w-full flex justify-between items center px-5 py-3 archieves-box">
                  <h3>Apex legends Animation</h3>
                  <ArrowRight weight="light" size={28} fill="white" />
                  <img
                    src="https://res.cloudinary.com/base-data/image/upload/q_50/v1691740360/images/shoe_iipc7s.webp"
                    alt=""
                  />
                </div>
              </Link>
              <Link
                to="https://www.tiktok.com/@kelvinsdesignbox/video/7228587619255422214?is_from_webapp=1&sender_device=pc"
                target="_blank"
              >
                <div className=" w-full flex justify-between items center px-5 py-3 archieves-box">
                  <h3>Doctors Office Animation</h3>
                  <ArrowRight weight="light" size={28} fill="white" />
                  <img
                    src="https://res.cloudinary.com/base-data/image/upload/q_50/v1691740360/images/shoe_iipc7s.webp"
                    alt=""
                  />
                </div>
              </Link>
              <Link
                to="https://www.tiktok.com/@kelvinsdesignbox/video/7228590762923920646?is_from_webapp=1&sender_device=pc"
                target="_blank"
              >
                <div className=" w-full flex justify-between items center px-5 py-3 archieves-box border-b-2">
                  <h3>Room Animation</h3>
                  <ArrowRight weight="light" size={28} fill="white" />
                  <img
                    src="https://res.cloudinary.com/base-data/image/upload/q_50/v1691740360/images/shoe_iipc7s.webp"
                    alt=""
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
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

export default transition(Home);
