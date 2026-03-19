export const DealsOfTheWeek = () => {
  return (
    <div className="flex  w-full h-[80vh] mb-20 bg-gray-200 ">
      <div className=" w-[45%]  flex justify-end">
        <img src="images/deal_ofthe_week.png" className="h-full object-contain" />
      </div>

      <div className="w-[55%]  flex flex-col justify-center items-center">

        <h2 className="text-2xl font-bold mb-4">Deals Of The Week</h2>

        <div className="bg-red-500 h-1 w-10 mb-7"></div>


        <div className="flex  space-x-7 mb-16">
          <div className="rounded-full bg-white h-20 w-20 flex-col flex items-center justify-center">  <p className="text-3xl mb-3 mt-2 font-bold text-red-600 ">
            00
          </p>
            <p className="text-xs">Days</p>
          </div>

          <div className="rounded-full bg-white h-20 w-20 flex-col flex items-center justify-center">  <p className="text-3xl mb-3 mt-2 font-bold text-red-600 ">
            00
          </p>
            <p className="text-xs">HOurs</p>
          </div>

          <div className="rounded-full bg-white h-20 w-20 flex-col flex items-center justify-center">  <p className="text-3xl mb-3 mt-2 font-bold text-red-600 ">
            00
          </p>
            <p className="text-xs">Mins</p>
          </div>

          <div className="rounded-full bg-white h-20 w-20 flex-col flex items-center justify-center">  <p className="text-3xl mb-3 mt-2 font-bold text-red-600 ">
            00
          </p>
            <p className="text-xs">Sec</p>
          </div>

        </div>



        <div><input type="button" value={"SHOP NOW"} className="bg-black text-white text-xs  h-8 w-30 rounded-xs " /></div>
      </div>
    </div>
  )
}

