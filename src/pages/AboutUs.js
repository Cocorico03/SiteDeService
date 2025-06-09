import React from 'react';
import './AboutUs.css';
import './GeneralBg.css';
import StoryImage from '../pictures/AboutUsPic.jpg';
import TeamPic from '../pictures/TeamPic.jpg';


function AboutUs() {
  return (
    <div className='generalBg'>
        
      <div><h2 className='AboutUsHeading'>Who are we ?</h2></div>
   
      {/*Second Hero section,Our Team*/}

    <section class="Hero-SectionStory">
        <div class="container px-0">
            <div class="row align-items-center">
                <div class="col-lg-6">
        <img src={StoryImage} class="img_story" alt="StoryImage"/>
                </div>

        
                <div class="col-lg-6 text-center">
                                       <div class="aboutus_container" onclick="location.href('./#about')">
                        <div class="aboutUs_content">
                            <h3 className='HeadStory'>Kombo Hair Saloon</h3>
                            <p className='Text'>Our women’s hair salon is located in the heart of Canada’s capital, Ottawa. Our mission is to enhance the unique beauty of every woman by offering a wide range of hair care and styling services. We believe that every woman should feel seen, celebrated, and empowered through her personal style.

The salon was founded by a young woman with a passion for the world of hair, driven by the belief that a woman’s hair is her crown of glory — a crown she should wear with pride.</p>
                                 
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>

   {/*Second Hero section,Our Team*/} 

<section class="Hero-SectionTeam">
        <div class="container px-0">
            <div class="row align-items-center">
                <div class="col-lg-6">
        <img src={TeamPic} class="img_team" alt="TeamPicture"/>
                </div>

        
                <div class="col-lg-6 text-center">
                                       <div class="aboutus_container" onclick="location.href('./#about')">
                        <div class="aboutUs_content">
                            <h3 className='HeadTeam'>Our Team</h3>
                            <p className='Text'>As we offer services for all hair textures, our team is made up of multicultural and professional staff dedicated to providing high-quality service. We are committed to meeting the needs of our diverse clientele and ensuring their complete satisfaction.</p>
              
                           
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
