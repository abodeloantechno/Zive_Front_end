import React, { useState, useEffect } from 'react';
import { motion, useAnimation, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ChevronDown, Heart, DollarSign, Dumbbell, Star, ArrowRight, Menu, X, Play, CheckCircle, TrendingUp, Shield, Users, Zap, Target, Award, Clock, Sparkles, Eye, Brain, Rocket, Globe, MessageCircle, Phone, Mail, Calendar, BookOpen, BarChart3, Headphones, MapPin, Smartphone, Monitor, Tablet, Quote, ChevronLeft, ChevronRight, Lightbulb, Leaf, ThumbsUp, Coffee, Activity, PieChart, BarChart, LineChart } from 'lucide-react';

const ZiveWebsite = () => {
 const [isMenuOpen, setIsMenuOpen] = useState(false);
 const [selectedFilter, setSelectedFilter] = useState('all');
 const [activeTab, setActiveTab] = useState('health');
 const [currentTestimonial, setCurrentTestimonial] = useState(0);
 const { scrollYProgress } = useScroll();

 // Scroll progress for header
 const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [0.95, 1]);

 // Clean animation variants
 const fadeInUp = {
 hidden: { opacity: 0, y: 30 },
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
 scale: 1.05,
 transition: {
 duration: 0.3,
 ease: "easeOut"
 }
 }
 };

 const navigationItems = [
 { name: 'Home', href: '#home' },
 { name: 'Services', href: '#services' },
 { name: 'Features', href: '#features' },
 { name: 'Programs', href: '#programs' },
 { name: 'Success', href: '#success' },
 { name: 'Team', href: '#team' },
 { name: 'Pricing', href: '#pricing' },
 { name: 'Contact', href: '#contact' }
 ];

 // Auto-rotate testimonials
 useEffect(() => {
 const interval = setInterval(() => {
 setCurrentTestimonial(prev => (prev + 1) % 3);
 }, 5000);
 return () => clearInterval(interval);
 }, []);

 return (
 <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
 {/* Clean Header */}
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
 <nav className="hidden lg:flex space-x-6">
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
 <div className="grid grid-cols-2 gap-2">
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
 </div>
 <div className="pt-4">
 <button className="w-full bg-blue-600 text-white px-4 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
 Get Started
 </button>
 </div>
 </motion.div>
 )}
 </AnimatePresence>
 </div>
 </motion.header>

 {/* Clean Hero Section */}
 <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
 {/* Background with subtle animation */}
 <div className="absolute inset-0 z-0">
 <motion.img 
 animate={{ scale: [1, 1.02, 1] }}
 transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
 src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&h=1080&fit=crop" 
 alt="Transformation Background"
 className="w-full h-full object-cover"
 />
 <div className="absolute inset-0 bg-black/50"></div>
 </div>

 {/* Subtle floating elements */}
 <div className="absolute inset-0 z-10">
 {[...Array(3)].map((_, i) => (
 <motion.div
 key={i}
 animate={{
 y: [0, -20, 0],
 opacity: [0.2, 0.4, 0.2],
 }}
 transition={{
 duration: 6 + i * 2,
 repeat: Infinity,
 ease: "easeInOut",
 delay: i * 2
 }}
 className="absolute w-2 h-2 bg-blue-400/40 rounded-full"
 style={{
 left: `${20 + i * 30}%`,
 top: `${30 + i * 20}%`,
 }}
 />
 ))}
 </div>

 {/* Hero Content */}
 <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
 <motion.div
 initial="hidden"
 animate="visible"
 variants={staggerContainer}
 >
 {/* Clean logo animation */}
 <motion.div
 animate={{ rotate: [0, 360] }}
 transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
 className="w-16 h-16 mx-auto mb-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center"
 >
 <img 
 src="https://ik.imagekit.io/psltlu4ds/zive_logo_page-00001.jpg?updatedAt=1753357527846" 
 alt="ZIVE Logo" 
 className="h-10 w-auto brightness-0 invert"
 />
 </motion.div>

 {/* Clean headline */}
 <motion.h1 
 variants={fadeInUp}
 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6 text-white"
 >
 TRANSFORM
 <motion.span 
 animate={{ 
 backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
 }}
 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
 className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
 style={{ backgroundSize: "200% 200%" }}
 >
 YOUR LIFE
 </motion.span>
 </motion.h1>
 
 {/* Clean subtitle */}
 <motion.p 
 variants={fadeInUp}
 className="text-xl sm:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto font-light"
 >
 Master your health, build wealth, achieve fitness excellence
 </motion.p>

 {/* Clean CTA buttons */}
 <motion.div 
 variants={fadeInUp}
 className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
 >
 <motion.button
 whileHover={{ scale: 1.05, y: -2 }}
 whileTap={{ scale: 0.95 }}
 className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg transition-all duration-300"
 >
 Get Started Now
 <ArrowRight className="inline ml-2 w-5 h-5" />
 </motion.button>
 
 <motion.button
 whileHover={{ scale: 1.05, y: -2 }}
 whileTap={{ scale: 0.95 }}
 className="border-2 border-white/60 hover:border-white text-white px-8 py-4 rounded-lg font-semibold text-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
 >
 <Play className="inline mr-2 w-5 h-5" />
 Watch Demo
 </motion.button>
 </motion.div>

 {/* Clean stats */}
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
 whileHover={{ y: -5, scale: 1.05 }}
 className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
 >
 <div className="text-2xl sm:text-3xl font-black text-white mb-1">{stat.number}</div>
 <div className="text-gray-300 text-sm font-medium">{stat.label}</div>
 </motion.div>
 ))}
 </motion.div>
 </motion.div>
 </div>

 {/* Clean scroll indicator */}
 <motion.div
 animate={{ y: [0, 10, 0] }}
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
 <motion.img
 whileHover={{ scale: 1.05 }}
 transition={{ duration: 0.3 }}
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
 <motion.button 
 whileHover={{ x: 5 }}
 className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 flex items-center group"
 >
 Learn More
 <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
 </motion.button>
 </div>
 </motion.div>
 </motion.div>
 ))}
 </div>
 </div>
 </section>

 {/* Features Section - NEW */}
 <section id="features" className="py-16 lg:py-24 bg-gray-50">
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
 Why Choose ZIVE?
 </motion.h2>
 <motion.p 
 variants={fadeInUp}
 className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto"
 >
 Discover the features that make us the leading transformation platform
 </motion.p>
 </motion.div>

 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
 {[
 {
 icon: Lightbulb,
 title: "AI-Powered Insights",
 description: "Advanced algorithms provide personalized recommendations based on your unique profile."
 },
 {
 icon: Shield,
 title: "100% Secure",
 description: "Your data is protected with enterprise-grade security and privacy measures."
 },
 {
 icon: Users,
 title: "Expert Community",
 description: "Connect with certified professionals and like-minded individuals on your journey."
 },
 {
 icon: Leaf,
 title: "Sustainable Approach",
 description: "Long-term, sustainable changes that last a lifetime, not quick fixes."
 },
 {
 icon: BarChart3,
 title: "Progress Tracking",
 description: "Detailed analytics and progress reports to keep you motivated and on track."
 },
 {
 icon: Headphones,
 title: "24/7 Support",
 description: "Round-the-clock assistance from our dedicated support team whenever you need it."
 }
 ].map((feature, index) => (
 <motion.div
 key={index}
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true }}
 variants={fadeInUp}
 transition={{ delay: index * 0.1 }}
 whileHover={{ y: -5 }}
 className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
 >
 <motion.div
 whileHover={{ scale: 1.1, rotate: 5 }}
 className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
 >
 <feature.icon className="w-6 h-6 text-blue-600" />
 </motion.div>
 <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
 <p className="text-gray-600 leading-relaxed">{feature.description}</p>
 </motion.div>
 ))}
 </div>
 </div>
 </section>

 {/* Programs Section */}
 <section id="programs" className="py-16 lg:py-24 bg-white">
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
 <motion.button
 key={tab.id}
 onClick={() => setActiveTab(tab.id)}
 whileHover={{ scale: 1.05 }}
 whileTap={{ scale: 0.95 }}
 className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
 activeTab === tab.id
 ? 'bg-blue-600 text-white shadow-lg'
 : 'bg-gray-100 text-gray-700 hover:bg-gray-200 shadow-sm'
 }`}
 >
 <tab.icon className="w-5 h-5 mr-2" />
 {tab.label}
 </motion.button>
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
 className="bg-gray-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
 >
 <motion.img
 whileHover={{ scale: 1.05 }}
 transition={{ duration: 0.3 }}
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

 <motion.button 
 whileHover={{ scale: 1.02 }}
 whileTap={{ scale: 0.98 }}
 className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
 >
 Enroll Now
 </motion.button>
 </div>
 </motion.div>
 ))}
 </motion.div>
 </AnimatePresence>
 </div>
 </section>

 {/* Success Stories Section */}
 <section id="success" className="py-16 lg:py-24 bg-gray-50">
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
 <motion.button
 key={filter}
 onClick={() => setSelectedFilter(filter)}
 whileHover={{ scale: 1.05 }}
 whileTap={{ scale: 0.95 }}
 className={`px-6 py-2 rounded-lg font-semibold transition-all duration-200 ${
 selectedFilter === filter
 ? 'bg-blue-600 text-white'
 : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
 }`}
 >
 {filter.charAt(0).toUpperCase() + filter.slice(1)}
 </motion.button>
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
 className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
 >
 <div className="flex items-center mb-4">
 <motion.img
 whileHover={{ scale: 1.1 }}
 src={story.image}
 alt={story.name}
 className="w-16 h-16 rounded-full object-cover mr-4"
 />
 <div>
 <h4 className="font-bold text-gray-900">{story.name}</h4>
 <p className="text-blue-600 font-semibold text-sm">{story.result}</p>
 </div>
 </div>
 <p className="text-gray-600 italic mb-4">"{story.quote}"</p>
 <div className="flex">
 {[...Array(5)].map((_, i) => (
 <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
 ))}
 </div>
 </motion.div>
 ))}
 </div>
 </div>
 </section>

 {/* Team Section - NEW */}
 <section id="team" className="py-16 lg:py-24 bg-white">
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
 Meet Our Expert Team
 </motion.h2>
 <motion.p 
 variants={fadeInUp}
 className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto"
 >
 World-class professionals dedicated to your transformation journey
 </motion.p>
 </motion.div>

 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
 {[
 {
 name: "Dr. Sarah Chen",
 role: "Chief Health Officer",
 image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
 expertise: "Preventive Medicine, Nutrition"
 },
 {
 name: "Marcus Rodriguez",
 role: "Wealth Strategist",
 image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
 expertise: "Investment Planning, Finance"
 },
 {
 name: "Emma Thompson",
 role: "Fitness Director",
 image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
 expertise: "Personal Training, Sports Science"
 },
 {
 name: "Dr. James Park",
 role: "Wellness Coach",
 image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=300&h=300&fit=crop&crop=face",
 expertise: "Psychology, Mindfulness"
 }
 ].map((member, index) => (
 <motion.div
 key={index}
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true }}
 variants={fadeInUp}
 transition={{ delay: index * 0.1 }}
 whileHover={{ y: -10 }}
 className="text-center group"
 >
 <div className="relative mb-4">
 <motion.img
 whileHover={{ scale: 1.05 }}
 src={member.image}
 alt={member.name}
 className="w-full h-64 object-cover rounded-xl"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
 </div>
 <h4 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h4>
 <p className="text-blue-600 font-semibold mb-2">{member.role}</p>
 <p className="text-gray-600 text-sm">{member.expertise}</p>
 </motion.div>
 ))}
 </div>
 </div>
 </section>

 {/* Pricing Section - NEW */}
 <section id="pricing" className="py-16 lg:py-24 bg-gray-50">
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
 Choose Your Plan
 </motion.h2>
 <motion.p 
 variants={fadeInUp}
 className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto"
 >
 Flexible pricing options to fit your budget and transformation goals
 </motion.p>
 </motion.div>

 <div className="grid md:grid-cols-3 gap-8">
 {[
 {
 name: "Starter",
 price: "$49",
 period: "/month",
 description: "Perfect for beginners starting their journey",
 features: ["Basic Health Assessment", "Weekly Fitness Plans", "Community Access", "Mobile App Access", "Email Support"],
 popular: false,
 color: "border-gray-200"
 },
 {
 name: "Professional",
 price: "$99",
 period: "/month",
 description: "Most popular choice for serious transformers",
 features: ["Everything in Starter", "Personal Coach", "Advanced Analytics", "Priority Support", "Custom Meal Plans", "Video Consultations"],
 popular: true,
 color: "border-blue-500 ring-2 ring-blue-500"
 },
 {
 name: "Elite",
 price: "$199",
 period: "/month",
 description: "Premium experience with white-glove service",
 features: ["Everything in Professional", "1-on-1 Mentoring", "Custom Programs", "24/7 Phone Support", "Exclusive Events", "Concierge Service"],
 popular: false,
 color: "border-purple-500"
 }
 ].map((plan, index) => (
 <motion.div
 key={index}
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true }}
 variants={fadeInUp}
 transition={{ delay: index * 0.1 }}
 whileHover={{ y: -10, scale: 1.02 }}
 className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${plan.color} relative`}
 >
 {plan.popular && (
 <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
 Most Popular
 </div>
 )}
 
 <div className="p-8">
 <div className="text-center mb-8">
 <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
 <div className="flex items-baseline justify-center mb-4">
 <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
 <span className="text-gray-600 ml-1">{plan.period}</span>
 </div>
 <p className="text-gray-600">{plan.description}</p>
 </div>

 <ul className="space-y-4 mb-8">
 {plan.features.map((feature, idx) => (
 <li key={idx} className="flex items-center">
 <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
 <span className="text-gray-700">{feature}</span>
 </li>
 ))}
 </ul>

 <motion.button
 whileHover={{ scale: 1.02 }}
 whileTap={{ scale: 0.98 }}
 className={`w-full py-4 rounded-lg font-semibold text-lg transition-colors duration-200 ${
 plan.popular 
 ? 'bg-blue-600 text-white hover:bg-blue-700' 
 : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
 }`}
 >
 Get Started
 </motion.button>
 </div>
 </motion.div>
 ))}
 </div>
 </div>
 </section>

 {/* Testimonials Carousel - NEW */}
 <section className="py-16 lg:py-24 bg-blue-600">
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
 <motion.div
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true }}
 variants={staggerContainer}
 className="text-center"
 >
 <motion.h2 
 variants={fadeInUp}
 className="text-3xl lg:text-4xl font-bold text-white mb-16"
 >
 What Our Clients Say
 </motion.h2>

 <div className="relative">
 <AnimatePresence mode="wait">
 <motion.div
 key={currentTestimonial}
 initial={{ opacity: 0, x: 100 }}
 animate={{ opacity: 1, x: 0 }}
 exit={{ opacity: 0, x: -100 }}
 transition={{ duration: 0.5 }}
 className="text-center"
 >
 {[
 {
 quote: "ZIVE transformed my entire approach to health and wellness. I've never felt better!",
 author: "Jennifer Davis",
 role: "Marketing Executive",
 image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
 },
 {
 quote: "The wealth building strategies here are incredible. I've doubled my income in just one year.",
 author: "Robert Johnson",
 role: "Entrepreneur",
 image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
 },
 {
 quote: "From struggling with fitness to running marathons - ZIVE made the impossible possible.",
 author: "Maria Lopez",
 role: "Teacher",
 image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
 }
 ][currentTestimonial] && (
 <>
 <Quote className="w-12 h-12 text-white/20 mx-auto mb-6" />
 <blockquote className="text-2xl lg:text-3xl text-white font-light leading-relaxed mb-8">
 "{[
 {
 quote: "ZIVE transformed my entire approach to health and wellness. I've never felt better!",
 author: "Jennifer Davis",
 role: "Marketing Executive",
 image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
 },
 {
 quote: "The wealth building strategies here are incredible. I've doubled my income in just one year.",
 author: "Robert Johnson",
 role: "Entrepreneur",
 image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
 },
 {
 quote: "From struggling with fitness to running marathons - ZIVE made the impossible possible.",
 author: "Maria Lopez",
 role: "Teacher",
 image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
 }
 ][currentTestimonial].quote}"
 </blockquote>
 <div className="flex items-center justify-center">
 <img
 src={[
 {
 quote: "ZIVE transformed my entire approach to health and wellness. I've never felt better!",
 author: "Jennifer Davis",
 role: "Marketing Executive",
 image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
 },
 {
 quote: "The wealth building strategies here are incredible. I've doubled my income in just one year.",
 author: "Robert Johnson",
 role: "Entrepreneur",
 image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
 },
 {
 quote: "From struggling with fitness to running marathons - ZIVE made the impossible possible.",
 author: "Maria Lopez",
 role: "Teacher",
 image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
 }
 ][currentTestimonial].image}
 alt="Client"
 className="w-16 h-16 rounded-full mr-4"
 />
 <div className="text-left">
 <div className="text-white font-semibold">{[
 {
 quote: "ZIVE transformed my entire approach to health and wellness. I've never felt better!",
 author: "Jennifer Davis",
 role: "Marketing Executive",
 image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
 },
 {
 quote: "The wealth building strategies here are incredible. I've doubled my income in just one year.",
 author: "Robert Johnson",
 role: "Entrepreneur",
 image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
 },
 {
 quote: "From struggling with fitness to running marathons - ZIVE made the impossible possible.",
 author: "Maria Lopez",
 role: "Teacher",
 image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
 }
 ][currentTestimonial].author}</div>
 <div className="text-white/80">{[
 {
 quote: "ZIVE transformed my entire approach to health and wellness. I've never felt better!",
 author: "Jennifer Davis",
 role: "Marketing Executive",
 image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
 },
 {
 quote: "The wealth building strategies here are incredible. I've doubled my income in just one year.",
 author: "Robert Johnson",
 role: "Entrepreneur",
 image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
 },
 {
 quote: "From struggling with fitness to running marathons - ZIVE made the impossible possible.",
 author: "Maria Lopez",
 role: "Teacher",
 image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
 }
 ][currentTestimonial].role}</div>
 </div>
 </div>
 </>
 )}
 </motion.div>
 </AnimatePresence>

 {/* Navigation dots */}
 <div className="flex justify-center mt-8 space-x-2">
 {[0, 1, 2].map((index) => (
 <button
 key={index}
 onClick={() => setCurrentTestimonial(index)}
 className={`w-3 h-3 rounded-full transition-colors duration-200 ${
 currentTestimonial === index ? 'bg-white' : 'bg-white/40'
 }`}
 />
 ))}
 </div>
 </div>
 </motion.div>
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
 <motion.input
 whileFocus={{ scale: 1.02 }}
 type="text"
 placeholder="First Name"
 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
 />
 <motion.input
 whileFocus={{ scale: 1.02 }}
 type="text"
 placeholder="Last Name"
 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
 />
 </div>
 
 <motion.input
 whileFocus={{ scale: 1.02 }}
 type="email"
 placeholder="Email Address"
 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
 />
 
 <motion.input
 whileFocus={{ scale: 1.02 }}
 type="tel"
 placeholder="Phone Number"
 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
 />
 
 <motion.select 
 whileFocus={{ scale: 1.02 }}
 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
 >
 <option value="">Select Your Primary Goal</option>
 <option value="health">Health Optimization</option>
 <option value="wealth">Wealth Building</option>
 <option value="fitness">Fitness Excellence</option>
 <option value="all">Complete Transformation</option>
 </motion.select>
 
 <motion.textarea
 whileFocus={{ scale: 1.02 }}
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
 value: "+1 (555) 123-ZIVE",
 color: "bg-green-100 text-green-600"
 },
 {
 icon: Mail,
 label: "Email Us",
 value: "hello@zive.com",
 color: "bg-blue-100 text-blue-600"
 },
 {
 icon: MapPin,
 label: "Visit Us",
 value: "123 Transformation Ave, Success City",
 color: "bg-purple-100 text-purple-600"
 }
 ].map((contact, index) => (
 <motion.div
 key={index}
 variants={fadeInUp}
 whileHover={{ x: 5 }}
 className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
 >
 <div className={`w-12 h-12 ${contact.color} rounded-lg flex items-center justify-center mr-4`}>
 <contact.icon className="w-6 h-6" />
 </div>
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
 <ul className="space-y-3">
 {[
 "Free initial consultation",
 "Personalized assessment", 
 "Custom transformation plan",
 "100% satisfaction guarantee"
 ].map((benefit, index) => (
 <motion.li 
 key={index}
 initial={{ opacity: 0, x: -20 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ delay: index * 0.1 }}
 className="flex items-center text-gray-700"
 >
 <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
 {benefit}
 </motion.li>
 ))}
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
 {[
 { icon: Coffee, color: "hover:bg-orange-600" },
 { icon: Activity, color: "hover:bg-red-600" },
 { icon: ThumbsUp, color: "hover:bg-blue-600" },
 { icon: MessageCircle, color: "hover:bg-green-600" }
 ].map((social, i) => (
 <motion.div 
 key={i}
 whileHover={{ scale: 1.1, y: -2 }}
 className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center ${social.color} transition-all duration-200 cursor-pointer`}
 >
 <social.icon className="w-5 h-5" />
 </motion.div>
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