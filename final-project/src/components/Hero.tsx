export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center py-16 px-4 md:px-8 overflow-hidden bg-transparent">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/70 via-[#5937E0]/70 to-indigo-800/70 z-0"></div>
      
      
       <div className="absolute inset-0 bg-[url('/hero-bg.png')] bg-cover bg-center bg-no-repeat opacity-20 z-0"></div> 
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-14 items-center">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl md:py-14 font-bold text-white mb-6 leading-tight">
              Experience the road <br/>
              <span className="text-[#FF9E0C]">like never before</span>
            </h1>
            <p className="text-lg text-white text-opacity-90 mb-8 max-w-xl mx-auto lg:mx-0">
              Discover the perfect car for your next adventure. With our premium fleet and exceptional service, we make every journey unforgettable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-[#FF9E0C] hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                View All Cars
              </button>
              <button className="bg-transparent hover:bg-white/10 border-2 border-white text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                Learn More
              </button>
            </div>
            
            <div className="grid grid-cols-3 gap-6 mt-12 lg:text-left md:text-center" >
              <div>
                <h3 className="text-2xl font-bold text-[#FF9E0C]">200+</h3>
                <p className="text-white text-opacity-80">Vehicles</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#FF9E0C]">24/7</h3>
                <p className="text-white text-opacity-80">Support</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#FF9E0C]">50+</h3>
                <p className="text-white text-opacity-80">Locations</p>
              </div>
            </div>
          </div>
          
          {/* Booking Form */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20 shadow-2xl animate-fade-in">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Book Your Car</h2>
              <form className="space-y-5">
                <div>
                  <label className="block text-white text-opacity-90 mb-2 font-medium">Car Type</label>
                  <select className="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#FF9E0C]">
                    <option value="" className="text-gray-800">Select Car Type</option>
                    <option value="sedan" className="text-gray-800">Sedan</option>
                    <option value="cabriolet" className="text-gray-800">Cabriolet</option>
                    <option value="pickup" className="text-gray-800">Pickup</option>
                    <option value="suv" className="text-gray-800">SUV</option>
                    <option value="minivan" className="text-gray-800">Minivan</option>
                  </select>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                </div>
                
                <button className="w-full bg-[#FF9E0C] hover:bg-orange-600 text-white font-semibold py-4 rounded-lg transition-all duration-300 mt-4 shadow-lg hover:shadow-xl cursor-pointer">
                  Book Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}