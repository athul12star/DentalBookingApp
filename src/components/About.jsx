import React from "react";
import "./styles.css"; // Ensure your CSS file is correctly linked

function About() {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Us</h1>
        <p>Discover more about our dental practice and services.</p>
      </header>

      <section className="about-overview">
        <h2>Our Story</h2>
        <p>
          At DentalCare, we are committed to providing the best dental services
          to our clients. Our journey started a decade ago with a vision to
          revolutionize dental care with state-of-the-art technology and
          personalized care.
        </p>
      </section>

      <section className="about-services">
        <h2>Our Services</h2>
        <div className="services-list">
          <div className="service-item">
            <h3>Teeth Cleaning</h3>
            <p>
              Professional cleaning of your teeth by our experienced dental
              hygienists.
            </p>
          </div>
          <div className="service-item">
            <h3>Cavity Filling</h3>
            <p>Restoring the structure and function of your teeth.</p>
          </div>
          <div className="service-item">
            <h3>Root Canal</h3>
            <p>
              Repairing and saving your damaged or infected teeth with advanced
              procedures.
            </p>
          </div>
          <div className="service-item">
            <h3>Orthodontics</h3>
            <p>Straightening teeth and correcting bite issues.</p>
          </div>
        </div>
      </section>

      <section className="about-team">
        <h2>Meet Our Team</h2>
        <div className="team-list">
          <div className="team-member">
            <img
              src="https://via.placeholder.com/150"
              alt="Dr. John Doe"
              className="team-photo"
            />
            <h4>Dr. John Doe</h4>
            <p>Chief Dentist</p>
          </div>
          <div className="team-member">
            <img
              src="https://via.placeholder.com/150"
              alt="Dr. Jane Smith"
              className="team-photo"
            />
            <h4>Dr. Jane Smith</h4>
            <p>Orthodontist</p>
          </div>
        </div>
      </section>

      <section className="about-testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonial">
          <p>
            "The team at DentalCare is amazing. I had a great experience with
            their professional and friendly staff."
          </p>
          <h4>- Emily R.</h4>
        </div>
        <div className="testimonial">
          <p>
            "The best dental care I have ever experienced! Professional,
            courteous, and friendly staff made me feel like family… would
            highly recommend to anyone!"
          </p>
          <h4>- Michael B.</h4>
        </div>
      </section>
    </div>
  );
}

export default About;
