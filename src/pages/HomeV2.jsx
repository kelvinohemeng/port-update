import { useEffect, useState } from "react";
import { SplitTextAnim, SplitWordAnim } from "../components/SplitTextAnim";
import transition from "../components/transition";
import { BtnDef, BtnDefFollow } from "../components/BtnDef";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { motion } from "framer-motion";
import { Container } from "../components/tailwindLib";

const HomeV2 = ({ selected, footer }) => {
  const [toggleState, setToggleState] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

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

  const toggle = (i) => {
    if (toggleState === i) {
      return setToggleState((prevToggleState) =>
        prevToggleState === i ? null : i
      );
    }

    setToggleState(i);
  };

  const data = [
    {
      header: " Frontend development",
      content:
        " Any project that falls within frontend development, be it landing page website creation, web design, portfolio design and development, I am the right man for the job, finding solutions and answers to things is something I excel in, and I will use that to help you solve yourr problem.",
      rank: "Expert",
    },
    {
      header: "VR and AR development",
      content:
        "         VR and AR development is something I aspire to learn in the near future as I believe that such technology will soon take over the world and because of that I think I should add it to my skill sets as a software developer.",
      rank: "Learning in progress",
    },
    {
      header: "Mobile development",
      content:
        "               While I may not have any extensive practice in mobile development, I believe that it is very similar to web developement and because of that I think I will have little to no challenge understanding the syntax and principles. My mobile development is mostly going to be done in React Native but I can also explore other options like fluter etc.",
      rank: "Advanced",
    },
    {
      header: "Desig and Motion Design",
      content:
        "  Being a software developer is not the first thing I took on as a challenge. I have great knoledge and experience in design, design thinking, principles and use of design elements, alongside that I have a great passion for 3d works and animations. While I am not trying to build a career with my design skill, I can definetly help you out with your design needs.",
      rank: "Expert",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
      className=" h-full"
    >
      <section className=" text-background ">
        <Container
          className={
            " flex flex-col md:flex-row-reverse gap-[4rem] items-end relative h-full min-h-[30rem] 2xl:min-h-[50rem] "
          }
        >
          <img
            src="https://res.cloudinary.com/base-data/image/upload/v1700740147/images/m3_wwdjt2.jpg"
            alt=""
            className=" max-w-[200px]  md:max-w-[300px] self-end md:self-start object-cover grayscale"
          />
          <div className="relative flex items-center justify-center self-center ">
            <div className=" w-full flex flex-col h-full">
              <div>
                <h1 className=" tracking-tighter i-font text-background  text-[60px] md:text-[80px] 2xl:text-[120px] leading-[100%]">
                  Kelvin Ohemeng.
                </h1>
                <span className="md:p-2 text-primary font-semibold md:text-xl">
                  Full Stack Designer/Developer (Frontend focus)
                </span>
              </div>

              <div className="pt-[5rem]">
                <span className=" opacity-50">- Where Design Meets Code:</span>
                <p className="pt-1 pl-2 flex w-full">
                  <span className=" md:max-w-[50%]  text-[18px]  i-font">
                    I am a combination of design intellect and extensive coding
                    practice and experience. My name is Kelvin and I am a
                    frontend web developer and graphic designer based in Ghana.
                  </span>
                </p>
                <div className="pt-5 relative w-fit flex flex-wrap gap-4">
                  <div className="flex p-2 bg-background hover:bg-opacity-80 w-max font-medium text-text rounded-full px-4 items-center gap-2 group">
                    <a href="https://bit.ly/resume-kelvin" target="_blank">
                      Download Resume
                    </a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 32 32"
                      fill="none"
                      className="group-hover:rotate-180 transition-all ease-out"
                    >
                      <path
                        d="M20.7079 11.2925C20.8008 11.3854 20.8746 11.4957 20.9249 11.6171C20.9752 11.7385 21.0011 11.8686 21.0011 12C21.0011 12.1314 20.9752 12.2616 20.9249 12.383C20.8746 12.5044 20.8008 12.6146 20.7079 12.7075L12.7079 20.7075C12.6149 20.8004 12.5046 20.8741 12.3833 20.9244C12.2619 20.9747 12.1318 21.0006 12.0004 21.0006C11.869 21.0006 11.7389 20.9747 11.6175 20.9244C11.4961 20.8741 11.3858 20.8004 11.2929 20.7075C11.1999 20.6146 11.1262 20.5043 11.076 20.3829C11.0257 20.2615 10.9998 20.1314 10.9998 20C10.9998 19.8686 11.0257 19.7385 11.076 19.6171C11.1262 19.4957 11.1999 19.3854 11.2929 19.2925L19.2929 11.2925C19.3857 11.1995 19.496 11.1258 19.6174 11.0755C19.7388 11.0251 19.8689 10.9992 20.0004 10.9992C20.1318 10.9992 20.2619 11.0251 20.3833 11.0755C20.5047 11.1258 20.615 11.1995 20.7079 11.2925ZM26.9504 5.05002C26.3003 4.39993 25.5286 3.88425 24.6793 3.53242C23.83 3.1806 22.9197 2.99951 22.0004 2.99951C21.081 2.99951 20.1707 3.1806 19.3214 3.53242C18.4721 3.88425 17.7004 4.39993 17.0504 5.05002L13.2929 8.80627C13.1052 8.99391 12.9998 9.2484 12.9998 9.51377C12.9998 9.77913 13.1052 10.0336 13.2929 10.2213C13.4805 10.4089 13.735 10.5143 14.0004 10.5143C14.2657 10.5143 14.5202 10.4089 14.7079 10.2213L18.4654 6.47127C19.4065 5.55083 20.6726 5.03866 21.989 5.04591C23.3053 5.05316 24.5657 5.57924 25.4966 6.50999C26.4276 7.44074 26.9539 8.70105 26.9613 10.0174C26.9688 11.3338 26.4569 12.6 25.5366 13.5413L21.7779 17.2988C21.5902 17.4862 21.4847 17.7406 21.4846 18.0058C21.4845 18.2711 21.5898 18.5255 21.7772 18.7131C21.9647 18.9008 22.219 19.0063 22.4843 19.0064C22.7495 19.0065 23.004 18.9012 23.1916 18.7138L26.9504 14.95C27.6004 14.3 28.1161 13.5283 28.468 12.679C28.8198 11.8296 29.0009 10.9193 29.0009 10C29.0009 9.0807 28.8198 8.17039 28.468 7.32107C28.1161 6.47174 27.6004 5.70004 26.9504 5.05002ZM17.2929 21.7775L13.5354 25.535C13.073 26.0078 12.5214 26.3842 11.9125 26.6423C11.3036 26.9004 10.6496 27.0352 9.98832 27.0389C9.32702 27.0425 8.67156 26.9149 8.05989 26.6635C7.44823 26.4121 6.89252 26.0418 6.42494 25.5742C5.95736 25.1065 5.5872 24.5507 5.33589 23.939C5.08458 23.3273 4.95711 22.6718 4.96087 22.0105C4.96463 21.3492 5.09954 20.6952 5.35779 20.0864C5.61603 19.4776 5.99249 18.9261 6.46536 18.4638L10.2216 14.7075C10.4092 14.5199 10.5147 14.2654 10.5147 14C10.5147 13.7347 10.4092 13.4802 10.2216 13.2925C10.034 13.1049 9.77947 12.9995 9.51411 12.9995C9.24874 12.9995 8.99425 13.1049 8.80661 13.2925L5.05036 17.05C3.73754 18.3628 3 20.1434 3 22C3 23.8566 3.73754 25.6372 5.05036 26.95C6.36318 28.2628 8.14375 29.0004 10.0004 29.0004C11.857 29.0004 13.6375 28.2628 14.9504 26.95L18.7079 23.1913C18.8953 23.0036 19.0006 22.7492 19.0005 22.4839C19.0004 22.2187 18.8949 21.9644 18.7072 21.7769C18.5196 21.5894 18.2652 21.4842 17.9999 21.4843C17.7347 21.4844 17.4803 21.5899 17.2929 21.7775Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <BtnDefFollow linkTo="/about" paddings>
                    Learn more about me
                  </BtnDefFollow>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:block absolute md:top-[90%] right-0 w-max mx-4 my-8 md:my-0  p-8 border border-white mix-blend-difference rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#000000"
              viewBox="0 0 256 256"
              className=" animate-bounce fill-white"
            >
              <path d="M205.66,149.66l-72,72a8,8,0,0,1-11.32,0l-72-72a8,8,0,0,1,11.32-11.32L120,196.69V40a8,8,0,0,1,16,0V196.69l58.34-58.35a8,8,0,0,1,11.32,11.32Z"></path>
            </svg>
          </div>
        </Container>
      </section>

      {/* new section idea */}
      {/*  where I say something like this "I can be all in one*having this on the right side showing design related tools plus website builders*, all-in-one*showing my stack for actual web development*" */}

      <section className="mt-[5rem] py-[5rem] h-full  bg-[#d7d7d7]">
        <Container className={"space-y-[5rem] md:space-y-[10rem]"}>
          <div className=" flex items-center justify-between flex-wrap gap-8">
            <h1 className=" tracking-tighter i-font text-white mix-blend-difference">
              <SplitWordAnim
                className={" "}
                fontSize={"text-[35px] md:text-[60px] i-font"}
                text="My Selected Work"
              />
            </h1>
            <p className=" md:max-w-[40%] ">
              <SplitWordAnim
                className={" "}
                fontSize={"text-[18px]  i-font"}
                text="A few of the projects that help build my skills and experience in web development and Graphic Design, These projects challenged me to bring out the best in me. Learning how to find answers to problems and developing problem solving skills"
              />
            </p>
          </div>

          <div className=" w-full relative ">
            <div className="relative  h-full grid grid-cols-fluid gap-8">
              {selected.slice(0, 4).map((select, selectIndex) => (
                <Link
                  key={selectIndex}
                  target={select.images ? "_parent" : "_blank"}
                  to={select.images ? `/projects/${select.title}` : select.live}
                  className="group w-fit relative"
                >
                  <div className=" w-full h-full min-h-[30rem] bg-background rounded-lg flex flex-col">
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
                        <img src={select.logo} alt="" className="w-[50px]" />

                        <h3
                          className={
                            " text-[24px] leading-[130%] p-font text-white"
                          }
                        >
                          {select.title}
                        </h3>
                        <div className=" ">
                          {select.description && (
                            <span className="text-[16px] text-white text-opacity-70 line-clamp-3">
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
                  <img
                    src={select.imageUrl}
                    className="hidden md:block absolute z-[999] top-[-15%] right-[-50%] w-[0px] aspect-video object-cover object-center opacity-0 group-hover:opacity-100 group-hover:w-[300px] origin-bottom-right duration-100 rounded-lg"
                    alt=""
                  />
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
        </Container>
      </section>

      <section className="mt-[5rem] md:mt-[10rem]  ">
        <Container>
          <div className=" min-h-[30rem] py-10 flex flex-col md:flex-row justify-between gap-24 md:gap-8">
            <div className="flex-1 relative">
              <h2 className=" tracking-tighter">
                <SplitTextAnim
                  className={
                    " text-[35px] md:text-[60px] i-font text-background"
                  }
                  text="I can help you with..."
                />
              </h2>
            </div>

            <div className="flex-1">
              <div className="accordion">
                {data.map((accordion, i) => (
                  <div
                    key={i}
                    className="item mb-[5px] py-4 border-b flex flex-col gap-4"
                  >
                    <div
                      className="title flex justify-between items-center cursor-pointer"
                      onClick={() => toggle(i)}
                    >
                      <div className="flex gap-x-4 items-center flex-wrap">
                        {" "}
                        <h3 className="">
                          <span className="text-xl font-medium">
                            {accordion.header}
                          </span>
                        </h3>
                        <span className="text-sm p-2 border-slate-500 rounded-full py-0 border-[.1px]">
                          {accordion.rank}
                        </span>
                      </div>
                      <div className="flex item-center gap-2  ">
                        <span>{toggleState === i ? "-" : "+"}</span>
                      </div>
                    </div>
                    <div
                      className={toggleState === i ? "content show" : "content"}
                    >
                      <span className="text-[18px] text-opacity-70">
                        {accordion.content}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
      {footer}
    </motion.div>
  );
};

export default transition(HomeV2);
