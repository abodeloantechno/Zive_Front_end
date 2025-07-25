import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Star, Users, Trophy, Target, Heart, DollarSign, Dumbbell, Phone, Mail, MapPin, CheckCircle, ArrowRight, Zap, Brain, Globe, Sparkles, MessageCircle } from 'lucide-react';

const ZyveFitWebsite = () => {
    
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrollY > 5 ? 'bg-black/90 backdrop-blur-md' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-blue-400 bg-clip-text text-transparent">
                  ZyveFit
                </span>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {['Home', 'How It Works', 'Success Stories', 'Solutions', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                    className="text-gray-300 hover:text-yellow-400 px-3 py-2 text-sm font-medium transition-colors duration-300"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Home', 'How It Works', 'Success Stories', 'Solutions', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="text-gray-300 hover:text-yellow-400 block px-3 py-2 text-base font-medium w-full text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen py-8 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-yellow-900/50"></div>
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Ancient Wisdom Meets Modern Technology" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative py-8 top-10 z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Wisdom Perfected by Intelligence,
            <span className="block bg-gradient-to-r from-yellow-400 to-blue-400 bg-clip-text text-transparent">
              Delivered at Light Speed
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            For 5,000 years, Siddha wisdom has held the blueprint for perfect health. Today, we've captured this ancient knowledge, 
            combined it with modern nutritional science, and amplified it through AI to deliver personalized wellness solutions 
            that honor your culture while achieving your goals.
          </p>
          
          {/* Power Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 text-sm">
            <div className="bg-black/40 backdrop-blur-sm rounded-lg p-3">
              <div className="flex items-center justify-center text-green-400 mb-1">
                <CheckCircle className="w-4 h-4 mr-1" />
                <span className="font-semibold">95%</span>
              </div>
              <div className="text-gray-300">Client Retention</div>
            </div>
            <div className="bg-black/40 backdrop-blur-sm rounded-lg p-3">
              <div className="flex items-center justify-center text-green-400 mb-1">
                <CheckCircle className="w-4 h-4 mr-1" />
                <span className="font-semibold">400+</span>
              </div>
              <div className="text-gray-300">Global Transformations</div>
            </div>
            <div className="bg-black/40 backdrop-blur-sm rounded-lg p-3">
              <div className="flex items-center justify-center text-green-400 mb-1">
                <CheckCircle className="w-4 h-4 mr-1" />
                <span className="font-semibold">9</span>
              </div>
              <div className="text-gray-300">Countries Served</div>
            </div>
            <div className="bg-black/40 backdrop-blur-sm rounded-lg p-3">
              <div className="flex items-center justify-center text-green-400 mb-1">
                <CheckCircle className="w-4 h-4 mr-1" />
                <span className="font-semibold">Certified</span>
              </div>
              <div className="text-gray-300">ACSM & ACE</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-yellow-600 to-blue-600 hover:from-yellow-700 hover:to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              Begin Your Transformation
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
            >
              See How Wisdom Works
            </button>
          </div>
        </div>
        <div className="absolute hidden md:block bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-white w-8 h-8" />
        </div>
      </section>

      {/* The ZyveFit Promise */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              The ZyveFit Promise
            </h2>
            <p className="text-2xl text-yellow-400 mb-8 font-semibold">
              "Your Culture + Our Wisdom = Your Perfect Health"
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Every culture holds the keys to wellness within its traditions. We've created AI that recognizes this wisdom, 
              honors your heritage, and amplifies it with modern science and ancient Siddha principles.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: "Lightning-Fast Delivery",
                description: "AI processes centuries of wisdom in milliseconds"
              },
              {
                icon: Brain,
                title: "Continuous Perfection",
                description: "Every interaction makes our solutions smarter"
              },
              {
                icon: Globe,
                title: "Universal Accessibility",
                description: "Proven methodologies available to every culture"
              },
              {
                icon: Sparkles,
                title: "Cultural Intelligence",
                description: "Your heritage becomes your health advantage"
              }
            ].map((promise, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800 to-blue-900 rounded-2xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300">
                <promise.icon className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{promise.title}</h3>
                <p className="text-gray-300">{promise.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-gray-300 italic">
              We don't just use AI. We don't just follow tradition. We perfect both together, continuously, for you.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-gradient-to-b from-blue-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              The Perfect
              <span className="block text-yellow-400">Fusion</span>
            </h2>
          </div>
          
          {/* Three-Layer Process */}
          <div className="space-y-12">
            <div className="bg-gradient-to-r from-slate-800 to-blue-900 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="bg-yellow-400 text-black w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl mr-4">1</div>
                <h3 className="text-2xl font-bold text-white">Ancient Wisdom Foundation</h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-gray-300">
                <div>• 5,000-year Siddha healing principles</div>
                <div>• Global nutrition science from leading institutions</div>
                <div>• Cultural food wisdom from 50+ heritage backgrounds</div>
                <div>• Traditional movement and meditation practices</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-900 to-slate-800 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="bg-blue-400 text-black w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl mr-4">2</div>
                <h3 className="text-2xl font-bold text-white">AI Intelligence Amplification</h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-gray-300">
                <div>• Processes wisdom at lightning speed</div>
                <div>• Instant adaptation to your cultural preferences</div>
                <div>• Continuous learning from 400+ successful transformations</div>
                <div>• 24/7 availability across all time zones</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-slate-800 to-yellow-900 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="bg-yellow-400 text-black w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl mr-4">3</div>
                <h3 className="text-2xl font-bold text-white">Your Personal Transformation</h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-gray-300">
                <div>• Cultural food optimization using traditional cooking methods</div>
                <div>• Intelligent meal timing and portion control</div>
                <div>• Fitness plans that honor your movement preferences</div>
                <div>• Meditation practices adapted to your spiritual background</div>
              </div>
            </div>
          </div>

          {/* Tri-Modal Mastery */}
          <div className="mt-20">
            <h2 className="text-4xl font-bold text-white text-center mb-16">Tri-Modal Mastery</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Nutrition Intelligence",
                  subtitle: "Your Heritage Foods, Scientifically Perfected",
                  description: "Whether you love authentic pasta, traditional curry, or hearty stews - our AI optimizes the cuisine you cherish using advanced nutritional science and ancient Siddha principles.",
                  features: [
                    "Cultural food adaptation using your preferred cooking methods",
                    "Modern macro/micronutrient optimization",
                    "Intelligent meal timing and portion control",
                    "Local ingredient sourcing and seasonal adaptation"
                  ],
                  image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
                },
                {
                  title: "Fitness Optimization",
                  subtitle: "Movement That Honors Your Body's Natural Wisdom",
                  description: "Combining exercise science with traditional movement practices, perfectly adapted to your lifestyle and cultural context.",
                  features: [
                    "Evidence-based workout principles",
                    "Traditional practices integration (Yoga, Tai Chi, cultural dances)",
                    "Customized intensity and progression",
                    "Movement preferences that feel natural to you"
                  ],
                  image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
                },
                {
                  title: "Meditation & Mindfulness",
                  subtitle: "Ancient Peace, Lightning-Fast Delivery",
                  description: "Stress management and mental wellness using time-tested techniques, delivered through intelligent technology.",
                  features: [
                    "Universal meditation principles",
                    "Evidence-based stress management",
                    "Personalized mindfulness routines",
                    "Cultural spiritual practices integration"
                  ],
                  image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
                }
              ].map((modality, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800 to-blue-900 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={modality.image} 
                      alt={modality.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{modality.title}</h3>
                    <p className="text-yellow-400 text-sm font-semibold mb-3">{modality.subtitle}</p>
                    <p className="text-gray-300 mb-4">{modality.description}</p>
                    <ul className="space-y-2">
                      {modality.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section id="success-stories" className="py-20 bg-gradient-to-r from-slate-900 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Global Success Stories
            </h2>
            <p className="text-xl text-yellow-400 font-semibold">"Wisdom in Action Worldwide"</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                name: "Priya S.",
                location: "Software Engineer, Bangalore",
                quote: "ZyveFit understood my South Indian food traditions perfectly. The AI optimized my family recipes while helping me lose 15kg. Finally, wellness that celebrates my culture instead of asking me to abandon it.",
                image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
                flag: "🇮🇳"
              },
              {
                name: "David M.",
                location: "Finance Director, Sydney",
                quote: "As an Australian with Italian heritage, ZyveFit created the perfect blend of Mediterranean principles with local Australian ingredients. My energy levels have never been higher.",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
                flag: "🇦🇺"
              },
              {
                name: "Li Wei",
                location: "Marketing Manager, Singapore",
                quote: "The cultural intelligence is incredible. ZyveFit adapted to my Chinese-Singaporean background, optimizing traditional dishes while respecting my family's cooking methods. Lost 12kg in 5 months effortlessly.",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80",
                flag: "🇸🇬"
              },
              {
                name: "Raj P.",
                location: "Entrepreneur, Suva",
                quote: "Living in Fiji with Indian roots, I thought I'd never find wellness solutions that understood my unique cultural mix. ZyveFit's AI created perfect meal plans using local Fijian ingredients with Indian spice wisdom.",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
                flag: "🇫🇯"
              },
              {
                name: "Klaus H.",
                location: "Engineering Manager, Munich",
                quote: "ZyveFit respected my German food culture while introducing ancient wellness principles. Traditional German foods optimized for health - I never thought it was possible. My productivity at work increased by 35%.",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
                flag: "🇩🇪"
              }
            ].map((story, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800 to-blue-900 rounded-2xl p-6 hover:transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <img 
                    src={story.image} 
                    alt={story.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="flex items-center">
                      <h4 className="text-white font-semibold mr-2">{story.name}</h4>
                      <span className="text-lg">{story.flag}</span>
                    </div>
                    <p className="text-yellow-400 text-sm">{story.location}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic">"{story.quote}"</p>
              </div>
            ))}
          </div>

          {/* Measurable Outcomes */}
          <div className="bg-gradient-to-r from-blue-900 to-slate-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white text-center mb-8">Measurable Outcomes</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">95%</div>
                <div className="text-white font-semibold mb-1">Client Retention Rate</div>
                <div className="text-gray-400 text-sm">(Industry average: 23%)</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">12-22kg</div>
                <div className="text-white font-semibold mb-1">Average Weight Loss</div>
                <div className="text-gray-400 text-sm">in 6 months</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">25-40%</div>
                <div className="text-white font-semibold mb-1">Productivity Increase</div>
                <div className="text-gray-400 text-sm">reported by executives</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">98%</div>
                <div className="text-white font-semibold mb-1">Cultural Satisfaction</div>
                <div className="text-gray-400 text-sm">feel understood and respected</div>
              </div>
            </div>
          </div>

          {/* Scientific Excellence */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-white text-center mb-8">Scientific Excellence Behind Our AI</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Precision Nutrition USA",
                  subtitle: "Methodology Partners & Advisory Board",
                  description: "Evidence-based nutrition science adapted for global cultural contexts, ensuring our AI recommendations meet the highest scientific standards."
                },
                {
                  title: "ACSM Certified Professionals",
                  subtitle: "American College of Sports Medicine Standards",
                  description: "Exercise science and fitness protocols validated by the world's leading sports medicine organization."
                },
                {
                  title: "ACE Certified Experts",
                  subtitle: "American Council on Exercise Excellence",
                  description: "Personal training and fitness coaching methodologies integrated into our AI systems."
                }
              ].map((cert, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800 to-blue-900 rounded-xl p-6 text-center">
                  <h4 className="text-white font-bold text-lg mb-2">{cert.title}</h4>
                  <p className="text-yellow-400 text-sm font-semibold mb-3">{cert.subtitle}</p>
                  <p className="text-gray-300 text-sm">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="py-20 bg-gradient-to-b from-blue-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Your Transformation
              <span className="block text-yellow-400">Journey</span>
            </h2>
            <p className="text-xl text-gray-300">AI-Powered Wellness for Everyone</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Individual Solutions */}
            <div className="bg-gradient-to-br from-slate-800 to-blue-900 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">What You Receive:</h3>
              <ul className="space-y-4 mb-8">
                {[
                  "Complete cultural nutrition optimization",
                  "AI fitness adaptation to your lifestyle",
                  "Personalized meditation guidance",
                  "24/7 AI wisdom access across all time zones",
                  "Continuous learning and improvement",
                  "Cultural food recipe optimization",
                  "Local ingredient sourcing guidance"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Corporate Solutions */}
            <div className="bg-gradient-to-br from-blue-900 to-slate-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Corporate Wellness: Business Transformation</h3>
              
              <h4 className="text-lg font-semibold text-yellow-400 mb-4">What We Deliver for Your Organization:</h4>
              <ul className="space-y-3 mb-6 text-gray-300">
                <li>• Cultural nutrition programs for diverse employee backgrounds</li>
                <li>• AI-powered fitness solutions adapted to different lifestyles</li>
                <li>• Stress management through culturally-appropriate meditation practices</li>
                <li>• 24/7 wellness support across all time zones</li>
              </ul>

              <h4 className="text-lg font-semibold text-yellow-400 mb-4">Proven ROI Metrics:</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">30%</div>
                  <div className="text-gray-300 text-sm">Healthcare Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">25%</div>
                  <div className="text-gray-300 text-sm">Employee Satisfaction Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">40%</div>
                  <div className="text-gray-300 text-sm">Absenteeism Decrease</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">$15k-$25k</div>
                  <div className="text-gray-300 text-sm">Talent Retention Savings per Employee</div>
                </div>
              </div>
            </div>
          </div>

          {/* Exclusive Access Notice */}
          <div className="bg-gradient-to-r from-yellow-900 to-blue-900 rounded-2xl p-8 text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Exclusive Access Notice</h3>
            <p className="text-gray-300 mb-6">We are currently accepting:</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-black/30 rounded-lg p-4">
                <div className="text-3xl font-bold text-yellow-400 mb-2">10</div>
                <div className="text-white">Corporate Clients</div>
                <div className="text-gray-400 text-sm">(Organizations with 1000+ employees)</div></div>
              <div className="bg-black/30 rounded-lg p-4">
                <div className="text-3xl font-bold text-yellow-400 mb-2">50</div>
                <div className="text-white">Individual Clients</div>
                <div className="text-gray-400 text-sm">(Executive-level professionals)</div>
              </div>
            </div>
            <p className="text-yellow-400 font-semibold mt-4">Limited Availability - Join the Waitlist</p>
          </div>

          {/* Global Reach */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-8">Global Availability</h3>
            <div className="flex flex-wrap justify-center gap-4 text-2xl mb-6">
              <span>🇮🇳</span> <span>🇦🇺</span> <span>🇸🇬</span> <span>🇫🇯</span> <span>🇩🇪</span> 
              <span>🇺🇸</span> <span>🇬🇧</span> <span>🇨🇦</span> <span>🇳🇿</span>
            </div>
            <p className="text-gray-300">
              AI wisdom delivered 24/7 across all time zones, adapted to your local culture and available ingredients.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-gradient-to-r from-slate-900 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform?
            </h2>
            <p className="text-xl text-yellow-400 font-semibold mb-2">Your Journey Begins Now</p>
            <p className="text-gray-300">Join the wellness revolution that honors your heritage while achieving your goals.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-slate-800 to-blue-900 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Start Your Transformation</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-black/30 border border-gray-600 rounded-lg text-white focus:border-yellow-400 focus:outline-none"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-black/30 border border-gray-600 rounded-lg text-white focus:border-yellow-400 focus:outline-none"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 bg-black/30 border border-gray-600 rounded-lg text-white focus:border-yellow-400 focus:outline-none"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Cultural Background</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-black/30 border border-gray-600 rounded-lg text-white focus:border-yellow-400 focus:outline-none"
                    placeholder="e.g., Indian, Italian-Australian, Chinese-Singaporean"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">I'm interested in:</label>
                  <select className="w-full px-4 py-3 bg-black/30 border border-gray-600 rounded-lg text-white focus:border-yellow-400 focus:outline-none">
                    <option>Individual Transformation Program</option>
                    <option>Corporate Wellness Solution</option>
                    <option>Both Individual and Corporate</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Tell us about your wellness goals</label>
                  <textarea 
                    rows="4"
                    className="w-full px-4 py-3 bg-black/30 border border-gray-600 rounded-lg text-white focus:border-yellow-400 focus:outline-none"
                    placeholder="What health and wellness outcomes are you looking to achieve while honoring your cultural heritage?"
                  ></textarea>
                </div>
                <button 
                  className="w-full bg-gradient-to-r from-yellow-600 to-blue-600 hover:from-yellow-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Begin My Transformation Journey
                </button>
              </div>
            </div>

            {/* Contact Info & FAQ */}
            <div className="space-y-8">
              {/* Direct Contact */}
              <div className="bg-gradient-to-br from-blue-900 to-slate-800 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Direct Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-300">
                    <MessageCircle className="w-5 h-5 text-yellow-400 mr-3" />
                    <span>WhatsApp: +91 98765 43210 (Global Support)</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Mail className="w-5 h-5 text-yellow-400 mr-3" />
                    <span>wisdom@zyvefit.com</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Phone className="w-5 h-5 text-yellow-400 mr-3" />
                    <span>+1-800-ZYVEFIT (24/7 Global)</span>
                  </div>
                  <div className="flex items-start text-gray-300">
                    <MapPin className="w-5 h-5 text-yellow-400 mr-3 mt-1" />
                    <div>
                      <div>Global Headquarters: Sydney, Australia</div>
                      <div className="text-sm text-gray-400">Serving 9 countries with local cultural expertise</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick FAQ */}
              <div className="bg-gradient-to-br from-slate-800 to-blue-900 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-yellow-400 font-semibold mb-2">How quickly will I see results?</h4>
                    <p className="text-gray-300 text-sm">Most clients notice energy improvements within 2 weeks, with measurable physical changes by week 4-6. Our AI adapts continuously to accelerate your progress.</p>
                  </div>
                  <div>
                    <h4 className="text-yellow-400 font-semibold mb-2">What makes ZyveFit different from other programs?</h4>
                    <p className="text-gray-300 text-sm">We're the only platform that combines 5,000-year-old Siddha wisdom with modern AI, specifically designed to honor and optimize your cultural food traditions.</p>
                  </div>
                  <div>
                    <h4 className="text-yellow-400 font-semibold mb-2">Do I need to give up my favorite cultural foods?</h4>
                    <p className="text-gray-300 text-sm">Never! We optimize the foods you love using advanced nutritional science while preserving their cultural authenticity and flavor.</p>
                  </div>
                  <div>
                    <h4 className="text-yellow-400 font-semibold mb-2">Is this suitable for busy executives?</h4>
                    <p className="text-gray-300 text-sm">Absolutely. Our AI provides instant wisdom delivery, 24/7 availability, and solutions that integrate seamlessly into demanding professional schedules.</p>
                  </div>
                </div>
              </div>

              {/* Guarantee */}
              <div className="bg-gradient-to-r from-yellow-900 to-blue-900 rounded-2xl p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-2">The ZyveFit Guarantee</h3>
                <p className="text-gray-300 text-sm">
                  Experience measurable transformation within 60 days, or receive personalized consultation to perfect your program. 
                  Your cultural wellness journey is our commitment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-blue-400 bg-clip-text text-transparent">
                  ZyveFit
                </span>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Where ancient wisdom meets modern intelligence. Your culture becomes your health advantage.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-blue-400 rounded-full flex items-center justify-center">
                  <span className="text-black text-sm font-bold">🧠</span>
                </div>
                <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-black text-sm font-bold">⚡</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Individual Transformation</li>
                <li>Corporate Wellness</li>
                <li>Cultural Nutrition</li>
                <li>AI Fitness Optimization</li>
                <li>Meditation & Mindfulness</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Global Presence</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>🇦🇺 Australia (HQ)</li>
                <li>🇮🇳 India</li>
                <li>🇸🇬 Singapore</li>
                <li>🇫🇯 Fiji</li>
                <li>🇺🇸 United States</li>
                <li>🇬🇧 United Kingdom</li>
                <li>🇨🇦 Canada</li>
                <li>🇳🇿 New Zealand</li>
                <li>🇩🇪 Germany</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Excellence Standards</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>ACSM Certified Protocols</li>
                <li>ACE Certified Methodology</li>
                <li>Precision Nutrition Partnership</li>
                <li>Siddha Wisdom Integration</li>
                <li>24/7 Global Support</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 ZyveFit Global. Ancient Wisdom. Modern Intelligence. Your Cultural Health Advantage.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Serving 9 countries with culturally-intelligent AI wellness solutions.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ZyveFitWebsite;