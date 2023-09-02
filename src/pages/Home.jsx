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
  useEffect(() => {
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
  }, []);
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="relative"
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
                    <h1
                      className=" text-[16vw] md:text-[16vw] tracking-[0rem] md:tracking-[-0.2rem]"
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
              <div className=" flex justify-center my-10 opacity-50">
                <BtnDefNative linkTo="#next" pointDown>
                  keep scrolling
                </BtnDefNative>
              </div>
            </Reveal>
          </div>
          <div className=" pt-[20vh] mx-auto md:pt-0" id="next">
            <GsapScrollZoom>
              <div className="flex flex-col md:flex-row justify-center h-full  md:h-[90vh] max-w-[90vw]  bg-gray-300">
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
                            }}
                            className="ab-tag"
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
              </div>
            </GsapScrollZoom>
          </div>
        </section>
        <section className=" global-padding">
          <ScrollTrigger start="-200px center" end="800px center" scrub={1.5}>
            <div className="relative overflow-hidden h-[50vh]">
              <Tween
                to={{
                  x: "-80%",
                }}
                wrapper={
                  <div
                    className="absolute scroll-text overflow-hidden p-2 text-[18vw] md:text-[12vw]"
                    style={{
                      width: "max-content",
                      display: "flex",
                      gap: "50px",
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
            </div>
          </ScrollTrigger>
        </section>

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
                <div className="ddp-text  h-full flex items-end justify-end">
                  <h3 className="heading-tags-alt relative text-left md:max-w-[70%] cursor-pointer">
                    A skillfully curated space where my talents and expertise
                    converge, giving rise to the epitome of creativity -
                    DesignBox.
                  </h3>
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
              <div className="ddp-text  h-full flex items-end justify-end">
                <h3 className="heading-tags-alt relative text-left md:max-w-[70%] cursor-pointer">
                  A box where i have carefully horned my talent and skills,
                  coming to form the ultinmate box - designbox
                </h3>
              </div>
            </div>
          </div>
        </section>
        <div className="container mx-auto px-4 w-full bg-white h-[0.1px] bg-opacity-50"></div>
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
                  Building extensive web application with the latest tools, and
                  a knack for best practise implementation
                </p>
                <div>
                  <div className="wid-tags">
                    <span>CSS</span>
                    <span>HTML 5</span>
                    <span>tailwind</span>
                    <span>Scss</span>
                    <span>HTML</span>
                    <span>CSS 3</span>
                    <span>React</span>
                    <span>GSAP</span>
                    <span>Framer motion</span>
                    <span>JavaScript(ES6+)</span>
                    <span>threejs</span>
                    <span>Git</span>
                    <span>Github</span>
                  </div>
                </div>
              </div>
              <div ref={ref2} className="service1 basis-2/5 space-y-5 p-5">
                <div>
                  <Cube fill="white" weight="light" size={25} />
                  <h2 className=" ">Website with CMS</h2>
                </div>
                <p className=" text-sm">
                  As a multidiciplinary profession learning new tools to boost
                  productivity, using cms like framer and webflow can really
                  help speed up both the design and development
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
                  With my development skill, i also posses a strong knowledge
                  for design, as u have design two brands and more
                </p>
                <div>
                  <div className="wid-tags">
                    <span>Branding</span>
                    <span>Logo Design</span>
                    <span>Page Design</span>
                    <span>Web Design</span>
                    <span>Consulting</span>
                    <span>Adobe Creative Suite</span>
                  </div>
                </div>
              </div>
              <div ref={ref4} className="service1 basis-2/5 space-y-5 p-5">
                <div>
                  <Cube fill="white" weight="light" size={25} />
                  <h2 className=" ">Motion Design</h2>
                </div>
                <p className=" text-sm">
                  I just happen to love the world of 3d and motion graphics, and
                  i have merged this knowledge with all fields of expertise
                </p>
                <div>
                  <div className="wid-tags">
                    <span>VFX</span>
                    <span>3D animation</span>
                    <span>Blender</span>
                    <span>threejs</span>
                    <span>after effect</span>
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

        <section className=" global-padding hidden md:block">
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
                    <h3 className=" heading-tags-alt relative text-left   cursor-pointer">
                      What i mostly do on my free time, or when the meal is
                      ready. <br />
                      <em className=" text-xl">
                        watching anime, playing video games, or learning
                        something new
                      </em>
                    </h3>
                    <div className=" flex flex-col md:flex-row gap-5">
                      <BtnDefNative linkTo="#archieves" pointDown>
                        Archieves
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
                <h3 className=" heading-tags-alt relative text-left   cursor-pointer">
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
        </section>
        <div className="container mx-auto px-4 w-full bg-white h-[0.1px] bg-opacity-50"></div>

        <div
          className=" container mx-auto px-4  h-full flex flex-col items-center justify-stretch global-padding"
          id="archieves"
        >
          <Reveal trigger={<div className=" text-left" />}>
            <Tween
              from={{ y: "200px", opacity: "0" }}
              stagger={0.1}
              wrapper={<div className="overflow-hidden px-2" />}
            >
              <SplitWords
                wrapper={
                  <h1
                    className=" max-w-max  text-[18vw] mx-2 md:text-[18vw] tracking-[0rem] md:tracking-[-0.2rem]"
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
          </Reveal>
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
                  <h1
                    className=" max-w-max  heading-tags mx-2 tracking-[0rem] md:tracking-[-0.2rem]"
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
