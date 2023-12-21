import { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import { RevealNative } from "../components/Reveal.jsx";
import { Image, Video } from "cloudinary-react";

import { Gradient } from "../components/Gradient.js";
import { motion } from "framer-motion";
import transition from "../components/transition.jsx";
import VanillaTilt from "vanilla-tilt";
import { gsap } from "gsap";
// import {
//   PlayCircle,
//   ArrowElbowDownRight,
//   ArrowRight,
//   Cube,
// } from "@phosphor-icons/react";
// import { Link } from "react-router-dom";
import { BtnDefNative, BtnDef, BtnDefNativeNoLink } from "../components/BtnDef";
import { DisplaySomething } from "../components/DisplaySomething.jsx";
import { PortArc } from "../components/PortArc.jsx";
import { GsapScrollZoomNew } from "../components/GsapScroll.jsx";
import WorkItem from "../components/WorkItem.jsx";

const Home = ({ footer, selected }) => {
  const [position, setPosition] = useState({ x: 0 });
  const [activeLinkIndex, setActiveLinkIndex] = useState(null);
  const workItemRef = useRef(null);

  const [hovered, setHovered] = useState(false);
  const [display, setDisplay] = useState("development");
  const openDisplay = (index) => {
    setActiveLinkIndex(index);
  };
  const reverse = () => {
    setActiveLinkIndex(null);
  };

  const projects = [
    {
      id: 1,
      title: "NFL SA Leaderboard",
      date: "2023",
      client: "Michael Badiako",
      location: "Ghana",
      live: "https://nfloverall.mx4.app",
      description:
        "Designed and Developed a leaderboard for an NFL South Africa event, which will house over 1000 entries",
      status: "online",
      imageUrl:
        "https://res.cloudinary.com/base-data/image/upload/v1694632349/images/NFL/nflsa.jpg",
      logo: "/assets/nfl.png",
      category: "Website | React | API Development | Tailwind CSS",
      video:
        "https://res.cloudinary.com/base-data/video/upload/e_accelerate:0,q_60/v1695871899/images/NFL/nfl_xbnqdp.mp4",
      images: [
        "https://res.cloudinary.com/base-data/video/upload/ac_none,q_50/v1694938693/images/NFL/signal-2023-09-16-201544_004_tkdhsl.gif",
        "/images/NFL/00.jpg",
        "/images/NFL/01.jpg",
      ],
    },
    {
      id: 2,
      title: "kaizen",
      date: "2023",
      client: "Michael Badiako",
      location: "Ghana",
      live: "https://kaizen-react-test.mx4.app",
      description:
        "Designed and developed a full website with routing functionalities, API calls to retrieve data for project section, User experience, dynamic routing for the project section and also used Cloudinary to house all the images for the various projects to reduce load on the website",
      status: "online",
      imageUrl: "/assets/kaizen.jpg",
      logo: "/assets/kaizen.png",
      category: "Website | Sass | API Development | Tailwind CSS",
      video:
        "https://res.cloudinary.com/base-data/video/upload/ac_none,q_40/v1693874949/images/kaizen/video.mp4",
      images: [
        "https://res.cloudinary.com/base-data/video/upload/ac_none/v1693359206/images/kaizen/kaizen-design-vid.gif",
        "/images/kaizen/02.jpg",
        "/images/kaizen/03.jpg",
        "https://res.cloudinary.com/base-data/image/upload/q_50/v1693954894/images/kaizen/video-mobile.webp",
        "/images/kaizen/04.jpg",
        "/images/kaizen/gif.gif",
        "/images/kaizen/last-long.jpg",
      ],
    },
    {
      id: 3,
      title: "META",
      date: "2022",
      client: "Meta",
      location: "Ghana",
      live: "https://ramadannigeria2023.mx4.app/",
      description:
        "A landing page for a meta ramadan event. \n\n i was responsible for designing and developing the landing pages with responsive design in mind.",
      status: "online",
      imageUrl: "/assets/meta.jpg",
      logo: "/assets/meta-logo.png",
      category: "Website | Web design | JavaScript",
      video:
        "https://res.cloudinary.com/base-data/video/upload/q_50/v1694645110/images/meta.mp4",
    },
    {
      id: 4,
      title: "Desoc",
      date: "2020",
      client: "Unknown",
      location: "Ghana",
      live: "https://desoc-so.netlify.app/",
      description:
        "A landing page for the Department of Graphic Design at the University of Education, Winneba",
      status: "online",
      imageUrl:
        "https://res.cloudinary.com/base-data/image/upload/v1692492541/images/desoc.jpg",
      logo: "/assets/desoc.png",
      category: "Website | Web design | GSAP | JavaScript",
      images: [
        "/images/desoc/00.jpg",
        "/images/desoc/01.jpg",
        "/images/desoc/02.jpg",
        "/images/desoc/03.jpg",
        "/images/desoc/04.jpg",
        "/images/desoc/05.jpg",
      ],
    },
    {
      id: 5,
      title: "Hiedberg",
      date: "2020",
      client: "Hiedberg",
      location: "Ghana",
      live: "https://www.behance.net/gallery/160254719/Hiedberg-Branding",
      description:
        "I was responsible for creating three logo concept ideas fort he brand, and designing the brand, it's look and feel and the brand manual.",
      status: "online",
      imageUrl:
        "https://res.cloudinary.com/base-data/image/upload/v1692492541/images/desoc.jpg",
      category: "Branding | Mockup | Logo design ",
      images: [
        "/images/hiedberg/000.png",
        "/images/hiedberg/00.png",
        "/images/hiedberg/01.png",
        "/images/hiedberg/002.png",
        "/images/hiedberg/002.png",
        "/images/hiedberg/03.png",
        "/images/hiedberg/003.png",
        "/images/hiedberg/04.png",
        "/images/hiedberg/05.png",
        "/images/hiedberg/06.png",
        "/images/hiedberg/09.png",
      ],
    },
  ];

  const archieveLinks = [
    {
      imageUrl:
        "https://res.cloudinary.com/base-data/image/upload/v1691740316/images/hiedberg_rdrixv.webp",
      content: [
        {
          image:
            "https://res.cloudinary.com/base-data/image/upload/v1691740316/images/hiedberg_rdrixv.webp",
        },
      ],
      context: {
        title: "Heidbergbranding",
        text: "A full branding project for a consulting company",
      },
      link: "https://www.behance.net/gallery/160254719/Hiedberg-Branding/modules/904184099",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/base-data/video/upload/pg_1/v1693438865/images/vid_osshef.jpg",
      content: [
        {
          video:
            "https://res.cloudinary.com/base-data/video/upload/v1693438865/images/vid_osshef.mkv",
        },
      ],
      context: {
        title: "Tesla Model Y",
        text: "A 3D animation of a tesla model Y in blender",
      },
    },
    {
      imageUrl:
        "https://res.cloudinary.com/base-data/image/upload/v1693439446/images/hells-paradise-poster.jpg",
      content: [
        {
          video:
            "https://res.cloudinary.com/base-data/video/upload/v1693439605/images/hells-paradise.mp4",
        },
      ],
      context: {
        title: "Hell's Paradise AMV",
        text: "Hell's paradise animated music video",
      },
      link: "https://www.tiktok.com/@kelvinsdesignbox/video/7242255901279800582?is_from_webapp=1&sender_device=pc",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/base-data/image/upload/v1693439398/images/jjk.jpg",
      content: [
        {
          video:
            "https://res.cloudinary.com/base-data/video/upload/v1693439395/images/jjk-video.mp4",
        },
      ],
      context: {
        title: "JJK AMV",
        text: "Jujutsu Kaizen animated music video",
      },
      link: "https://www.tiktok.com/@kelvinsdesignbox/video/7243459478253800709?is_from_webapp=1&sender_device=pc",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/base-data/image/upload/v1693439614/images/bottle.png",
      content: [
        {
          image:
            "https://res.cloudinary.com/base-data/image/upload/v1693439614/images/bottle.png",
        },
      ],
      context: {
        title: "3D bottle illustrator",
        text: "A bottle illustration done in Adobe illustrator",
      },
    },
    {
      imageUrl:
        "https://res.cloudinary.com/base-data/image/upload/v1693439612/images/poster.jpg",
      content: [
        {
          image:
            "https://res.cloudinary.com/base-data/image/upload/v1693439612/images/poster.jpg",
        },
      ],
      context: {
        title: "Poster Design",
        text: "A coceptual abstract poster design ",
      },
    },
    {
      imageUrl:
        "https://res.cloudinary.com/base-data/image/upload/q_50/v1693439618/images/shoe2-image.jpg",
      content: [
        {
          video:
            "https://res.cloudinary.com/base-data/video/upload/q_30/v1693439641/images/shoe2-video.mp4",
        },
      ],
      context: {
        title: "Favourite Shoe",
        text: "A threejs project of my favourite shoe, this was done in 2020",
      },
      link: "https://myfavshoe-2.netlify.app",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/base-data/image/upload/q_30/v1693438903/images/midsem-202142593_sahxnw.jpg",
      content: [
        {
          image:
            "https://res.cloudinary.com/base-data/image/upload/q_30/v1693438903/images/midsem-202142593_sahxnw.jpg",
        },
      ],
      context: {
        title: "Random 3D models",
      },
    },
    {
      imageUrl:
        "https://res.cloudinary.com/base-data/image/upload/q_30/v1693439154/images/isometric.jpg",
      content: [
        {
          video:
            "https://res.cloudinary.com/base-data/video/upload/v1693439142/images/0001-0130_addhza.mp4",
        },
      ],
      context: {
        title: "3d bedroom isometric ",
        text: "A simple 3d bed room animation done in blender",
      },
      link: "https://www.tiktok.com/@kelvinsdesignbox/video/7228590762923920646?is_from_webapp=1&sender_device=pc",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/base-data/image/upload/q_40/v1691740521/images/recent1.webp",
      content: [
        {
          image:
            "https://res.cloudinary.com/base-data/image/upload/q_40/v1691740521/images/recent1.webp",
        },
      ],
      context: {
        title: "Apex Legends Character Intros",
        text: "A VFX composition introducing some characters in Apex Legends",
      },
      link: "https://www.tiktok.com/@kelvinsdesignbox/video/7228723476062850310?is_from_webapp=1&sender_device=pc",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/base-data/image/upload/v1691740381/images/recent2_hsydfb.webp",
      content: [
        {
          image:
            "https://res.cloudinary.com/base-data/image/upload/v1691740381/images/recent2_hsydfb.webp",
        },
      ],
      context: {
        title: "VGMAs Awards lower third",
        text: "A lower third composition for a Vodafone music award 2024",
      },
      link: "https://www.tiktok.com/@kelvinsdesignbox/video/7233559311052573957?is_from_webapp=1&sender_device=pc",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/base-data/image/upload/q_20/v1693439166/images/0129_dwre2t.jpg",
      content: [
        {
          video:
            "https://res.cloudinary.com/base-data/video/upload/q_40/v1693439136/images/202142593_p1yjdl.mp4",
        },
      ],
      context: {
        title: "3D Doctor's Office ",
        text: "A 3D animation composition of an imaginary doctor's office",
      },
      link: "https://www.tiktok.com/@kelvinsdesignbox/video/7228587619255422214?is_from_webapp=1&sender_device=pc",
    },
  ];

  const portArc = [
    {
      imageUrl:
        "https://res.cloudinary.com/base-data/image/upload/v1691740801/images/portfolio1_uwnn4s.webp",
      text: "Portfolio V.0",
      Url: "https://kelvin-studio.netlify.app/#",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/base-data/image/upload/v1691740494/images/portfolio2_cti329.webp",
      text: "Portfolio V.2",
      Url: "https://officialkelvinohemeng.netlify.app/",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/base-data/image/upload/q_50/v1693600003/images/recent-port_qvwied.gif",
      text: "Portfolio V.2.3",
      Url: "https://kelvinohemeng.vercel.app/",
    },
  ];

  // useEffect(() => {
  //   // moving gradient
  //   const gradient = new Gradient();
  //   gradient.initGradient("#gradient-canvas");
  //   const sections = document.querySelector(".fade-section");
  //   gsap.from(".fade-section", {
  //     opacity: 0,
  //     duration: 0.5,
  //     scrollTrigger: {
  //       trigger: ".fade-section",
  //       scrub: 2,
  //       start: "top center",
  //       end: "10% center",
  //       ease: "expo.out",
  //       // markers: true,
  //     },
  //   });
  // }, []);

  useEffect(() => {
    const animateIn = document.querySelectorAll(".work-animate");

    gsap.from(animateIn, {
      y: 100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      transformOrigin: "left bottom",
      ease: "elastic.out(0.45,0.3)",
      scrollTrigger: {
        trigger: animateIn,
        start: "60% bottom",
        // markers: true,
      },
    });
  }, []);

  const containerClass = "container mx-auto md:px-8 px-4";
  const mediumText = "text-[1.843rem]";
  const medText = "text-[1.873rem]";
  const bigText = "text-[2.5rem] md:text-[5.13975rem] leading-[100%]";
  const bg = "bg-[#e8e8ea]";
  const defRounded = " rounded-[1.25rem]";
  const globalPadding = " py-[20vh]";
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="relative"
      >
        <section className=" w-full pb-[20vh]">
          <div
            className={`${containerClass} h-full pt-[20vh] w-full flex flex-col items-center gap-10`}
          >
            <div className=" flex flex-col py-10  rounded-[1.5rem] w-full">
              <h1 className=" masked pointer-events-none md:pointer-events-auto text-left relative text-[#201e1e] text-[12vw] md:text-[12vw] 2xl:text-[8vw] md:tracking-[-0.6rem] leading-[100%]">
                Where{" "}
                <span className=" relative element">
                  <span className=" cursor-zoom-in ">design</span>
                  <span className="absolute z-[9999] text-white custom-hover">
                    abobe creative suite
                  </span>
                  <span className="absolute z-[9999] text-white custom-hover">
                    3d animations
                  </span>
                  <span className="absolute z-[9999] text-white custom-hover">
                    Branding, logo, identity design
                  </span>
                </span>{" "}
                <br />
                and{" "}
                <span className=" element">
                  <span className=" cursor-zoom-in">code</span>
                  <span className="absolute z-[9999] text-white custom-hover">
                    React
                  </span>
                  <span className="absolute z-[9999] text-white custom-hover">
                    web development
                  </span>
                  <span className="absolute z-[9999] text-white custom-hover">
                    UI development
                  </span>
                </span>{" "}
                meet
              </h1>
            </div>

            <div className=" w-full flex flex-col items-end">
              <div className=" space-y-8">
                <div className="flex justify-start w-full">
                  <div className=" animate-in flex gap-2 relative md:gap-4 w-fit items-center px-3 py-1 rounded-full bg-green-400 h-fit">
                    <div className="w-[15px] h-fit aspect-square rounded-full bg-green-600  flex items-center justify-center">
                      <div className=" w-[10px] aspect-square bg-green-800 rounded-full"></div>
                    </div>
                    <span className=" text-green-800 font-medium">
                      AVAILABLE FOR WORK
                    </span>
                  </div>
                </div>
                <div>
                  <span className=" text-green-400 text-[1.2rem]">
                    Kelvin Ohemeng
                  </span>
                  <h4 className=" text-[1.2rem] md:text-[2rem] text-white font-normal">
                    Frontend Web Developer && Graphic Design{" "}
                    <br className="hidden md:block" /> based in Ghana
                  </h4>
                </div>
                <div className="flex gap-5 flex-col md:flex-row">
                  <BtnDef
                    linkTo="mailto:kelvinohemeng59@gmail.com"
                    target
                    className={
                      "w-full text-black hover:text-white py-10 bg-gray-100 hover:bg-green-600"
                    }
                  >
                    Get in touch
                  </BtnDef>
                  <BtnDef
                    linkTo={"https://bit.ly/resume-kelvin"}
                    target
                    className={
                      "w-full border-white border-[1px] bg-[#232323ec] border-opacity-40 text-white py-10"
                    }
                  >
                    Resume
                  </BtnDef>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section>
          <div
            className={`${containerClass} animate-in-trigger flex flex-col md:flex-row justify-between gap-10`}
          >
            <div className=" flex flex-col w-1/2 items-start min-h-full gap-4 border-[3px] rounded-[1.5rem] px-4 py-6">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="flex items-center gap-8">
                  <img
                    src="/assets/wave.png"
                    alt=""
                    className=" max-w-[100px] md:max-w-[120px] p-1  bg-[#201e1e] w-fit h-fit bg-opacity-10 border-2 border-[#201e1e] border-opacity-40 rounded-full"
                  />
                </div>
                <div className=" space-y-4 flex flex-col items-start">
                  <div className=" animate-in flex gap-2 relative md:gap-4 w-fit items-center px-3 py-1 rounded-full bg-green-400 h-fit">
                    <div className="w-[15px] h-fit aspect-square rounded-full bg-green-600  flex items-center justify-center">
                      <div className=" w-[10px] aspect-square bg-green-800 rounded-full"></div>
                    </div>
                    <span className=" text-green-800 font-bold">
                      AVAILABLE FOR WORK
                    </span>
                  </div>

                  <h5 className="animate-in text-white bg-blue-500 bg-center flex gap-2 items-center w-fit h-fit  border-2 border-white overflow-hidden border-opacity-40 rounded-[.9rem] px-4 py-2">
                    <span>Hi there!</span> <b>I'm kelvin Ohemeng</b>
                    <span className=" text-[2rem]">🖐️</span>
                  </h5>

                  <h5>
                    I am a graphic designer who is passionate about the world of
                    development and programming
                  </h5>

                  <h5 className="animate-in text-white bg-blue-500 bg-center text-left flex gap-2 items-center w-fit h-fit  border-2 border-white overflow-hidden border-opacity-40 rounded-[.9rem] px-4 py-2">
                    This is my portfolio where I share my works and skills as a
                    designer with a developers skill and vice versa
                  </h5>

                  <div className="animate-in flex gap-4 items-center">
                    <div className="animate-in">
                      {" "}
                      <BtnDef
                        linkTo="mailto:kelvinohemeng59@gmail.com"
                        target
                        customIcon={
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            fill="#000000"
                            viewBox="0 0 256 256"
                          >
                            <path d="M128,136v64a8,8,0,0,1-16,0V155.32L45.66,221.66a8,8,0,0,1-11.32-11.32L100.68,144H56a8,8,0,0,1,0-16h64A8,8,0,0,1,128,136ZM208,32H80A16,16,0,0,0,64,48V96a8,8,0,0,0,16,0V48H208V176H160a8,8,0,0,0,0,16h48a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Z"></path>
                          </svg>
                        }
                        className=" bg-gray-800 text-white flex items-center gap-2 "
                      >
                        Hire me
                      </BtnDef>
                    </div>
                    <div className="animate-in">
                      {" "}
                      <BtnDef
                        linkTo="https://bit.ly/resume-kelvin"
                        target
                        className=" text-white bg-gray-800"
                        customIcon={
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            fill="#000000"
                            viewBox="0 0 256 256"
                          >
                            <path d="M128,136v64a8,8,0,0,1-16,0V155.32L45.66,221.66a8,8,0,0,1-11.32-11.32L100.68,144H56a8,8,0,0,1,0-16h64A8,8,0,0,1,128,136ZM208,32H80A16,16,0,0,0,64,48V96a8,8,0,0,0,16,0V48H208V176H160a8,8,0,0,0,0,16h48a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Z"></path>
                          </svg>
                        }
                      >
                        Resume
                      </BtnDef>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* <section className=" mt-10">
          <div className={`${containerClass}`}>
            {" "}
            <div className="animate-in-alt flex gap-4 flex-1 flex-col border-[3px] rounded-[1.5rem]">
              <div className=" animate-in-alt flex flex-wrap gap-4 h-fit items-start bg-black bg-opacity-80 p-5 rounded-[1.5rem]">
                <h5 className=" small-em animate-in-alt text-black bg-white bg-center text-left flex gap-1 items-center w-fit h-fit  border-2 border-white overflow-hidden border-opacity-40 rounded-[.9rem] px-2 md:px-4 py-1">
                  Frontend Development
                </h5>
                <h5 className=" small-em animate-in-alt text-black bg-white bg-center text-left flex gap-1 items-center w-fit h-fit  border-2 border-white overflow-hidden border-opacity-40 rounded-[.9rem] px-2 md:px-4 py-1">
                  Website development
                </h5>

                <h5 className=" small-em animate-in-alt text-black bg-white bg-center text-left flex gap-1 items-center w-fit h-fit  border-2 border-white overflow-hidden border-opacity-40 rounded-[.9rem] px-2 md:px-4 py-1">
                  Web Design
                </h5>
                <h5 className=" small-em animate-in-alt text-black bg-white bg-center text-left flex gap-1 items-center w-fit h-fit  border-2 border-white overflow-hidden border-opacity-40 rounded-[.9rem] px-2 md:px-4 py-1">
                  HTML
                </h5>
                <h5 className=" small-em animate-in-alt text-black bg-white bg-center text-left flex gap-1 items-center w-fit h-fit  border-2 border-white overflow-hidden border-opacity-40 rounded-[.9rem] px-2 md:px-4 py-1">
                  CSS/SASS
                </h5>
                <h5 className=" small-em animate-in-alt text-black bg-white bg-center text-left flex gap-1 items-center w-fit h-fit  border-2 border-white overflow-hidden border-opacity-40 rounded-[.9rem] px-2 md:px-4 py-1">
                  Tailwind Css
                </h5>
                <h5 className=" small-em animate-in-alt text-black bg-white bg-center text-left flex gap-1 items-center w-fit h-fit  border-2 border-white overflow-hidden border-opacity-40 rounded-[.9rem] px-2 md:px-4 py-1">
                  Javascript
                </h5>
                <h5 className=" small-em animate-in-alt text-black bg-white bg-center text-left flex gap-1 items-center w-fit h-fit  border-2 border-white overflow-hidden border-opacity-40 rounded-[.9rem] px-2 md:px-4 py-1">
                  TypeScript
                </h5>
                <h5 className=" small-em animate-in-alt text-black bg-white bg-center text-left flex gap-1 items-center w-fit h-fit  border-2 border-white overflow-hidden border-opacity-40 rounded-[.9rem] px-2 md:px-4 py-1">
                  ThreeJs
                </h5>
                <h5 className=" small-em animate-in-alt text-black bg-white bg-center text-left flex gap-1 items-center w-fit h-fit  border-2 border-white overflow-hidden border-opacity-40 rounded-[.9rem] px-2 md:px-4 py-1">
                  React
                </h5>
                <h5 className=" small-em animate-in-alt text-black bg-white bg-center text-left flex gap-1 items-center w-fit h-fit  border-2 border-white overflow-hidden border-opacity-40 rounded-[.9rem] px-2 md:px-4 py-1">
                  NextJs
                </h5>
                <h5 className=" small-em animate-in-alt text-black bg-white bg-center text-left flex gap-1 items-center w-fit h-fit  border-2 border-white overflow-hidden border-opacity-40 rounded-[.9rem] px-2 md:px-4 py-1">
                  Webflow
                </h5>
                <h5 className=" small-em animate-in-alt text-black bg-white bg-center text-left flex gap-1 items-center w-fit h-fit  border-2 border-white overflow-hidden border-opacity-40 rounded-[.9rem] px-2 md:px-4 py-1">
                  Wordpress
                </h5>
                <h5 className=" small-em animate-in-alt text-black bg-white bg-center text-left flex gap-1 items-center w-fit h-fit  border-2 border-white overflow-hidden border-opacity-40 rounded-[.9rem] px-2 md:px-4 py-1">
                  Webflow
                </h5>
                <h5 className=" small-em animate-in-alt text-black bg-white bg-center text-left flex gap-1 items-center w-fit h-fit  border-2 border-white overflow-hidden border-opacity-40 rounded-[.9rem] px-2 md:px-4 py-1">
                  Adobe Creative Suite
                </h5>
                <h5 className=" small-em animate-in-alt text-black bg-white bg-center text-left flex gap-1 items-center w-fit h-fit  border-2 border-white overflow-hidden border-opacity-40 rounded-[.9rem] px-2 md:px-4 py-1">
                  Figma
                </h5>

                <h5 className=" small-em animate-in-alt text-black bg-white bg-center text-left flex gap-1 items-center w-fit h-fit  border-2 border-white overflow-hidden border-opacity-40 rounded-[.9rem] px-2 md:px-4 py-1">
                  Adobe XD
                </h5>
                <h5 className=" small-em animate-in-alt text-black bg-white bg-center text-left flex gap-1 items-center w-fit h-fit  border-2 border-white overflow-hidden border-opacity-40 rounded-[.9rem] px-2 md:px-4 py-1">
                  Blender
                </h5>
                <h5 className=" small-em animate-in-alt text-black bg-white bg-center text-left flex gap-1 items-center w-fit h-fit  border-2 border-white overflow-hidden border-opacity-40 rounded-[.9rem] px-2 md:px-4 py-1">
                  VFX Animations
                </h5>
                <h5 className=" small-em animate-in-alt text-black bg-white bg-center text-left flex gap-1 items-center w-fit h-fit  border-2 border-white overflow-hidden border-opacity-40 rounded-[.9rem] px-2 md:px-4 py-1">
                  3d Animations
                </h5>
                <h5 className=" small-em animate-in-alt text-black bg-white bg-center text-left flex gap-1 items-center w-fit h-fit  border-2 border-white overflow-hidden border-opacity-40 rounded-[.9rem] px-2 md:px-4 py-1">
                  Branding
                </h5>
              </div>
            </div>
          </div>
        </section> */}

        {/* <section className={`w-full py-[20vh] `} id="#about">
          <div
            className={`${containerClass} h-full md:flex-row flex-col flex gap-8 relative`}
          >
            <div className={` md:sticky top-[10rem] w-fit h-fit space-y-8 `}>
              <img
                src="/assets/me-sticker.png"
                alt=""
                className=" max-w-[100px] md:w-[250px] object-cover aspect-square relative bg-[#f9f9f9] bg-opacity-10 border-2 border-white border-opacity-40 rounded-full"
              />
              <div className=" flex flex-col items-start text-white">
                <h1 className={`${medText} w-max`}>Kelvin Ohemeng</h1>
                <p className={` opacity-60 w-max`}>
                  Web developer and graphic designer
                </p>
                <div className="py-5 flex gap-6">
                  <BtnDef
                    linkTo="https://bit.ly/resume-kelvin"
                    target
                    className=" bg-blue-800"
                  >
                    view full resume
                  </BtnDef>
                  <BtnDef
                    linkTo="mailto:kelvinohemeng59@gmail.com"
                    target
                    className=" border-2 border-white bg-opacity-10 border-opacity-40"
                  >
                    Hire me
                  </BtnDef>
                </div>
              </div>
            </div>
            <div className=" space-y-8">
              <div className="flex flex-col md:flex-row gap-8 text-white">
                <div className=" flex flex-col gap-8">
                  <div
                    className={` p-[1.5rem] md:pt-[2rem] md:p-[2rem] ${defRounded} bg-[#f9f9f9] bg-opacity-10 border-2 border-white border-opacity-40 `}
                  >
                    <div className="flex flex-col gap-4 md:flex-row w-full justify-between">
                      <h3 className=" font-bold text-[hsl(0,0%,100%)]">
                        About me
                      </h3>
                      <div className=" order-first md:order-last space-x-4 w-fit h-fit flex p-1 rounded-lg border-2 border-white border-opacity-60 bg-white bg-opacity-5">
                        <button
                          onClick={() => setDisplay("visuals")}
                          className={` text-white px-4 py-2 ${
                            display === "visuals"
                              ? "bg-[hsl(234,59%,60%)]"
                              : " opacity-50"
                          } border-white rounded-lg flex items-center gap-2`}
                        >
                          <span>as a designer</span>
                        </button>
                        <button
                          onClick={() => setDisplay("development")}
                          className={` text-white px-4 py-2 ${
                            display === "development"
                              ? "bg-[hsl(234,59%,60%)]"
                              : " opacity-50"
                          } border-white rounded-lg flex items-center gap-2`}
                        >
                          <span>as a developer</span>
                        </button>
                      </div>
                    </div>
                    <p className=" pt-[1rem] opacity-60">
                      With knoledge and experience in both design and web
                      development, with some knowledge on backend, I can bridge
                      the gap between design and development. I am a very
                      passionate designer and developer and tech enthusiast 😊.
                    </p>
                  </div>

                  <div className={` flex flex-row  gap-4`}>
                    <div
                      className={` flex-1 p-[1rem] md:p-[1.8rem] ${defRounded} justify-center bg-[#f9f9f9] bg-opacity-10 border-2 border-white border-opacity-40 flex flex-col gap-2 md:gap-4 items-center`}
                    >
                      <h3 className=" text-[hsl(234,59%,60%)]">
                        3 <span>years</span>
                      </h3>
                      <p className="opacity-60">Experience</p>
                    </div>
                    <div
                      className={` flex-1 p-[1rem] md:p-[1.8rem] ${defRounded} justify-center bg-[#f9f9f9] bg-opacity-10 border-2 border-white border-opacity-40 flex gap-2 md:gap-4 flex-col items-center`}
                    >
                      <h3 className=" text-[hsl(234,59%,60%)]">5+</h3>
                      <p className="opacity-60">Professional Projects</p>
                    </div>
                  </div>

                  <div
                    className={` p-[1.5rem] py-[0.6rem] md:py-[3rem] md:p-[3rem] ${defRounded} bg-[#f9f9f9] bg-opacity-10 border-2 border-white border-opacity-40`}
                  >
                    {display === "development" ? (
                      <div className=" ico justify-between flex gap-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="50"
                          height="50"
                          viewBox="0 0 128 128"
                        >
                          <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z" />
                          <path
                            fill="#007acc"
                            d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 0 1 7.82 4.5a20.58 20.58 0 0 1 3 4c0 .16-5.4 3.81-8.69 5.85c-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 0 0-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 0 0 .54 2.34c.83 1.73 2.38 2.76 7.24 4.86c8.95 3.85 12.78 6.39 15.16 10c2.66 4 3.25 10.46 1.45 15.24c-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 0 1-9.52-.1a23 23 0 0 1-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 0 1 1.15-.73L82 101l3.59-2.08l.75 1.11a16.78 16.78 0 0 0 4.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 0 0 .69-6.92c-1-1.39-3-2.56-8.59-5c-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 0 1-3.43-6.25a25 25 0 0 1-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 0 1 9.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 0 1 .12-5.17C29.08 59 39 59 51 59h21.83z"
                          />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="50"
                          height="50"
                          viewBox="0 0 256 256"
                        >
                          <path fill="#F7DF1E" d="M0 0h256v256H0V0Z" />
                          <path d="m67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371c7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259c-19.245 0-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607c9.969 0 16.325-4.984 16.325-11.858c0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257c0-18.044 13.747-31.792 35.228-31.792c15.294 0 26.292 5.328 34.196 19.247l-18.732 12.03c-4.125-7.389-8.591-10.31-15.465-10.31c-7.046 0-11.514 4.468-11.514 10.31c0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804c0 21.654-17.012 33.51-39.867 33.51c-22.339 0-36.774-10.654-43.819-24.574" />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="50"
                          height="50"
                          viewBox="0 0 256 228"
                        >
                          <path
                            fill="#00D8FF"
                            d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"
                          />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="50"
                          height="50"
                          viewBox="0 0 128 128"
                        >
                          <path
                            fill="#38bdf8"
                            d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597c6.398-8.531 13.867-11.73 22.398-9.597c4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602c-6.399 8.536-13.867 11.735-22.399 9.602c-4.87-1.215-8.347-4.746-12.207-8.66c-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66c6.274 6.367 13.536 13.738 29.395 13.738c17.066 0 27.73-8.53 32-25.597c-6.399 8.531-13.867 11.73-22.399 9.597c-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0"
                          />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="50"
                          height="50"
                          viewBox="0 0 128 128"
                        >
                          <path
                            fill="#CB6699"
                            fill-rule="evenodd"
                            d="M1.219 56.156c0 .703.207 1.167.323 1.618c.756 2.933 2.381 5.45 4.309 7.746c2.746 3.272 6.109 5.906 9.554 8.383c2.988 2.148 6.037 4.248 9.037 6.38c.515.366 1.002.787 1.561 1.236c-.481.26-.881.489-1.297.7c-3.959 2.008-7.768 4.259-11.279 6.986c-2.116 1.644-4.162 3.391-5.607 5.674c-2.325 3.672-3.148 7.584-1.415 11.761c.506 1.22 1.278 2.274 2.367 3.053c.353.252.749.502 1.162.6c1.058.249 2.136.412 3.207.609l3.033-.002c3.354-.299 6.407-1.448 9.166-3.352c4.312-2.976 7.217-6.966 8.466-12.087c.908-3.722.945-7.448-.125-11.153a11.696 11.696 0 0 0-.354-1.014c-.13-.333-.283-.657-.463-1.072l6.876-3.954l.103.088c-.125.409-.258.817-.371 1.23c-.817 2.984-1.36 6.02-1.165 9.117c.208 3.3 1.129 6.389 3.061 9.146c1.562 2.23 5.284 2.313 6.944.075c.589-.795 1.16-1.626 1.589-2.513c1.121-2.315 2.159-4.671 3.23-7.011l.187-.428c-.077 1.108-.167 2.081-.208 3.055c-.064 1.521.025 3.033.545 4.48c.445 1.238 1.202 2.163 2.62 2.326c.97.111 1.743-.333 2.456-.896a10.384 10.384 0 0 0 2.691-3.199c1.901-3.491 3.853-6.961 5.576-10.54c1.864-3.871 3.494-7.855 5.225-11.792l.286-.698c.409 1.607.694 3.181 1.219 4.671c.61 1.729 1.365 3.417 2.187 5.058c.389.775.344 1.278-.195 1.928c-2.256 2.72-4.473 5.473-6.692 8.223c-.491.607-.98 1.225-1.389 1.888a3.701 3.701 0 0 0-.48 1.364a1.737 1.737 0 0 0 1.383 1.971a9.661 9.661 0 0 0 2.708.193c3.097-.228 5.909-1.315 8.395-3.157c3.221-2.386 4.255-5.642 3.475-9.501c-.211-1.047-.584-2.065-.947-3.074c-.163-.455-.174-.774.123-1.198c2.575-3.677 4.775-7.578 6.821-11.569c.081-.157.164-.314.306-.482c.663 3.45 1.661 6.775 3.449 9.792c-.912.879-1.815 1.676-2.632 2.554c-1.799 1.934-3.359 4.034-4.173 6.595c-.35 1.104-.619 2.226-.463 3.405c.242 1.831 1.742 3.021 3.543 2.604c3.854-.892 7.181-2.708 9.612-5.925c1.636-2.166 1.785-4.582 1.1-7.113c-.188-.688-.411-1.365-.651-2.154c.951-.295 1.878-.649 2.837-.868c4.979-1.136 9.904-.938 14.702.86c2.801 1.05 5.064 2.807 6.406 5.571c1.639 3.379.733 6.585-2.452 8.721c-.297.199-.637.356-.883.605a.869.869 0 0 0-.205.67c.021.123.346.277.533.275c1.047-.008 1.896-.557 2.711-1.121c2.042-1.413 3.532-3.314 3.853-5.817l.063-.188l-.077-1.63c-.031-.094.023-.187.016-.258c-.434-3.645-2.381-6.472-5.213-8.688c-3.28-2.565-7.153-3.621-11.249-3.788a25.401 25.401 0 0 0-9.765 1.503c-.897.325-1.786.71-2.688 1.073c-.121-.219-.251-.429-.358-.646c-.926-1.896-2.048-3.708-2.296-5.882c-.176-1.544-.392-3.086-.025-4.613c.353-1.469.813-2.913 1.246-4.362c.223-.746.066-1.164-.646-1.5a2.854 2.854 0 0 0-.786-.258c-1.75-.254-3.476-.109-5.171.384c-.6.175-1.036.511-1.169 1.175c-.076.381-.231.746-.339 1.122c-.443 1.563-.757 3.156-1.473 4.645c-1.794 3.735-3.842 7.329-5.938 10.897c-.227.385-.466.763-.752 1.23c-.736-1.54-1.521-2.922-1.759-4.542c-.269-1.832-.481-3.661-.025-5.479c.339-1.356.782-2.687 1.19-4.025c.193-.636.104-.97-.472-1.305c-.291-.169-.62-.319-.948-.368a11.643 11.643 0 0 0-5.354.438c-.543.176-.828.527-.994 1.087c-.488 1.652-.904 3.344-1.589 4.915c-2.774 6.36-5.628 12.687-8.479 19.013c-.595 1.321-1.292 2.596-1.963 3.882c-.17.326-.418.613-.63.919c-.17-.201-.236-.339-.235-.477c.005-.813-.092-1.65.063-2.436a172.189 172.189 0 0 1 1.578-7.099c.47-1.946 1.017-3.874 1.538-5.807c.175-.647.178-1.252-.287-1.796c-.781-.911-2.413-1.111-3.381-.409l-.428.242l.083-.69c.204-1.479.245-2.953-.161-4.41c-.506-1.816-1.802-2.861-3.686-2.803c-.878.027-1.8.177-2.613.497c-3.419 1.34-6.048 3.713-8.286 6.568a2.592 2.592 0 0 1-.757.654c-2.893 1.604-5.795 3.188-8.696 4.778l-3.229 1.769c-.866-.826-1.653-1.683-2.546-2.41c-2.727-2.224-5.498-4.393-8.244-6.592c-2.434-1.949-4.792-3.979-6.596-6.56c-1.342-1.92-2.207-4.021-2.29-6.395c-.105-3.025.753-5.789 2.293-8.362c1.97-3.292 4.657-5.934 7.611-8.327c3.125-2.53 6.505-4.678 10.008-6.639c4.901-2.743 9.942-5.171 15.347-6.774c5.542-1.644 11.165-2.585 16.965-1.929c2.28.258 4.494.78 6.527 1.895c1.557.853 2.834 1.97 3.428 3.716c.586 1.718.568 3.459.162 5.204c-.825 3.534-2.76 6.447-5.195 9.05c-3.994 4.267-8.866 7.172-14.351 9.091a39.478 39.478 0 0 1-9.765 2.083c-2.729.229-5.401-.013-7.985-.962c-1.711-.629-3.201-1.591-4.399-2.987c-.214-.25-.488-.521-.887-.287c-.391.23-.46.602-.329.979c.219.626.421 1.278.762 1.838c.857 1.405 2.107 2.424 3.483 3.298c2.643 1.681 5.597 2.246 8.66 2.377c4.648.201 9.183-.493 13.654-1.74c6.383-1.78 11.933-4.924 16.384-9.884c3.706-4.13 6.353-8.791 6.92-14.419c.277-2.747-.018-5.438-1.304-7.944c-1.395-2.715-3.613-4.734-6.265-6.125C68.756 18.179 64.588 17 60.286 17h-4.31c-5.21 0-10.247 1.493-15.143 3.274c-3.706 1.349-7.34 2.941-10.868 4.703c-7.683 3.839-14.838 8.468-20.715 14.833c-2.928 3.171-5.407 6.67-6.833 10.79a40.494 40.494 0 0 0-1.111 3.746m27.839 36.013c-.333 4.459-2.354 8.074-5.657 11.002c-1.858 1.646-3.989 2.818-6.471 3.23c-.9.149-1.821.185-2.694-.188c-1.245-.532-1.524-1.637-1.548-2.814c-.037-1.876.62-3.572 1.521-5.186c1.176-2.104 2.9-3.708 4.741-5.206c2.9-2.361 6.046-4.359 9.268-6.245l.243-.1c.498 1.84.735 3.657.597 5.507zM54.303 70.98c-.235 1.424-.529 2.849-.945 4.229c-1.438 4.777-3.285 9.406-5.282 13.973c-.369.845-.906 1.616-1.373 2.417a1.689 1.689 0 0 1-.283.334c-.578.571-1.126.541-1.418-.206c-.34-.868-.549-1.797-.729-2.716c-.121-.617-.092-1.265-.13-1.897c.039-4.494 1.41-8.578 3.736-12.38c.959-1.568 2.003-3.062 3.598-4.054a6.27 6.27 0 0 1 1.595-.706c.85-.239 1.372.154 1.231 1.006zm17.164 21.868l6.169-7.203c.257 2.675-4.29 8.015-6.169 7.203zm19.703-4.847c-.436.25-.911.43-1.358.661c-.409.212-.544-.002-.556-.354a2.385 2.385 0 0 1 .093-.721c.833-2.938 2.366-5.446 4.647-7.486l.16-.082c1.085 3.035-.169 6.368-2.986 7.982z"
                            clip-rule="evenodd"
                          />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="50"
                          height="50"
                          viewBox="0 0 32 32"
                        >
                          <path
                            fill="#e44f26"
                            d="M5.902 27.201L3.655 2h24.69l-2.25 25.197L15.985 30L5.902 27.201z"
                          />
                          <path
                            fill="#f1662a"
                            d="m16 27.858l8.17-2.265l1.922-21.532H16v23.797z"
                          />
                          <path
                            fill="#ebebeb"
                            d="M16 13.407h-4.09l-.282-3.165H16V7.151H8.25l.074.83l.759 8.517H16v-3.091zm0 8.027l-.014.004l-3.442-.929l-.22-2.465H9.221l.433 4.852l6.332 1.758l.014-.004v-3.216z"
                          />
                          <path
                            fill="#fff"
                            d="M15.989 13.407v3.091h3.806l-.358 4.009l-3.448.93v3.216l6.337-1.757l.046-.522l.726-8.137l.076-.83h-7.185zm0-6.256v3.091h7.466l.062-.694l.141-1.567l.074-.83h-7.743z"
                          />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="50"
                          height="50"
                          viewBox="0 0 32 32"
                        >
                          <path
                            fill="#1572b6"
                            d="M5.902 27.201L3.656 2h24.688l-2.249 25.197L15.985 30L5.902 27.201z"
                          />
                          <path
                            fill="#33a9dc"
                            d="m16 27.858l8.17-2.265l1.922-21.532H16v23.797z"
                          />
                          <path
                            fill="#fff"
                            d="M16 13.191h4.09l.282-3.165H16V6.935h7.75l-.074.829l-.759 8.518H16v-3.091z"
                          />
                          <path
                            fill="#ebebeb"
                            d="m16.019 21.218l-.014.004l-3.442-.93l-.22-2.465H9.24l.433 4.853l6.331 1.758l.015-.004v-3.216z"
                          />
                          <path
                            fill="#fff"
                            d="m19.827 16.151l-.372 4.139l-3.447.93v3.216l6.336-1.756l.047-.522l.537-6.007h-3.101z"
                          />
                          <path
                            fill="#ebebeb"
                            d="M16.011 6.935v3.091H8.545l-.062-.695l-.141-1.567l-.074-.829h7.743zM16 13.191v3.091h-3.399l-.062-.695l-.14-1.567l-.074-.829H16z"
                          />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="50"
                          height="50"
                          viewBox="0 0 128 128"
                        >
                          <path
                            fill="#F34F29"
                            d="M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314c2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295c3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 0 1-13.683 0a9.677 9.677 0 0 1-2.105-10.521L68.574 47.933l-.002 34.341a9.708 9.708 0 0 1 2.559 1.828c3.778 3.777 3.778 9.898 0 13.683c-3.779 3.777-9.904 3.777-13.679 0c-3.778-3.784-3.778-9.905 0-13.683a9.65 9.65 0 0 1 3.167-2.11V47.333a9.581 9.581 0 0 1-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056 20.333L3.264 58.123a8.133 8.133 0 0 0 0 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858a8.135 8.135 0 0 0-.001-11.501z"
                          />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="50"
                          height="50"
                          viewBox="0 0 512 139"
                        >
                          <path
                            fill="#ffffff"
                            d="M98.696 59.312h-43.06a2.015 2.015 0 0 0-2.013 2.014v21.053c0 1.111.902 2.015 2.012 2.015h16.799v26.157s-3.772 1.286-14.2 1.286c-12.303 0-29.49-4.496-29.49-42.288c0-37.8 17.897-42.773 34.698-42.773c14.543 0 20.809 2.56 24.795 3.794c1.253.384 2.412-.863 2.412-1.975l4.803-20.342c0-.52-.176-1.146-.769-1.571C93.064 5.527 83.187 0 58.233 0C29.488 0 0 12.23 0 71.023c0 58.795 33.76 67.556 62.21 67.556c23.555 0 37.844-10.066 37.844-10.066c.59-.325.653-1.148.653-1.526V61.326c0-1.11-.9-2.014-2.01-2.014Zm221.8-51.953c0-1.12-.888-2.024-1.999-2.024h-24.246a2.016 2.016 0 0 0-2.008 2.024l.006 46.856h-37.792V7.36c0-1.12-.892-2.024-2.001-2.024H228.21a2.014 2.014 0 0 0-2.003 2.024v126.872c0 1.12.9 2.03 2.003 2.03h24.245c1.109 0 2-.91 2-2.03V79.964h37.793l-.066 54.267c0 1.12.9 2.03 2.008 2.03h24.304c1.11 0 1.998-.91 2-2.03V7.36ZM144.37 24.322c0-8.73-7-15.786-15.635-15.786c-8.627 0-15.632 7.055-15.632 15.786c0 8.72 7.005 15.795 15.632 15.795c8.635 0 15.635-7.075 15.635-15.795Zm-1.924 83.212V48.97a2.015 2.015 0 0 0-2.006-2.021h-24.169c-1.109 0-2.1 1.144-2.1 2.256v83.905c0 2.466 1.536 3.199 3.525 3.199h21.775c2.39 0 2.975-1.173 2.975-3.239v-25.536ZM413.162 46.95h-24.06c-1.104 0-2.002.909-2.002 2.028v62.21s-6.112 4.472-14.788 4.472c-8.675 0-10.977-3.937-10.977-12.431v-54.25c0-1.12-.897-2.03-2.001-2.03h-24.419c-1.102 0-2.005.91-2.005 2.03v58.358c0 25.23 14.063 31.403 33.408 31.403c15.87 0 28.665-8.767 28.665-8.767s.61 4.62.885 5.168c.276.547.994 1.098 1.77 1.098l15.535-.068c1.102 0 2.005-.911 2.005-2.025l-.008-85.168a2.02 2.02 0 0 0-2.008-2.028Zm55.435 68.758c-8.345-.254-14.006-4.041-14.006-4.041V71.488s5.585-3.423 12.436-4.035c8.664-.776 17.013 1.841 17.013 22.51c0 21.795-3.768 26.096-15.443 25.744Zm9.49-71.483c-13.665 0-22.96 6.097-22.96 6.097V7.359a2.01 2.01 0 0 0-2-2.024h-24.315a2.013 2.013 0 0 0-2.004 2.024v126.872c0 1.12.898 2.03 2.007 2.03h16.87c.76 0 1.335-.39 1.76-1.077c.419-.682 1.024-5.85 1.024-5.85s9.942 9.422 28.763 9.422c22.096 0 34.768-11.208 34.768-50.315s-20.238-44.217-33.913-44.217ZM212.229 46.73h-18.187l-.028-24.027c0-.909-.468-1.364-1.52-1.364H167.71c-.964 0-1.481.424-1.481 1.35v24.83s-12.42 2.998-13.26 3.24a2.013 2.013 0 0 0-1.452 1.934v15.603c0 1.122.896 2.027 2.005 2.027h12.707v37.536c0 27.88 19.556 30.619 32.753 30.619c6.03 0 13.243-1.937 14.434-2.376c.72-.265 1.138-1.01 1.138-1.82l.02-17.164c0-1.119-.945-2.025-2.01-2.025c-1.06 0-3.77.431-6.562.431c-8.933 0-11.96-4.154-11.96-9.53l-.001-35.67h18.188a2.014 2.014 0 0 0 2.006-2.028V48.753c0-1.12-.897-2.022-2.006-2.022Z"
                          />
                        </svg>
                      </div>
                    ) : (
                      <div className=" ico justify-between flex gap-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="50"
                          height="50"
                          viewBox="0 0 256 250"
                        >
                          <rect
                            width="256"
                            height="249.6"
                            fill="#49021F"
                            rx="42.5"
                          />
                          <path
                            fill="#F36"
                            d="M92.969 65.297v109.394c0 1.146-.515 1.718-1.546 1.718h-20.78c-.917 0-1.375-.573-1.373-1.718V65.297c0-.915.515-1.373 1.545-1.374h20.78a1.215 1.215 0 0 1 1.385 1.233l-.011.141Zm62.586 112.818l-1.106.011a53.208 53.208 0 0 1-22.926-4.808a36.45 36.45 0 0 1-16.057-14.512c-3.799-6.309-5.744-14.173-5.836-23.59l-.003-.71a44.844 44.844 0 0 1 5.84-22.497a42.866 42.866 0 0 1 16.443-16.183l.558-.304c7.44-4.121 16.428-6.182 26.962-6.182l.222.001l.493.011l.558.022l.623.032l.687.043l.751.055l1.697.139l.464.04v-33.83c0-.8.344-1.203 1.03-1.203h21.639a.91.91 0 0 1 1.03 1.03v101.495a85.4 85.4 0 0 0 .258 6.354l.162 2.214l.143 2.061l.124 1.907a1.775 1.775 0 0 1-1.03 1.718a85.184 85.184 0 0 1-17.345 5.151a93.12 93.12 0 0 1-15.38 1.535Zm9.37-21.284v-46.883a17.035 17.035 0 0 0-2.833-.515a34.25 34.25 0 0 0-3.521-.172c-4.168-.041-8.286.9-12.021 2.748a23.472 23.472 0 0 0-9.016 7.9c-2.348 3.434-3.522 7.957-3.521 13.567a30.284 30.284 0 0 0 1.803 10.99a20.894 20.894 0 0 0 4.809 7.557a18.311 18.311 0 0 0 7.213 4.293a28.277 28.277 0 0 0 8.844 1.375c1.602 0 3.09-.058 4.465-.173a18.38 18.38 0 0 0 3.248-.54l.53-.147Z"
                          />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="50"
                          height="50"
                          viewBox="0 0 256 250"
                        >
                          <rect
                            width="256"
                            height="249.6"
                            fill="#001E36"
                            rx="42.5"
                          />
                          <path
                            fill="#31A8FF"
                            d="M57.644 175.035V65.297c0-.8.344-1.202 1.031-1.202l1.087-.003l1.858-.02l2.582-.051l8.65-.183l9.275-.172c3.262-.056 6.496-.086 9.702-.086c8.7 0 16.027 1.088 21.982 3.263a38.139 38.139 0 0 1 14.34 8.758a33.596 33.596 0 0 1 7.814 12.108a40.17 40.17 0 0 1 2.405 13.824c0 9.161-2.119 16.717-6.355 22.669a35.902 35.902 0 0 1-16.6 12.756l-.573.21c-6.973 2.601-14.695 3.541-23.164 3.6l-1.316.004l-1.953-.01l-.985-.014l-1.098-.026l-.662-.026l-.402-.021l-.989-.036l-1.209-.025l-1.82-.013l-.405-.001v34.263a1.366 1.366 0 0 1-1.546 1.546H58.847c-.803 0-1.203-.456-1.203-1.374ZM80.84 84.703v35.792a53.16 53.16 0 0 0 4.12.172h5.668a40.277 40.277 0 0 0 11.533-1.727l.746-.233a18.515 18.515 0 0 0 8.759-5.668c2.152-2.538 3.267-6.035 3.344-10.492l.005-.499c.09-3.322-.774-6.6-2.491-9.445a16.015 16.015 0 0 0-7.47-6.097a31.829 31.829 0 0 0-12.537-2.146l-2.178.006l-1.374.012l-1.311.017l-1.85.036l-1.35.038l-.701.026l-.937.044l-.798.049l-.455.036l-.393.038l-.173.02l-.157.021Zm123.93 29.284a40.153 40.153 0 0 0-9.458-3.442l-.76-.164a54.267 54.267 0 0 0-11.009-1.363l-.926-.011a22.21 22.21 0 0 0-6.44.773a5.786 5.786 0 0 0-3.35 2.146a5.408 5.408 0 0 0-.858 2.92a4.56 4.56 0 0 0 1.03 2.747a11.689 11.689 0 0 0 3.235 2.637l.372.197a71.946 71.946 0 0 0 7.556 3.52a74.88 74.88 0 0 1 16.4 7.814a24.941 24.941 0 0 1 8.416 8.845a23.581 23.581 0 0 1 2.49 10.99a24.686 24.686 0 0 1-4.122 14.169a27.11 27.11 0 0 1-11.936 9.53c-5.037 2.214-11.223 3.357-18.557 3.432l-.762.004a69.87 69.87 0 0 1-13.556-1.188l-.956-.186a46.302 46.302 0 0 1-10.905-3.435a2.224 2.224 0 0 1-1.202-1.89v-18.718a1.01 1.01 0 0 1 .43-.945a.833.833 0 0 1 .944.086a45.879 45.879 0 0 0 13.223 5.238a54.53 54.53 0 0 0 12.537 1.632c4.006 0 6.954-.516 8.844-1.546a4.855 4.855 0 0 0 2.834-4.465c0-1.486-.859-2.918-2.576-4.293c-.72-.576-1.753-1.203-3.097-1.88l-.643-.316l-.686-.323l-.36-.164l-.754-.334a66.85 66.85 0 0 0-.393-.17l-.82-.344l-.427-.175l-.886-.355l-.46-.18l-.953-.367l-.997-.373a63.13 63.13 0 0 1-15.199-7.728a26.21 26.21 0 0 1-8.071-9.016a23.682 23.682 0 0 1-2.49-10.905a24.62 24.62 0 0 1 3.606-12.88c2.7-4.27 6.576-7.67 11.163-9.788c5.037-2.517 11.333-3.777 18.89-3.779a83.61 83.61 0 0 1 13.224.945a34.663 34.663 0 0 1 9.206 2.49c.473.136.854.485 1.03.945c.117.419.174.852.172 1.288v17.345c.025.41-.172.803-.515 1.03a1.66 1.66 0 0 1-1.478 0Z"
                          />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="50"
                          height="50"
                          viewBox="0 0 256 250"
                        >
                          <rect
                            width="256"
                            height="249.6"
                            fill="#300"
                            rx="42.5"
                          />
                          <path
                            fill="#FF9A00"
                            d="M124.054 149.79h-39.67l-8.072 25.073a2.02 2.02 0 0 1-2.061 1.546H54.158c-1.145 0-1.546-.63-1.202-1.89l34.347-98.918c.343-1.03.687-2.203 1.03-3.52c.45-2.292.68-4.62.687-6.955a1.063 1.063 0 0 1 1.202-1.203h27.306c.8 0 1.258.287 1.374.86l38.983 109.908c.344 1.146 0 1.719-1.03 1.718h-22.326a1.587 1.587 0 0 1-1.717-1.202l-8.758-25.417Zm-33.488-21.638H117.7l-.387-1.277l-.621-2.022l-.443-1.42l-.707-2.236l-1.503-4.707l-1.322-4.173l-3.433-10.87a334.433 334.433 0 0 1-2.46-8.138l-.628-2.21l-.734-2.613l-1.12-4.05l-.21-.763h-.171a138.781 138.781 0 0 1-3.136 12.23l-2.548 8.196l-1.402 4.528l-1.415 4.584c-.256.828-.51 1.647-.765 2.456l-.76 2.398l-.756 2.342l-.752 2.284l-.748 2.227c-.248.733-.496 1.456-.743 2.17l-.37 1.064Zm90.501-46.025a12.456 12.456 0 0 1-9.445-3.778a13.586 13.586 0 0 1-3.607-9.789a12.6 12.6 0 0 1 3.864-9.53a13.27 13.27 0 0 1 9.165-3.697l.366.004c4.122 0 7.357 1.23 9.704 3.692a13.258 13.258 0 0 1 3.52 9.531a13.412 13.412 0 0 1-3.692 9.79a13.177 13.177 0 0 1-9.508 3.79l-.367-.013Zm-11.85 92.564V92.603c0-1.03.456-1.546 1.374-1.546h21.124c.915 0 1.373.515 1.374 1.546v82.088c0 1.146-.458 1.719-1.374 1.718h-20.952c-.976 0-1.49-.514-1.541-1.542l-.005-.176Z"
                          />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="50"
                          height="50"
                          viewBox="0 0 256 250"
                        >
                          <rect
                            width="256"
                            height="249.6"
                            fill="#470137"
                            rx="42.5"
                          />
                          <path
                            fill="#FF61F6"
                            d="m134.578 65.64l-31.943 52.723l34.175 55.985c.22.392.281.852.172 1.288c-.053.186-.167.232-.342.239l-.194-.003l-.236-.006c-.128 0-.271.006-.43.032h-24.64l-.484-.008c-1.328-.035-2.285-.225-2.868-1.199a3291.718 3291.718 0 0 0-6.87-13.309a469.933 469.933 0 0 0-6.34-11.767l-.958-1.714a782.954 782.954 0 0 1-7.642-13.91h-.172a532.443 532.443 0 0 1-7.127 13.738c-2.463 4.58-4.896 9.132-7.299 13.653a607.72 607.72 0 0 1-7.384 13.481c-.405.91-1.078 1.1-2.015 1.131l-.39.006H38.064l-.102.003l-.336.03c-.187.011-.299-.029-.335-.311a1.725 1.725 0 0 1 .258-1.202l33.144-54.44l-32.286-54.61c-.343-.456-.4-.828-.172-1.116a1.25 1.25 0 0 1 1.031-.43H63.48a3.59 3.59 0 0 1 1.546.258c.41.233.763.556 1.03.945c2.061 4.58 4.351 9.16 6.87 13.738a736.524 736.524 0 0 0 7.642 13.567a191.963 191.963 0 0 1 7.127 13.567h.172a506.673 506.673 0 0 1 6.955-13.738c2.345-4.465 4.75-8.96 7.212-13.482a620.843 620.843 0 0 0 7.127-13.48c.132-.424.368-.808.687-1.117a2.503 2.503 0 0 1 1.374-.258h22.497a.984.984 0 0 1 .95 1.634l-.09.084Zm50.47 112.473l-1.184.013a53.208 53.208 0 0 1-22.927-4.808a36.45 36.45 0 0 1-16.057-14.512c-3.791-6.296-5.737-14.142-5.835-23.535l-.004-.765a44.844 44.844 0 0 1 5.84-22.497a42.866 42.866 0 0 1 16.412-16.166l.589-.32c7.44-4.122 16.428-6.183 26.962-6.183l.46.005l.526.017l.59.026l.656.038l1.102.078l1.248.1l.913.08V55.852c0-.8.344-1.202 1.03-1.202h21.639a.91.91 0 0 1 1.03 1.03v101.495c0 1.704.066 3.54.198 5.504l.32 4.455l.17 2.577a1.775 1.775 0 0 1-1.031 1.718a85.184 85.184 0 0 1-17.345 5.151a93.12 93.12 0 0 1-15.302 1.533Zm9.291-21.282v-46.883a17.035 17.035 0 0 0-2.833-.515a34.25 34.25 0 0 0-3.521-.172a26.52 26.52 0 0 0-12.021 2.748a23.472 23.472 0 0 0-9.016 7.9c-2.267 3.316-3.44 7.646-3.517 12.99l-.004.577a30.284 30.284 0 0 0 1.803 10.99a20.894 20.894 0 0 0 4.81 7.557a18.311 18.311 0 0 0 7.212 4.293a28.277 28.277 0 0 0 8.844 1.375c1.602 0 3.09-.058 4.465-.173a18.38 18.38 0 0 0 3.248-.54l.53-.147Z"
                          />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="50"
                          height="50"
                          viewBox="0 0 256 250"
                        >
                          <rect
                            width="256"
                            height="249.6"
                            fill="#00005B"
                            rx="42.5"
                          />
                          <path
                            fill="#99F"
                            d="M102.843 149.333H63.172L55.1 174.454a2.02 2.02 0 0 1-1.901 1.547L32.947 176c-1.146 0-1.547-.63-1.202-1.89l34.347-98.509l.343-1.035l.114-.354l.23-.74c.114-.382.228-.787.343-1.226c.45-2.291.68-4.62.687-6.955a1.063 1.063 0 0 1 1.202-1.202h27.306c.8 0 1.257.286 1.374.859l38.983 109.335c.343 1.145 0 1.718-1.03 1.717h-22.326a1.587 1.587 0 0 1-1.717-1.202l-8.758-25.465Zm-33.488-21.181h27.134l-.387-1.277l-.621-2.022l-.909-2.896l-1.745-5.467l-1.662-5.254l-3.092-9.789a335.624 335.624 0 0 1-2.46-8.138l-.878-3.096l-.948-3.393l-.866-3.147h-.172a138.494 138.494 0 0 1-3.136 12.23l-1.16 3.723l-2.79 9l-1.414 4.585c-.256.828-.51 1.647-.765 2.456l-.76 2.398l-.756 2.342l-.752 2.284l-.748 2.227c-.372 1.1-.744 2.177-1.113 3.234Zm130.518 11.404h-33.831a24.126 24.126 0 0 0 3.263 9.461a17.669 17.669 0 0 0 7.813 6.44a32.629 32.629 0 0 0 13.653 2.676a61.87 61.87 0 0 0 11.077-1.216a40.825 40.825 0 0 0 9.523-2.482c.572-.456.86-.172.86.858v16.315c.028.445-.061.889-.259 1.288c-.196.312-.46.576-.772.773a43.673 43.673 0 0 1-10.64 3.17a75.478 75.478 0 0 1-15.113 1.287c-7.876 0-14.515-1.182-19.917-3.545l-.52-.233a36.423 36.423 0 0 1-13.394-10.132a39.677 39.677 0 0 1-7.385-13.996A55.127 55.127 0 0 1 142 134.678a54.141 54.141 0 0 1 2.662-16.916a44.186 44.186 0 0 1 7.985-14.597a38.361 38.361 0 0 1 12.88-10.133c5.037-2.46 10.991-3.343 17.86-3.343a38.757 38.757 0 0 1 16.573 3.263a29.208 29.208 0 0 1 11.248 8.495a39.057 39.057 0 0 1 6.354 12.107a43.145 43.145 0 0 1 2.061 13.052c0 2.52-.086 4.81-.257 6.87l-.153 1.764l-.16 1.674l-.095.848a33.26 33.26 0 0 1-.022.179a1.556 1.556 0 0 1-1.545 1.374l-.471.01l-.587.03l-.457.033l-1.068.091l-.938.093c-.255.027-.52.052-.795.075l-.851.067l-.909.06l-.965.05l-1.022.043l-.533.018l-1.107.03c-1.095.027-2.217-.041-3.368-.125l-1.746-.128a39.834 39.834 0 0 0-2.7-.106Zm-33.831-15.645h23.386l1.992-.013l1.354-.019l.877-.02l.984-.034a6 6 0 0 0 2.49-.825v-1.03a13.74 13.74 0 0 0-.686-3.95a14.03 14.03 0 0 0-13.91-9.79a14.918 14.918 0 0 0-14.169 8.072a24.842 24.842 0 0 0-2.318 7.61Z"
                          />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="50"
                          height="50"
                          viewBox="0 0 128 128"
                        >
                          <path
                            fill="#235785"
                            d="M66.332 70.032c.24-4.242 2.327-7.987 5.485-10.634c3.094-2.602 7.248-4.193 11.809-4.193c4.537 0 8.69 1.59 11.78 4.193c3.163 2.647 5.237 6.392 5.485 10.634c.24 4.35-1.523 8.41-4.605 11.417c-3.158 3.05-7.627 4.977-12.66 4.977c-5.037 0-9.526-1.915-12.664-4.977c-3.094-3.006-4.853-7.044-4.606-11.397zm0 0"
                          />
                          <path
                            fill="#e87500"
                            d="M39.245 79.002c.028 1.66.564 4.89 1.36 7.404c1.682 5.336 4.537 10.273 8.49 14.599c4.062 4.465 9.074 8.055 14.85 10.61c6.073 2.67 12.665 4.037 19.505 4.037c6.84-.009 13.432-1.4 19.504-4.102c5.776-2.582 10.79-6.168 14.85-10.657c3.974-4.374 6.82-9.307 8.491-14.647a37 37 0 0 0 1.595-8.163c.208-2.69.12-5.405-.263-8.12a37.535 37.535 0 0 0-5.417-14.714c-2.574-4.15-5.916-7.76-9.89-10.813l.012-.004l-39.955-30.506c-.036-.028-.068-.056-.104-.08c-2.619-2.002-7.044-1.994-9.91.008c-2.914 2.031-3.25 5.385-.656 7.496l-.012.008l16.682 13.484l-50.789.051h-.068c-4.197.004-8.239 2.739-9.03 6.213c-.82 3.521 2.035 6.46 6.412 6.46l-.008.016l25.736-.048l-46.05 34.99c-.056.044-.12.088-.176.132C.069 85.95-1.33 91.446 1.4 94.9c2.778 3.522 8.666 3.546 13.047.02l25.058-20.41s-.368 2.758-.336 4.397zm64.56 9.219c-5.168 5.228-12.416 8.21-20.227 8.21c-7.831.012-15.079-2.918-20.248-8.142c-2.526-2.559-4.377-5.473-5.528-8.591a22.202 22.202 0 0 1-1.271-9.602a22.446 22.446 0 0 1 2.778-9.039c1.507-2.714 3.59-5.18 6.14-7.267c5.033-4.058 11.42-6.28 18.1-6.28c6.709-.008 13.097 2.174 18.13 6.236c2.55 2.075 4.625 4.529 6.14 7.243a22.302 22.302 0 0 1 2.774 9.043a22.313 22.313 0 0 1-1.271 9.598c-1.147 3.142-3.002 6.056-5.533 8.615zm0 0"
                          />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="50"
                          height="50"
                          viewBox="0 0 128 128"
                        >
                          <path
                            fill="#0acf83"
                            d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129zm0 0"
                          />
                          <path
                            fill="#a259ff"
                            d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5zm0 0"
                          />
                          <path
                            fill="#f24e1e"
                            d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5zm0 0"
                          />
                          <path
                            fill="#ff7262"
                            d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0"
                          />
                          <path
                            fill="#1abcfe"
                            d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5S76.6 43 88.5 43S110 52.6 110 64.5zm0 0"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <section id="projects" className="">
          <div
            className={`${containerClass} flex flex-col  gap-10  rounded-[2rem] border-opacity-50 relative `}
          >
            <div className="flex flex-co md:flex-row gap-8 justify-between w-full items-center">
              <h1
                className={`${bigText} tracking-tighter text-[#ffffff] text-center md:text-left`}
              >
                Selected works
              </h1>

              {/* <div className=" flex h-fit justify-start">
                <div className=" space-x-4 w-fit flex p-2 rounded-lg border-2 border-[#ffffff] border-opacity-60 bg-opacity-5">
                  <button
                    onClick={() => setDisplay("development")}
                    className={`  px-4 py-2 ${
                      display === "development"
                        ? "bg-[hsl(234,59%,60%)] text-white"
                        : " opacity-50 text-[#ffffff]"
                    } border-white rounded-lg flex items-center gap-2`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill={display === "development" ? "#ffffff" : "#201e1e"}
                      viewBox="0 0 256 256"
                    >
                      <path d="M230.91,172A8,8,0,0,1,228,182.91l-96,56a8,8,0,0,1-8.06,0l-96-56A8,8,0,0,1,36,169.09l92,53.65,92-53.65A8,8,0,0,1,230.91,172ZM220,121.09l-92,53.65L36,121.09A8,8,0,0,0,28,134.91l96,56a8,8,0,0,0,8.06,0l96-56A8,8,0,1,0,220,121.09ZM24,80a8,8,0,0,1,4-6.91l96-56a8,8,0,0,1,8.06,0l96,56a8,8,0,0,1,0,13.82l-96,56a8,8,0,0,1-8.06,0l-96-56A8,8,0,0,1,24,80Zm23.88,0L128,126.74,208.12,80,128,33.26Z"></path>
                    </svg>
                    <span>Projects</span>
                  </button>
                  <button
                    onClick={() => setDisplay("visuals")}
                    className={`  px-4 py-2  ${
                      display === "visuals"
                        ? "bg-[hsl(234,59%,60%)] text-white"
                        : " opacity-50 text-[#ffffff] animate-bounce"
                    } border-white rounded-lg flex items-center gap-2`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill={display === "visuals" ? "#ffffff" : "#ffffff"}
                      viewBox="0 0 256 256"
                    >
                      <path d="M120,56v48a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40h48A16,16,0,0,1,120,56Zm80-16H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm-96,96H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm96,0H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,200,136Z"></path>
                    </svg>
                    <span>Playground</span>
                  </button>
                </div>
              </div> */}
            </div>

            <div className=" space-y-8 ">
              {display === "visuals" ? (
                <div className=" grid grid-cols-2 md:grid-cols-4 w-full min-h-[100vh] gap-4  md:gap-8 cursor-pointer">
                  {archieveLinks.map((archieves, index) => (
                    <Image
                      key={index}
                      onClick={() => openDisplay(index)}
                      className=" object-cover aspect-square rounded-lg grayscale hover:grayscale-0  duration-300 ease-out"
                      publicId={archieves.imageUrl}
                    />
                  ))}
                  {activeLinkIndex !== null && (
                    <DisplaySomething
                      linkTo={archieveLinks[activeLinkIndex].link}
                      context={archieveLinks[activeLinkIndex].context}
                      toDisplay={archieveLinks[activeLinkIndex].content}
                      reverse={reverse}
                    />
                  )}
                </div>
              ) : (
                <div className="  h-full grid grid-cols-fluid gap-4">
                  {selected.slice(0, 4).map((select, index) => (
                    <>
                      <div className="work-animate h-full">
                        <WorkItem index={index} select={select} />
                      </div>
                      {/* <div className=" h-[20vh]"></div> */}
                    </>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        <section className=" h-full ">
          <div className={`${containerClass} h-full`}></div>
        </section>

        <section id="about">
          <div
            className={`${containerClass} flex justify-around py-[20vh] flex-col md:flex-row gap-10`}
          >
            <div className=" text-white">
              <h2 className=" py-5">Hello 👋</h2>
              <p className="font-normal tracking-wide md:tracking-tight text-white text-[1.5rem] max-w-lg">
                I am kelvin and I am glad that you are here. I am a creative
                proffesional specialised in{" "}
                <span className="bg-green-500">Frontend Web Development</span>{" "}
                and <span className="bg-green-500">Graphic Design</span> with
                more than 3+ years of experience in both fields. I am passionate
                about the feild of coding and programming and I am willing to do
                anything to get the job done.
                <br /> <br /> Outside of design and development, you'll find
                that I am a huge gamer🎮. I also enjoy playing basketball🏀 and
                also have interest in other things
              </p>
            </div>
            <div>
              <img
                className="md:max-w-[350px]  object-cover"
                src="https://res.cloudinary.com/base-data/image/upload/v1700740147/images/m3_wwdjt2.jpg"
                alt=""
              />
            </div>
          </div>
        </section>

        <section>
          <div
            className={`${containerClass} flex flex-col justify-around py-[20vh]  gap-10`}
          >
            <h1 className=" masked text-left relative text-[#201e1e] text-[16vw] md:text-[12vw] 2xl:text-[7.5vw] md:tracking-[-.6rem] leading-[100%] text-transparent bg-[url('https://res.cloudinary.com/base-data/video/upload/v1697876211/images/test_bgq729.mp4')]">
              Lets work together
            </h1>
            <div className="flex gap-5 flex-col md:flex-row">
              <BtnDef
                linkTo={"mailto:kelvinohemeng59@gmail.com"}
                target
                className={
                  "w-full text-black hover:text-white py-10 bg-gray-100 hover:bg-green-600"
                }
              >
                Get in touch
              </BtnDef>
              <BtnDef
                linkTo={"https://bit.ly/resume-kelvin"}
                target
                className={
                  "w-full border-white border-[1px] bg-[#232323ec] border-opacity-40 text-white py-10"
                }
              >
                Resume
              </BtnDef>
            </div>
          </div>
        </section>
      </motion.div>
      {footer}
    </>
  );
};

export default transition(Home);
