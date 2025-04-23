import { motion } from 'framer-motion';
import { FaGraduationCap, FaBrain, FaUsers, FaArrowRight } from 'react-icons/fa';
import neuralNetworkSvg from '../../assets/backgrounds/neural-network.svg';

const AboutSection = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUpVariants}
        >
          <h2 className="text-3xl font-bold font-montserrat inline-block relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00f2fe] to-[#9d00ff]">ABOUT ME</span>
            <div className="h-[1px] bg-gradient-to-r from-[#00f2fe]/0 via-[#00f2fe]/70 to-[#9d00ff]/0 mt-2 w-full"></div>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* About Image */}
          <motion.div 
            className="relative order-2 md:order-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUpVariants}
          >
            <div className="relative rounded-lg overflow-hidden border border-[#00f2fe]/30 shadow-xl shadow-[#9d00ff]/10 transform md:rotate-3 hover:rotate-0 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00f2fe]/20 to-[#9d00ff]/20 mix-blend-overlay"></div>
              <img 
                src={neuralNetworkSvg} 
                alt="Futuristic Visualization" 
                className="w-full h-auto object-cover" 
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 border-2 border-[#9d00ff]/30 rounded-lg transform rotate-12"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 border-2 border-[#00f2fe]/30 rounded-lg transform -rotate-12"></div>
          </motion.div>

          {/* About Content */}
          <motion.div 
            className="order-1 md:order-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUpVariants}
          >
            <h3 className="text-2xl font-montserrat font-bold mb-6 text-[#e4e4e4]">
              AI Engineer & Backend Developer
            </h3>
            
            <p className="text-[#aaa6c3] mb-4">
              I'm Jawad Ahmad, a passionate AI Engineer and Backend Developer currently pursuing a B.S. in Software Engineering at Government College University Faisalabad (2024–2028).
            </p>
            
            <p className="text-[#aaa6c3] mb-6">
              My focus lies in exploring the fascinating realms of Artificial Intelligence, AI-Agents, and Data Science. I'm driven by the potential of intelligent systems to solve complex problems and enhance human capabilities.
            </p>

            {/* Key Information */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#00f2fe]/10 mr-4 mt-1">
                  <FaGraduationCap className="text-[#00f2fe]" />
                </div>
                <div>
                  <h4 className="font-medium text-[#e4e4e4]">Education</h4>
                  <p className="text-[#aaa6c3]">B.S. in Software Engineering, GCUF (2024–2028)</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#9d00ff]/10 mr-4 mt-1">
                  <FaBrain className="text-[#9d00ff]" />
                </div>
                <div>
                  <h4 className="font-medium text-[#e4e4e4]">Learning Focus</h4>
                  <p className="text-[#aaa6c3]">Artificial Intelligence, AI-Agents, Data Science</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#00f2fe]/10 mr-4 mt-1">
                  <FaUsers className="text-[#00f2fe]" />
                </div>
                <div>
                  <h4 className="font-medium text-[#e4e4e4]">Collaboration</h4>
                  <p className="text-[#aaa6c3]">Open to AI agent projects and research opportunities</p>
                </div>
              </div>
            </div>

            {/* Skills */}
            <h4 className="font-medium text-lg text-[#e4e4e4] mb-4">Technical Skills</h4>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-3 py-1 rounded-full text-sm bg-[#00f2fe]/10 border border-[#00f2fe]/30 text-[#00f2fe]">Python</span>
              <span className="px-3 py-1 rounded-full text-sm bg-[#9d00ff]/10 border border-[#9d00ff]/30 text-[#9d00ff]">TensorFlow</span>
              <span className="px-3 py-1 rounded-full text-sm bg-[#00f2fe]/10 border border-[#00f2fe]/30 text-[#00f2fe]">FastAPI</span>
              <span className="px-3 py-1 rounded-full text-sm bg-[#9d00ff]/10 border border-[#9d00ff]/30 text-[#9d00ff]">Machine Learning</span>
              <span className="px-3 py-1 rounded-full text-sm bg-[#00f2fe]/10 border border-[#00f2fe]/30 text-[#00f2fe]">Computer Vision</span>
              <span className="px-3 py-1 rounded-full text-sm bg-[#9d00ff]/10 border border-[#9d00ff]/30 text-[#9d00ff]">NLP</span>
            </div>

            <motion.a 
              href="#contact" 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#00f2fe]/20 to-[#9d00ff]/20 text-[#e4e4e4] rounded-full border border-[#00f2fe]/30 hover:from-[#00f2fe]/30 hover:to-[#9d00ff]/30 hover:border-[#9d00ff]/50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Connect <FaArrowRight className="ml-2" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
