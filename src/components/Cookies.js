import React, { useState, useEffect } from "react";
import "./styled/cookies.css"; // Skapa och importera en CSS-fil för styling

function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (consent !== "given") {
      setVisible(true);
    }
  }, []);

  const giveConsent = () => {
    localStorage.setItem("cookieConsent", "given");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookieBanner">
      <div className="cookieContent">
        <p>
          Denna webbplats använder cookies för att förbättra
          användarupplevelsen. Genom att fortsätta använda webbplatsen godkänner
          du användningen av cookies.
        </p>
        <button onClick={giveConsent}>Jag förstår</button>
      </div>
    </div>
  );
}

export default CookieBanner;
