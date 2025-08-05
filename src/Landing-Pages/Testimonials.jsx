import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Marketing Executive',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face',
      text: 'ZyveFit transformed my relationship with food. Lost 25 pounds and gained so much energy!',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Software Engineer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      text: 'The personalized approach made all the difference. Finally found a sustainable way to stay healthy.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Fitness Enthusiast',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      text: 'Science-based nutrition that actually works. My performance has improved dramatically.',
      rating: 5
    },
    {
      name: 'David Wilson',
      role: 'Business Owner',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      text: 'Amazing results in just 3 months. The support team is incredibly knowledgeable and helpful.',
      rating: 5
    },
    {
      name: 'Lisa Park',
      role: 'Teacher',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
      text: 'Finally found a program that fits my busy schedule. The results speak for themselves!',
      rating: 5
    },
    {
      name: 'James Thompson',
      role: 'Personal Trainer',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
      text: 'As a fitness professional, I can say ZyveFit is based on solid science and delivers real results.',
      rating: 5
    }
  ];

  // Update items per view based on screen size
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3);
      } else if (window.innerWidth >= 768) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  // Calculate total number of slides based on items per view
  const totalSlides = Math.ceil(testimonials.length / itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? totalSlides - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  // Reset current index if it exceeds total slides (happens on screen resize)
  useEffect(() => {
    if (currentIndex >= totalSlides) {
      setCurrentIndex(0);
    }
  }, [totalSlides, currentIndex]);

  // Create slides based on items per view
  const createSlides = () => {
    const slides = [];
    for (let i = 0; i < totalSlides; i++) {
      const startIndex = i * itemsPerView;
      const endIndex = Math.min(startIndex + itemsPerView, testimonials.length);
      const slideTestimonials = testimonials.slice(startIndex, endIndex);
      
      slides.push(
        <div key={`slide-${i}`} className="w-full flex-shrink-0">
          <div className={`grid gap-8 ${
            itemsPerView === 1 ? 'grid-cols-1' :
            itemsPerView === 2 ? 'grid-cols-1 md:grid-cols-2' :
            'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
          }`}>
            {slideTestimonials.map((testimonial, index) => (
              <div key={`testimonial-${startIndex + index}`} className="bg-white p-8 rounded-2xl transition-all duration-300 h-full">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4 object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-5 h-5 text-yellow-400 fill-current" 
                    />
                  ))}
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      );
    }
    return slides;
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-md md:text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from people who transformed their lives with ZyveFit.
          </p>
        </div>

        <div className="relative  md:px-16">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute hidden md:block left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-50 rounded-full p-2 transition-all duration-300 group"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute hidden md:block right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-50 rounded-full p-2 transition-all duration-300 group"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
          </button>

          {/* Testimonials Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {createSlides()}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {[...Array(totalSlides)].map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? 'bg-blue-600 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;