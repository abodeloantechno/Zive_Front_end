import React, { useState, useEffect } from 'react';
import { ChevronDown, Globe, Zap, Brain, Users, TrendingUp, Clock, Mail, MessageCircle, Linkedin, Instagram, CheckCircle, Star, Award, Shield } from 'lucide-react';

const ZyveFitWebsite = () => {
  const [activeSection, setActiveSection] = useState('problem');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const testimonials = [
    {
      name: "Priya S.",
      role: "Software Engineer, Bangalore",
      quote: "ZyveFit understood my South Indian food traditions perfectly. The AI optimized my family recipes while helping me lose 15kg. Finally, wellness that celebrates my culture instead of asking me to abandon it.",
      flag: "🇮🇳"
    },
    {
      name: "David M.",
      role: "Finance Director, Sydney",
      quote: "As an Australian with Italian heritage, ZyveFit created the perfect blend of Mediterranean principles with local Australian ingredients. My energy levels have never been higher.",
      flag: "🇦🇺"
    },
    {
      name: "Li Wei",
      role: "Marketing Manager, Singapore",
      quote: "The cultural intelligence is incredible. ZyveFit adapted to my Chinese-Singaporean background, optimizing traditional dishes while respecting my family's cooking methods. Lost 12kg in 5 months effortlessly.",
      flag: "🇸🇬"
    },
    {
      name: "Klaus H.",
      role: "Engineering Manager, Munich",
      quote: "ZyveFit respected my German food culture while introducing ancient wellness principles. My productivity at work increased by 35%.",
      flag: "🇩🇪"
    }
  ];

  const stats = [
    { label: "Client Retention Rate", value: "95%", icon: <Users className="w-8 h-8" /> },
    { label: "Global Transformations", value: "400+", icon: <Globe className="w-8 h-8" /> },
    { label: "Countries Served", value: "9", icon: <TrendingUp className="w-8 h-8" /> }
  ];

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning-Fast Delivery",
      description: "AI processes centuries of wisdom in milliseconds"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Continuous Learning",
      description: "Every interaction makes our solutions smarter"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Universal Accessibility",
      description: "Proven methodologies for every culture"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Cultural Intelligence",
      description: "Your heritage becomes your greatest asset"
    }
  ];

  const services = [
    {
      title: "Nutrition Intelligence",
      description: "Your heritage foods, scientifically perfected using traditional cooking methods and modern optimization",
      features: ["Heritage food optimization", "Traditional cooking methods", "Modern nutritional science", "Local ingredient sourcing"]
    },
    {
      title: "Fitness Optimization",
      description: "Movement that honors your body's natural wisdom, integrating cultural practices with exercise science",
      features: ["Cultural movement practices", "Exercise science integration", "Lifestyle adaptation", "Body wisdom recognition"]
    },
    {
      title: "Meditation & Mindfulness",
      description: "Ancient peace delivered through modern technology, adapted to your spiritual background",
      features: ["Spiritual background respect", "Ancient meditation techniques", "Modern technology delivery", "Personalized guidance"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white/95'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4">
              <img 
                src="https://ik.imagekit.io/psltlu4ds/zive_logo_page-00001.jpg?updatedAt=1753357527846" 
                alt="ZyveFit Logo" 
                className="h-12 w-auto"
              />
              <span className="text-2xl font-bold text-slate-800">ZyveFit</span>
            </div>
            <div className="hidden md:flex space-x-10">
              <a href="#problem" className="text-slate-700 hover:text-blue-800 font-medium transition-colors">The Challenge</a>
              <a href="#solution" className="text-slate-700 hover:text-blue-800 font-medium transition-colors">Our Solution</a>
              <a href="#proof" className="text-slate-700 hover:text-blue-800 font-medium transition-colors">Results</a>
              <a href="#start" className="text-slate-700 hover:text-blue-800 font-medium transition-colors">Get Started</a>
            </div>
            <div className="flex space-x-4">
              <button className="bg-blue-800 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-900 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Ancient Wisdom Meets<br />Modern Intelligence
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              For 5,000 years, Siddha wisdom has held the blueprint for perfect health. Today, we've captured this ancient knowledge and amplified it through AI to deliver personalized wellness solutions that honor your culture.
            </p>
            <div className="flex justify-center space-x-6">
              <button className="bg-blue-800 text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-blue-900 transition-colors">
                Begin Your Journey
              </button>
              <button className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-md font-semibold text-lg hover:border-slate-400 transition-colors">
                Learn More
              </button>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white p-8 rounded-lg shadow-sm border border-slate-200">
                <div className="flex justify-center mb-4 text-blue-800">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-slate-900 mb-2">{stat.value}</div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                The Global Health Challenge
              </h2>
              <p className="text-xl text-amber-700 font-semibold mb-6">
                Why 87% of Wellness Programs Fail Worldwide
              </p>
              <div className="space-y-4 text-lg text-slate-600 mb-8">
                <p>Traditional healthcare treats symptoms, not causes. Generic fitness apps ignore your cultural DNA. Western nutrition plans force unfamiliar foods on global populations.</p>
                <p className="font-semibold text-slate-800">The fundamental problem? They ignore the most important truth: your heritage IS your health blueprint.</p>
              </div>
              
              <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-4">Common Problems with Current Solutions:</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-red-700">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Generic, one-size-fits-all approaches</span>
                  </div>
                  <div className="flex items-center space-x-2 text-red-700">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Cultural ignorance and insensitivity</span>
                  </div>
                  <div className="flex items-center space-x-2 text-red-700">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Focus on symptoms rather than root causes</span>
                  </div>
                  <div className="flex items-center space-x-2 text-red-700">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Unfamiliar foods and foreign practices</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">The ZyveFit Difference</h3>
              <p className="text-lg text-slate-600 mb-6">
                "Wisdom Perfected by Intelligence, Delivered at Light Speed"
              </p>
              
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="text-blue-800 mt-1">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">{feature.title}</h4>
                      <p className="text-slate-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              How We Deliver Results
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              The perfect fusion of 5,000-year Siddha healing principles with cutting-edge artificial intelligence, creating personalized wellness solutions that honor your cultural heritage.
            </p>
          </div>

          {/* Foundation Pyramid */}
          <div className="mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="bg-amber-600 text-white p-8 rounded-t-lg">
                <h3 className="text-2xl font-bold text-center mb-6">Ancient Wisdom Foundation</h3>
                <div className="grid md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-4xl mb-3">🏛️</div>
                    <h4 className="font-semibold mb-1">Siddha Principles</h4>
                    <p className="text-sm text-amber-100">5,000-year healing wisdom</p>
                  </div>
                  <div>
                    <div className="text-4xl mb-3">🔬</div>
                    <h4 className="font-semibold mb-1">Nutrition Science</h4>
                    <p className="text-sm text-amber-100">Leading institutions</p>
                  </div>
                  <div>
                    <div className="text-4xl mb-3">🌍</div>
                    <h4 className="font-semibold mb-1">Cultural Wisdom</h4>
                    <p className="text-sm text-amber-100">50+ heritage backgrounds</p>
                  </div>
                  <div>
                    <div className="text-4xl mb-3">🧘</div>
                    <h4 className="font-semibold mb-1">Traditional Practices</h4>
                    <p className="text-sm text-amber-100">Movement & meditation</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-800 text-white p-6 mx-8">
                <h3 className="text-xl font-bold text-center mb-4">AI Intelligence Layer</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>Lightning-speed processing</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>Cultural adaptation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>Continuous learning</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>24/7 availability</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-800 text-white p-4 rounded-b-lg mx-16 text-center">
                <h3 className="font-bold">Personalized Cultural Solutions</h3>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-50 p-8 rounded-lg border border-slate-200">
                <div className="text-4xl mb-4 text-center">
                  {index === 0 ? '🍽️' : index === 1 ? '💪' : '🧘'}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">{service.title}</h3>
                <p className="text-slate-600 mb-6 text-center">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof Section */}
      <section id="proof" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Proven Results Across 9 Countries
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Real transformations from real people, each honoring their unique cultural heritage while achieving extraordinary results.
            </p>
          </div>

          {/* Testimonials */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{testimonial.flag}</div>
                  <div className="flex-1">
                    <div className="mb-4">
                      <h4 className="text-lg font-bold text-slate-900">{testimonial.name}</h4>
                      <p className="text-slate-600">{testimonial.role}</p>
                    </div>
                    <blockquote className="text-slate-700 italic">
                      "{testimonial.quote}"
                    </blockquote>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scientific Credentials */}
          <div className="bg-white p-12 rounded-lg shadow-sm border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">Scientific Excellence</h3>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-blue-800" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Precision Nutrition USA</h4>
                <p className="text-slate-600">Methodology Partners & Advisory Board</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-800" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">ACSM Certified</h4>
                <p className="text-slate-600">American College of Sports Medicine Standards</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-purple-800" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">ACE Certified</h4>
                <p className="text-slate-600">American Council on Exercise Excellence</p>
              </div>
            </div>

            {/* Results Metrics */}
            <div className="grid md:grid-cols-4 gap-6 pt-8 border-t border-slate-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-800 mb-2">95%</div>
                <p className="text-slate-700 font-medium">Client Retention Rate</p>
                <p className="text-sm text-slate-500">(Industry avg: 23%)</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-800 mb-2">12-22kg</div>
                <p className="text-slate-700 font-medium">Average Weight Loss</p>
                <p className="text-sm text-slate-500">in 6 months</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 mb-2">25-40%</div>
                <p className="text-slate-700 font-medium">Productivity Increase</p>
                <p className="text-sm text-slate-500">reported by executives</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-800 mb-2">98%</div>
                <p className="text-slate-700 font-medium">Cultural Satisfaction</p>
                <p className="text-sm text-slate-500">feel understood</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section id="start" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Ready to Begin Your Transformation?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Your culture holds the keys to your perfect health. Our AI has learned to unlock them.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Individual Solutions */}
            <div className="bg-slate-50 p-8 rounded-lg border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Individual Transformation</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                  <p className="text-slate-700">Complete cultural nutrition optimization using your heritage foods</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                  <p className="text-slate-700">AI fitness adaptation to your lifestyle and movement preferences</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                  <p className="text-slate-700">Personalized meditation guidance respecting your spiritual background</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                  <p className="text-slate-700">24/7 AI wisdom access across all time zones</p>
                </div>
              </div>
              <button className="w-full bg-blue-800 text-white py-4 rounded-md font-semibold text-lg hover:bg-blue-900 transition-colors">
                Begin Your Journey
              </button>
            </div>

            {/* Corporate Solutions */}
            <div className="bg-slate-900 p-8 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-6">Corporate Wellness Solutions</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-amber-400 mt-1" />
                  <p>Cultural nutrition programs for diverse employee backgrounds</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-amber-400 mt-1" />
                  <p>AI-powered fitness solutions adapted to different lifestyles</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-amber-400 mt-1" />
                  <p>Executive intelligence dashboards with ROI tracking</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-amber-400 mt-1" />
                  <p>Proven 30% healthcare cost reduction</p>
                </div>
              </div>
              
              <div className="bg-white/10 p-4 rounded-md mb-6">
                <h4 className="font-bold text-amber-400 mb-2">Business Impact:</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>• 30% Healthcare Cost Reduction</div>
                  <div>• 40% Absenteeism Decrease</div>
                  <div>• 25% Employee Satisfaction Boost</div>
                  <div>• $15k-$25k Retention Savings</div>
                </div>
              </div>
              
              <button className="w-full bg-amber-600 text-white py-4 rounded-md font-semibold text-lg hover:bg-amber-700 transition-colors">
                Corporate Inquiry
              </button>
            </div>
          </div>

          {/* Exclusive Access */}
          <div className="bg-slate-800 text-white p-8 rounded-lg text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Limited Availability</h3>
            <p className="mb-6 text-slate-300">We are currently accepting:</p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white/10 p-6 rounded-md">
                <div className="text-3xl font-bold text-amber-400 mb-2">10</div>
                <p className="font-semibold">Corporate Clients</p>
                <p className="text-sm text-slate-400">Organizations with 1000+ employees</p>
              </div>
              <div className="bg-white/10 p-6 rounded-md">
                <div className="text-3xl font-bold text-amber-400 mb-2">5,000</div>
                <p className="font-semibold">Individual Users</p>
                <p className="text-sm text-slate-400">before December 2025</p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-slate-50 p-8 rounded-lg border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 text-center mb-2">Contact ZyveFit</h3>
            <p className="text-center text-slate-600 mb-8">Experience wisdom at the speed of light</p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <MessageCircle className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <p className="font-semibold text-slate-900">WhatsApp</p>
                <p className="text-slate-600">+91-7530015300</p>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <p className="font-semibold text-slate-900">Email</p>
                <p className="text-slate-600">karikalan@zyvefit.com</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center space-x-2 mb-3">
                  <Instagram className="w-6 h-6 text-pink-600" />
                  <Linkedin className="w-6 h-6 text-blue-700" />
                </div>
                <p className="font-semibold text-slate-900">Social Media</p>
                <p className="text-slate-600">@zyvefit</p>
              </div>
            </div>

            <div className="text-center space-y-2 text-slate-600 mb-8">
              <div className="flex items-center justify-center space-x-2">
                <Globe className="w-5 h-5" />
                <span>Serving: India, Canada, UK, USA, Germany, UAE, Singapore, Australia, Fiji</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>Available: 24/7 across all time zones</span>
              </div>
            </div>

            {/* Trust Signals */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-slate-200">
              <div className="text-center">
                <Shield className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <p className="text-sm font-semibold text-slate-900">HIPAA Compliant</p>
                <p className="text-xs text-slate-600">Data Protection</p>
              </div>
              <div className="text-center">
                <Award className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <p className="text-sm font-semibold text-slate-900">Certified</p>
                <p className="text-xs text-slate-600">Health Institutions</p>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <p className="text-sm font-semibold text-slate-900">Expert Team</p>
                <p className="text-xs text-slate-600">Global Nutrition</p>
              </div>
              <div className="text-center">
                <Star className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                <p className="text-sm font-semibold text-slate-900">95% Retention</p>
                <p className="text-xs text-slate-600">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src="https://ik.imagekit.io/psltlu4ds/zive_logo_page-00001.jpg?updatedAt=1753357527846" 
                  alt="ZyveFit Logo" 
                  className="h-10 w-auto"
                />
                <span className="text-2xl font-bold">ZyveFit</span>
              </div>
              <p className="text-slate-400 leading-relaxed mb-6 max-w-md">
                Ancient wisdom perfected by intelligence, delivered at light speed. Your culture is your health advantage.
              </p>
              <div className="flex space-x-4">
                <Instagram className="w-6 h-6 text-slate-400 hover:text-pink-400 cursor-pointer transition-colors" />
                <Linkedin className="w-6 h-6 text-slate-400 hover:text-blue-400 cursor-pointer transition-colors" />
                <Globe className="w-6 h-6 text-slate-400 hover:text-green-400 cursor-pointer transition-colors" />
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Solutions</h4>
              <div className="space-y-3">
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">Individual Programs</a>
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">Corporate Wellness</a>
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">Cultural Nutrition</a>
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">AI Fitness</a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Company</h4>
              <div className="space-y-3">
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">About Us</a>
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">Our Science</a>
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">Success Stories</a>
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">Contact</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8">
            <div className="grid md:grid-cols-2 gap-4 items-center">
              <div>
                <p className="text-slate-400 text-sm">
                  © 2025 ZyveFit. All rights reserved. Honoring your heritage, perfecting your health.
                </p>
              </div>
              <div className="text-right">
                <p className="text-slate-400 text-sm">
                  Serving 9 countries with cultural intelligence
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-blue-800 text-white p-3 rounded-full shadow-lg hover:bg-blue-900 transition-colors z-50"
      >
        <ChevronDown className="w-6 h-6 transform rotate-180" />
      </button>
    </div>
  );
};

export default ZyveFitWebsite;