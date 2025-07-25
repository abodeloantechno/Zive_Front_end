import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Star, Users, Trophy, Target, Heart, DollarSign, Dumbbell, Phone, Mail, MapPin, CheckCircle, ArrowRight, Zap, Brain, Globe, Sparkles, MessageCircle, Shield, Award, TrendingUp, Clock } from 'lucide-react';

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
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrollY > 5 ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white shadow-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center mr-3">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-gray-900">
                  ZyveFit
                </span>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {['Home', 'Solutions', 'Methodology', 'Results', 'Enterprise', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                    className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-300 relative group"
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                  </button>
                ))}
              </div>
            </div>
            <div className="hidden md:block">
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-300"
              >
                Get Started
              </button>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-gray-900"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Home', 'Solutions', 'Methodology', 'Results', 'Enterprise', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium w-full text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-20 pb-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="pt-8">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                <Award className="w-4 h-4 mr-2" />
                ACSM & ACE Certified • 95% Client Retention
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                AI-Powered Wellness
                <span className="block text-blue-600">
                  That Honors Your Culture
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform your health using 5,000-year-old Siddha wisdom combined with cutting-edge AI. 
                Personalized nutrition, fitness, and mindfulness solutions that respect your heritage while 
                achieving measurable results.
              </p>
              
              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">400+</div>
                  <div className="text-sm text-gray-600">Global Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">9</div>
                  <div className="text-sm text-gray-600">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">95%</div>
                  <div className="text-sm text-gray-600">Retention Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">24/7</div>
                  <div className="text-sm text-gray-600">AI Support</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 flex items-center justify-center"
                >
                  Start Your Transformation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button 
                  onClick={() => scrollToSection('methodology')}
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
                >
                  Learn Our Method
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
                  alt="Professional Wellness Technology" 
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              The ZyveFit Advantage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The first wellness platform to combine ancient wisdom with modern AI, 
              delivering culturally-intelligent health solutions at enterprise scale.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Brain,
                title: "AI-Powered Intelligence",
                description: "Advanced algorithms process 5,000 years of wellness wisdom in real-time"
              },
              {
                icon: Globe,
                title: "Cultural Adaptation",
                description: "Solutions that honor and optimize your cultural food traditions"
              },
              {
                icon: Shield,
                title: "Scientific Validation",
                description: "ACSM & ACE certified methodologies with proven measurable outcomes"
              },
              {
                icon: Clock,
                title: "24/7 Availability",
                description: "Global support across all time zones with instant AI guidance"
              }
            ].map((advantage, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <advantage.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comprehensive Wellness Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Three integrated pillars of transformation, powered by AI
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "Intelligent Nutrition",
                subtitle: "Cultural Food Optimization",
                description: "Transform your heritage cuisine using advanced nutritional science while preserving authentic flavors and cooking methods.",
                features: [
                  "AI-optimized cultural recipes",
                  "Macro/micronutrient balancing",
                  "Local ingredient sourcing",
                  "Meal timing intelligence"
                ],
                image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
                icon: Target
              },
              {
                title: "Adaptive Fitness",
                subtitle: "Movement That Fits Your Life",
                description: "Evidence-based exercise protocols that integrate with your cultural movement practices and professional schedule.",
                features: [
                  "ACSM-certified exercise science",
                  "Cultural movement integration",
                  "Lifestyle-adapted scheduling",
                  "Progressive optimization"
                ],
                image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
                icon: Dumbbell
              },
              {
                title: "Mindful Wellness",
                subtitle: "Stress Management & Mental Clarity",
                description: "Evidence-based meditation and mindfulness practices adapted to your cultural and spiritual background.",
                features: [
                  "Culturally-appropriate meditation",
                  "Stress management protocols",
                  "Mental clarity enhancement",
                  "Spiritual practice integration"
                ],
                image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
                icon: Heart
              }
            ].map((solution, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={solution.image} 
                    alt={solution.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <solution.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{solution.title}</h3>
                      <p className="text-blue-600 text-sm font-medium">{solution.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section id="methodology" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Scientific Methodology
            </h2>
            <p className="text-xl text-gray-600">
              How we combine ancient wisdom with modern intelligence
            </p>
          </div>
          
          <div className="space-y-12">
            {[
              {
                step: "01",
                title: "Ancient Wisdom Foundation",
                description: "5,000-year-old Siddha principles combined with global nutrition science and cultural food wisdom from 50+ heritage backgrounds.",
                color: "blue"
              },
              {
                step: "02", 
                title: "AI Intelligence Layer",
                description: "Advanced algorithms process this wisdom at lightning speed, providing instant cultural adaptation and continuous learning from 400+ successful transformations.",
                color: "indigo"
              },
              {
                step: "03",
                title: "Personalized Implementation",
                description: "Culturally-intelligent recommendations delivered through your preferred communication channels with 24/7 global support.",
                color: "blue"
              }
            ].map((methodology, index) => (
              <div key={index} className="flex items-start">
                <div className={`flex-shrink-0 w-20 h-20 bg-gradient-to-br from-${methodology.color}-500 to-${methodology.color}-600 rounded-2xl flex items-center justify-center mr-8`}>
                  <span className="text-white text-xl font-bold">{methodology.step}</span>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{methodology.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">{methodology.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Scientific Partners */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Scientific Excellence Partners</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  organization: "ACSM",
                  title: "American College of Sports Medicine",
                  description: "Exercise science protocols and fitness methodologies validated by the world's leading sports medicine authority."
                },
                {
                  organization: "ACE",
                  title: "American Council on Exercise",
                  description: "Personal training and fitness coaching excellence standards integrated into our AI systems."
                },
                {
                  organization: "Precision Nutrition",
                  title: "Evidence-Based Nutrition Science",
                  description: "Research-backed nutrition methodologies adapted for global cultural contexts and preferences."
                }
              ].map((partner, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{partner.organization}</h4>
                  <p className="text-blue-600 font-medium text-sm mb-3">{partner.title}</p>
                  <p className="text-gray-600 text-sm">{partner.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section id="results" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Proven Global Results
            </h2>
            <p className="text-xl text-gray-600">
              Measurable outcomes across cultures and continents
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                metric: "95%",
                label: "Client Retention Rate",
                sublabel: "Industry average: 23%",
                icon: TrendingUp
              },
              {
                metric: "12-22kg",
                label: "Average Weight Loss",
                sublabel: "Within 6 months",
                icon: Target
              },
              {
                metric: "35%",
                label: "Productivity Increase",
                sublabel: "Executive clients",
                icon: Zap
              },
              {
                metric: "98%",
                label: "Cultural Satisfaction",
                sublabel: "Feel understood & respected",
                icon: Globe
              }
            ].map((result, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <result.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{result.metric}</div>
                <div className="text-gray-900 font-medium mb-1">{result.label}</div>
                <div className="text-gray-500 text-sm">{result.sublabel}</div>
              </div>
            ))}
          </div>

          {/* Client Testimonials */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Priya Sharma",
                role: "Chief Technology Officer",
                company: "Global Tech Solutions, Bangalore",
                quote: "ZyveFit's cultural intelligence is remarkable. The AI optimized my traditional South Indian recipes while helping me achieve my health goals. Professional, scientific, and respectful.",
                image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
                flag: "🇮🇳"
              },
              {
                name: "David Chen",
                role: "Managing Director",
                company: "Investment Partners, Sydney",
                quote: "The ROI on employee wellness through ZyveFit has been exceptional. 30% reduction in healthcare costs and measurably improved team performance.",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
                flag: "🇦🇺"
              },
              {
                name: "Sarah Johnson",
                role: "VP Operations",
                company: "Multinational Corp, Singapore",
                quote: "ZyveFit delivered culturally-appropriate wellness solutions for our diverse team. The science-backed approach with cultural sensitivity is exactly what we needed.",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80",
                flag: "🇸🇬"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div className="flex-1">
                    <div className="flex items-center">
                      <h4 className="font-semibold text-gray-900 mr-2">{testimonial.name}</h4>
                      <span className="text-lg">{testimonial.flag}</span>
                    </div>
                    <p className="text-blue-600 text-sm font-medium">{testimonial.role}</p>
                    <p className="text-gray-500 text-xs">{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise */}
      <section id="enterprise" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Enterprise Wellness Solutions
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Scalable, culturally-intelligent wellness programs that deliver measurable ROI 
                for organizations with diverse, global workforces.
              </p>
              
              <div className="space-y-6 mb-8">
                {[
                  {
                    title: "Measurable ROI",
                    description: "30% healthcare cost reduction, 25% increase in employee satisfaction, 40% decrease in absenteeism"
                  },
                  {
                    title: "Cultural Intelligence",
                    description: "AI-powered solutions that adapt to your workforce's diverse cultural backgrounds and dietary preferences"
                  },
                  {
                    title: "Global Scalability",
                    description: "24/7 support across all time zones with local cultural expertise in 9 countries"
                  },
                  {
                    title: "Scientific Validation",
                    description: "ACSM & ACE certified methodologies with evidence-based wellness protocols"
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300 flex items-center"
              >
                Schedule Enterprise Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Limited Availability</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border-l-4 border-blue-600">
                  <div className="text-2xl font-bold text-blue-600 mb-1">10</div>
                  <div className="text-gray-900 font-medium">Corporate Clients</div>
                  <div className="text-gray-500 text-sm">Organizations with 1000+ employees</div>
                </div>
                <div className="bg-white rounded-lg p-4 border-l-4 border-indigo-600">
                  <div className="text-2xl font-bold text-indigo-600 mb-1">50</div>
                  <div className="text-gray-900 font-medium">Executive Clients</div>
                  <div className="text-gray-500 text-sm">Individual transformation programs</div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-blue-800 font-medium text-center">
                  Join the exclusive waitlist for priority access
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Begin Your Transformation
            </h2>
            <p className="text-xl text-gray-600">
              Connect with our team to explore how ZyveFit can serve your wellness goals
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Started Today</h3>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="your.email@company.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Cultural Background</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="e.g., South Indian, Chinese, Mediterranean"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Interest</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors">
                    <option>Personal Transformation</option>
                    <option>Enterprise Solutions</option>
                    <option>Executive Coaching</option>
                    <option>Partnership Opportunities</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea 
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="Tell us about your wellness goals and any specific cultural considerations..."
                  ></textarea>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300">
                  Send Message
                </button>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Connect With Us</h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Email</div>
                      <div className="text-gray-600">hello@zyvefit.com</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Phone</div>
                      <div className="text-gray-600">+1 (555) 123-4567</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Global Headquarters</div>
                      <div className="text-gray-600">Singapore • Bangalore • Sydney</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Ready to Transform?</h3>
                <p className="mb-6 opacity-90">
                  Join 400+ professionals who've already discovered the power of culturally-intelligent wellness.
                </p>
                <div className="flex items-center text-sm opacity-75">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Average response time: 2 hours
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="col-span-1 lg:col-span-2">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center mr-3">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">ZyveFit</span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                The world's first AI-powered wellness platform that honors your cultural heritage 
                while delivering scientifically-validated health transformations.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <Globe className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <Mail className="w-5 h-5" />
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Personal Transformation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Enterprise Wellness</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Executive Coaching</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cultural Nutrition</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Scientific Advisory</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2025 ZyveFit. All rights reserved. ACSM & ACE Certified.
              </div>
              <div className="flex items-center text-gray-400 text-sm">
                <Shield className="w-4 h-4 mr-2" />
                Enterprise-grade security & privacy
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ZyveFitWebsite;