import About from "./components/About"
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Gallery from "./components/Gallery"
import Navbar from "./components/Navbar"
import OurProducts from "./components/OurProducts"

const App = () => {
  return (
    <div className="bg-[#FFFFFF]">
      <Navbar/>
      <Banner/>
      <Gallery/>
      <About/>
      <OurProducts/>
      <Footer/>
    </div>
  )
}

export default App