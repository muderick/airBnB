import React from "react";
import "./Homepage.css";
import HomepageImg from "../assets/Homepage.jpeg";

export const Homepage = () => {
  return (
    <section
      id="Homepage"
      className="flex overflow-hidden relative min-h-screen w-full items-stretch max-md:max-w-full max-md:pl-5"
    >
      <img
        loading="lazy"
        srcSet={HomepageImg}
        className="absolute h-full w-full object-cover object-center inset-0 scroll no-repeat"
        alt=""
      />
      <div className="absolute w-full h-full top-0 left-0 flex justify-between">
        <div className="relative top-0 linear-g text-slate-800 text-7xl font-semibold w-[50%] min-h-[780px] pl-20 py-44 max-md:max-w-full max-md:text-4xl max-md:pt-10">
          <div className="mt-20">
            Providing you a <br /> comfortable <br /> stay.
          </div>
        </div>
        <div className="relative h-[20rem] pt-[5rem] items-center bg-blue-700 flex w-[500px] max-w-full flex-col bottom-8 pl-14 pr-6 py-6 rounded-sm self-end max-md:px-5">
          <div className="text-white text-center text-xl font-bold whitespace-nowrap">
            Why Choose Us
          </div>
          <div className="text-white text-center text-2xl self-stretch mt-5">
            The houses listed have been verified by our team of experts hence
            reducing insecurity threat.
          </div>
        </div>
      </div>
    </section>
  );
};
