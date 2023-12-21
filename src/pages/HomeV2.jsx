import { useEffect, useState } from "react";
import { SplitTextAnim, SplitWordAnim } from "../components/SplitTextAnim";
import transition from "../components/transition";
import { BtnDef, BtnDefFollow } from "../components/BtnDef";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TweenMax } from "gsap/gsap-core";

const HomeV2 = ({ selected, footer }) => {
  const [isHovered, setIsHovered] = useState(false);

  // useEffect(() => {
  //   gsap.from(".cards", {
  //     scale: 1.2,
  //     opacity: 0,
  //     stagger: 0.4,
  //     scrollTrigger: {
  //       trigger: ".cards ",
  //       start: "center center",
  //       end: "center center",
  //     },
  //   });
  // }, []);

  useEffect(() => {
    const views = document.querySelectorAll(".review");
    const cats = document.querySelectorAll(".cat");
    cats.forEach((cat) => {
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
    //       // toggleActions: "restart none none reset",
    //     },
    //   });
    // });

    // const size = isHovered ? 500 : 0;
    // const handleMouseMove = (e) => {
    //   gsap.to(".masked", {
    //     webkitMaskSize: `${size}px`,
    //     webkitMaskPosition: `${e.clientX - size / 2}px ${
    //       e.clientY - size / 2
    //     }px`,
    //   });
    // };

    // document.addEventListener("mousemove", handleMouseMove);

    // return () => {
    //   document.removeEventListener("mousemove", handleMouseMove);
    // };
  }, [isHovered]);

  function isOdd(number) {
    return number % 2 !== 0;
  }

  return (
    <div className=" h-full container mx-auto">
      <section className=" text-background flex flex-col gap-[4rem] space-y-0 md:space-y-[-20rem] items-end  relative md:min-h-[50rem] ">
        <div className=" relative top-0 right-0 bg-black  overflow-hidden">
          <img
            src="https://res.cloudinary.com/base-data/image/upload/v1700740147/images/m3_wwdjt2.jpg"
            alt=""
            className=" max-w-[200px]  md:max-w-[400px]  object-cover grayscale"
          />
        </div>
        <div className="relative flex items-center justify-center ">
          <div className=" w-full flex flex-col h-full">
            <div>
              <span className="md:p-2 text-primary">
                Frontend Web Developer - Graphic Designer
              </span>
              <h1 className=" tracking-tighter b-font text-white mix-blend-difference">
                <SplitWordAnim
                  className={" "}
                  fontSize={"text-[60px] md:text-[120px] 2xl:text-[180px]"}
                  text="KELVIN OHEMENG"
                />
              </h1>
            </div>

            <div className="pt-[5rem]">
              <span className=" opacity-50">- where design meets code:</span>
              <div className="pt-1 pl-2 flex w-full">
                <p className=" md:max-w-[50%] l-font">
                  I am a combination of design interlect and extensive coding
                  practice and experience. My name is kelvin and I am a frontend
                  web developer and graphic designer based in Ghana.
                </p>
              </div>
              <div className="pt-5 relative w-fit">
                <BtnDefFollow linkTo="/about" paddings>
                  Learn more about me
                </BtnDefFollow>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute md:top-[35%] left-0 w-max mx-4 my-8 md:my-0 right-0 p-8 border border-black rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#000000"
            viewBox="0 0 256 256"
            className=" animate-bounce fill-black"
          >
            <path d="M205.66,149.66l-72,72a8,8,0,0,1-11.32,0l-72-72a8,8,0,0,1,11.32-11.32L120,196.69V40a8,8,0,0,1,16,0V196.69l58.34-58.35a8,8,0,0,1,11.32,11.32Z"></path>
          </svg>
        </div>
      </section>

      <section className="mt-[5rem] md:mt-[10rem]  h-full py-[3rem]  md:py-[5rem] space-y-[5rem] ">
        <div>
          <h1 className=" tracking-tighter b-font text-white mix-blend-difference">
            <SplitWordAnim
              className={" "}
              fontSize={"text-[60px] md:text-[120px] 2xl:text-[180px]"}
              text="Selected Work"
            />
          </h1>
        </div>

        <div className=" w-full relative ">
          <div className="relative z-20  h-full grid grid-cols-fluid gap-[2rem] md:gap-[4rem]">
            {selected.slice(0, 4).map((select, selectIndex) => (
              <Link
                key={selectIndex}
                target={select.images ? "_parent" : "_blank"}
                to={select.images ? `/projects/${select.title}` : select.live}
                className="group w-fit "
              >
                <div className="md:w-[21.5rem] h-[30rem] bg-bg-black rounded-lg flex flex-col md:hover:shadow-[5px_5px_0px_0px_#e0a22e] transition-all duration-300 ease-out md:hover:translate-x-[-5%] md:hover:translate-y-[-2%]">
                  <div className="card-link h-full  p-5 flex flex-col justify-between items-start">
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
                      <img src={select.logo} alt="" className="w-[50px]" />

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

        <div className=" p-2 w-fit">
          <BtnDefFollow linkTo="/projects" paddings>
            {" "}
            View all projects
          </BtnDefFollow>
        </div>
      </section>

      {/* <section className="w-full  min-h-[40rem] relative flex justify-center items-center ">
        <div className=" w-fit relative h-full  md:h-full ">
          <div className="relative px-4 md:px-8 2xl:px-[18rem] flex flex-col justify-center gap-8  md:h-[40rem]">
            <div className=" space-y-10">
              <div>
                <span>- hover</span>
                <h1 className="relative tracking-tight leading-[120%] text-[40px] i-font">
                  Everything everywhere all at once. I am dedicated to bringing
                  100% to the table. Unleashing my skill from years of
                  experience
                </h1>
              </div>
              <div className=" relative z-[999]">
                <BtnDefFollow linkTo="/about" paddings>
                  Learn more about me
                </BtnDefFollow>
              </div>
            </div>
            <div
              id="masked"
              className="masked left-0 w-full h-full absolute items-center  md:px-8 2xl:px-[18rem] hidden md:flex"
            >
              <h1
                className=" tracking-tight p-font"
                onMouseOver={() => {
                  setIsHovered(true);
                }}
                onMouseOut={() => {
                  setIsHovered(false);
                }}
              >
                <h1 className="relative tracking-tight leading-[120%] text-[40px] i-font">
                  I am everything you will need and more!
                </h1>
              </h1>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="mt-[20vh]">
        <div className=" container mx-auto px-4">
          <div className="flex items-end justify-between relative min-h-[40rem]">
            <div className="">
              <video
                autoPlay
                controls
                className="max-w-[300px] aspect-[1/1.5] object-cover -rotate-[12deg] absolute top-0 left-0 origin-center cards"
              >
                <source src="/vidd.mp4" />
              </video>
              <img
                src="https://res.cloudinary.com/base-data/image/upload/v1691740381/images/recent2_hsydfb.webp"
                className="max-w-[300px] aspect-[1/1.5] object-cover -rotate-[14deg] absolute top-0 left-0 origin-center cards"
                alt=""
              />
              <img
                src="https://res.cloudinary.com/base-data/image/upload/v1693439612/images/poster.jpg"
                className="max-w-[300px] aspect-[1/1.5] object-cover -rotate-[1deg] absolute top-0 left-0 origin-center cards"
                alt=""
              />
              <img
                src="https://res.cloudinary.com/base-data/image/upload/v1691740521/images/recent1.webp"
                className="max-w-[300px] aspect-[1/1.5] object-cover -rotate-[5deg] absolute top-0 left-0 origin-center cards"
                alt=""
              />
            </div>
            <div className=" space-y-8">
              <p className=" max-w-[800px]">
                Over the past years, whiles i haven’t had my big break through
                in tech, I have used the time to learn more skills in demand
                skills that will improve my ability as a developer and a
                designer
              </p>
              <div className="flex gap-8">
                <ul>
                  <li>
                    <h5 className="opacity-50 tracking-tighter pb-4">Tools</h5>
                  </li>
                  <li>Adobe Creative Suite</li>
                  <li>Blender</li>
                  <li>Figma</li>
                  <li>VS Code</li>
                  <li>Browser Dev Tools</li>
                </ul>
                <ul>
                  <li>
                    <h5 className="opacity-50 tracking-tighter pb-4">Design</h5>
                  </li>
                  <li>Branding</li>
                  <li>logo Design</li>
                  <li>Book/Page Design</li>
                  <li>Poster Design</li>
                  <li>Animation 2D/3D</li>
                </ul>
                <ul>
                  <li>
                    <h5 className="opacity-50 tracking-tighter pb-4">
                      Developer
                    </h5>
                  </li>
                  <li>HTML</li>
                  <li>CSS(tailwind, Sass)</li>
                  <li>JavaScript/TypeScript</li>
                  <li>React/NextJs</li>
                  <li>GSAP</li>
                </ul>
                <ul>
                  <li>GSAP</li>
                  <li>ThreeJS</li>
                  <li>C#</li>
                  <li>Framer motion</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="mt-[20vh] ">
        <div className=" min-h-[30rem] py-10 flex flex-col md:flex-row justify-between gap-8">
          <div className="flex-1 relative">
            <h2 className=" tracking-tighter">
              <SplitTextAnim
                className={" text-[60px] leading-[100%] i-font text-background"}
                text="I can help you with..."
              />
            </h2>
          </div>
          <div className="flex-1 md:self-end ">
            <div className="join join-vertical w-full l-font">
              <div className="collapse border-b rounded-none border-slate-300">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-xl font-medium flex items-center justify-between flex-wrap p-2">
                  Frontend development
                  <span className="text-sm p-2 border-slate-500 rounded-full py-0 border-[.1px]">
                    Expert
                  </span>
                </div>
                <div className="collapse-content px-2">
                  <p className=" text-[2rem] leading-4">
                    <span className=" text-[.8rem]">
                      Any project that falls within frontend development, be it
                      landing page website creation, web design, portfolio
                      design and development, I am the right man for the job,
                      finding solutions and answers to things is something I
                      excel in, and I will use that to help you solve yourr
                      problem.
                    </span>
                  </p>
                </div>
              </div>
              <div className="collapse border-b rounded-none border-slate-300">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-xl font-medium flex items-center justify-between flex-wrap p-2">
                  VR&AR Development
                  <span className="text-sm p-2 bg-primary border-slate-500 rounded-full py-0 border-[.1px]">
                    learning in progress
                  </span>
                </div>
                <div className="collapse-content px-2">
                  <p className=" text-[2rem] leading-4">
                    <span className=" text-[.8rem]">
                      VR and AR development is something I aspire to learn in
                      the near future as I believe that such technology will
                      soon take over the world and because of that I think I
                      should add it to my skill sets as a software developer.
                    </span>
                  </p>
                </div>
              </div>
              <div className="collapse border-b rounded-none border-slate-300">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-xl font-medium flex items-center justify-between flex-wrap p-2">
                  Mobile development
                  <span className="text-sm p-2 border-slate-500 rounded-full py-0 border-[.1px]">
                    Advanced
                  </span>
                </div>
                <div className="collapse-content px-2">
                  <p className=" text-[2rem] leading-4">
                    <span className=" text-[.8rem]">
                      While I may not have any extensive practice in mobile
                      development, I believe that it is very similar to web
                      developement and because of that I think I will have
                      little to no challenge understanding the syntax and
                      principles. My mobile development is mostly going to be
                      done in React Native but I can also explore other options
                      like fluter etc.
                    </span>
                  </p>
                </div>
              </div>
              <div className="collapse border-b rounded-none border-slate-300">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-xl font-medium flex items-center justify-between flex-wrap p-2">
                  Design and motion design
                  <span className="text-sm p-2 border-slate-500 rounded-full py-0 border-[.1px]">
                    Expert
                  </span>
                </div>
                <div className="collapse-content px-2">
                  <p className=" text-[2rem] leading-4">
                    <span className=" text-[.8rem]">
                      Being a software developer is not the first thing I took
                      on as a challenge. I have great knoledge and experience in
                      design, design thinking, principles and use of design
                      elements, alongside that I have a great passion for 3d
                      works and animations. While I am not trying to build a
                      career with my design skill, I can definetly help you out
                      with your design needs.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {footer}
    </div>
  );
};

export default transition(HomeV2);
