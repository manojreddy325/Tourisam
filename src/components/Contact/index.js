import React, { useState } from 'react';
import axios from 'axios';
import Header from '../Header';
import Footer from '../Footer';
import { MdPhone, MdOutlineEmail, MdPlace } from "react-icons/md";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

import './index.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            Name: name,
            Email: email,
            Message: message
        }
        axios.post('https://sheet.best/api/sheets/a40344a9-0e1b-470c-86a9-bdef2f721649',data).then((response) => {
            console.log(response)
            setName('');
            setEmail('');
            setMessage('');
        })
    };

    const containerStyle = {
        width: '100%',
        height: '400px'
      };
    
      const center = {
        lat: 17.41080088695119,
        lng: 78.50732280181364
      };

      const position = {
        lat: 17.41080088695119,
        lng: 78.50732280181364
      };

    return (
        <>
        <div className='contact-us-container'>
            <Header />
            <div className='contact-sub-container'>
                <div className='get-in-touch'>
                    <h1 className='contact-heading'>CONTACT US</h1>
                    <p className='contact-des'>Get Intouch</p>
                </div>
            </div>
            <div className='contact-information-container'>
                <div>
                    <div className='contact-phone-icon'><MdPhone /></div>
                    <h1 className='contact-phone-des'>PHONE</h1>
                    <p className='contact-phone-num'><a href='123-456-7890' className='contact-phone-num'>123-456-7890</a></p>
                </div>
                <div>
                    <div className='contact-phone-icon'><MdOutlineEmail /></div>
                    <h1 className='contact-phone-des'>EMAIL</h1>
                    <p className='contact-phone-num'><a href='example@example.com' className='contact-phone-num'>example@example.com</a></p>
                </div>
                <div>
                    <div className='contact-phone-icon'><MdPlace /></div>
                    <h1 className='contact-phone-des'>LOCATION</h1>
                    <p className='contact-phone-num'><a href='Hyderabad' className='contact-phone-num'>Hyderabad</a></p>
                </div>
            </div>
            <div className='leave-us-info-container'>
                <h1 className='leave-us-heading'>LEAVE US YOUR INFO</h1>
                <p className='leave-us-des'>and we will get back to you.</p>
                <form onSubmit={handleSubmit} autoComplete="off">
                    <div style={{margin:'5px'}}>
                        <label htmlFor="name" style={{marginRight:'10px'}}>Name:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div style={{margin:'5px'}}>
                        <label htmlFor="email" style={{marginRight:'15px'}}>Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div style={{margin:'10px'}}>
                        <label htmlFor="message" style={{marginRight:'5px'}}>Message:</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className='submit-btn'>Submit</button>
                </form>
            </div>
            <div>
            <LoadScript googleMapsApiKey="AIzaSyCwntS3t5GSR6RsRu2W5JGoQUqxyWz_Wmg">
                <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15} >
                    <Marker position={position} />
                </GoogleMap>
            </LoadScript>
            </div>
            <Footer />
        </div>
        </>
    )
}

export default Contact;