import React from 'react';
import { FiPhone, FiMail} from 'react-icons/fi';
import Mastercard from '../../assets/master-card.svg'; 
import GooglePay from '../../assets/google-pay.svg';
import Visa from '../../assets/visa.svg';
import Phonepe from '../../assets/phonepe-logo-icon.svg';
import Paytm from '../../assets/paytm.svg';
import './index.css';

const Footer = () => {
    return(
        <>
        <div  className='footer-container'>
            <div className='contact-info-container'>
                <h1 className='contact-info-heading'>CONTACT INFO</h1>
               <div className='phone-icons'><p><FiPhone style={{fontSize:"16px"}}/> </p><p>123-456-7890</p></div> 
                <div className='phone-icons'><p><FiMail style={{fontSize:"16px"}}/> </p><p>example@example.com</p></div> 
                <div className='all-rights'><p>© 2023 Yatra With Us<br /> All Rights Reserved.</p></div>
            </div>
            <div className='contact-info-container'>
                <h1 className='contact-info-heading'>ABOUT US</h1>
                <div className='contact-info-des'><p>Working With Us</p></div>
                <hr className='horizontal-line'/>
                <div className='contact-info-des'><p>Be Our Partner</p></div>
                <hr className='horizontal-line'/>
            </div>
            <div className='contact-info-container'>
                <h1 className='contact-info-heading'>SUPPORT</h1>
                <div className='contact-info-des'><p>Customer Support</p></div>
                <hr className='horizontal-line'/>
                <div className='contact-info-des'><p>Privacy & Policy</p></div>
                <hr className='horizontal-line'/>
                <div className='contact-info-des'><p>Contact Channels</p></div>
                <hr className='horizontal-line'/>
            </div>
            <div className='contact-info-container'>
                <h1 className='contact-info-heading'>PAY SAFELY WITH US</h1>
                <div className='contact-info-des'><p>The payment is encrypted and <br/>transmitted securely with an SSL <br/>protocol.</p></div>
                <div>
                    <img src={Mastercard} className='payment-icons' alt='Mastercard'/>
                    <img src={Visa} className='payment-icons' alt='Visa'/>
                    <img src={GooglePay} className='payment-icons' alt='GooglePay'/>
                    <img src={Phonepe} className='payment-icons' alt='Phonepe'/>
                    <img src={Paytm} className='payment-icons' alt='Paytm'/>
                </div>
            </div>
        </div>
        <div className='copyright-container'>
                <h1 className='copygight-heading'>COPYRIGHT 2023 YATRA, ALL RIGHT RESERVED</h1>
            </div>
        </>
    )
}

export default Footer;