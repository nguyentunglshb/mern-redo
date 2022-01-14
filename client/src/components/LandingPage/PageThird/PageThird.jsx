import React from "react";
import "./PageThird.scss";

function PageThird() {
  return (
    <div className="page-third">
      <div className="third-blank"></div>
      <p className="third-big-title">Do you like any subjects?</p>
      <p className="third-small-title">Let test for a while!</p>
      <div className="third-container">
        <p className="third-join">Our tests</p>
        <button className="third-join-test">
          Join the test here{" "}
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.2213 4.2002L14.5208 8.49978L10.2213 12.7994"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M2.47916 8.5H14.4004"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default PageThird;
