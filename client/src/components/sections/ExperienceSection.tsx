import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const ExperienceSection = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#1d1836]/30"></div>
      
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
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00f2fe] to-[#9d00ff]">WORK EXPERIENCE</span>
            <div className="h-[1px] bg-gradient-to-r from-[#00f2fe]/0 via-[#00f2fe]/70 to-[#9d00ff]/0 mt-2 w-full"></div>
          </h2>
          <p className="text-[#aaa6c3] mt-4 max-w-2xl mx-auto">
            Professional journey and career highlights in AI and backend development.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 h-full w-[1px] bg-gradient-to-b from-[#00f2fe]/70 to-[#9d00ff]/70 transform -translate-x-1/2"></div>
          
          {/* Experience Item */}
          <motion.div 
            className="relative mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUpVariants}
          >
            <div className="flex flex-col md:flex-row items-center">
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-[#00f2fe] transform -translate-x-1/2 z-10 shadow-[0_0_10px_rgba(0,242,254,0.7)]"></div>
              
              {/* Content */}
              <div className="w-full md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0">
                <h3 className="text-xl font-bold text-[#e4e4e4]">AI/ML Engineer</h3>
                <p className="text-[#00f2fe] font-medium mb-2">DeveloperHub Software House</p>
                <div className="flex items-center justify-end text-[#aaa6c3] mb-2">
                  <FaCalendarAlt className="mr-2 text-[#9d00ff]" />
                  <span>2025 - Present</span>
                </div>
                <div className="flex items-center justify-end text-[#aaa6c3]">
                  <FaMapMarkerAlt className="mr-2 text-[#9d00ff]" />
                  <span>Remote (Islamabad)</span>
                </div>
              </div>
              
              <div className="w-full md:w-1/2 md:pl-12 bg-[#050816]/80 p-6 rounded-xl border border-[#00f2fe]/20 shadow-lg">
                <p className="text-[#aaa6c3] mb-4">
                  Working remotely as an AI/ML Engineer to develop cutting-edge solutions using artificial intelligence and machine learning technologies.
                </p>
                <ul className="list-disc list-inside text-[#aaa6c3] space-y-2">
                  <li>Developing predictive AI models for business intelligence applications</li>
                  <li>Implementing computer vision solutions for automated visual inspection systems</li>
                  <li>Creating and optimizing NLP models for text analysis and chatbot applications</li>
                  <li>Collaborating with cross-functional teams to integrate AI solutions into existing products</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;