// import { useState, useEffect, useRef } from "react";
// // import Image from "next/image";
// // import { RevealNative } from "../components/Reveal.jsx";
// import { Image, Video } from "cloudinary-react";
// import {
//   Tween,
//   SplitWords,
//   // SplitChars,
//   Reveal,
//   ScrollTrigger,
// } from "react-gsap";
// import { motion } from "framer-motion";
// import transition from "../components/transition.jsx";
// import VanillaTilt from "vanilla-tilt";
// import { gsap } from "gsap";
// // import {
// //   GsapScrollX,
// //   GsapScrollXPin,
// //   GsapScrollZoom,
// // } from "../components/GsapScroll";
// // import { gsap } from "gsap";
// // import {
// //   PlayCircle,
// //   ArrowElbowDownRight,
// //   ArrowRight,
// //   Cube,
// // } from "@phosphor-icons/react";
// // import { Link } from "react-router-dom";
// import { BtnDefNative, BtnDef, BtnDefNativeNoLink } from "../components/BtnDef";
// import { DisplaySomething } from "../components/DisplaySomething.jsx";
// import { PortArc } from "../components/PortArc.jsx";

// const Home = ({ footer, selected }) => {
//   const [position, setPosition] = useState({ x: 0 });
//   const [activeLinkIndex, setActiveLinkIndex] = useState(null);
//   const [display, setDisplay] = useState(false);
//   const openDisplay = (index) => {
//     setActiveLinkIndex(index);
//   };
//   const reverse = () => {
//     setActiveLinkIndex(null);
//   };
//   const ref1 = useRef(null);
//   const ref2 = useRef(null);
//   const ref3 = useRef(null);
//   const ref4 = useRef(null);
//   const imgRef = useRef(null);

//   const archieveLinks = [
//     {
//       imageUrl:
//         "https://res.cloudinary.com/base-data/image/upload/v1693439614/images/bottle.png",
//       content: [
//         {
//           image:
//             "https://res.cloudinary.com/base-data/image/upload/v1693439614/images/bottle.png",
//         },
//       ],
//     },
//     {
//       imageUrl:
//         "https://res.cloudinary.com/base-data/image/upload/v1693439612/images/poster.jpg",
//       content: [
//         {
//           image:
//             "https://res.cloudinary.com/base-data/image/upload/v1693439612/images/poster.jpg",
//         },
//       ],
//     },
//     {
//       imageUrl:
//         "https://res.cloudinary.com/base-data/image/upload/q_50/v1693439618/images/shoe2-image.jpg",
//       content: [
//         {
//           video:
//             "https://res.cloudinary.com/base-data/video/upload/q_30/v1693439641/images/shoe2-video.mp4",
//         },
//       ],
//     },
//     {
//       imageUrl:
//         "https://res.cloudinary.com/base-data/image/upload/q_30/v1693438903/images/midsem-202142593_sahxnw.jpg",
//       content: [
//         {
//           image:
//             "https://res.cloudinary.com/base-data/image/upload/q_30/v1693438903/images/midsem-202142593_sahxnw.jpg",
//         },
//       ],
//     },
//     {
//       imageUrl:
//         "https://res.cloudinary.com/base-data/image/upload/q_30/v1693439154/images/isometric.jpg",
//       content: [
//         {
//           video:
//             "https://res.cloudinary.com/base-data/video/upload/v1693439142/images/0001-0130_addhza.mp4",
//         },
//       ],
//     },
//     {
//       imageUrl:
//         "https://res.cloudinary.com/base-data/image/upload/q_40/v1691740360/images/shoe_iipc7s.webp",
//       content: [
//         {
//           image:
//             "https://res.cloudinary.com/base-data/image/upload/q_40/v1691740360/images/shoe_iipc7s.webp",
//         },
//       ],
//     },
//     {
//       imageUrl:
//         "https://res.cloudinary.com/base-data/image/upload/q_40/v1691740521/images/recent1.webp",
//       content: [
//         {
//           image:
//             "https://res.cloudinary.com/base-data/image/upload/q_40/v1691740521/images/recent1.webp",
//         },
//       ],
//     },
//     {
//       imageUrl:
//         "https://res.cloudinary.com/base-data/image/upload/q_20/v1693439166/images/0129_dwre2t.jpg",
//       content: [
//         {
//           video:
//             "https://res.cloudinary.com/base-data/video/upload/q_40/v1693439136/images/202142593_p1yjdl.mp4",
//         },
//       ],
//     },
//   ];
//   const portArc = [
//     {
//       imageUrl:
//         "https://res.cloudinary.com/base-data/image/upload/v1691740801/images/portfolio1_uwnn4s.webp",
//       text: "Portfolio V.0",
//       Url: "https://kelvin-studio.netlify.app/#",
//     },
//     {
//       imageUrl:
//         "https://res.cloudinary.com/base-data/image/upload/v1691740494/images/portfolio2_cti329.webp",
//       text: "Portfolio V.2",
//       Url: "https://officialkelvinohemeng.netlify.app/",
//     },
//     {
//       imageUrl:
//         "https://res.cloudinary.com/base-data/image/upload/q_50/v1693600003/images/recent-port_qvwied.gif",
//       text: "Portfolio V.2.3",
//       Url: "https://kelvinohemeng.vercel.app/",
//     },
//   ];
//   useEffect(() => {
//     // const nav = document.querySelectorAll(".body-nav");
//     const sections = document.querySelectorAll(".show-sections");
//     const images = document.querySelector(".show-images");

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             // Get the data-image attribute from the section
//             const dataImage = entry.target.getAttribute("data-image");

