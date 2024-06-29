import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import grafic from "../../imagens/men2.png";

import Header from "./components/Header/Header";
import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";
import Section3 from "./components/Section3/Section3";
import Footer from "../Components/Footer/Footer";
import "./home.css";

function Home() {

  return (
    <div className="HomeLandingPage">
        <Header />
      <section id="recursos">
        <Section1 />
      </section>
      <section id="sobre" className="homePage">
        <Section2/>
      </section>
      <section id="como-funciona" className="homePage4">
        <Section3/>
      </section>
      <section id="footer">
      <Footer />
      </section>
      
    </div>
  );
}

export default Home;
