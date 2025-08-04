import React from 'react';

const Stats = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {[
            { number: "10,000+", label: "Lives Transformed", color: "cyan" },
            { number: "98%", label: "Success Rate", color: "yellow" },
            { number: "24/7", label: "AI Support", color: "pink" },
            { number: "5+", label: "Years of Research", color: "cyan" }
          ].map((stat, index) => (
            <div key={index} className="text-white">
              <div className={`text-2xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-${stat.color}-400 to-${stat.color}-500 bg-clip-text text-transparent`}>
                {stat.number}
              </div>
              <div className="text-xl text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;