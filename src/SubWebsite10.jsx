import React, { useState, useEffect } from 'react';

export default function AudiovisualProduction() {
  const [activeSection, setActiveSection] = useState(0);
  
  const sections = [
    {
      title: "WRITING",
      content: {
        heading: "WRITING",
        description: "Professional screenplay writing, story development, and creative conceptualization. Our experienced writers craft compelling narratives that resonate with audiences."
      }
    },
    {
      title: "DEVELOPMENT", 
      content: {
        heading: "DEVELOPMENT",
        description: "Comprehensive project planning, budgeting, and creative development. We transform initial concepts into production-ready projects through detailed planning."
      }
    },
    {
      title: "PRE-PRODUCTION",
      content: {
        heading: "PRE-PRODUCTION",
        description: "Complete pre-production planning including storyboarding, shot lists, scheduling, and crew coordination. We ensure every detail is meticulously planned."
      }
    },
    {
      title: "PRODUCTION",
      content: {
        heading: "PRODUCTION",
        description: "From pre-production planning to filming and directing, we handle every aspect of video creation with professional equipment and experienced crew."
      }
    },
    {
      title: "POST-PRODUCTION",
      content: {
        heading: "POST-PRODUCTION LAB",
        isLab: true,
        services: [
          "POST-PRODUCTION COORDINATOR",
          "IMAGE EDITING / VFX / COLOR GRADING", 
          "MOTION DESIGN / CREDITS",
          "SUBTITLING / MASTER-DCP-PAD"
        ]
      }
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      const totalSections = sections.length;
      const scrollPercentage = scrollPosition / (documentHeight - windowHeight);
      const newActiveSection = Math.min(
        Math.floor(scrollPercentage * totalSections),
        totalSections - 1
      );
      
      setActiveSection(Math.max(0, newActiveSection));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections.length]);

  return (
    <div className="min-h-[500vh] bg-gray-900">
      {/* Fixed container */}
      <div className="fixed top-0 left-0 w-full h-screen p-8">
        {/* Outer border frame */}
        <div className="w-full h-full border border-gray-600 rounded-2xl overflow-hidden relative">
          
          {/* STD Label */}
          <div className="absolute top-6 right-6 z-20">
            <div className="border border-gray-400 text-gray-400 px-3 py-1 text-sm font-mono">
              STD
            </div>
          </div>

          <div className="flex w-full h-full">
            {/* Left side - Camera/lens visual */}
            <div className="w-1/2 bg-gray-800 flex items-center justify-center relative">
              {/* Concentric circles representing camera lens */}
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gray-600 flex items-center justify-center">
                  <div className="w-64 h-64 rounded-full bg-gray-700 flex items-center justify-center">
                    <div className="w-48 h-48 rounded-full bg-gray-800 flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full bg-gray-900 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-gray-700 flex items-center justify-center">
                          {/* Aperture blades */}
                          <div className="w-8 h-8 relative">
                            {[...Array(8)].map((_, i) => (
                              <div
                                key={i}
                                className="absolute w-1 h-3 bg-gray-500 rounded"
                                style={{
                                  top: '50%',
                                  left: '50%',
                                  transformOrigin: '50% 0%',
                                  transform: `translate(-50%, -50%) rotate(${i * 45}deg)`
                                }}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Content with slide-up panels */}
            <div className="w-1/2 bg-gray-100 relative overflow-hidden">
              
              {/* Base content - AUDIOVISUAL & CINEMA PRODUCTION with menu */}
              <div className={`absolute inset-0 p-12 flex flex-col justify-center transition-opacity duration-500 ${
                activeSection === 4 ? 'opacity-0' : 'opacity-100'
              }`}>
                <div className="max-w-lg">
                  <h1 className="text-4xl font-bold text-blue-600 mb-12 tracking-wider">
                    AUDIOVISUAL & CINEMA<br />
                    PRODUCTION
                  </h1>
                  
                  <div className="space-y-6 mb-12">
                    {sections.map((section, index) => (
                      <div key={index} className="relative">
                        <div className="flex items-center">
                          <h3 
                            className={`text-lg font-medium transition-all duration-300 ${
                              activeSection === index 
                                ? 'text-gray-900 font-semibold' 
                                : 'text-gray-600'
                            }`}
                          >
                            {section.title}
                          </h3>
                        </div>
                        <div 
                          className={`h-px bg-gray-400 mt-2 transition-all duration-300 ${
                            activeSection === index ? 'bg-gray-900' : ''
                          }`}
                        />
                      </div>
                    ))}
                  </div>

                  <button className="border-2 border-gray-900 px-6 py-3 font-semibold text-gray-900 hover:bg-gray-900 hover:text-white transition-colors duration-300 flex items-center gap-2">
                    DISCOVER
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M7 7h10v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>

              {/* POST-PRODUCTION LAB slide-up panel */}
              <div className={`absolute inset-0 bg-gray-100 p-12 flex flex-col justify-center transform transition-all duration-700 ease-out ${
                activeSection === 4 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-full opacity-0'
              }`}>
                <div className="max-w-lg">
                  <h1 className="text-4xl font-bold text-yellow-600 mb-12 tracking-wider">
                    POST-PRODUCTION LAB
                  </h1>
                  
                  <div className="mb-8">
                    <div className="h-px bg-gray-800 mb-8"></div>
                  </div>
                  
                  <div className="space-y-6 mb-12">
                    {sections[4].content.services.map((service, index) => (
                      <div key={index} className="relative">
                        <h3 className="text-lg font-medium text-gray-700 mb-2">
                          {service}
                        </h3>
                        <div className="h-px bg-gray-400"></div>
                      </div>
                    ))}
                  </div>

                  <div className="mb-8">
                    <div className="h-px bg-gray-800"></div>
                  </div>

                  <button className="border-2 border-gray-900 px-6 py-3 font-semibold text-gray-900 hover:bg-gray-900 hover:text-white transition-colors duration-300 flex items-center gap-2">
                    DISCOVER
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M7 7h10v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Invisible spacer divs to create scroll height */}
      {sections.map((_, index) => (
        <div key={index} className="h-screen opacity-0 pointer-events-none" />
      ))}
    </div>
  );
}