//             // Change the background image of the .show-images div
//             images.style.backgroundImage = `url('${dataImage}')`;
//             images.classList.add("animate-in");
//           }
//         });
//       },
//       { root: null, threshold: 0.8 }
//     );
//     sections.forEach((section) => {
//       observer.observe(section);
//     });
//     // sections.forEach((section) => {
//     //   const dataImage = section.getAttribute("data-image");
//     //   section.addEventListener("mouseover", () => {
//     //     images.style.backgroundImage = `url('${dataImage}')`;
//     //   });
//     // });
//   }, []);
//   useEffect(() => {
//     // const scrubUp = document.querySelectorAll(".ddp-text");
//     const scrollWhat = document.querySelectorAll(".scrolls-what");
//     // scrubUp.forEach((srubb) => {
//     //   gsap.to(srubb, {
//     //     // opacity: 0,
//     //     y: -500,
//     //     scrollTrigger: {
//     //       trigger: srubb,
//     //       start: "1000px center",
//     //       end: "2000px center",
//     //       // markers: true,
//     //       scrub: 6,
//     //     },
//     //   });
//     // });
//     scrollWhat.forEach((what) => {
//       gsap.fromTo(
//         what,
//         {
//           x: -500,
//           opacity: 0,
//           scrollTrigger: {
//             trigger: what,
//             start: "top center",
//             end: "bottom center",
//             // markers: true,
//             scrub: 1,
//           },
//         },
//         {
//           x: 0,
//           opacity: 1,
//           scrollTrigger: {
//             trigger: what,
//             start: "top center",
//             end: "bottom center",
//             // markers: true,
//             scrub: 1,
//           },
//         }
//       );
//     });
//     // vanilla tilt code
//     VanillaTilt.init(ref1.current, {
//       max: 20,
//       speed: 200,
//       transition: true,
//       easing: "cubic-bezier(.03,.98,.52,.99)",
//       perspective: 1000,
//     });
//     VanillaTilt.init(ref2.current, {
//       max: 20,
//       speed: 200,
//       transition: true,
//       easing: "cubic-bezier(.03,.98,.52,.99)",
//       perspective: 1000,
//     });
//     VanillaTilt.init(ref3.current, {
//       max: 20,
//       speed: 200,
//       transition: true,
//       easing: "cubic-bezier(.03,.98,.52,.99)",
//       perspective: 1000,
//     });
//     VanillaTilt.init(ref4.current, {
//       max: 20,
//       speed: 200,
//       transition: true,
//       easing: "cubic-bezier(.03,.98,.52,.99)",
//       perspective: 1000,
//     });
//   });
//   useEffect(() => {
//     const registerVideo = (bound, video) => {
//       bound = document.querySelector(bound);
//       video = document.querySelector(video);
//       const scrollVideo = () => {
//         if (video.duration) {
//           const distanceFromTop =
//             window.scrollY + bound.getBoundingClientRect().top;
//           const rawPercentScrolled =
//             (window.scrollY - distanceFromTop) /
//             (bound.scrollHeight - window.innerHeight);
//           const percentScrolled = Math.min(Math.max(rawPercentScrolled, 0), 1);

