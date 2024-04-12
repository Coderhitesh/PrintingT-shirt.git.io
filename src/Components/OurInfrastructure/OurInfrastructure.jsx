import React, { useEffect } from 'react'
import './OurInfrastructure.css'
import m1 from './m1.jpg'
import m2 from './m2.jpeg'
import m3 from './m3.jpg'
function OurInfrastructure() {
    useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth' 
        });
      }, []);
  return (
    <section className='infrastructure-section'>
      <div className="container">
        <div className="heading">
            <span>Our Infrastructure</span>
        </div>
        <div className="main-container">
            <div className="same-box">
                <img src={m1} alt="" />
            </div>
            <div className="same-box">
                <img src={m2} alt="" />
            </div>
            <div className="same-box">
                <img src={m3} alt="" />
            </div>
        </div>
      </div>
    </section>
  )
}

export default OurInfrastructure
