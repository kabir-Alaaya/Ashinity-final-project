import { IoLogoFacebook } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";

export default function Footer() {
  return (
    <footer className="fixed-top-0">
      <div>
        <div>
          <div className="flex">
            {" "}
            <a href="">
              <img src="./kay-autos-logo.png" alt="kay-autos-logo"></img>
            </a>
            <p>Car Rental</p>
          </div>
          <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
            necessitatibus velit quisquam quo dignissimos, ratione vel
            consequuntur reiciendis quod molestias ex optio quia labore
            deserunt. Adipisci odit tempore quasi sed?
          </div>

          <div className="flex">
            <a href="">
              <IoLogoFacebook />
            </a>
            <a href="">
              <FaInstagramSquare />
            </a>
            <a href="">
              <FaSquareXTwitter />
            </a>
            <a href="">
              <IoLogoYoutube />
            </a>
          </div>
        </div>
        <div>
          <div className="flex">
            <a href="">
              <CiLocationOn />
            </a>
            <div>
              <p>Address</p>
              <p>Oxford Ave. Cary, NC 27511</p>
            </div>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </footer>
  );
}
