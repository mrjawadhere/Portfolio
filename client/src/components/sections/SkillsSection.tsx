import { motion } from 'framer-motion';
import SkillCard from '../SkillCard';
import { FaBrain, FaCode, FaServer, FaDatabase } from 'react-icons/fa';
import { SiTensorflow, SiPython } from 'react-icons/si';

const SkillsSection = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6 }
    }
  };

  const skills = [
    { title: 'Artificial Intelligence', icon: <FaBrain /> },
    { title: 'Python', icon: <SiPython /> },
    { title: 'TensorFlow', icon: <SiTensorflow /> },
    { title: 'Backend Development', icon: <FaServer /> },
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-[#050816]">
      <div className="absolute inset-0 bg-gradient-radial from-[#00f2fe]/5 to-transparent"></div>
      
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
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00f2fe] to-[#9d00ff]">TECHNICAL SKILLS</span>
            <div className="h-[1px] bg-gradient-to-r from-[#00f2fe]/0 via-[#00f2fe]/70 to-[#9d00ff]/0 mt-2 w-full"></div>
          </h2>
          <p className="text-[#aaa6c3] mt-4 max-w-2xl mx-auto">
            Core competencies that allow me to build intelligent and efficient systems.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SkillCard 
              key={index}
              title={skill.title}
              icon={skill.icon} 
              delay={index}
            />
          ))}
        </div>
        
        {/* Skills Tags */}
        <motion.div 
          className="mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUpVariants}
        >
          <h3 className="text-xl font-medium text-[#e4e4e4] mb-6">Additional Technologies</h3>
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 rounded-full text-sm bg-[#00f2fe]/10 border border-[#00f2fe]/30 text-[#00f2fe]">NumPy</span>
            <span className="px-3 py-1 rounded-full text-sm bg-[#9d00ff]/10 border border-[#9d00ff]/30 text-[#9d00ff]">Pandas</span>
            <span className="px-3 py-1 rounded-full text-sm bg-[#00f2fe]/10 border border-[#00f2fe]/30 text-[#00f2fe]">Scikit-learn</span>
            <span className="px-3 py-1 rounded-full text-sm bg-[#9d00ff]/10 border border-[#9d00ff]/30 text-[#9d00ff]">Keras</span>
            <span className="px-3 py-1 rounded-full text-sm bg-[#00f2fe]/10 border border-[#00f2fe]/30 text-[#00f2fe]">FastAPI</span>
            <span className="px-3 py-1 rounded-full text-sm bg-[#9d00ff]/10 border border-[#9d00ff]/30 text-[#9d00ff]">Flask</span>
            <span className="px-3 py-1 rounded-full text-sm bg-[#00f2fe]/10 border border-[#00f2fe]/30 text-[#00f2fe]">Computer Vision</span>
            <span className="px-3 py-1 rounded-full text-sm bg-[#9d00ff]/10 border border-[#9d00ff]/30 text-[#9d00ff]">NLP</span>
            <span className="px-3 py-1 rounded-full text-sm bg-[#00f2fe]/10 border border-[#00f2fe]/30 text-[#00f2fe]">PyTorch</span>
            <span className="px-3 py-1 rounded-full text-sm bg-[#9d00ff]/10 border border-[#9d00ff]/30 text-[#9d00ff]">Transformers</span>
            <span className="px-3 py-1 rounded-full text-sm bg-[#00f2fe]/10 border border-[#00f2fe]/30 text-[#00f2fe]">SQL</span>
            <span className="px-3 py-1 rounded-full text-sm bg-[#9d00ff]/10 border border-[#9d00ff]/30 text-[#9d00ff]">Docker</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;