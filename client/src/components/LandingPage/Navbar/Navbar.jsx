import React from "react";
import "./Navbar.scss";

function Narbar() {
  return (
    <div className="landing-navbar">
      <div className="navbar-logo">
        <p>Testing online</p>
      </div>
      <div className="navbar-auth-container">
        <select name="" id="" className="navbar-languages">
          <option value="">EN</option>
          <option value="">VN</option>
        </select>
        <button className="navbar-signup">Sign up</button>
        <button className="navbar-login">Log in</button>
      </div>
    </div>
  );
}

export default Narbar;
