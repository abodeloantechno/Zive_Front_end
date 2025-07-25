import React, { useState, useEffect ,useRef} from 'react';
import { ChevronDown, Play, Users, Target, Award, Clock, Mail, Phone, MapPin, Menu, X, Star } from 'lucide-react';
import { motion } from "framer-motion";
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
    FaCommentDots
  } from 'react-icons/fa';

// Framer Motion-like animation utilities
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

const ZiveFitnessWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const faqs = [
    {
      question: 'How does the personalized nutrition plan work?',
      answer: 'Our AI-powered system analyzes your health assessment, dietary preferences, lifestyle factors, and goals to create a completely customized nutrition plan. We consider your genetics, metabolism, food sensitivities, and personal preferences to ensure the plan is both effective and sustainable.'
    },
    {
      question: 'What kind of support do I get?',
      answer: 'You get 24/7 access to our certified nutrition coaches through our mobile app, weekly check-ins, progress tracking, meal plan adjustments, and a supportive community of like-minded individuals on similar health journeys.'
    },
    {
      question: 'How quickly will I see results?',
      answer: 'Most clients start seeing improvements in energy levels within the first week. Visible physical changes typically occur within 2-4 weeks, with significant transformations happening over 8-12 weeks when following the program consistently.'
    },
    {
      question: 'Is this suitable for people with dietary restrictions?',
      answer: 'Absolutely! Our platform accommodates all dietary restrictions including vegetarian, vegan, keto, paleo, gluten-free, dairy-free, and various medical dietary requirements. We create plans that work within your specific needs.'
    },
    {
      question: 'What makes ZyveFit different from other nutrition programs?',
      answer: 'ZyveFit combines cutting-edge AI technology with human expertise. Unlike generic meal plans, we provide truly personalized nutrition based on your unique biological markers, preferences, and lifestyle. Our approach is science-based and continuously adapted based on your progress.'
    },
    {
      question: 'Can I cancel my subscription anytime?',
      answer: 'Yes, you can cancel your subscription at any time. We believe in our program\'s effectiveness, so we don\'t lock you into long-term contracts. Your satisfaction and results are our priority.'
    }
  ];


