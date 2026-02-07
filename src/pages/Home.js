import React from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import MenuSection from "../components/MenuSection/MenuSection";

function Home() {
  return (
    <div className="page home-page">
      <Header />
      <Hero />
      <MenuSection />
    </div>
  );
}

export default Home;
