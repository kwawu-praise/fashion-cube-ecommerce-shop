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

function App() {


  return (
    <div>
      <AdminNavbar />
      {/* <AdminHamburger /> */}
      <AdminDashboard />

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
