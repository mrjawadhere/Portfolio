import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Project } from '../lib/data';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, delay: index * 0.1 }
    }
  };

  return (
    <motion.div 
      className="project-card bg-[#050816]/80 border border-[#00f2fe]/20 rounded-xl overflow-hidden shadow-lg hover:shadow-[#00f2fe]/20 transition-all duration-300 transform hover:-translate-y-2 group"
      variants={cardVariants}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050816] to-transparent opacity-70"></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold font-montserrat text-[#e4e4e4] mb-2 group-hover:text-[#00f2fe] transition-colors duration-300">
          {project.title}
        </h3>
        
        <p className="text-[#aaa6c3] text-sm mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, techIndex) => (
            <span 
              key={techIndex} 
              className={`px-2 py-1 rounded-full text-xs ${
                techIndex % 2 === 0 
                  ? 'bg-[#00f2fe]/10 text-[#00f2fe]' 
                  : 'bg-[#9d00ff]/10 text-[#9d00ff]'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between">
          <motion.a 
            href={project.github} 
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00f2fe] text-sm font-medium hover:text-[#9d00ff] transition-colors duration-300 flex items-center"
            whileHover={{ x: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub className="mr-1" /> View Code
          </motion.a>
          <motion.a 
            href={project.demo} 
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#9d00ff] text-sm font-medium hover:text-[#00f2fe] transition-colors duration-300 flex items-center"
            whileHover={{ x: 2 }}
            whileTap={{ scale: 0.95 }}
          >
            Live Demo <FaExternalLinkAlt className="ml-1" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
