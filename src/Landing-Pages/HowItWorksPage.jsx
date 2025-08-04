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

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Our Hybrid AI */}
          <MotionDiv delay={200}>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Hybrid AI:</h3>
            <div className="space-y-6">
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
                <div key={idx} className="flex items-start space-x-4">
                  <div className={`w-12 h-12 ${color} rounded-full flex items-center justify-center flex-shrink-0`}>
                    <Icon className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{title}</h4>
                    <p className="text-gray-600">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </MotionDiv>

          {/* Right Column - The ZyveFit Difference */}
          <MotionDiv delay={400}>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">The ZyveFit Difference</h4>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <p className="text-gray-600">
                    <span className="font-semibold text-red-500">Most health apps:</span> Too narrow, generic advice
                  </p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <p className="text-gray-600">
                    <span className="font-semibold text-green-500">ZyveFit:</span> Holistic, daily, actionable solutions—no more confusion
                  </p>
                </div>
              </div>
            </div>
          </MotionDiv>
        </div>
      </div>
    </main>
  );
};

export default HowItWorksPage;
