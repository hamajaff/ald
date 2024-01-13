import React, { useState } from "react";
import "./styled/OfferPage.css";
import emailjs from "emailjs-com";

function OfferPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      description: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      to_name: "Ditt Namn eller Företags Namn",
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      description: formData.description,
    };

    emailjs
      .send(
        "service_335jk72",
        "template_81deyyz",
        templateParams,
        "LTc7Zu9rcKbm5_w9r"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          resetForm();
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  };

  return (
    <div>
      <div className="headerPlaceholder"></div>
      <img src="./banner-offer.png" alt="banner" className="offer-banner"></img>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Namn:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Telefon nummer:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Beskrivning:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="subbutton">
          Skicka förfrågan
        </button>
      </form>
    </div>
  );
}

export default OfferPage;
