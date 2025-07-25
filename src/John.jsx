import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Target, 
  Calendar, 
  TrendingUp, 
  Award,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const ProcessTimeline = () => {
  const [activeTimelineItem, setActiveTimelineItem] = useState(-1);
  const timelineRefs = useRef([]);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { threshold: 0.2 });

  const timelineItems = [
    {
      step: "01",
      title: "Initial Assessment & Goal Setting",
      description: "We begin with a comprehensive evaluation of your current health status, lifestyle patterns, and personal objectives. Our expert team conducts detailed assessments to create a personalized roadmap tailored specifically to your needs and aspirations.",
      icon: <Target className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-50 to-blue-100",
      features: ["Comprehensive Health Analysis", "Personalized Goal Setting", "Lifestyle Assessment"]
    },
    {
      step: "02", 
      title: "Custom Strategy Development",
      description: "Based on your assessment results, we develop a comprehensive strategy that encompasses nutrition planning, exercise protocols, and lifestyle modifications. Every element is carefully crafted to align with your schedule, preferences, and long-term objectives.",
      icon: <Calendar className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600",
      bgGradient: "from-purple-50 to-purple-100",
      features: ["Tailored Nutrition Plans", "Exercise Protocols", "Lifestyle Integration"]
    },
    {
      step: "03",
      title: "Implementation & Progress Tracking",
      description: "We guide you through the implementation phase with continuous support and monitoring. Regular check-ins, progress assessments, and plan adjustments ensure you stay on track and maintain momentum toward your goals.",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-emerald-500 to-emerald-600", 
      bgGradient: "from-emerald-50 to-emerald-100",
      features: ["Ongoing Support", "Progress Monitoring", "Plan Adjustments"]
    },
    {
      step: "04",
      title: "Achievement & Long-term Success",
      description: "Celebrate your transformation while establishing sustainable habits for long-term success. We provide continued guidance to help you maintain your achievements and continue growing beyond your initial goals.",
      icon: <Award className="w-6 h-6" />,
      color: "from-amber-500 to-amber-600",
      bgGradient: "from-amber-50 to-amber-100",
      features: ["Goal Achievement", "Habit Formation", "Ongoing Success"]
    }
  ];

  useEffect(() => {
    if (!isInView) return;

    const timer = setTimeout(() => {
      timelineRefs.current.forEach((ref, index) => {
        if (ref) {
          const observer = new IntersectionObserver(
            ([entry]) => {
              if (entry.isIntersecting) {
                setActiveTimelineItem(prev => Math.max(prev, index));
              }
            },
            { threshold: 0.5 }
          );
          observer.observe(ref);
        }
      });
    }, 500);

    return () => clearTimeout(timer);
  }, [isInView]);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-blue-700 font-medium text-sm mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <CheckCircle className="w-4 h-4 mr-2" />
            Proven Success Framework
          </motion.div>
          
          <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6 leading-tight">
            Your Journey to
            <br />
            <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
              Extraordinary Results
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our scientifically-backed methodology has helped thousands achieve their health and wellness goals. 
            Follow our proven 4-step process designed for sustainable, long-lasting transformation.
          </p>
        </motion.div>

        {/* Timeline Section */}
        <div className="relative">
          {/* Animated Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-1 bg-gradient-to-b from-gray-200 to-gray-300 rounded-full">
            <motion.div
              className="bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500 w-1 rounded-full shadow-lg"
              initial={{ height: 0 }}
              animate={{ 
                height: isInView ? `${Math.min((activeTimelineItem + 1) * 25, 100)}%` : 0 
              }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-32">
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                ref={el => timelineRefs.current[index] = el}
                className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
              >
                {/* Content Card */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'}`}>
                  <motion.div
                    className={`relative bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden group hover:shadow-2xl transition-all duration-500 ${
                      activeTimelineItem >= index ? 'ring-2 ring-blue-200' : ''
                    }`}
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    <div className="relative p-8 lg:p-10">
                      {/* Step Badge */}
                      <motion.div
                        className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} text-white mb-6 shadow-lg`}
                        whileHover={{ rotate: 12, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        {item.icon}
                      </motion.div>

                      {/* Header */}
                      <div className="mb-6">
                        <div className="flex items-center mb-3">
                          <span className="text-sm font-bold text-gray-500 tracking-wider">
                            STEP {item.step}
                          </span>
                          <ArrowRight className="w-4 h-4 ml-2 text-gray-400" />
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                          {item.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        {item.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-3">
                        {item.features.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            className="flex items-center text-gray-700"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + featureIndex * 0.1 }}
                          >
                            <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                            <span className="font-medium">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Hover Effect Border */}
                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                  </motion.div>
                </div>

                {/* Timeline Node */}
                <motion.div
                  className="flex-shrink-0 relative z-20"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className={`w-8 h-8 rounded-full border-4 border-white shadow-lg transition-all duration-500 ${
                    activeTimelineItem >= index 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 ring-4 ring-blue-200' 
                      : 'bg-gray-300'
                  }`}>
                    {activeTimelineItem >= index && (
                      <motion.div
                        className="w-full h-full rounded-full bg-white flex items-center justify-center"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5, type: "spring" }}
                      >
                        <CheckCircle className="w-4 h-4 text-blue-500" />
                      </motion.div>
                    )}
                  </div>
                </motion.div>

                {/* Spacer for alternating layout */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:pl-16' : 'lg:pr-16'}`} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.button
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Start Your Transformation Today
            <ArrowRight className="w-5 h-5 ml-2" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessTimeline;