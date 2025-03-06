import React from 'react';
import SearchBar from '../components/SearchBar';
import UserDoctorCards from '../components/UserDoctorCards';
import OurServices from './OurServices';

const Home = () => {
  return (
    <div className=" w-full ">
      <SearchBar />
      <UserDoctorCards/>
      <OurServices />
    </div>
  );
};

export default Home; 