export const BestSellers = () => {
  return (

    <div className="mb-50">
      <div className="w-full  flex  justify-center items-center mt-20 mb-3">
        <h2 className="font-bold text-2xl">Best Sellers </h2>
      </div>

      <div className="w-full flex justify-center items-center mb-7">
        <div className="bg-red-700 h-1 w-15">

        </div>
      </div>

      <div className="flex justify-center text-sm font-bold  mb-20">


        <div className="border border-black/20 w-25 flex  items-center justify-center h-8">
          <input type="button" value={"ALL"} className="" />
        </div>
        <div className="border  border-black/20 border-x-0 w-30 flex items-center justify-center h-8">

          <input type="button" value={"WOMEN'S"} />
        </div>
        <div className="border border-black/20  w-25 flex items-center justify-center h-8">

          <input type="button" value={"MEN'S"} />
        </div>
      </div>


      <section className="w-full grid grid-cols-[20%_20%_20%_20%] gap-10 justify-center mb-20">
        <div className="bg-gray-100 flex flex-col items-center">
          <div className=" w-[70%] h-[70%] ">
            <img src="images/ch.jpg" className="w-full h-full object-cover " />
          </div>
          <div className="mt-5">
            <p className="text-sm font-bold">
              Oversized Coat Top
            </p>

          </div>
          <div>
            <p className="text-red-700">$35.90  <span className="text-gray-600 text-xs line-through"> $44.60</span></p>
          </div>
        </div>

        <div className="bg-gray-100 flex flex-col items-center">
          <div className=" w-[70%] h-[70%] ">
            <img src="images/ed.jpg" className="w-full h-full object-cover " />
          </div>
          <div className="mt-5">
            <p className="text-sm font-bold">
              Oversized Coat Top
            </p>

          </div>
          <div>
            <p className="text-red-700">$35.90  <span className="text-gray-600 text-xs line-through"> $44.60</span></p>
          </div>
        </div>


        <div className="bg-gray-100 flex flex-col items-center">
          <div className=" w-[70%] h-[70%] ">
            <img src="images/na.jpg" className="w-full h-full object-cover " />
          </div>
          <div className="mt-5">
            <p className="text-sm font-bold">
              Oversized Coat Top
            </p>

          </div>
          <div>
            <p className="text-red-700">$35.90  <span className="text-gray-600 text-xs line-through"> $44.60</span></p>
          </div>
        </div>


        <div className="bg-gray-100 flex flex-col items-center">
          <div className=" w-[70%] h-[70%] ">
            <img src="images/rh.jpg" className="w-full h-full object-cover " />
          </div>
          <div className="mt-5">
            <p className="text-sm font-bold">
              Oversized Coat Top
            </p>

          </div>
          <div>
            <p className="text-red-700">$35.90  <span className="text-gray-600 text-xs line-through"> $44.60</span></p>
          </div>
        </div>

      </section>



    </div >
  )
}



