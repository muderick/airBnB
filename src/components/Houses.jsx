import React from "react";
import './Houses.css';
import BedroomImg from "../assets/bedroom.jpg";

export const Houses = () => {
  return (
    <section id="Houses" className="bg-white flex w-full h-[fit-content] flex-col px-10 py-12 max-md:max-w-full max-md:px-5 overflow-hidden">
      <div className="text-slate-800 text-center text-4xl font-bold self-center whitespace-nowrap mt-16 mb-4">
        Houses
      </div>
      <div className="grid mt-4 houseItem gap-4 mx-auto">
        <div className="w-[384px] relative">
          <div className="w-[384px] h-[247px] rounded-sm items-start">
            <div className="self-stretch h-60">
              <img
                loading="lazy"
                srcSet={BedroomImg}
                className="absolute w-[384px] h-[247px] object-cover object-center inset-0 scroll no-repeat"
                alt=""
              />
            </div>
          </div>
          <div className="w-[384px] h-[129px] pl-3.5 py-6 mix-blend-darken bg-[#2947A9] text-[#FFFFFF] items-start gap-5">
            <div className="w-14 grow shrink basis-0 relative font-semibold">Name: </div>
            <div className="self-stretch grow shrink basis-0 relative font-semibold">Location: </div>
            <div className="w-16 h-3.5 relative font-semibold house-info">
              View More
              <div className="overlay-info">
                <div>Collage</div>
                <div><h5>Amenities</h5></div>
              </div>
              </div>
          </div>
        </div>

        <div className="w-[384px] h-[247px] relative">
          <div className="w-96 h-60 rounded-sm flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-60">
              <img
                loading="lazy"
                srcSet={BedroomImg}
                className="absolute w-[384px] h-[247px] object-cover object-center inset-0 scroll no-repeat"
                alt=""
              />
            </div>
          </div>
          <div className="w-[384px] h-[129px] pl-3.5 py-6 bg-[#2947A9] text-[#FFFFFF] items-start gap-5">
            <div className="w-14 grow shrink basis-0 relative font-semibold">Name: </div>
            <div className="self-stretch grow shrink basis-0 relative font-semibold">Location: </div>
            <div className="w-16 h-3.5 relative font-semibold">Kshs. 0</div>
          </div>
        </div>

        <div className="w-[384px] h-[247px] relative">
          <div className="w-96 h-60 rounded-sm flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-60 border border-black">
              <img
                loading="lazy"
                srcSet={BedroomImg}
                className="absolute w-[384px] h-[247px] object-cover object-center inset-0 scroll no-repeat"
                alt=""
              />
            </div>
          </div>
          <div className="w-[384px] h-[129px] pl-3.5 py-6 bg-[#2947A9] text-[#FFFFFF] items-start gap-5">
            <div className="w-14 grow shrink basis-0 relative font-semibold">Name: </div>
            <div className="self-stretch grow shrink basis-0 relative font-semibold">Location: </div>
            <div className="w-16 h-3.5 relative font-semibold">Kshs. 0</div>
          </div>
        </div>

        <div className="w-[384px] h-[247px] relative">
          <div className="w-96 h-60 rounded-sm flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-60 border border-black">
              <img
                loading="lazy"
                srcSet={BedroomImg}
                className="absolute w-[384px] h-[247px] object-cover object-center inset-0 scroll no-repeat"
                alt=""
              />
            </div>
          </div>
          <div className="w-[384px] h-[129px] pl-3.5 py-6 bg-[#2947A9] text-[#FFFFFF] items-start gap-5">
            <div className="w-14 grow shrink basis-0 relative font-semibold">Name: </div>
            <div className="self-stretch grow shrink basis-0 relative font-semibold">Location: </div>
            <div className="w-16 h-3.5 relative font-semibold">Kshs. 0</div>
          </div>
        </div>

        <div className="w-[384px] h-[247px] relative">
          <div className="w-96 h-60 rounded-sm flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-60 border border-black">
              <img
                loading="lazy"
                srcSet={BedroomImg}
                className="absolute w-[384px] h-[247px] object-cover object-center inset-0 scroll no-repeat"
                alt=""
              />
            </div>
          </div>
          <div className="w-[384px] h-[129px] pl-3.5 py-6 bg-[#2947A9] text-[#FFFFFF]  items-start gap-5">
            <div className="w-14 grow shrink basis-0 relative font-semibold">Name: </div>
            <div className="self-stretch grow shrink basis-0 relative font-semibold">Location: </div>
            <div className="w-16 h-3.5 relative font-semibold">Kshs. 0</div>
          </div>
        </div>

        <div className="w-[384px] h-[247px] relative">
          <div className="w-96 h-60 rounded-sm flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-60 border border-black">
              <img
                loading="lazy"
                srcSet={BedroomImg}
                className="absolute w-[384px] h-[247px] object-cover object-center inset-0 scroll no-repeat"
                alt=""
              />
            </div>
          </div>
          <div className="w-[384px] h-[129px] pl-3.5 py-6 bg-[#2947A9] text-[#FFFFFF] items-start gap-5">
            <div className="w-14 grow shrink basis-0 relative font-semibold">Name: </div>
            <div className="self-stretch grow shrink basis-0 relative font-semibold">Location: </div>
            <div className="w-16 h-3.5 relative font-semibold">Kshs. 0</div>
          </div>
        </div>
      </div>
    </section>
  );
};
