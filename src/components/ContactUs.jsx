import React from "react";

export const ContactUs = () => {
  return (
    <div className="w-96 h-96 relative bg-white flex-col justify-start items-start inline-flex">
      <div className="flex-col justify-start items-start gap-8 inline-flex">
        <div className="justify-start items-start gap-8 inline-flex">
          <div className="text-zinc-900 text-xl font-medium font-['Work Sans']">
            Phone:
          </div>
          <div className="text-slate-800 text-xl font-normal font-['Work Sans'] capitalize">
            +254000000000
          </div>
        </div>
        <div className="justify-start items-start gap-10 inline-flex">
          <div className="text-zinc-900 text-xl font-medium font-['Work Sans']">
            Email:
          </div>
          <div className="text-black text-xl font-normal font-['Work Sans']">
            hello@gmail.com
          </div>
        </div>
      </div>
      <div className="text-zinc-900 text-xl font-medium font-['Work Sans']">
        Social:
      </div>
      <div className="w-10 h-10 bg-black bg-opacity-10 rounded-full" />
      <div className="w-10 h-10 justify-center items-center inline-flex" />
      <div className="w-10 h-10 p-px justify-center items-center inline-flex" />
      <div className="w-10 h-10 p-px justify-center items-center inline-flex" />
      <div className="relative">
        <div className="left-0 top-0 absolute text-zinc-900 text-3xl font-bold font-['Work Sans']">
          AirBNB
        </div>
      </div>
    </div>
  );
};
