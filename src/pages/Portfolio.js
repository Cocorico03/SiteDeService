import React from 'react';
import './Portfolio.css';
import './GeneralBg.css';
import Braids from '../pictures/Braids.jpg';
import Braids2 from '../pictures/BraidsO.jpg'
import Braids3 from '../pictures/BRAIDS3.jpg';
import Simple1 from '../pictures/CUT1.jpg';
import Simple2 from '../pictures/HairSimple.jpg';
import Simple3 from '../pictures/Easy.jpg';
import EVT1 from '../pictures/CoiffeSimple.jpg';
import EVT2 from '../pictures/PicEVT1.jpg';
import EVT3 from '../pictures/EVt.jpg';
import Color1 from '../pictures/CouleurE.jpg';
import Color2 from '../pictures/ColorationCheveuxAfro.jpg';
import Color3 from '../pictures/COLOR.jpg';


function Portfolio() {
  return (
    <div className='generalBg'>
      <h2 >
        <span className='Portfolio-Heading'>Hairstyles and Services in Images </span>
      </h2>

      <div className='Photos'>
        {/* Section 1 :  Coiffures Simples*/}
      <section className="portfolio-section">
        <h3>Simple Hairstyles</h3>
        <div className="portfolio-gallery">
          <img src={Simple1} alt="Simple 1" />
          <img src={Simple2} alt="Simple 2" />
          <img src={Simple3} alt="Simple 3" />
        </div>
      </section>
      {/* Section 2 : Braids */}
      <section className="portfolio-section">
        <h3>Braids Hairstyles</h3>
        <div className="portfolio-gallery">
          <img src={Braids} alt="Braids 1" />
          <img src={Braids2} alt="Braids 2" />
          <img src={Braids3} alt="Braids 3" />
        </div>
      </section>
      
      {/* Section 3 : Colorations */}
      <section className="portfolio-section">
        <h3>Hair Coloring</h3>
        <div className="portfolio-gallery">
          <img src={Color1} alt="Color 1" />
          <img src={Color2} alt="Color 2" />
          <img src={Color3} alt="Color 3" />
        </div>
      </section>
      
{/* Section 3 : Événementiel */}
      <section className="portfolio-section">
        <h3>Hairstyles for events</h3>
        <div className="portfolio-gallery">
          <img src={EVT1} alt="Evenement 1" />
          <img src={EVT2} alt="Evenement 2" />
          <img src={EVT3} alt="Evenement 3" />
        </div>
      </section>
      </div>
    
    </div>

     
  )
}

export default Portfolio
