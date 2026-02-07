import React from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Confirmation from "../components/Confirmation/Confirmation";

function ConfirmationPage() {
  return (
    <div className="page confirmation-page">
      <Header />
      <Hero minimal />
      <Confirmation />
    </div>
  );
}

export default ConfirmationPage;
