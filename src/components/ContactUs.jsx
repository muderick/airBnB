import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ContactUs.css";

export const ContactUs = () => {
  const [mailHovered, setMailHovered] = useState(false);
  const [waHovered, setWaHovered] = useState(false);
  const [fbHovered, setFbHovered] = useState(false);
  const [linkedinHovered, setLinkedinHovered] = useState(false);
  const [xHovered, setXHovered] = useState(false);

  return (
    <section
      id="ContactUs"
      className="w-full mt-16 h-full relative bg-white mb-[8rem]"
    >
      <div className="text-slate-800 text-center text-4xl font-bold self-center whitespace-nowrap mb-4">
        Contact Us
      </div>
      <div className="flex mt-8">
        <div className="grid contacts w-1/2 pl-[10rem] h-[20%] my-auto">
          <div className="email flex gap-8">
            <div className="my-auto">
              <a href="mailto:kmoneywise99@gmail.com" rel="noopener noreferrer">
                <FontAwesomeIcon
                  icon="fa-regular fa-envelope"
                  onMouseEnter={() => setMailHovered(true)}
                  onMouseLeave={() => setMailHovered(false)}
                  className={`w-[60px] h-[60px] text-[#168de2] email-icon ${
                    mailHovered ? "hovered" : ""
                  }`}
                />
              </a>
            </div>
            <a
              href="mailto:kmoneywise99@gmail.com"
              className="text-xl font-semibold my-auto hover:text-[#0000EE]"
              rel="noopener noreferrer"
            >
              Email Us
            </a>
          </div>
          <div className="whatsapp flex gap-8 mt-4">
            <div className="grid h-[60px] my-auto">
              <a
                href="https://wa.me/254735959281"
                className={`whatsapp_float whatsapp-icon_div ${
                  waHovered ? "hovered" : ""
                }`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon="fa-brands fa-whatsapp"
                  onMouseEnter={() => setWaHovered(true)}
                  onMouseLeave={() => setWaHovered(false)}
                  className={`whatsapp-icon`}
                />
              </a>
            </div>
            <a
              href="https://wa.me/254735959281"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-semibold my-auto hover:text-[#075E54]"
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
                onMouseEnter={() => setFbHovered(true)}
                onMouseLeave={() => setFbHovered(false)}
                className={`w-[60px] h-[60px] text-[#1877f2] facebook ${
                  fbHovered ? "hovered" : ""
                }`}
                title="Facebook"
              />
            </div>
            <div className="linked-in">
              <FontAwesomeIcon
                icon="fa-brands fa-linkedin"
                onMouseEnter={() => setLinkedinHovered(true)}
                onMouseLeave={() => setLinkedinHovered(false)}
                className={`w-[60px] h-[60px] text-[#0a66c2] linkedin ${
                  linkedinHovered ? "hovered" : ""
                }`}
                title="LinkedIn"
              />
            </div>
            <div className="twitter">
              <FontAwesomeIcon
                icon="fa-brands fa-square-x-twitter"
                onMouseEnter={() => setXHovered(true)}
                onMouseLeave={() => setXHovered(false)}
                className={`w-[60px] h-[60px] text-[#14171a] twitter ${
                  xHovered ? "hovered" : ""
                }`}
                title="Twitter"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
