import React, { useState } from "react";
import "../styles/styles.css"; 

function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., sending data to a server or displaying a confirmation message)
    console.log("Form submitted:", formData);
  };

  return (
    <div className="booking-form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

        <label htmlFor="date">Date:</label>
        <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required />

        <label htmlFor="time">Time:</label>
        <input type="time" id="time" name="time" value={formData.time} onChange={handleChange} required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" value={formData.message} onChange={handleChange} />

        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
}

export default Booking;
