import React from 'react';
import { ChevronDown, CheckCircle } from 'lucide-react';

// Framer Motion components
const motion = {
  div: ({ children, ...props }) => {
    const element = React.useRef();
    
    React.useEffect(() => {
      if (!element.current) return;
      
      const { animate, initial, transition, whileHover, ...otherProps } = props;
      
      // Apply initial styles
      if (initial) {
        Object.assign(element.current.style, {
          transform: `translateX(${initial.x || 0}px) translateY(${initial.y || 0}px) scale(${initial.scale || 1})`,
          opacity: initial.opacity !== undefined ? initial.opacity : 1
        });
      }
      
      // Handle animations
      if (animate) {
        const duration = transition?.duration || 2;
        const repeat = transition?.repeat;
        const ease = transition?.ease || 'linear';
        
        let startTime;
        let animationId;
        
        const animateElement = (timestamp) => {
          if (!startTime) startTime = timestamp;
          const progress = (timestamp - startTime) / (duration * 1000);
          
          if (progress <= 1) {
            const easeProgress = ease === 'linear' ? progress : 
                               ease === 'easeInOut' ? (Math.sin((progress - 0.5) * Math.PI) + 1) / 2 : 
                               progress;
            
            const currentX = (initial?.x || 0) + ((animate.x || 0) - (initial?.x || 0)) * easeProgress;
            const currentY = (initial?.y || 0) + ((animate.y || 0) - (initial?.y || 0)) * easeProgress;
            const currentScale = (initial?.scale || 1) + ((animate.scale || 1) - (initial?.scale || 1)) * easeProgress;
            const currentOpacity = (initial?.opacity !== undefined ? initial.opacity : 1) + 
                                 ((animate.opacity !== undefined ? animate.opacity : 1) - (initial?.opacity !== undefined ? initial.opacity : 1)) * easeProgress;
            
            element.current.style.transform = `translateX(${currentX}px) translateY(${currentY}px) scale(${currentScale})`;
            element.current.style.opacity = currentOpacity;
            
            animationId = requestAnimationFrame(animateElement);
          } else if (repeat === Infinity || (typeof repeat === 'number' && repeat > 0)) {
            startTime = timestamp;
            if (typeof repeat === 'number') repeat--;
            animationId = requestAnimationFrame(animateElement);
          }
        };
        
        animationId = requestAnimationFrame(animateElement);
        
        return () => {
          if (animationId) cancelAnimationFrame(animationId);
        };
      }
    }, []);
    
    return <div ref={element} {...otherProps}>{children}</div>;
  }
};

const CloudSVG = ({ className, opacity = 0.6 }) => (
  <svg viewBox="0 0 200 60" className={className} fill="currentColor" style={{ opacity }}>
    <path d="M170,30 C170,20 160,10 145,10 C140,5 130,5 125,10 C115,0 100,0 90,10 C75,10 65,20 65,30 C50,30 40,40 40,50 C40,55 45,60 50,60 L160,60 C175,60 185,50 185,40 C185,35 180,30 170,30 Z"/>
  </svg>
);

const MovingClouds = () => {
  const clouds = [
    { id: 1, size: 'w-32 h-12', delay: 0, speed: 60, yOffset: 20, opacity: 0.3 },
    { id: 2, size: 'w-24 h-9', delay: 15, speed: 45, yOffset: 60, opacity: 0.4 },
    { id: 3, size: 'w-40 h-15', delay: 30, speed: 80, yOffset: 100, opacity: 0.25 },
    { id: 4, size: 'w-28 h-10', delay: 45, speed: 55, yOffset: 140, opacity: 0.35 },
    { id: 5, size: 'w-36 h-14', delay: 20, speed: 70, yOffset: 180, opacity: 0.3 }
  ];

  return (
    <>
      {clouds.map((cloud) => (
        <motion.div
          key={cloud.id}
          className={`absolute text-white ${cloud.size}`}
          initial={{ x: -200, y: cloud.yOffset }}
          animate={{ x: window.innerWidth + 200, y: cloud.yOffset }}
          transition={{
            duration: cloud.speed,
            repeat: Infinity,
            ease: "linear",
            delay: cloud.delay
          }}
          style={{ top: `${cloud.yOffset}px` }}
        >
          <CloudSVG className="w-full h-full" opacity={cloud.opacity} />
        </motion.div>
      ))}
    </>
  );
};

const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-yellow-900/50"></div>
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Ancient Wisdom Meets Modern Technology" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      {/* Moving Clouds */}
      <MovingClouds />
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Wisdom Perfected by Intelligence,
            <span className="block bg-gradient-to-r from-yellow-400 to-blue-400 bg-clip-text text-transparent">
              Delivered at Light Speed
            </span>
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            For 5,000 years, Siddha wisdom has held the blueprint for perfect health. Today, we've captured this ancient knowledge, 
            combined it with modern nutritional science, and amplified it through AI to deliver personalized wellness solutions 
            that honor your culture while achieving your goals.
          </p>
        </motion.div>
        
        {/* Power Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 text-sm"
        >
          {[
            { icon: CheckCircle, value: "95%", label: "Client Retention" },
            { icon: CheckCircle, value: "400+", label: "Global Transformations" },
            { icon: CheckCircle, value: "9", label: "Countries Served" },
            { icon: CheckCircle, value: "Certified", label: "ACSM & ACE" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-black/40 backdrop-blur-sm rounded-lg p-3 cursor-pointer"
            >
              <div className="flex items-center justify-center text-green-400 mb-1">
                <stat.icon className="w-4 h-4 mr-1" />
                <span className="font-semibold">{stat.value}</span>
              </div>
              <div className="text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-to-r from-yellow-600 to-blue-600 hover:from-yellow-700 hover:to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-2xl"
          >
            Begin Your Transformation
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: 'rgb(251, 191, 36)', color: 'black' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('how-it-works')}
            className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
          >
            See How Wisdom Works
          </motion.button>
        </motion.div>
      </div>
      
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="text-white w-8 h-8" />
      </motion.div>
    </section>
  );
};

export default HeroSection;