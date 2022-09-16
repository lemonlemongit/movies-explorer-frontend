import React from "react";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Promo from "../Promo/Promo.js";
import NavTab from "../NavTab/NavTab";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import Footer from "../Footer/Footer";

function Main() {
  return (
    <main>
      <Header />
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Footer />
    </main>
  );
}
export default Main;
