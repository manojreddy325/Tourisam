import React, { useState } from 'react';
import ChatBot from 'react-simple-chatbot';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
// import Botimg from '../../assets/bot.jpg';
// import Chaimg from '../../assets/chatimg.jpg';
import Chatbotimg from '../../assets/chatbot.jpg';
import Cahtbotuser from '../../assets/chatbotuser.jpg';
import './index.css';

const Chatbot = () => {
  const [minimized, setMinimized] = useState(false);

  const toggleMinimize = () => {
    setMinimized(!minimized);
  };

  const toggleChatbot = () => {
    if (minimized) {
      setMinimized(false);
    }
  };

  const steps = [
        {
            id: 'Greet',
            message: 'Hello, Welcome to Yatra with us',
            trigger: 'Done',
        },
        {
            id: 'Done',
            message: 'Please enter your name!!',
            trigger: 'waiting1',
        },
        {
            id: 'waiting1',
            user: true,
            trigger: 'Name',
        },
        {
            id: 'Name',
            message: 'Hi {previousValue}, Please select your Package',
            trigger: 'Packages',
        },
        {
            id: 'Packages',
            options: [
                {
                value: 'Chardam',
                label: 'Chardam',
                trigger: 'Chardam',
                },
                {
                value: 'Goa',
                label: 'Goa',
                trigger: 'Goa',
                },
                {
                value: 'Gokarna',
                label: 'Gokarna',
                trigger: 'Gokarna',
                },
                {
                value: 'Manali',
                label: 'Manali',
                trigger: 'Manali',
                },
            ],
        },
        {
            id: 'Chardam',
            message:
                'Thanks for letting us know about your Chardam Yatra Package. Our team will contact you ASAP.',
            end: true,
        },
        {
            id: 'Goa',
            message:
            'Thanks for letting us know about your Goa Yatra Package. Our team will contact you ASAP.',
            end: true,
        },
        {
            id: 'Gokarna',
            message:
            'Thanks for letting us know about your Gokarna Yatra Package. Our team will contact you ASAP.',
            end: true,
        },
        {
            id: 'Manali',
            message:
            'Thanks for letting us know about your Manali Yatra Package. Our team will contact you ASAP.',
            end: true,
        },
      ];

  return (
    <>
      {!minimized ? (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <FontAwesomeIcon
              icon={faMinus}
              size="lg"
              onClick={toggleMinimize}
            />
          </div>
          <div className="chatbot-content">
          <ChatBot
              steps={steps}
              headerTitle="Chatbot"
              botAvatar={Chatbotimg}
              userAvatar={Cahtbotuser}
              bubbleStyle={{ backgroundColor: '#f5f5f5', color: '#000' }}
              inputStyle={{ backgroundColor: '#fff', color: '#000' }}
            />
          </div>
        </div>
      ) : (
        <div className="chatbot-image" onClick={toggleChatbot}>
          <img src={Chatbotimg} alt="Bot" />
        </div>
      )}
    </>
  );
};

export default Chatbot;
