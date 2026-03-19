import { IoPersonSharp } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import { GiShoppingBag } from "react-icons/gi";
export const Navbar = () => {
  return (
    <div className="flex justify-around   h-16 items-center shadow-lg/20 drop-shadow-black">
      <div>
        <h1 className="text-[#1e1e27] font-bold">
          FASHION<span className="text-[#fe4c50]">CUBE</span>
        </h1>

      </div>

      <div className="flex  space-x-15">
        <div className="flex space-x-7 text-xs font-bold">

          <div>
            <a href="#">Home</a>
          </div>

          <div>
            <select>
              <option>
                Shop
              </option>
              <option>
                Others
              </option>
            </select>
          </div>
          <div>
            <a href="#">Contact</a>
          </div>

        </div>

        <div className="flex space-x-3">
          <div className=" h-7 w-7 flex justify-center items-center rounded-full">
            <IoSearchSharp />
          </div>

          <div className=" h-7 w-7 flex justify-center items-center rounded-full">
            <IoPersonSharp />
          </div>

          <div className="bg-gray-200 h-7 w-7 flex justify-center items-center rounded-full">
            <GiShoppingBag />
          </div>
        </div>
      </div>
    </div>
  )
}

