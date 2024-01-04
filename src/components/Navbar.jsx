import React, { useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Navbar = () => {
  const [activeBtn, setActiveBtn] = useState(null);

  const handleBtnClick = (buttonId) => {
    setActiveBtn(buttonId);
  }
  return (
    <section
      id="navBar"
      className="justify-between items-stretch bg-white flex w-full gap-5 pl-5 pr-20 py-2 max-md:max-w-full max-md:flex-wrap max-md:px-5"
    >
      <div className="flex items-stretch justify-between gap-3">
        <div className="">
          <FontAwesomeIcon
            icon="fa-brands fa-airbnb"
            className="w-[60px] h-[60px] text-[#1877f2] icon"
          />
        </div>
        <div className="text-blue-800 text-3xl italic font-bold self-center grow whitespace-nowrap my-auto">
          AirBNB
        </div>
      </div>
      <div className="items-stretch self-center flex justify-between gap-5 my-auto max-md:max-w-full max-md:flex-wrap">
        <a
          href="#Homepage"
          className={`text-zinc-900 font-semibold nav-link text-lg px-2 ${activeBtn === 1 ? "active" : ""}`}
          onClick={() => handleBtnClick(1)}
        >
          Home
        </a>
        <a
          href="#Reputation"
          className={`text-zinc-900 font-semibold nav-link text-lg px-2 ${activeBtn === 2 ? "active" : ""}`}
          onClick={() => handleBtnClick(2)}
        >
          Reputation
        </a>
        <a
          href="#About"
          className={`text-zinc-900 nav-link text-lg px-2 font-semibold ${activeBtn === 3 ? "active" : ""}`}
          onClick={() => handleBtnClick(3)}
        >
          About Us
        </a>
        <a
          href="#Houses"
          className={`text-zinc-900 nav-link text-lg px-2 font-semibold ${activeBtn === 4 ? "active" : ""}`}
          onClick={() => handleBtnClick(4)}
        >
          Houses
        </a>
        <a
          href="#ContactUs"
          className={`text-orange-400 nav-link-contact text-lg px-2 font-semibold ${activeBtn === 5 ? "active" : ""}`}
          onClick={() => handleBtnClick(5)}
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};
