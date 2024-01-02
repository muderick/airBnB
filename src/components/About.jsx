import React from "react";
import AboutImg from '../assets/about.jpg';
import './About.css';

export const About = () => {
  return (
    <div id="About" className="bg-white flex w-full h-screen flex-col justify-center px-16 items-end max-md:max-w-full max-md:px-5">
        <div className="w-full justify-center absolute left-6">
            <img src={AboutImg} alt="" className="w-[70%] h-[640px] relative left-24 no-repeat object-center object-cover inset-0" />
        </div>
      <div className="about_desc items-stretch shadow-lg bg-blue-800 flex w-[488px] max-w-full flex-col mr-[3.5rem] mt-40 mb-44 pl-10 pr-16 py-12 rounded-sm max-md:mr-2.5 max-md:my-10 max-md:px-5">
        <div className="text-white text-4xl font-bold mt-2">About us</div>
        <div className="text-white text-xl mt-12 mb-24 max-md:my-10">
          &quot;At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga.
        </div>
      </div>
    </div>
  );
};
