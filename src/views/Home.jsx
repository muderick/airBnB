import React from 'react';
import { Navbar } from '../components/Navbar';
import { Homepage } from '../components/Homepage'
import { Reputation } from '../components/Reputation';
import { About } from '../components/About';
import { Houses } from '../components/Houses'
import { ContactUs } from '../components/ContactUs';
import { Footer } from '../components/Footer';

export const Home = () => {
  return (
    <section className='bg-white flex flex-col items-stretch'>
        <Navbar />
        <Homepage />
        <Reputation />
        <About />
        <Houses />
        <ContactUs />
        <Footer />
    </section>
  )
}
