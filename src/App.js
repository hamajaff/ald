import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import AppRoutes from "./routes/Routes";
import CookieBanner from "./components/Cookies";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <AppRoutes />
        <CookieBanner />
      </div>
    </Router>
  );
}

export default App;
