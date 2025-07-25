import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Star, Users, Trophy, Target, Heart, DollarSign, Dumbbell, Phone, Mail, MapPin, CheckCircle, ArrowRight } from 'lucide-react';

const CoachWebsite = () => {
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
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-black/90 backdrop-blur-md' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  CoachPro
                </span>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {['Home', 'About', 'Services', 'Programs', 'Success', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-gray-300 hover:text-purple-400 px-3 py-2 text-sm font-medium transition-colors duration-300"
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
              {['Home', 'About', 'Services', 'Programs', 'Success', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-300 hover:text-purple-400 block px-3 py-2 text-base font-medium w-full text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-pink-900/50"></div>
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Fitness Background" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Transform Your
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Life Today
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Achieve optimal health, build lasting wealth, and reach peak fitness with personalized coaching that delivers real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              Start Your Journey
            </button>
            <button 
              onClick={() => scrollToSection('programs')}
              className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
            >
              View Programs
            </button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-white w-8 h-8" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-r from-slate-800 to-purple-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Meet Your
                <span className="block text-purple-400">Success Coach</span>
              </h2>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                With over 10 years of experience in transforming lives, I specialize in the perfect trinity of success: health, wealth, and fitness. My holistic approach ensures you don't just achieve your goals—you sustain them for life.
              </p>
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">500+</div>
                  <div className="text-gray-400 text-sm">Clients Transformed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">10+</div>
                  <div className="text-gray-400 text-sm">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">98%</div>
                  <div className="text-gray-400 text-sm">Success Rate</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-1">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80" 
                  alt="Professional Coach" 
                  className="w-full h-96 object-cover rounded-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-purple-600 text-white p-4 rounded-xl shadow-2xl">
                <div className="flex items-center gap-2">
                  <Trophy className="w-6 h-6" />
                  <span className="font-semibold">Certified Expert</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-purple-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Three Pillars of
              <span className="block text-purple-400">Success</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Transform every aspect of your life with our comprehensive coaching approach
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Health Coaching",
                description: "Optimize your physical and mental wellbeing with personalized nutrition plans, stress management techniques, and sustainable lifestyle changes.",
                image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80"
              },
              {
                icon: DollarSign,
                title: "Wealth Building",
                description: "Create multiple income streams, master financial planning, and build the mindset needed for long-term financial freedom and success.",
                image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80"
              },
              {
                icon: Dumbbell,
                title: "Fitness Training",
                description: "Achieve your dream physique with customized workout plans, proper form coaching, and progressive training methodologies.",
                image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80"
              }
            ].map((service, index) => (
              <div key={index} className="group bg-gradient-to-br from-slate-800 to-purple-900 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <service.icon className="w-8 h-8 text-purple-400 mr-3" />
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Choose Your
              <span className="block text-purple-400">Transformation</span>
            </h2>
            <p className="text-gray-300 text-lg">Select the program that best fits your goals and lifestyle</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "$297",
                period: "/month",
                features: [
                  "Weekly 1-on-1 coaching calls",
                  "Personalized meal plans",
                  "Basic workout routines",
                  "Email support",
                  "Goal setting & tracking"
                ],
                popular: false
              },
              {
                name: "Complete",
                price: "$597",
                period: "/month",
                features: [
                  "Bi-weekly 1-on-1 coaching",
                  "Custom nutrition & fitness plans",
                  "Wealth building strategies",
                  "24/7 chat support",
                  "Monthly progress reviews",
                  "Access to exclusive content"
                ],
                popular: true
              },
              {
                name: "Elite",
                price: "$997",
                period: "/month",
                features: [
                  "Unlimited coaching access",
                  "Complete life transformation",
                  "Investment guidance",
                  "VIP community access",
                  "Quarterly in-person sessions",
                  "Done-for-you meal prep",
                  "Personal accountability partner"
                ],
                popular: false
              }
            ].map((plan, index) => (
              <div key={index} className={`relative bg-gradient-to-br from-slate-800 to-purple-900 rounded-2xl p-8 ${plan.popular ? 'ring-2 ring-purple-400 transform scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-purple-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-300 ${plan.popular 
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 transform hover:scale-105' 
                  : 'border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section id="success" className="py-20 bg-gradient-to-b from-purple-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Success
              <span className="block text-purple-400">Stories</span>
            </h2>
            <p className="text-gray-300 text-lg">Real transformations from real people</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                result: "Lost 45lbs & Built 6-Figure Business",
                quote: "The holistic approach changed everything. I'm healthier, wealthier, and stronger than ever before.",
                image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
              },
              {
                name: "Mike Rodriguez",
                result: "Gained 20lbs Muscle & $50K Income",
                quote: "I never thought I could transform my body and finances simultaneously. This program made it possible.",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
              },
              {
                name: "Emma Chen",
                result: "Marathon Runner & Investment Portfolio",
                quote: "From couch potato to marathon runner while building a diversified investment portfolio. Incredible!",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
              }
            ].map((story, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800 to-purple-900 rounded-2xl p-6 hover:transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <img 
                    src={story.image} 
                    alt={story.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="text-white font-semibold">{story.name}</h4>
                    <p className="text-purple-400 text-sm">{story.result}</p>
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
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-slate-800 to-purple-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to
              <span className="block text-purple-400">Transform?</span>
            </h2>
            <p className="text-gray-300 text-lg">Take the first step towards your best life today</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-purple-400 mr-4" />
                  <div>
                    <p className="text-white font-semibold">Phone</p>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-purple-400 mr-4" />
                  <div>
                    <p className="text-white font-semibold">Email</p>
                    <p className="text-gray-300">coach@coachpro.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-purple-400 mr-4" />
                  <div>
                    <p className="text-white font-semibold">Location</p>
                    <p className="text-gray-300">Los Angeles, California</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-slate-900 to-purple-900 rounded-2xl p-8">
              <div className="space-y-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-slate-800 text-white rounded-lg border border-purple-400 focus:border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-slate-800 text-white rounded-lg border border-purple-400 focus:border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  />
                </div>
                <div>
                  <select className="w-full px-4 py-3 bg-slate-800 text-white rounded-lg border border-purple-400 focus:border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400">
                    <option>Select Your Goal</option>
                    <option>Health & Wellness</option>
                    <option>Wealth Building</option>
                    <option>Fitness Transformation</option>
                    <option>Complete Life Change</option>
                  </select>
                </div>
                <div>
                  <textarea 
                    rows="4" 
                    placeholder="Tell me about your goals..."
                    className="w-full px-4 py-3 bg-slate-800 text-white rounded-lg border border-purple-400 focus:border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  ></textarea>
                </div>
                <button 
                  onClick={() => alert('Thank you for your interest! We will contact you soon.')}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  Start My Transformation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                CoachPro
              </span>
            </div>
            <p className="text-gray-400 mb-8">
              Transforming lives through health, wealth, and fitness coaching
            </p>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-500 text-sm">
                © 2025 CoachPro. All rights reserved. | Privacy Policy | Terms of Service
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CoachWebsite;