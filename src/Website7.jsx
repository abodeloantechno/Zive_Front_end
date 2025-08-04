import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ChevronDown, Heart, DollarSign, Dumbbell, Star, ArrowRight, Menu, X, Play, CheckCircle, TrendingUp, Shield, Users, Zap, Target, Award, Clock, Sparkles, Eye, Brain, Rocket } from 'lucide-react';

const ZiveWebsite = () => {
 const [isMenuOpen, setIsMenuOpen] = useState(false);
 const [activeSection, setActiveSection] = useState(0);
 const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
 const { scrollYProgress } = useScroll();

 // Mouse tracking for interactive effects
 useEffect(() => {
 const handleMouseMove = (e) => {
 setMousePosition({ x: e.clientX, y: e.clientY });
 };
 window.addEventListener('mousemove', handleMouseMove);
 return () => window.removeEventListener('mousemove', handleMouseMove);
 }, []);

 // Parallax transforms
 const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
 const textY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

 // Advanced animation variants
 const containerVariants = {
 hidden: { opacity: 0 },
 visible: {
 opacity: 1,
 transition: {
 staggerChildren: 0.1,
 delayChildren: 0.2
 }
 }
 };

 const morphVariants = {
 initial: { 
 borderRadius: "20% 80% 60% 40%",
 rotate: 0 
 },
 animate: { 
 borderRadius: ["20% 80% 60% 40%", "80% 20% 40% 60%", "40% 60% 80% 20%", "20% 80% 60% 40%"],
 rotate: [0, 90, 180, 270, 360],
 transition: {
 duration: 8,
 repeat: Infinity,
 ease: "easeInOut"
 }
 }
 };

 const particleVariants = {
 animate: {
 y: [-20, -100, -20],
 x: [-10, 10, -10],
 opacity: [0, 1, 0],
 scale: [0.5, 1, 0.5],
 transition: {
 duration: 3,
 repeat: Infinity,
 ease: "easeInOut"
 }
 }
 };

 // Interactive card hover effect
 const cardHover = {
 rest: { scale: 1, rotateY: 0, z: 0 },
 hover: { 
 scale: 1.05, 
 rotateY: 5, 
 z: 50,
 transition: {
 type: "spring",
 stiffness: 300,
 damping: 20
 }
 }
 };

 const navigationItems = [
 { name: 'Home', href: '#home' },
 { name: 'Transform', href: '#transform' },
 { name: 'Journey', href: '#journey' },
 { name: 'Excellence', href: '#excellence' },
 { name: 'Connect', href: '#connect' }
 ];

 return (
 <div className="min-h-screen bg-black text-white overflow-x-hidden">
 {/* Floating Navigation */}
 <motion.nav 
 initial={{ y: -100, opacity: 0 }}
 animate={{ y: 0, opacity: 1 }}
 transition={{ duration: 1, ease: "easeOut" }}
 className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-xl z-50 rounded-full px-6 py-3 border border-white/20"
 >
 <div className="flex items-center space-x-8">
 <motion.div 
 whileHover={{ scale: 1.1, rotate: 5 }}
 className="flex items-center"
 >
 <img 
 src="https://ik.imagekit.io/psltlu4ds/zive_logo_page-00001.jpg?updatedAt=1753357527846" 
 alt="ZIVE Logo" 
 className="h-8 w-auto brightness-0 invert"
 />
 <span className="ml-2 text-xl font-bold bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">ZYVE</span>
 </motion.div>

 <div className="hidden md:flex space-x-6">
 {navigationItems.map((item, index) => (
 <motion.a
 key={item.name}
 href={item.href}
 initial={{ opacity: 0, y: -20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: index * 0.1 }}
 whileHover={{ y: -2, color: "#60A5FA" }}
 className="text-white/80 hover:text-blue-400 font-medium transition-colors relative"
 >
 {item.name}
 <motion.div
 className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-pink-400"
 initial={{ scaleX: 0 }}
 whileHover={{ scaleX: 1 }}
 transition={{ duration: 0.3 }}
 />
 </motion.a>
 ))}
 </div>

 <motion.button
 whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(96, 165, 250, 0.5)" }}
 whileTap={{ scale: 0.95 }}
 className="bg-gradient-to-r from-blue-500 to-pink-500 text-white px-6 py-2 rounded-full font-medium hidden md:block"
 >
 <Sparkles className="inline w-4 h-4 mr-2" />
 Transform Now
 </motion.button>
 </div>
 </motion.nav>

 {/* Revolutionary Hero Section */}
 <section id="home" className="relative mt-20 min-h-screen flex items-center justify-center overflow-hidden">
 {/* Animated Background */}
 <div className="absolute inset-0">
 <motion.div
 animate={{
 background: [
 "radial-gradient(circle at 20% 50%, #3B82F6 0%, transparent 50%)",
 "radial-gradient(circle at 80% 20%, #EC4899 0%, transparent 50%)",
 "radial-gradient(circle at 40% 80%, #EAB308 0%, transparent 50%)",
 "radial-gradient(circle at 20% 50%, #3B82F6 0%, transparent 50%)"
 ]
 }}
 transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
 className="absolute inset-0 opacity-20"
 />
 
 {/* Floating Particles */}
 {[...Array(20)].map((_, i) => (
 <motion.div
 key={i}
 variants={particleVariants}
 animate="animate"
 style={{
 position: 'absolute',
 left: `${Math.random() * 100}%`,
 top: `${Math.random() * 100}%`,
 width: `${Math.random() * 4 + 2}px`,
 height: `${Math.random() * 4 + 2}px`,
 }}
 className="bg-gradient-to-r from-blue-400 to-pink-400 rounded-full"
 />
 ))}
 </div>

 <motion.div style={{ y: heroY }} className="max-w-7xl mx-auto px-4 text-center relative z-10">
 <motion.div
 initial={{ scale: 0, rotate: -180 }}
 animate={{ scale: 1, rotate: 0 }}
 transition={{ duration: 1.5, type: "spring", bounce: 0.3 }}
 className="mb-8"
 >
 <motion.div
 variants={morphVariants}
 initial="initial"
 animate="animate"
 className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 mb-8"
 />
 </motion.div>

 <motion.h1 
 initial={{ opacity: 0, y: 100 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 1, delay: 0.5 }}
 className="text-6xl md:text-8xl font-black mb-6 leading-tight"
 >
 <motion.span 
 animate={{ 
 backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
 }}
 transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
 className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-300% bg-clip-text text-transparent"
 style={{ backgroundSize: "300% 300%" }}
 >
 REVOLUTIONIZE
 </motion.span>
 <br />
 <motion.span 
 initial={{ opacity: 0, rotateX: 90 }}
 animate={{ opacity: 1, rotateX: 0 }}
 transition={{ duration: 1, delay: 1 }}
 className="text-white"
 >
 YOUR REALITY
 </motion.span>
 </motion.h1>

 <motion.p 
 initial={{ opacity: 0, y: 50 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 1, delay: 1.2 }}
 className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto"
 >
 Step into the future of personal transformation where 
 <motion.span 
 whileHover={{ scale: 1.1, color: "#60A5FA" }}
 className="text-blue-400 font-semibold cursor-pointer"
 > health</motion.span>,
 <motion.span 
 whileHover={{ scale: 1.1, color: "#FBBF24" }}
 className="text-yellow-400 font-semibold cursor-pointer"
 > wealth</motion.span>, and
 <motion.span 
 whileHover={{ scale: 1.1, color: "#EC4899" }}
 className="text-pink-400 font-semibold cursor-pointer"
 > fitness</motion.span> converge into pure excellence.
 </motion.p>

 <motion.div 
 initial={{ opacity: 0, scale: 0.5 }}
 animate={{ opacity: 1, scale: 1 }}
 transition={{ duration: 1, delay: 1.5 }}
 className="flex flex-col sm:flex-row gap-6 justify-center items-center"
 >
 <motion.button
 whileHover={{ 
 scale: 1.05, 
 boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
 y: -5
 }}
 whileTap={{ scale: 0.95 }}
 className="group relative bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 py-5 rounded-full font-bold text-lg overflow-hidden"
 >
 <motion.div
 className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500"
 initial={{ x: "-100%" }}
 whileHover={{ x: "0%" }}
 transition={{ duration: 0.3 }}
 />
 <span className="relative z-10 flex items-center">
 <Rocket className="mr-3 w-5 h-5" />
 Launch Transformation
 <motion.div
 animate={{ x: [0, 5, 0] }}
 transition={{ duration: 1, repeat: Infinity }}
 >
 <ArrowRight className="ml-2 w-5 h-5" />
 </motion.div>
 </span>
 </motion.button>

 <motion.button
 whileHover={{ 
 scale: 1.05,
 backgroundColor: "rgba(255, 255, 255, 0.1)",
 y: -5
 }}
 whileTap={{ scale: 0.95 }}
 className="group border-2 border-white/30 text-white px-10 py-5 rounded-full font-bold text-lg backdrop-blur-sm hover:backdrop-blur-md transition-all"
 >
 <Play className="inline mr-3 w-5 h-5" />
 Experience Demo
 <motion.div
 className="absolute inset-0 rounded-full"
 animate={{
 boxShadow: [
 "0 0 0 0 rgba(255, 255, 255, 0.4)",
 "0 0 0 20px rgba(255, 255, 255, 0)",
 ],
 }}
 transition={{ duration: 2, repeat: Infinity }}
 />
 </motion.button>
 </motion.div>
 </motion.div>

 {/* Scroll Indicator */}
 <motion.div
 animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
 transition={{ duration: 2, repeat: Infinity }}
 className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
 >
 <ChevronDown className="w-8 h-8 text-white/60" />
 </motion.div>
 </section>

 {/* Interactive Transformation Hub */}
 <section id="transform" className="py-32 relative overflow-hidden">
 <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black" />
 
 <div className="max-w-7xl mx-auto px-4 relative z-10">
 <motion.div
 initial={{ opacity: 0, y: 100 }}
 whileInView={{ opacity: 1, y: 0 }}
 transition={{ duration: 1 }}
 className="text-center mb-20"
 >
 <motion.h2 
 className="text-5xl md:text-7xl font-black mb-8"
 animate={{
 textShadow: [
 "0 0 20px #3B82F6",
 "0 0 40px #EC4899",
 "0 0 20px #3B82F6"
 ]
 }}
 transition={{ duration: 3, repeat: Infinity }}
 >
 <span className="bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">
 TRANSFORMATION
 </span>
 <br />
 <span className="text-white">HUB</span>
 </motion.h2>
 </motion.div>

 {/* Interactive Floating Cards */}
 <div className="grid md:grid-cols-3 gap-8">
 {[
 {
 title: "Health Revolution",
 subtitle: "Cellular Optimization",
 icon: Heart,
 image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
 gradient: "from-pink-500 to-red-500",
 stats: "99.2% Success Rate",
 description: "AI-powered health protocols that regenerate your body at the cellular level"
 },
 {
 title: "Wealth Accelerator",
 subtitle: "Financial Freedom",
 icon: DollarSign,
 image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop",
 gradient: "from-yellow-400 to-orange-500",
 stats: "347% ROI Average",
 description: "Quantum wealth strategies that multiply your income streams exponentially"
 },
 {
 title: "Fitness Evolution",
 subtitle: "Peak Performance",
 icon: Dumbbell,
 image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop",
 gradient: "from-blue-500 to-cyan-500",
 stats: "300% Strength Gain",
 description: "Biomechanical excellence through advanced movement science"
 }
 ].map((card, index) => (
 <motion.div
 key={index}
 initial={{ opacity: 0, y: 100, rotateY: -30 }}
 whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
 transition={{ duration: 1, delay: index * 0.2 }}
 variants={cardHover}
 initial="rest"
 whileHover="hover"
 className="group relative perspective-1000"
 >
 <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 h-[500px]">
 {/* Background Image with Parallax */}
 <div className="absolute inset-0 overflow-hidden">
 <motion.img
 src={card.image}
 alt={card.title}
 className="w-full h-full object-cover"
 whileHover={{ scale: 1.1 }}
 transition={{ duration: 0.6 }}
 />
 <div className={`absolute inset-0 bg-gradient-to-t ${card.gradient} opacity-60`} />
 </div>

 {/* Content */}
 <div className="relative z-10 p-8 h-full flex flex-col justify-between">
 <div>
 <motion.div
 animate={{ rotate: [0, 360] }}
 transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
 className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm"
 >
 <card.icon className="w-8 h-8 text-white" />
 </motion.div>

 <motion.h3 
 className="text-3xl font-black text-white mb-2"
 whileHover={{ scale: 1.05 }}
 >
 {card.title}
 </motion.h3>
 
 <motion.p 
 className="text-white/80 text-lg mb-4"
 whileHover={{ color: "#ffffff" }}
 >
 {card.subtitle}
 </motion.p>

 <motion.div
 initial={{ width: 0 }}
 whileInView={{ width: "100%" }}
 transition={{ duration: 1, delay: index * 0.3 }}
 className="h-1 bg-gradient-to-r from-white/50 to-white rounded-full mb-6"
 />
 </div>

 <div>
 <motion.div
 whileHover={{ scale: 1.05, y: -5 }}
 className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 mb-4"
 >
 <div className="text-2xl font-bold text-white">{card.stats}</div>
 <div className="text-white/70 text-sm">{card.description}</div>
 </motion.div>

 <motion.button
 whileHover={{ 
 scale: 1.05,
 boxShadow: "0 10px 30px rgba(255, 255, 255, 0.2)" 
 }}
 whileTap={{ scale: 0.95 }}
 className="w-full bg-white text-black py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-colors"
 >
 Start Journey
 <ArrowRight className="inline ml-2 w-5 h-5" />
 </motion.button>
 </div>
 </div>

 {/* Hover Glow Effect */}
 <motion.div
 className="absolute inset-0 rounded-3xl"
 initial={{ opacity: 0 }}
 whileHover={{ opacity: 1 }}
 style={{
 background: `linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent)`,
 filter: "blur(20px)",
 }}
 />
 </div>
 </motion.div>
 ))}
 </div>
 </div>
 </section>

 {/* Revolutionary Journey Timeline */}
 <section id="journey" className="py-32 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
 <div className="max-w-7xl mx-auto px-4">
 <motion.div
 initial={{ opacity: 0, scale: 0.5 }}
 whileInView={{ opacity: 1, scale: 1 }}
 transition={{ duration: 1 }}
 className="text-center mb-20"
 >
 <h2 className="text-5xl md:text-7xl font-black mb-8">
 <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
 YOUR JOURNEY
 </span>
 <br />
 <span className="text-white">TO GREATNESS</span>
 </h2>
 </motion.div>

 {/* Interactive Timeline */}
 <div className="relative">
 {/* Central Timeline Line */}
 <motion.div
 initial={{ scaleY: 0 }}
 whileInView={{ scaleY: 1 }}
 transition={{ duration: 2 }}
 className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 origin-top"
 />

 {/* Timeline Steps */}
 {[
 {
 phase: "PHASE 01",
 title: "Assessment & Analysis",
 description: "AI-powered deep dive into your current state across all dimensions",
 icon: Brain,
 image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=300&h=200&fit=crop",
 side: "left",
 color: "from-blue-500 to-cyan-500"
 },
 {
 phase: "PHASE 02", 
 title: "Custom Protocol Design",
 description: "Personalized roadmap engineered for your unique transformation",
 icon: Target,
 image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&h=200&fit=crop",
 side: "right",
 color: "from-purple-500 to-pink-500"
 },
 {
 phase: "PHASE 03",
 title: "Implementation & Optimization",
 description: "Real-time execution with continuous refinement and adaptation",
 icon: Zap,
 image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop",
 side: "left",
 color: "from-yellow-400 to-orange-500"
 },
 {
 phase: "PHASE 04",
 title: "Mastery & Beyond",
 description: "Sustained excellence and breakthrough to your next level",
 icon: Award,
 image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=300&h=200&fit=crop",
 side: "right",
 color: "from-green-400 to-teal-500"
 }
 ].map((step, index) => (
 <motion.div
 key={index}
 initial={{ opacity: 0, x: step.side === 'left' ? -100 : 100 }}
 whileInView={{ opacity: 1, x: 0 }}
 transition={{ duration: 1, delay: index * 0.3 }}
 className={`relative flex items-center mb-32 ${step.side === 'right' ? 'flex-row-reverse' : ''}`}
 >
 {/* Content Card */}
 <motion.div
 whileHover={{ scale: 1.05, y: -10 }}
 className={`w-1/2 ${step.side === 'left' ? 'pr-16' : 'pl-16'}`}
 >
 <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
 <motion.div
 whileHover={{ rotate: 360 }}
 transition={{ duration: 0.6 }}
 className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mb-6`}
 >
 <step.icon className="w-8 h-8 text-white" />
 </motion.div>

 <div className="text-sm font-bold text-gray-400 mb-2">{step.phase}</div>
 <h3 className="text-2xl font-black text-white mb-4">{step.title}</h3>
 <p className="text-gray-300 mb-6">{step.description}</p>

 <motion.img
 whileHover={{ scale: 1.05 }}
 src={step.image}
 alt={step.title}
 className="w-full h-32 object-cover rounded-2xl"
 />
 </div>
 </motion.div>

 {/* Timeline Node */}
 <motion.div
 initial={{ scale: 0 }}
 whileInView={{ scale: 1 }}
 transition={{ duration: 0.5, delay: index * 0.3 + 0.5 }}
 whileHover={{ scale: 1.5 }}
 className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-400 to-pink-400 rounded-full border-4 border-black z-10"
 />
 </motion.div>
 ))}
 </div>
 </div>
 </section>

 {/* Excellence Showcase */}
 <section id="excellence" className="py-32 relative">
 <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-pink-900/20" />
 
 <div className="max-w-7xl mx-auto px-4 relative z-10">
 <motion.div
 initial={{ opacity: 0, y: 100 }}
 whileInView={{ opacity: 1, y: 0 }}
 transition={{ duration: 1 }}
 className="text-center mb-20"
 >
 <h2 className="text-5xl md:text-7xl font-black mb-8">
 <span className="text-white">EXCELLENCE</span>
 <br />
 <span className="bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">
 REDEFINED
 </span>
 </h2>
 </motion.div>

 {/* Interactive Stats Grid */}
 <div className="grid md:grid-cols-4 gap-8 mb-20">
 {[
 { number: "50,000+", label: "Transformations", icon: Users, delay: 0 },
 { number: "99.7%", label: "Success Rate", icon: Target, delay: 0.2 },
 { number: "$25M+", label: "Wealth Created", icon: DollarSign, delay: 0.4 },
 { number: "24/7", label: "Support System", icon: Shield, delay: 0.6 }
 ].map((stat, index) => (
 <motion.div
 key={index}
 initial={{ opacity: 0, y: 100, scale: 0.5 }}
 whileInView={{ opacity: 1, y: 0, scale: 1 }}
 transition={{ duration: 1, delay: stat.delay }}
 whileHover={{ 
 scale: 1.1, 
 y: -10,
 boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
 }}
 className="text-center group"
 >
 <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-white/10 h-full">
 <motion.div
 animate={{ 
 rotateY: [0, 360],
 rotateX: [0, 15, 0]
 }}
 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
 className="w-16 h-16 bg-gradient-to-r from-blue-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6"
 >
 <stat.icon className="w-8 h-8 text-white" />
 </motion.div>
 
 <motion.div
 initial={{ scale: 0 }}
 whileInView={{ scale: 1 }}
 transition={{ duration: 1, delay: stat.delay + 0.5 }}
 className="text-4xl md:text-5xl font-black text-white mb-2"
 >
 {stat.number}
 </motion.div>
 
 <div className="text-gray-300 text-lg font-semibold">{stat.label}</div>
 </div>
 </motion.div>
 ))}
 </div>

 {/* Interactive Team Showcase */}
 <motion.div
 initial={{ opacity: 0 }}
 whileInView={{ opacity: 1 }}
 transition={{ duration: 1 }}
 className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl rounded-3xl p-12 border border-white/10"
 >
 <h3 className="text-4xl font-black text-center text-white mb-12">
 Meet Your <span className="bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">Dream Team</span>
 </h3>

 <div className="grid md:grid-cols-3 gap-8">
 {[
 {
 name: "Dr. Sarah Chen",
 role: "Chief Transformation Officer",
 image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face",
 expertise: "Quantum Health Optimization",
 achievement: "10,000+ Lives Transformed"
 },
 {
 name: "Marcus Rodriguez",
 role: "Wealth Acceleration Specialist",
 image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
 expertise: "Multi-Stream Income Systems",
 achievement: "$50M+ Client Wealth Created"
 },
 {
 name: "Emma Thompson",
 role: "Elite Performance Coach",
 image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face",
 expertise: "Biomechanical Excellence",
 achievement: "Olympic Athletes Coached"
 }
 ].map((member, index) => (
 <motion.div
 key={index}
 initial={{ opacity: 0, y: 50 }}
 whileInView={{ opacity: 1, y: 0 }}
 transition={{ duration: 1, delay: index * 0.2 }}
 whileHover={{ 
 scale: 1.05, 
 y: -10,
 rotateY: 10
 }}
 className="text-center group"
 >
 <div className="relative mb-6">
 <motion.img
 whileHover={{ scale: 1.1 }}
 src={member.image}
 alt={member.name}
 className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-white/20"
 />
 <motion.div
 animate={{ rotate: 360 }}
 transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
 className="absolute inset-0 rounded-full border-2 border-dashed border-blue-400/50"
 />
 </div>
 
 <h4 className="text-xl font-bold text-white mb-2">{member.name}</h4>
 <p className="text-blue-400 font-semibold mb-2">{member.role}</p>
 <p className="text-gray-300 text-sm mb-2">{member.expertise}</p>
 <p className="text-yellow-400 text-sm font-semibold">{member.achievement}</p>
 </motion.div>
 ))}
 </div>
 </motion.div>
 </div>
 </section>

 {/* Final CTA with Spectacular Animation */}
 <section id="connect" className="py-32 relative overflow-hidden">
 <div className="absolute inset-0">
 <motion.div
 animate={{
 background: [
 "linear-gradient(45deg, #3B82F6, #8B5CF6, #EC4899, #3B82F6)",
 "linear-gradient(90deg, #EC4899, #3B82F6, #8B5CF6, #EC4899)",
 "linear-gradient(135deg, #8B5CF6, #EC4899, #3B82F6, #8B5CF6)",
 "linear-gradient(45deg, #3B82F6, #8B5CF6, #EC4899, #3B82F6)"
 ]
 }}
 transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
 className="absolute inset-0"
 />
 <div className="absolute inset-0 bg-black/40" />
 </div>

 <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
 <motion.div
 initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
 whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
 transition={{ duration: 1.5, type: "spring" }}
 >
 <motion.h2 
 className="text-5xl md:text-7xl font-black text-white mb-8"
 animate={{
 textShadow: [
 "0 0 20px rgba(255, 255, 255, 0.5)",
 "0 0 40px rgba(59, 130, 246, 0.8)",
 "0 0 20px rgba(255, 255, 255, 0.5)"
 ]
 }}
 transition={{ duration: 2, repeat: Infinity }}
 >
 READY TO BECOME
 <br />
 <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
 EXTRAORDINARY?
 </span>
 </motion.h2>

 <motion.p 
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 transition={{ duration: 1, delay: 0.5 }}
 className="text-xl text-white/90 mb-12 leading-relaxed"
 >
 Join the revolution. Transform your reality. Become the person you were meant to be.
 </motion.p>

 <motion.div 
 initial={{ opacity: 0, y: 50 }}
 whileInView={{ opacity: 1, y: 0 }}
 transition={{ duration: 1, delay: 1 }}
 className="flex flex-col sm:flex-row gap-6 justify-center"
 >
 <motion.button
 whileHover={{ 
 scale: 1.1, 
 y: -10,
 boxShadow: "0 25px 50px rgba(255, 255, 255, 0.3)"
 }}
 whileTap={{ scale: 0.9 }}
 animate={{
 boxShadow: [
 "0 0 0 0 rgba(255, 255, 255, 0.7)",
 "0 0 0 20px rgba(255, 255, 255, 0)",
 ],
 }}
 transition={{ duration: 2, repeat: Infinity }}
 className="bg-white text-black px-12 py-6 rounded-full font-black text-xl relative overflow-hidden group"
 >
 <motion.div
 className="absolute inset-0 bg-gradient-to-r from-blue-500 to-pink-500"
 initial={{ x: "-100%" }}
 whileHover={{ x: "0%" }}
 transition={{ duration: 0.3 }}
 />
 <span className="relative z-10 group-hover:text-white transition-colors">
 <Rocket className="inline mr-3 w-6 h-6" />
 START TRANSFORMATION
 </span>
 </motion.button>

 <motion.button
 whileHover={{ 
 scale: 1.1, 
 y: -10,
 backgroundColor: "rgba(255, 255, 255, 0.2)"
 }}
 whileTap={{ scale: 0.9 }}
 className="border-3 border-white text-white px-12 py-6 rounded-full font-black text-xl backdrop-blur-sm"
 >
 <Eye className="inline mr-3 w-6 h-6" />
 EXPERIENCE PREVIEW
 </motion.button>
 </motion.div>
 </motion.div>
 </div>
 </section>

 {/* Futuristic Footer */}
 <footer className="bg-black py-16 border-t border-white/10">
 <div className="max-w-7xl mx-auto px-4">
 <motion.div
 initial={{ opacity: 0, y: 50 }}
 whileInView={{ opacity: 1, y: 0 }}
 transition={{ duration: 1 }}
 className="text-center"
 >
 <div className="flex items-center justify-center mb-8">
 <motion.img 
 whileHover={{ rotate: 360, scale: 1.2 }}
 transition={{ duration: 0.8 }}
 src="https://ik.imagekit.io/psltlu4ds/zive_logo_page-00001.jpg?updatedAt=1753357527846" 
 alt="ZIVE Logo" 
 className="h-12 w-auto brightness-0 invert"
 />
 <motion.span 
 whileHover={{ scale: 1.1 }}
 className="ml-4 text-3xl font-black bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent"
 >
 ZIVE
 </motion.span>
 </div>
 
 <motion.p 
 animate={{
 opacity: [0.7, 1, 0.7],
 }}
 transition={{ duration: 3, repeat: Infinity }}
 className="text-gray-400 text-lg mb-8"
 >
 Transforming Reality. Redefining Possible. Creating Legends.
 </motion.p>

 <div className="flex justify-center space-x-8 mb-8">
 {[1, 2, 3, 4, 5].map((i) => (
 <motion.div 
 key={i}
 whileHover={{ 
 scale: 1.5, 
 rotate: 360,
 boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)"
 }}
 className="w-12 h-12 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full flex items-center justify-center cursor-pointer"
 >
 <Star className="w-6 h-6 text-white" />
 </motion.div>
 ))}
 </div>
 
 <motion.div
 animate={{
 backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
 }}
 transition={{ duration: 5, repeat: Infinity }}
 className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mb-8"
 style={{ backgroundSize: "200% 200%" }}
 />
 
 <p className="text-gray-500">
 &copy; 2025 ZYVE. Revolutionizing Human Potential.
 </p>
 </motion.div>
 </div>
 </footer>
 </div>
 );
};

export default ZiveWebsite;