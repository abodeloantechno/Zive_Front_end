import React, { useState } from 'react';
import { motion } from "framer-motion";
import { FaChevronDown } from 'react-icons/fa';

const Faq = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: 'How does ZyveFit\'s AI personalization work?',
      answer: 'Our hybrid AI analyzes your unique health data, preferences, and goals to deliver pragmatic, prescriptive recommendations. It adjusts your food and fitness solutions daily, offering seamless, actionable advice tailored specifically for you and your family.'
    },
    {
      question: 'What makes ZyveFit different from other health apps?',
      answer: 'ZyveFit is holistic, combining meditation, nutrition, and fitness in one platform. Unlike narrow health apps, we provide daily, actionable solutions based on your real needs, lifestyle, and motivation—no fads, no confusion, just clear science and support.'
    },
    {
      question: 'What kind of support and guidance do I get?',
      answer: 'Our team includes nutritionists with Precision Nutrition credentials and fitness experts certified by ACSM and ACE. You get personalized coaching, daily guidance, and a supportive community—we celebrate your wins and adapt to your changes.'
    },
    {
      question: 'Can ZyveFit help with chronic diseases?',
      answer: 'Yes! ZyveFit is built on the goal to empower every person to live life free from chronic disease. Our science-backed approach can help with lifestyle disease management through personalized nutrition, fitness, and wellness strategies.'
    },
    {
      question: 'What technology features does ZyveFit offer?',
      answer: 'ZyveFit includes wearable integration, voice-enabled support (Alexa, Google), AR-powered food scanning, social gamification, and microlearning features. All designed to make healthy living simple and engaging.'
    },
    {
      question: 'How quickly will I see results?',
      answer: 'Most users notice improvements in energy and focus within the first week. Physical changes typically appear within 2-4 weeks, with significant transformations over 8-12 weeks when following our personalized recommendations consistently.'
    }
  ];

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-md md:text-xl text-gray-600">
          Get answers to common questions about ZyveFit's holistic wellness approach.
          </p>
        </motion.div>

        <motion.div 
          className="space-y-4"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 }
              }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <motion.button
                className="w-full px-8 py-6 text-left focus:outline-none flex justify-between items-center"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                whileHover={{ backgroundColor: '#F3F4F6' }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openFaq === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaChevronDown className="w-5 h-5 text-gray-500" />
                </motion.div>
              </motion.button>
              <motion.div
                initial={false}
                animate={{
                  height: openFaq === index ? 'auto' : 0,
                  opacity: openFaq === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-8 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Faq;