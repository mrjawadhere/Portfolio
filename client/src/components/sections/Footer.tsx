import { motion } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Collaboration', href: '#collaboration' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#050816] py-8 border-t border-[#00f2fe]/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#hero" className="text-2xl font-bold font-montserrat text-[#e4e4e4]">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00f2fe] to-[#9d00ff]">JAWAD</span>
              <span className="text-[#e4e4e4]">.dev</span>
            </a>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8 mb-4 md:mb-0">
            {navLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href} 
                className="text-[#aaa6c3] hover:text-[#00f2fe] transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <motion.button
            onClick={scrollToTop}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#00f2fe]/10 text-[#00f2fe] hover:bg-[#00f2fe]/20 transition-all duration-300"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaArrowUp />
          </motion.button>
        </div>
        
        <div className="h-[1px] bg-gradient-to-r from-[#00f2fe]/0 via-[#00f2fe]/70 to-[#9d00ff]/0 my-6 mx-auto"></div>
        
        <div className="text-center text-[#aaa6c3] text-sm">
          <p>&copy; {new Date().getFullYear()} Jawad Ahmad. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
