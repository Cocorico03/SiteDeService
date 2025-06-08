import React from 'react';
import './AboutUs.css';
import './GeneralBg.css';
import picture from '../pictures/AboutUsPic.jpg';


function AboutUs() {
  return (
    <div className='generalBg'>
        
      <div className='AboutUsHeading'><h2 className='display-5'>Our Story</h2></div>
  
    <section class="Hero-Section">
        <div class="container px-0">
            <div class="row align-items-center">
                <div class="col-lg-6">
        <img src="/pictures/AboutUsPic.jpg" class="img_Accueil" alt="StoryImage"/>
                </div>

        
                <div class="col-lg-6 text-center">
                                       <div class="aboutme_container" onclick="location.href('./#about')">
                        <div class="aboutUs_content">
                            <h5 class="heading_sm">Text,</h5>
                            <h3 class="heading_lg">Text <span>Text</span></h3>
                            <p class="about">
                                text 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    </div>
  )
}

export default AboutUs
