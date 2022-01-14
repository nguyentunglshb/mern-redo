import React from "react";
import "./PageSecond.scss";

function PageSecond() {
  return (
    <div className="page-second">
      <div className="page-second-container">
        <p className="second-title">Who is ...?</p>
        <div className="second-place-container">
          <div className="second-place-item second-school">
            <div className="second-icon second-icon-1"></div>
            <p className="second-icon-title">At school</p>
            <p className="second-item-description">
              Engaging group and distance learning for teachers and students.
            </p>
          </div>
          <div className="second-place-item second-work">
            <div className="second-icon second-icon-2"></div>
            <p className="second-icon-title">At work</p>
            <p className="second-item-description">
              For training, e-learning, interactive presentations and more.
            </p>
          </div>
          <div className="second-place-item second-home">
            <div className="second-icon second-icon-3"></div>
            <p className="second-icon-title">At home</p>
            <p className="second-item-description">
              Apps and games for family fun or home study.
            </p>
          </div>
          <div className="second-place-item second-app">
            <div className="second-icon second-icon-4"></div>
            <p className="second-icon-title">Learning app</p>
            <p className="second-item-description">
              Engage kids with the Kahoot! family of learning apps
            </p>
          </div>
        </div>
        <button className="second-now">Sign up now</button>
      </div>
    </div>
  );
}

export default PageSecond;
