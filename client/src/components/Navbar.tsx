import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaDownload } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleDownload = () => {
    // Logic to download resume will go here
    alert('Resume download functionality will be implemented here');
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Collaboration', href: '#collaboration' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-primary/90 backdrop-blur-md border-b border-neon-blue/20' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a 
            href="#hero" 
            className="text-2xl font-bold font-montserrat tracking-wider text-text-primary group"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00f2fe] to-[#9d00ff]">
              JAWAD
            </span>
            <span className="text-[#e4e4e4] transition-all duration-300 group-hover:text-[#00f2fe]">
              .dev
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="nav-link relative overflow-hidden py-2 font-medium text-[#aaa6c3] hover:text-[#00f2fe] transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-[#00f2fe] after:to-[#9d00ff] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Resume Button */}
          <button
            onClick={handleDownload}
            className="hidden md:flex items-center px-5 py-2 bg-gradient-to-r from-[#00f2fe]/20 to-[#9d00ff]/20 text-[#e4e4e4] rounded-full border border-[#00f2fe]/30 hover:from-[#00f2fe]/30 hover:to-[#9d00ff]/30 hover:border-[#9d00ff]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#9d00ff]/20"
          >
            Resume <FaDownload className="ml-2" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-[#e4e4e4] focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 pb-2 overflow-hidden"
            >
              <div className="flex flex-col space-y-4">
                {navLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="py-2 font-medium text-[#aaa6c3] hover:text-[#00f2fe] transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <button
                  onClick={handleDownload}
                  className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-[#00f2fe]/20 to-[#9d00ff]/20 text-[#e4e4e4] rounded-full border border-[#00f2fe]/30"
                >
                  Resume <FaDownload className="ml-2" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
