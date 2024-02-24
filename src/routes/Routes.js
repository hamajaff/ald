import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../components/HomePage";
import AboutPage from "../components/AboutPage";
import OfferPage from "../components/OfferPage";
import ServicesPage from "../components/ServicesPage";
import ConfirmationPage from "../components/ConfirmationPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/offer" element={<OfferPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/confirmation" element={<ConfirmationPage />} />
    </Routes>
  );
};

export default AppRoutes;