//           video.currentTime = video.duration * percentScrolled;
//         }
//         requestAnimationFrame(scrollVideo);
//       };
//       requestAnimationFrame(scrollVideo);
//     };

//     registerVideo("#bound-three", "#bound-three video");
//     // registerVideo("#bound-four", "#bound-four video");
//   });
//   const toggleDisplay = () => {
//     setDisplay(!display);
//   };
//   return (
//     <>
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         className="relative"
//       >
//         <section className="">
//           <div className="container relative mx-auto px-2 md:px-8 h-screen text-center flex flex-col justify-center">
//             <div>
//               <img
//                 src="https://res.cloudinary.com/base-data/image/upload/q_50/v1693450299/images/about-img.png"
//                 alt=""
//                 className="block md:hidden px-4 md:px-8 max-w-full aspect-[3/2] object-cover object-top grayscale land-images"
//               />
//             </div>
//             <div className=" w-full relative -space-y-10">
//               <h1 className=" z-10 relative  leading-[6rem] text-[2.5rem] md:leading-[15rem] md:text-[8rem] tracking-[0rem] md:tracking-[-0.2rem]  text-white">
//                 <em
//                   style={{ fontStyle: "normal" }}
//                   className=" bg-[#bfea88] text-[#111111]"
//                 >
//                   Frontend
//                 </em>{" "}
//                 Developer
//               </h1>
//               <h1 className=" z-10 relative  leading-[6rem] text-[2.5rem]  md:leading-[15rem] md:text-[8rem] tracking-[0rem] md:tracking-[-0.2rem]   text-white">
//                 <em
//                   className=" font-normal normal text-[#bfea88]"
//                   style={{ fontStyle: "normal" }}
//                 >
//                   &
//                 </em>{" "}
//                 Graphic Designer
//                 <img
//                   src="https://res.cloudinary.com/base-data/image/upload/q_50/v1693450299/images/about-img.png"
//                   alt=""
//                   className="absolute hidden md:block bottom-0 right-0 max-w-[250px] -z-30 grayscale land-images"
//                 />
//               </h1>
//             </div>
//             <div className=" space-y-10 flex flex-col items-center">
//               <p className="heading-tags-alt relative text-center max-w-[80%] md:max-w-[50%] cursor-pointer text-white md:leading-relaxed">
//                 Hi, I am kelvin a <em>designer</em> with a developer's mind, and
//                 a <em>developer</em> with an artist's soul.
//                 <br /> <br className="block md:hidden" />
//                 {/* with design and code */}
//               </p>
//               <div className="flex gap-5 justify-center py-2 ">
//                 <BtnDef showIcon linkTo="mailto:kelvinohemeng59@gmail.com">
//                   Hire me !
//                 </BtnDef>
//                 <BtnDefNative showIcon linkTo="#projects">
//                   Projects
//                 </BtnDefNative>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* //experimental */}
//         {/* <section className=" w-screen h-full flex items-center justify-center">
//           <div className="container mx-auto px-4 md:px-8 h-full  relative overflow-hidden">
//             <div className="flex items-center justify-center relative aspect-video w-full bg-[url('/assets/skis.png')] bg-center bg-contain bg-no-repeat z-[999] bg-bg-black rounded-lg ">
//               <div className="absolute w-full h-full z-[9999]  flex flex-col gap-11">
//                 <div className=" pl-20 flex gap-4 items-center py-[0.5px]">
//                   <div
//                     onClick={toggleDisplay}
//                     className={` mt-0 cursor-pointer pl-[8px] m-1 min-w-[180px] rounded-md ${
//                       display ? "bg-[#445569] text-bg-black" : "bg-[#2a3440]"
//                     }`}
//                   >
//                     <h3>Web Development</h3>
//                   </div>
//                   <div
//                     onClick={toggleDisplay}
//                     className={` mt-0 cursor-pointer pl-[8px] m-1 min-w-[180px] rounded-md ${
//                       !display ? "bg-[#445569] text-bg-black" : "bg-[#2a3440]"
//                     }`}
//                   >
//                     <h3>Graphic Design</h3>
//                   </div>
//                 </div>
//                 <div className=" w-full h-full bg-gray-600">
//                   <div className="container mx-auto p-4">
//                     {display ? (
//                       <div className=" flex">
//                         <div className=" flex-1 ">
//                           <h2 className=" text-[5rem] uppercase">
//                             kelvin the developer
//                           </h2>
//                           <div className=" w-full h-[0.3px] my-10 bg-white"></div>
//                           <div className=" flex flex-col space-y-8">
//                             <div className=" text-white ">
//                               <h4 className=" text-[2rem] font-bold">
//                                 Web Developer/Designer | iamadinkra(internship)
//                               </h4>
//                               <span>
//                                 September 2022 August 2023 / Accra, Ghana
//                               </span>
//                               <br />
//                               <br />
//                               <ul className=" list-disc pl-8 space-y-5">
//                                 <li>
//                                   Designed and developed a full website with
//                                   routing functionalities, API calls to retrieve
//                                   data for project section, User experience,
//                                   dynamic routing for the project section and
//                                   also used Cloudinary to house all the images
//                                   for the various projects to reduce load on the
//                                   website+
//                                 </li>
//                                 <li>
//                                   Rebranded the company from iamadinkra to
//                                   kaizen av projects, providing a logo, brand
//                                   manual and other deliverable assets+
//                                 </li>
//                                 <li>
//                                   Designed and Developed a leaderboard for an
//                                   NFL South Africa event, which will house over
//                                   1000 entries+
//                                 </li>
//                                 <li>
//                                   Implemented API calls for various event
//                                   categories from google sheet using the app
//                                   script extension.
//                                 </li>
//                               </ul>
//                             </div>
//                             <div className=" w-full h-[0.3px] my-10 bg-white"></div>

