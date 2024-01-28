import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Footer.css'

export const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <section className="w-full fixed h-12 px-6 bg-blue-800 items-center flex mt-8 z-[2] bottom-0">
      <div className="w-1/2 flex items-stretch justify-between">
        <div>
          <FontAwesomeIcon
            icon="fa-brands fa-airbnb"
            className="w-[40px] h-[40px] text-[#1877f2] icon"
          />
        </div>
        <div className="text-white text-3xl italic font-bold self-center grow whitespace-nowrap my-auto">
          irBNB
        </div>
      </div>
      <div className="text-white text-base font-normal font-['Work Sans'] flex-end pl-[22rem]">
        IanBNBs &copy; {date}. All Rights Reserved.
      </div>
    </section>
  );
};
