import React from 'react';
import './Appointment.css';

function Appointment() {
  return (
    <div className="appointment-wrapper">
      <form className="appointment-form">
        <div className="client-type">
          <label><input type="radio" name="clientType" /> New Client</label>
          <label><input type="radio" name="clientType" /> Returning Client</label>
        </div>

        <div className="row">
          <div className="form-group">
            <label>Preferred First Name*</label>
            <input type="text" required />
          </div>
          <div className="form-group">
            <label>Last Name*</label>
            <input type="text" required />
          </div>
        </div>

        <div className="row">
          <div className="form-group">
            <label>Preferred Date*</label>
            <input type="date" required />
          </div>
          <div className="form-group">
            <label>Time*</label>
            <input type="time" required />
          </div>
        </div>

        <div className="form-group">
          <label>Email Address*</label>
          <input type="email" required />
        </div>

        <div className="row">
          <div className="form-group">
            <label>Street Address</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Postal Code</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Province</label>
            <input type="text" />
          </div>
        </div>

        <div className="form-group">
          <label>Service Required</label>
          <input type="text" />
        </div>

        <div className="form-group">
          <label>Comments</label>
          <textarea rows="4" />
        </div>

        <button type="submit" className="submit-btn">SUBMIT</button>
      </form>
    </div>
  );
}

export default Appointment;

