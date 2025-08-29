import { LuWallet } from "react-icons/lu";
import { PiCarProfile } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";

export default function InfoBlock() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          
          {/* Availability Card */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 md:p-7 lg:p-8 flex flex-col items-center text-center">
            <div className="flex items-center justify-center w-16 h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 rounded-full bg-blue-100 text-blue-600 mb-4 md:mb-5 lg:mb-6">
              <CiLocationOn className="text-2xl md:text-3xl lg:text-4xl" />
            </div>
            <h3 className="font-bold text-lg md:text-xl lg:text-2xl mb-3 md:mb-4 text-gray-800">Availability</h3>
            <p className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis id, numquam sunt cum eaque maiores labore tenetur voluptatum dicta atque nesciunt voluptas.
            </p>
          </div>
          
          {/* Comfort Card */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 md:p-7 lg:p-8 flex flex-col items-center text-center">
            <div className="flex items-center justify-center w-16 h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 rounded-full bg-green-100 text-green-600 mb-4 md:mb-5 lg:mb-6">
              <PiCarProfile className="text-2xl md:text-3xl lg:text-4xl" />
            </div>
            <h3 className="font-bold text-lg md:text-xl lg:text-2xl mb-3 md:mb-4 text-gray-800">Comfort</h3>
            <p className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda aliquam illo nemo aperiam delectus possimus doloremque alias nulla voluptate quisquam explicabo modi.
            </p>
          </div>
          
          {/* Savings Card */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 md:p-7 lg:p-8 flex flex-col items-center text-center">
            <div className="flex items-center justify-center w-16 h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 rounded-full bg-purple-100 text-purple-600 mb-4 md:mb-5 lg:mb-6">
              <LuWallet className="text-2xl md:text-3xl lg:text-4xl" />
            </div>
            <h3 className="font-bold text-lg md:text-xl lg:text-2xl mb-3 md:mb-4 text-gray-800">Savings</h3>
            <p className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia sint similique blanditiis ea suscipit quidem officiis. Eum repudiandae dignissimos voluptatibus omnis.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}