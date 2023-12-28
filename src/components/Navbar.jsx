import React from 'react';
import './Navbar.css';

export const Navbar = () => {
  return (
      <section id='navBar' className="justify-between items-stretch bg-white flex w-full gap-5 pl-5 pr-20 py-2 max-md:max-w-full max-md:flex-wrap max-md:px-5">
        <div className="flex items-stretch justify-between gap-3">
          <div className="bg-black bg-opacity-10 flex w-10 shrink-0 h-10 flex-col rounded-[100px]" />
          <div className="text-blue-800 text-3xl italic font-bold self-center grow whitespace-nowrap my-auto">
            AirBNB
          </div>
        </div>
        <div className="items-stretch self-center flex justify-between gap-5 my-auto max-md:max-w-full max-md:flex-wrap">
          <a href='#Homepage' className="text-zinc-900 font-semibold nav-link text-lg px-2">Home</a>
          <a href='#Reputation' className="text-zinc-900 font-semibold nav-link text-lg px-2">Reputation</a>
          <a href='#About' className="text-zinc-900 nav-link text-lg px-2 font-semibold">About Us</a>
          <a href='#Houses' className="text-zinc-900 nav-link text-lg px-2 font-semibold">Houses</a>
          <a href='' className="text-orange-400 nav-link-contact text-lg px-2 font-semibold">
            Contact Us
          </a>
        </div>
      </section>
  )
}
