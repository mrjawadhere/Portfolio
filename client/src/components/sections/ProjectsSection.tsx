import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import ProjectCard from '../ProjectCard';
import { projects } from '../../lib/data';
import techPatternSvg from '../../assets/backgrounds/tech-pattern.svg';

const ProjectsSection = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6 }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <section id="projects" className="py-20 relative bg-[#1d1836]/30">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{ backgroundImage: `url(${techPatternSvg})` }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUpVariants}
        >
          <h2 className="text-3xl font-bold font-montserrat inline-block relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00f2fe] to-[#9d00ff]">PROJECTS</span>
            <div className="h-[1px] bg-gradient-to-r from-[#00f2fe]/0 via-[#00f2fe]/70 to-[#9d00ff]/0 mt-2 w-full"></div>
          </h2>
          <p className="text-[#aaa6c3] mt-4 max-w-2xl mx-auto">
            Showcasing my work in AI and backend development. Each project represents my passion for building intelligent and efficient systems.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </motion.div>

        {/* More Projects Button */}
        <motion.div 
          className="text-center mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUpVariants}
        >
          <motion.a 
            href="https://github.com/mrjawadhere" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-[#00f2fe]/20 to-[#9d00ff]/20 text-[#e4e4e4] rounded-full border border-[#00f2fe]/30 hover:from-[#00f2fe]/30 hover:to-[#9d00ff]/30 hover:border-[#9d00ff]/50 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View More on GitHub <FaGithub className="ml-2" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