//                             <div className=" flex gap-8">
//                               <ul className=" max-w-[180px]">
//                                 <li>
//                                   <h4 className=" text-[1.2rem] text-white font-bold">
//                                     Web development and Programing Language
//                                   </h4>
//                                 </li>
//                                 <br />
//                                 <li>HTML</li>
//                                 <li>CSS</li>
//                                 <li>JavaScript/TypeScript</li>
//                                 <li>Advanced JavaScript Concept</li>
//                                 <li>C#</li>
//                               </ul>
//                               <ul className=" max-w-[180px]">
//                                 <li>
//                                   <h4 className=" text-[1.2rem] text-white font-bold">
//                                     Website
//                                   </h4>
//                                 </li>
//                                 <br />
//                                 <li>Awwwards</li>
//                                 <li>Typescale</li>
//                                 <li>Lapa Ninja</li>
//                                 <li>Landingfolio</li>
//                               </ul>
//                               <ul className="  max-w-[180px]">
//                                 <li>
//                                   <h4 className=" text-[1.2rem] text-white font-bold">
//                                     Frameworks and libraries
//                                   </h4>
//                                 </li>
//                                 <br />
//                                 <li>Framer Motion</li>
//                                 <li>GSAP</li>
//                                 <li>Three Js</li>
//                                 <li>ReactJs</li>
//                                 <li>NextJs</li>
//                                 <li>LocomotiveScrollJs</li>
//                               </ul>
//                               <ul className="  max-w-[180px]">
//                                 <li>
//                                   <h4 className=" text-[1.2rem] text-white font-bold">
//                                     Tools
//                                   </h4>
//                                 </li>
//                                 <br />
//                                 <li>VS code</li>
//                                 <li>Git/Github</li>
//                                 <li>Parcel/Webpack</li>
//                                 <li>NPM</li>
//                               </ul>
//                             </div>
//                             <div className=" flex gap-4">
//                               <BtnDefNative linkTo="https://bit.ly/resume-kelvin">
//                                 See full resume
//                               </BtnDefNative>
//                               <BtnDefNative linkTo="#projects">
//                                 Recent projects
//                               </BtnDefNative>
//                             </div>
//                           </div>
//                         </div>
//                         <div className=" flex-1 p-8 overflow-hidden">
//                           <img
//                             src="/assets/05.jpg"
//                             className=" w-full aspect-square object-center object-contain"
//                             alt=""
//                           />
//                         </div>
//                       </div>
//                     ) : (
//                       <div className=" flex">
//                         <div className=" flex-1 ">
//                           <h2 className=" text-[5rem] uppercase">
//                             kelvin the Designer
//                           </h2>
//                           <div className=" w-full h-[0.3px] my-10 bg-white"></div>
//                           <div className=" flex flex-col space-y-8">
//                             <div className=" text-white ">
//                               <h4 className=" text-[2rem] font-bold">
//                                 BA in Graphic Design @ University of Education
//                                 Winneba
//                               </h4>
//                               <span>2024 expected, Winneba, Ghana</span>
//                               <br />
//                             </div>
//                             <div className=" w-full h-[0.3px] my-10 bg-white"></div>

