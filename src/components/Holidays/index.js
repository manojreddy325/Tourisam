import React from 'react';
import vecations from '../../assets/vecations.jpg';
import celebrating from '../../assets/celebrating.jpg';
import events from '../../assets/events.jpg';
import experiences from '../../assets/experiences.jpg';
import './index.css';
import Footer from '../Footer';
import Header from '../Header';
import Chatbots from '../Chatbots';

const Holidays = () => {

    const openGoogleForm = () => {
        const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfp_6_Xsty2FnqbvB9tpDirA08A_I4Lfw4NISGM0M04NuhHHg/viewform";
        window.open(formUrl, '_blank');
      };

    return (
        <>
            <div className='holidays-nav-container'>
            <Header />
                <div className='holidays-container'>
                    <h1 className='holidays-heading'>Holidays</h1>
                    <p className='holidays-des'>From figuring out where to send you, what sights will excite you to how best to save <br /> money, we've got your next trip covered. All you need to do is experience the best of the destination!!</p>
                </div>
            </div>
            <div className='choose-your-container'>
                <h1 className='choose-heading'>CHOOSE YOUR HOLIDAY PREFERENCE</h1>
                <div className='vecations-container'>
                    <img src={vecations} className='vecations-image' alt="vecations" />
                    <div className='vecations-description-container'>
                        <h1 className='vecations-heading'>Vacations</h1>
                        <p className='vecations-description'>They say a vacation is what you take when you can no longer take what <br />you are taking! We couldn’t agree more, so we build each itinerary for a <br />destination that would refresh your soul. No matter who you choose to <br />travel with, it’s our responsibility to inject the excitement into your<br /> vacation.</p>
                        <h1 className='vecations-specialties'>Our Planning Specialties</h1>
                        <p className='vecations-specialties-des'>Family Holiday <br />Escapades with friends <br /> Women Vacations</p>
                    </div>
                </div>
                <div className='vecations-container'>
                    <div className='celabrations-description-container'>
                        <h1 className='vecations-heading'>Celebrations</h1>
                        <p className='vecations-description'>Celebrate a special day or one coming up in your life with our tailored <br /> holidays. Bring in a birthday in an exotic location, choose a romantic<br /> getaway on your anniversary or paint a town red on a crazy bachelor/ <br /> bachelorette party. We’ll brainstorm on some exciting destination and <br />put it all together so you won’t have to lift a finger.</p>
                        <h1 className='vecations-specialties'>Our Planning Specialties</h1>
                        <p className='vecations-specialties-des'>Birthdays & Anniversaries <br />Bachelors & Bachelorettes <br /> Babymoons</p>
                    </div>
                    <img src={celebrating} className='celabrations-image' alt="celebrating" />
                </div>
                <div className='vecations-container'>
                    <img src={events} className='vecations-image' alt="events" />
                    <div className='vecations-description-container'>
                        <h1 className='vecations-heading'>Events</h1>
                        <p className='vecations-description'>A holiday in Spain clubbed with a Coldplay concert, a Wimbledon <br />match followed by a road trip through the English countryside – we can <br />make it happen! Get in touch with us to know all the ‘it’ events <br />happening around the world. We’ll not only score you those fleeting<br /> tickets but also plan an amazing holiday around it.</p>
                        <h1 className='vecations-specialties'>Our Planning Specialties</h1>
                        <p className='vecations-specialties-des'>Sporting Events <br />Music Concerts <br /> Art & Shopping Festivals</p>
                    </div>
                </div>
                <div className='vecations-container'>
                    <div className='celabrations-description-container'>
                        <h1 className='vecations-heading'>Experiences</h1>
                        <p className='vecations-description'>Our expertise makes you a traveler instead of a tourist. Choose an <br /> experience and let us weave a holiday around it. Food, culture, nature,<br /> adrenalin – any experience you choose, we’ll plan a complete trip that<br />will truly leave you in wonder.</p>
                        <h1 className='vecations-specialties'>Our Planning Specialties</h1>
                        <p className='vecations-specialties-des'>Food Holidays <br />Adventure Breaks <br /> Cultural Escapes</p>
                    </div>
                    <img src={experiences} className='celabrations-image' alt="experiences" />
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

export default Holidays;