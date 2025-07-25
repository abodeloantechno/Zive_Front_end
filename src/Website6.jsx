import React, { useState, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { ChevronDown, Heart, DollarSign, Dumbbell, Star, ArrowRight, Menu, X, Play, CheckCircle, TrendingUp, Shield, Users } from 'lucide-react';

const ZiveWebsite = () => {
 const [isMenuOpen, setIsMenuOpen] = useState(false);
 const [activeSection, setActiveSection] = useState('home');

 // Animation variants
 const containerVariants = {
 hidden: { opacity: 0 },
 visible: {
 opacity: 1,
 transition: {
 staggerChildren: 0.2,
 delayChildren: 0.1
 }
 }
 };

 const itemVariants = {
 hidden: { y: 50, opacity: 0 },
 visible: {
 y: 0,
 opacity: 1,
 transition: {
 duration: 0.8,
 ease: "easeOut"
 }
 }
 };

 const floatingVariants = {
 animate: {
 y: [-10, 10, -10],
 transition: {
 duration: 3,
 repeat: Infinity,
 ease: "easeInOut"
 }
 }
 };

 const slideInVariants = {
 hidden: { x: -100, opacity: 0 },
 visible: {
 x: 0,
 opacity: 1,
 transition: {
 duration: 0.8,
 ease: "easeOut"
 }
 }
 };

 // Intersection Observer for animations
 const AnimatedSection = ({ children, className = "" }) => {
 const ref = React.useRef(null);
 const isInView = useInView(ref, { once: true, threshold: 0.1 });

 return (
 <motion.div
 ref={ref}
 initial="hidden"
 animate={isInView ? "visible" : "hidden"}
 variants={containerVariants}
 className={className}
 >
 {children}
 </motion.div>
 );
 };

 const navigationItems = [
 { name: 'Home', href: '#home' },
 { name: 'About', href: '#about' },
 { name: 'Services', href: '#services' },
 { name: 'Programs', href: '#programs' },
 { name: 'Contact', href: '#contact' }
 ];

 return (
 <div className="min-h-screen bg-white overflow-x-hidden">
 {/* Navigation */}
 <motion.nav 
 initial={{ y: -100 }}
 animate={{ y: 0 }}
 transition={{ duration: 0.8 }}
 className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 shadow-sm"
 >
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="flex justify-between items-center h-16">
 {/* Logo */}
 <motion.div 
 whileHover={{ scale: 1.05 }}
 className="flex items-center"
 >
 <img 
 src="https://ik.imagekit.io/psltlu4ds/zive_logo_page-00001.jpg?updatedAt=1753357527846" 
 alt="ZIVE Logo" 
 className="h-10 w-auto"
 />
 <span className="ml-2 text-2xl font-bold text-black">ZIVE</span>
 </motion.div>

 {/* Desktop Navigation */}
 <div className="hidden md:flex space-x-8">
 {navigationItems.map((item, index) => (
 <motion.a
 key={item.name}
 href={item.href}
 initial={{ opacity: 0, y: -20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: index * 0.1 }}
 whileHover={{ y: -2 }}
 className="text-gray-700 hover:text-blue-500 font-medium transition-colors"
 >
 {item.name}
 </motion.a>
 ))}
 </div>

 {/* CTA Button */}
 <motion.button
 whileHover={{ scale: 1.05 }}
 whileTap={{ scale: 0.95 }}
 className="hidden md:block bg-gradient-to-r from-blue-500 to-pink-500 text-white px-6 py-2 rounded-full font-medium"
 >
 Get Started
 </motion.button>

 {/* Mobile menu button */}
 <button
 onClick={() => setIsMenuOpen(!isMenuOpen)}
 className="md:hidden p-2"
 >
 {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
 </button>
 </div>
 </div>

 {/* Mobile Navigation */}
 {isMenuOpen && (
 <motion.div
 initial={{ opacity: 0, height: 0 }}
 animate={{ opacity: 1, height: 'auto' }}
 exit={{ opacity: 0, height: 0 }}
 className="md:hidden bg-white border-t"
 >
 <div className="px-4 py-2 space-y-1">
 {navigationItems.map((item) => (
 <a
 key={item.name}
 href={item.href}
 className="block px-3 py-2 text-gray-700 hover:text-blue-500"
 onClick={() => setIsMenuOpen(false)}
 >
 {item.name}
 </a>
 ))}
 </div>
 </motion.div>
 )}
 </motion.nav>

 {/* Hero Section */}
 <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-pink-50 pt-16">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
 <motion.div
 initial="hidden"
 animate="visible"
 variants={containerVariants}
 className="text-center lg:text-left"
 >
 <motion.h1 
 variants={itemVariants}
 className="text-5xl md:text-7xl font-bold mb-6"
 >
 <span className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
 Transform
 </span>
 <br />
 <span className="text-black">Your Life</span>
 </motion.h1>
 
 <motion.p 
 variants={itemVariants}
 className="text-xl text-gray-600 mb-8 leading-relaxed"
 >
 Unlock your potential with ZIVE's comprehensive approach to 
 <span className="text-blue-500 font-semibold"> health</span>,
 <span className="text-yellow-500 font-semibold"> wealth</span>, and
 <span className="text-pink-500 font-semibold"> fitness</span>.
 </motion.p>

 <motion.div 
 variants={itemVariants}
 className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
 >
 <motion.button
 whileHover={{ scale: 1.05, y: -2 }}
 whileTap={{ scale: 0.95 }}
 className="bg-gradient-to-r from-blue-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow"
 >
 Start Your Journey
 <ArrowRight className="inline ml-2 w-5 h-5" />
 </motion.button>
 
 <motion.button
 whileHover={{ scale: 1.05, y: -2 }}
 whileTap={{ scale: 0.95 }}
 className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-blue-500 hover:text-blue-500 transition-colors"
 >
 <Play className="inline mr-2 w-5 h-5" />
 Watch Demo
 </motion.button>
 </motion.div>
 </motion.div>

 <motion.div
 initial={{ scale: 0.8, opacity: 0 }}
 animate={{ scale: 1, opacity: 1 }}
 transition={{ duration: 1, delay: 0.5 }}
 className="relative"
 >
 <motion.div
 variants={floatingVariants}
 animate="animate"
 className="relative z-10"
 >
 <div className="bg-gradient-to-br from-blue-500 to-pink-500 rounded-3xl p-8 shadow-2xl">
 <div className="grid grid-cols-3 gap-4 text-white">
 <div className="text-center">
 <Heart className="w-12 h-12 mx-auto mb-2 text-pink-200" />
 <div className="text-2xl font-bold">98%</div>
 <div className="text-sm opacity-90">Health Score</div>
 </div>
 <div className="text-center">
 <DollarSign className="w-12 h-12 mx-auto mb-2 text-yellow-200" />
 <div className="text-2xl font-bold">$50K</div>
 <div className="text-sm opacity-90">Avg Growth</div>
 </div>
 <div className="text-center">
 <Dumbbell className="w-12 h-12 mx-auto mb-2 text-blue-200" />
 <div className="text-2xl font-bold">100%</div>
 <div className="text-sm opacity-90">Fitness Goals</div>
 </div>
 </div>
 </div>
 </motion.div>
 
 {/* Floating elements */}
 <motion.div
 animate={{
 y: [0, -20, 0],
 x: [0, 10, 0],
 rotate: [0, 5, 0]
 }}
 transition={{
 duration: 4,
 repeat: Infinity,
 ease: "easeInOut"
 }}
 className="absolute -top-4 -left-4 w-20 h-20 bg-yellow-400 rounded-full opacity-80"
 />
 
 <motion.div
 animate={{
 y: [0, 15, 0],
 x: [0, -15, 0],
 rotate: [0, -5, 0]
 }}
 transition={{
 duration: 3,
 repeat: Infinity,
 ease: "easeInOut",
 delay: 1
 }}
 className="absolute -bottom-4 -right-4 w-16 h-16 bg-pink-400 rounded-full opacity-80"
 />
 </motion.div>
 </div>

 {/* Scroll indicator */}
 <motion.div
 animate={{ y: [0, 10, 0] }}
 transition={{ duration: 2, repeat: Infinity }}
 className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
 >
 <ChevronDown className="w-8 h-8 text-gray-400" />
 </motion.div>
 </section>

 {/* Services Section */}
 <AnimatedSection id="services" className="py-20 bg-gray-50">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <motion.div variants={itemVariants} className="text-center mb-16">
 <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
 Our <span className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">Core Services</span>
 </h2>
 <p className="text-xl text-gray-600 max-w-3xl mx-auto">
 Comprehensive solutions designed to elevate every aspect of your life
 </p>
 </motion.div>

 <div className="grid md:grid-cols-3 gap-8">
 {[
 {
 icon: Heart,
 title: "Health Optimization",
 description: "Personalized wellness programs, nutrition guidance, and medical consultations",
 color: "from-pink-500 to-red-500",
 bgColor: "bg-pink-50"
 },
 {
 icon: DollarSign,
 title: "Wealth Building",
 description: "Investment strategies, financial planning, and passive income generation",
 color: "from-yellow-400 to-orange-500",
 bgColor: "bg-yellow-50"
 },
 {
 icon: Dumbbell,
 title: "Fitness Excellence",
 description: "Custom workout plans, personal training, and performance tracking",
 color: "from-blue-500 to-cyan-500",
 bgColor: "bg-blue-50"
 }
 ].map((service, index) => (
 <motion.div
 key={index}
 variants={itemVariants}
 whileHover={{ y: -10, scale: 1.02 }}
 className={`${service.bgColor} p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300`}
 >
 <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6`}>
 <service.icon className="w-8 h-8 text-white" />
 </div>
 <h3 className="text-2xl font-bold text-black mb-4">{service.title}</h3>
 <p className="text-gray-600 mb-6">{service.description}</p>
 <motion.button
 whileHover={{ scale: 1.05 }}
 className="text-black font-semibold flex items-center group"
 >
 Learn More
 <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
 </motion.button>
 </motion.div>
 ))}
 </div>
 </div>
 </AnimatedSection>

 {/* Features Section */}
 <AnimatedSection className="py-20 bg-white">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="grid lg:grid-cols-2 gap-16 items-center">
 <motion.div variants={slideInVariants}>
 <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
 Why Choose <span className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">ZIVE?</span>
 </h2>
 <p className="text-xl text-gray-600 mb-8">
 We combine cutting-edge technology with proven methodologies to deliver results that transform lives.
 </p>
 
 <div className="space-y-6">
 {[
 { icon: CheckCircle, text: "Personalized AI-driven recommendations", color: "text-blue-500" },
 { icon: TrendingUp, text: "Proven track record of success", color: "text-green-500" },
 { icon: Shield, text: "Secure and private data handling", color: "text-purple-500" },
 { icon: Users, text: "24/7 community support", color: "text-pink-500" }
 ].map((feature, index) => (
 <motion.div
 key={index}
 variants={itemVariants}
 className="flex items-center space-x-4"
 >
 <feature.icon className={`w-6 h-6 ${feature.color}`} />
 <span className="text-lg text-gray-700">{feature.text}</span>
 </motion.div>
 ))}
 </div>
 </motion.div>

 <motion.div
 initial={{ x: 100, opacity: 0 }}
 whileInView={{ x: 0, opacity: 1 }}
 transition={{ duration: 0.8 }}
 className="relative"
 >
 <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-3xl p-1">
 <div className="bg-white rounded-3xl p-8">
 <div className="grid grid-cols-2 gap-6">
 <div className="text-center">
 <div className="text-3xl font-bold text-blue-500 mb-2">10K+</div>
 <div className="text-gray-600">Active Users</div>
 </div>
 <div className="text-center">
 <div className="text-3xl font-bold text-yellow-500 mb-2">95%</div>
 <div className="text-gray-600">Success Rate</div>
 </div>
 <div className="text-center">
 <div className="text-3xl font-bold text-pink-500 mb-2">24/7</div>
 <div className="text-gray-600">Support</div>
 </div>
 <div className="text-center">
 <div className="text-3xl font-bold text-green-500 mb-2">100+</div>
 <div className="text-gray-600">Expert Coaches</div>
 </div>
 </div>
 </div>
 </div>
 </motion.div>
 </div>
 </div>
 </AnimatedSection>

 {/* Interactive Programs Section */}
 <AnimatedSection className="py-20 bg-white">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <motion.div variants={itemVariants} className="text-center mb-16">
 <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
 Explore Our <span className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">Programs</span>
 </h2>
 <p className="text-xl text-gray-600 max-w-3xl mx-auto">
 Interactive programs designed to fit your lifestyle and goals
 </p>
 </motion.div>

 <div className="grid md:grid-cols-3 gap-8">
 {[
 {
 title: "30-Day Health Reset",
 description: "Complete wellness transformation program",
 image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&h=300&fit=crop",
 duration: "30 Days",
 level: "Beginner",
 color: "from-pink-500 to-red-500"
 },
 {
 title: "Wealth Accelerator",
 description: "Build multiple income streams",
 image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=500&h=300&fit=crop",
 duration: "12 Weeks",
 level: "Intermediate",
 color: "from-yellow-400 to-orange-500"
 },
 {
 title: "Elite Fitness Challenge",
 description: "Push your limits and achieve peak performance",
 image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
 duration: "8 Weeks",
 level: "Advanced",
 color: "from-blue-500 to-cyan-500"
 }
 ].map((program, index) => (
 <motion.div
 key={index}
 variants={itemVariants}
 whileHover={{ y: -10, scale: 1.03 }}
 className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
 >
 <div className="relative overflow-hidden">
 <motion.img
 whileHover={{ scale: 1.1 }}
 transition={{ duration: 0.3 }}
 src={program.image}
 alt={program.title}
 className="w-full h-48 object-cover"
 />
 <div className={`absolute inset-0 bg-gradient-to-t ${program.color} opacity-20 group-hover:opacity-40 transition-opacity`} />
 <motion.div 
 initial={{ opacity: 0, y: 20 }}
 whileHover={{ opacity: 1, y: 0 }}
 className="absolute bottom-4 left-4 right-4"
 >
 <div className="flex justify-between items-center text-white">
 <span className="bg-black/50 px-3 py-1 rounded-full text-sm">{program.duration}</span>
 <span className="bg-black/50 px-3 py-1 rounded-full text-sm">{program.level}</span>
 </div>
 </motion.div>
 </div>
 <div className="p-6">
 <h3 className="text-xl font-bold text-black mb-3">{program.title}</h3>
 <p className="text-gray-600 mb-4">{program.description}</p>
 <motion.button
 whileHover={{ scale: 1.05 }}
 whileTap={{ scale: 0.95 }}
 className={`w-full bg-gradient-to-r ${program.color} text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow`}
 >
 Join Program
 </motion.button>
 </div>
 </motion.div>
 ))}
 </div>
 </div>
 </AnimatedSection>

 {/* Interactive Testimonials */}
 <AnimatedSection className="py-20 bg-gray-50">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <motion.div variants={itemVariants} className="text-center mb-16">
 <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
 Success <span className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">Stories</span>
 </h2>
 <p className="text-xl text-gray-600">Real transformations from real people</p>
 </motion.div>

 <div className="grid md:grid-cols-3 gap-8">
 {[
 {
 name: "Sarah Johnson",
 role: "Entrepreneur",
 image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
 quote: "ZIVE transformed not just my health, but my entire approach to life. I've never felt more confident and energized.",
 achievement: "Lost 30lbs, Started 2 businesses",
 rating: 5
 },
 {
 name: "Michael Chen",
 role: "Tech Executive",
 image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
 quote: "The wealth building strategies are game-changing. I've tripled my passive income in just 6 months.",
 achievement: "300% Income Increase",
 rating: 5
 },
 {
 name: "Emma Rodriguez",
 role: "Fitness Coach",
 image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
 quote: "As a fitness professional myself, I was amazed by ZIVE's holistic approach. It's revolutionary.",
 achievement: "Ran First Marathon",
 rating: 5
 }
 ].map((testimonial, index) => (
 <motion.div
 key={index}
 variants={itemVariants}
 whileHover={{ y: -5, rotateY: 5 }}
 className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
 >
 <div className="flex items-center mb-6">
 <motion.img
 whileHover={{ scale: 1.1 }}
 src={testimonial.image}
 alt={testimonial.name}
 className="w-16 h-16 rounded-full object-cover mr-4"
 />
 <div>
 <h4 className="font-bold text-black">{testimonial.name}</h4>
 <p className="text-gray-600 text-sm">{testimonial.role}</p>
 </div>
 </div>
 
 <div className="flex mb-4">
 {[...Array(testimonial.rating)].map((_, i) => (
 <motion.div
 key={i}
 initial={{ opacity: 0, scale: 0 }}
 animate={{ opacity: 1, scale: 1 }}
 transition={{ delay: i * 0.1 }}
 >
 <Star className="w-5 h-5 text-yellow-400 fill-current" />
 </motion.div>
 ))}
 </div>
 
 <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
 <div className="bg-gradient-to-r from-blue-50 to-pink-50 p-3 rounded-lg">
 <p className="text-sm font-semibold text-gray-800">{testimonial.achievement}</p>
 </div>
 </motion.div>
 ))}
 </div>
 </div>
 </AnimatedSection>

 {/* Interactive Team Section */}
 <AnimatedSection className="py-20 bg-white">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <motion.div variants={itemVariants} className="text-center mb-16">
 <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
 Meet Our <span className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">Expert Team</span>
 </h2>
 <p className="text-xl text-gray-600">World-class professionals dedicated to your success</p>
 </motion.div>

 <div className="grid md:grid-cols-4 gap-8">
 {[
 {
 name: "Dr. Alex Morgan",
 role: "Chief Health Officer",
 image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face",
 expertise: "Preventive Medicine",
 social: "@alexmorgan"
 },
 {
 name: "Jessica Liu",
 role: "Wealth Strategist",
 image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
 expertise: "Investment Planning",
 social: "@jessicaliu"
 },
 {
 name: "Marcus Thompson",
 role: "Elite Trainer",
 image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=300&h=300&fit=crop&crop=face",
 expertise: "Performance Coaching",
 social: "@marcusfit"
 },
 {
 name: "Dr. Priya Patel",
 role: "Wellness Director",
 image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
 expertise: "Holistic Health",
 social: "@drpriya"
 }
 ].map((member, index) => (
 <motion.div
 key={index}
 variants={itemVariants}
 whileHover={{ y: -10 }}
 className="group cursor-pointer"
 >
 <div className="relative overflow-hidden rounded-2xl mb-4">
 <motion.img
 whileHover={{ scale: 1.1 }}
 transition={{ duration: 0.3 }}
 src={member.image}
 alt={member.name}
 className="w-full h-64 object-cover"
 />
 <motion.div
 initial={{ opacity: 0 }}
 whileHover={{ opacity: 1 }}
 className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6"
 >
 <div className="text-white">
 <p className="font-semibold">{member.expertise}</p>
 <p className="text-sm opacity-90">{member.social}</p>
 </div>
 </motion.div>
 </div>
 <motion.div
 initial={{ opacity: 0.7 }}
 whileHover={{ opacity: 1 }}
 className="text-center"
 >
 <h4 className="text-xl font-bold text-black mb-1">{member.name}</h4>
 <p className="text-gray-600">{member.role}</p>
 </motion.div>
 </motion.div>
 ))}
 </div>
 </div>
 </AnimatedSection>

 {/* Interactive Stats Counter */}
 <AnimatedSection className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <motion.div variants={itemVariants} className="text-center mb-16">
 <h2 className="text-4xl md:text-5xl font-bold mb-4">
 Our <span className="bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">Impact</span>
 </h2>
 <p className="text-xl text-gray-300">Numbers that speak for themselves</p>
 </motion.div>

 <div className="grid md:grid-cols-4 gap-8">
 {[
 { number: "25,000+", label: "Lives Transformed", icon: Heart, color: "text-pink-400" },
 { number: "$2.5M+", label: "Wealth Generated", icon: DollarSign, color: "text-yellow-400" },
 { number: "500,000+", label: "Workouts Completed", icon: Dumbbell, color: "text-blue-400" },
 { number: "98%", label: "Success Rate", icon: TrendingUp, color: "text-green-400" }
 ].map((stat, index) => (
 <motion.div
 key={index}
 variants={itemVariants}
 whileHover={{ scale: 1.05, y: -5 }}
 className="text-center group"
 >
 <motion.div
 animate={{ rotate: [0, 5, -5, 0] }}
 transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
 className={`w-20 h-20 mx-auto mb-4 ${stat.color} flex items-center justify-center rounded-full bg-white/10`}
 >
 <stat.icon className="w-10 h-10" />
 </motion.div>
 <motion.div
 initial={{ scale: 0 }}
 whileInView={{ scale: 1 }}
 transition={{ duration: 0.5, delay: index * 0.2 }}
 className="text-4xl md:text-5xl font-bold mb-2"
 >
 {stat.number}
 </motion.div>
 <p className="text-gray-300 text-lg">{stat.label}</p>
 </motion.div>
 ))}
 </div>
 </div>
 </AnimatedSection>

 {/* Interactive Pricing Section */}
 <AnimatedSection className="py-20 bg-gray-50">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <motion.div variants={itemVariants} className="text-center mb-16">
 <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
 Choose Your <span className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">Journey</span>
 </h2>
 <p className="text-xl text-gray-600">Flexible plans designed for every lifestyle</p>
 </motion.div>

 <div className="grid md:grid-cols-3 gap-8">
 {[
 {
 name: "Starter",
 price: "$49",
 period: "/month",
 description: "Perfect for beginners starting their transformation",
 features: ["Basic Health Assessment", "Weekly Fitness Plans", "Community Access", "Mobile App"],
 color: "border-gray-200",
 buttonColor: "bg-gray-800 text-white",
 popular: false
 },
 {
 name: "Pro",
 price: "$99",
 period: "/month",
 description: "Most popular choice for serious transformers",
 features: ["Everything in Starter", "Personal Coach", "Wealth Building Course", "Priority Support", "Advanced Analytics"],
 color: "border-blue-500 ring-2 ring-blue-500",
 buttonColor: "bg-gradient-to-r from-blue-500 to-pink-500 text-white",
 popular: true
 },
 {
 name: "Elite",
 price: "$199",
 period: "/month",
 description: "For those who demand the absolute best",
 features: ["Everything in Pro", "1-on-1 Mentoring", "Custom Meal Plans", "Investment Consultation", "VIP Events"],
 color: "border-yellow-500",
 buttonColor: "bg-gradient-to-r from-yellow-400 to-orange-500 text-white",
 popular: false
 }
 ].map((plan, index) => (
 <motion.div
 key={index}
 variants={itemVariants}
 whileHover={{ y: -10, scale: 1.02 }}
 className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${plan.color} relative`}
 >
 {plan.popular && (
 <motion.div
 initial={{ scale: 0 }}
 animate={{ scale: 1 }}
 className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold"
 >
 Most Popular
 </motion.div>
 )}
 
 <div className="text-center mb-8">
 <h3 className="text-2xl font-bold text-black mb-2">{plan.name}</h3>
 <div className="flex items-baseline justify-center mb-4">
 <span className="text-5xl font-bold text-black">{plan.price}</span>
 <span className="text-gray-600 ml-1">{plan.period}</span>
 </div>
 <p className="text-gray-600">{plan.description}</p>
 </div>

 <ul className="space-y-4 mb-8">
 {plan.features.map((feature, idx) => (
 <motion.li
 key={idx}
 initial={{ opacity: 0, x: -20 }}
 whileInView={{ opacity: 1, x: 0 }}
 transition={{ delay: idx * 0.1 }}
 className="flex items-center"
 >
 <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
 <span className="text-gray-700">{feature}</span>
 </motion.li>
 ))}
 </ul>

 <motion.button
 whileHover={{ scale: 1.05 }}
 whileTap={{ scale: 0.95 }}
 className={`w-full py-4 rounded-lg font-semibold text-lg ${plan.buttonColor} shadow-lg hover:shadow-xl transition-shadow`}
 >
 Get Started
 </motion.button>
 </motion.div>
 ))}
 </div>
 </div>
 </AnimatedSection>

 {/* CTA Section */}
 <AnimatedSection className="py-20 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
 <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
 <motion.h2 
 variants={itemVariants}
 className="text-4xl md:text-5xl font-bold text-white mb-6"
 >
 Ready to Transform Your Life?
 </motion.h2>
 <motion.p 
 variants={itemVariants}
 className="text-xl text-white/90 mb-8"
 >
 Join thousands of people who have already started their journey to better health, wealth, and fitness.
 </motion.p>
 <motion.div 
 variants={itemVariants}
 className="flex flex-col sm:flex-row gap-4 justify-center"
 >
 <motion.button
 whileHover={{ scale: 1.05, y: -2 }}
 whileTap={{ scale: 0.95 }}
 className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow"
 >
 Start Free Trial
 </motion.button>
 <motion.button
 whileHover={{ scale: 1.05, y: -2 }}
 whileTap={{ scale: 0.95 }}
 className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-colors"
 >
 Schedule Consultation
 </motion.button>
 </motion.div>
 </div>
 </AnimatedSection>

 {/* Footer */}
 <footer className="bg-black text-white py-12">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="grid md:grid-cols-4 gap-8">
 <div>
 <div className="flex items-center mb-4">
 <img 
 src="https://ik.imagekit.io/psltlu4ds/zive_logo_page-00001.jpg?updatedAt=1753357527846" 
 alt="ZIVE Logo" 
 className="h-8 w-auto invert"
 />
 <span className="ml-2 text-2xl font-bold">ZIVE</span>
 </div>
 <p className="text-gray-400">
 Transforming lives through health, wealth, and fitness excellence.
 </p>
 </div>
 
 <div>
 <h3 className="text-lg font-semibold mb-4">Services</h3>
 <ul className="space-y-2 text-gray-400">
 <li>Health Optimization</li>
 <li>Wealth Building</li>
 <li>Fitness Training</li>
 <li>Life Coaching</li>
 </ul>
 </div>
 
 <div>
 <h3 className="text-lg font-semibold mb-4">Company</h3>
 <ul className="space-y-2 text-gray-400">
 <li>About Us</li>
 <li>Our Team</li>
 <li>Careers</li>
 <li>Contact</li>
 </ul>
 </div>
 
 <div>
 <h3 className="text-lg font-semibold mb-4">Connect</h3>
 <div className="flex space-x-4">
 {[1, 2, 3, 4].map((i) => (
 <div key={i} className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
 <Star className="w-5 h-5" />
 </div>
 ))}
 </div>
 </div>
 </div>
 
 <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
 <p>&copy; 2025 ZIVE. All rights reserved.</p>
 </div>
 </div>
 </footer>
 </div>
 );
};

export default ZiveWebsite;