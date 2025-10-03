import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { IoLogoFacebook } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineMail } from "react-icons/hi";
import { LuPhone } from "react-icons/lu";

// Animation variants with proper typing
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      duration: 0.5
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const socialIconVariants: Variants = {
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  },
  tap: {
    scale: 0.95
  }
};

const buttonVariants: Variants = {
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  },
  tap: {
    scale: 0.98
  }
};

const linkVariants: Variants = {
  hover: {
    x: 5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
};

export default function Footer() {
  return (
    <motion.footer 
      className="bg-gray-900 text-white pt-12 pb-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          
          {/* Company Info */}
          <motion.div className="lg:col-span-1" variants={itemVariants}>
            <motion.div 
              className="flex items-center mb-4"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a href="#" className="flex items-center space-x-3">
                <motion.img 
                  src="./kay-autos-logo.png" 
                  alt="kay-autos-logo" 
                  className="w-12 h-12 object-contain"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                />
                <span className="text-xl font-bold text-orange-500">Car Rental</span>
              </a>
            </motion.div>
            <motion.p 
              className="text-gray-300 mb-6 leading-relaxed"
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
              necessitatibus velit quisquam quo dignissimos, ratione vel
              consequuntur reiciendis quod molestias ex optio quia labore deserunt.
            </motion.p>
            <motion.div 
              className="flex space-x-4"
            >
              <motion.a 
                href="#" 
                className="bg-gray-800 hover:bg-orange-500 p-3 rounded-lg transition-colors duration-300"
                variants={socialIconVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <IoLogoFacebook className="text-xl" />
              </motion.a>
              <motion.a 
                href="#" 
                className="bg-gray-800 hover:bg-orange-500 p-3 rounded-lg transition-colors duration-300"
                variants={socialIconVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <FaInstagramSquare className="text-xl" />
              </motion.a>
              <motion.a 
                href="#" 
                className="bg-gray-800 hover:bg-orange-500 p-3 rounded-lg transition-colors duration-300"
                variants={socialIconVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <FaSquareXTwitter className="text-xl" />
              </motion.a>
              <motion.a 
                href="#" 
                className="bg-gray-800 hover:bg-orange-500 p-3 rounded-lg transition-colors duration-300"
                variants={socialIconVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <IoLogoYoutube className="text-xl" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Contact Information */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <motion.h3 
              className="text-lg font-semibold mb-4 text-orange-500"
            >
              Contact Info
            </motion.h3>
            
            <motion.div 
              className="flex items-start space-x-3"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <CiLocationOn className="bg-orange-500 rounded p-1 text-white text-2xl flex-shrink-0 mt-1" />
              <div>
                <p className="font-medium text-gray-300">Address</p>
                <p className="text-gray-400">Oxford Ave. Cary, NC 27511</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-start space-x-3"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <HiOutlineMail className="bg-orange-500 rounded p-1 text-white text-2xl flex-shrink-0 mt-1" />
              <div>
                <p className="font-medium text-gray-300">Email</p>
                <p className="text-gray-400">nwiger@yahoo.com</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-start space-x-3"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <LuPhone className="bg-orange-500 rounded p-1 text-white text-2xl flex-shrink-0 mt-1" />
              <div>
                <p className="font-medium text-gray-300">Phone</p>
                <p className="text-gray-400">+537 547-6401</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Useful Links */}
          <motion.div variants={itemVariants}>
            <motion.h3 
              className="text-lg font-semibold mb-4 text-orange-500"
            >
              Useful Links
            </motion.h3>
            <ul className="space-y-3">
              {['About us', 'Contact us', 'Gallery', 'Blog', 'F.A.Q'].map((link) => (
                <motion.li key={link}>
                  <motion.a 
                    href="#" 
                    className="text-gray-300 hover:text-orange-500 transition-colors duration-300 flex items-center"
                    variants={linkVariants}
                    whileHover="hover"
                  >
                    {link}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Vehicles & Download */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <div>
              <motion.h3 
                className="text-lg font-semibold mb-4 text-orange-500"
              >
                Vehicles
              </motion.h3>
              <ul className="space-y-3">
                {['Sedan', 'Cabriolet', 'Pickup', 'Minivan', 'SUV'].map((vehicle) => (
                  <motion.li key={vehicle}>
                    <motion.a 
                      href="#" 
                      className="text-gray-300 hover:text-orange-500 transition-colors duration-300 flex items-center"
                      variants={linkVariants}
                      whileHover="hover"
                    >
                      {vehicle}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div>
              <motion.h3 
                className="text-lg font-semibold mb-4 text-orange-500"
              >
                Download App
              </motion.h3>
              <motion.div 
                className="flex space-x-3"
              >
                <motion.button 
                  className="bg-gray-800 hover:bg-orange-500 text-white px-4 py-2 rounded-lg transition-colors duration-300"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  App Store
                </motion.button>
                <motion.button 
                  className="bg-gray-800 hover:bg-orange-500 text-white px-4 py-2 rounded-lg transition-colors duration-300"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  Google Play
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-gray-700 pt-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.p 
            className="text-center text-gray-400"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            &copy; {new Date().getFullYear()} Car Rental. Design by Kabitech Solutions
          </motion.p>
        </motion.div>
      </div>
    </motion.footer>
  );
}