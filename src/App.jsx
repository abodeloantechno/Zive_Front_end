import React, { useState, useEffect } from 'react';
import Navigation from './Landing-Pages/Navbar';
import Home from './Landing-Pages/Home';
import About from './Landing-Pages/About';
import Process from './Landing-Pages/Process';
import Testimonials from './Landing-Pages/Testimonials';
import Programs from './Landing-Pages/Programs';
import HowItWorksPage from './Landing-Pages/HowItWorksPage'
import Stats from './Landing-Pages/Stats';
import Faq from './Landing-Pages/Faq';
import Contact from './Landing-Pages/Contact';
import Gallery from './Landing-Pages/Gallery';
import Footer from './Landing-Pages/Footer';
import WhatsAppFloat from './Landing-Pages/WhatsAppFloat'

const App = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation scrollToSection={scrollToSection} />
    
      <Gallery scrollToSection={scrollToSection} />
      <About />
      <Process scrollToSection={scrollToSection} />
      <Programs />
      <HowItWorksPage />
      <Stats />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
      {/* WhatsApp Floating Button */}
      <WhatsAppFloat 
        phoneNumber="9080709466" // Replace with your actual phone number
        message="Hello! I'd like to know more about your services."
      />
    </div>
  );
};

export default App;


// import React from 'react'
// import HomepageHero from './ZyveFitWebsite'
// import Website1 from './Website1'
// import Website2 from './Website2'
// import Website3 from './Website3'
// import Website4 from './Website4'
// import Website5 from './Website5'
// import Website6 from './Website6'
// import Website7 from './Website7'
// import Website8 from './Website8'
// import Website9 from './Website9'
// import Website10 from './Website10'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Website from './Website'


// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route path='/' element={< HomepageHero />} />
//           <Route path='/0' element={< Website />} />
//           <Route path='/1' element={< Website1 />} />
//           <Route path='/2' element={< Website2 />} />
//           <Route path='/3' element={< Website3 />} />
//           <Route path='/4' element={< Website4 />} />
//           <Route path='/5' element={< Website5 />} />
//           <Route path='/6' element={< Website6 />} />
//           <Route path='/7' element={< Website7 />} />
//           <Route path='/8' element={< Website8 />} />
//           <Route path='/9' element={< Website9 />} />
//           <Route path='/10' element={< Website10 />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }

// export default App


