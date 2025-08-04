import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Play, Users, Target, Award, Clock, Mail, Phone, MapPin, Menu, X, Star, Brain, Heart, Dumbbell } from 'lucide-react';
import { 
    FaPlay, 
    FaCheckCircle, 
    FaUsers, 
    FaAward, 
    FaStar,
    FaArrowRight,
    FaBars,
    FaTimes,
    FaHeart,
    FaBullseye,
    FaBolt,
    FaClock,
    FaUser,
    FaChartLine,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaPaperPlane,
    FaChevronDown,
    FaGlobe,
    FaChartBar,
    FaCalendarAlt,
    FaCommentDots,
    FaBrain,
    FaAppleAlt,
    FaDumbbell,
    FaRobot,
    FaMobile,
    FaGamepad,
    FaMicrophone,
    FaEye,
    FaGraduationCap
} from 'react-icons/fa';

// Animation utilities
const useInView = (threshold = 0.1) => {
  const [isInView, setIsInView] = useState(false);
  const [element, setElement] = useState(null);

  useEffect(() => {
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold }
    );

    observer.observe(element);
    return () => observer.unobserve(element);
  }, [element, threshold]);

  return [setElement, isInView];
};

const MotionDiv = ({ children, className, delay = 0, duration = 0.6, ...props }) => {
  const [ref, isInView] = useInView(0.1);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return (
    <div 
      ref={ref} 
      className={`${className} transition-all duration-700 ease-out ${
        hasAnimated 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-8 scale-95'
      }`}
      style={{ 
        transitionDelay: hasAnimated ? `${delay}ms` : '0ms',
        transitionDuration: `${duration * 1000}ms`
      }}
      {...props}
    >
      {children}
    </div>
  );
};

