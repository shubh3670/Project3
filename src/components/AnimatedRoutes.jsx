// AnimatedRoutes.jsx
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import NavBar from '../components/NavBar';  // Adjust the path accordingly
import Home from '../Pages/Home';          // Adjust the path accordingly
import Skills from '../Pages/Skills';      // Adjust the path accordingly
import Brief from '../Pages/Brief';        // Adjust the path accordingly
import Project from '../Pages/Project';    // Adjust the path accordingly
import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        {/* Set the home page as the default page using the "index" property */}
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Home />} index />
        <Route path="/Project" element={<Project />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Brief" element={<Brief />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