//                             <div className=" flex gap-8">
//                               <ul className=" max-w-[180px]">
//                                 <li>
//                                   <h4 className=" text-[1.2rem] text-white font-bold">
//                                     Fields
//                                   </h4>
//                                 </li>
//                                 <br />
//                                 <li>Logo Design</li>
//                                 <li>Brand design</li>
//                                 <li>Poster/Flyer</li>
//                                 <li>Animation(2D, 3D, Infographics)</li>
//                                 <li>Book/Page Design</li>
//                               </ul>
//                               <ul className=" max-w-[180px]">
//                                 <li>
//                                   <h4 className=" text-[1.2rem] text-white font-bold">
//                                     Website
//                                   </h4>
//                                 </li>
//                                 <br />
//                                 <li>Dribbble</li>
//                                 <li>Pinterest</li>
//                                 <li>Savve</li>
//                                 <li>Behance</li>
//                               </ul>
//                               <ul className="  max-w-[180px]">
//                                 <li>
//                                   <h4 className=" text-[1.2rem] text-white font-bold">
//                                     Tools
//                                   </h4>
//                                 </li>
//                                 <br />
//                                 <li>Adobe Creative Suite</li>
//                                 <li>Figma</li>
//                                 <li>Blender</li>
//                                 <li>Design Thinking/Principles/Elements</li>
//                               </ul>
//                             </div>
//                             <div className=" flex gap-4">
//                               <BtnDefNative linkTo="https://bit.ly/resume-kelvin">
//                                 See full resume
//                               </BtnDefNative>
//                               <BtnDefNative linkTo="#projects">
//                                 Recent projects
//                               </BtnDefNative>
//                             </div>
//                           </div>
//                         </div>
//                         <div className=" flex-1 p-8 overflow-hidden">
//                           <img
//                             src="/assets/05.jpg"
//                             className=" w-full aspect-square object-center object-contain"
//                             alt=""
//                           />
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section> */}

//         <section className=" global-padding hidden md:block">
//           <div id="bound-three" className="scroll-bound">
//             <div className="content container mx-auto px-4 md:px-8 pl-[8rem] flex-col md:flex-row md:justify-between md:flex-end">
//               <div className="vid flex justify-start">
//                 <video
//                   className=" object-cover w-screen h-full grayscale-[1]"
//                   muted
//                   preload
//                 >
//                   <source src="https://res.cloudinary.com/base-data/video/upload/c_scale,e_noise:17,q_60,w_428/v1693439142/images/0001-0130_addhza.ogv" />

