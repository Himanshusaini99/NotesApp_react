import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <div className='flex justify-center items-center'>
      {location.pathname === "/" && (
  <h1 className="text-4xl sm:text-4xl md:text-4xl mb-6">CREATE YOUR NOTES</h1>
)}

    </div>
    <div className='flex flex-col sm:flex-row justify-between px-4 sm:px-0  m-4'>
      <NavLink  className={({ isActive }) =>
          `text-xl sm:text-2xl transition-transform duration-300 ease-in-out hover:scale-110 
           ${isActive ? "text-yellow-400 font-bold" : "text-white"}`
        } to="/">HOME</NavLink>
      <NavLink   className={({ isActive }) =>
          `text-xl sm:text-2xl transition-transform duration-300 ease-in-out hover:scale-110 
           ${isActive ? "text-yellow-400 font-bold" : "text-white "}`
        }to="/pastes">NOTES</NavLink>
    </div>
    </>
  )
}

export default Navbar;
