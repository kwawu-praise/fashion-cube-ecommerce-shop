import { IoPersonCircleSharp } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import type { IconType } from "react-icons";
// bg - linear - to - r from - green - 500 to - green - 800
//className="text-5xl text-white/50"

interface TotolUsersCardInteface {
  title: string;
  userCount: number;
  icon: IconType;
  color: string;
  profileBgColor: string;

}


export const DisplayTotalUserCaard = ({ title, userCount, icon: Icon, color, profileBgColor }: TotolUsersCardInteface) => {

  return (
    <div className="w-full">
      <div className={` ${color} text-white w-full h-50 rounded-xl flex  flex-col justify-between p-7 `}>
        <div className="flex  justify-between">
          <div>
            <p className="text-lg font-bold">{title}</p>
            <p className="text-4xl font-bold">{userCount}</p>

          </div>
          <div className={`${profileBgColor} w-15 h-15 flex text-5xl text-white /50 items-center justify-center rounded-xl`}>
            <Icon />
          </div>
        </div >

        <div className="flex justify-between">
          <div>
            Last Month
          </div>
          <div>
            <BsThreeDotsVertical className="text-white cursor-pointer" />
          </div>
        </div>
      </div >
    </div >

  )

}


const AdminDashboard = () => {

  const AllCards: TotolUsersCardInteface[] = [
    {
      title: "Totol Users",
      userCount: 288,
      icon: IoPersonCircleSharp,
      color: "bg-linear-to-r from-green-800 to-green-500 ",
      profileBgColor: " bg-linear-to-r from-green-800 to-green-600 "
    },
    {
      title: "Totol Users",
      userCount: 288,
      icon: IoPersonCircleSharp,
      color: "bg-linear-to-r from-[#b812d8] to-[#df5ff1]",
      profileBgColor: "bg-linear-to-r from-[#b812d8] to-[#df5ff7]"
    },
    {
      title: "Totol Users",
      userCount: 288,
      icon: IoPersonCircleSharp,
      color: "bg-linear-to-r from-[#2b73da] to-[#5ba6e9]",
      profileBgColor: "bg-linear-to-r from-[#5ba6e9] to-[#2b73da] "
    },
    {
      title: "Totol Users",
      userCount: 288,
      icon: IoPersonCircleSharp,
      color: "bg-linear-to-r from-[#d68f0f] to-[#e7c227]",
      profileBgColor: "bg-linear-to-r from-[#e7c227] to-[#d68f0f] ",
    },
  ]

  return (
    <div className=" grid grid-cols-2 gap-x-2 gap-y-2  w-[70%] p-4">
      {
        AllCards.map(({ title, userCount, icon, color, profileBgColor }) => (
          < DisplayTotalUserCaard title={title} userCount={userCount} icon={icon} color={color} profileBgColor={profileBgColor} />
        ))
      }
    </div >
  )
}

export default AdminDashboard
