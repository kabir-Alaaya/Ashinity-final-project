import { useState } from "react";
import { Link } from "react-router-dom";
import { IoCall } from "react-icons/io5";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 w-full py-4 md:py-6 px-4 sm:px-6 z-50 bg-[#FFFFFF] shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="w-10 md:w-24">
          <Link to="/">
            <img
              src="/kay-autos-logo.png"
              className="w-full h-auto object-contain"
              alt="Kay Autos Logo"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-grow justify-center">
          <ul className="flex space-x-4 lg:space-x-12">
            {["Home", "Vehicles", "Details", "About Us", "Contact Us"].map((item) => (
              <li key={item}>
                <Link
                  to={`/${item === "Home" ? "" : item}`}
                  className="text-[#000000] hover:text-[#5937E0] transition-colors duration-200"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact Info */}
        <div className="hidden sm:flex items-center space-x-2">
          <div className="bg-[#5937E0] text-white rounded-full p-2">
            <a href="">
            <IoCall className="w-5 h-5" />
            </a>
          </div>
          <div className="text-sm">
            <p>Need help?</p>
            <p className="font-semibold">+996 247-1680</p>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={handleToggle}
          className="md:hidden text-2xl"
          aria-label="Toggle menu"
        >
          <HiOutlineMenuAlt3 className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <nav className="container mx-auto px-4 py-6">
          <ul className="space-y-4">
            {["Home", "Vehicles", "Details", "About Us ", "Contact Us"].map((item) => (
              <li key={item}>
                <Link
                  to={`/${item === "Home" ? "" : item}`}
                  className="block text-[#000000] hover:text-[#5937E0] py-2 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}