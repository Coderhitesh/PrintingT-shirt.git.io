import React, { useEffect } from 'react'
import './AboutHome.css'
import bg from './about-bg.jpg'
import { Link } from 'react-router-dom'

function AboutHome() {
    useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth' 
        });
      }, []);
  return (
    <section className='about-home-section'>
      <div className="container">
        <div className="heading">
            <span>About Us</span>
        </div>
        <div className="about-main">
            <div className="left">
                <img src={bg} alt="" />
            </div>
            <div className="right">
                <span>We Are UMA Fashion</span>
                <p> UMA Fashion is your go-to destination for stylish printed t-shirts that make a statement. We specialize in offering high-quality t-shirts adorned with unique and eye-catching prints that allow you to express your individuality and sense of style. Whether you're looking for a bold graphic, a witty slogan, or a trendy design, we have something for everyone.</p>
                {/* <div className="service-img">
                    <img src={s1} alt="" />
                    <img src={s2} alt="" />
                    <img src={s3} alt="" />
                    <img src={s4} alt="" />
                    <img src={s5} alt="" />
                </div> */}
                <p>At UMA Fashion, we take pride in our commitment to quality. Each t-shirt is carefully crafted using premium materials to ensure comfort, durability, and long-lasting wear. Our printing process utilizes state-of-the-art technology, resulting in vibrant colors and sharp details that stand out from the crowd.</p>
                <p>Not only do we offer a curated selection of pre-designed t-shirts, but we also provide custom printing services, allowing you to bring your ideas to life. Whether you're looking to promote your brand, commemorate a special event, or create personalized gifts, we can turn your vision into reality.</p>
                <Link className='main-button about-btn' to={'/about'}>Read More</Link>
            </div>
        </div>
      </div>
    </section>
  )
}

export default AboutHome
