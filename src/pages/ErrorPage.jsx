import React from "react";
import { BtnDef } from "../components/BtnDef";

export const ErrorPage = () => {
  return (
    <div className=" h-screen flex items-center justify-center flex-col gap-8">
      <div>
        <h1 className=" text-[3.5rem]">404</h1>
        <p>page not found</p>
      </div>
      <BtnDef linkTo="/">Go back home</BtnDef>
    </div>
  );
};
