import React from 'react';
import { Navbar } from '../components/Navbar';
import { Homepage } from '../components/Homepage'
import { Reputation } from '../components/Reputation';
import { About } from '../components/About';
import { Houses } from '../components/Houses'

export const Home = () => {
  return (
    <section className='bg-white flex flex-col items-stretch'>
        <Navbar />
        <Homepage />
        <Reputation />
        <About />
        <Houses />
    </section>
  )
}
