import React from 'react';
import ReactTyped from 'react-typed';

const Hero = () => {
  return (
  <div className="text-white">
     <div className="max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center items-center">
      <p className="font-bold p-2 text-[#00fd9a] md:text-2xl text-sm">GROWING WITH DATA ANALYTICS</p>
      <h1 className="md:text-7xl md:py-6 sm:text-6xl text-4xl ">Grow with data.</h1>
      <div className="flex justify-between items-center">
        <p className="md:text-5xl sm:text-4xl text-xl font-bold mr-4">Fast, flexible financing for</p>
        <ReactTyped 
        className="md:text-5xl sm:text-4xl text-xl font-bold"
        strings={["BTB", "BTB", "SASS"]}
        typeSpeed={120} backSpeed={80} loop
        />
      </div>
      <p className="md:text-2xl py-2 text-center text-gray-600 text-xl">Monitor your data analytics to increase revenue for BTB, BTC & SASS platforms.</p>
      <button className="py-3 bg-[#00fd9a] rounded my-2 w-[200px] font-bold text-black">Get Started</button>
     </div>
  </div>
  )
}

export default Hero;