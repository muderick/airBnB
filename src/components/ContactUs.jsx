import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ContactUs.css";

export const ContactUs = () => {
  return (
    <section
      id="ContactUs"
      className="w-full h-full mt-[16rem] flex relative bg-white mb-[8rem]"
    >
      <div className="grid contacts w-1/2 pl-[10rem] h-[20%] my-auto">
        <div className="email flex gap-8">
          <div className="my-auto">
            <a
              href="mailto:kmoneywise99@gmail.com"
              rel="noopener noreferrer"
              className="email-icon"
            >
              <FontAwesomeIcon
                icon="fa-regular fa-envelope"
                className="w-[60px] h-[60px] text-[#168de2]"
              />
            </a>
          </div>
          <a
            href="mailto:kmoneywise99@gmail.com"
            className="text-xl font-semibold my-auto"
            rel="noopener noreferrer"
          >
            Email Us
          </a>
        </div>
        <div className="whatsapp flex gap-8 mt-4">
          <div className="grid h-[60px] my-auto">
            <a
              href="https://wa.me/254735959281"
              className="whatsapp_float"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon="fa-brands fa-whatsapp"
                className="whatsapp-icon"
              />
            </a>
          </div>
          <a
            href="https://wa.me/254735959281"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-semibold my-auto"
          >
            WhatsApp
          </a>
        </div>
      </div>
      <div className="flex socials-parent w-1/2 my-auto pl-1">
        
        <div className="socials flex w-full pl-[12rem] gap-2">
          <div className="fb">
            <FontAwesomeIcon
              icon="fa-brands fa-facebook"
              className="w-[60px] h-[60px] text-[#1877f2]"
              title="Facebook"
            />
          </div>
          <div className="linked-in">
            <FontAwesomeIcon
              icon="fa-brands fa-linkedin"
              className="w-[60px] h-[60px] text-[#0a66c2]"
              title="LinkedIn"
            />
          </div>
          <div className="twitter">
            <FontAwesomeIcon
              icon="fa-brands fa-square-x-twitter"
              className="w-[60px] h-[60px] text-[#14171a]"
              title="Twitter"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
