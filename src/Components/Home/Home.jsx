import React from 'react'
import Banner from '../Banner/Banner'
import AboutHome from '../aboutHome/AboutHome'
import Testimonial from '../Testimonial/Testimonial'
import Contact from '../Contact/Contact'
import OurClient from '../OurClient/OurClient'
import Product from '../Products/Product'

function Home() {
  return (
    <div>
      <Banner />
      <AboutHome />
      <Product />
      <OurClient />
      <Testimonial />
      <Contact />
    </div>
  )
}

export default Home
