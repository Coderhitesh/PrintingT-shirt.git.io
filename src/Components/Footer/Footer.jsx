import React, { useEffect } from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  }, []);
  return (
    <>
      <footer>
        <div className="container">
          <div className="same-col col-1">
            <div className="heading">
              <span>Quick Links</span>
            </div>
            <ul className='footerlistsame'>
              <li><Link to={'/'}>Home</Link></li>
              <li><Link to={'/about'}>About Us</Link></li>
              <li><Link to={'/infrastructure'}>Infrastructure</Link></li>
              <li><Link to={'/contact'}>Contact Us</Link></li>
            </ul>
          </div>
          <div className="same-col col-2">
            <div className="heading">
              <span>Main Link</span>
            </div>
            <ul className='footerlistsame'>
              <li><Link to={'/product'}>Products</Link></li>
              <li><Link to={'/client'}>Clients</Link></li>
              <li><Link to={'/testimonial'}>Testimonial</Link></li>
            </ul>
          </div>
          <div className="same-col col-3">
            <div className="heading">
              <span>Get In Touch</span>
            </div>
            <div className="adress-box footerlistsame">
              <div className="location adress-same">
                <i class="ri-map-pin-range-line"></i>
                <p>surat,Gujarat,India,395010</p>
              </div>
              <div className="number adress-same">
              <i class="ri-phone-fill"></i>
                <a href='tel:+917069959787'>7069959787</a>
              </div>
              <div className="mail adress-same">
              <i class="ri-mail-fill"></i>
                <a href='mailto:'>demo@gmail.com</a>
              </div>
              <div className="mail-2 adress-same">
              <i class="ri-mail-fill"></i>
                <a href="mailto:">demo@gmail.com</a>
              </div>
            </div>
          </div>
          <div className="same-col col-4">
            <div className="heading">
              <span>Follow On</span>
            </div>
            <div className="footerlistsame social-link">
              <Link target='_blank' to={''}><i class="ri-facebook-box-fill"></i></Link>
              <Link target='_blank' to={''}><i class="ri-twitter-fill"></i></Link>
              <Link target='_blank' to={''}><i class="ri-linkedin-box-fill"></i></Link>
              <Link target='_blank' to={''}><i class="ri-instagram-line"></i></Link>
            </div>
          </div>
        </div>
        <div className="bottom-footer">
          <p>© 2024 UMA Fashion. All Right Reseverd.</p>
          <p>Designed By <a href="https://dgmt.in">DGMT.in</a></p>
        </div>
      </footer>
    </>
  )
}

export default Footer