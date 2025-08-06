import React from 'react';
import { ChevronDown, Play } from 'lucide-react';
import { MotionDiv, FloatingElement } from './Motion';
import { TypeAnimation } from 'react-type-animation';

const Home = ({ scrollToSection }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-yellow-400/20 to-pink-500/20"></div>
      
      {/* Animated Background Elements */}
      <FloatingElement className="absolute top-20 left-10 w-20 h-20 bg-cyan-400 rounded-full opacity-20">
        <div></div>
      </FloatingElement>
      
      <FloatingElement className="absolute top-40 right-20 w-16 h-16 bg-yellow-400 rounded-full opacity-20" duration={4}>
        <div></div>
      </FloatingElement>
      <FloatingElement className="absolute bottom-40 left-20 w-24 h-24 bg-pink-500 rounded-full opacity-20" duration={5}>
        <div></div>
      </FloatingElement>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <MotionDiv className="mb-8" delay={300}>
          <div className="flex justify-center mb-6">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl  shadow-2xl hover:scale-110 transition-transform duration-500">
              <img 
                src="https://ik.imagekit.io/psltlu4ds/zive_sollar_system-removebg-preview.png?updatedAt=1753949829948" 
                alt="Zive Fitness Logo" 
                className="w-20 h-20 md:w-30 lg:h-30 object-contain mx-auto"
              />
            </div>
          </div>
        </MotionDiv>
        
        <MotionDiv delay={600}>
          <h1 className="text-3xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Transform Your
            <span className="bg-gradient-to-r from-cyan-400 via-yellow-400 to-pink-500 bg-clip-text text-transparent">  <TypeAnimation
                sequence={['Mind', 1500, 'Body', 1500, 'Lifestyle', 1500]}
                speed={50}
                repeat={Infinity}
                wrapper="span"
              /></span>
          </h1>
        </MotionDiv>
        
        <MotionDiv delay={900}>
          <p className="text-lg md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join Zyve Fitness and discover the perfect blend of strength, endurance, and wellness in our state-of-the-art facility.
          </p>
        </MotionDiv>
        
        <MotionDiv className="flex flex-col sm:flex-row gap-4 justify-center items-center" delay={1200}>
          <button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-cyan-400 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover:-translate-y-1">
            Start Your Journey
          </button>
          <button className="flex items-center text-white border-2 border-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 group">
            <Play className="mr-2 group-hover:scale-110 transition-transform duration-300" size={20} />
            Watch Video
          </button>
        </MotionDiv>
      </div>
      
      <MotionDiv 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white"
        delay={1500}
      >
        <button 
          onClick={() => scrollToSection('about')}
          className="animate-bounce hover:text-cyan-400 transition-colors duration-300"
        >
          <ChevronDown size={32} />
        </button>
      </MotionDiv>
    </section>
  );
};

export default Home;