//                   <source src="https://res.cloudinary.com/base-data/video/upload/c_scale,e_noise:17,q_60,w_428/v1693439142/images/0001-0130_addhza.mp4" />
//                 </video>
//               </div>
//               <div className=" ddp">
//                 <div className="ddp-text  h-full flex flex-col items-start space-y-5 justify-center">
//                   <h3 className="heading-tags-alt relative text-left md:max-w-[70%] cursor-pointer text-white">
//                     A skillfully curated space where my talents and expertise
//                     converge, giving rise to the epitome of creativity -
//                     DesignBox.
//                   </h3>
//                   <BtnDef showIcon linkTo="/about">
//                     Read more about me
//                   </BtnDef>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         <section className=" global-padding block md:hidden">
//           <div className="content container space-y-5 mx-auto px-4 md:px-8 flex-col md:flex-row md:justify-between md:flex-end">
//             <div className="vid flex justify-start">
//               <video
//                 className=" object-cover w-screen h-full grayscale-[1]"
//                 muted
//                 preload="auto"
//                 autoPlay
//                 loop
//               >
//                 <source src="https://res.cloudinary.com/base-data/video/upload/c_scale,e_noise:17,q_60,w_428/v1693439142/images/0001-0130_addhza.mp4" />
//                 <source src="https://res.cloudinary.com/base-data/video/upload/c_scale,e_noise:17,q_60,w_428/v1693439142/images/0001-0130_addhza.webm" />
//               </video>
//             </div>
//             <div className=" ddp">
//               <div className="ddp-text  h-full flex flex-col items-start space-y-5 justify-center">
//                 <h3 className="heading-tags-alt relative text-left md:max-w-[70%] cursor-pointer text-white">
//                   A skillfully curated space where my talents and expertise
//                   converge, giving rise to the epitome of creativity -
//                   DesignBox.
//                 </h3>
//                 <BtnDef showIcon linkTo="/about">
//                   Read more about me
//                 </BtnDef>
//               </div>
//             </div>
//           </div>
//         </section>
//         <div className="container mx-auto px-4 md:px-8 w-full bg-white h-[0.1px] bg-opacity-50"></div>
//         {/* services section */}
//         <section className=" global-padding">
//           <div className="container flex flex-col md:flex-row mx-auto px-4 md:px-8 gap-20 ">
//             <div className=" flex-1 flex flex-col justify-between md:items-end md:order-last relative">
//               <div className="relative h-full">
//                 <h1 className="scroll-text sticky top-0 py-[5vh] text-[5rem] mx-2 md:text-[10rem] tracking-[0rem] md:tracking-[-0.2rem]">
//                   Skills
//                 </h1>
//               </div>
//               <BtnDefNative linkTo="#projects" pointDown>
//                 Featured Works
//               </BtnDefNative>
//             </div>
//             <div className=" flex-1 w-full text-white">
//               <h2 className=" text-white text-5xl py-5 scrolls-what border-white border-opacity-25 uppercase">
//                 HTML
//               </h2>
//               <h2 className=" text-white text-5xl py-5 scrolls-what border-white border-opacity-25 uppercase">
//                 CSS
//               </h2>
//               <h2 className=" text-white text-5xl py-5 scrolls-what border-white border-opacity-25 uppercase">
//                 SASS
//               </h2>
//               <h2 className=" text-white text-5xl py-5 scrolls-what border-white border-opacity-25 uppercase">
//                 Tailwind CSS
//               </h2>
//               <h2 className=" text-white text-5xl py-5 scrolls-what border-white border-opacity-25 uppercase">
//                 JavaScript
//               </h2>
//               <h2 className=" text-white text-5xl py-5 scrolls-what border-white border-opacity-25 uppercase">
//                 React
//               </h2>
//               <h2 className=" text-white text-5xl py-5 scrolls-what border-white border-opacity-25 uppercase">
//                 GSAP
//               </h2>
//               <h2 className=" text-white text-5xl py-5 scrolls-what border-white border-opacity-25 uppercase">
//                 Framer motion
//               </h2>
//               <h2 className=" text-white text-5xl py-5 scrolls-what border-white border-opacity-25 uppercase">
//                 ThreeJs
//               </h2>
//               <h2 className=" text-white text-5xl py-5 scrolls-what border-white border-opacity-25 uppercase">
//                 CMS
//               </h2>
//               <h2 className=" text-white text-5xl py-5 scrolls-what border-white border-opacity-25 uppercase">
//                 Animation
//               </h2>
//               <h2 className=" text-white text-5xl py-5 scrolls-what border-white border-opacity-25 uppercase">
//                 Motion Graphhics
//               </h2>
//               <h2 className=" text-white text-5xl py-5 scrolls-what border-white border-opacity-25 uppercase">
//                 Graphic Design
//               </h2>
//             </div>
//           </div>
//         </section>

//         <section
//           className=" relative bg-primary w-screen h-full py-[5rem] global-padding"
//           id="projects"
//         >
//           <ScrollTrigger start="-600px center" end="900px center" scrub={1.5}>
//             <div className="relative h-full py-[2vh] md:py-[10vh] my-[10vh] overflow-hidden bg-[#bfea88] ">
//               <Tween
//                 to={{
//                   x: "-80%",
//                 }}
//                 wrapper={
//                   <div
//                     className="scroll-text text-[18vw] mx-2 md:text-[15vw] tracking-[0rem] md:tracking-[-0.2rem] "
//                     style={{
//                       width: "max-content",
//                       display: "flex",
//                       gap: "50px",
//                       fontWeight: "600",
//                       paddingBlock: "0px",
//                     }}
//                   />
//                 }
//               >
//                 <h1 className="">Selected</h1>
//                 <h1 className="">Selected</h1>
//                 <h1 className="">Selected</h1>
//                 <h1 className="">Selected</h1>
//               </Tween>
//             </div>
//           </ScrollTrigger>
//           <div className="container mx-auto px-4 md:px-8">
//             <div className=" w-full bg-white h-[0.1px] bg-opacity-50"></div>

