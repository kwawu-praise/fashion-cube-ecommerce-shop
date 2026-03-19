import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
export const Footer = () => {
  return (
    <div className="bg-gray-200 flex    justify-center w-full">

      <div className="w-full flex  flex-col justify-center  mt-10">
        <div className="flex justify-around">

          <div className="flex space-x-10 text-gray-600">
            <p> Blog</p>
            <p> FAQs</p>
            <p>Contact Us</p>
          </div>

          <div className="flex space-x-10">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaPinterestP />


          </div>
        </div>


        <div className="flex items-center justify-center mt-20">
          <p className="mb-10 text-gray-600">
            © 2018 All Rights Reserved.
          </p>
        </div>
      </div>
    </div >

  )
}

