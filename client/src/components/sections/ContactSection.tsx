import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaGithub, FaLinkedinIn, FaTwitter, FaInstagram, FaPaperPlane } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { apiRequest } from '../../lib/queryClient';
import { useToast } from '../../hooks/use-toast';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactSection = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>();
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6 }
    }
  };

  const onSubmit = async (data: FormData) => {
    try {
      await apiRequest('POST', '/api/contact', data);
      setIsSuccess(true);
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
        variant: "default",
      });
      reset();
      setTimeout(() => setIsSuccess(false), 3000);
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later or contact me through other means.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-20 relative bg-[#1d1836]/30">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-5"></div>
      
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
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00f2fe] to-[#9d00ff]">GET IN TOUCH</span>
            <div className="h-[1px] bg-gradient-to-r from-[#00f2fe]/0 via-[#00f2fe]/70 to-[#9d00ff]/0 mt-2 w-full"></div>
          </h2>
          <p className="text-[#aaa6c3] mt-4 max-w-2xl mx-auto">
            Have a project idea or want to collaborate? I'd love to hear from you. Let's turn ideas into reality!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div 
            className="bg-[#050816]/80 p-8 rounded-xl border border-[#00f2fe]/20 shadow-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUpVariants}
          >
            <h3 className="text-2xl font-montserrat font-bold mb-6 text-[#e4e4e4]">Contact Information</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#00f2fe]/10 mr-4">
                  <FaWhatsapp className="text-[#00f2fe] text-xl" />
                </div>
                <div>
                  <h4 className="font-medium text-[#e4e4e4]">WhatsApp</h4>
                  <p className="text-[#aaa6c3]">+92 xxx xxx xxxx</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#9d00ff]/10 mr-4">
                  <FaGithub className="text-[#9d00ff] text-xl" />
                </div>
                <div>
                  <h4 className="font-medium text-[#e4e4e4]">GitHub</h4>
                  <a 
                    href="https://github.com/mrjawadhere" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[#9d00ff] hover:text-[#00f2fe] transition-colors duration-300"
                  >
                    github.com/mrjawadhere
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#00f2fe]/10 mr-4">
                  <FaLinkedinIn className="text-[#00f2fe] text-xl" />
                </div>
                <div>
                  <h4 className="font-medium text-[#e4e4e4]">LinkedIn</h4>
                  <a 
                    href="https://www.linkedin.com/in/jwad" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[#00f2fe] hover:text-[#9d00ff] transition-colors duration-300"
                  >
                    linkedin.com/in/jwad
                  </a>
                </div>
              </div>
            </div>
            
            {/* Social Media Links */}
            <h4 className="font-medium text-lg text-[#e4e4e4] mb-4">Connect With Me</h4>
            <div className="flex space-x-4">
              <motion.a 
                href="https://github.com/mrjawadhere" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-[#050816] border border-[#00f2fe]/30 text-[#e4e4e4] hover:text-[#00f2fe] hover:border-[#00f2fe] transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub className="text-xl" />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/jwad" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-[#050816] border border-[#9d00ff]/30 text-[#e4e4e4] hover:text-[#9d00ff] hover:border-[#9d00ff] transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedinIn className="text-xl" />
              </motion.a>
              <motion.a 
                href="#" 
                className="w-12 h-12 flex items-center justify-center rounded-full bg-[#050816] border border-[#00f2fe]/30 text-[#e4e4e4] hover:text-[#00f2fe] hover:border-[#00f2fe] transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTwitter className="text-xl" />
              </motion.a>
              <motion.a 
                href="#" 
                className="w-12 h-12 flex items-center justify-center rounded-full bg-[#050816] border border-[#9d00ff]/30 text-[#e4e4e4] hover:text-[#9d00ff] hover:border-[#9d00ff] transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaInstagram className="text-xl" />
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="bg-[#050816]/80 p-8 rounded-xl border border-[#9d00ff]/20 shadow-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUpVariants}
          >
            <h3 className="text-2xl font-montserrat font-bold mb-6 text-[#e4e4e4]">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-[#aaa6c3] mb-2">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className={`w-full px-4 py-3 bg-[#1d1836]/50 border ${errors.name ? 'border-red-500' : 'border-[#00f2fe]/20'} rounded-lg text-[#e4e4e4] focus:outline-none focus:border-[#00f2fe]/50 focus:ring-1 focus:ring-[#00f2fe]/30 transition-all duration-300`}
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-[#aaa6c3] mb-2">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className={`w-full px-4 py-3 bg-[#1d1836]/50 border ${errors.email ? 'border-red-500' : 'border-[#00f2fe]/20'} rounded-lg text-[#e4e4e4] focus:outline-none focus:border-[#00f2fe]/50 focus:ring-1 focus:ring-[#00f2fe]/30 transition-all duration-300`}
                  {...register("email", { 
                    required: "Email is required", 
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-[#aaa6c3] mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className={`w-full px-4 py-3 bg-[#1d1836]/50 border ${errors.subject ? 'border-red-500' : 'border-[#00f2fe]/20'} rounded-lg text-[#e4e4e4] focus:outline-none focus:border-[#00f2fe]/50 focus:ring-1 focus:ring-[#00f2fe]/30 transition-all duration-300`}
                  {...register("subject", { required: "Subject is required" })}
                />
                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-[#aaa6c3] mb-2">Your Message</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  className={`w-full px-4 py-3 bg-[#1d1836]/50 border ${errors.message ? 'border-red-500' : 'border-[#00f2fe]/20'} rounded-lg text-[#e4e4e4] focus:outline-none focus:border-[#00f2fe]/50 focus:ring-1 focus:ring-[#00f2fe]/30 transition-all duration-300 resize-none`}
                  {...register("message", { required: "Message is required" })}
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
              </div>
              
              <motion.button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-3 flex items-center justify-center ${
                  isSuccess 
                    ? 'bg-green-500' 
                    : 'bg-gradient-to-r from-[#00f2fe] to-[#9d00ff]'
                } rounded-lg font-medium text-primary hover:shadow-lg hover:shadow-[#9d00ff]/30 transition-all duration-300`}
                whileHover={!isSubmitting && !isSuccess ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting && !isSuccess ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? (
                  <span className="inline-flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : isSuccess ? (
                  <span className="inline-flex items-center">
                    Message Sent!
                    <svg className="ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </span>
                ) : (
                  <span className="inline-flex items-center">
                    Send Message <FaPaperPlane className="ml-2" />
                  </span>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
