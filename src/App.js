import React from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import Header from "./components/Header";
import AppRoutes from "./routes/Routes";
import CookieBanner from "./components/Cookies";
import Footer from "./components/Footer";
import "./App.css";

// Skapa en intern komponent för att använda useLocation hook
function LayoutWithFooter() {
  let location = useLocation(); // Hämta nuvarande plats/URL

  return (
    <>
      <div className="content-wrap">
        <Header />
        <AppRoutes />
        <CookieBanner />
      </div>
      {/* Visa inte Footer på HomePage (antar att HomePage är på "/") */}
      {location.pathname !== "/" && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="site-container">
        {/* Uppdaterad omslutande div */}
        {/* Använd LayoutWithFooter som innehåller logiken för att visa/dölja Footer */}
        <LayoutWithFooter />
      </div>
    </Router>
  );
}

export default App;
