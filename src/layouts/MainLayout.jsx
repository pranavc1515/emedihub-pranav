import React, { useState } from 'react';
import Medihub from '../assets/Medihub.svg';
import hambuger_Menu from '../assets/Hamburger_menu.svg';

const MainLayout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  return (
    <div className=" bg-gradient-to-b from-blue-100 to-white min-h-screen w-full">
      {/* Header */}
      <header className="flex justify-between items-center p-6   bg-gradient-to-t from-blue-100 to-white  z-[999]  w-full">
        <img src={Medihub} alt='midihub' className="w-[150] h-[70px]"/>
        <div className="md:hidden" onClick={toggleMenu}>
        <img src={hambuger_Menu} alt='hambuger_Menu' className="w-[50px] h-[50px]   flex items-center justify-center" />
      </div>
        <nav className={`md:flex md:justify-between md:items-center space-x-4 lg:space-x-[60px] ${menuOpen ? 'block' : 'hidden'} md:block`}>
        <a href="#" className="text-[#011632] text-[16px] font-semibold">Home</a>
        <a href="#" className="text-[#011632] text-[16px] font-semibold">Services</a>
        <a href="#" className="text-[#011632] text-[16px] font-semibold">Blogs</a>
        <a href="#" className="text-[#011632] text-[16px] font-semibold">About</a>
        <a href="#" className="text-[#011632] text-[16px] font-semibold">Contact</a>
        <button className="border-[2px] border-[#0190CA] text-[#0190CA] px-4 py-2 rounded-md mr-4">
          Login / Signup
        </button>
      </nav>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center mt-12 px-6">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white shadow-inner mt-8 py-6">
        {/* <div className="container mx-auto px-4">
          <div className="text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} React App. All rights reserved.</p>
          </div>
        </div> */}
      </footer>
    </div>
  );
};

export default MainLayout; 