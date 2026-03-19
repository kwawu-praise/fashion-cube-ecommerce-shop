const Hero = () => {
  return (
    <div className="w-full flex bg-[#e3e3e1] h-screen">

      <div className=" h-full  w-[55%] flex  pl-20   items-center space-y-7" >
        <div className="space-y-7">
          <div >
            <p className="text-xs">SPRING / SUMMER COLLECTION 2017</p>
          </div>
          <div>
            <p className="text-4xl"> Get up to 30% Off New Arrivals</p>
          </div>
          <div>
            <input type="button" value={"SHOP NOW"} className="bg-[#e54448] text-white h-10 w-30 text-xs font-bold rounded-sm" />
          </div>

        </div >
      </div >

      <div className=" w-[45%] ">

        <img src="/images/photopeat.png" className="w-full h-full object-cover " />
      </div>
    </div >

  )
}

export default Hero
