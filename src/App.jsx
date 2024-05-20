import About from "./components/About"
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div className="bg-[#FFFFFF]">
      <Navbar/>
      <Banner/>
      <About/>
      <Footer/>
    </div>
  )
}

export default App