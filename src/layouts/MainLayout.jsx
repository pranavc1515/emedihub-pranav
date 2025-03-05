import React, { useEffect, useState } from 'react';
// import Medihub from '../assets/Medihub.svg';
// import hambuger_Menu from '../assets/Hamburger_menu.svg';



const MainLayout = ({ children }) => {
  // const [menuOpen, setMenuOpen] = useState(false);
  const images = [
    images1,
    images2,
    images3,
    images4,
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length); 
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); 
  }, []);

  // const toggleMenu = () => setMenuOpen(!menuOpen);
  return (
    // <div className=" bg-gradient-to-b from-blue-100 to-white min-h-screen w-full">
    //   {/* Header */}
    //   <header className="flex justify-between items-center p-6   bg-gradient-to-t from-blue-100 to-white  w-full">
    //     <img src={Medihub} alt='midihub' className="w-[150] h-[70px]"/>
    //     <div className="md:hidden" onClick={toggleMenu}>
    //     <img src={hambuger_Menu} alt='hambuger_Menu' className="w-[50px] h-[50px]   flex items-center justify-center" />
    //   </div>
    //     <nav className={`md:flex md:justify-between md:items-center space-x-4 lg:space-x-[60px] ${menuOpen ? 'block' : 'hidden'} md:block`}>
    //     <a href="#" className="text-[#011632] text-[16px] font-semibold">Home</a>
    //     <a href="#" className="text-[#011632] text-[16px] font-semibold">Services</a>
    //     <a href="#" className="text-[#011632] text-[16px] font-semibold">Blogs</a>
    //     <a href="#" className="text-[#011632] text-[16px] font-semibold">About</a>
    //     <a href="#" className="text-[#011632] text-[16px] font-semibold">Contact</a>
    //     <button className="border-[2px] border-[#0190CA] text-[#0190CA] px-4 py-2 rounded-md mr-4">
    //       Login / Signup
    //     </button>
    //   </nav>
    //   </header>

    //   {/* Main Content */}
    //   <main className="flex flex-col items-center mt-12 px-6">
    //     {children}
    //   </main>

    //   {/* Footer */}
    //   <footer className="bg-white shadow-inner mt-8 py-6">
    //     {/* <div className="container mx-auto px-4">
    //       <div className="text-center text-gray-500">
    //         <p>&copy; {new Date().getFullYear()} React App. All rights reserved.</p>
    //       </div>
    //     </div> */}
    //   </footer>
    // </div>
    <div className="">
    <header
      className="bg-cover bg-black bg-center h-[550px] transition-all duration-[2500ms]"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`, 
      }}
    >
      {/* <Navbar />
      <div className="max-w-[50%] px-6 py-8">
        <h1 className="text-[64px] font-bold w-[735px] text-[#011632]">
          Your Health File, Simplified!!!
        </h1>
        <img src={vector} alt="" />
        <p className="text-[18px] w-[531px] font-[400] text-[#3C4959] pt-[30px]">
          eMediHub transforms healthcare with digital precision—integrating insights, connectivity, and collaboration for smarter, patient-centric care.
        </p>
        <div className="flex space-x-3 pt-3">
          {[0, 1, 2, 3].map((index) => (
            <span
              key={index}
              className={`bg-[#CFCFCF] h-3 w-3 rounded-full transition-colors duration-[3000ms] ${
                currentImageIndex === index ? "bg-[#25B4F8]" : ""
              }`}
            />
          ))}
        </div>
      </div> */}
    </header>
  </div>
  );
};

export default MainLayout; 