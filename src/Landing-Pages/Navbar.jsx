import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { MotionDiv } from './Motion';

const Navbar = ({ scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <MotionDiv className="flex items-center space-x-3" delay={0}>
            <img 
              src="https://ik.imagekit.io/psltlu4ds/zive_logo_page-00001.jpg?updatedAt=1753357527846" 
              alt="Zive Fitness Logo" 
              className="w-12 h-12 object-contain hover:scale-110 transition-transform duration-300"
            />
            <span className="text-2xl font-bold text-gray-900">Zyve Fitness</span>
          </MotionDiv>
          
          <MotionDiv className=" hidden lg:flex items-center space-x-8" delay={200}>
            {['Home', 'About', 'Programs', 'Works', 'Contact'].map((item, index) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())} 
                className=" cursor-pointer text-gray-700 hover:text-cyan-500 transition-all duration-300 relative group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-500 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
            <button 
           onClick={() => {
            scrollToSection('contact');
            setIsMenuOpen(false); // Close mobile menu after click
          }}
            className="cursor-pointer bg-gradient-to-r from-cyan-400 to-pink-500 text-white px-6 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 transform">
              Join Now
            </button>
          </MotionDiv>

          <button 
            className="lg:hidden block text-gray-700 hover:text-cyan-500 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className={`transform transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={` block lg:hidden bg-white border-t transition-all duration-300 ease-in-out overflow-hidden ${
        isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-4 py-2 ">
          {['Home', 'About', 'Programs', 'Works', 'Contact'].map((item, index) => (
            <button 
              key={item}
              onClick={() => {
                scrollToSection(item.toLowerCase());
                setIsMenuOpen(false);
              }} 
              className="cursor-pointer block w-full text-left py-3 text-gray-700 hover:text-cyan-500 hover:bg-gray-50 rounded-lg transition-all duration-300"
              style={{ 
                transform: isMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                opacity: isMenuOpen ? 1 : 0,
                transitionDelay: `${index * 50}ms`
              }}
            >
              {item}
            </button>
          ))}
          <button
          
          onClick={() => {
            scrollToSection('contact');
            setIsMenuOpen(false); // Close mobile menu after click
          }}
          
           className="cursor-pointer w-full bg-gradient-to-r from-cyan-400 to-pink-500 text-white py-3 rounded-full mt-4 hover:scale-105 transition-transform duration-300">
            Join Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;