const FloatingElement = ({ children, className, duration = 3 }) => {
  return (
    <div 
      className={`${className} animate-pulse`}
      style={{
        animation: `float ${duration}s ease-in-out infinite`,
        animationDelay: `${Math.random() * 2}s`
      }}
    >
      {children}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
      `}</style>
    </div>
  );
};

const SolarSystemVisual = () => {
  return (
    <div className="relative w-80 h-80 mx-auto mb-12">
      {/* Central ZyveFit Logo */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
          <span className="text-white font-bold text-sm">ZyveFit</span>
        </div>
      </div>

      {/* Orbiting planets */}
      <div className="absolute inset-0">
        {/* Meditation Planet */}
        <div className="absolute w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg"
             style={{
               animation: 'orbit1 8s linear infinite',
               transformOrigin: '160px 160px'
             }}>
          <FaBrain className="text-white text-xs" />
        </div>

        {/* Nutrition Planet */}
        <div className="absolute w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center shadow-lg"
             style={{
               animation: 'orbit2 10s linear infinite',
               transformOrigin: '160px 160px'
             }}>
          <FaAppleAlt className="text-white text-xs" />
        </div>

        {/* Fitness Planet */}
        <div className="absolute w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg"
             style={{
               animation: 'orbit3 12s linear infinite',
               transformOrigin: '160px 160px'
             }}>
          <FaDumbbell className="text-white text-xs" />
        </div>
      </div>

      <style jsx>{`
        @keyframes orbit1 {
          from { transform: rotate(0deg) translateX(120px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(120px) rotate(-360deg); }
        }
        @keyframes orbit2 {
          from { transform: rotate(120deg) translateX(100px) rotate(-120deg); }
          to { transform: rotate(480deg) translateX(100px) rotate(-480deg); }
        }
        @keyframes orbit3 {
          from { transform: rotate(240deg) translateX(140px) rotate(-240deg); }
          to { transform: rotate(600deg) translateX(140px) rotate(-600deg); }
        }
      `}</style>
    </div>
  );
};

const ZyveFitWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeTimelineItem, setActiveTimelineItem] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  const timelineRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const timelineItems = [
    {
      step: '01',
      title: 'Tell Us Your Story',
      description: 'Upload your latest health data—blood work, prescriptions, body weight, height, and anything else that defines YOU.',
      icon: <FaUser className="w-6 h-6" />,
      color: 'bg-blue-500'
    },
    {
      step: '02',
      title: 'Express Your Preferences',
      description: 'Share what you love and what you don\'t—food, movement, routines. This is your plan, your way.',
      icon: <FaHeart className="w-6 h-6" />,
      color: 'bg-green-500'
    },
    {
      step: '03',
      title: 'Define Your Goals',
      description: 'Set your ambitions. From optimal focus at work to marathon readiness, or simply feeling your best—your goals drive your custom journey.',
      icon: <FaBullseye className="w-6 h-6" />,
      color: 'bg-purple-500'
    },
    {
      step: '04',
      title: 'Unlock Daily Precision',
      description: 'Receive personalized, science-backed nutrition, fitness, and meditation guidance every morning. ZyveFit recalibrates based on your progress.',
      icon: <FaBolt className="w-6 h-6" />,
      color: 'bg-orange-500'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Marketing Executive',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      text: 'ZyveFit transformed my relationship with food and fitness. The AI recommendations are spot-on!',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Software Engineer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      text: 'Finally, a holistic approach that actually works. My energy levels and focus have never been better.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Wellness Coach',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      text: 'The combination of meditation, nutrition, and fitness in one platform is game-changing.',
      rating: 5
    }
  ];

  const faqs = [
    {
      question: 'How does ZyveFit\'s AI personalization work?',
      answer: 'Our hybrid AI analyzes your unique health data, preferences, and goals to deliver pragmatic, prescriptive recommendations. It adjusts your food and fitness solutions daily, offering seamless, actionable advice tailored specifically for you and your family.'
    },
    {
      question: 'What makes ZyveFit different from other health apps?',
      answer: 'ZyveFit is holistic, combining meditation, nutrition, and fitness in one platform. Unlike narrow health apps, we provide daily, actionable solutions based on your real needs, lifestyle, and motivation—no fads, no confusion, just clear science and support.'
    },
    {
      question: 'What kind of support and guidance do I get?',
      answer: 'Our team includes nutritionists with Precision Nutrition credentials and fitness experts certified by ACSM and ACE. You get personalized coaching, daily guidance, and a supportive community—we celebrate your wins and adapt to your changes.'
    },
    {
      question: 'Can ZyveFit help with chronic diseases?',
      answer: 'Yes! ZyveFit is built on the goal to empower every person to live life free from chronic disease. Our science-backed approach can help with lifestyle disease management through personalized nutrition, fitness, and wellness strategies.'
    },
    {
      question: 'What technology features does ZyveFit offer?',
      answer: 'ZyveFit includes wearable integration, voice-enabled support (Alexa, Google), AR-powered food scanning, social gamification, and microlearning features. All designed to make healthy living simple and engaging.'
    },
    {
      question: 'How quickly will I see results?',
      answer: 'Most users notice improvements in energy and focus within the first week. Physical changes typically appear within 2-4 weeks, with significant transformations over 8-12 weeks when following our personalized recommendations consistently.'
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
      { threshold: 0.5 }
    );

    timelineRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white shadow-lg transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <MotionDiv className="flex items-center space-x-3" delay={0}>
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">ZF</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">ZyveFit</span>
            </MotionDiv>
            
            <MotionDiv className="hidden md:flex items-center space-x-8" delay={200}>
              {['Home', 'About', 'Planets', 'Process', 'Features', 'Contact'].map((item, index) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())} 
                  className="text-gray-700 hover:text-blue-500 transition-all duration-300 relative group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 transform">
                Start Your Journey
              </button>
            </MotionDiv>

            <button 
              className="md:hidden text-gray-700 hover:text-blue-500 transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className={`transform transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden bg-white border-t transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-4 py-2 ">
            {['Home', 'About', 'Planets', 'Process', 'Features', 'Contact'].map((item, index) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())} 
                className="block w-full text-left py-3 text-gray-700 hover:text-blue-500 hover:bg-gray-50 rounded-lg transition-all duration-300"
                style={{ 
                  transform: isMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                  opacity: isMenuOpen ? 1 : 0,
                  transitionDelay: `${index * 50}ms`
                }}
              >
                {item}
              </button>
            ))}
            <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-full mt-4 hover:scale-105 transition-transform duration-300">
              Start Your Journey
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20"></div>
        
        {/* Animated Background Elements */}
        <FloatingElement className="absolute top-20 left-10 w-20 h-20 bg-blue-500 rounded-full opacity-20">
          <div></div>
        </FloatingElement>
        <FloatingElement className="absolute top-40 right-20 w-16 h-16 bg-purple-500 rounded-full opacity-20" duration={4}>
          <div></div>
        </FloatingElement>
        <FloatingElement className="absolute bottom-40 left-20 w-24 h-24 bg-pink-500 rounded-full opacity-20" duration={5}>
          <div></div>
        </FloatingElement>
        
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <MotionDiv className="mb-8" delay={300}>
            <SolarSystemVisual />
          </MotionDiv>
          
          <MotionDiv delay={600}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              ZyveFit –
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"> Making You the Best Version of Yourself</span>
            </h1>
          </MotionDiv>
          
          <MotionDiv delay={900}>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              A holistic wellness universe where Meditation, Nutrition, and Fitness orbit around your health journey. 
              We nurture and elevate human life, aiming to end chronic illness for good.
            </p>
          </MotionDiv>
          
          <MotionDiv className="flex flex-col sm:flex-row gap-4 justify-center items-center" delay={1200}>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover:-translate-y-1">
              Start Your Journey
            </button>
            <button className="flex items-center text-white border-2 border-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 group">
              <Play className="mr-2 group-hover:scale-110 transition-transform duration-300" size={20} />
              Watch Demo
            </button>
          </MotionDiv>
        </div>
        
        <MotionDiv 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white"
          delay={1500}
        >
          <button 
            onClick={() => scrollToSection('about')}
            className="animate-bounce hover:text-blue-400 transition-colors duration-300"
          >
            <ChevronDown size={32} />
          </button>
        </MotionDiv>
      </section>

      {/* About/Why ZyveFit Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">ZyveFit?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              We believe that human life is precious and must be nurtured without chronic diseases.
            </p>
            <p className="text-lg text-gray-600 max-w-5xl mx-auto">
              ZyveFit is built on one bold goal: empower every person to live life to its fullest, free from chronic disease. 
              We know that achieving this takes more than a fad diet or a one-size-fits-all app—it requires a harmony of mind, body, personalized guidance, and ongoing support.
            </p>
          </MotionDiv>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { 
                title: "Our WHY", 
                desc: "We nurture and elevate human life, aiming to end chronic illness for good.", 
                color: "blue", 
                icon: <FaHeart className="w-8 h-8" />,
                delay: 0 
              },
              { 
                title: "Our HOW", 
                desc: "Direct AI-powered and expert-guided personalization—no fads, no confusion, just clear science and support.", 
                color: "purple", 
                icon: <FaRobot className="w-8 h-8" />,
                delay: 200 
              },
              { 
                title: "Our WHAT", 
                desc: "Nutrition, fitness, and meditation crafted daily, just for you.", 
                color: "pink", 
                icon: <FaBullseye className="w-8 h-8" />,
                delay: 400 
              }
            ].map((item, index) => (
              <MotionDiv 
                key={index}
                className={`text-center p-8 rounded-2xl bg-gradient-to-br from-${item.color}-50 to-${item.color}-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer`}
                delay={item.delay}
              >
                <div className={`w-16 h-16 bg-${item.color}-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                  <div className="text-white">{item.icon}</div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors duration-300">{item.title}</h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  {item.desc}
                </p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Wellness Planets Section */}
      <section id="planets" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Wellness <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Planets</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three interconnected worlds of wellness, each designed to optimize a different aspect of your health journey.
            </p>
          </MotionDiv>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Meditation",
                subtitle: "Mental Wellness & Mindfulness",
                description: "Welcome to the planet where calm powers your ambitions. ZyveFit's meditation programs go beyond relaxation—they help you unlock clarity, resilience, and unwavering focus for your personal and professional dreams.",
                features: ["Guided journeys", "Daily stress relief", "Science-backed techniques", "Mindfulness training"],
                color: "green",
                icon: <FaBrain className="w-12 h-12" />,
                delay: 0
              },
              {
                title: "Nutrition",
                subtitle: "Science-Driven, Joyful, Personal",
                description: "No more 'eat less, move more.' ZyveFit decodes your unique health data and preferences, crafting meals and nutrition advice as diverse and delicious as you are.",
                features: ["Personalized meal plans", "Health data analysis", "Lifestyle disease management", "Delicious healthy recipes"],
                color: "orange",
                icon: <FaAppleAlt className="w-12 h-12" />,
                delay: 200
              },
              {
                title: "Fitness",
                subtitle: "Movement That Inspires",
                description: "From home-friendly routines to dances and pro-level athletic coaching, ZyveFit adapts fitness to your life. Track every rep, celebrate every milestone.",
                features: ["Adaptive workout plans", "Progress tracking", "Home & gym routines", "Professional coaching"],
                color: "purple",
                icon: <FaDumbbell className="w-12 h-12" />,
                delay: 400
              }
            ].map((planet, index) => (
              <MotionDiv 
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 group cursor-pointer border-2 border-transparent hover:border-gray-200"
                delay={planet.delay}
              >
                <div className={`w-20 h-20 bg-gradient-to-r from-${planet.color}-400 to-${planet.color}-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg`}>
                  <div className="text-white">{planet.icon}</div>
                </div>
                
                <h3 className="text-3xl font-bold text-gray-900 mb-2 text-center group-hover:text-gray-700 transition-colors duration-300">
                  {planet.title}
                </h3>
                <p className={`text-${planet.color}-600 font-semibold text-center mb-4`}>
                  {planet.subtitle}
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {planet.description}
                </p>
                
                <ul className="space-y-2">
                  {planet.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <FaCheckCircle className={`text-${planet.color}-500 mr-3 flex-shrink-0`} size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`mt-6 w-full bg-gradient-to-r from-${planet.color}-400 to-${planet.color}-600 text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                  Explore {planet.title}
                </button>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* How ZyveFit Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How ZyveFit <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Works?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We build a data-driven AI tool that is simple to use and helps you make informed decisions to live a healthy and fit life.
            </p>
          </MotionDiv>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <MotionDiv delay={200}>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Hybrid AI:</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaRobot className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Pragmatic Recommendations</h4>
                    <p className="text-gray-600">Delivers prescriptive recommendations based on your unique data, goals, and preferences.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaChartLine className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Daily Adjustments</h4>
                    <p className="text-gray-600">Adjusts your food and fitness solutions daily for you and your family.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaBolt className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Actionable Advice</h4>
                    <p className="text-gray-600">Offers seamless, actionable advice—from what's on your plate to what's in your schedule.</p>
                  </div>
                </div>
              </div>
            </MotionDiv>

            <MotionDiv delay={400}>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">The ZyveFit Difference</h4>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-xl shadow-sm">
                    <p className="text-gray-600"><span className="font-semibold text-red-500">Most health apps:</span> Too narrow, generic advice</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm">
                    <p className="text-gray-600"><span className="font-semibold text-green-500">ZyveFit:</span> Holistic, daily, actionable solutions—no more confusion</p>
                  </div>
                </div>
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Your Path to Success (Process) Section */}
      <section id="process" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Path to <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Success</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Getting started with ZyveFit is refreshingly simple—and deeply empowering. 
              Your best self isn't just possible—with ZyveFit, it's inevitable.
            </p>
          </MotionDiv>

          <div className="relative">
            {/* Animated Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-200">
              <div 
                className="bg-gradient-to-b from-blue-500 to-purple-600 w-0.5 transition-all duration-1000 ease-out"
                style={{
                  height: `${(activeTimelineItem + 1) * 25}%`
                }}
              />
            </div>

            <div className="space-y-24">
              {timelineItems.map((item, index) => (
                <div 
                  key={index}
                  ref={el => timelineRefs.current[index] = el}
                  className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  <div className="flex-1 lg:pr-8 lg:pl-0">
                    <div 
                      className={`bg-white p-8 rounded-2xl shadow-lg border-l-4 ${
                        activeTimelineItem >= index ? 'border-blue-500' : 'border-gray-200'
                      } transition-all duration-500 hover:shadow-xl hover:scale-102 hover:-translate-y-1`}
                    >
                      <div className="flex items-center mb-4">
                        <div 
                          className={`w-12 h-12 rounded-full flex items-center justify-center text-white mr-4 ${
                            activeTimelineItem >= index ? item.color : 'bg-gray-400'
                          } transition-all duration-500`}
                        >
                          {item.icon}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-500">Step {item.step}</div>
                          <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>

                  {/* Timeline node */}
                  <div 
                    className="flex-shrink-0 w-6 h-6 rounded-full border-4 border-white shadow-lg z-10 mx-8 transition-all duration-300 hover:scale-120"
                    style={{
                      backgroundColor: activeTimelineItem >= index ? '#3B82F6' : '#E5E7EB'
                    }}
                  />

                  <div className="flex-1 lg:pl-8 lg:pr-0" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Advanced <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Features</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge technology meets personalized wellness to create an unparalleled health experience.
            </p>
          </MotionDiv>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "AI & ML-Driven", 
                description: "Cutting-edge personalization with almost zero human hassle.", 
                icon: <FaRobot className="w-8 h-8" />,
                color: "blue", 
                delay: 0 
              },
              { 
                title: "Wearable-Friendly", 
                description: "All your favorite tracking tech, fully integrated.", 
                icon: <FaMobile className="w-8 h-8" />,
                color: "green", 
                delay: 100 
              },
              { 
                title: "Social & Gamified", 
                description: "Count on encouragement, competition, and a thriving peer community.", 
                icon: <FaGamepad className="w-8 h-8" />,
                color: "purple", 
                delay: 200 
              },
              { 
                title: "Voice-Enabled", 
                description: "Sync with Alexa, Google, and more for seamless interaction.", 
                icon: <FaMicrophone className="w-8 h-8" />,
                color: "orange", 
                delay: 300 
              },
              { 
                title: "AR-Powered", 
                description: "Instantly scan food or gym gear for actionable insights.", 
                icon: <FaEye className="w-8 h-8" />,
                color: "pink", 
                delay: 400 
              },
              { 
                title: "Microlearning", 
                description: "Bite-sized lessons nudge you towards better habits, every single day.", 
                icon: <FaGraduationCap className="w-8 h-8" />,
                color: "cyan", 
                delay: 500 
              }
            ].map((feature, index) => (
              <MotionDiv 
                key={index} 
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer"
                delay={feature.delay}
              >
                <div className={`w-16 h-16 bg-${feature.color}-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                  <div className="text-white">{feature.icon}</div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors duration-300">{feature.title}</h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{feature.description}</p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from people who transformed their lives with ZyveFit's holistic approach.
            </p>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <MotionDiv 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                delay={index * 100}
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4 object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "10,000+", label: "Lives Transformed", color: "blue" },
              { number: "98%", label: "Success Rate", color: "green" },
              { number: "24/7", label: "AI Support", color: "purple" },
              { number: "5+", label: "Years of Research", color: "pink" }
            ].map((stat, index) => (
              <MotionDiv key={index} className="text-white" delay={index * 100}>
                <div className={`text-5xl font-bold mb-2 bg-gradient-to-r from-${stat.color}-400 to-${stat.color}-500 bg-clip-text text-transparent`}>
                  {stat.number}
                </div>
                <div className="text-xl text-gray-300">{stat.label}</div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about ZyveFit's holistic wellness approach.
            </p>
          </MotionDiv>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <MotionDiv 
                key={index}
                className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
                delay={index * 50}
              >
                <button
                  className="w-full px-8 py-6 text-left focus:outline-none flex justify-between items-center hover:bg-gray-100 transition-colors duration-200"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                  <div
                    className={`transform transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  >
                    <FaChevronDown className="w-5 h-5 text-gray-500" />
                  </div>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-8 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Transform?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have a question? Want to partner? We're here to help—always. 
              Our team responds within 24 hours because your journey deserves respect and speed.
            </p>
          </MotionDiv>

          <div className="grid md:grid-cols-2 gap-12">
            <MotionDiv className="space-y-8" delay={200}>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaEnvelope className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
                  <p className="text-gray-600">support@zyvefit.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaCommentDots className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">WhatsApp</h3>
                  <p className="text-gray-600">+91-9080709466</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaGlobe className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Location</h3>
                  <p className="text-gray-600">Online—serving the world</p>
                </div>
              </div>
            </MotionDiv>

            <MotionDiv className="bg-white rounded-2xl p-8 shadow-lg" delay={400}>
              <div className="space-y-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="Your Phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Your Message"
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  ></textarea>
                </div>
                <button 
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  onClick={() => alert('Thank you for your message! We will get back to you within 24 hours.')}
                >
                  Send Message
                </button>
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">ZF</span>
              </div>
              <span className="text-2xl font-bold">ZyveFit</span>
            </div>
            <p className="text-gray-400 mb-6">
              The Wellness Revolution Starts With You. Harness the power of science and soul.
            </p>
            <p className="text-lg text-blue-400 mb-6">
              Making You the Best Version of Yourself
            </p>
            <div className="border-t border-gray-800 pt-6">
              <p className="text-gray-400">&copy; 2025 ZyveFit. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ZyveFitWebsite;