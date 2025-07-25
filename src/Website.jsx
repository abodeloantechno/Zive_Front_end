import React, { useState, useEffect } from 'react';
import { ChevronDown, Play, Users, TrendingUp, Star, CheckCircle, Menu, X, ArrowRight } from 'lucide-react';

const CoachingWebsite = () => {
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
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              TransformCoach
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Challenge', 'Solution', 'Results', 'Get Started', 'About', 'Contact'].map((item) => (
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
              {['Challenge', 'Solution', 'Results', 'Get Started', 'About', 'Contact'].map((item) => (
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
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent leading-tight">
            Transform Your
            <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Life Today
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
            Master fitness, health, and wealth with personalized coaching that delivers real results
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('get-started')}
              className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Start Your Journey
            </button>
            <button
              onClick={() => scrollToSection('solution')}
              className="border border-slate-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Play size={20} />
              Learn More
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown 
            size={32} 
            className="text-slate-400 cursor-pointer hover:text-white transition-colors"
            onClick={() => scrollToSection('challenge')}
          />
        </div>
      </section>

      {/* The Challenge */}
      <section id="challenge" className="py-20 bg-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
              The Challenge
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Most people struggle with the same fundamental problems that keep them from achieving their goals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Fitness Frustration",
                description: "Endless workout plans that don't deliver results, leaving you demotivated and confused about what actually works.",
                icon: "💪"
              },
              {
                title: "Health Overwhelm",
                description: "Conflicting nutrition advice and wellness trends that create more confusion than clarity about optimal health.",
                icon: "🏥"
              },
              {
                title: "Wealth Stagnation",
                description: "Financial goals that feel impossible to reach, with no clear roadmap to build lasting wealth and security.",
                icon: "💰"
              }
            ].map((challenge, idx) => (
              <div key={idx} className="bg-slate-700 p-8 rounded-2xl border border-slate-600 hover:border-slate-500 transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-4xl mb-4">{challenge.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-red-400">{challenge.title}</h3>
                <p className="text-slate-300 leading-relaxed">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section id="solution" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Our Solution
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              A comprehensive, personalized approach that transforms your fitness, health, and wealth simultaneously
            </p>
          </div>

          <div className="space-y-16">
            {[
              {
                title: "Personalized Fitness Programs",
                description: "Custom workout plans designed for your body type, goals, and lifestyle. No more guesswork – just results.",
                features: ["Custom exercise selection", "Progressive overload tracking", "Form correction videos", "Flexible scheduling"],
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                title: "Holistic Health Optimization",
                description: "Evidence-based nutrition and wellness strategies that work with your unique metabolism and preferences.",
                features: ["Personalized meal plans", "Supplement guidance", "Sleep optimization", "Stress management"],
                gradient: "from-green-500 to-teal-500"
              },
              {
                title: "Wealth Building Strategy",
                description: "Proven financial systems to build multiple income streams and achieve long-term financial freedom.",
                features: ["Investment planning", "Passive income creation", "Risk management", "Goal tracking"],
                gradient: "from-purple-500 to-pink-500"
              }
            ].map((solution, idx) => (
              <div key={idx} className={`grid md:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                <div className={idx % 2 === 1 ? 'md:col-start-2' : ''}>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${solution.gradient} flex items-center justify-center mb-6`}>
                    <CheckCircle size={32} className="text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">{solution.title}</h3>
                  <p className="text-slate-300 text-lg mb-6 leading-relaxed">{solution.description}</p>
                  <div className="space-y-3">
                    {solution.features.map((feature, featureIdx) => (
                      <div key={featureIdx} className="flex items-center gap-3">
                        <CheckCircle size={20} className="text-green-400 flex-shrink-0" />
                        <span className="text-slate-200">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={`${idx % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                  <div className={`h-80 rounded-2xl bg-gradient-to-br ${solution.gradient} opacity-20`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof & Results */}
      <section id="results" className="py-20 bg-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Proof & Results
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Real transformations from real people who committed to the process
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              { number: "500+", label: "Lives Transformed" },
              { number: "95%", label: "Success Rate" },
              { number: "50lbs", label: "Avg Weight Loss" },
              { number: "$100K+", label: "Avg Income Increase" }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-300">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                result: "Lost 40lbs & Built 6-Figure Business",
                testimonial: "The integrated approach changed everything. I'm not just healthier, I'm financially free.",
                rating: 5
              },
              {
                name: "Mike Chen",
                result: "Gained 20lbs Muscle & Doubled Income",
                testimonial: "Never thought fitness and wealth building could work together so perfectly.",
                rating: 5
              },
              {
                name: "Emma Davis",
                result: "Transformed Health & Created Passive Income",
                testimonial: "This program gave me the tools and mindset to completely transform my life.",
                rating: 5
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-slate-700 p-8 rounded-2xl border border-slate-600">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-300 mb-6 italic">"{testimonial.testimonial}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-green-400 text-sm">{testimonial.result}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Started */}
      <section id="get-started" className="py-20 bg-gradient-to-br from-blue-900 to-purple-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Life?
          </h2>
          <p className="text-xl text-slate-200 mb-12 max-w-2xl mx-auto">
            Join hundreds of successful clients who have already transformed their fitness, health, and wealth
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { step: "1", title: "Free Consultation", description: "15-minute strategy call to assess your goals" },
              { step: "2", title: "Custom Plan", description: "Personalized roadmap for your transformation" },
              { step: "3", title: "Start Winning", description: "Begin your journey with expert guidance" }
            ].map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-white text-blue-900 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-slate-200">{step.description}</p>
              </div>
            ))}
          </div>

          <button className="bg-white text-blue-900 px-12 py-4 rounded-full font-bold text-xl hover:bg-slate-100 transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center gap-2 mx-auto">
            Book Free Consultation
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-20 bg-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                About Us
              </h2>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                We're a team of certified fitness trainers, nutritionists, and financial advisors who believe that true transformation happens when you optimize all areas of your life simultaneously.
              </p>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Our integrated approach has helped over 500 clients achieve remarkable results by addressing the interconnection between physical health, mental clarity, and financial success.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-blue-400 mb-2">Certified Trainers</h4>
                  <p className="text-slate-300">NASM, ACSM certified professionals</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-400 mb-2">Nutrition Experts</h4>
                  <p className="text-slate-300">Registered dietitians and wellness coaches</p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-400 mb-2">Financial Advisors</h4>
                  <p className="text-slate-300">CFP certified wealth building specialists</p>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-400 mb-2">Success Coaches</h4>
                  <p className="text-slate-300">Mindset and accountability experts</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 h-96 rounded-2xl"></div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-slate-300">
              Ready to start your transformation? We're here to help.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-blue-400">Email</h4>
                  <p className="text-slate-300">hello@transformcoach.com</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-400">Phone</h4>
                  <p className="text-slate-300">+1 (555) 123-4567</p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-400">Office Hours</h4>
                  <p className="text-slate-300">Mon-Fri: 8AM-6PM EST</p>
                </div>
              </div>
            </div>

            <div>
              <div className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    rows="4"
                    placeholder="Your Message"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  ></textarea>
                </div>
                <button
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 py-8 border-t border-slate-700">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
            TransformCoach
          </div>
          <p className="text-slate-400">
            © 2024 TransformCoach. All rights reserved. Transform your fitness, health, and wealth.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CoachingWebsite;