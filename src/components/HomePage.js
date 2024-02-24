import React from "react";
import { Link } from "react-router-dom";
import "./styled/HomePage.css";

function HomePage() {
  return (
    <div className="homeContainer">
      <video autoPlay loop muted className="backgroundVideo">
        <source src="/Stockholm-summer.mp4" type="video/mp4" />
      </video>

      <div className="content">
        <h1 className="slogan">Din Partner för en hållbar framtid</h1>
        <Link to="/offer" className="offerButton">
          Begär offert
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