const timelineItems = [
    {
      step: '01',
      title: 'Personal Assessment',
      description: 'Complete our comprehensive health and lifestyle questionnaire to understand your unique needs',
      icon: <FaUser className="w-6 h-6" />,
      color: 'bg-blue-500'
    },
    {
      step: '02',
      title: 'Custom Plan Creation',
      description: 'Our AI-powered system creates your personalized nutrition and wellness plan based on scientific data',
      icon: <FaBullseye className="w-6 h-6" />,
      color: 'bg-green-500'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Start your journey with easy-to-follow meal plans, supplement recommendations, and lifestyle tips',
      icon: <FaBolt className="w-6 h-6" />,
      color: 'bg-purple-500'
    },
    {
      step: '04',
      title: 'Track Progress',
      description: 'Monitor your transformation with advanced analytics and regular check-ins with certified coaches',
      icon: <FaBolt className="w-6 h-6" />,
      color: 'bg-orange-500'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Marketing Executive',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      text: 'ZyveFit transformed my relationship with food. Lost 25 pounds and gained so much energy!',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Software Engineer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      text: 'The personalized approach made all the difference. Finally found a sustainable way to stay healthy.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Fitness Enthusiast',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      text: 'Science-based nutrition that actually works. My performance has improved dramatically.',
      rating: 5
    }
  ];
  const [activeTimelineItem, setActiveTimelineItem] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  const timelineRefs = useRef([]);
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
const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white shadow-lg transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <MotionDiv className="flex items-center space-x-3" delay={0}>
              <img 
                src="https://ik.imagekit.io/psltlu4ds/zive_logo_page-00001.jpg?updatedAt=1753357527846" 
                alt="Zive Fitness Logo" 
                className="w-12 h-12 object-contain hover:scale-110 transition-transform duration-300"
              />
              <span className="text-2xl font-bold text-gray-900">Zive Fitness</span>
            </MotionDiv>
            
            <MotionDiv className="hidden md:flex items-center space-x-8" delay={200}>
              {['Home', 'About', 'Programs', 'Trainers', 'Contact'].map((item, index) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())} 
                  className="text-gray-700 hover:text-cyan-500 transition-all duration-300 relative group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-500 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
              <button className="bg-gradient-to-r from-cyan-400 to-pink-500 text-white px-6 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 transform">
                Join Now
              </button>
            </MotionDiv>

            <button 
              className="md:hidden text-gray-700 hover:text-cyan-500 transition-colors duration-300"
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
          <div className="px-4 py-2 space-y-2">
            {['Home', 'About', 'Programs', 'Trainers', 'Contact'].map((item, index) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())} 
                className="block w-full text-left py-3 text-gray-700 hover:text-cyan-500 hover:bg-gray-50 rounded-lg transition-all duration-300"
                style={{ 
                  transform: isMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                  opacity: isMenuOpen ? 1 : 0,
                  transitionDelay: `${index * 50}ms`
                }}
              >
                {item}
              </button>
            ))}
            <button className="w-full bg-gradient-to-r from-cyan-400 to-pink-500 text-white py-3 rounded-full mt-4 hover:scale-105 transition-transform duration-300">
              Join Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
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
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl hover:scale-110 transition-transform duration-500">
                <img 
                  src="https://ik.imagekit.io/psltlu4ds/zive_logo_page-00001.jpg?updatedAt=1753357527846" 
                  alt="Zive Fitness Logo" 
                  className="w-20 h-20 object-contain mx-auto"
                />
              </div>
            </div>
          </MotionDiv>
          
          <MotionDiv delay={600}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Transform Your
              <span className="bg-gradient-to-r from-cyan-400 via-yellow-400 to-pink-500 bg-clip-text text-transparent"> Life</span>
            </h1>
          </MotionDiv>
          
          <MotionDiv delay={900}>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join Zive Fitness and discover the perfect blend of strength, endurance, and wellness in our state-of-the-art facility.
            </p>
          </MotionDiv>
          
          <MotionDiv className="flex flex-col sm:flex-row gap-4 justify-center items-center" delay={1200}>
            <button className="bg-gradient-to-r from-cyan-400 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover:-translate-y-1">
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

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">Zive Fitness?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just a gym - we're your partner in achieving extraordinary fitness goals through innovative training methods and personalized support.
            </p>
          </MotionDiv>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "Personalized Training", desc: "Every workout is tailored to your unique goals, fitness level, and preferences for maximum results.", color: "cyan", delay: 0 },
              { icon: Users, title: "Expert Trainers", desc: "Our certified trainers bring years of experience and passion to help you achieve your fitness dreams.", color: "yellow", delay: 200 },
              { icon: Award, title: "Premium Equipment", desc: "State-of-the-art equipment and facilities designed to elevate your workout experience.", color: "pink", delay: 400 }
            ].map((item, index) => (
              <MotionDiv 
                key={index}
                className={`text-center p-8 rounded-2xl bg-gradient-to-br from-${item.color}-50 to-${item.color}-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer`}
                delay={item.delay}
              >
                <div className={`w-16 h-16 bg-${item.color}-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                  <item.icon className="text-white" size={32} />
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

      <section id="process" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Your Path to Success
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven 4-step process ensures you achieve your health goals efficiently and sustainably.
            </p>
          </motion.div>

          <div className="relative">
            {/* Animated Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-200">
              <motion.div 
                className="bg-gradient-to-b from-blue-600 to-purple-600 w-0.5 h-0 transition-all duration-1000 ease-out"
                style={{
                  height: `${(activeTimelineItem + 1) * 25}%`
                }}
              />
            </div>

            <div className="space-y-24">
              {timelineItems.map((item, index) => (
                <motion.div 
                  key={index}
                  ref={el => timelineRefs.current[index] = el}
                  className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <div className="flex-1 lg:pr-8 lg:pl-0">
                    <motion.div 
                      className={`bg-white p-8 rounded-2xl shadow-lg border-l-4 ${
                        activeTimelineItem >= index ? 'border-blue-500' : 'border-gray-200'
                      } transition-all duration-500`}
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="flex items-center mb-4">
                        <motion.div 
                          className={`w-12 h-12 rounded-full flex items-center justify-center text-white mr-4 ${
                            activeTimelineItem >= index ? item.color : 'bg-gray-400'
                          } transition-all duration-500`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          {item.icon}
                        </motion.div>
                        <div>
                          <div className="text-sm font-medium text-gray-500">Step {item.step}</div>
                          <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </motion.div>
                  </div>

                  {/* Timeline node */}
                  <motion.div 
                    className="flex-shrink-0 w-6 h-6 rounded-full border-4 border-white shadow-lg z-10 mx-8"
                    style={{
                      backgroundColor: activeTimelineItem >= index ? '#3B82F6' : '#E5E7EB'
                    }}
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  />

                  <div className="flex-1 lg:pl-8 lg:pr-0" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from people who transformed their lives with ZyveFit.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                variants={{
                  initial: { opacity: 0, y: 30 },
                  animate: { opacity: 1, y: 0 }
                }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 1 : -1 }}
              >
                <div className="flex items-center mb-4">
                  <motion.img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + i * 0.05, duration: 0.3 }}
                    >
                      <FaStar className="w-5 h-5 text-yellow-400" />
                    </motion.div>
                  ))}
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      

      

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">Programs</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our diverse range of fitness programs designed to challenge, inspire, and transform.
            </p>
          </MotionDiv>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Strength Training", description: "Build muscle and increase power with our comprehensive strength programs.", color: "cyan", delay: 0 },
              { title: "HIIT Workouts", description: "High-intensity interval training for maximum calorie burn and endurance.", color: "yellow", delay: 100 },
              { title: "Yoga & Flexibility", description: "Improve flexibility, balance, and mindfulness through our yoga classes.", color: "pink", delay: 200 },
              { title: "Cardio Fitness", description: "Boost your cardiovascular health with our dynamic cardio programs.", color: "cyan", delay: 300 },
              { title: "Functional Training", description: "Real-world movements that improve daily life activities and performance.", color: "yellow", delay: 400 },
              { title: "Nutrition Coaching", description: "Personalized nutrition plans to complement your fitness journey.", color: "pink", delay: 500 }
            ].map((program, index) => (
              <MotionDiv 
                key={index} 
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer"
                delay={program.delay}
              >
                <div className={`w-12 h-12 bg-${program.color}-400 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                  <Clock className="text-white group-hover:animate-pulse" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors duration-300">{program.title}</h3>
                <p className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300">{program.description}</p>
                <button className={`text-${program.color}-500 font-semibold hover:text-${program.color}-600 transition-all duration-300 group-hover:translate-x-2`}>
                  Learn More →
                </button>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section id="trainers" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Our <span className="bg-gradient-to-r from-cyan-400 to-yellow-400 bg-clip-text text-transparent">Expert Trainers</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our certified trainers are passionate about helping you achieve your fitness goals safely and effectively.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Johnson", specialty: "Strength Training", experience: "8 years", rating: 4.9 },
              { name: "Mike Chen", specialty: "HIIT & Cardio", experience: "6 years", rating: 4.8 },
              { name: "Emma Rodriguez", specialty: "Yoga & Wellness", experience: "10 years", rating: 5.0 }
            ].map((trainer, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300">
                <div className={`w-24 h-24 bg-gradient-to-r ${
                  index === 0 ? 'from-cyan-400 to-cyan-500' : 
                  index === 1 ? 'from-yellow-400 to-yellow-500' : 
                  'from-pink-400 to-pink-500'
                } rounded-full mx-auto mb-6 flex items-center justify-center`}>
                  <span className="text-white text-2xl font-bold">{trainer.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{trainer.name}</h3>
                <p className="text-gray-600 mb-2">{trainer.specialty}</p>
                <p className="text-sm text-gray-500 mb-4">{trainer.experience} experience</p>
                <div className="flex items-center justify-center">
                  <Star className="text-yellow-400 fill-current" size={20} />
                  <span className="ml-1 text-gray-700 font-semibold">{trainer.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "5000+", label: "Happy Members", color: "cyan" },
              { number: "50+", label: "Expert Trainers", color: "yellow" },
              { number: "100+", label: "Fitness Programs", color: "pink" },
              { number: "10+", label: "Years Experience", color: "cyan" }
            ].map((stat, index) => (
              <div key={index} className="text-white">
                <div className={`text-5xl font-bold mb-2 bg-gradient-to-r from-${stat.color}-400 to-${stat.color}-500 bg-clip-text text-transparent`}>
                  {stat.number}
                </div>
                <div className="text-xl text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about our personalized nutrition coaching program.
            </p>
          </motion.div>

          <motion.div 
            className="space-y-4"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 }
                }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <motion.button
                  className="w-full px-8 py-6 text-left focus:outline-none flex justify-between items-center"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  whileHover={{ backgroundColor: '#F3F4F6' }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaChevronDown className="w-5 h-5 text-gray-500" />
                  </motion.div>
                </motion.button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === index ? 'auto' : 0,
                    opacity: openFaq === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get <span className="bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">In Touch</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start your fitness journey? Contact us today and let's transform your life together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-cyan-400 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
                  <p className="text-gray-600">123 Fitness Street, Wellness District<br />Coimbatore, Tamil Nadu 641001</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
                  <p className="text-gray-600">+91 98765 43210<br />+91 87654 32109</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
                  <p className="text-gray-600">info@zivefitness.com<br />support@zivefitness.com</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="space-y-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="Your Phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Your Message"
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none transition-all"
                  ></textarea>
                </div>
                <button 
                  className="w-full bg-gradient-to-r from-cyan-400 to-pink-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  onClick={() => alert('Thank you for your message! We will get back to you soon.')}
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center items-center space-x-3 mb-6">
              <img 
                src="https://ik.imagekit.io/psltlu4ds/zive_logo_page-00001.jpg?updatedAt=1753357527846" 
                alt="Zive Fitness Logo" 
                className="w-10 h-10 object-contain"
              />
              <span className="text-2xl font-bold">Zive Fitness</span>
            </div>
            <p className="text-gray-400 mb-6">Transform your life, one workout at a time.</p>
            <div className="border-t border-gray-800 pt-6">
              <p className="text-gray-400">&copy; 2025 Zive Fitness. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ZiveFitnessWebsite;