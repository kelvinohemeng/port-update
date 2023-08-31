import { Image, Video } from "cloudinary-react";
import React, { useEffect } from "react";

export const DisplaySomething = ({ toDisplay, reverse }) => {
  return (
    <div
      className=" fixed inset-0 disp-som z-50 backdrop-blur-sm"
      onClick={reverse}
    >
      <div className="relative h-full container mx-auto px-4 flex items-center justify-center">
        {toDisplay[0].image ? (
          <Image
            className=" w-full md:max-w-[500px]"
            publicId={toDisplay[0].image}
          />
        ) : (
          <Video
            className=" w-full md:max-w-[500px]"
            controls
            autoPlay
            publicId={toDisplay[0].video}
            controlsList="nodownload"
          />
        )}
      </div>
    </div>
  );
};
