import React from "react";
import "./Homepage.css";
import HomepageImg from '../assets/Homepage.jpeg';

export const Homepage = () => {
  return (
    <section
      id="Homepage"
      className="flex overflow-hidden relative flex min-h-[698px] w-full items-stretch max-md:max-w-full max-md:pl-5"
    >
      <img
          loading="lazy"
          srcSet={HomepageImg}
          className="absolute h-full w-full object-cover object-center inset-0 scroll no-repeat"
          alt=""
        />
      <div className="w-full flex justify-between">
        <div className="relative text-slate-800 text-7xl font-semibold w-[556px] h-full pl-20 py-44 max-md:max-w-full max-md:text-4xl max-md:pt-10">
          Providing you a comfortable stay.
        </div>
        <div className="relative items-center bg-blue-700 flex w-[500px] max-w-full flex-col mt-2 pl-14 pr-6 py-6 rounded-sm self-end max-md:px-5">
          <div className="text-white text-center text-xl font-bold whitespace-nowrap">
            Goal
          </div>
          <div className="text-white text-center text-4xl self-stretch mt-5">
            To achieve a global outreach
          </div>
        </div>


      </div>
    </section>
  );
};
