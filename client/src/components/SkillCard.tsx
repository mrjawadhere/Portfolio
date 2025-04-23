import { motion } from 'framer-motion';
import { IconType } from 'react-icons';

interface SkillCardProps {
  title: string;
  icon: React.ReactNode;
  delay?: number;
}

const SkillCard = ({ title, icon, delay = 0 }: SkillCardProps) => {
  return (
    <motion.div
      className="bg-[#0d1117] rounded-lg p-6 flex flex-col items-center justify-center shadow-lg border border-[#1d2636]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 242, 254, 0.3)' }}
    >
      <div className="text-4xl mb-4 text-[#00f2fe]">
        {icon}
      </div>
      <h3 className="text-sm text-center text-[#e4e4e4] font-medium">
        {title}
      </h3>
    </motion.div>
  );
};

export default SkillCard;