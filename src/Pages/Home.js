import React from 'react'
import IMG5 from "../assets/IMG5.png"
import IMG2 from "../assets/IMG2.png"
import IMG3 from "../assets/IMG3.png"
import IMG4 from "../assets/IMG4.png"
import IMG1 from "../assets/IMG1.png"
import { useState } from 'react';
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";
import {motion} from 'framer-motion'


const Home = () => {
    // Define an array of image URLs
  const images = [IMG1,IMG2, IMG3, IMG4];

  // State to track the current image index
  const [currentImage, setCurrentImage] = useState(0);

  // Function to handle clicking the right arrow
  const handleNext = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to handle clicking the left arrow
  const handlePrev = () => {
    setCurrentImage((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  return (
    <motion.div className="container " initial={{width:0}}
    animate={{width:"100%"}}
    exit={{x:"100%"}}>
      
      <div className="flex items-center bg-gray-200">
        <div className="flex-1">
          <h1 className="font-bold text-4xl pl-4 mt-10">DESIGNER AND MODEL EXPERT</h1>
          <h1 className="font-bold text-3xl pl-4 mt-8">HI, I AM A WEB PROGRAMMER, AND MACHINE LEARNING EXPERT</h1>
          <h2 className="mb-4 font-bold p-4">My Design Is Used To Build A Website That You And Your Audience Love</h2>
        </div>
        <div className="flex-1 flex justify-end">
          <img src={IMG5} className="mt-10" alt="Your Alt Text" />
        </div>
      </div>

      <div className=" bg-blue-100 p-4">
        <h1 className="text-3xl font-bold mb-4 text-center">MY SKILLS/INTEREST</h1>

        <div className="flex space-x-4">
          <div className="w-1/3 bg-white p-4 rounded-lg">
            <h2 className="text-2xl font-bold mb-2">Web Development</h2>
            <ul>
              <li className="text-xl">JAVASCRIPT</li>       
              <li className="text-xl">HTML</li>
              <li className="text-xl">CSS</li>
              <li className="text-xl">REACT</li>
            </ul>
          </div>

          <div className="w-1/3 bg-white p-4 rounded-lg">
            <h2 className="text-2xl font-bold mb-2">Artificial Intelligence</h2>
            <ul>
              <li className="text-xl">PYTHON PROGRAMMING</li>
              <li className="text-xl">R PROGRAMMING</li>
              <li className="text-xl">MACHINE LEARNING</li>
              <li className="text-xl">MATHEMATICS BEHIND ML</li>
              <li className="text-xl">STATISTICS BEHIND ML</li>
            </ul>
          </div>

          <div className="w-1/3 bg-white p-4 rounded-lg">
            <h2 className="text-2xl font-bold mb-2">OTHER SKILLS</h2>
            <ul>
              <li className="text-xl">R PROGRAMMING</li>
              <li className="text-xl">C PROGRAMMING</li>
              <li className="text-xl">TABLEAU</li>
              <li className="text-xl">MYSQL</li>
              <li className="text-xl">EXCEL</li>
            </ul>
          </div>
        </div>
      </div>

      <div className=" bg-blue-100 p-4">
        <div className="relative">
          {/* Left arrow */}
          <button onClick={handlePrev} className="absolute left-1-0 0 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full text-white">
            <MdOutlineKeyboardArrowLeft />
          </button>

          {/* Display current image */}
          <img src={images[currentImage]} alt={`Slide ${currentImage + 1}` } className="w-50 h-70 rounded-lg mb-4 mx-auto" />

          {/* Right arrow */}
          <button onClick={handleNext} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full text-white">
            <MdOutlineKeyboardArrowRight />
          </button>
        </div>
      </div>

    </motion.div>)
}

export default Home
