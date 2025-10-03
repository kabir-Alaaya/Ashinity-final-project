import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { IoCarSport } from "react-icons/io5";
import { FaRegCalendarCheck } from "react-icons/fa";
import { SiSpeedtest } from "react-icons/si";
import { RiUserHeartFill } from "react-icons/ri";

export default function Facts({ hasBackgroundImage = false }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      className={`${hasBackgroundImage ? 'bg-transparent' : 'bg-[#5937E0]'} py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative`}
    >
      {/* Optional background image container */}
      {hasBackgroundImage && (
        <div className="absolute inset-0 -z-10">
          <div className="w-full h-full bg-gray-200 opacity-20"></div>
        </div>
      )}
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Header Section */}
        <motion.div 
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-12 lg:mb-16"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            Facts In Numbers
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto"
          >
            Discover why thousands of customers trust us with their automotive needs. 
            Our commitment to excellence is reflected in these impressive numbers.
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          className="flex flex-col md:flex-row flex-wrap justify-center gap-4 sm:gap-6 md:gap-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          
          {/* Cars Stat */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={inView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="flex flex-row items-center justify-center bg-white p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 flex-1 min-w-[240px] max-w-md md:max-w-none"
          >
            <motion.div 
              initial={{ opacity: 0, rotate: -180, scale: 0 }}
              animate={inView ? { opacity: 1, rotate: 0, scale: 1 } : { opacity: 0, rotate: -180, scale: 0 }}
              transition={{ duration: 0.6, ease: "backOut" }}
              className="flex-shrink-0 mr-4 sm:mr-5 md:mr-6"
            >
              <div className="p-2 sm:p-3 bg-orange-500 rounded">
                <IoCarSport className="text-white text-xl sm:text-2xl" />
              </div>
            </motion.div>
            <div className="text-left">
              <motion.p 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900"
              >
                540+
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-gray-600 text-sm sm:text-base md:text-lg"
              >
                Cars
              </motion.p>
            </div>
          </motion.div>

          {/* Customers Stat */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={inView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="flex flex-row items-center justify-center bg-white p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 flex-1 min-w-[240px] max-w-md md:max-w-none"
          >
            <motion.div 
              initial={{ opacity: 0, rotate: -180, scale: 0 }}
              animate={inView ? { opacity: 1, rotate: 0, scale: 1 } : { opacity: 0, rotate: -180, scale: 0 }}
              transition={{ duration: 0.6, ease: "backOut", delay: 0.2 }}
              className="flex-shrink-0 mr-4 sm:mr-5 md:mr-6"
            >
              <div className="p-2 sm:p-3 bg-orange-500 rounded">
                <RiUserHeartFill className="text-white text-xl sm:text-2xl" />
              </div>
            </motion.div>
            <div className="text-left">
              <motion.p 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900"
              >
                20k+
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                className="text-gray-600 text-sm sm:text-base md:text-lg"
              >
                Customers
              </motion.p>
            </div>
          </motion.div>

          {/* Years Stat */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={inView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="flex flex-row items-center justify-center bg-white p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 flex-1 min-w-[240px] max-w-md md:max-w-none"
          >
            <motion.div 
              initial={{ opacity: 0, rotate: -180, scale: 0 }}
              animate={inView ? { opacity: 1, rotate: 0, scale: 1 } : { opacity: 0, rotate: -180, scale: 0 }}
              transition={{ duration: 0.6, ease: "backOut", delay: 0.4 }}
              className="flex-shrink-0 mr-4 sm:mr-5 md:mr-6"
            >
              <div className="p-2 sm:p-3 bg-orange-500 rounded">
                <FaRegCalendarCheck className="text-white text-xl sm:text-2xl" />
              </div>
            </motion.div>
            <div className="text-left">
              <motion.p 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900"
              >
                25+
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                className="text-gray-600 text-sm sm:text-base md:text-lg"
              >
                Years
              </motion.p>
            </div>
          </motion.div>

          {/* Miles Stat */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={inView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="flex flex-row items-center justify-center bg-white p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 flex-1 min-w-[240px] max-w-md md:max-w-none"
          >
            <motion.div 
              initial={{ opacity: 0, rotate: -180, scale: 0 }}
              animate={inView ? { opacity: 1, rotate: 0, scale: 1 } : { opacity: 0, rotate: -180, scale: 0 }}
              transition={{ duration: 0.6, ease: "backOut", delay: 0.6 }}
              className="flex-shrink-0 mr-4 sm:mr-5 md:mr-6"
            >
              <div className="p-2 sm:p-3 bg-orange-500 rounded">
                <SiSpeedtest className="text-white text-xl sm:text-2xl" />
              </div>
            </motion.div>
            <div className="text-left">
              <motion.p 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900"
              >
                20m+
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
                className="text-gray-600 text-sm sm:text-base md:text-lg"
              >
                Miles
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}