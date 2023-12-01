import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const NewTest = () => {
  const [changeContent, setChangeContent] = useState("");
  const [refFirst, inViewFirst] = useInView({ triggerOnce: false });
  const [refSecond, inViewSecond] = useInView({ triggerOnce: false });
  const [refThird, inViewThird] = useInView({ triggerOnce: false });

  useEffect(() => {
    if (changeContent) {
      const allAssets = document.querySelectorAll(".animate-in");
      const animations = [];

      // Loop through each asset and create a GSAP timeline for each
      allAssets.forEach((asset, index) => {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".animate-in-trigger",
            start: "top bottom",
            // markers: true,
          },
        });

        // Add animations to the timeline with stagger
        timeline.fromTo(
          asset,
          { scale: 0.5, opacity: 0 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            transformOrigin: "left bottom",
            ease: "elastic.out(0.45,0.3)",
          },
          index * 0.2 // Stagger based on index
        );

        animations.push(timeline);
      });

      // Return a function to clean up animations when the component unmounts
      return () => {
        animations.forEach((anim) => {
          anim.kill();
        });
      };
    }
  }, [changeContent]);

  useEffect(() => {
    // Function to handle changes in intersection
    const handleIntersectionChange = (inView, sectionId) => {
      if (inView) {
        setChangeContent(sectionId);
      }
    };

    // Attach the intersection handler to each section
    handleIntersectionChange(inViewFirst, "first");
    handleIntersectionChange(inViewSecond, "second");
    handleIntersectionChange(inViewThird, "third");

    // Optional: Clean up if needed
    return () => {
      // Clean up logic here
    };
  }, [inViewFirst, inViewSecond, inViewThird]);

  return (
    <>
      <div className="w-full h-screen flex items-center justify-center">
        <h3>Content</h3>
      </div>
      <div className="relative h-full">
        <div className="w-full h-screen sticky z-[9999] bg-yellow-500 top-0 left-0">
          {changeContent === "first" ? (
            <div className="animate-in-trigger w-full transition-all duration-500  h-full">
              <div className="h-full flex flex-col container mx-auto p-5 gap-20 items-center justify-center">
                <div className="animate-in bg-gray-500 h-[40rem] w-full rounded-[1.5rem]"></div>
                <div className=" animate-in flex gap-8 items-center">
                  <div className=" animate-in space-y-8">
                    <h2 className=" leading-[100%]">
                      Creative Design Agency for Entrepreneurs
                    </h2>
                    <div className=" flex gap-4 justify-between">
                      <p className=" max-w-md">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros elementum tristique
                      </p>
                      <div>
                        <button>Sample Button</button>
                      </div>
                    </div>
                  </div>
                  <div className="animate-in w-full h-full bg-red-400 rounded-[1.5rem]"></div>
                </div>
              </div>
            </div>
          ) : changeContent === "second" ? (
            <div className="animate-in-trigger w-full transition-all duration-500 h-full">
              <div className="h-full flex container mx-auto p-5 gap-5 items-center justify-center">
                <div className="animate-in bg-gray-500 h-full flex-1 w-full rounded-[1.5rem]"></div>
                <div className=" flex flex-col h-full gap-8 flex-1">
                  <div className="animate-in  space-y-8 flex-1 flex flex-col justify-end">
                    <h2 className=" leading-[100%]">
                      Creative Design Agency for Entrepreneurs
                    </h2>
                    <div className=" flex gap-4 justify-between">
                      <p className=" flex-1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros elementum tristique
                      </p>
                      <div>
                        <button>Sample Button</button>
                      </div>
                    </div>
                  </div>
                  <div className="animate-in w-full h-10 flex-1 bg-gray-400 rounded-[1.5rem]"></div>
                </div>
              </div>
            </div>
          ) : changeContent === "third" ? (
            <div className="animate-in-trigger w-full transition-all duration-500 h-full">
              <div className="h-full flex flex-row-reverse container mx-auto p-5 gap-10 items-center justify-center">
                <div className="animate-in bg-gray-500 h-full flex-1 w-full rounded-[1.5rem]"></div>
                <div className=" flex flex-col h-full gap-8 flex-1">
                  <div className=" animate-in space-y-8 flex-1 flex flex-col justify-end">
                    <h2 className=" leading-[100%]">
                      Creative Design Agency for Entrepreneurs
                    </h2>
                    <div className=" flex gap-4 justify-between">
                      <p className=" flex-1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros elementum tristique
                      </p>
                      <div>
                        <button>Sample Button</button>
                      </div>
                    </div>
                  </div>
                  <div className="animate-in w-full h-10 flex-1 bg-gray-400 rounded-[1.5rem]"></div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>

        {/* these are the section trackers, adjust height value to depict how much scroll is needed for changing content */}
        <section
          ref={refFirst}
          id="first"
          className="sections h-[50vh] w-full bg-yellow-200"
        ></section>
        <section
          ref={refSecond}
          id="second"
          className="sections h-[50vh] w-full bg-yellow-400"
        ></section>
        <section
          ref={refThird}
          id="third"
          className="sections h-[50vh] w-full bg-yellow-600"
        ></section>
      </div>
      <div className="w-full h-screen flex items-center justify-center">
        <h3>Content</h3>
      </div>
    </>
  );
};

export const SideBarNavComponent = () => {
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive(!active);
  };
  return (
    <div className="bg-white h-screen">
      <div className="container mx-auto px-4 py-8 w-full h-full">
        <nav
          className={` relative bg-black ${
            active ? "max-w-[390px] " : " max-w-[100px]"
          } h-full text-white flex flex-col   rounded-[1.2rem] gap-8 py-8 transition-all duration-500`}
        >
          <div
            onClick={toggleActive}
            className={`transition-all duration-300 ${
              active ? "scale-[100%] " : "scale-[80%]"
            } absolute bg-[#1A1A1A] px-5 rounded-full aspect-square w-[50px] grid place-items-center right-0 translate-x-[70%]`}
          >
            {!active ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="22"
                viewBox="0 0 12 22"
                fill="none"
              >
                <path
                  d="M11.7081 11.7076L1.70806 21.7076C1.61515 21.8005 1.50485 21.8742 1.38345 21.9245C1.26206 21.9747 1.13195 22.0006 1.00056 22.0006C0.869161 22.0006 0.739053 21.9747 0.61766 21.9245C0.496267 21.8742 0.385966 21.8005 0.293056 21.7076C0.200145 21.6147 0.126445 21.5044 0.0761623 21.383C0.0258797 21.2616 0 21.1315 0 21.0001C0 20.8687 0.0258797 20.7386 0.0761623 20.6172C0.126445 20.4958 0.200145 20.3855 0.293056 20.2926L9.58681 11.0001L0.293056 1.70757C0.105415 1.51993 -1.97712e-09 1.26543 0 1.00007C1.97712e-09 0.734704 0.105415 0.480208 0.293056 0.292568C0.480696 0.104927 0.735192 -0.000488279 1.00056 -0.000488281C1.26592 -0.000488283 1.52042 0.104927 1.70806 0.292568L11.7081 10.2926C11.801 10.3854 11.8748 10.4957 11.9251 10.6171C11.9754 10.7385 12.0013 10.8687 12.0013 11.0001C12.0013 11.1315 11.9754 11.2616 11.9251 11.383C11.8748 11.5044 11.801 11.6147 11.7081 11.7076Z"
                  fill="white"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="22"
                viewBox="0 0 12 22"
                fill="none"
              >
                <path
                  d="M0.291944 11.7076L10.2919 21.7076C10.3849 21.8005 10.4952 21.8742 10.6165 21.9245C10.7379 21.9747 10.868 22.0006 10.9994 22.0006C11.1308 22.0006 11.2609 21.9747 11.3823 21.9245C11.5037 21.8742 11.614 21.8005 11.7069 21.7076C11.7999 21.6147 11.8736 21.5044 11.9238 21.383C11.9741 21.2616 12 21.1315 12 21.0001C12 20.8687 11.9741 20.7386 11.9238 20.6172C11.8736 20.4958 11.7999 20.3855 11.7069 20.2926L2.41319 11.0001L11.7069 1.70757C11.8946 1.51993 12 1.26543 12 1.00007C12 0.734704 11.8946 0.480208 11.7069 0.292568C11.5193 0.104927 11.2648 -0.000488279 10.9994 -0.000488281C10.7341 -0.000488283 10.4796 0.104927 10.2919 0.292568L0.291944 10.2926C0.198967 10.3854 0.125208 10.4957 0.0748835 10.6171C0.0245592 10.7385 -0.00134182 10.8687 -0.00134182 11.0001C-0.00134182 11.1315 0.0245592 11.2616 0.0748835 11.383C0.125208 11.5044 0.198967 11.6147 0.291944 11.7076Z"
                  fill="white"
                />
              </svg>
            )}
          </div>

          <div className="flex flex-col justify-between h-full gap-8 items-center">
            <div className="flex px-[28px] gap-4 items-center w-full">
              <div className="  bg-white w-[50px] h-[50px] aspect-square rounded-full"></div>
              <h3 className={`${!active ? "hidden" : " block"} text-[2rem]`}>
                Logo
              </h3>
            </div>

            <div className="px-[28px] w-full">
              <input
                onClick={() => setActive(true)}
                type="search"
                placeholder="Search for anything"
                id=""
                className="px-5 py-2 rounded-[.5rem] w-full text-black"
              />
            </div>

            <div
              className={`flex flex-col  justify-between 
              ${active ? "items-start" : "items-center"} 
               w-full h-full`}
            >
              <div className="main  w-full">
                <ul className=" space-y-4 w-full">
                  <li>
                    <div
                      className={`flex items-center gap-4 px-[28px] hover:bg-gray-50 hover:bg-opacity-20 py-2 w-full ${
                        active ? "justify-start" : "justify-center"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="23"
                        viewBox="0 0 22 23"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M2.94666 0.858398H2.86481C2.48993 0.858398 2.16743 0.858398 1.88259 0.925517C1.44163 1.03088 1.03845 1.25627 0.717725 1.57671C0.396999 1.89715 0.171246 2.30012 0.0654812 2.74099C-6.09842e-08 3.02583 0 3.34669 0 3.72321V7.81579C0 8.19067 1.21968e-08 8.51316 0.0671184 8.79801C0.172486 9.23896 0.397875 9.64214 0.718313 9.96287C1.03875 10.2836 1.44173 10.5093 1.88259 10.6151C2.16743 10.6806 2.48829 10.6806 2.86481 10.6806H6.95739C7.33227 10.6806 7.65477 10.6806 7.93961 10.6135C8.38057 10.5081 8.78374 10.2827 9.10447 9.96228C9.4252 9.64184 9.65095 9.23887 9.75671 8.79801C9.8222 8.51316 9.8222 8.1923 9.8222 7.81579V3.72321C9.8222 3.34833 9.8222 3.02583 9.75508 2.74099C9.64971 2.30003 9.42432 1.89685 9.10388 1.57612C8.78345 1.2554 8.38047 1.02964 7.93961 0.92388C7.65477 0.858398 7.33391 0.858398 6.95739 0.858398H2.94666ZM2.26402 2.51835C2.33441 2.50198 2.44409 2.49543 2.94666 2.49543H6.87554C7.37974 2.49543 7.48779 2.50034 7.55818 2.51835C7.70524 2.55352 7.83967 2.62873 7.94659 2.73564C8.0535 2.84256 8.12872 2.977 8.16388 3.12405C8.18025 3.19281 8.18516 3.30085 8.18516 3.80506V7.73394C8.18516 8.23814 8.18025 8.34619 8.16225 8.41658C8.12708 8.56363 8.05187 8.69807 7.94495 8.80499C7.83804 8.9119 7.7036 8.98711 7.55654 9.02228C7.48943 9.03701 7.38138 9.04356 6.87554 9.04356H2.94666C2.44245 9.04356 2.33441 9.03865 2.26402 9.02064C2.11696 8.98548 1.98252 8.91027 1.87561 8.80335C1.76869 8.69644 1.69348 8.562 1.65831 8.41494C1.64358 8.34782 1.63703 8.23978 1.63703 7.73394V3.80506C1.63703 3.30085 1.64194 3.19281 1.65995 3.12241C1.69512 2.97536 1.77033 2.84092 1.87724 2.734C1.98416 2.62709 2.1186 2.55188 2.26565 2.51671L2.26402 2.51835ZM14.4059 0.858398H14.324C13.9492 0.858398 13.6267 0.858398 13.3418 0.925517C12.9009 1.03088 12.4977 1.25627 12.177 1.57671C11.8562 1.89715 11.6305 2.30012 11.5247 2.74099C11.4592 3.02583 11.4592 3.34669 11.4592 3.72321V7.81579C11.4592 8.19067 11.4592 8.51316 11.5263 8.79801C11.6317 9.23896 11.8571 9.64214 12.1775 9.96287C12.498 10.2836 12.901 10.5093 13.3418 10.6151C13.6267 10.6806 13.9475 10.6806 14.324 10.6806H18.4166C18.7915 10.6806 19.114 10.6806 19.3988 10.6135C19.8398 10.5081 20.243 10.2827 20.5637 9.96228C20.8844 9.64184 21.1102 9.23887 21.2159 8.79801C21.2814 8.51316 21.2814 8.1923 21.2814 7.81579V3.72321C21.2814 3.34833 21.2814 3.02583 21.2143 2.74099C21.1089 2.30003 20.8836 1.89685 20.5631 1.57612C20.2427 1.2554 19.8397 1.02964 19.3988 0.92388C19.114 0.858398 18.7931 0.858398 18.4166 0.858398H14.4059ZM13.7232 2.51835C13.7936 2.50198 13.9033 2.49543 14.4059 2.49543H18.3348C18.839 2.49543 18.947 2.50034 19.0174 2.51835C19.1645 2.55352 19.2989 2.62873 19.4058 2.73564C19.5127 2.84256 19.5879 2.977 19.6231 3.12405C19.6395 3.19281 19.6444 3.30085 19.6444 3.80506V7.73394C19.6444 8.23814 19.6378 8.34619 19.6215 8.41658C19.5863 8.56363 19.5111 8.69807 19.4042 8.80499C19.2973 8.9119 19.1628 8.98711 19.0158 9.02228C18.947 9.03865 18.839 9.04356 18.3348 9.04356H14.4059C13.9017 9.04356 13.7936 9.03865 13.7232 9.02064C13.5762 8.98548 13.4418 8.91027 13.3348 8.80335C13.2279 8.69644 13.1527 8.562 13.1175 8.41494C13.1028 8.34782 13.0963 8.23978 13.0963 7.73394V3.80506C13.0963 3.30085 13.1012 3.19281 13.1192 3.12241C13.1543 2.97536 13.2296 2.84092 13.3365 2.734C13.4434 2.62709 13.5778 2.55188 13.7249 2.51671L13.7232 2.51835ZM2.86481 12.3176H6.95739C7.33227 12.3176 7.65477 12.3176 7.93961 12.3847C8.38057 12.4901 8.78374 12.7155 9.10447 13.0359C9.4252 13.3564 9.65095 13.7594 9.75671 14.2002C9.8222 14.4851 9.8222 14.8059 9.8222 15.1824V19.275C9.8222 19.6499 9.8222 19.9724 9.75508 20.2572C9.64971 20.6982 9.42432 21.1014 9.10388 21.4221C8.78345 21.7428 8.38047 21.9686 7.93961 22.0743C7.65477 22.1398 7.33391 22.1398 6.95739 22.1398H2.86481C2.48993 22.1398 2.16743 22.1398 1.88259 22.0727C1.44163 21.9673 1.03845 21.7419 0.717725 21.4215C0.396999 21.1011 0.171246 20.6981 0.0654812 20.2572C-6.09842e-08 19.9724 0 19.6515 0 19.275V15.1824C0 14.8076 1.21968e-08 14.4851 0.0671184 14.2002C0.172486 13.7593 0.397875 13.3561 0.718313 13.0354C1.03875 12.7146 1.44173 12.4889 1.88259 12.3831C2.16743 12.3176 2.48829 12.3176 2.86481 12.3176ZM2.94666 13.9547C2.44245 13.9547 2.33441 13.9596 2.26402 13.9776C2.11696 14.0127 1.98252 14.088 1.87561 14.1949C1.76869 14.3018 1.69348 14.4362 1.65831 14.5833C1.64358 14.6504 1.63703 14.7584 1.63703 15.2643V19.1932C1.63703 19.6974 1.64194 19.8054 1.65995 19.8758C1.69512 20.0229 1.77033 20.1573 1.87724 20.2642C1.98416 20.3711 2.1186 20.4463 2.26565 20.4815C2.33441 20.4979 2.44245 20.5028 2.94666 20.5028H6.87554C7.37974 20.5028 7.48779 20.4962 7.55818 20.4799C7.70524 20.4447 7.83967 20.3695 7.94659 20.2626C8.0535 20.1557 8.12872 20.0212 8.16388 19.8742C8.18025 19.8054 8.18516 19.6974 8.18516 19.1932V15.2643C8.18516 14.7601 8.18025 14.652 8.16225 14.5816C8.12708 14.4346 8.05187 14.3001 7.94495 14.1932C7.83804 14.0863 7.7036 14.0111 7.55654 13.9759C7.48943 13.9612 7.38138 13.9547 6.87554 13.9547H2.94666ZM14.4059 12.3176H14.324C13.9492 12.3176 13.6267 12.3176 13.3418 12.3847C12.9009 12.4901 12.4977 12.7155 12.177 13.0359C11.8562 13.3564 11.6305 13.7594 11.5247 14.2002C11.4592 14.4851 11.4592 14.8059 11.4592 15.1824V19.275C11.4592 19.6499 11.4592 19.9724 11.5263 20.2572C11.6317 20.6982 11.8571 21.1014 12.1775 21.4221C12.498 21.7428 12.901 21.9686 13.3418 22.0743C13.6267 22.1415 13.9492 22.1415 14.324 22.1415H18.4166C18.7915 22.1415 19.114 22.1415 19.3988 22.0743C19.8395 21.9687 20.2423 21.7432 20.5627 21.4228C20.8832 21.1024 21.1087 20.6995 21.2143 20.2589C21.2814 19.974 21.2814 19.6515 21.2814 19.2767V15.1824C21.2814 14.8076 21.2814 14.4851 21.2143 14.2002C21.1089 13.7593 20.8836 13.3561 20.5631 13.0354C20.2427 12.7146 19.8397 12.4889 19.3988 12.3831C19.114 12.3176 18.7931 12.3176 18.4166 12.3176H14.4059ZM13.7232 13.9776C13.7936 13.9612 13.9033 13.9547 14.4059 13.9547H18.3348C18.839 13.9547 18.947 13.9596 19.0174 13.9776C19.1645 14.0127 19.2989 14.088 19.4058 14.1949C19.5127 14.3018 19.5879 14.4362 19.6231 14.5833C19.6395 14.652 19.6444 14.7601 19.6444 15.2643V19.1932C19.6444 19.6974 19.6378 19.8054 19.6215 19.8758C19.5863 20.0229 19.5111 20.1573 19.4042 20.2642C19.2973 20.3711 19.1628 20.4463 19.0158 20.4815C18.947 20.4979 18.839 20.5028 18.3348 20.5028H14.4059C13.9017 20.5028 13.7936 20.4962 13.7232 20.4799C13.5762 20.4447 13.4418 20.3695 13.3348 20.2626C13.2279 20.1557 13.1527 20.0212 13.1175 19.8742C13.1028 19.8071 13.0963 19.699 13.0963 19.1932V15.2643C13.0963 14.7601 13.1012 14.652 13.1192 14.5816C13.1543 14.4346 13.2296 14.3001 13.3365 14.1932C13.4434 14.0863 13.5778 14.0111 13.7249 13.9759L13.7232 13.9776Z"
                          fill="white"
                        />
                      </svg>
                      <h5 className={`${!active ? "hidden" : " block"}`}>
                        Dashboard
                      </h5>
                    </div>
                  </li>
                  <li>
                    <div
                      className={`flex items-center gap-4 px-[28px] hover:bg-gray-50 hover:bg-opacity-20 py-2 w-full ${
                        active ? "justify-start" : "justify-center"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="23"
                        viewBox="0 0 21 23"
                        fill="none"
                      >
                        <path
                          d="M10.471 12.6675C9.54523 12.6675 8.65741 13.0352 8.00281 13.6898C7.34822 14.3444 6.98047 15.2322 6.98047 16.158C6.98047 17.0837 7.34822 17.9715 8.00281 18.6261C8.65741 19.2807 9.54523 19.6485 10.471 19.6485C11.3967 19.6485 12.2845 19.2807 12.9391 18.6261C13.5937 17.9715 13.9615 17.0837 13.9615 16.158C13.9615 15.2322 13.5937 14.3444 12.9391 13.6898C12.2845 13.0352 11.3967 12.6675 10.471 12.6675ZM8.97504 16.158C8.97504 15.7612 9.13264 15.3807 9.41319 15.1002C9.69373 14.8197 10.0742 14.6621 10.471 14.6621C10.8677 14.6621 11.2482 14.8197 11.5287 15.1002C11.8093 15.3807 11.9669 15.7612 11.9669 16.158C11.9669 16.5547 11.8093 16.9352 11.5287 17.2158C11.2482 17.4963 10.8677 17.6539 10.471 17.6539C10.0742 17.6539 9.69373 17.4963 9.41319 17.2158C9.13264 16.9352 8.97504 16.5547 8.97504 16.158Z"
                          fill="white"
                        />
                        <path
                          d="M15.9825 5.3033L12.8121 0.858398L1.15486 10.171L0.508615 10.1641V10.174H0V22.1415H20.943V10.174H19.9836L18.0748 4.59024L15.9825 5.3033ZM17.8763 10.174H7.87556L15.3243 7.63495L16.8422 7.14927L17.8763 10.174ZM14.0119 5.97547L6.32279 8.59633L12.4122 3.73158L14.0119 5.97547ZM1.99457 18.3209V13.9926C2.41532 13.8435 2.79749 13.6024 3.11322 13.2869C3.42895 12.9713 3.67027 12.5893 3.8196 12.1686H17.1234C17.2726 12.5894 17.5139 12.9716 17.8297 13.2874C18.1454 13.6031 18.5276 13.8444 18.9484 13.9936V18.3219C18.5276 18.4711 18.1454 18.7124 17.8297 19.0281C17.5139 19.3439 17.2726 19.7261 17.1234 20.1469H3.8216C3.67219 19.7257 3.43063 19.3432 3.11454 19.0273C2.79846 18.7114 2.41582 18.47 1.99457 18.3209Z"
                          fill="white"
                        />
                      </svg>
                      <h5 className={`${!active ? "hidden" : " block"}`}>
                        Payment
                      </h5>
                    </div>
                  </li>
                  <li>
                    <div
                      className={`flex items-center gap-4 px-[28px] hover:bg-gray-50 hover:bg-opacity-20 py-2 w-full ${
                        active ? "justify-start" : "justify-center"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="23"
                        height="21"
                        viewBox="0 0 23 21"
                        fill="none"
                      >
                        <path
                          d="M6.91016 8.13529V15.2296M11.6397 10.5001V15.2296M16.3693 5.77051V15.2296"
                          stroke="white"
                          strokeWidth="1.41887"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M19.9183 1.04077H3.36478C2.05875 1.04077 1 2.09952 1 3.40556V17.5943C1 18.9003 2.05875 19.959 3.36478 19.959H19.9183C21.2243 19.959 22.2831 18.9003 22.2831 17.5943V3.40556C22.2831 2.09952 21.2243 1.04077 19.9183 1.04077Z"
                          stroke="white"
                          strokeWidth="1.41887"
                        />
                      </svg>
                      <h5 className={`${!active ? "hidden" : " block"}`}>
                        Analytics
                      </h5>
                    </div>
                  </li>
                  <li>
                    <div
                      className={`flex items-center gap-4 px-[28px] hover:bg-gray-50 hover:bg-opacity-20 py-2 w-full ${
                        active ? "justify-start" : "justify-center"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="23"
                        viewBox="0 0 21 23"
                        fill="none"
                      >
                        <path
                          d="M20.1567 7.24179C20.1563 6.86853 20.0578 6.50192 19.871 6.17876C19.6842 5.8556 19.4157 5.58725 19.0925 5.40062L11.6426 1.14357C11.319 0.95675 10.952 0.858398 10.5784 0.858398C10.2047 0.858398 9.83767 0.95675 9.5141 1.14357L2.06426 5.40062C1.74101 5.58725 1.47251 5.8556 1.28571 6.17876C1.09892 6.50192 1.00038 6.86853 1 7.24179V15.7559C1.00038 16.1292 1.09892 16.4958 1.28571 16.8189C1.47251 17.1421 1.74101 17.4104 2.06426 17.5971L9.5141 21.8541C9.83767 22.0409 10.2047 22.1393 10.5784 22.1393C10.952 22.1393 11.319 22.0409 11.6426 21.8541L19.0925 17.5971C19.4157 17.4104 19.6842 17.1421 19.871 16.8189C20.0578 16.4958 20.1563 16.1292 20.1567 15.7559V7.24179Z"
                          stroke="white"
                          strokeWidth="1.41887"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M1.32422 6.17749L10.5833 11.4988M10.5833 11.4988L19.8424 6.17749M10.5833 11.4988V22.1414"
                          stroke="white"
                          strokeWidth="1.41887"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <h5 className={`${!active ? "hidden" : " block"}`}>
                        Products
                      </h5>
                    </div>
                  </li>
                  <li>
                    <div
                      className={`flex items-center gap-4 px-[28px] hover:bg-gray-50 hover:bg-opacity-20 py-2 w-full ${
                        active ? "justify-start" : "justify-center"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="23"
                        viewBox="0 0 17 23"
                        fill="none"
                      >
                        <path
                          d="M3.80469 13.0203H9.88556V14.5405H3.80469V13.0203ZM3.80469 9.21973H12.926V10.7399H3.80469V9.21973ZM3.80469 16.8208H7.60523V18.341H3.80469V16.8208Z"
                          fill="white"
                        />
                        <path
                          d="M15.2022 3.13873H12.9219V2.37862C12.9219 1.97543 12.7617 1.58876 12.4766 1.30366C12.1915 1.01856 11.8048 0.858398 11.4016 0.858398H5.32077C4.91758 0.858398 4.53091 1.01856 4.24581 1.30366C3.96071 1.58876 3.80055 1.97543 3.80055 2.37862V3.13873H1.52022C1.11703 3.13873 0.730358 3.29889 0.445262 3.58399C0.160165 3.86908 0 4.25576 0 4.65895V20.6212C0 21.0244 0.160165 21.4111 0.445262 21.6962C0.730358 21.9813 1.11703 22.1415 1.52022 22.1415H15.2022C15.6054 22.1415 15.992 21.9813 16.2771 21.6962C16.5622 21.4111 16.7224 21.0244 16.7224 20.6212V4.65895C16.7224 4.25576 16.5622 3.86908 16.2771 3.58399C15.992 3.29889 15.6054 3.13873 15.2022 3.13873ZM5.32077 2.37862H11.4016V5.41905H5.32077V2.37862ZM15.2022 20.6212H1.52022V4.65895H3.80055V6.93927H12.9219V4.65895H15.2022V20.6212Z"
                          fill="white"
                        />
                      </svg>
                      <h5 className={`${!active ? "hidden" : " block"}`}>
                        Report
                      </h5>
                    </div>
                  </li>
                  <li>
                    <div
                      className={`flex items-center gap-4 px-[28px] hover:bg-gray-50 hover:bg-opacity-20 py-2 w-full ${
                        active ? "justify-start" : "justify-center"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="17"
                        viewBox="0 0 22 17"
                        fill="none"
                      >
                        <path
                          d="M9.31134 16.4811C9.31134 16.4811 7.98115 16.4811 7.98115 15.1509C7.98115 13.8207 9.31134 9.83014 14.6321 9.83014C19.9529 9.83014 21.2831 13.8207 21.2831 15.1509C21.2831 16.4811 19.9529 16.4811 19.9529 16.4811H9.31134ZM14.6321 8.49995C15.6905 8.49995 16.7055 8.07951 17.4539 7.33113C18.2022 6.58276 18.6227 5.56774 18.6227 4.50937C18.6227 3.45101 18.2022 2.43599 17.4539 1.68761C16.7055 0.939233 15.6905 0.518799 14.6321 0.518799C13.5737 0.518799 12.5587 0.939233 11.8103 1.68761C11.062 2.43599 10.6415 3.45101 10.6415 4.50937C10.6415 5.56774 11.062 6.58276 11.8103 7.33113C12.5587 8.07951 13.5737 8.49995 14.6321 8.49995ZM6.93828 16.4811C6.74108 16.0658 6.64274 15.6105 6.65096 15.1509C6.65096 13.3485 7.55549 11.4929 9.22621 10.2026C8.3923 9.94565 7.52349 9.81999 6.65096 9.83014C1.33019 9.83014 0 13.8207 0 15.1509C0 16.4811 1.33019 16.4811 1.33019 16.4811H6.93828ZM5.98586 8.49995C6.86783 8.49995 7.71368 8.14959 8.33733 7.52594C8.96098 6.90229 9.31134 6.05644 9.31134 5.17447C9.31134 4.2925 8.96098 3.44665 8.33733 2.823C7.71368 2.19935 6.86783 1.84899 5.98586 1.84899C5.10389 1.84899 4.25804 2.19935 3.63439 2.823C3.01074 3.44665 2.66038 4.2925 2.66038 5.17447C2.66038 6.05644 3.01074 6.90229 3.63439 7.52594C4.25804 8.14959 5.10389 8.49995 5.98586 8.49995Z"
                          fill="white"
                        />
                      </svg>
                      <h5 className={`${!active ? "hidden" : " block"}`}>
                        Customers
                      </h5>
                    </div>
                  </li>
                </ul>
              </div>

              <div className=" space-y-8 w-full">
                <div className="Settings w-full flex flex-col items-center">
                  <ul className=" space-y-4 w-full">
                    <li>
                      <div
                        className={`flex items-center gap-4 px-[28px] hover:bg-gray-50 hover:bg-opacity-20 py-2 w-full ${
                          active ? "justify-start" : "justify-center"
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="21"
                          height="23"
                          viewBox="0 0 21 23"
                          fill="none"
                        >
                          <path
                            d="M18.742 12.0793V10.913L20.2055 9.63237C20.4753 9.39459 20.6524 9.06908 20.7054 8.71339C20.7584 8.35769 20.6839 7.99471 20.4952 7.68859L18.6963 4.63952C18.5626 4.408 18.3704 4.21569 18.1389 4.0819C17.9075 3.9481 17.6449 3.87753 17.3775 3.87726C17.2119 3.87599 17.0471 3.90173 16.8897 3.95348L15.0374 4.57854C14.7176 4.36603 14.384 4.17504 14.0388 4.00684L13.65 2.08593C13.5803 1.73498 13.3894 1.41974 13.1107 1.19537C12.832 0.971009 12.4832 0.851823 12.1255 0.858679H8.5581C8.20037 0.851823 7.85162 0.971009 7.57291 1.19537C7.29419 1.41974 7.10327 1.73498 7.03357 2.08593L6.64481 4.00684C6.29717 4.175 5.96103 4.36598 5.63862 4.57854L3.82442 3.92299C3.66533 3.88154 3.50059 3.8661 3.33657 3.87726C3.06922 3.87753 2.80665 3.9481 2.57519 4.0819C2.34373 4.21569 2.15152 4.408 2.01785 4.63952L0.218898 7.68859C0.0409746 7.99425 -0.0251409 8.35227 0.0318749 8.70131C0.0888906 9.05036 0.26549 9.36873 0.531427 9.60188L1.97211 10.9206V12.0869L0.531427 13.3675C0.257978 13.6023 0.0765484 13.9263 0.0193351 14.2822C-0.0378783 14.638 0.0328251 15.0026 0.218898 15.3113L2.01785 18.3603C2.15152 18.5919 2.34373 18.7842 2.57519 18.918C2.80665 19.0518 3.06922 19.1223 3.33657 19.1226C3.50225 19.1239 3.66703 19.0981 3.82442 19.0464L5.67673 18.4213C5.99653 18.6338 6.33013 18.8248 6.6753 18.993L7.06406 20.9139C7.13376 21.2649 7.32468 21.5801 7.6034 21.8045C7.88211 22.0289 8.23086 22.148 8.58859 22.1412H12.1865C12.5442 22.148 12.893 22.0289 13.1717 21.8045C13.4504 21.5801 13.6413 21.2649 13.711 20.9139L14.0998 18.993C14.4474 18.8249 14.7836 18.6339 15.106 18.4213L16.9507 19.0464C17.1081 19.0981 17.2728 19.1239 17.4385 19.1226C17.7059 19.1223 17.9684 19.0518 18.1999 18.918C18.4314 18.7842 18.6236 18.5919 18.7572 18.3603L20.4952 15.3113C20.6731 15.0056 20.7392 14.6476 20.6822 14.2985C20.6252 13.9495 20.4486 13.6311 20.1827 13.398L18.742 12.0793ZM17.3775 17.5981L14.763 16.7138C14.1509 17.2323 13.4514 17.6375 12.6972 17.9106L12.156 20.6471H8.5581L8.01689 17.9411C7.26867 17.6603 6.57294 17.2557 5.95877 16.7443L3.33657 17.5981L1.53762 14.549L3.61099 12.7196C3.47004 11.9305 3.47004 11.1227 3.61099 10.3337L1.53762 8.45086L3.33657 5.40179L5.95115 6.28602C6.5632 5.7676 7.26271 5.36235 8.01689 5.08926L8.5581 2.35272H12.156L12.6972 5.05877C13.4454 5.33961 14.1412 5.74416 14.7553 6.25553L17.3775 5.40179L19.1765 8.45086L17.1031 10.2803C17.2441 11.0694 17.2441 11.8771 17.1031 12.6662L19.1765 14.549L17.3775 17.5981Z"
                            fill="white"
                          />
                          <path
                            d="M10.3549 16.074C9.45028 16.074 8.56602 15.8057 7.8139 15.3032C7.06177 14.8006 6.47556 14.0863 6.1294 13.2506C5.78323 12.4149 5.69266 11.4953 5.86913 10.6081C6.04561 9.72091 6.4812 8.90597 7.12083 8.26634C7.76046 7.62671 8.5754 7.19111 9.46259 7.01464C10.3498 6.83817 11.2694 6.92874 12.1051 7.2749C12.9408 7.62107 13.6551 8.20728 14.1577 8.9594C14.6602 9.71153 14.9285 10.5958 14.9285 11.5004C14.9346 12.1027 14.8205 12.7002 14.5928 13.2578C14.3651 13.8155 14.0284 14.3221 13.6025 14.748C13.1766 15.1739 12.67 15.5106 12.1123 15.7383C11.5546 15.966 10.9572 16.0801 10.3549 16.074ZM10.3549 8.45129C9.95188 8.44191 9.55119 8.51436 9.17701 8.66426C8.80284 8.81417 8.46296 9.03842 8.17794 9.32344C7.89291 9.60847 7.66866 9.94835 7.51876 10.3225C7.36885 10.6967 7.2964 11.0974 7.30579 11.5004C7.2964 11.9033 7.36885 12.304 7.51876 12.6782C7.66866 13.0524 7.89291 13.3923 8.17794 13.6773C8.46296 13.9623 8.80284 14.1866 9.17701 14.3365C9.55119 14.4864 9.95188 14.5588 10.3549 14.5494C10.7578 14.5588 11.1585 14.4864 11.5327 14.3365C11.9069 14.1866 12.2467 13.9623 12.5318 13.6773C12.8168 13.3923 13.041 13.0524 13.191 12.6782C13.3409 12.304 13.4133 11.9033 13.4039 11.5004C13.4133 11.0974 13.3409 10.6967 13.191 10.3225C13.041 9.94835 12.8168 9.60847 12.5318 9.32344C12.2467 9.03842 11.9069 8.81417 11.5327 8.66426C11.1585 8.51436 10.7578 8.44191 10.3549 8.45129Z"
                            fill="white"
                          />
                        </svg>
                        <h5 className={`${!active ? "hidden" : " block"}`}>
                          Settings
                        </h5>
                      </div>
                    </li>
                    <li>
                      <div
                        className={`flex items-center gap-4 px-[28px] hover:bg-gray-50 hover:bg-opacity-20 py-2 w-full ${
                          active ? "justify-start" : "justify-center"
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="19"
                          viewBox="0 0 22 19"
                          fill="none"
                        >
                          <path
                            d="M1.71638 8.47007H3.43275V12.5894H2.40293C2.1298 12.5894 1.86786 12.6979 1.67473 12.891C1.4816 13.0841 1.3731 13.3461 1.3731 13.6192C1.3731 13.8923 1.4816 14.1543 1.67473 14.3474C1.86786 14.5405 2.1298 14.649 2.40293 14.649H18.8801C19.1533 14.649 19.4152 14.5405 19.6083 14.3474C19.8015 14.1543 19.91 13.8923 19.91 13.6192C19.91 13.3461 19.8015 13.0841 19.6083 12.891C19.4152 12.6979 19.1533 12.5894 18.8801 12.5894H17.8503V8.47007H19.5667C19.7909 8.47009 20.009 8.39692 20.1879 8.26168C20.3668 8.12643 20.4966 7.93651 20.5577 7.72075C20.6187 7.50499 20.6077 7.27519 20.5263 7.06627C20.4449 6.85734 20.2975 6.6807 20.1065 6.56318L11.1813 1.07078C11.019 0.970869 10.8321 0.917969 10.6415 0.917969C10.4509 0.917969 10.2641 0.970869 10.1017 1.07078L1.17658 6.56318C0.985601 6.6807 0.838203 6.85734 0.756771 7.06627C0.67534 7.27519 0.664325 7.50499 0.725402 7.72075C0.786478 7.93651 0.916307 8.12643 1.09517 8.26168C1.27403 8.39692 1.49214 8.47009 1.71638 8.47007ZM5.4924 8.47007H7.55205V12.5894H5.4924V8.47007ZM11.6714 8.47007V12.5894H9.61171V8.47007H11.6714ZM15.7907 12.5894H13.731V8.47007H15.7907V12.5894ZM10.6415 3.15703L15.928 6.41042H5.35509L10.6415 3.15703ZM21.2831 17.052C21.2831 17.3251 21.1746 17.587 20.9814 17.7801C20.7883 17.9733 20.5264 18.0818 20.2532 18.0818H1.02983C0.756699 18.0818 0.494759 17.9733 0.301629 17.7801C0.108499 17.587 0 17.3251 0 17.052C0 16.7788 0.108499 16.5169 0.301629 16.3238C0.494759 16.1306 0.756699 16.0221 1.02983 16.0221H20.2532C20.5264 16.0221 20.7883 16.1306 20.9814 16.3238C21.1746 16.5169 21.2831 16.7788 21.2831 17.052Z"
                            fill="white"
                          />
                        </svg>
                        <h5 className={`${!active ? "hidden" : " block"}`}>
                          Billing
                        </h5>
                      </div>
                    </li>
                    <li>
                      <div
                        className={`flex items-center gap-4 px-[28px] hover:bg-gray-50 hover:bg-opacity-20 py-2 w-full ${
                          active ? "justify-start" : "justify-center"
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="19"
                          height="23"
                          viewBox="0 0 19 23"
                          fill="none"
                        >
                          <path
                            d="M1.81152 8.10448C1.81152 6.1827 2.57494 4.33963 3.93385 2.98073C5.29275 1.62182 7.13582 0.858398 9.0576 0.858398C10.9794 0.858398 12.8224 1.62182 14.1813 2.98073C15.5402 4.33963 16.3037 6.1827 16.3037 8.10448V12.3588L18.1152 15.0761V18.9736H13.033C12.8269 19.8737 12.3216 20.6772 11.5995 21.2526C10.8774 21.8281 9.98139 22.1415 9.05805 22.1415C8.1347 22.1415 7.2387 21.8281 6.51662 21.2526C5.79454 20.6772 5.28915 19.8737 5.08312 18.9736H0V15.0761L1.81152 12.3588V8.10448ZM6.98159 18.9736C7.15766 19.3778 7.44788 19.7218 7.81666 19.9634C8.18543 20.205 8.61672 20.3337 9.0576 20.3337C9.49847 20.3337 9.92976 20.205 10.2985 19.9634C10.6673 19.7218 10.9575 19.3778 11.1336 18.9736H6.98159ZM9.0576 2.66992C7.61626 2.66992 6.23396 3.24249 5.21478 4.26166C4.19561 5.28084 3.62304 6.66314 3.62304 8.10448V12.9077L1.81152 15.625V17.1621H16.3037V15.625L14.4922 12.9077V8.10448C14.4922 6.66314 13.9196 5.28084 12.9004 4.26166C11.8812 3.24249 10.4989 2.66992 9.0576 2.66992Z"
                            fill="white"
                          />
                        </svg>
                        <h5 className={`${!active ? "hidden" : " block"}`}>
                          Notifications
                        </h5>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className=" flex gap-4 px-[28px] items-center">
                  <div className=" aspect-square bg-white w-[50px] h-[50px] rounded-full"></div>

                  <div className={`${!active ? "hidden" : " block"}`}>
                    <h5>John Doe</h5>
                    <h6>john333@doe.ia</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
