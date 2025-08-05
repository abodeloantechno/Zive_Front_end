import React, { useState, useEffect, useRef } from 'react';
import { User, Target, Zap, TrendingUp } from 'lucide-react';

const Process = ({ scrollToSection }) => {
  const [activeTimelineItem, setActiveTimelineItem] = useState(0);
  const timelineRefs = useRef([]);

  const timelineItems = [
    {
      step: '01',
      title: 'Tell us your story',
      description: <>'Upload your latest health data blood work, prescriptions, body weight, height, and anything else that defines <u>YOU</u>.'</>,
      icon: <User className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: 'bg-blue-500'
    },
    {
      step: '02',
      title: 'Express your preferences',
      description:<> "Share what you love an whay you don't - food, movement and routines. <br/> This is <u>YOUR PLAN</u>, <u>YOUR WAY</u>"</>,
      icon: <Target className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: 'bg-green-500'
    },
    {
      step: '03',
      title: 'Define your goals',
      description: 'Set your ambitions. From optimal focus at work to marathon readiness, or simply feeling your best your goals drive your custom journey.',
      icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: 'bg-purple-500'
    },
    {
      step: '04',
      title: 'Unlock daily precision',
      description: 'Receive personalized, science-backed nutrition, fitness, and meditation guidance every morning. ZyveFit recalibrates based on your progress, so every day takes you closer to your best self.',
      icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: 'bg-orange-500'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = timelineRefs.current.indexOf(entry.target);
            if (index !== -1) {
              setActiveTimelineItem(index);
            }
          }
        });
      },
      { threshold: 0.3, rootMargin: '-20% 0px -20% 0px' }
    );

    timelineRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Your Path to Success
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Getting started with ZyveFit is refreshingly simple—and deeply empowering
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Timeline Line - Desktop */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-px top-0 h-full w-0.5 bg-gray-200">
            <div 
              className="bg-gradient-to-b from-blue-600 to-purple-600 w-0.5 transition-all duration-1000 ease-out"
              style={{
                height: `${Math.min((activeTimelineItem + 1) * 25, 100)}%`
              }}
            />
          </div>

          {/* Timeline Line - Mobile */}
          <div className="lg:hidden absolute left-2 top-0 h-full w-0.5 bg-gray-200">
            <div 
              className="bg-gradient-to-b from-blue-600 to-purple-600 w-0.5 transition-all duration-1000 ease-out"
              style={{
                height: `${Math.min((activeTimelineItem + 1) * 25, 100)}%`
              }}
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-8 sm:space-y-12 lg:space-y-16">
            {timelineItems.map((item, index) => (
              <div 
                key={index}
                ref={el => timelineRefs.current[index] = el}
                className="relative"
              >
                {/* Mobile Layout */}
                <div className="lg:hidden flex items-start">
                  {/* Timeline Node - Mobile */}
                  <div className="flex-shrink-0 relative">
                    <div 
                      className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border-3 sm:border-4 border-white shadow-lg transition-all duration-500 z-10"
                      style={{
                        backgroundColor: activeTimelineItem >= index ? '#3B82F6' : '#E5E7EB'
                      }}
                    />
                  </div>

                  {/* Content - Mobile */}
                  <div className="ml-6 sm:ml-8 flex-1">
                    <div className={`bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 ${
                      activeTimelineItem >= index ? 'border-blue-500' : 'border-gray-200'
                    }`}>
                      <div className="flex items-start sm:items-center mb-3 sm:mb-4">
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white mr-3 sm:mr-4 flex-shrink-0 ${
                          activeTimelineItem >= index ? item.color : 'bg-gray-400'
                        } transition-all duration-500`}>
                          {item.icon}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="text-xs sm:text-sm font-medium text-gray-500">Step {item.step}</div>
                          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 leading-tight">{item.title}</h3>
                        </div>
                      </div>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className={`hidden lg:flex items-center ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                  {/* Content */}
                  <div className="flex-1 px-8">
                    <div className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 ${
                      activeTimelineItem >= index ? 'border-blue-500' : 'border-gray-200'
                    } transform hover:scale-105 hover:-translate-y-1`}>
                      <div className="flex items-center mb-6">
                        <div className={`w-14 h-14 rounded-full flex items-center justify-center text-white mr-4 ${
                          activeTimelineItem >= index ? item.color : 'bg-gray-400'
                        } transition-all duration-500 hover:rotate-12`}>
                          {item.icon}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-500">Step {item.step}</div>
                          <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-lg">{item.description}</p>
                    </div>
                  </div>

                  {/* Timeline Node - Desktop */}
                  <div className="flex-shrink-0 relative">
                    <div 
                      className="w-6 h-6 rounded-full border-4 border-white shadow-lg transition-all duration-500 z-10 hover:scale-125"
                      style={{
                        backgroundColor: activeTimelineItem >= index ? '#3B82F6' : '#E5E7EB'
                      }}
                    />
                  </div>

                  {/* Spacer */}
                  <div className="flex-1 px-8" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16 lg:mt-20">
          <button onClick={() => scrollToSection('contact')} className="cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            Start Your Journey Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Process;