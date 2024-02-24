import React, { useState } from "react";
import "./styled/OfferPage.css";
import emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom";

function OfferPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
  });
  const navigate = useNavigate();
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
        "service_z28tehd",
        "template_81deyyz",
        templateParams,
        "LTc7Zu9rcKbm5_w9r"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          resetForm();
          navigate("/confirmation");
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  };

  return (
    <div className="offerContainer">
      <div className="headerPlaceholder"></div>

      <form onSubmit={handleSubmit}>
        <div>
          <h1 className="offerH1">Offertförfrågan</h1>
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
