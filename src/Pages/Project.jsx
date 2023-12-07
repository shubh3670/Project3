import React, { useState } from 'react';
import Modal from 'react-modal';
import HomeImage from '../assets/Home.png';
import Coffee from '../assets/Coffee.png';
import TravelImage from '../assets/Travel.png';
import Insurance from '../assets/insurance.png';
import {motion} from 'framer-motion'

Modal.setAppElement('#root'); // Set the root element for the modal

const Project = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      image: HomeImage,
      title: 'Home Price Prediction',
      description: 'Home Price Forecast (Ahmedabad, Feb2022) It was a project in which I used a machine-learning method to predict the price of a house in the future years using several machine learning techniques such as linear regression, logistic regression, and deep learning, and then I distributed this code on a website. The URL to my code on GitHub is provided below.',
      link: 'https://github.com/shubh3670/House-Prediction',
    },
    {
      image: TravelImage,
      title: 'Travel Destination Website',
      description: ' It was a multi-page website-building project created with CSS, HTML, and JavaScript. I worked on the project while studying web programming at Saint Louis University. This project is built on a fantastic Smokey Mountain, which is one of the top attractions in the United States. The URL to my website is below, and you can get the code via GitHub.',
      link: 'https://github.com/shubh3670/TRAVEL-WEBSITE',
    },
    {
      image: Coffee,
      title: 'Analysis On Coffee Data Using Tableau',
      description: ' It was a Tableau software-based interactive visualization project that used several metrics on coffee data. Then I integrated the datas machine learning component; thus, for visualization, I used Tableau, and for prediction, I used the Python programming language. The code can be found on Git Hub, which is linked below.  ',
      link:'https://github.com/shubh3670/Analysis-on-coffee-data' 
    },
    {
      image: Insurance,
      title: 'Insurance Selling Project',
      description: 'It was a study that used Logistic Regression to predict whether or not a customer would purchase insurance. The entire logistic regression model was built from scratch using mathematics and statistics, and I compared the accuracy to one of the Google library models, namely sklearn, to evaluate how accurate my model was. Below is a link to my website, and by clicking it, you can acquire a github code.',
      link: 'https://github.com/shubh3670/INSURANCE-SELIING',
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedProject(null);
  };

  return (
    <motion.div className="bg-blue-100 p-8 min-h-screen"  initial={{width:0}}
    animate={{width:"100%"}}
    exit={{x:"100%"}}>
      <h1 className="text-4xl font-extrabold mb-8 text-center mt-20">PROJECTS</h1>
      <div className="flex flex-wrap gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-300 p-4 mb-4 rounded-lg shadow-md w-full sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3 mx-auto cursor-pointer"
            onClick={() => openModal(project)}
          >
            <img src={project.image} alt={project.title} className="h-32 w-full object-cover mb-2 mx-auto" />
            <h1 className="text-xl font-bold mb-2">{project.title}</h1>
            <p>{project.description}</p>
            <p>
              <a href={project.link} className="text-blue-600">
                Link To The Project
              </a>
            </p>
          </div>
        ))}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Project Details"
        className="modal p-4"
        overlayClassName="modal-overlay"
      >
        {selectedProject && (
          <div>
            <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>
            <p>
              <a href={selectedProject.link} className="text-blue-600">
                Link To The Project
              </a>
            </p>
            <button onClick={closeModal} className="bg-blue-500 text-white py-2 px-4 mt-4">
              Close
            </button>
          </div>
        )}
      </Modal>
    </motion.div>
  );
};

export default Project;
