import React from 'react';
import Navbar from './components/Navbar/Navbar.js';
import Footer from './components/Footer/Footer.js';
import MemberCard from './components/MemberCard/MemberCard.js';
import './App.css';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';




function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = window.innerHeight * 0.35;
      const opacity = Math.max(0, 1 - scrollY / maxScroll);

      console.log(`scrollY: ${scrollY}, opacity: ${opacity}`); // 👈 this line


      document.documentElement.style.setProperty('--header-opacity', opacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>

      <Navbar />

      <header id="about" data-aos="fade-down">

        <h1>Meet the F!ROSH Orientation Committee</h1>
        <p>
          Welcome to UofT Engineering <span className="bounce">💜</span>
        </p>
      </header>

      <MemberCard />
      
      <Footer />
    </div>
  );
}

export default App;
