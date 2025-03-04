import React from 'react';
// import Button from '../components/Button';
import Images1 from '../assets/Images1.png';
const Home = () => {
  return (
    <div className=" w-full ">
      <div className="w-full h-[500px]  flex justify-between">
      <div className=' bg-red-700 w-[30%]'> 
     
      <h1 className=" font-bold text-blue-800">Your Health File, Simplified!!!</h1>
          <p className="mt-4 text-lg text-blue-600">
            eMediHub transforms healthcare with digital precision—integrating insights, connectivity, and collaboration for smarter, patient-centric care.
          </p></div>
      <div className='w-[70%] bg-blue-700  fixed top-0 right-0 opacity-40 '>
        <img src={Images1} alt='medihub' className="h-full w-full"/>
      </div>
         
        </div>
        <div className="mt-8 w-full max-w-md">
          <input
            type="text"
            className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Search For Nearby Clinic, Hospital Or Specialist"
          />
        </div>
        <div className="mt-12 w-full max-w-lg">
          <div className="flex justify-between">
            <div className="bg-white p-6 shadow-md rounded-lg w-1/2">
              <h2 className="text-xl font-semibold text-blue-600">All Users</h2>
              <p className="mt-2 text-blue-600">Amazing mates</p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-lg w-1/2">
              <h2 className="text-xl font-semibold text-blue-600">All Doctors</h2>
              <p className="mt-2 text-gray-500">Lessons Views</p>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Home; 