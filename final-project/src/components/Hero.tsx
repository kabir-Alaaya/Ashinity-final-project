

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center py-16 px-4 md:px-8 overflow-hidden bg-transparent">
      {/* Background with gradient overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-purple-900/70 via-[#5937E0]/70 to-indigo-800/70 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      />
      
      <motion.div 
        className="absolute inset-0 bg-[url('/hero-bg.png')] bg-cover bg-center bg-no-repeat opacity-20 z-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.2 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <motion.div 
          className="flex flex-col lg:flex-row gap-8 lg:gap-14 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.2, duration: 0.8 }}
        >
          {/* Text Content */}
          <motion.div 
            className="w-full lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl md:py-14 font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Experience the road <br/>
              <motion.span 
                className="text-[#FF9E0C]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                like never before
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-lg text-white text-opacity-90 mb-8 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              Discover the perfect car for your next adventure. With our premium fleet and exceptional service, we make every journey unforgettable.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            >
              <motion.button 
                className="bg-[#FF9E0C] hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                View All Cars
              </motion.button>
              <motion.button 
                className="bg-transparent hover:bg-white/10 border-2 border-white text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-3 gap-6 mt-12 lg:text-left md:text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ staggerChildren: 0.2, duration: 0.8, delay: 0.6 }}
            >
              {[
                { number: "200+", label: "Vehicles" },
                { number: "24/7", label: "Support" },
                { number: "50+", label: "Locations" }
              ].map((stat, index) => (
                <motion.div 
                  key={stat.number}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.2 }
                  }}
                >
                  <h3 className="text-2xl font-bold text-[#FF9E0C]">{stat.number}</h3>
                  <p className="text-white text-opacity-80">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Booking Form */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20 shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              <motion.h2 
                className="text-2xl font-bold text-white mb-6 text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 1 }}
              >
                Book Your Car
              </motion.h2>
              
              <motion.form 
                className="space-y-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ staggerChildren: 0.1, duration: 0.6, delay: 1.2 }}
              >
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 1.2 }}
                >
                  <label className="block text-white text-opacity-90 mb-2 font-medium">Car Type</label>
                  <select className="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#FF9E0C]">
                    <option value="" className="text-gray-800">Select Car Type</option>
                    <option value="sedan" className="text-gray-800">Sedan</option>
                    <option value="cabriolet" className="text-gray-800">Cabriolet</option>
                    <option value="pickup" className="text-gray-800">Pickup</option>
                    <option value="suv" className="text-gray-800">SUV</option>
                    <option value="minivan" className="text-gray-800">Minivan</option>
                  </select>
                </motion.div>
                
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 gap-5"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 1.3 }}
                >
                  <div>
                    <label className="block text-white text-opacity-90 mb-2 font-medium">Pickup Location</label>
                    <select className="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#FF9E0C]">
                      <option value="" className="text-gray-800">Select Location</option>
                      <option value="chicago" className="text-gray-800">Chicago</option>
                      <option value="miami" className="text-gray-800">Miami</option>
                      <option value="iowa" className="text-gray-800">Iowa</option>
                      <option value="lagos" className="text-gray-800">Lagos</option>
                      <option value="new_york" className="text-gray-800">New York</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-white text-opacity-90 mb-2 font-medium">Return Location</label>
                    <select className="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#FF9E0C]">
                      <option value="" className="text-gray-800">Select Location</option>
                      <option value="hawaii" className="text-gray-800">Hawaii</option>
                      <option value="canada" className="text-gray-800">Canada</option>
                      <option value="russia" className="text-gray-800">Russia</option>
                      <option value="china" className="text-gray-800">China</option>
                      <option value="south_africa" className="text-gray-800">South Africa</option>
                    </select>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 gap-5"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 1.4 }}
                >
                  <div>
                    <label className="block text-white text-opacity-90 mb-2 font-medium">Pickup Date</label>
                    <input 
                      type="date" 
                      className="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#FF9E0C]" 
                    />
                  </div>
                  <div>
                    <label className="block text-white text-opacity-90 mb-2 font-medium">Return Date</label>
                    <input 
                      type="date" 
                      className="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#FF9E0C]" 
                    />
                  </div>
                </motion.div>
                
                <motion.button 
                  className="w-full bg-[#FF9E0C] hover:bg-orange-600 text-white font-semibold py-4 rounded-lg transition-all duration-300 mt-4 shadow-lg hover:shadow-xl cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 1.5 }}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Book Now
                </motion.button>
              </motion.form>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}