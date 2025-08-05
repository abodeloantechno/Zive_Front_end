import React, { useState } from 'react';
import { 
  FaRobot,
  FaMobile,
  FaGamepad,
  FaMicrophone,
  FaEye,
  FaGraduationCap 
} from 'react-icons/fa';

// Mock MotionDiv component
const MotionDiv = ({ children, className, delay, onMouseEnter, onMouseLeave }) => {
  return (
    <div 
      className={className}
      style={{
        animation: `fadeInUp 0.6s ease-out ${delay ? delay/1000 : 0}s both`
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
};

const Programs = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

      const features = [
    {
      icon: FaRobot,
      title: "AI & ML-Driven",
      description: "Cutting-edge personalization with almost zero human hassle.",
      color: "cyan",
      gradient: "from-cyan-400 via-blue-500 to-purple-600",
      bgPattern: "bg-gradient-to-br",
      delay: 0,
      bgImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=300&fit=crop&crop=center&auto=format&q=80"
    },
    {
      icon: FaMobile,
      title: "Wearable-Friendly",
      description: "All your favorite tracking tech, fully integrated.",
      color: "yellow",
      gradient: "from-yellow-400 via-orange-500 to-red-500",
      bgPattern: "bg-gradient-to-br",
      delay: 100,
      bgImage: "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=400&h=300&fit=crop&crop=center&auto=format&q=80"
    },
    {
      icon: FaGamepad,
      title: "Social & Gamified",
      description: "Count on encouragement, competition, and a thriving peer community.",
      color: "pink",
      gradient: "from-pink-400 via-purple-500 to-indigo-600",
      bgPattern: "bg-gradient-to-br",
      delay: 200,
      bgImage: "https://images.unsplash.com/photo-1556438064-2d7646166914?w=400&h=300&fit=crop&crop=center&auto=format&q=80"
    },
    {
      icon: FaMicrophone,
      title: "Voice-Enabled",
      description: "Sync with Alexa, Google, and more.",
      color: "emerald",
      gradient: "from-emerald-400 via-teal-500 to-cyan-600",
      bgPattern: "bg-gradient-to-br",
      delay: 300,
      bgImage: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=400&h=300&fit=crop&crop=center&auto=format&q=80"
    },
    {
      icon: FaEye,
      title: "AR-Powered",
      description: "Instantly scan food or gym gear for actionable insights.",
      color: "violet",
      gradient: "from-violet-400 via-purple-500 to-pink-600",
      bgPattern: "bg-gradient-to-br",
      delay: 400,
      bgImage: "https://ik.imagekit.io/psltlu4ds/close-up-girl-with-vr-glasses-outdoors.jpg?updatedAt=1754393047915"
    },
    {
      icon: FaGraduationCap,
      title: "Microlearning",
      description: "Bite-sized lessons nudge you towards better habits, every single day.",
      color: "amber",
      gradient: "from-amber-400 via-orange-500 to-red-500",
      bgPattern: "bg-gradient-to-br",
      delay: 500,
      bgImage: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop&crop=center&auto=format&q=80"
    }
  ];

  return (
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); }
          50% { box-shadow: 0 8px 40px rgba(0, 0, 0, 0.2); }
        }
        
        .floating { animation: float 3s ease-in-out infinite; }
        .pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
        
        .glass-effect {
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .mesh-bg {
          background-image: 
            radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
        }

        .bg-pattern {
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
      `}</style>

      <section id="programs" className="py-12 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <MotionDiv className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Advanced{" "}
              <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                Features
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Cutting-edge technology meets personalized wellness to create an unparalleled health experience.
            </p>
          </MotionDiv>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {features.map((program, index) => {
              const Icon = program.icon;
              const isHovered = hoveredCard === index;
              
              return (
                <MotionDiv
                  key={index}
                  className={`
                    relative group cursor-pointer transform transition-all duration-500
                    ${isHovered ? 'scale-105 z-20' : 'hover:scale-105'}
                    ${isHovered ? 'floating' : ''}
                  `}
                  delay={program.delay}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Card Background with Gradient */}
                  <div className={`
                    absolute inset-0 rounded-2xl transition-all duration-500
                    ${isHovered ? 'opacity-0 scale-110' : 'opacity-0'}
                    blur-sm
                  `}></div>
                  
                  {/* Main Card */}
                  <div className={`
                    relative bg-transparent glass-effect rounded-2xl p-6 
                    shadow-lg hover:shadow-lg transition-all duration-500
                    overflow-hidden h-full
                  `}>
                    {/* Background Image */}
                    <div 
                      className="absolute inset-0 rounded-2xl overflow-hidden"
                      style={{
                        backgroundImage: `url("${program.bgImage}")`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        opacity: 0.8
                      }}
                    ></div>

                    {/* Dark overlay for text readability */}
                    <div className="absolute inset-0 bg-black/60 rounded-2xl"></div>

                    {/* Animated background particles */}
                    <div className="absolute inset-0 opacity-20 z-10">
                      <div className={`
                        absolute top-4 right-4 w-2 h-2 rounded-full 
                        bg-${program.color}-400 animate-ping
                        ${isHovered ? 'opacity-100' : 'opacity-0'}
                      `}></div>
                      <div className={`
                        absolute bottom-4 left-4 w-1 h-1 rounded-full 
                        bg-${program.color}-500 animate-pulse delay-300
                        ${isHovered ? 'opacity-100' : 'opacity-0'}
                      `}></div>
                    </div>

                    {/* Icon Container */}
                    <div className={`
                      relative z-20 w-14 h-14 rounded-xl flex items-center justify-center mb-4 
                      bg-gradient-to-br ${program.gradient}
                      transform transition-all duration-500
                      ${isHovered ? 'scale-110' : 'group-hover:scale-110'}
                    `}>
                      <Icon className="text-white drop-shadow-sm" size={24} />
                    </div>

                    {/* Content */}
                    <h3 className={`
                      relative z-20 text-xl font-bold mb-3 transition-all duration-300 text-white
                      ${isHovered ? 'transform translate-y-1' : ''}
                    `}>
                      {program.title}
                    </h3>
                    
                    <p className={`
                      relative z-20 text-gray-200 leading-relaxed transition-all duration-300 text-sm
                      ${isHovered ? 'text-white transform translate-y-1' : 'group-hover:text-white'}
                    `}>
                      {program.description}
                    </p>
                  </div>
                </MotionDiv>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Programs;