const FirstHalfOfTheBody = () => {
  return (
    <div className="w-full mt-5">
      <div className=" flex space-x-7 justify-center mb-5 ">
        <div className="bg-[url('images/banner_1.jpg')] flex items-center  justify-center bg-cover h-52 w-[25%]">
          <input type="button" value={"WOMEN'S"} className="bg-white w-36 h-10 cursor-pointer" />
        </div>
        <div className="bg-[url('images/banner_2.jpg')] flex items-center justify-center  bg-cover h-52 w-[25%]">

          <input type="button" value={"ACCESSORIES"} className="bg-white  cursor-pointer w-36 h-10" />
        </div>
        <div className="bg-[url('images/banner_3.jpg')] flex items-center  justify-center bg-cover h-52 w-[25%]">
          <input type="button" value={"MEN'S"} className="bg-white cursor-pointer w-36 h-10" />
        </div>
      </div>

    </div >
  )
}

export default FirstHalfOfTheBody
