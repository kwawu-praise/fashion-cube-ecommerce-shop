import React, { useState } from "react";
import type { IconType } from "react-icons";
import { MdDashboard } from "react-icons/md";
import { FaProductHunt } from "react-icons/fa6";
import { FaCartArrowDown } from "react-icons/fa6";
import { MdMessage } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";



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

    <div>
      <div>
        <Icon></Icon>
        <button className="border" onClick={onToggle}>
          {title}
        </button>
      </div>
      {
        subItems && <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
          <ul className="overflow-hidden">
            {subItems?.map((item) => (
              <li key={item}>{item}</li>
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
    <div>

      <main>
        {
          AdminHamburgerItems.map(({ title, subItems, icon: Icon, }, index) => (
            <HamburgerItem title={title} subItems={subItems} icon={Icon} onToggle={() => handleToggle(title)} isOpen={isOpen === title} />
          ))
        }
      </main>
    </div>
  )
}

export default AdminHamburger
