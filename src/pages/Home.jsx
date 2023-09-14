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
import { gsap } from "gsap";
import {
  GsapScrollX,
  GsapScrollXPin,
  GsapScrollZoom,
} from "../components/GsapScroll";
// import { gsap } from "gsap";
import {
  PlayCircle,
  ArrowElbowDownRight,
  ArrowRight,
  Cube,
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { BtnDefNative, BtnDef, BtnDefNativeNoLink } from "../components/BtnDef";
import { DisplaySomething } from "../components/DisplaySomething.jsx";
import { PortArc } from "../components/PortArc.jsx";

const Home = ({ footer, selected }) => {
  const [position, setPosition] = useState({ x: 0 });
  const [activeLinkIndex, setActiveLinkIndex] = useState(null);
  const openDisplay = (index) => {
    setActiveLinkIndex(index);
  };
  const reverse = () => {
    setActiveLinkIndex(null);
  };
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const imgRef = useRef(null);

  const archieveLinks = [
    {
      imageUrl:
        "https://res.cloudinary.com/base-data/image/upload/v1693439614/images/bottle.png",
      content: [
        {
          image:
            "https://res.cloudinary.com/base-data/image/upload/v1693439614/images/bottle.png",
        },
      ],
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
    },
    {
      imageUrl:
        "https://res.cloudinary.com/base-data/image/upload/q_40/v1691740360/images/shoe_iipc7s.webp",
      content: [
        {
          image:
            "https://res.cloudinary.com/base-data/image/upload/q_40/v1691740360/images/shoe_iipc7s.webp",
        },
      ],
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
  //   const handleMouseMove = (event) => {
  //     const slideImage = imgRef.current;

  //     const x = (event.clientX * 500) / window.innerHeight + "px";

  //     slideImage.style.left = x;
  //     slideImage.style.transform = `translate(${x},)`;
  //   };
  //   window.addEventListener("mousemove", handleMouseMove);
  //   return () => {
  //     window.removeEventListener("mousemove", handleMouseMove);
  //   };
  // }, []);
  useEffect(() => {
    // const nav = document.querySelectorAll(".body-nav");
    const sections = document.querySelectorAll(".show-sections");
    const images = document.querySelector(".show-images");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Get the data-image attribute from the section
            const dataImage = entry.target.getAttribute("data-image");

            // Change the background image of the .show-images div
            images.style.backgroundImage = `url('${dataImage}')`;
            images.classList.add("animate-in");
          }
        });
      },
      { root: null, threshold: 0.8 }
    );
    sections.forEach((section) => {
      observer.observe(section);
    });
    // sections.forEach((section) => {
    //   const dataImage = section.getAttribute("data-image");
    //   section.addEventListener("mouseover", () => {
    //     images.style.backgroundImage = `url('${dataImage}')`;
    //   });
    // });
  }, []);
  useEffect(() => {
    const scrubUp = document.querySelectorAll(".ddp-text");
    const scrollWhat = document.querySelectorAll(".scrolls-what");
    // scrubUp.forEach((srubb) => {
    //   gsap.to(srubb, {
    //     // opacity: 0,
    //     y: -500,
    //     scrollTrigger: {
    //       trigger: srubb,
    //       start: "1000px center",
    //       end: "2000px center",
    //       // markers: true,
    //       scrub: 6,
    //     },
    //   });
    // });
    scrollWhat.forEach((what) => {
      gsap.from(what, {
        // opacity: 0,
        x: -500,
        opacity: 0,
        scrollTrigger: {
          trigger: what,
          start: "top center",
          end: "bottom center",
          // markers: true,
          scrub: 1,
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
    // registerVideo("#bound-four", "#bound-four video");
  });
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="relative"
      >
        {/* <section className=" w-full h-full home-bg"> */}
        {/* <div className=" container mx-auto px-4 py-10 pt-40 w-full flex flex-col md:justify-end ">
            <Reveal repeat trigger={<div className=" text-center" />}>
              <Tween
                from={{ y: "200px", opacity: "0" }}
                stagger={0.1}
                wrapper={<div className="overflow-hidden px-2" />}
              >
                <SplitChars
                  wrapper={
                    <h1
                      className=" text-[16vw] md:text-[16vw] tracking-[0rem] md:tracking-[-0.2rem] md:leading-[20rem] text-white"
                      style={{
                        display: "inline-block",
                        fontWeight: "600",
                      }}
                    />
                  }
                >
                  Designbox
                </SplitChars>
              </Tween>
              <div>
                <h3 className=" text-xl md:text-[2vw]  uppercase font-bold">
                  Frontend Web Developer / Designer
                </h3>
              </div>
              <div className=" flex justify-center my-10 opacity-80">
                <BtnDefNative linkTo="#next" pointDown>
                  keep scrolling
                </BtnDefNative>
              </div>
            </Reveal>
          </div> */}
        {/* <div className=" pt-[20vh] mx-auto md:pt-0 " id="next"> */}
        {/* <div className="flex flex-col md:flex-row justify-center h-full  md:h-[90vh] max-w-[90vw]  bg-[#dcd9d60d]">
                <div className="left-abt flex flex-col gap-8 justify-between flex-1 p-4">
                  <ScrollTrigger
                    start="-200px center"
                    end="800px center"
                    scrub={1.5}
                  >
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
                              color: "white",
                            }}
                            className="ab-tag lg:text-[2rem]"
                          />
                        }
                      >
                        Hi, I am kelvin, I build brands and website with the
                        vision of the future
                      </SplitWords>
                    </Tween>
                  </ScrollTrigger>
                  <div className=" flex flex-col md:flex-row gap-5">
                    <BtnDef linkTo="/about" showIcon>
                      Read more
                    </BtnDef>
                    <BtnDef
                      linkTo="https://bit.ly/resume-kelvin"
                      showIcon
                      target
                    >
                      Download resume
                    </BtnDef>
                  </div>
                </div>
                <div className="prof-img h-full flex-1 ">
                  <Image
                    className=" w-full h-full object-cover"
                    quality="50"
                    publicId="https://res.cloudinary.com/base-data/image/upload/q_50/v1693450299/images/about-img.jpg"
                  />
                </div>
              </div> */}
        {/* <GsapScrollZoom>

              <div className=" h-screen">
                <h1 className=" text-[16vw] md:text-[16vw] tracking-[0rem] md:tracking-[-0.2rem] md:leading-[20rem] text-white">
                  DESIGNBOX
                </h1>
              </div>
            </GsapScrollZoom> */}
        {/* </div> */}
        {/* </section> */}
        <section className="">
          <div className="container relative mx-auto px4 h-screen text-center flex flex-col justify-center">
            <div>
              <img
                src="https://res.cloudinary.com/base-data/image/upload/q_50/v1693450299/images/about-img.png"
                alt=""
                className="block md:hidden px-4 max-w-full aspect-[3/2] object-cover object-top grayscale land-images"
              />
            </div>
            <div className=" w-full relative -space-y-10">
              <h1 className=" z-10 relative text-[8vw] leading-[6rem] md:leading-[15rem] md:text-[10vw] tracking-[0rem] md:tracking-[-0.2rem]  text-white">
                <em
                  style={{ fontStyle: "normal" }}
                  className=" bg-[#bfea88] text-[#111111]"
                >
                  Frontend
                </em>{" "}
                Developer
              </h1>
              <h1 className=" z-10 relative text-[8vw] leading-[6rem] md:leading-[15rem] md:text-[10vw] tracking-[0rem] md:tracking-[-0.2rem]   text-white">
                <em
                  className=" font-normal normal text-[#bfea88]"
                  style={{ fontStyle: "normal" }}
                >
                  &
                </em>{" "}
                Graphic Designer
                <img
                  src="https://res.cloudinary.com/base-data/image/upload/q_50/v1693450299/images/about-img.png"
                  alt=""
                  className="absolute hidden md:block bottom-0 right-0 max-w-[250px] -z-30 grayscale land-images"
                />
              </h1>
            </div>
            <div className=" space-y-10 flex flex-col items-center">
              <p className="heading-tags-alt relative text-center max-w-[80%] md:max-w-[50%] cursor-pointer text-white md:leading-relaxed">
                Hi, I am kelvin a graphic designer and frontend developer
                <br /> <br className="block md:hidden" />
                {/* with design and code */}
              </p>
              <div className="flex gap-5 justify-center py-2 ">
                <BtnDef showIcon linkTo="mailto:kelvinohemeng59@gmail.com">
                  Hire me !
                </BtnDef>
                <BtnDefNative showIcon linkTo="#projects">
                  Projects
                </BtnDefNative>
              </div>
            </div>
          </div>
        </section>
        {/* <section className=" global-padding">
          <ScrollTrigger start="-200px center" end="800px center" scrub={1.5}>
            <div className="relative overflow-hidden h-[50vh]">
              <Tween
                to={{
                  x: "-80%",
                }}
                wrapper={
                  <div
                    className="absolute scroll-text  p-2 text-[18vw] md:text-[12vw]"
                    style={{
                      width: "max-content",
                      display: "flex",
                      gap: "50px",
                      fontWeight: "600",
                      paddingBlock: "30px",
                    }}
                  />
                }
              >
                <h1 className="text-center">Designer Developer</h1>
                <h1 className="text-center">Designer Developer</h1>
                <h1 className="text-center">Designer Developer</h1>
                <h1 className="text-center">Designer Developer</h1>
              </Tween>
            </div>
          </ScrollTrigger>
        </section> */}

        <section className=" global-padding hidden md:block">
          <div id="bound-three" className="scroll-bound">
            <div className="content container mx-auto px-4 flex-col md:flex-row md:justify-between md:flex-end">
              <div className="vid flex justify-start">
                <video
                  className=" object-cover w-screen h-full grayscale-[1]"
                  muted
                  preload
                >
                  <source src="https://res.cloudinary.com/base-data/video/upload/c_scale,e_noise:17,q_60,w_428/v1693439142/images/0001-0130_addhza.ogv" />

                  <source src="https://res.cloudinary.com/base-data/video/upload/c_scale,e_noise:17,q_60,w_428/v1693439142/images/0001-0130_addhza.mp4" />
                </video>
              </div>
              <div className=" ddp">
                <div className="ddp-text  h-full flex flex-col items-start space-y-5 justify-center">
                  <h3 className="heading-tags-alt relative text-left md:max-w-[70%] cursor-pointer text-white">
                    A skillfully curated space where my talents and expertise
                    converge, giving rise to the epitome of creativity -
                    DesignBox.
                  </h3>
                  <BtnDef showIcon linkTo="/about">
                    Read more about me
                  </BtnDef>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className=" global-padding block md:hidden">
          <div className="content container space-y-5 mx-auto px-4 flex-col md:flex-row md:justify-between md:flex-end">
            <div className="vid flex justify-start">
              <video
                className=" object-cover w-screen h-full grayscale-[1]"
                muted
                preload="auto"
                autoPlay
                loop
              >
                <source src="https://res.cloudinary.com/base-data/video/upload/c_scale,e_noise:17,q_60,w_428/v1693439142/images/0001-0130_addhza.mp4" />
                <source src="https://res.cloudinary.com/base-data/video/upload/c_scale,e_noise:17,q_60,w_428/v1693439142/images/0001-0130_addhza.webm" />
              </video>
            </div>
            <div className=" ddp">
              <div className="ddp-text  h-full flex flex-col items-start space-y-5 justify-center">
                <h3 className="heading-tags-alt relative text-left md:max-w-[70%] cursor-pointer text-white">
                  A skillfully curated space where my talents and expertise
                  converge, giving rise to the epitome of creativity -
                  DesignBox.
                </h3>
                <BtnDef showIcon linkTo="/about">
                  Read more about me
                </BtnDef>
              </div>
            </div>
          </div>
        </section>
        <div className="container mx-auto px-4 w-full bg-white h-[0.1px] bg-opacity-50"></div>
        {/* services section */}
        <section className=" global-padding">
          <div className="container flex flex-col md:flex-row mx-auto px-4 gap-20 ">
            <div className=" flex-1 flex flex-col justify-between md:items-end md:order-last relative">
              <div className="relative h-full">
                <h1 className="scroll-text sticky top-0 py-[5vh] text-[18vw] mx-2 md:text-[15vw] tracking-[0rem] md:tracking-[-0.2rem]">
                  Skills
                </h1>
              </div>
              <BtnDefNative linkTo="#projects" pointDown>
                Featured Works
              </BtnDefNative>
            </div>
            <div className=" flex-1 w-full text-white">
              <h2 className=" text-white text-5xl py-5 scrolls-what border-y-[1px] border-white border-opacity-25 uppercase">
                HTML
              </h2>
              <h2 className=" text-white text-5xl py-5 scrolls-what border-y-[1px] border-white border-opacity-25 uppercase">
                CSS
              </h2>
              <h2 className=" text-white text-5xl py-5 scrolls-what border-y-[1px] border-white border-opacity-25 uppercase">
                SASS
              </h2>
              <h2 className=" text-white text-5xl py-5 scrolls-what border-y-[1px] border-white border-opacity-25 uppercase">
                Tailwind CSS
              </h2>
              <h2 className=" text-white text-5xl py-5 scrolls-what border-y-[1px] border-white border-opacity-25 uppercase">
                JavaScript
              </h2>
              <h2 className=" text-white text-5xl py-5 scrolls-what border-y-[1px] border-white border-opacity-25 uppercase">
                React
              </h2>
              <h2 className=" text-white text-5xl py-5 scrolls-what border-y-[1px] border-white border-opacity-25 uppercase">
                GSAP
              </h2>
              <h2 className=" text-white text-5xl py-5 scrolls-what border-y-[1px] border-white border-opacity-25 uppercase">
                Framer motion
              </h2>
              <h2 className=" text-white text-5xl py-5 scrolls-what border-y-[1px] border-white border-opacity-25 uppercase">
                ThreeJs
              </h2>
              <h2 className=" text-white text-5xl py-5 scrolls-what border-y-[1px] border-white border-opacity-25 uppercase">
                CMS
              </h2>
              <h2 className=" text-white text-5xl py-5 scrolls-what border-y-[1px] border-white border-opacity-25 uppercase">
                Animation
              </h2>
              <h2 className=" text-white text-5xl py-5 scrolls-what border-y-[1px] border-white border-opacity-25 uppercase">
                Motion Graphhics
              </h2>
              <h2 className=" text-white text-5xl py-5 scrolls-what border-y-[1px] border-white border-opacity-25 uppercase">
                Graphic Design
              </h2>
            </div>
          </div>
        </section>
        {/* project section */}
        {/* <div
          className=" h-full global-padding container mx-auto px-4"
          id="projects"
        >
          <GsapScrollXPin>
            {selected.map((item, index) => (
              <div
                className="images-box p-2 
              "
              >
                <Link
                  key={index}
                  to={`/projects/${item.title}`}
                  className=" relative box w-[80vw] h-[80vh] flex flex-col md:flex-row items-start  md:justify-stretch md:items-end  aspect-square  overflow-hidden"
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
                              className="tag title text-6xl text-center  "
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
                          explore project
                        </BtnDef>
                      </Tween>
                    </Reveal>
                  </div>
                </Link>
              </div>
            ))}
          </GsapScrollXPin>
          <Reveal trigger={<div className=" text-left" />}>
            <Tween
              from={{ y: "200px", opacity: "0" }}
              stagger={0.1}
              wrapper={<div className="overflow-hidden px-2" />}
            >
              <SplitWords
                wrapper={
                  <h1
                    className=" max-w-max  text-[18vw] mx-2 md:text-[18vw] tracking-[0rem] md:tracking-[-0.2rem] text-white"
                    style={{
                      fontWeight: "600",
                      gap: "50px",
                      display: "inline-block",
                    }}
                  />
                }
              >
                Works
              </SplitWords>
            </Tween>
          </Reveal>
          <div className="space-y-20">
            <div className="images-box overflow-hidden   ">
              <Link
                to={`/projects/${selected[0].title}`}
                className=" relative box w-full h-fit flex flex-col md:flex-row items-start justify-center  md:justify-stretch md:items-end   overflow-hidden"
              >
                <div className=" flex-1 w-full overflow-hidden">
                  <Image
                    className="  aspect-square object-center"
                    publicId={selected[0].imageUrl}
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
                        {selected[0].title}
                      </SplitWords>
                    </Tween>
                    <div className="wid-tags">
                      {selected[0].category.map((cat, index) => (
                        <span key={index}>{cat}</span>
                      ))}
                    </div>
                    <Tween
                      from={{ y: "200px" }}
                      stagger={0.1}
                      ease="circIn"
                      wrapper={<div />}
                    >
                      <BtnDef
                        showIcon
                        linkTo={`/projects/${selected[0].title}`}
                      >
                        explore project
                      </BtnDef>
                    </Tween>
                  </Reveal>
                </div>
              </Link>
            </div>
            <div className="images-box overflow-hidden   ">
              <Link
                to={`/projects/${selected[1].title}`}
                className=" relative box w-full h-fit flex flex-col md:flex-row items-start justify-center  md:justify-stretch md:items-end   overflow-hidden"
              >
                <div className=" flex-1 w-full overflow-hidden">
                  <Image
                    className="  aspect-square object-center"
                    publicId={selected[1].imageUrl}
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
                        {selected[1].title}
                      </SplitWords>
                    </Tween>
                    <div className="wid-tags">
                      {selected[1].category.map((cat, index) => (
                        <span key={index}>{cat}</span>
                      ))}
                    </div>
                    <Tween
                      from={{ y: "200px" }}
                      stagger={0.1}
                      ease="circIn"
                      wrapper={<div />}
                    >
                      <BtnDef
                        showIcon
                        linkTo={`/projects/${selected[1].title}`}
                      >
                        explore project
                      </BtnDef>
                    </Tween>
                  </Reveal>
                </div>
              </Link>
            </div>
          </div>
        </div> */}

        <section
          className=" relative bg-primary w-screen h-full py-[5rem] global-padding"
          id="projects"
        >
          <ScrollTrigger start="-600px center" end="900px center" scrub={1.5}>
            <div className="relative h-full py-[0vh] md:py-[10vh] my-[10vh] overflow-hidden bg-[#bfea88] ">
              <Tween
                to={{
                  x: "-80%",
                }}
                wrapper={
                  <div
                    className="scroll-text text-[18vw] mx-2 md:text-[15vw] tracking-[0rem] md:tracking-[-0.2rem] "
                    style={{
                      width: "max-content",
                      display: "flex",
                      gap: "50px",
                      fontWeight: "600",
                      paddingBlock: "0px",
                    }}
                  />
                }
              >
                <h1 className="">Selected</h1>
                <h1 className="">Selected</h1>
                <h1 className="">Selected</h1>
                <h1 className="">Selected</h1>
              </Tween>
            </div>
          </ScrollTrigger>
          <div className="container mx-auto px-4">
            <div className=" w-full bg-white h-[0.1px] bg-opacity-50"></div>

            <div className="left-side grid md:grid-cols-2 relative">
              <div className="ids relative z-20  h-full ">
                <div
                  data-image={selected[0].imageUrl}
                  className="show-sections flex flex-col justify-center min-h-[50vh] space-y-3"
                >
                  <h1 className=" text-[15vw] md:text-[5vw] py-10 leading-[4rem] text-white">
                    {selected[0].title}
                  </h1>
                  <div className="space-y-2">
                    <div className="wid-tags">
                      {selected[0].category.map((cat, index) => (
                        <span key={index}>{cat}</span>
                      ))}
                    </div>
                    <div className=" flex gap-3">
                      <BtnDef
                        showIcon
                        linkTo={`/projects/${selected[0].title}`}
                      >
                        explore project
                      </BtnDef>
                      <BtnDef showIcon linkTo={selected[0].live}>
                        See live
                      </BtnDef>
                    </div>
                  </div>
                </div>
                <div
                  data-image={selected[1].imageUrl}
                  className="show-sections flex flex-col justify-center min-h-[50vh] space-y-3"
                >
                  <h1 className=" text-[15vw] md:text-[5vw] py-10 leading-[4rem] text-white">
                    {selected[1].title}
                  </h1>
                  <div className="space-y-2">
                    <div className="wid-tags">
                      {selected[1].category.map((cat, index) => (
                        <span key={index}>{cat}</span>
                      ))}
                    </div>
                    <div className=" flex gap-3">
                      <BtnDef
                        showIcon
                        linkTo={`/projects/${selected[1].title}`}
                      >
                        explore project
                      </BtnDef>
                      <BtnDef showIcon linkTo={selected[1].live}>
                        See live
                      </BtnDef>
                    </div>
                  </div>
                </div>
                <div
                  data-image={selected[2].imageUrl}
                  className="show-sections flex flex-col justify-center min-h-[50vh] space-y-3"
                >
                  <h1 className=" text-[15vw] md:text-[5vw] py-10 leading-[4rem] text-white">
                    {selected[2].title}
                  </h1>
                  <div className="space-y-2">
                    <div className="wid-tags">
                      {selected[2].category.map((cat, index) => (
                        <span key={index}>{cat}</span>
                      ))}
                    </div>
                    <div className=" flex gap-3">
                      <BtnDef
                        showIcon
                        linkTo={`/projects/${selected[2].title}`}
                      >
                        explore project
                      </BtnDef>
                      <BtnDef showIcon linkTo={selected[2].live}>
                        See live
                      </BtnDef>
                    </div>
                  </div>
                </div>
                <div
                  data-image={selected[3].imageUrl}
                  className="show-sections flex flex-col justify-center min-h-[50vh] space-y-3"
                >
                  <h1 className=" text-[15vw] md:text-[5vw] py-10 leading-[4rem] text-white">
                    {selected[3].title}
                  </h1>
                  <div className="space-y-2">
                    <div className="wid-tags">
                      {selected[3].category.map((cat, index) => (
                        <span key={index}>{cat}</span>
                      ))}
                    </div>
                    <div className=" flex gap-3">
                      <BtnDef
                        showIcon
                        linkTo={`/projects/${selected[3].title}`}
                      >
                        explore project
                      </BtnDef>
                      <BtnDef showIcon linkTo={selected[3].live}>
                        See live
                      </BtnDef>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right-side absolute w-fit right-0 h-full opacity-50 md:opacity-100">
                <div className="sticky top-[10%] w-[300px] md:w-[500px] pl-5">
                  <div className="  show-images max-w-full aspect-square object-cover bg-center bg-cover bg-no-repeat  " />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className=" global-padding hidden md:block">
          <div id="bound-four" className="scroll-bound">
            <div className="content container mx-auto px-4 flex-col md:flex-row-reverse md:justify-between md:flex-end">
              <div className="vid flex justify-end ">
                <video className=" object-cover " muted preload>
                  <source src="https://res.cloudinary.com/base-data/video/upload/c_scale,q_40,w_736/v1693160126/0827_fhzd3a.mp4" />
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
                    <h3 className=" heading-tags-alt relative text-left   cursor-pointer text-white">
                      What i mostly do in my free time, or when the meal is
                      ready. <br />
                      <em className=" text-xl">
                        watching anime, playing video games, or learning
                        something new
                      </em>
                    </h3>
                    <div className=" flex flex-col md:flex-row gap-5">
                      <BtnDefNative linkTo="#archieves" pointDown>
                        Archives
                      </BtnDefNative>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className=" global-padding block md:hidden">
          <div className="content container space-y-5 mx-auto px-4 flex-col md:flex-row md:justify-between md:flex-end">
            <div className="vid flex justify-start">
              <video
                className=" object-cover w-screen h-full grayscale-[1]"
                muted
                preload="auto"
                autoPlay
                loop
              >
                <source src="https://res.cloudinary.com/base-data/video/upload/c_scale,q_40,w_736/v1693160126/0827_fhzd3a.mp4" />
              </video>
            </div>
            <div className=" ddp">
              <div className="ddp-text space-y-5">
                <h3 className=" heading-tags-alt relative text-left   cursor-pointer text-white">
                  What i mostly do on my free time, or when the meal is ready.
                  <br />
                  <em className=" text-xl">
                    watching anime, playing video games, or learning something
                    new
                  </em>
                </h3>
                <RevealNative className="cursor-pointer">
                  <BtnDefNative linkTo="#archieves" pointDown>
                    Archieves
                  </BtnDefNative>
                </RevealNative>
              </div>
            </div>
          </div>
        </section> */}

        <div
          className=" container relative mx-auto px-4  h-full flex flex-col items-center justify-stretch mt-[30vh]"
          id="archieves"
        >
          <ScrollTrigger start="-600px center" end="900px center" scrub={1.5}>
            <div className="relative h-full py-[0vh] md:py-[10vh] my-[10vh] skew-y-12 overflow-hidden bg-[#bfea88] opacity-50">
              <Tween
                to={{
                  x: "-80%",
                }}
                wrapper={
                  <div
                    className="scroll-text text-[18vw] mx-2 md:text-[15vw] tracking-[0rem] md:tracking-[-0.2rem] "
                    style={{
                      width: "max-content",
                      display: "flex",
                      gap: "50px",
                      fontWeight: "600",
                      paddingBlock: "10px",
                    }}
                  />
                }
              >
                <h1 className="">Playground</h1>
                <h1 className="">Playground</h1>
                <h1 className="">Playground</h1>
                <h1 className="">Playground</h1>
              </Tween>
            </div>
          </ScrollTrigger>
          <ScrollTrigger start="-800px center" end="1000px center" scrub={1.5}>
            <div className="absolute top-0 h-fit py-[0vh] md:py-[10vh] my-[10vh] -skew-y-12 overflow-hidden bg-[#bfea88]">
              <Tween
                to={{
                  x: "-80%",
                }}
                wrapper={
                  <div
                    className="scroll-text text-[18vw] mx-2 md:text-[15vw] tracking-[0rem] md:tracking-[-0.2rem] "
                    style={{
                      width: "max-content",
                      display: "flex",
                      gap: "50px",
                      fontWeight: "600",
                      paddingBlock: "10px",
                    }}
                  />
                }
              >
                <h1 className="">Playground</h1>
                <h1 className="">Playground</h1>
                <h1 className="">Playground</h1>
                <h1 className="">Playground</h1>
              </Tween>
            </div>
          </ScrollTrigger>

          {/* <Reveal trigger={<div className=" text-left" />}>
            <Tween
            from={{ y: "200px", opacity: "0" }}
            stagger={0.1}
            wrapper={<div className="overflow-hidden px-2" />}
            >
              <SplitWords
                wrapper={
                  <h1
                    className=" max-w-max  text-[18vw] mx-2 md:text-[18vw] tracking-[0rem] md:tracking-[-0.2rem] text-white"
                    style={{
                      fontWeight: "600",
                      gap: "50px",
                      display: "inline-block",
                    }}
                  />
                }
              >
                Playground
              </SplitWords>
            </Tween>
            <div className="flex justify-center pb-10">
              <BtnDefNativeNoLink>click to view</BtnDefNativeNoLink>
            </div>
          </Reveal> */}
          <div
            className=" flex flex-wrap items-center justify-around w-full gap-5 "
            id="archieve"
          >
            {archieveLinks.map((archieves, index) => (
              <div
                key={index}
                className=" arc-items h-[300px] images-box p-2  cursor-pointer"
                onClick={() => openDisplay(index)}
              >
                <Image
                  className=" h-full object-cover grayscale hover:grayscale-0"
                  publicId={archieves.imageUrl}
                />
              </div>
            ))}
          </div>
          {activeLinkIndex !== null && (
            <DisplaySomething
              toDisplay={archieveLinks[activeLinkIndex].content}
              reverse={reverse}
            />
          )}
        </div>
        <section className="global-padding container mx-auto px-4">
          <Reveal trigger={<div className=" text-center" />}>
            <Tween
              from={{ y: "200px", opacity: "0" }}
              stagger={0.1}
              wrapper={<div className="overflow-hidden px-2" />}
            >
              <SplitWords
                wrapper={
                  <h2
                    className=" max-w-max uppercase  heading-tags mx-2 tracking-[0rem] md:tracking-[-0.2rem] text-white"
                    style={{
                      fontWeight: "600",
                      gap: "50px",
                      display: "inline-block",
                    }}
                  />
                }
              >
                Those that came before
              </SplitWords>
            </Tween>
          </Reveal>
          <div>
            {portArc.map((arc, index) => (
              <div key={index}>
                <PortArc src={arc.imageUrl} text={arc.text} linkTo={arc.Url} />
              </div>
            ))}
          </div>
        </section>
        <section className=" flex justify-center py-10">
          <BtnDefNativeNoLink target linkTo="#footer" pointDown>
            Reach out
          </BtnDefNativeNoLink>
        </section>
      </motion.div>
      {footer}
    </>
  );
};

export default transition(Home);
