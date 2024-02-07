import React, { useState } from "react";
import "./Houses.css";
import BedroomImg from "../assets/bedroom.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal } from "./Modal";

export const Houses = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section
      id="Houses"
      className="bg-white flex w-full h-[fit-content] flex-col px-10 py-12 max-md:max-w-full max-md:px-5 overflow-hidden"
    >
      <div className="text-slate-800 text-center text-4xl font-bold self-center whitespace-nowrap mt-16 mb-4">
        Houses
      </div>
      <div className="grid mt-4 houseItem gap-4 mx-auto">
        <div className="w-[384px]">
          <div className="w-[384px] h-[247px] rounded-sm items-start relative">
            <div className="self-stretch h-60">
              <img
                loading="lazy"
                srcSet={BedroomImg}
                className="w-[384px] h-[247px] object-cover object-center inset-0 scroll no-repeat"
                alt=""
              />
            </div>
          </div>
          <div className="w-[384px] h-[129px] pl-3.5 py-6 mix-blend-darken bg-[#2947A9] text-[#FFFFFF] items-start gap-5">
            <div className="w-14 grow shrink basis-0 relative font-semibold">
              Name:{" "}
            </div>
            <div className="self-stretch grow shrink basis-0 relative font-semibold">
              Location:{" "}
            </div>
            <div className="w-full font-semibold house-info grid">
              <div
                onClick={openModal}
                className="cursor-pointer p-2 rounded-md bg-white text-[#2947A9] w-28"
              >
                View More :
              </div>
              <Modal isOpen={isModalOpen} onClose={closeModal}>
                <h2>Your Modal Content Goes Here</h2>
              </Modal>
            </div>
          </div>
        </div>

        <div className="w-[384px]">
          <div className="w-[384px] h-[247px] rounded-sm items-start">
            <div className="self-stretch h-60 relative">
              <img
                loading="lazy"
                srcSet={BedroomImg}
                className="absolute w-[384px] h-[247px] object-cover object-center inset-0 scroll no-repeat"
                alt=""
              />
            </div>
          </div>
          <div className="w-[384px] h-[129px] pl-3.5 py-6 mix-blend-darken bg-[#2947A9] text-[#FFFFFF] items-start gap-5">
            <div className="w-14 grow shrink basis-0 relative font-semibold">
              Name:{" "}
            </div>
            <div className="self-stretch grow shrink basis-0 relative font-semibold">
              Location:{" "}
            </div>
            <div className="w-full font-semibold house-info relative">
              <div
                onClick={openModal}
                className="cursor-pointer p-2 rounded-md bg-white text-[#2947A9] w-28"
              >
                View More :
              </div>
              <Modal isOpen={isModalOpen} onClose={closeModal}>
                <h2>Your Modal Content Goes Here</h2>
                <p>Additional content...</p>
                <div className="self-stretch h-60">
            </div>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
