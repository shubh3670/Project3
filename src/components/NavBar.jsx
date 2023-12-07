import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4">
      <ul className="flex space-x-4">
        <li>
          <NavLink
            to="/home"
            activeClassName="text-red-500"
            className="text-white hover:text-gray-300"
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/skills"
            activeClassName="text-red-500"
            className="text-white hover:text-gray-300"
          >
            SKILLS
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/project"
            activeClassName="text-red-500"
            className="text-white hover:text-gray-300"
          >
            PROJECT
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/brief"
            activeClassName="text-red-500"
            className="text-white hover:text-gray-300"
          >
            BRIEF
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