//             <div className="left-side grid md:grid-cols-2 relative">
//               <div className="ids relative z-20  h-full ">
//                 <div
//                   data-image={selected[0].imageUrl}
//                   className="show-sections flex flex-col justify-center min-h-[50vh] space-y-3"
//                 >
//                   <h1 className=" text-[4rem] leading-[5rem] md:text-[5rem] py-10 md:leading-[5rem] text-white">
//                     {selected[0].title}
//                   </h1>
//                   <div className="space-y-2">
//                     {/* <div className="wid-tags">
//                       {selected[0].category.map((cat, index) => (
//                         <span key={index}>{cat}</span>
//                       ))}
//                     </div> */}
//                     <div className=" flex gap-3">
//                       <BtnDef
//                         showIcon
//                         linkTo={`/projects/${selected[0].title}`}
//                       >
//                         explore project
//                       </BtnDef>
//                       <BtnDef showIcon linkTo={selected[0].live}>
//                         See live
//                       </BtnDef>
//                     </div>
//                   </div>
//                 </div>
//                 <div
//                   data-image={selected[1].imageUrl}
//                   className="show-sections flex flex-col justify-center min-h-[50vh] space-y-3"
//                 >
//                   <h1 className=" text-[4rem] leading-[5rem] md:text-[5rem] py-10 md:leading-[4rem] text-white">
//                     {selected[1].title}
//                   </h1>
//                   <div className="space-y-2">
//                     {/* <div className="wid-tags">
//                       {selected[1].category.map((cat, index) => (
//                         <span key={index}>{cat}</span>
//                       ))}
//                     </div> */}
//                     <div className=" flex gap-3">
//                       <BtnDef
//                         showIcon
//                         linkTo={`/projects/${selected[1].title}`}
//                       >
//                         explore project
//                       </BtnDef>
//                       <BtnDef showIcon linkTo={selected[1].live}>
//                         See live
//                       </BtnDef>
//                     </div>
//                   </div>
//                 </div>
//                 <div
//                   data-image={selected[2].imageUrl}
//                   className="show-sections flex flex-col justify-center min-h-[50vh] space-y-3"
//                 >
//                   <h1 className=" text-[4rem] leading-[5rem] md:text-[5rem] py-10 md:leading-[4rem] text-white">
//                     {selected[2].title}
//                   </h1>
//                   <div className="space-y-2">
//                     {/* <div className="wid-tags">
//                       {selected[2].category.map((cat, index) => (
//                         <span key={index}>{cat}</span>
//                       ))}
//                     </div> */}
//                     <div className=" flex gap-3">
//                       <BtnDef
//                         showIcon
//                         linkTo={`/projects/${selected[2].title}`}
//                       >
//                         explore project
//                       </BtnDef>
//                       <BtnDef showIcon linkTo={selected[2].live}>
//                         See live
//                       </BtnDef>
//                     </div>
//                   </div>
//                 </div>
//                 <div
//                   data-image={selected[3].imageUrl}
//                   className="show-sections flex flex-col justify-center min-h-[50vh] space-y-3"
//                 >
//                   <h1 className=" text-[4rem] leading-[5rem] md:text-[5rem] py-10 md:leading-[4rem] text-white">
//                     {selected[3].title}
//                   </h1>
//                   <div className="space-y-2">
//                     {/* <div className="wid-tags">
//                       {selected[3].category.map((cat, index) => (
//                         <span key={index}>{cat}</span>
//                       ))}
//                     </div> */}
//                     <div className=" flex gap-3">
//                       <BtnDef
//                         showIcon
//                         linkTo={`/projects/${selected[3].title}`}
//                       >
//                         explore project
//                       </BtnDef>
//                       <BtnDef showIcon linkTo={selected[3].live}>
//                         See live
//                       </BtnDef>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="right-side absolute w-fit right-0 h-full opacity-50 md:opacity-100">
//                 <div className="sticky top-[10%] w-[300px] md:w-[500px] p-5 this">
//                   <div className="  show-images max-w-full aspect-square object-cover bg-center bg-cover bg-no-repeat " />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         <div className=" w-screen py-[10vh] overflow-hidden">
//           <ScrollTrigger start="-800px center" end="1000px center" scrub={1.5}>
//             <div className=" h-fit py-[2vh] md:py-[10vh] my-[10vh] -skew-y-12  bg-[#bfea88]">
//               <Tween
//                 to={{
//                   x: "-80%",
//                 }}
//                 wrapper={
//                   <div
//                     className="scroll-text text-[18vw] mx-2 md:text-[15vw] tracking-[0rem] md:tracking-[-0.2rem] "
//                     style={{
//                       width: "max-content",
//                       display: "flex",
//                       gap: "50px",
//                       fontWeight: "600",
//                       paddingBlock: "10px",
//                     }}
//                   />
//                 }
//               >
//                 <h1 className="">Playground</h1>
//                 <h1 className="">Playground</h1>
//                 <h1 className="">Playground</h1>
//                 <h1 className="">Playground</h1>
//               </Tween>
//             </div>
//           </ScrollTrigger>
//         </div>
//         <div
//           className=" container overflow-hidden relative mx-auto px-4 md:px-8  h-full flex flex-col items-center justify-stretch mt-[10vh]"
//           id="archieves"
//         >
//           {/* <Reveal trigger={<div className=" text-left" />}>
//             <Tween
//             from={{ y: "200px", opacity: "0" }}
//             stagger={0.1}
//             wrapper={<div className="overflow-hidden px-2" />}
//             >
//               <SplitWords
//                 wrapper={
//                   <h1
//                     className=" max-w-max  text-[18vw] mx-2 md:text-[18vw] tracking-[0rem] md:tracking-[-0.2rem] text-white"
//                     style={{
//                       fontWeight: "600",
//                       gap: "50px",
//                       display: "inline-block",
//                     }}
//                   />
//                 }
//               >
//                 Playground
//               </SplitWords>
//             </Tween>
//           </Reveal> */}
//           <div className="flex justify-center pb-10">
//             <BtnDefNativeNoLink>click to view</BtnDefNativeNoLink>
//           </div>
//           <div
//             className=" flex flex-wrap items-center justify-around w-full gap-5 "
//             id="archieve"
//           >
//             {archieveLinks.map((archieves, index) => (
//               <div
//                 key={index}
//                 className=" arc-items h-[300px] images-box p-2  cursor-pointer"
//                 onClick={() => openDisplay(index)}
//               >
//                 <Image
//                   className=" h-full object-cover grayscale hover:grayscale-0"
//                   publicId={archieves.imageUrl}
//                 />
//               </div>
//             ))}
//           </div>
//           {activeLinkIndex !== null && (
//             <DisplaySomething
//               toDisplay={archieveLinks[activeLinkIndex].content}
//               reverse={reverse}
//             />
//           )}
//         </div>
//         <section className="global-padding container mx-auto px-4 md:px-8">
//           <Reveal trigger={<div className=" text-center" />}>
//             <Tween
//               from={{ y: "200px", opacity: "0" }}
//               stagger={0.1}
//               wrapper={<div className="overflow-hidden px-2" />}
//             >
//               <SplitWords
//                 wrapper={
//                   <h2
//                     className=" max-w-max uppercase  heading-tags mx-2 tracking-[0rem] md:tracking-[-0.2rem] text-white"
//                     style={{
//                       fontWeight: "600",
//                       gap: "50px",
//                       display: "inline-block",
//                     }}
//                   />
//                 }
//               >
//                 Those that came before
//               </SplitWords>
//             </Tween>
//           </Reveal>
//           <div>
//             {portArc.map((arc, index) => (
//               <div key={index}>
//                 <PortArc src={arc.imageUrl} text={arc.text} linkTo={arc.Url} />
//               </div>
//             ))}
//           </div>
//         </section>
//         <section className=" flex justify-center py-10">
//           <BtnDefNativeNoLink target linkTo="#footer" pointDown>
//             Reach out
//           </BtnDefNativeNoLink>
//         </section>
//       </motion.div>
//       {footer}
//     </>
//   );
// };

// export default transition(Home);
