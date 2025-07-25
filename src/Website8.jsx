import React, { useState, useEffect } from 'react';
import { motion, useAnimation, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ChevronDown, Heart, DollarSign, Dumbbell, Star, ArrowRight, Menu, X, Play, CheckCircle, TrendingUp, Shield, Users, Zap, Target, Award, Clock, Sparkles, Eye, Brain, Rocket, Globe, MessageCircle, Phone, Mail, Calendar, BookOpen, BarChart3, Headphones, MapPin, Smartphone, Monitor, Tablet } from 'lucide-react';

const ZiveWebsite = () => {
 const [isMenuOpen, setIsMenuOpen] = useState(false);
 const [selectedFilter, setSelectedFilter] = useState('all');
 const [activeTab, setActiveTab] = useState('health');
 const { scrollYProgress } = useScroll();

 // Scroll progress for header
 const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [0.95, 1]);

 // Animation variants
 const fadeInUp = {
 hidden: { opacity: 0, y: 60 },
 visible: {
 opacity: 1,
 y: 0,
 transition: {
 duration: 0.6,
 ease: "easeOut"
 }
 }
 };

 const staggerContainer = {
 hidden: { opacity: 0 },
 visible: {
 opacity: 1,
 transition: {
 staggerChildren: 0.1,
 delayChildren: 0.1
 }
 }
 };

 const scaleOnHover = {
 rest: { scale: 1 },
 hover: { 
 scale: 1.03,
 transition: {
 duration: 0.3,
 ease: "easeOut"
 }
 }
 };

 const navigationItems = [
 { name: 'Home', href: '#home' },
 { name: 'Services', href: '#services' },
 { name: 'Programs', href: '#programs' },
 { name: 'Success', href: '#success' },
 { name: 'About', href: '#about' },
 { name: 'Contact', href: '#contact' }
 ];

 return (
 <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
 {/* Professional Header */}
 <motion.header 
 style={{ opacity: headerOpacity }}
 className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200 shadow-sm"
 >
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="flex justify-between items-center h-16 lg:h-20">
 {/* Logo */}
 <motion.div 
 whileHover={{ scale: 1.05 }}
 className="flex items-center"
 >
 <img 
 src="https://ik.imagekit.io/psltlu4ds/zive_logo_page-00001.jpg?updatedAt=1753357527846" 
 alt="ZIVE Logo" 
 className="h-8 lg:h-10 w-auto"
 />
 <span className="ml-3 text-xl lg:text-2xl font-bold text-gray-900">ZIVE</span>
 </motion.div>

 {/* Desktop Navigation */}
 <nav className="hidden lg:flex space-x-8">
 {navigationItems.map((item, index) => (
 <motion.a
 key={item.name}
 href={item.href}
 whileHover={{ y: -2 }}
 className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
 >
 {item.name}
 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
 </motion.a>
 ))}
 </nav>

 {/* CTA Button */}
 <motion.button
 whileHover={{ scale: 1.05 }}
 whileTap={{ scale: 0.95 }}
 className="hidden lg:block bg-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-sm"
 >
 Get Started
 </motion.button>

 {/* Mobile Menu Button */}
 <button
 onClick={() => setIsMenuOpen(!isMenuOpen)}
 className="lg:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
 >
 {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
 </button>
 </div>

 {/* Mobile Navigation */}
 <AnimatePresence>
 {isMenuOpen && (
 <motion.div
 initial={{ opacity: 0, height: 0 }}
 animate={{ opacity: 1, height: 'auto' }}
 exit={{ opacity: 0, height: 0 }}
 className="lg:hidden border-t border-gray-200 py-4"
 >
 <div className="space-y-2">
 {navigationItems.map((item) => (
 <a
 key={item.name}
 href={item.href}
 className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
 onClick={() => setIsMenuOpen(false)}
 >
 {item.name}
 </a>
 ))}
 <div className="pt-2">
 <button className="w-full bg-blue-600 text-white px-4 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
 Get Started
 </button>
 </div>
 </div>
 </motion.div>
 )}
 </AnimatePresence>
 </div>
 </motion.header>

 {/* Hero Section */}
 <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
 {/* Background Image */}
 <div className="absolute inset-0 z-0">
 <img 
 src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&h=1080&fit=crop" 
 alt="Transformation Background"
 className="w-full h-full object-cover"
 />
 <div className="absolute inset-0 bg-black/60"></div>
 </div>

 {/* Hero Content */}
 <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
 <motion.div
 initial="hidden"
 animate="visible"
 variants={staggerContainer}
 >
 {/* Main Headline */}
 <motion.h1 
 variants={fadeInUp}
 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6 text-white"
 >
 TRANSFORM
 <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
 YOUR LIFE
 </span>
 </motion.h1>
 
 {/* Subtitle */}
 <motion.p 
 variants={fadeInUp}
 className="text-xl sm:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto font-light"
 >
 Master your health, build wealth, achieve fitness excellence
 </motion.p>

 {/* CTA Buttons */}
 <motion.div 
 variants={fadeInUp}
 className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
 >
 <motion.button
 whileHover={{ scale: 1.05 }}
 whileTap={{ scale: 0.95 }}
 className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl transition-all duration-300"
 >
 Get Started Now
 <ArrowRight className="inline ml-2 w-5 h-5" />
 </motion.button>
 
 <motion.button
 whileHover={{ scale: 1.05 }}
 whileTap={{ scale: 0.95 }}
 className="border-2 border-white/50 hover:border-white text-white px-8 py-4 rounded-full font-bold text-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
 >
 <Play className="inline mr-2 w-5 h-5" />
 Watch Demo
 </motion.button>
 </motion.div>

 {/* Quick Stats */}
 <motion.div 
 variants={fadeInUp}
 className="grid grid-cols-3 gap-8 max-w-2xl mx-auto"
 >
 {[
 { number: "50K+", label: "Transformed" },
 { number: "98%", label: "Success Rate" },
 { number: "24/7", label: "Support" }
 ].map((stat, index) => (
 <motion.div
 key={index}
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
 className="text-center"
 >
 <div className="text-2xl sm:text-3xl font-black text-white mb-1">{stat.number}</div>
 <div className="text-gray-300 text-sm font-medium">{stat.label}</div>
 </motion.div>
 ))}
 </motion.div>
 </motion.div>
 </div>

 {/* Scroll Indicator */}
 <motion.div
 animate={{ y: [0, 8, 0] }}
 transition={{ duration: 2, repeat: Infinity }}
 className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
 >
 <ChevronDown className="w-6 h-6 text-white/60" />
 </motion.div>
 </section>

 {/* Services Section */}
 <section id="services" className="py-16 lg:py-24 bg-white">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <motion.div
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true }}
 variants={staggerContainer}
 className="text-center mb-16"
 >
 <motion.h2 
 variants={fadeInUp}
 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4"
 >
 Our Core Services
 </motion.h2>
 <motion.p 
 variants={fadeInUp}
 className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto"
 >
 Comprehensive solutions designed to transform every aspect of your life
 </motion.p>
 </motion.div>

 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
 {[
 {
 title: "Health Optimization",
 description: "Personalized wellness programs, nutrition guidance, and medical consultations for optimal health.",
 icon: Heart,
 color: "text-red-500",
 bgColor: "bg-red-50",
 image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop"
 },
 {
 title: "Wealth Building",
 description: "Investment strategies, financial planning, and passive income generation for long-term prosperity.",
 icon: DollarSign,
 color: "text-green-500",
 bgColor: "bg-green-50",
 image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=250&fit=crop"
 },
 {
 title: "Fitness Excellence",
 description: "Custom workout plans, personal training, and performance tracking for peak physical condition.",
 icon: Dumbbell,
 color: "text-blue-500",
 bgColor: "bg-blue-50",
 image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop"
 }
 ].map((service, index) => (
 <motion.div
 key={index}
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true }}
 variants={fadeInUp}
 transition={{ delay: index * 0.1 }}
 whileHover="hover"
 >
 <motion.div
 variants={scaleOnHover}
 className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full"
 >
 <div className="relative">
 <img
 src={service.image}
 alt={service.title}
 className="w-full h-48 object-cover"
 />
 <div className={`absolute top-4 left-4 w-12 h-12 ${service.bgColor} rounded-lg flex items-center justify-center`}>
 <service.icon className={`w-6 h-6 ${service.color}`} />
 </div>
 </div>
 
 <div className="p-6">
 <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
 <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
 <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 flex items-center group">
 Learn More
 <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
 </button>
 </div>
 </motion.div>
 </motion.div>
 ))}
 </div>
 </div>
 </section>

 {/* Programs Section */}
 <section id="programs" className="py-16 lg:py-24 bg-gray-50">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <motion.div
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true }}
 variants={staggerContainer}
 className="text-center mb-16"
 >
 <motion.h2 
 variants={fadeInUp}
 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4"
 >
 Choose Your Program
 </motion.h2>
 <motion.p 
 variants={fadeInUp}
 className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto"
 >
 Tailored programs designed to meet your specific goals and lifestyle
 </motion.p>
 </motion.div>

 {/* Tab Navigation */}
 <motion.div
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true }}
 variants={fadeInUp}
 className="flex flex-wrap justify-center mb-12 gap-2"
 >
 {[
 { id: 'health', label: 'Health & Wellness', icon: Heart },
 { id: 'wealth', label: 'Wealth Building', icon: DollarSign },
 { id: 'fitness', label: 'Fitness Training', icon: Dumbbell }
 ].map((tab) => (
 <button
 key={tab.id}
 onClick={() => setActiveTab(tab.id)}
 className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
 activeTab === tab.id
 ? 'bg-blue-600 text-white shadow-lg'
 : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
 }`}
 >
 <tab.icon className="w-5 h-5 mr-2" />
 {tab.label}
 </button>
 ))}
 </motion.div>

 {/* Program Content */}
 <AnimatePresence mode="wait">
 <motion.div
 key={activeTab}
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 exit={{ opacity: 0, y: -20 }}
 transition={{ duration: 0.4 }}
 className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
 >
 {(activeTab === 'health' ? [
 {
 title: "Complete Wellness",
 duration: "12 Weeks",
 level: "All Levels",
 price: "$299",
 image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=250&fit=crop",
 features: ["Personal Health Assessment", "Custom Nutrition Plan", "Wellness Coaching", "24/7 Support"]
 },
 {
 title: "Weight Management",
 duration: "8 Weeks", 
 level: "Beginner",
 price: "$199",
 image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=250&fit=crop",
 features: ["Meal Planning", "Exercise Routine", "Progress Tracking", "Expert Guidance"]
 },
 {
 title: "Mental Wellness",
 duration: "6 Weeks",
 level: "All Levels",
 price: "$149",
 image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop",
 features: ["Stress Management", "Mindfulness Training", "Sleep Optimization", "Mental Health Support"]
 }
 ] : activeTab === 'wealth' ? [
 {
 title: "Investment Mastery",
 duration: "16 Weeks",
 level: "Intermediate",
 price: "$599",
 image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=250&fit=crop",
 features: ["Portfolio Management", "Risk Assessment", "Market Analysis", "Personal Advisor"]
 },
 {
 title: "Financial Planning",
 duration: "12 Weeks",
 level: "Beginner",
 price: "$399",
 image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=250&fit=crop",
 features: ["Budget Planning", "Savings Strategy", "Debt Management", "Goal Setting"]
 },
 {
 title: "Passive Income",
 duration: "10 Weeks",
 level: "Advanced",
 price: "$799",
 image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=250&fit=crop",
 features: ["Income Streams", "Real Estate", "Digital Assets", "Business Development"]
 }
 ] : [
 {
 title: "Total Body Transformation",
 duration: "16 Weeks",
 level: "All Levels",
 price: "$399",
 image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
 features: ["Personal Training", "Nutrition Plan", "Progress Tracking", "Lifestyle Coaching"]
 },
 {
 title: "Strength Building",
 duration: "12 Weeks",
 level: "Intermediate",
 price: "$299",
 image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=250&fit=crop",
 features: ["Weight Training", "Strength Assessment", "Recovery Plan", "Supplement Guidance"]
 },
 {
 title: "Cardio Excellence",
 duration: "8 Weeks",
 level: "Beginner",
 price: "$199",
 image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&h=250&fit=crop",
 features: ["Cardio Workouts", "Endurance Training", "Heart Health", "Fitness Tracking"]
 }
 ]).map((program, index) => (
 <motion.div
 key={index}
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.4, delay: index * 0.1 }}
 whileHover={{ y: -5 }}
 className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
 >
 <img
 src={program.image}
 alt={program.title}
 className="w-full h-48 object-cover"
 />
 
 <div className="p-6">
 <div className="flex justify-between items-start mb-4">
 <h3 className="text-xl font-bold text-gray-900">{program.title}</h3>
 <span className="text-2xl font-bold text-blue-600">{program.price}</span>
 </div>
 
 <div className="flex justify-between text-sm text-gray-600 mb-4">
 <span>{program.duration}</span>
 <span>{program.level}</span>
 </div>

 <ul className="space-y-2 mb-6">
 {program.features.map((feature, idx) => (
 <li key={idx} className="flex items-center text-sm text-gray-600">
 <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
 {feature}
 </li>
 ))}
 </ul>

 <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
 Enroll Now
 </button>
 </div>
 </motion.div>
 ))}
 </motion.div>
 </AnimatePresence>
 </div>
 </section>

 {/* Success Stories Section */}
 <section id="success" className="py-16 lg:py-24 bg-white">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <motion.div
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true }}
 variants={staggerContainer}
 className="text-center mb-16"
 >
 <motion.h2 
 variants={fadeInUp}
 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4"
 >
 Success Stories
 </motion.h2>
 <motion.p 
 variants={fadeInUp}
 className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto"
 >
 Real transformations from real people who trusted us with their journey
 </motion.p>
 </motion.div>

 {/* Filter Buttons */}
 <motion.div
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true }}
 variants={fadeInUp}
 className="flex flex-wrap justify-center mb-12 gap-2"
 >
 {['all', 'health', 'wealth', 'fitness'].map((filter) => (
 <button
 key={filter}
 onClick={() => setSelectedFilter(filter)}
 className={`px-6 py-2 rounded-lg font-semibold transition-all duration-200 ${
 selectedFilter === filter
 ? 'bg-blue-600 text-white'
 : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
 }`}
 >
 {filter.charAt(0).toUpperCase() + filter.slice(1)}
 </button>
 ))}
 </motion.div>

 {/* Success Stories Grid */}
 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
 {[
 {
 name: "Sarah Johnson",
 category: "health",
 image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face",
 result: "Lost 35 pounds in 4 months",
 quote: "ZIVE's health program completely transformed my relationship with food and exercise."
 },
 {
 name: "Michael Chen",
 category: "wealth",
 image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
 result: "Increased net worth by 400%",
 quote: "The investment strategies I learned helped me build long-term wealth."
 },
 {
 name: "Emma Rodriguez",
 category: "fitness",
 image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
 result: "Completed first marathon",
 quote: "From couch to marathon in 6 months - I never thought it was possible!"
 },
 {
 name: "David Wilson",
 category: "health",
 image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=200&h=200&fit=crop&crop=face",
 result: "Reversed Type 2 diabetes",
 quote: "My doctor was amazed at my blood work improvement after following the program."
 },
 {
 name: "Lisa Thompson",
 category: "wealth",
 image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face",
 result: "Built 3 passive income streams",
 quote: "I now have financial freedom and work because I want to, not because I have to."
 },
 {
 name: "John Martinez",
 category: "fitness", 
 image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
 result: "Gained 25 pounds of muscle",
 quote: "At 45, I'm in the best shape of my life thanks to the personalized training plan."
 }
 ].filter(story => selectedFilter === 'all' || story.category === selectedFilter).map((story, index) => (
 <motion.div
 key={story.name}
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.4, delay: index * 0.1 }}
 whileHover={{ y: -5 }}
 className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
 >
 <div className="flex items-center mb-4">
 <img
 src={story.image}
 alt={story.name}
 className="w-16 h-16 rounded-full object-cover mr-4"
 />
 <div>
 <h4 className="font-bold text-gray-900">{story.name}</h4>
 <p className="text-blue-600 font-semibold text-sm">{story.result}</p>
 </div>
 </div>
 <p className="text-gray-600 italic">"{story.quote}"</p>
 <div className="flex mt-4">
 {[...Array(5)].map((_, i) => (
 <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
 ))}
 </div>
 </motion.div>
 ))}
 </div>
 </div>
 </section>

 {/* About Section */}
 <section id="about" className="py-16 lg:py-24 bg-gray-50">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
 <motion.div
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true }}
 variants={staggerContainer}
 >
 <motion.h2 
 variants={fadeInUp}
 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6"
 >
 Why Choose ZIVE?
 </motion.h2>
 
 <motion.p 
 variants={fadeInUp}
 className="text-lg text-gray-600 mb-8 leading-relaxed"
 >
 With over a decade of experience, we've helped thousands of people achieve their health, wealth, and fitness goals through our proven methodologies and personalized approach.
 </motion.p>

 <motion.div 
 variants={fadeInUp}
 className="space-y-4"
 >
 {[
 { icon: CheckCircle, text: "Proven track record with 50,000+ successful transformations" },
 { icon: Users, text: "Expert team of certified professionals" },
 { icon: Shield, text: "100% satisfaction guarantee" },
 { icon: Clock, text: "24/7 support and guidance" }
 ].map((feature, index) => (
 <div key={index} className="flex items-start">
 <feature.icon className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
 <span className="text-gray-700">{feature.text}</span>
 </div>
 ))}
 </motion.div>
 </motion.div>

 <motion.div
 initial={{ opacity: 0, scale: 0.9 }}
 whileInView={{ opacity: 1, scale: 1 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6 }}
 className="relative"
 >
 <div className="bg-white rounded-2xl shadow-xl p-8">
 <div className="grid grid-cols-2 gap-6 text-center">
 <div>
 <div className="text-3xl font-bold text-blue-600 mb-2">50K+</div>
 <div className="text-gray-600">Success Stories</div>
 </div>
 <div>
 <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
 <div className="text-gray-600">Success Rate</div>
 </div>
 <div>
 <div className="text-3xl font-bold text-purple-600 mb-2">10+</div>
 <div className="text-gray-600">Years Experience</div>
 </div>
 <div>
 <div className="text-3xl font-bold text-red-600 mb-2">24/7</div>
 <div className="text-gray-600">Support Available</div>
 </div>
 </div>
 </div>
 </motion.div>
 </div>
 </div>
 </section>

 {/* Contact Section */}
 <section id="contact" className="py-16 lg:py-24 bg-white">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <motion.div
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true }}
 variants={staggerContainer}
 className="text-center mb-16"
 >
 <motion.h2 
 variants={fadeInUp}
 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4"
 >
 Start Your Transformation
 </motion.h2>
 <motion.p 
 variants={fadeInUp}
 className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto"
 >
 Ready to transform your life? Get in touch with us today for a free consultation
 </motion.p>
 </motion.div>

 <div className="grid lg:grid-cols-2 gap-12">
 {/* Contact Form */}
 <motion.div
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true }}
 variants={fadeInUp}
 className="bg-gray-50 rounded-xl p-8"
 >
 <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Your Free Assessment</h3>
 
 <form className="space-y-6">
 <div className="grid md:grid-cols-2 gap-4">
 <input
 type="text"
 placeholder="First Name"
 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
 />
 <input
 type="text"
 placeholder="Last Name"
 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
 />
 </div>
 
 <input
 type="email"
 placeholder="Email Address"
 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
 />
 
 <input
 type="tel"
 placeholder="Phone Number"
 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
 />
 
 <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200">
 <option value="">Select Your Primary Goal</option>
 <option value="health">Health Optimization</option>
 <option value="wealth">Wealth Building</option>
 <option value="fitness">Fitness Excellence</option>
 <option value="all">Complete Transformation</option>
 </select>
 
 <textarea
 placeholder="Tell us about your goals..."
 rows="4"
 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none"
 />
 
 <motion.button
 whileHover={{ scale: 1.02 }}
 whileTap={{ scale: 0.98 }}
 type="submit"
 className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors duration-200"
 >
 Get My Free Assessment
 </motion.button>
 </form>
 </motion.div>

 {/* Contact Info */}
 <motion.div
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true }}
 variants={staggerContainer}
 className="space-y-8"
 >
 <div>
 <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
 
 <div className="space-y-4">
 {[
 {
 icon: Phone,
 label: "Call Us",
 value: "+1 (555) 123-ZIVE"
 },
 {
 icon: Mail,
 label: "Email Us",
 value: "hello@zive.com"
 },
 {
 icon: MapPin,
 label: "Visit Us",
 value: "123 Transformation Ave, Success City"
 }
 ].map((contact, index) => (
 <motion.div
 key={index}
 variants={fadeInUp}
 className="flex items-center p-4 bg-gray-50 rounded-lg"
 >
 <contact.icon className="w-6 h-6 text-blue-600 mr-4" />
 <div>
 <p className="font-semibold text-gray-900">{contact.label}</p>
 <p className="text-gray-600">{contact.value}</p>
 </div>
 </motion.div>
 ))}
 </div>
 </div>

 <motion.div variants={fadeInUp} className="bg-blue-50 rounded-xl p-6">
 <h4 className="text-xl font-bold text-gray-900 mb-4">Why Start Today?</h4>
 <ul className="space-y-2">
 <li className="flex items-center text-gray-700">
 <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
 Free initial consultation
 </li>
 <li className="flex items-center text-gray-700">
 <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
 Personalized assessment
 </li>
 <li className="flex items-center text-gray-700">
 <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
 Custom transformation plan
 </li>
 <li className="flex items-center text-gray-700">
 <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
 100% satisfaction guarantee
 </li>
 </ul>
 </motion.div>
 </motion.div>
 </div>
 </div>
 </section>

 {/* Footer */}
 <footer className="bg-gray-900 text-white py-12">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="grid md:grid-cols-4 gap-8">
 <div>
 <div className="flex items-center mb-4">
 <img 
 src="https://ik.imagekit.io/psltlu4ds/zive_logo_page-00001.jpg?updatedAt=1753357527846" 
 alt="ZIVE Logo" 
 className="h-8 w-auto brightness-0 invert"
 />
 <span className="ml-3 text-xl font-bold">ZIVE</span>
 </div>
 <p className="text-gray-400 leading-relaxed">
 Transforming lives through health, wealth, and fitness excellence since 2010.
 </p>
 </div>
 
 <div>
 <h3 className="text-lg font-semibold mb-4">Services</h3>
 <ul className="space-y-2 text-gray-400">
 <li><a href="#" className="hover:text-white transition-colors duration-200">Health Optimization</a></li>
 <li><a href="#" className="hover:text-white transition-colors duration-200">Wealth Building</a></li>
 <li><a href="#" className="hover:text-white transition-colors duration-200">Fitness Training</a></li>
 <li><a href="#" className="hover:text-white transition-colors duration-200">Life Coaching</a></li>
 </ul>
 </div>
 
 <div>
 <h3 className="text-lg font-semibold mb-4">Company</h3>
 <ul className="space-y-2 text-gray-400">
 <li><a href="#" className="hover:text-white transition-colors duration-200">About Us</a></li>
 <li><a href="#" className="hover:text-white transition-colors duration-200">Our Team</a></li>
 <li><a href="#" className="hover:text-white transition-colors duration-200">Success Stories</a></li>
 <li><a href="#" className="hover:text-white transition-colors duration-200">Contact</a></li>
 </ul>
 </div>
 
 <div>
 <h3 className="text-lg font-semibold mb-4">Connect</h3>
 <div className="flex space-x-4">
 {[1, 2, 3, 4].map((i) => (
 <div key={i} className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-200 cursor-pointer">
 <Star className="w-5 h-5" />
 </div>
 ))}
 </div>
 </div>
 </div>
 
 <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
 <p>&copy; 2025 ZIVE. All rights reserved. | Privacy Policy | Terms of Service</p>
 </div>
 </div>
 </footer>
 </div>
 );
};

export default ZiveWebsite;