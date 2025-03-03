import React from 'react';
import Button from '../components/Button';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome to Our React App</h1>
      
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Getting Started</h2>
        <p className="text-gray-600 mb-4">
          This is a React application built with Vite and styled with Tailwind CSS.
          The project has a well-organized folder structure to help you get started quickly.
        </p>
        <div className="flex space-x-4">
          <Button variant="primary">Get Started</Button>
          <Button variant="secondary">Learn More</Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Components</h3>
          <p className="text-gray-600">
            Reusable UI components are stored in the components directory.
          </p>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Pages</h3>
          <p className="text-gray-600">
            Page components that represent different routes are stored in the pages directory.
          </p>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Layouts</h3>
          <p className="text-gray-600">
            Layout components that define the structure of your pages are stored in the layouts directory.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home; 