import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';
import ParticleBackground from '../ParticleBackground';
import aiVisualizationSvg from '../../assets/backgrounds/ai-visualization.svg';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#9d00ff]/10 rounded-full filter blur-3xl animate-blob" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-72 h-72 bg-[#00f2fe]/10 rounded-full filter blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute top-2/3 left-1/3 w-60 h-60 bg-[#9d00ff]/5 rounded-full filter blur-3xl animate-blob animation-delay-4000" />

      <div className="container mx-auto px-6 z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p variants={itemVariants} className="text-[#00f2fe] font-medium mb-4">
              Hello, I'm
            </motion.p>
            <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold font-montserrat mb-4">
              <span className="text-[#e4e4e4]">Jawad</span>{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00f2fe] to-[#9d00ff]">Ahmad</span>
            </motion.h1>
            <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl text-[#aaa6c3] font-medium mb-6">
              AI Engineer & Backend Developer
            </motion.h2>

            <motion.p variants={itemVariants} className="text-[#aaa6c3] text-lg mb-8">
              Building intelligent systems with code and curiosity
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <motion.a
                href="#projects"
                className="px-8 py-3 bg-gradient-to-r from-[#00f2fe] to-[#9d00ff] rounded-full font-medium text-primary hover:shadow-lg hover:shadow-[#9d00ff]/30 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
              <motion.a
                href="#contact"
                className="px-8 py-3 bg-transparent border border-[#00f2fe] rounded-full font-medium text-[#e4e4e4] hover:bg-[#00f2fe]/10 hover:border-[#9d00ff] transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
            </motion.div>
          </motion.div>

          <div className="hidden md:flex justify-center">
            <motion.div
              className="relative w-72 h-72"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {/* Animated decorative elements */}
              <div className="absolute inset-0 rounded-full border-2 border-[#00f2fe]/30 animate-pulse" />
              <div className="absolute inset-4 rounded-full border border-[#9d00ff]/40 animate-pulse" style={{ animationDelay: '1s' }} />
              <div className="absolute inset-8 rounded-full border border-[#00f2fe]/50 animate-pulse" style={{ animationDelay: '2s' }} />

              {/* Abstract tech visualization */}
              <motion.div
                className="absolute inset-12 rounded-full bg-gradient-to-br from-[#00f2fe]/20 to-[#9d00ff]/20 flex items-center justify-center"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <img 
                  src={aiVisualizationSvg} 
                  alt="AI Visualization" 
                  className="w-full h-full object-cover rounded-full opacity-80" 
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <p className="text-[#aaa6c3] text-sm mb-2">Scroll Down</p>
          <FaArrowDown className="w-6 h-6 text-[#00f2fe]" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
