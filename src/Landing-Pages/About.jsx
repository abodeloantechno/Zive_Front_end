import React from 'react';
import { Target, Users, Award } from 'lucide-react';
import { MotionDiv } from './Motion';
import {FaHeart,FaBullseye,FaRobot} from 'react-icons/fa'


const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionDiv className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">ZyveFit?</span>
          </h2>
          <p className="text-xl font-semibold text-gray-600 max-w-4xl mx-auto mb-8">
              We believe that human life is precious and must be nurtured without chronic diseases.
            </p>
            <p className="text-md  text-gray-600 max-w-5xl mx-auto">
              ZyveFit is built on one bold goal empower every person to live life to its fullest, free from chronic disease. 
              We know that achieving this takes more than a fad diet or a one-size-fits-all app—it requires a harmony of mind, body, personalized guidance, and ongoing support.
            </p>
        </MotionDiv>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon:<FaHeart className="text-white" size={32} />, title: "WHY ?", desc: "We nurture and elevate human lifeves, aiming to end chronic illness for good.", color: "cyan", delay: 0 },
            {icon: <FaRobot className="text-white" size={32} />, title: "HOW ?", desc: "AGI-powered and expert-guided personalisation - no fads, no confusion, no overthinking, just clear science and support.", color: "yellow", delay: 200 },
            {icon: <FaBullseye className="text-white" size={32} />, title: "WHAT ?", desc: "Nutrition, Fitness, and Meditation crafted daily just for you. Underline just for you.", color: "pink", delay: 400 }
          ].map((item, index) => (
            <MotionDiv 
              key={index}
              className={`text-center p-8 rounded-2xl bg-gradient-to-br from-${item.color}-50 to-${item.color}-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer`}
              delay={item.delay}
            >
              <div className={`w-16 h-16 bg-${item.color}-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors duration-300">{item.title}</h3>
              <p className="text-md text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                {item.desc}
              </p>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;