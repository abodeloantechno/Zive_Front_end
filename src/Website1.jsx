import React, { useState, useEffect } from 'react';
import { ChevronDown, Play, Users, TrendingUp, Star, CheckCircle, Menu, X, ArrowRight, Zap, Brain, Globe, Sparkles } from 'lucide-react';

const ZyveFitWebsite = () => {
  const [activeSection, setActiveSection] = useState('hero');
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
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-slate-900/95 backdrop-blur-md' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              ZyveFit
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Problem', 'Solution', 'How We Deliver', 'Proof', 'Get Started', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="text-slate-300 hover:text-white transition-colors duration-200 font-medium"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-slate-800 rounded-lg mt-2 p-4">
              {['Problem', 'Solution', 'How We Deliver', 'Proof', 'Get Started', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="block w-full text-left py-2 text-slate-300 hover:text-white transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 to-blue-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.1),transparent_70%)]"></div>
        
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Wisdom Perfected by Intelligence,
            </span>
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Delivered at Light Speed
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed max-w-4xl mx-auto">
            For 5,000 years, ancient wisdom held the blueprint for perfect health. Today, we've combined this knowledge with AI to deliver personalized wellness that honors your culture while achieving your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => scrollToSection('get-started')}
              className="bg-gradient-to-r from-amber-500 to-orange-600 px-8 py-4 rounded-full font-semibold text-lg hover:from-amber-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Start Your Cultural Wellness Journey
            </button>
            <button
              onClick={() => scrollToSection('problem')}
              className="border border-slate-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Play size={20} />
              Discover the Problem
            </button>
          </div>

          {/* Power Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
              <div className="text-2xl font-bold text-green-400">95%</div>
              <div className="text-slate-300">Client Retention</div>
            </div>
            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
              <div className="text-2xl font-bold text-blue-400">400+</div>
              <div className="text-slate-300">Global Transformations</div>
            </div>
            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
              <div className="text-2xl font-bold text-purple-400">9</div>
              <div className="text-slate-300">Countries Served</div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown 
            size={32} 
            className="text-slate-400 cursor-pointer hover:text-white transition-colors"
            onClick={() => scrollToSection('problem')}
          />
        </div>
      </section>

      {/* The Problem */}
      <section id="problem" className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - The Problem */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                <span className="text-red-400">The Global Health Challenge</span>
                <span className="block text-2xl md:text-3xl text-slate-300 mt-4 font-normal">
                  "Why 87% of Wellness Programs Fail Worldwide"
                </span>
              </h2>
              
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>Traditional healthcare treats symptoms, not causes. Generic fitness apps ignore your cultural DNA. Western nutrition plans force unfamiliar foods on global populations.</p>
                
                <p className="text-xl font-semibold text-red-300">
                  The fundamental problem? They ignore the most important truth: your heritage IS your health blueprint.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-red-900/20 p-4 rounded-lg border border-red-800">
                  <div className="text-red-400 font-semibold">Fragmented Approaches</div>
                  <div className="text-slate-300 text-sm">One-size-fits-all solutions</div>
                </div>
                <div className="bg-red-900/20 p-4 rounded-lg border border-red-800">
                  <div className="text-red-400 font-semibold">Cultural Disconnect</div>
                  <div className="text-slate-300 text-sm">Ignoring food heritage</div>
                </div>
                <div className="bg-red-900/20 p-4 rounded-lg border border-red-800">
                  <div className="text-red-400 font-semibold">Symptom Treatment</div>
                  <div className="text-slate-300 text-sm">Not addressing root causes</div>
                </div>
                <div className="bg-red-900/20 p-4 rounded-lg border border-red-800">
                  <div className="text-red-400 font-semibold">Generic Programs</div>
                  <div className="text-slate-300 text-sm">No personalization</div>
                </div>
              </div>
            </div>

            {/* Right Side - The Solution */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">The ZyveFit Solution</span>
              </h2>
              
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed mb-8">
                <p>For 5,000 years, Siddha wisdom has held the blueprint for perfect health. Today, we've captured this ancient knowledge, combined it with modern nutritional science, and amplified it through AI to deliver personalized wellness solutions that honor your culture while achieving your goals.</p>
              </div>

              <h3 className="text-2xl font-bold mb-6 text-white">Your Culture Becomes Your Health Advantage</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-slate-700/50 p-4 rounded-lg">
                  <Zap className="text-blue-400 flex-shrink-0" size={24} />
                  <div>
                    <div className="font-semibold text-blue-400">Lightning-Fast Delivery</div>
                    <div className="text-slate-300">AI processes centuries of wisdom in milliseconds</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 bg-slate-700/50 p-4 rounded-lg">
                  <Brain className="text-purple-400 flex-shrink-0" size={24} />
                  <div>
                    <div className="font-semibold text-purple-400">Continuous Perfection</div>
                    <div className="text-slate-300">Every interaction makes our solutions smarter</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 bg-slate-700/50 p-4 rounded-lg">
                  <Globe className="text-green-400 flex-shrink-0" size={24} />
                  <div>
                    <div className="font-semibold text-green-400">Universal Accessibility</div>
                    <div className="text-slate-300">Proven methodologies for every culture</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 bg-slate-700/50 p-4 rounded-lg">
                  <Sparkles className="text-amber-400 flex-shrink-0" size={24} />
                  <div>
                    <div className="font-semibold text-amber-400">Cultural Intelligence</div>
                    <div className="text-slate-300">Your heritage becomes your greatest asset</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Deliver */}
      <section id="how-we-deliver" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-amber-400 to-blue-400 bg-clip-text text-transparent">
                The Perfect Fusion: Ancient Wisdom + Modern AI
              </span>
            </h2>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Ancient Wisdom Foundation */}
            <div className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 p-8 rounded-2xl border border-amber-800/30">
              <h3 className="text-2xl font-bold mb-6 text-amber-400">1. Ancient Wisdom Foundation</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-amber-400 flex-shrink-0" />
                  <span className="text-slate-200">5,000-year Siddha healing principles (universal, not culture-specific)</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-amber-400 flex-shrink-0" />
                  <span className="text-slate-200">Global nutrition science from leading institutions</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-amber-400 flex-shrink-0" />
                  <span className="text-slate-200">Cultural food wisdom from 50+ heritage backgrounds</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-amber-400 flex-shrink-0" />
                  <span className="text-slate-200">Traditional movement and meditation practices</span>
                </div>
              </div>
            </div>

            {/* AI Intelligence Amplification */}
            <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 p-8 rounded-2xl border border-blue-800/30">
              <h3 className="text-2xl font-bold mb-6 text-blue-400">2. AI Intelligence Amplification</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-blue-400 flex-shrink-0" />
                  <span className="text-slate-200">Processes wisdom at lightning speed</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-blue-400 flex-shrink-0" />
                  <span className="text-slate-200">Instant adaptation to your cultural preferences</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-blue-400 flex-shrink-0" />
                  <span className="text-slate-200">Continuous learning from 400+ successful transformations</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-blue-400 flex-shrink-0" />
                  <span className="text-slate-200">24/7 availability across all time zones</span>
                </div>
              </div>
            </div>
          </div>

          {/* Cultural Intelligence Section */}
          <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Cultural Intelligence That Adapts to YOU
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users size={24} className="text-white" />
                </div>
                <h4 className="font-semibold text-green-400 mb-2">Heritage Assessment</h4>
                <p className="text-slate-300 text-sm">Understands your family food traditions</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe size={24} className="text-white" />
                </div>
                <h4 className="font-semibold text-blue-400 mb-2">Local Adaptation</h4>
                <p className="text-slate-300 text-sm">Sources ingredients from your regional markets</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles size={24} className="text-white" />
                </div>
                <h4 className="font-semibold text-purple-400 mb-2">Cooking Method Respect</h4>
                <p className="text-slate-300 text-sm">Works with your preferred preparation styles</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={24} className="text-white" />
                </div>
                <h4 className="font-semibold text-amber-400 mb-2">Cultural Sensitivity</h4>
                <p className="text-slate-300 text-sm">Respects dietary laws and preferences</p>
              </div>
            </div>
          </div>

          {/* Tri-Modal Approach */}
          <div>
            <h3 className="text-3xl font-bold mb-12 text-center text-white">Our Tri-Modal Approach</h3>
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-green-900/30 to-teal-900/30 p-8 rounded-2xl border border-green-800/30 text-center">
                <div className="text-4xl mb-4">🍽️</div>
                <h4 className="text-2xl font-bold mb-4 text-green-400">Nutrition Intelligence</h4>
                <p className="text-slate-300 leading-relaxed">Your heritage foods, scientifically perfected using traditional cooking methods and modern optimization</p>
              </div>
              <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-8 rounded-2xl border border-blue-800/30 text-center">
                <div className="text-4xl mb-4">💪</div>
                <h4 className="text-2xl font-bold mb-4 text-blue-400">Fitness Optimization</h4>
                <p className="text-slate-300 leading-relaxed">Movement that honors your body's natural wisdom, integrating cultural practices with exercise science</p>
              </div>
              <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-8 rounded-2xl border border-purple-800/30 text-center">
                <div className="text-4xl mb-4">🧘</div>
                <h4 className="text-2xl font-bold mb-4 text-purple-400">Meditation & Mindfulness</h4>
                <p className="text-slate-300 leading-relaxed">Ancient peace delivered through modern technology, adapted to your spiritual background</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof & Results */}
      <section id="proof" className="py-20 bg-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Global Success Stories: Wisdom in Action
            </h2>
          </div>

          {/* Success Stories */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {[
              {
                name: "Priya S., Software Engineer",
                location: "Bangalore",
                result: "Lost 15kg",
                testimonial: "ZyveFit understood my South Indian food traditions perfectly. The AI optimized my family recipes while helping me lose 15kg. Finally, wellness that celebrates my culture instead of asking me to abandon it.",
                flag: "🇮🇳"
              },
              {
                name: "David M., Finance Director",
                location: "Sydney",
                result: "Peak Energy Levels",
                testimonial: "As an Australian with Italian heritage, ZyveFit created the perfect blend of Mediterranean principles with local Australian ingredients. My energy levels have never been higher.",
                flag: "🇦🇺"
              },
              {
                name: "Li Wei, Marketing Manager",
                location: "Singapore",
                result: "Lost 12kg in 5 months",
                testimonial: "The cultural intelligence is incredible. ZyveFit adapted to my Chinese-Singaporean background, optimizing traditional dishes while respecting my family's cooking methods.",
                flag: "🇸🇬"
              },
              {
                name: "Raj P., Entrepreneur",
                location: "Suva",
                result: "Perfect Cultural Mix",
                testimonial: "Living in Fiji with Indian roots, I thought I'd never find wellness solutions that understood my unique cultural mix. ZyveFit's AI created perfect meal plans using local Fijian ingredients with Indian spice wisdom.",
                flag: "🇫🇯"
              },
              {
                name: "Klaus H., Engineering Manager",
                location: "Munich",
                result: "35% Productivity Increase",
                testimonial: "ZyveFit respected my German food culture while introducing ancient wellness principles. Traditional German foods optimized for health - I never thought it was possible.",
                flag: "🇩🇪"
              }
            ].map((story, idx) => (
              <div key={idx} className="bg-slate-700 p-8 rounded-2xl border border-slate-600">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-3xl">{story.flag}</div>
                  <div>
                    <div className="font-semibold text-white">{story.name}</div>
                    <div className="text-slate-400">{story.location}</div>
                  </div>
                  <div className="ml-auto bg-green-900/30 px-3 py-1 rounded-full border border-green-800">
                    <div className="text-green-400 text-sm font-semibold">{story.result}</div>
                  </div>
                </div>
                <p className="text-slate-300 italic leading-relaxed">"{story.testimonial}"</p>
              </div>
            ))}
          </div>

          {/* Scientific Excellence */}
          <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-700 mb-12">
            <h3 className="text-3xl font-bold mb-8 text-center text-white">Scientific Excellence Behind Our AI</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-900/30 p-6 rounded-xl border border-blue-800/30 mb-4">
                  <h4 className="font-bold text-blue-400 mb-2">Precision Nutrition USA</h4>
                  <p className="text-slate-300 text-sm">Methodology Partners & Advisory Board</p>
                </div>
                <p className="text-slate-400 text-xs">"Evidence-based nutrition science adapted for global cultural contexts"</p>
              </div>
              <div className="text-center">
                <div className="bg-green-900/30 p-6 rounded-xl border border-green-800/30 mb-4">
                  <h4 className="font-bold text-green-400 mb-2">ACSM Certified</h4>
                  <p className="text-slate-300 text-sm">American College of Sports Medicine Standards</p>
                </div>
                <p className="text-slate-400 text-xs">Exercise science validated by leading sports medicine organization</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-900/30 p-6 rounded-xl border border-purple-800/30 mb-4">
                  <h4 className="font-bold text-purple-400 mb-2">ACE Certified</h4>
                  <p className="text-slate-300 text-sm">American Council on Exercise Excellence</p>
                </div>
                <p className="text-slate-400 text-xs">Personal training methodologies integrated into our AI systems</p>
              </div>
            </div>
          </div>

          {/* Measurable Results */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-green-900/20 p-6 rounded-xl border border-green-800/30 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">95%</div>
              <div className="text-slate-300 text-sm">Client Retention Rate</div>
              <div className="text-slate-500 text-xs">(Industry avg: 23%)</div>
            </div>
            <div className="bg-blue-900/20 p-6 rounded-xl border border-blue-800/30 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">12-22kg</div>
              <div className="text-slate-300 text-sm">Average Weight Loss</div>
              <div className="text-slate-500 text-xs">in 6 months</div>
            </div>
            <div className="bg-purple-900/20 p-6 rounded-xl border border-purple-800/30 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">25-40%</div>
              <div className="text-slate-300 text-sm">Productivity Increase</div>
              <div className="text-slate-500 text-xs">reported by executives</div>
            </div>
            <div className="bg-amber-900/20 p-6 rounded-xl border border-amber-800/30 text-center">
              <div className="text-3xl font-bold text-amber-400 mb-2">98%</div>
              <div className="text-slate-300 text-sm">Cultural Satisfaction</div>
              <div className="text-slate-500 text-xs">feel understood & respected</div>
            </div>
          </div>

          {/* Corporate ROI */}
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-8 rounded-2xl border border-slate-600">
            <h3 className="text-2xl font-bold mb-6 text-center text-white">Corporate ROI Proven</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400 mb-1">30%</div>
                <div className="text-slate-300 text-sm">Healthcare Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 mb-1">25%</div>
                <div className="text-slate-300 text-sm">Employee Satisfaction Increase</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400 mb-1">40%</div>
                <div className="text-slate-300 text-sm">Absenteeism Decrease</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-400 mb-1">$15k-$25k</div>
                <div className="text-slate-300 text-sm">Talent Retention Savings</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started */}
      <section id="get-started" className="py-20 bg-gradient-to-br from-amber-900 to-blue-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Life with Cultural Wisdom?
          </h2>
          <p className="text-xl text-slate-200 mb-12 max-w-2xl mx-auto">
            Join 400+ successful clients across 9 countries who have transformed their health while honoring their cultural heritage
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-white text-amber-900 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Cultural Assessment</h3>
              <p className="text-slate-200">AI analyzes your heritage and food traditions</p>
              </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white text-blue-900 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Personalized Plan</h3>
              <p className="text-slate-200">Receive your custom wellness blueprint in 24 hours</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white text-purple-900 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Live Your Best Life</h3>
              <p className="text-slate-200">Transform while celebrating your cultural identity</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 mb-8">
            <h3 className="text-2xl font-bold mb-6 text-white">Choose Your Transformation Path</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-600">
                <h4 className="text-xl font-bold mb-3 text-amber-400">Individual Transformation</h4>
                <div className="text-3xl font-bold mb-2 text-white">$297/month</div>
                <div className="text-slate-300 mb-4">Personal AI wellness coaching</div>
                <ul className="space-y-2 text-sm text-slate-200 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-green-400" />
                    Cultural nutrition optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-green-400" />
                    Personalized fitness programs
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-green-400" />
                    24/7 AI meditation guidance
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-green-400" />
                    Weekly progress optimization
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-amber-500 to-orange-600 px-6 py-3 rounded-lg font-semibold hover:from-amber-600 hover:to-orange-700 transition-all duration-300">
                  Start Individual Journey
                </button>
              </div>
              
              <div className="bg-slate-800/50 p-6 rounded-xl border border-blue-500 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 px-4 py-1 rounded-full text-xs font-semibold">
                  MOST POPULAR
                </div>
                <h4 className="text-xl font-bold mb-3 text-blue-400">Corporate Wellness</h4>
                <div className="text-3xl font-bold mb-2 text-white">Custom Pricing</div>
                <div className="text-slate-300 mb-4">For teams & organizations</div>
                <ul className="space-y-2 text-sm text-slate-200 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-green-400" />
                    Multi-cultural team optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-green-400" />
                    Executive health dashboards
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-green-400" />
                    ROI tracking & analytics
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-green-400" />
                    Dedicated success manager
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                  Request Corporate Demo
                </button>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-slate-200 mb-4">Not ready to commit? Start with our free cultural wellness assessment</p>
            <button className="border border-white/30 px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
              Free Cultural Assessment
            </button>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Begin Your Cultural Wellness Journey?
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Connect with our cultural wellness experts and discover how ancient wisdom can transform your modern life
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <h3 className="text-2xl font-bold mb-6 text-white">Get Your Free Cultural Assessment</h3>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <div className="block text-slate-300 mb-2">First Name</div>
                    <input
                      type="text"
                      className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <div className="block text-slate-300 mb-2">Last Name</div>
                    <input
                      type="text"
                      className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <div className="block text-slate-300 mb-2">Email</div>
                  <input
                    type="email"
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <div className="block text-slate-300 mb-2">Cultural Heritage</div>
                  <select className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors">
                    <option value="">Select your primary cultural background</option>
                    <option value="south-asian">South Asian (Indian, Pakistani, Bangladeshi)</option>
                    <option value="east-asian">East Asian (Chinese, Japanese, Korean)</option>
                    <option value="southeast-asian">Southeast Asian (Thai, Vietnamese, Filipino)</option>
                    <option value="middle-eastern">Middle Eastern (Arabic, Persian, Turkish)</option>
                    <option value="european">European (Italian, German, French, etc.)</option>
                    <option value="latin-american">Latin American (Mexican, Brazilian, Argentine)</option>
                    <option value="african">African Heritage</option>
                    <option value="mixed">Mixed Heritage</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <div className="block text-slate-300 mb-2">Primary Health Goal</div>
                  <select className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors">
                    <option value="">What's your main wellness objective?</option>
                    <option value="weight-loss">Weight Loss & Body Composition</option>
                    <option value="energy">Increase Energy & Vitality</option>
                    <option value="fitness">Improve Fitness & Strength</option>
                    <option value="stress">Reduce Stress & Improve Mental Health</option>
                    <option value="chronic">Manage Chronic Health Conditions</option>
                    <option value="performance">Optimize Performance (Athletic/Professional)</option>
                    <option value="longevity">Longevity & Healthy Aging</option>
                  </select>
                </div>
                
                <div>
                  <div className="block text-slate-300 mb-2">Tell us about your current challenges</div>
                  <textarea
                    rows="4"
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors resize-none"
                    placeholder="What specific wellness challenges are you facing? How important is it for solutions to respect your cultural food traditions?"
                  ></textarea>
                </div>
                
                <button
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:from-amber-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get My Free Cultural Assessment
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                <h4 className="text-xl font-bold mb-4 text-amber-400">Direct Contact</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-amber-500/20 rounded-full flex items-center justify-center">
                      <span className="text-amber-400">📧</span>
                    </div>
                    <div>
                      <div className="text-slate-300">Email</div>
                      <div className="text-white font-semibold">hello@zyvefit.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                      <span className="text-blue-400">📱</span>
                    </div>
                    <div>
                      <div className="text-slate-300">WhatsApp</div>
                      <div className="text-white font-semibold">+65 8123 4567</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                <h4 className="text-xl font-bold mb-4 text-blue-400">Global Presence</h4>
                <div className="space-y-2 text-slate-300">
                  <div>🇸🇬 Singapore (HQ)</div>
                  <div>🇮🇳 India - Bangalore, Mumbai, Delhi</div>
                  <div>🇦🇺 Australia - Sydney, Melbourne</div>
                  <div>🇺🇸 USA - New York, San Francisco</div>
                  <div>🇬🇧 UK - London</div>
                  <div>🇩🇪 Germany - Munich</div>
                  <div>🇫🇯 Fiji - Suva</div>
                  <div>🇳🇿 New Zealand - Auckland</div>
                  <div>🇲🇾 Malaysia - Kuala Lumpur</div>
                </div>
              </div>

              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                <h4 className="text-xl font-bold mb-4 text-green-400">Rapid Response Guarantee</h4>
                <div className="space-y-3 text-slate-300">
                  <div className="flex items-center gap-3">
                    <CheckCircle size={16} className="text-green-400" />
                    <span>Free assessment results in 24 hours</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle size={16} className="text-green-400" />
                    <span>Cultural expert consultation within 48 hours</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle size={16} className="text-green-400" />
                    <span>Personalized plan delivery in 72 hours</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-6 rounded-xl border border-purple-800/30">
                <h4 className="text-xl font-bold mb-3 text-purple-400">Corporate Partnerships</h4>
                <p className="text-slate-300 mb-4">
                  Transform your organization's wellness culture with our enterprise solutions
                </p>
                <button className="bg-gradient-to-r from-purple-500 to-pink-600 px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300">
                  Schedule Corporate Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mb-4">
                ZyveFit
              </div>
              <p className="text-slate-400 mb-4">
                Wisdom perfected by intelligence, delivered at light speed. Ancient wellness for the modern world.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-amber-500 transition-colors">
                  <span className="text-xs">📘</span>
                </div>
                <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-500 transition-colors">
                  <span className="text-xs">🐦</span>
                </div>
                <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-purple-500 transition-colors">
                  <span className="text-xs">📷</span>
                </div>
                <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-500 transition-colors">
                  <span className="text-xs">💼</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-slate-400">
                <li className="hover:text-white cursor-pointer transition-colors">Individual Coaching</li>
                <li className="hover:text-white cursor-pointer transition-colors">Corporate Wellness</li>
                <li className="hover:text-white cursor-pointer transition-colors">Cultural Nutrition</li>
                <li className="hover:text-white cursor-pointer transition-colors">AI Fitness Optimization</li>
                <li className="hover:text-white cursor-pointer transition-colors">Mindfulness Training</li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-slate-400">
                <li className="hover:text-white cursor-pointer transition-colors">Success Stories</li>
                <li className="hover:text-white cursor-pointer transition-colors">Cultural Food Database</li>
                <li className="hover:text-white cursor-pointer transition-colors">Scientific Research</li>
                <li className="hover:text-white cursor-pointer transition-colors">Wellness Blog</li>
                <li className="hover:text-white cursor-pointer transition-colors">Free Assessment</li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-slate-400">
                <li className="hover:text-white cursor-pointer transition-colors">Help Center</li>
                <li className="hover:text-white cursor-pointer transition-colors">Contact Us</li>
                <li className="hover:text-white cursor-pointer transition-colors">Privacy Policy</li>
                <li className="hover:text-white cursor-pointer transition-colors">Terms of Service</li>
                <li className="hover:text-white cursor-pointer transition-colors">Cookie Policy</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-slate-400 text-sm">
                © 2025 ZyveFit. All rights reserved. Ancient wisdom, modern delivery.
              </div>
              <div className="flex items-center gap-6 text-slate-400 text-sm">
                <div>🔒 Privacy Protected</div>
                <div>🌍 Global Service</div>
                <div>⚡ AI Powered</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ZyveFitWebsite;