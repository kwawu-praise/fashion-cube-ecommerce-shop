const NavbarWithSettings = () => {
  return (
    <div className="flex  justify-around bg-[#1e1e27] text-gray-300 h-12 items-center" >
      <div>
        <h2 className="text-sm ">
          FREE SHIPPING ON ALLL U.S ORDERS OVER $50
        </h2>
      </div>

      <div className="flex space-x-4  h-full">
        <div className="border-r border-gray-300/20 pr-7 flex items-center  justify-center">
          <select>
            <option>USD</option>
            <option>GHC</option>
            <option>NGN</option>
            <option>SCH</option>
          </select>
        </div>
        <div className="border-r border-gray-300/20 pr-7 flex items-center" >
          <select>
            <option>English</option>
            <option>France </option>
            <option>Chinese</option>
            <option>Russian</option>
          </select>

        </div>
        <div className=" pr-7 flex items-center">
          <select>
            <option>My Account</option>
            <option>France </option>
            <option>Chinese</option>
            <option>Russian</option>
          </select>

        </div>


      </div>
    </div >

  )
}

export default NavbarWithSettings
