"use client";

import { LuWallet } from "react-icons/lu";
import { PiCarProfile } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
import { motion } from "framer-motion";

// Individual card component with animation
const AnimatedCard = ({
  icon: Icon,
  title,
  description,
  iconBg,
  iconColor,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.6,
        delay: delay
      }}
      className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 p-6 md:p-7 lg:p-8 flex flex-col items-center text-center border border-gray-100 relative overflow-hidden"
    >
      {/* Background gradient on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-50 opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />

      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 15,
          duration: 0.8,
          delay: delay
        }}
        className={`flex items-center justify-center w-16 h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 rounded-full ${iconBg} ${iconColor} mb-4 md:mb-5 lg:mb-6 relative z-10`}
      >
        <Icon className="text-2xl md:text-3xl lg:text-4xl" />
      </motion.div>

      <motion.h3
        className="font-bold text-lg md:text-xl lg:text-2xl mb-3 md:mb-4 text-gray-800 relative z-10"
        whileHover={{ color: "#1e40af" }}
        transition={{ duration: 0.2 }}
      >
        {title}
      </motion.h3>

      <motion.p
        className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: delay + 0.5, duration: 0.5 }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

export default function InfoBlock() {
  const features = [
    {
      icon: CiLocationOn,
      title: "Always Available",
      description:
        "With our extensive network of vehicles across multiple locations, find the perfect ride whenever and wherever you need it. 24/7 availability means your mobility is never compromised.",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: PiCarProfile,
      title: "Ultimate Comfort",
      description:
        "Experience premium comfort with our meticulously maintained fleet. From plush interiors to smooth rides, every journey is designed to make you feel relaxed and refreshed.",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      icon: LuWallet,
      title: "Smart Savings",
      description:
        "Enjoy competitive pricing without compromising on quality. Our transparent pricing and exclusive deals ensure you get the best value for every mile of your journey.",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ staggerChildren: 0.2, delayChildren: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12"
        >
          {features.map((feature, index) => (
            <AnimatedCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              iconBg={feature.iconBg}
              iconColor={feature.iconColor}
              delay={index * 0.2}
            />
          ))}
        </motion.div>

        {/* Additional animated decorative elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center mt-12"
        >
          <motion.p
            className="text-gray-500 text-sm md:text-base"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            Join thousands of satisfied customers who trust us for their daily
            commute and travel needs
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}