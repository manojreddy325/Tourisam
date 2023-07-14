import './index.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { FiPhone, FiMail } from 'react-icons/fi';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaWhatsapp, FaYoutube } from 'react-icons/fa';
import backgroundvideo from '../../assets/background.mp4'
// import Chatbots from '../Chatbots';

const Home = () => {
  return (
    <>
      <div className="video-background">
        <video autoPlay loop muted>
          <source src={backgroundvideo} type="video/mp4" />
        </video>
        <div className='contact-container'>
          <div className='side'><p><FiPhone style={{fontSize:"25px"}}/> </p><p>123-456-7890</p></div>
          <div className='side'><p><FiMail style={{fontSize:"25px"}}/> </p><p>examples@example.com</p></div>
        </div>
        <div className='nav-container'>
          <ul className='nav-items'>
            <Link to="/" className="link-items"><li className='nav-container-items'>HOME</li></Link>
            <Link to="/honeymoons" className="link-items"><li className='nav-container-items'>HONEYMOONS</li></Link>
            <Link to="/holidays" className="link-items"><li className='nav-container-items'>HOLIDAYS</li></Link>
            {/* <Link to="/clienttestimonial" className="link-items"><li className='nav-container-items'>CLIENT TESTIMONIAL</li></Link> */}
            <Link to="/our-special-package" className="link-items"><li className='nav-container-items'>YATRA SPECIAL</li></Link>
            {/* <Link to="/blog" className="link-items"><li className='nav-container-items'>BLOG</li></Link> */}
            <Link to="/contact" className="link-items"><li className='nav-container-items'>CONTACT</li></Link>
          </ul>
        </div>
        <div className='head-container'>
          <Link to="/our-special-package" className="link-items"><h1 className='heading'>Yatra</h1></Link>
          <p className='paragrah'>We plan and book trips based on your likes, budget and your dream destinations,<br /> so all you have to do is. Do <Link to="/our-special-package" className="link-items"><span className='span-element'>'Yathra'</span></Link> with us!! </p>
        </div>
        <div className='footer'>
          <div className='social-container'>
            <div className='side'>
              <a href="https://www.facebook.com/" target='_tab'><FaFacebook className='facbook-icon icon' /></a>
              <a href="https://www.instagram.com/" target='_tab'><FaInstagram className='insta-icon icon' /></a>
              <a href="https://www.youtube.com/" target='_tab'><FaYoutube className='youtube-icon icon' /></a>
            </div>
          </div>
          <div className='whatsapp-container'>
          <a href="https://wa.me/9848088221" className='whatsapp_float whatsapp-icon' target='_tab'>
            <FaWhatsapp />
            <div className='whatsapp-text'>Chat with us</div>
          </a>
        </div>
        </div>
      </div>
    </>
  )
}

export default Home;