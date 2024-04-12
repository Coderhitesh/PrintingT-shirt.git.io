
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home/Home'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import AboutHome from './Components/aboutHome/AboutHome'
import OurClient from './Components/OurClient/OurClient'
import Contact from './Components/Contact/Contact'
import Testimonial from './Components/Testimonial/Testimonial'
import Product from './Components/Products/Product'
import OurInfrastructure from './Components/OurInfrastructure/OurInfrastructure'
import Whatasaap from './Components/Whatsapp/Whatasaap'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutHome />} />
        <Route path="/about" element={<AboutHome />} />
        <Route path="/client" element={<OurClient />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/product" element={<Product />} />
        <Route path="/infrastructure" element={<OurInfrastructure />} />
      </Routes>
      <Footer />
      <Whatasaap />
    </BrowserRouter>
  )
}

export default App
