import { Image, Video } from "cloudinary-react";
import React, { useEffect } from "react";
import { BtnDef } from "./BtnDef";

export const DisplaySomething = ({ toDisplay, reverse, context, linkTo }) => {
  return (
    <div
      className=" fixed bg-black bg-opacity-90 inset-0 disp-som z-[9999999] backdrop-blur-sm"
      onClick={reverse}
    >
      <div className="relative h-full container mx-auto px-4 flex items-center justify-center">
        <div className="text-white  flex flex-col md:flex-row p-3 md:p-5 gap-4 md:max-w-[900px]">
          <div className="flex-1">
            {toDisplay[0].image ? (
              <Image
                className=" w-full aspect-square  h-full object-cover"
                quality="50"
                publicId={toDisplay[0].image}
              />
            ) : (
              <Video
                className=" w-full aspect-video bg-black h-full object-cover"
                controls
                autoPlay
                quality="50"
                publicId={toDisplay[0].video}
                controlsList="nodownload"
              />
            )}
          </div>
          <div className="context flex-1 space-y-2">
            {context.title ? <h5>{context.title}</h5> : ""}
            {context ? <p className=" opacity-60">{context.text}</p> : ""}
            {linkTo ? (
              <div className=" pt-3">
                <BtnDef
                  target
                  linkTo={linkTo}
                  customIcon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 256 256"
                    >
                      <path d="M128,136v64a8,8,0,0,1-16,0V155.32L45.66,221.66a8,8,0,0,1-11.32-11.32L100.68,144H56a8,8,0,0,1,0-16h64A8,8,0,0,1,128,136ZM208,32H80A16,16,0,0,0,64,48V96a8,8,0,0,0,16,0V48H208V176H160a8,8,0,0,0,0,16h48a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Z"></path>
                    </svg>
                  }
                  className=" bg-blue-800"
                >
                  {" "}
                  visit original
                </BtnDef>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
