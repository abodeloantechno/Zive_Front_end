import React from 'react';
import { Star } from 'lucide-react';

const Trainers = () => {
  return (
    <section id="trainers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our <span className="bg-gradient-to-r from-cyan-400 to-yellow-400 bg-clip-text text-transparent">Expert Trainers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our certified trainers are passionate about helping you achieve your fitness goals safely and effectively.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "Sarah Johnson", specialty: "Strength Training", experience: "8 years", rating: 4.9 },
            { name: "Mike Chen", specialty: "HIIT & Cardio", experience: "6 years", rating: 4.8 },
            { name: "Emma Rodriguez", specialty: "Yoga & Wellness", experience: "10 years", rating: 5.0 }
          ].map((trainer, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className={`w-24 h-24 bg-gradient-to-r ${
                index === 0 ? 'from-cyan-400 to-cyan-500' : 
                index === 1 ? 'from-yellow-400 to-yellow-500' : 
                'from-pink-400 to-pink-500'
              } rounded-full mx-auto mb-6 flex items-center justify-center`}>
                <span className="text-white text-2xl font-bold">{trainer.name.split(' ').map(n => n[0]).join('')}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{trainer.name}</h3>
              <p className="text-gray-600 mb-2">{trainer.specialty}</p>
              <p className="text-sm text-gray-500 mb-4">{trainer.experience} experience</p>
              <div className="flex items-center justify-center">
                <Star className="text-yellow-400 fill-current" size={20} />
                <span className="ml-1 text-gray-700 font-semibold">{trainer.rating}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;