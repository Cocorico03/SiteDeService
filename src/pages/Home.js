import React from 'react';
import './Home.css';
import overlayImage from '../pictures/overlayImage.jpg';

function Home() {
  return (
    <div className="home-background">
      <div className="overlay-content text-center">
        <img src={overlayImage} alt="Slogan" className="slogan-img" />
        <a href="/appointment">
          <button className="btn btn-lg btn-custom">Book my Appointment</button>
        </a>
      </div>
    </div>
  );
}

export default Home;
