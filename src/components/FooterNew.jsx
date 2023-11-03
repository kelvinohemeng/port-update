import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { BtnDef } from "./BtnDef";

const FooterNew = () => {
  const containerClass = "container mx-auto md:px-8 px-4";
  const mediumText = "text-[1.843rem]";
  const medText = "text-[1.873rem]";
  const bigText = "text-[2.5rem] md:text-[5.13975rem] leading-[95%]";
  const bg = "bg-[#e8e8ea]";
  const defRounded = " rounded-[1.25rem]";
  const globalPadding = " py-[20vh]";
  return (
    <footer>
      <div
        className={`${containerClass} ${globalPadding} flex flex-col gap-12 w-full`}
      >
        <div className="flex flex-col md:flex-row gap-8 justify-between items-center text-[#201e1e]">
          <div className="">
            <a
              href="https://calendly.com/kelvinohemeng59/contra-client"
              target="_blank"
              className={`px-[0.7rem] text-center py-[1.2rem] md:px-[1.88rem] md:py-[2.13rem] bg-[#2E3BB2] text-white ${mediumText} ${defRounded} hover:bg-opacity-70 duration-200`}
            >
              Book a call session with me
            </a>
          </div>
          <div className=" flex flex-col gap-8">
            <div className=" flex flex-col gap-4 justify-between items-center">
              <h5>follow my socials</h5>
              <div className=" flex gap-4">
                <a
                  href="https://www.linkedin.com/in/kelvinohemeng/"
                  target="_blank"
                  className={`p-[.88rem] bg-[#201e1e]  ${defRounded} hover:bg-opacity-70 duration-200 `}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="21"
                    viewBox="0 0 22 21"
                    fill="none"
                  >
                    <path
                      d="M15 7C16.5913 7 18.1174 7.63214 19.2426 8.75736C20.3679 9.88258 21 11.4087 21 13V20H17V13C17 12.4696 16.7893 11.9609 16.4142 11.5858C16.0391 11.2107 15.5304 11 15 11C14.4696 11 13.9609 11.2107 13.5858 11.5858C13.2107 11.9609 13 12.4696 13 13V20H9V13C9 11.4087 9.63214 9.88258 10.7574 8.75736C11.8826 7.63214 13.4087 7 15 7Z"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5 8H1V20H5V8Z"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 5C4.10457 5 5 4.10457 5 3C5 1.89543 4.10457 1 3 1C1.89543 1 1 1.89543 1 3C1 4.10457 1.89543 5 3 5Z"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a
                  href="https://twitter.com/K_DesignBox"
                  target="_blank"
                  className={`p-[.88rem] bg-[#201e1e]  ${defRounded} hover:bg-opacity-70 duration-200 `}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="20"
                    viewBox="0 0 24 20"
                    fill="none"
                  >
                    <path
                      d="M23 1.01006C22.0424 1.68553 20.9821 2.20217 19.86 2.54006C19.2577 1.84757 18.4573 1.35675 17.567 1.13398C16.6767 0.911216 15.7395 0.967251 14.8821 1.29451C14.0247 1.62177 13.2884 2.20446 12.773 2.96377C12.2575 3.72309 11.9877 4.62239 12 5.54006V6.54006C10.2426 6.58562 8.50127 6.19587 6.93101 5.4055C5.36074 4.61513 4.01032 3.44869 3 2.01006C3 2.01006 -1 11.0101 8 15.0101C5.94053 16.408 3.48716 17.109 1 17.0101C10 22.0101 21 17.0101 21 5.51006C20.9991 5.23151 20.9723 4.95365 20.92 4.68006C21.9406 3.67355 22.6608 2.40277 23 1.01006Z"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a
                  href="https://github.com/kelvinohemeng"
                  target="_blank"
                  className={`p-[.88rem] bg-[#201e1e]  ${defRounded} hover:bg-opacity-70 duration-200 `}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="23"
                    viewBox="0 0 21 23"
                    fill="none"
                  >
                    <path
                      d="M8 19.0268C3 20.5268 3 16.5268 1 16.0268M15 22.0268V18.1568C15.0375 17.68 14.9731 17.2006 14.811 16.7506C14.6489 16.3006 14.3929 15.8902 14.06 15.5468C17.2 15.1968 20.5 14.0068 20.5 8.54679C20.4997 7.15062 19.9627 5.80799 19 4.79679C19.4559 3.5753 19.4236 2.22514 18.91 1.02679C18.91 1.02679 17.73 0.676793 15 2.50679C12.708 1.88561 10.292 1.88561 8 2.50679C5.27 0.676793 4.09 1.02679 4.09 1.02679C3.57638 2.22514 3.54414 3.5753 4 4.79679C3.03013 5.81549 2.49252 7.17026 2.5 8.57679C2.5 13.9968 5.8 15.1868 8.94 15.5768C8.611 15.9168 8.35726 16.3222 8.19531 16.7667C8.03335 17.2112 7.96681 17.6849 8 18.1568V22.0268"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className=" self-center md:self-start text-[#201e1e] flex flex-col md:flex-row items-center space-y-2  justify-between w-full mt-8 opacity-60">
          <p>Designed and developed by me</p>
          <p> © 2023 All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
export default FooterNew;
