import { IoCarSport } from "react-icons/io5";
import { FaRegCalendarCheck } from "react-icons/fa";
import { SiSpeedtest } from "react-icons/si";
import { RiUserHeartFill } from "react-icons/ri";

export default function Facts({ hasBackgroundImage = false }) {
  return (
    <section 
      className={`${hasBackgroundImage ? 'bg-transparent' : 'bg-[#5937E0]'} py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative`}
    >
      {/* Optional background image container */}
      {hasBackgroundImage && (
        <div className="absolute inset-0 -z-10">
          {/* Replace with your actual image component */}
          <div className="w-full h-full bg-gray-200 opacity-20"></div>
          {/* Example: <img src="/your-image.jpg" alt="" className="w-full h-full object-cover" /> */}
        </div>
      )}
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Header Section */}
        <div className="mb-10 md:mb-12 lg:mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Facts In Numbers
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Discover why thousands of customers trust us with their automotive needs. 
            Our commitment to excellence is reflected in these impressive numbers.
          </p>
        </div>

        {/* Stats Grid - Using flex instead of grid for better side-by-side layout */}
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
          
          {/* Cars Stat */}
          <div className="flex flex-row items-center justify-center bg-white p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 flex-1 min-w-[240px] max-w-md md:max-w-none">
            <div className="flex-shrink-0 mr-4 sm:mr-5 md:mr-6">
              <div className="p-2 sm:p-3 bg-orange-500 rounded">
                <IoCarSport className="text-white text-xl sm:text-2xl" />
              </div>
            </div>
            <div className="text-left">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">540+</p>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg">Cars</p>
            </div>
          </div>

          {/* Customers Stat */}
          <div className="flex flex-row items-center justify-center bg-white p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 flex-1 min-w-[240px] max-w-md md:max-w-none">
            <div className="flex-shrink-0 mr-4 sm:mr-5 md:mr-6">
              <div className="p-2 sm:p-3 bg-orange-500 rounded">
                <RiUserHeartFill className="text-white text-xl sm:text-2xl" />
              </div>
            </div>
            <div className="text-left">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">20k+</p>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg">Customers</p>
            </div>
          </div>

          {/* Years Stat */}
          <div className="flex flex-row items-center justify-center bg-white p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 flex-1 min-w-[240px] max-w-md md:max-w-none">
            <div className="flex-shrink-0 mr-4 sm:mr-5 md:mr-6">
              <div className="p-2 sm:p-3 bg-orange-500 rounded">
                <FaRegCalendarCheck className="text-white text-xl sm:text-2xl" />
              </div>
            </div>
            <div className="text-left">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">25+</p>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg">Years</p>
            </div>
          </div>

          {/* Miles Stat */}
          <div className="flex flex-row items-center justify-center bg-white p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 flex-1 min-w-[240px] max-w-md md:max-w-none">
            <div className="flex-shrink-0 mr-4 sm:mr-5 md:mr-6">
              <div className="p-2 sm:p-3 bg-orange-500 rounded">
                <SiSpeedtest className="text-white text-xl sm:text-2xl" />
              </div>
            </div>
            <div className="text-left">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">20m+</p>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg">Miles</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}