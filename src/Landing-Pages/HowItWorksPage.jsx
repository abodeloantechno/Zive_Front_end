import React from 'react';
import { FaRobot, FaChartLine, FaBolt } from 'react-icons/fa';
import { MotionDiv } from './Motion'; // Ensure this import is correct in your project

const HowItWorksPage = () => {
  return (
    <main id="works" className=" bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionDiv className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How ZyveFit <span className="bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">Works?</span>
          </h2>
          <p className="text-md md:text-xl text-gray-600 max-w-4xl mx-auto">
            We build a data-driven AI tool that is simple to use and helps you make informed decisions to live a healthy and fit life.
          </p>
        </MotionDiv>

        <div className="max-w-6xl mx-auto">
          {/* Our Hybrid AI - Centered and Enhanced */}
          <MotionDiv delay={200}>
            {/* <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our <span className="bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">Hybrid AI</span>
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Experience the power of intelligent health optimization with our advanced AI system
              </p>
            </div> */}
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: FaRobot,
                  title: "Pragmatic Recommendations",
                  description: "Delivers prescriptive recommendations based on your unique data, goals, and preferences.",
                  color: "bg-blue-500"
                },
                {
                  icon: FaChartLine,
                  title: "Daily Adjustments",
                  description: "Adjusts your food and fitness solutions daily for you and your family.",
                  color: "bg-purple-500"
                },
                {
                  icon: FaBolt,
                  title: "Actionable Advice",
                  description: "Offers seamless, actionable advice—from what's on your plate to what's in your schedule.",
                  color: "bg-green-500"
                }
              ].map(({ icon: Icon, title, description, color }, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className={`w-16 h-16 ${color} rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                    <Icon className="text-white" size={28} />
                  </div>
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">{title}</h4>
                    <p className="text-gray-600 leading-relaxed">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </MotionDiv>
        </div>
      </div>
    </main>
  );
};

export default HowItWorksPage;