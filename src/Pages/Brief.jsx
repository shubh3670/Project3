  import React from 'react';
  import {motion} from 'framer-motion'

  const Brief = () => {
    return (
      <motion.div className="flex flex-col items-center justify-center min-h-screen bg-blue-100"  initial={{width:0}}
      animate={{width:"100%"}}
      exit={{x:"100%"}}>
        <div className="bg-gray-300 p-8 rounded-lg shadow-md text-center mb-8 mt-10">
          <h1 className="text-4xl font-extrabold underline text-gray-800 mb-4">SHUBH PATEL</h1>
          <div className="text-lg italic text-gray-600 ">COMPUTER SCIENTIST</div>
        </div>

        <div className="bg-gray-300 p-8 rounded-lg shadow-md text-center mb-8">
          <h2 className="text-2xl underline text-gray-800 mb-4">EDUCATION</h2>
          <ul className="list-none p-0">
            <li className="mb-4">
              <h3 className="text-xl font-bold italic text-gray-800">SAINT LOUIS UNIVERSITY</h3>
              <h4 className="text-lg">Master's of Science in Artificial Intelligence</h4>
              <h5 className="text-md">(August 2023 - May 2025)</h5>
            </li>
            <li>
              <h3 className="text-xl font-bold italic text-gray-800">GUJARAT UNIVERSITY</h3>
              <h4 className="text-lg">Bachelor's of Science in Artificial Intelligence</h4>
              <h5 className="text-md">(January 2020 - May 2023)</h5>
            </li>
          </ul>
        </div>

        <div className="bg-gray-300 p-8 rounded-lg shadow-md text-center mb-10">
          <h2 className="text-2xl underline text-gray-800 mb-4">PERSONAL PROJECTS</h2>
          <ul className="list-disc text-left pl-4">
            <li className="mb-4">
              <strong>Home Price Prediction (Feb 2022 - Ahmedabad):</strong> Predicted the price of a house using a machine-learning algorithm.
            </li>
            <li className="mb-4">
              <strong>Analysis of Coffee Data using Tableau (April 2022 - Ahmedabad):</strong> Interactive visualization project using Tableau.
            </li>
            <li className="mb-4">
              <strong>Insurance Selling Project (August 2022 - Ahmedabad):</strong> Predicted customer insurance acceptance using Logistic Regression.
            </li>
            <li>
              <strong>Website on Travel Destination (September 2023 - Saint Louis):</strong> Multi-page website-building project using CSS and HTML.
            </li>
          </ul>
        </div>
      </motion.div>
    );
  };

  export default Brief;
