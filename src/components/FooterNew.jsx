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
      <div className={`${containerClass} ${globalPadding} flex w-full`}>
        <div className="  flex flex-col text-white items-center space-y-2  justify-between w-full mt-8 opacity-60">
          <p>Designed and developed by me</p>
          <p> © 2023 All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
export default FooterNew;
