import { FaTruck } from "react-icons/fa";
import { BsCash } from "react-icons/bs";
import { VscDebugRestart } from "react-icons/vsc";
import { FaRegClock } from "react-icons/fa";


const BenefitBanner = () => {
  return (
    <div className="w-full flex  items-center  justify-center mb-20">
      <div className="flex  justify-evenly items-center h-20 bg-gray-200 space-x-7 w-[90%]">


        <div className="flex space-x-7  items-center justify-center   ">
          <div>
            <FaTruck className="text-red-600 text-4xl" />
          </div>
          <div>
            <div>
              <p className="font-bold">FREE SHIPPING</p>
              <p className="text-gray-600 text-xs w-40  ">Suffered Alteration in Some Form</p>
            </div>
          </div>
        </div>



        <div className="flex space-x-7  items-center justify-center   ">
          <div>
            <BsCash className="text-red-600 text-4xl" />

          </div>
          <div>
            <div>
              <p className="font-bold">CASH ON DELIVERY </p>
              <p className="text-gray-600 text-xs"> The Internet Tends To Repeat</p>
            </div>
          </div>
        </div>


        <div className="flex space-x-7  items-center justify-center  ">
          <div>
            <VscDebugRestart className="text-red-600 text-4xl" />
          </div>
          <div>
            <div>
              <p className="font-bold">45 DAYS RETURN</p>
              <p className="text-gray-600 text-xs">Making it Look Readable</p>
            </div>
          </div>
        </div>

        <div className="flex space-x-7  items-center justify-center  ">
          <div>
            <FaRegClock className="text-red-600 text-4xl" />
          </div>
          <div>
            <div>
              <p className="font-bold text-">OPENING ALL WEEK</p>
              <p className="text-gray-600 text-xs">8AM - 09PM</p>
            </div>
          </div>
        </div>


      </div>


    </div >
  )
}

export default BenefitBanner
