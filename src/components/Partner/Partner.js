import React from "react";
import "./Partner.css";
import pressganey from "../../assets/pressganey.jpeg";

const Main = () => {
  return (
    <body>
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h4> Our Partner</h4>
              <p>
                Press Ganey is a leading provider of patient experience
                measurement, performance analytics and strategic advisory
                solutions for health care organizations across the continuum of
                care.
              </p>
            </div>
            <div className="col-md-3 partner-logo">
              <img
                src={pressganey}
                className="mw-100 d-flex d-lg-block"
                title="pressganey"
                alt="Press Ganey Logo"
              />
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Main;
