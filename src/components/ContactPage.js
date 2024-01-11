import React from "react";
import ".//styled/ContactPage.css";

function ContactPage() {
  const googleMapsURL =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2043.9586308394325!2d17.762376976901155!3d59.18326957454388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f7279c4424f5f%3A0x8b781f28276048e4!2sDalg%C3%A5ngen%2031A%2C%20147%2063%20Uttran!5e0!3m2!1ssv!2sse!4v1704944360142!5m2!1ssv!2sse"; // Ersätt med din faktiska Google Maps-embed-länk

  return (
    <div className="contactContainer">
      <div className="headerPlaceholder"></div>
      <div className="contactInfo">
        <h2>Kontaktinformation</h2>
        <ul>
          <li>E-post: info@aldentreprenad.se</li>
          <li>Adress: Dalgången 31A, Uttran</li>
          <li>Telefon: 070-0540780</li>
        </ul>
      </div>

      <div className="mapContainer">
        <iframe
          title="map"
          src={googleMapsURL}
          width="100%"
          height="300px"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default ContactPage;
