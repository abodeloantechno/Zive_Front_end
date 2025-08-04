import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center items-center space-x-3 mb-6">
            <img 
              src="https://ik.imagekit.io/psltlu4ds/zive_logo_page-00001.jpg?updatedAt=1753357527846" 
              alt="Zive Fitness Logo" 
              className="w-10 h-10 object-contain"
            />
            <span className="text-2xl font-bold">ZyveFit</span>
          </div>
          
          <p className="text-sm md:text-md  text-gray-400 mb-6">
              The Wellness Revolution Starts With You. Harness the power of science and soul.
            </p>
            <p className="text-lg text-blue-400 mb-6">
              Making You the Best Version of Yourself
            </p>
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-400">&copy; 2025 Zyve Fitness. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;