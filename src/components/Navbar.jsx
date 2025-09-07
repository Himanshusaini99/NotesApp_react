import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <div className='flex justify-center items-center'>
      {location.pathname === "/" && (
  <h1 className="text-4xl mb-6">CREATE YOUR NOTES</h1>
)}

    </div>
    <div className='flex justify-between  m-4'>
      <NavLink  className={({ isActive }) =>
          `text-2xl transition-transform duration-300 ease-in-out hover:scale-110 
           ${isActive ? "text-yellow-400 font-bold" : "text-white"}`
        } to="/">HOME</NavLink>
      <NavLink   className={({ isActive }) =>
          `text-2xl transition-transform duration-300 ease-in-out hover:scale-110 
           ${isActive ? "text-yellow-400 font-bold" : "text-white "}`
        }to="/pastes">NOTES</NavLink>
    </div>
    </>
  )
}

export default Navbar;
