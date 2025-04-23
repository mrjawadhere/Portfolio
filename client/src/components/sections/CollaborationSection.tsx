import { motion } from 'framer-motion';
import { FaRobot, FaBrain, FaProjectDiagram, FaArrowRight } from 'react-icons/fa';

const CollaborationSection = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="collaboration" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-[#9d00ff]/5 to-transparent"></div>
      
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
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00f2fe] to-[#9d00ff]">COLLABORATION</span>
            <div className="h-[1px] bg-gradient-to-r from-[#00f2fe]/0 via-[#00f2fe]/70 to-[#9d00ff]/0 mt-2 w-full"></div>
          </h2>
          <p className="text-[#aaa6c3] mt-4 max-w-2xl mx-auto">
            I'm passionate about collaborating on innovative AI projects and sharing knowledge with fellow developers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Collaboration Image */}
          <motion.div 
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUpVariants}
          >
            <div className="relative rounded-lg overflow-hidden border border-[#9d00ff]/30 shadow-xl shadow-[#9d00ff]/10">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00f2fe]/20 to-[#9d00ff]/20 mix-blend-overlay"></div>
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop" 
                alt="Collaboration Visualization" 
                className="w-full h-auto object-cover" 
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-[#00f2fe]/20 rounded-full"></div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 border border-[#9d00ff]/20 rounded-full"></div>
          </motion.div>

          {/* Collaboration Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUpVariants}
          >
            <h3 className="text-2xl font-montserrat font-bold mb-6 text-[#e4e4e4]">
              Let's Build Something Amazing Together
            </h3>
            
            <p className="text-[#aaa6c3] mb-6">
              I'm enthusiastic about collaborating on AI agent projects and exploring the frontiers of artificial intelligence. My interests span from machine learning models to practical AI applications that solve real-world problems.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#00f2fe]/10 mr-4">
                  <FaRobot className="text-[#00f2fe] text-xl" />
                </div>
                <div>
                  <h4 className="font-medium text-lg text-[#e4e4e4] mb-1">AI Agent Development</h4>
                  <p className="text-[#aaa6c3]">Interested in creating intelligent agents that can perceive, reason, and act autonomously to solve complex tasks.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#9d00ff]/10 mr-4">
                  <FaBrain className="text-[#9d00ff] text-xl" />
                </div>
                <div>
                  <h4 className="font-medium text-lg text-[#e4e4e4] mb-1">Machine Learning Research</h4>
                  <p className="text-[#aaa6c3]">Open to research collaborations exploring novel machine learning techniques and applications.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#00f2fe]/10 mr-4">
                  <FaProjectDiagram className="text-[#00f2fe] text-xl" />
                </div>
                <div>
                  <h4 className="font-medium text-lg text-[#e4e4e4] mb-1">Open Source Contributions</h4>
                  <p className="text-[#aaa6c3]">Eager to contribute to open-source AI and backend development projects that benefit the wider community.</p>
                </div>
              </div>
            </div>

            <motion.a 
              href="#contact" 
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-[#00f2fe] to-[#9d00ff] rounded-full font-medium text-primary hover:shadow-lg hover:shadow-[#9d00ff]/30 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Collaborate <FaArrowRight className="ml-2" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CollaborationSection;
