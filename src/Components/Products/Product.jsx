import React, { useEffect } from 'react'
import './Product.css'
import p1 from './p1.jpg'
import p2 from './p2.jpg'
import p3 from './p3.jpg'
import p4 from './p4.jpg'
import p5 from './p5.jpg'
import p6 from './p6.jpg'
import p7 from './p7.webp'
import p8 from './p8.jpg'
import p9 from './p9.webp'

function Product() {
    useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth' 
        });
      }, []);
  return (
    <section className='product-section'>
      <div className="container">
        <div className="heading">
            <span>Our Products</span>
        </div>
        <div className="main-container">
            <div className="same-box">
                <div className="img">
                    <img src={p1} alt="" />
                </div>
                <div className="content">
                    <p>T-Shirt</p>
                </div>
            </div>
            <div className="same-box">
                <div className="img">
                    <img src={p2} alt="" />
                </div>
                <div className="content">
                    <p>T-Shirt</p>
                </div>
            </div>
            <div className="same-box">
                <div className="img">
                    <img src={p3} alt="" />
                </div>
                <div className="content">
                    <p>T-Shirt</p>
                </div>
            </div>
            <div className="same-box">
                <div className="img">
                    <img src={p4} alt="" />
                </div>
                <div className="content">
                    <p>T-Shirt</p>
                </div>
            </div>
            <div className="same-box">
                <div className="img">
                    <img src={p5} alt="" />
                </div>
                <div className="content">
                    <p>T-Shirt</p>
                </div>
            </div>
            <div className="same-box">
                <div className="img">
                    <img src={p6} alt="" />
                </div>
                <div className="content">
                    <p>T-Shirt</p>
                </div>
            </div>
            <div className="same-box">
                <div className="img">
                    <img src={p7} alt="" />
                </div>
                <div className="content">
                    <p>T-Shirt</p>
                </div>
            </div>
            <div className="same-box">
                <div className="img">
                    <img src={p8} alt="" />
                </div>
                <div className="content">
                    <p>T-Shirt</p>
                </div>
            </div>
            <div className="same-box">
                <div className="img">
                    <img src={p9} alt="" />
                </div>
                <div className="content">
                    <p>T-Shirt</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Product
