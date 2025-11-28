import Header from "./components/header/Header"
import Slider from "./components/slider/Slider"
import ContainerCard from "./components/containerCard/ContainerCard"
import Faq from "./components/faq/Faq"
import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
import { GlobalStorage } from "./GlobalStorage"
import Btnzap from "./components/btnzap/Btnzap"

function App() {

  return (
    <GlobalStorage>
      <Header />
      <Slider />
      <ContainerCard />
      <About />
      <Faq />
      <Contact />
      <Btnzap />
      <Footer />
    </GlobalStorage>
  )
}

export default App
