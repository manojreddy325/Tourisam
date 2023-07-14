import React from 'react';
import beachhoneymoon from '../../assets/beachhoneymoon.jpg';
import cruisehoneymoon from '../../assets/cruisehoneymoon.jpg';
import multidestination from '../../assets/multidestination.jpg';
import selfdrivehoneymoon from '../../assets/selfdrivehoneymoon.jpg';
import './index.css';
import Footer from '../Footer';
import Header from '../Header';
import Chatbots from '../Chatbots';

const honeymoons = () => {

    const openGoogleForm = () => {
        const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfp_6_Xsty2FnqbvB9tpDirA08A_I4Lfw4NISGM0M04NuhHHg/viewform";
        window.open(formUrl, '_blank');
      };

    return (
        <>
            <div className='honeymoons-nav-container'>
            <Header />
                <div className='honeymoons-container'>
                    <h1 className='honeymoons-heading'>Honeymoons</h1>
                    <p className='honeymoons-des'>As your personal travel planner, we get you the best of the best on <br /> your nuptial break with a big sprinkle of romantic activities that will <br /> keep you parked on cloud 9!</p>
                </div>
            </div>
            <div className='choose-your-container'>
                <h1 className='choose-heading'>CHOOSE YOUR HONEYMOON PREFERENCE</h1>
                <div className='vecations-container'>
                    <img src={beachhoneymoon} className='vecations-image' alt="vecations" />
                    <div className='vecations-description-container'>
                        <h1 className='vecations-heading'>Beach Honeymoons</h1>
                        <p className='vecations-description'>Sunny days, white sands, clear blue water and only the sound of the <br />ocean, beach honeymoons are our favourite for newlyweds. No matter <br />the time of the year you are getting married, there is always a sunny <br />beach somewhere around the world waiting for you.</p>
                        <h1 className='vecations-specialties'>Our Planning Specialties</h1>
                        <p className='vecations-specialties-des'>Sunset Cruises <br />Spa Dates <br /> Water Sports</p>
                    </div>
                </div>
                <div className='vecations-container'>
                    <div className='celabrations-description-container'>
                        <h1 className='vecations-heading'>Cruise Honeymoons</h1>
                        <p className='vecations-description'>Sail far away from the wedding ceremonial stress with a cruise on your <br /> honeymoon. The hottest trend in honeymoon, we recommend a cruise<br />ship which lets you relax and be pampered while seeing new places.</p>
                        <h1 className='vecations-specialties'>Our Planning Specialties</h1>
                        <p className='vecations-specialties-des'>Luxurious Accommodations <br />Gourmet Dining <br /> Multiple Destinations</p>
                    </div>
                    <img src={cruisehoneymoon} className='celabrations-image' alt="celebrating" />
                </div>
                <div className='vecations-container'>
                    <img src={multidestination} className='vecations-image' alt="events" />
                    <div className='vecations-description-container'>
                        <h1 className='vecations-heading'>Multi Destination Honeymoons</h1>
                        <p className='vecations-description'>If one destination is not enough, then multi-moons are for you. We pride <br />ourselves on combining complimentary destinations in a way nobody <br />else can match. After all newlyweds deserve the best of both worlds.</p>
                        <h1 className='vecations-specialties'>Our Planning Specialties</h1>
                        <p className='vecations-specialties-des'>Vibrant Cities Itineraries <br />Relaxing Paradise Getaways <br /> Diverse Experience</p>
                    </div>
                </div>
                <div className='vecations-container'>
                    <div className='celabrations-description-container'>
                        <h1 className='vecations-heading'>Self Drive Honeymoons</h1>
                        <p className='vecations-description'>Just you, your beloved, a swanky car and miles of scenic beauty. <br /> Discover a new place in depth or just get lost in time with a self drive<br /> honeymoon. We tailor the perfect itinerary and handle every little detail<br />so you can sit back and have a memorable experience.</p>
                        <h1 className='vecations-specialties'>Our Planning Specialties</h1>
                        <p className='vecations-specialties-des'>Off-Beat Explorations <br />Zero Time Restraints <br /> Complete Flexibility</p>
                    </div>
                    <img src={selfdrivehoneymoon} className='celabrations-image' alt="experiences" />
                </div>
                <h1 className='our-question-heading'>TAKE OUR QUESTIONNAIRE</h1>
                <div>
                    <button className='get-sarted-button' onClick={openGoogleForm}>Get Started</button>
                </div>
                <Chatbots />
                <Footer />
            </div>
        </>
    )
}

export default honeymoons;