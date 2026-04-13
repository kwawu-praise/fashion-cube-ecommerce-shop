
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import { FaBell } from "react-icons/fa";




const AdminNavbar = () => {
  return (
    <div>
      <div className="flex h-16 items-center px-5 shadow-md/30 bg-white/95">
        <div className="flex w-[25%]  justify-between   items-center">
          <div>
            <h1 className="text-[#1e1e27] font-bold">
              FASHION<span className="text-[#fe4c50]">CUBE</span>
            </h1>

          </div>
          <div className="h-6 w-6 bg-[#e5ebf6] flex items-center justify-center rounded-full">
            <GiHamburgerMenu className="text-xs" />
          </div>
        </div>

        <div className="flex w-[75%] justify-between items-center px-5">

          <div className="flex relative items-center">
            <input type="text" className=" pl-8 pr-2 outline-0 rounded-sm placeholder:text-xs bg-[#e5ebf6]" placeholder="Seach Here..." />

            <IoIosSearch className="absolute left-2" />
          </div>
          <div className=" flex items-center space-x-5">
            <div className="h-6 w-6 bg-[#e5ebf6] flex items-center justify-center rounded-full">
              <FaBell />
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full border overflow-hidden ">
                <img src="images/ch.jpg" className="w-full h-full " />
              </div>
              <div>
                <p className="font-bold text-sm">Rinku Verna</p>
                <p className="text-[10px]">rinku@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default AdminNavbar
