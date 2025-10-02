import { IoLogoFacebook } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineMail } from "react-icons/hi";
import { LuPhone } from "react-icons/lu";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <a href="#" className="flex items-center space-x-3">
                <img 
                  src="./kay-autos-logo.png" 
                  alt="kay-autos-logo" 
                  className="w-12 h-12 object-contain"
                />
                <span className="text-xl font-bold text-orange-500">Car Rental</span>
              </a>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
              necessitatibus velit quisquam quo dignissimos, ratione vel
              consequuntur reiciendis quod molestias ex optio quia labore deserunt.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-orange-500 p-3 rounded-lg transition-all duration-300 transform hover:scale-110">
                <IoLogoFacebook className="text-xl" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-orange-500 p-3 rounded-lg transition-all duration-300 transform hover:scale-110">
                <FaInstagramSquare className="text-xl" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-orange-500 p-3 rounded-lg transition-all duration-300 transform hover:scale-110">
                <FaSquareXTwitter className="text-xl" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-orange-500 p-3 rounded-lg transition-all duration-300 transform hover:scale-110">
                <IoLogoYoutube className="text-xl" />
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold mb-4 text-orange-500">Contact Info</h3>
            
            <div className="flex items-start space-x-3">
              <CiLocationOn className="bg-orange-500 rounded p-1 text-white text-2xl flex-shrink-0 mt-1" />
              <div>
                <p className="font-medium text-gray-300">Address</p>
                <p className="text-gray-400">Oxford Ave. Cary, NC 27511</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <HiOutlineMail className="bg-orange-500 rounded p-1 text-white text-2xl flex-shrink-0 mt-1" />
              <div>
                <p className="font-medium text-gray-300">Email</p>
                <p className="text-gray-400">nwiger@yahoo.com</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <LuPhone className="bg-orange-500 rounded p-1 text-white text-2xl flex-shrink-0 mt-1" />
              <div>
                <p className="font-medium text-gray-300">Phone</p>
                <p className="text-gray-400">+537 547-6401</p>
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-500">Useful Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">About us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">Contact us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">Gallery</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">F.A.Q</a></li>
            </ul>
          </div>

          {/* Vehicles & Download */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-orange-500">Vehicles</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">Sedan</a></li>
                <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">Cabriolet</a></li>
                <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">Pickup</a></li>
                <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">Minivan</a></li>
                <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">SUV</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-orange-500">Download App</h3>
              <div className="flex space-x-3">
                <button className="bg-gray-800 hover:bg-orange-500 text-white px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105">
                  App Store
                </button>
                <button className="bg-gray-800 hover:bg-orange-500 text-white px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Google Play
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6">
          <p className="text-center text-gray-400">
            &copy; {new Date().getFullYear()} Car Rental. Design by Kabitech Solutions
          </p>
        </div>
      </div>
    </footer>
  );
}