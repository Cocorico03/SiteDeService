import React from 'react';
import './Services.css';

import shampooImg from '../pictures/shampoo.jpg';
import treatmentImg from '../pictures/treatment.jpg';
import stylingImg from '../pictures/styling.jpg';
import haircutImg from '../pictures/haircut.jpg';
import coloringImg from '../pictures/coloring.jpg';
import braidsImg from '../pictures/braids.png';

const services = [
  {
    title: 'SHAMPOO',
    image: shampooImg,
    description:
      "At Kombo Hair Salon, our shampoo services are more than just a rinse — they’re a rejuvenating experience. We use salon-grade shampoos tailored to your hair type to cleanse, hydrate, and restore your hair’s natural shine.",
  },
  {
    title: 'HAIR TREATMENT',
    image: treatmentImg,
    description:
      "Our treatments restore your hair’s health and shine. We offer nourishing services including amino and keratin treatments to hydrate and repair dry, damaged, or treated hair.",
  },
  {
    title: 'HAIR STYLING',
    image: stylingImg,
    description:
      "Whether it’s a sleek blowout, a soft curl, or an elegant updo, our styling experts ensure your hair looks flawless for any occasion. Ideal for weddings, photoshoots, or everyday glam.",
  },
  {
    title: 'HAIRCUT',
    image: haircutImg,
    description:
      "Precision bobs, layered cuts, or edgy pixies — our stylists tailor each haircut to your face shape, lifestyle, and preferences. We help you feel confident and refreshed.",
  },
  {
    title: 'COLORING',
    image: coloringImg,
    description:
      "From full-color changes to highlights and balayage, we use high-quality, ammonia-free colors to give your hair a vibrant, lasting look that reflects your personality.",
  },
  {
    title: 'BRAIDS',
    image: braidsImg,
    description:
      "Our braiding services include box braids, cornrows, twists, and custom styles that protect your hair while expressing your individuality. Perfect for all hair types.",
  },
];

function Services() {
  return (
    <div className="services-wrapper">
      <h2>Our Services</h2>
      {services.map((service, index) => (
        <div className="service-item" key={index}>
          <img src={service.image} alt={service.title} className="service-img" />
          <div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Services;

