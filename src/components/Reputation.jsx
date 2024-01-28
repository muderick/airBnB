import React from "react";

export const Reputation = () => {
  return (
    <section id="Reputation" className="justify-center items-center bg-white flex w-full h-screen flex-col px-16 py-28 max-md:max-w-full max-md:px-5">
      <div className="flex w-full max-w-[1020px] flex-col items-center mt-4 mb-9 max-md:max-w-full">
        <div className="text-slate-800 text-center text-4xl font-bold whitespace-nowrap">
          Our Reputation
        </div>
        <div className="self-stretch mt-12 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
              <div className="justify-center rounded border-[color:var(--Neutral-100,#E0E3EB)] bg-white flex grow flex-col w-full pt-6 pb-10 px-5 border-[1.4px] border-solid items-start max-md:mt-10">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8efb6cedcdd0ab56893b561221e27b5e817b90e7a3423cdb5459070b1101e64e?"
                  className="aspect-[0.93] object-contain object-center w-[26px] fill-orange-400 overflow-hidden max-w-full ml-3 max-md:ml-2.5"
                  alt=""
                />
                <div className="text-slate-700 text-xl font-bold self-stretch mt-7">
                  Best Services
                </div>
                <div className="text-slate-400 text-base self-stretch mt-5">
                  The provided services all together are a top notch.
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <div className="justify-center rounded border-[color:var(--Neutral-100,#E0E3EB)] bg-white flex grow flex-col w-full pt-5 pb-10 px-5 border-[1.4px] border-solid items-start max-md:mt-10">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a27c9063f449878902dbf777dfb3e8f58916e1df163f8f687ab9cdbd79244f2?"
                  className="aspect-square object-contain object-center w-10 overflow-hidden max-w-full"
                  alt=""
                />
                <div className="text-slate-700 text-xl font-bold self-stretch mt-5">
                  Best Interaction
                </div>
                <div className="text-slate-400 text-base self-stretch mt-5">
                  Cursus semper tellus volutpat aliquet lacus.{" "}
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <div className="justify-center rounded border-[color:var(--Neutral-100,#E0E3EB)] bg-white flex grow flex-col w-full pt-5 pb-10 px-5 border-[1.4px] border-solid items-start max-md:mt-10">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1185dcae67474b07b8c57957c4069f6cdc8ce873a47086230f9974debc5b5baa?"
                  className="aspect-square object-contain object-center w-10 overflow-hidden max-w-full"
                  alt=""
                />
                <div className="text-slate-700 text-xl font-bold self-stretch mt-5">
                  Satisfactory
                </div>
                <div className="text-slate-400 text-base self-stretch mt-5">
                  We ensure our Clients are fully satisfied.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
