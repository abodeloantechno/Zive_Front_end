import React, { useState } from 'react';
import axios from 'axios';
import { 
  FaEnvelope,
  FaPhone,
  FaGlobe,
} from 'react-icons/fa';

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear field error when user starts typing
    if (fieldErrors[e.target.name]) {
      setFieldErrors({ ...fieldErrors, [e.target.name]: false });
    }
    setSuccess('');
  };

  const handleSubmit = async () => {
    try {
      // Validate fields and set errors
      const errors = {};
      if (!formData.name.trim()) errors.name = true;
      if (!formData.email.trim()) errors.email = true;
      if (!formData.phoneNumber.trim()) errors.phoneNumber = true;
      if (!formData.message.trim()) errors.message = true;

      if (Object.keys(errors).length > 0) {
        setFieldErrors(errors);
        return;
      }
      
      setLoading(true);
      setFieldErrors({});
      
      const response = await axios.post('http://localhost:8001/contact', formData);
      console.log(response.data);
      
      setSuccess('Message sent successfully!');
      
      setFormData({ name: '', email: '', phoneNumber: '', message: '' }); // Reset form
      setTimeout(() => {
        setSuccess('');
      }, 2000);
      
    } catch (error) {
      alert(error.response?.data?.error || 'Something went wrong!');
    } finally {
      setLoading(false);
    }
  };

  const getInputClassName = (fieldName) => {
    const baseClass = "w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent outline-none transition-all";
    if (fieldErrors[fieldName]) {
      return `${baseClass} border-red-500 focus:ring-red-400`;
    }
    return `${baseClass} border-gray-300 focus:ring-cyan-400`;
  };

  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Ready  <span className="bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">to transform?</span>
          </h2>
          <p className="text-md md:text-xl text-gray-600 max-w-3xl mx-auto">
          Have a question? Want to partner? We're here to help—always. Our team responds within 24 hours because your journey deserves respect and speed.
          </p>
        </div>
       
       
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-12">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-cyan-400 rounded-lg flex items-center justify-center flex-shrink-0">
              <FaGlobe className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
                <p className="text-gray-600">Online Serving the world</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
              <FaPhone className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">WhatsApp Message</h3>
                <p className="text-gray-600">+91-9080709466</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <FaEnvelope className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600">support@zyvefit.com</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 md:p-8 shadow-lg">
            <div className="space-y-6">
              {success && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                  {success}
                </div>
              )}
              
              <div>
                <input 
                  type="text" 
                  name='name'
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={getInputClassName('name')}
                />
              </div>
              <div>
                <input 
                  name='email'
                  type="email" 
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={getInputClassName('email')}
                />
              </div>
              <div>
                <input 
                  name='phoneNumber'
                  type="tel" 
                  placeholder="Your Phone"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className={getInputClassName('phoneNumber')}
                />
              </div>
              <div>
                <textarea 
                  name="message"
                  placeholder="Your Message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className={getInputClassName('message')}
                ></textarea>
              </div>
              <button 
                className="w-full bg-gradient-to-r from-cyan-400 to-pink-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;