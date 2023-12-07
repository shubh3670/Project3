import React from 'react';
import { HiMiniBars2 } from "react-icons/hi2";
import { HiMiniBars3 } from "react-icons/hi2";
import { HiOutlineBars4 } from "react-icons/hi2";
import { GiProgression } from "react-icons/gi";
import {motion} from 'framer-motion'


const Skills = () => {
  return (
    <motion.div className="bg-blue-100 text-white p-8 h-screen"  initial={{width:0}}
    animate={{width:"100%"}}
    exit={{x:"100%"}}>
      <h1 className="text-5xl font-bold mb-6 text-center text-yellow-500 mt-14">My Skills</h1>
      <h2 className="text-2xl mb-8 text-center font-bold text-black">
        BELOW ARE THE REPRESENTATION OF MY SKILLS IN DIFFERENT PROGRAMMING LANGUAGES THAT I HAVE LEARNED.
      </h2>

      <div className="flex items-center mb-4">
        <HiOutlineBars4 className="text-4xl mr-4 text-green-500" />
        <h1 className="text-xl font-bold">PYTHON PROGRAMMING</h1>
      </div>

      <div className="flex items-center mb-4">
        <HiMiniBars3 className="text-4xl mr-4 text-green-500" />
        <h1 className="text-xl font-bold">R PROGRAMMING</h1>
      </div>

      <div className="flex items-center mb-4">
        <HiMiniBars2 className="text-4xl mr-4 text-green-500" />
        <h1 className="text-xl font-bold">MACHINE LEARNING</h1>
      </div>

      <div className="flex items-center mb-4">
        <HiOutlineBars4 className="text-4xl mr-4 text-green-500" />
        <h1 className="text-xl font-bold">JavaScript, HTML, CSS</h1>
      </div>

      <div className="flex items-center mb-4 mt-5">
        <HiMiniBars2 className="text-4xl mr-4 text-green-500" />
        <h1 className="text-xl font-bold">OBJECT-ORIENTED PROGRAMMING</h1>
      </div>

      


      <h1 className="text-4xl font-bold mb-6 text-center text-yellow-500 mt-4">My Progress Over The Years</h1>
      <div className="flex items-center mt-5">
        <GiProgression className="text-8xl text-black mx-auto" />
      </div>

    </motion.div>
  );
};

export default Skills;
