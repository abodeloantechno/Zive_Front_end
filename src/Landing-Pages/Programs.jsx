import React from 'react';
import { MotionDiv } from './Motion';
import {
  FaRobot,
  FaMobile,
  FaGamepad,
  FaMicrophone,
  FaEye,
  FaGraduationCap
} from 'react-icons/fa';

const Programs = () => {
  const features = [
    {
      icon: FaRobot,
      title: "AI & ML-Driven",
      description: "Cutting-edge personalization with almost zero human hassle.",
      color: "cyan",
      delay: 0
    },
    {
      icon: FaMobile,
      title: "Wearable-Friendly",
      description: "All your favorite tracking tech, fully integrated.",
      color: "yellow",
      delay: 100
    },
    {
      icon: FaGamepad,
      title: "Social & Gamified",
      description: "Count on encouragement, competition, and a thriving peer community.",
      color: "pink",
      delay: 200
    },
    {
      icon: FaMicrophone,
      title: "Voice-Enabled",
      description: "Sync with Alexa, Google, and more.",
      color: "cyan",
      delay: 300
    },
    {
      icon: FaEye,
      title: "AR-Powered",
      description: "Instantly scan food or gym gear for actionable insights.",
      color: "yellow",
      delay: 400
    },
    {
      icon: FaGraduationCap,
      title: "Microlearning",
      description: "Bite-sized lessons nudge you towards better habits, every single day.",
      color: "pink",
      delay: 500
    }
  ];

  return (
    <section id="programs" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionDiv className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Advanced 
            <span className="bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent"> Features</span>
          </h2>
          <p className="text-md md:text-xl text-gray-600 max-w-3xl mx-auto">
          Cutting-edge technology meets personalized wellness to create an unparalleled health experience.
          </p>
        </MotionDiv>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((program, index) => {
            const Icon = program.icon;
            return (
              <MotionDiv
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer"
                delay={program.delay}
              >
                <div className={`w-12 h-12 bg-${program.color}-400 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                  <Icon className="text-white " size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors duration-300">
                  {program.title}
                </h3>
                <p className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300">
                  {program.description}
                </p>
               
              </MotionDiv>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Programs;
