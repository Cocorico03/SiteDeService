
import React,{useState} from 'react';
import './Contacts.css';
import './GeneralBg.css';



function Contacts() {

    const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    request: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

   // Envoi du formulaire, comme ce n est qu un projet pour le cours le formulaire n est envoye nul part
  const handleSubmit = (e) => {
    e.preventDefault();
   
    //Notification au client que le formulaire a bien ete envoye
    console.log(formData);
    alert('Your request has been sent!');
    
    //Vide le formulaire apres soumission pour un rendu plus professionnel
    setFormData({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      request: '',
      message: ''
    });
  };



  return (



<div className="generalBgContact">
      <h2>Kombo Hair Saloon - Contact Us</h2>
      <p className='ContactParagraphe'> You want to benefit from one of our services? But first you have some questions?  
        <div>We would be happy to answer you! Please fill out the form below and we will get back to you shortly.</div></p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name:</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Last Name:</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Phone Number:</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Request:</label>
          <select name="request" value={formData.request} onChange={handleChange} required>
            <option value="">-- Please choose an option --</option>
            <option value="Haircut">Haircut</option>
            <option value="Hair Coloring">Braids</option>
            <option value="Braids">Hair Coloring</option>
            <option value="Hair Treatment">Hair Treatment</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label>Message:</label>
          <textarea name="message" value={formData.message} onChange={handleChange} rows="5" required></textarea>
        </div>

        <button type="submit" className="submit-button">Send</button>
      </form>
    </div>
  );
}


export default Contacts
