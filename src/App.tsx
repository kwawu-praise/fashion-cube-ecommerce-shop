import { Navbar } from "./components/Navbar"
import NavbarWithSettings from "./components/NavbarWithSettings"
import Hero from "./components/Hero"
import FirstHalfOfTheBody from "./components/FirstHalfOfTheBody"
import Products from "./components/Products"
import BenefitBanner from "./components/BenefitBanner"
import { DealsOfTheWeek } from "./components/DealsOfTheWeek"
import { BestSellers } from "./components/BestSellers"
import { Footer } from "./components/Footer"
import AdminNavbar from "./components/Admin/AdminNavbar"
import AdminHamburger from "./components/Admin/AdminHamburger"
import AdminDashboard from "./components/Admin/AdminDashboard"
import BestSellingProduct from "./components/Admin/BestSellingProduct"

function App() {


  return (
    <div className="relative w-full">
      <div className="w-full">
        <div className="w-full relative">

          <div className="fixed w-full top-0 left-0 z-50"> <AdminNavbar /></div>
        </div>
        <div className="flex w-full mt-16 ">
          <div className="w-[20%] relative" >

            <div className="w-[20%] fixed"> <AdminHamburger /></div>
          </div>

          <div className="w-[80%]">
            <div> <AdminDashboard /></div>
            <div>  <BestSellingProduct /></div>

          </div>

        </div>
      </div>

      {/*   <NavbarWithSettings /> */}
      {/*   <Navbar /> */}
      {/*   <Hero /> */}
      {/*   <FirstHalfOfTheBody /> */}
      {/*   <Products /> */}
      {/*   <BenefitBanner /> */}
      {/*   <DealsOfTheWeek /> */}
      {/*   <BestSellers /> */}
      {/*   <Footer /> */}
      {/* </div> */}

    </div >
  )
}

export default App
