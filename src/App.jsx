import React from "react";
import LandingPage from "./pages/LandingPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => (
  <div className="flex-grow">
    <Header />
    <LandingPage />
    <Footer />
  </div>
);

export default App;
