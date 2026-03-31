import React, { useState } from "react";
import type { IconType } from "react-icons";
import { MdDashboard } from "react-icons/md";
import { FaProductHunt } from "react-icons/fa6";
import { FaCartArrowDown } from "react-icons/fa6";
import { MdMessage } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { IoMdLogOut } from "react-icons/io";


interface AdminHamburgerInteface {
  title: string;
  subItems?: string[],
  icon: React.ElementType
}


const AdminHamburgerItems: AdminHamburgerInteface[] = [
  {
    title: "Dashboard",
    icon: MdDashboard
  },
  {
    title: "Products",
    subItems: ["Product List", "Product View", "Product Upload"],
    icon: FaProductHunt

  },
  {
    title: "Orders",
    subItems: ["Order List", "Order Items"],
    icon: FaCartArrowDown
  },
  {
    title: "Messages",
    subItems: ["New Messages", "Already Read"],
    icon: MdMessage
  },
  {
    title: "Notifications",
    subItems: ["New Notifications", "Past Notifications"],
    icon: FaBell
  },
  {
    title: "Settings",
    subItems: ["Edit Profile", "Create New Profile"],
    icon: IoSettingsSharp
  },
  {
    title: "Login",
    icon: IoPersonSharp
  },
  {
    title: "Sign Up",
    icon: IoPersonSharp
  }
]
interface HamburgerItemProps extends AdminHamburgerInteface {
  isOpen: boolean;
  // setIsOpen: React.Dispatch<React.SetStateAction<string | null>>;
  onToggle: () => void
}

const HamburgerItem = ({ title, subItems, icon: Icon, isOpen, onToggle }: HamburgerItemProps,) => {
  return (

    <div className="mt-3">
      <div className="flex px-2 gap-2  ">
        <button className={` rounded-2xl p-4 h-12 font-bold hover:bg-[#f1efee]  w-full flex items-center justify-between ${isOpen ? "bg-[#f1efee] " : "bg-white"} `} onClick={onToggle}>
          <div className="flex items-center gap-2 text-[#635f74] ">
            <Icon className={`${isOpen ? "bg-[#f1efee] text-blue-700" : "bg-white"}`} />
            {title}

          </div>
          <div>
            {
              subItems &&
              <IoIosArrowForward className={`font-bold ${isOpen ? "rotate-90" : ""} `} />
            }

          </div>
        </button>
      </div>
      {
        subItems && <div className={` overflow-hidden grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"} pl-10`}>
          <ul className=" overflow-hidden border-l p-3 space-y-3">
            {subItems?.map((item) => (
              <li key={item} className="text-sm text-[#656275] font-bold hover:text-blue-700">{item}</li>
            ))}
          </ul>
        </div>

      }
    </div >
  )
}


const AdminHamburger = () => {



  const [isOpen, setIsOpen] = useState<null | string>(null)

  function handleToggle(title: string) {
    setIsOpen((prev) => (prev === title ? null : title))
  }



  return (
    <div className="w-full h-screen">

      <main className="w-[20%]  h-full flex flex-col justify-between">
        <div>
          {
            AdminHamburgerItems.map(({ title, subItems, icon: Icon, }) => (
              <HamburgerItem title={title} subItems={subItems} icon={Icon} onToggle={() => handleToggle(title)} isOpen={isOpen === title} />
            ))
          }


        </div>
        <div className="px-4  mb-40">
          <div className="w-full flex items-center justify-center  bg-[#bacff7] h-30 relative overflow-hidden rounded-xl">
            <button className="bg-blue-600 h-10 w-30 rounded-sm text-white font-bold flex items-center justify-center gap-1" >
              <IoMdLogOut />
              LOGOUT
            </button>
            <div className="w-5 h-5 rounded-full bg-[#5f91f2] absolute left-1 top-3">
            </div>

            <div className="w-10 h-10 rounded-full bg-[#5f91f2] absolute right-[-5%] top-[-6%]">
            </div>
          </div>

        </div>
      </main>
    </div>
  )
}

export default AdminHamburger
