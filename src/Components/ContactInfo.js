import React from 'react';
import { FaLinkedin, FaInstagram, FaPhoneAlt, FaHome, FaGithub, FaEnvelope } from 'react-icons/fa'; // Import the email icon

export default function ContactInfo() {
  return (
    <div className="contact-container my-5">
      <a href="https://www.linkedin.com/in/thisissurabhisinha/" target="_blank" rel="noreferrer">
        <FaLinkedin className="contact-icon" />
      </a>
      <a href="tel:+911234567890">
        <FaPhoneAlt className="contact-icon" />
      </a>
      <a href="https://www.google.com/maps/place/Kanpur,+Uttar+Pradesh/@26.4471737,80.3383828,12z/data=!3m1!4b1!4m6!3m5!1s0x399c4770b127c46f:0x1778302a9fbe7b41!8m2!3d26.449923!4d80.3318736!16zL20vMDFfcTdo?entry=ttu&g_ep=EgoyMDI0MTAyMC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noreferrer">
        <FaHome className="contact-icon" />
      </a>
      <a href="https://github.com/ThisIsSurabhiSinha" target="_blank" rel="noreferrer">
        <FaGithub className="contact-icon" />
      </a>
      <a href="mailto:surabhisinha514@gmail.com"> 
        <FaEnvelope className="contact-icon" />
      </a>
      <div className="text-appear"></div>
    </div>
  );
}
