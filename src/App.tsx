import { Navbar } from "./components/Navbar"
import NavbarWithSettings from "./components/NavbarWithSettings"
import Hero from "./components/Hero"
import FirstHalfOfTheBody from "./components/FirstHalfOfTheBody"
import Products from "./components/Products"
import BenefitBanner from "./components/BenefitBanner"
import { DealsOfTheWeek } from "./components/DealsOfTheWeek"
import { BestSellers } from "./components/BestSellers"
import { Footer } from "./components/Footer"
function App() {


  return (
    <>
      <div>

        <NavbarWithSettings />
        <Navbar />
        <Hero />
        <FirstHalfOfTheBody />
        <Products />
        <BenefitBanner />
        <DealsOfTheWeek />
        <BestSellers />
        <Footer />
      </div>
    </>
  )
}

export default App
