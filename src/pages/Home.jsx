import React from 'react';
import SearchBar from '../components/SearchBar';
import UserDoctorCards from '../components/UserDoctorCards';
import OurServices from './OurServices';
import DoctorConsultation from '../components/DoctorConsultation ';
import NewsArticles from '../components/NewsArticles';
import TestimonialsSlider from '../components/Testimonials';

const Home = () => {
  return (
    <div className=" w-full ">
      <SearchBar />
      <UserDoctorCards/>
      <OurServices />
      <DoctorConsultation />
      <NewsArticles />
      <TestimonialsSlider />
    </div>
  );
};

export default Home; 