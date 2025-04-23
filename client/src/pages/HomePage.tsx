import { useEffect } from 'react';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import SkillsSection from '../components/sections/SkillsSection';
import ExperienceSection from '../components/sections/ExperienceSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import CollaborationSection from '../components/sections/CollaborationSection';
import ContactSection from '../components/sections/ContactSection';
import Footer from '../components/sections/Footer';
import Navbar from '../components/Navbar';
import CustomCursor from '../components/CustomCursor';

const HomePage = () => {
  useEffect(() => {
    // Set page title and meta data
    document.title = 'Jawad Ahmad | AI Engineer & Backend Developer';
    
    // Add scroll behavior
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('.nav-link');
      
      let current = '';
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
          current = section.getAttribute('id') || '';
        }
      });
      
      navLinks.forEach((link) => {
        link.classList.remove('text-[#00f2fe]');
        const href = link.getAttribute('href');
        if (href && href === `#${current}`) {
          link.classList.add('text-[#00f2fe]');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Clean up event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className="bg-[#050816] text-[#e4e4e4] font-roboto overflow-x-hidden cursor-none">
      <CustomCursor />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <CollaborationSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default HomePage;
