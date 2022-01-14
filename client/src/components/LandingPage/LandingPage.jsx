import React from "react";
import "./LandingPage.scss";
import Navbar from "./Navbar/Navbar";
import PageFirst from "./PageFirst/PageFirst";
import PageSecond from "./PageSecond/PageSecond";
import PageThird from "./PageThird/PageThird";

function LandingPage() {
  return (
    <div className="landing-page">
      <Navbar />
      <PageFirst />
      <PageSecond />
      <PageThird />
    </div>
  );
}

export default LandingPage;
