import React from "react";
import '../WorkedWith/WorkedWith.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Fageeh from "../../assets/fg.jpeg";
import Care1 from "../../assets/ca.png";
import Care2 from "../../assets/car.jpeg";
import Ab from "../../assets/ab.jpeg";
import Am from "../../assets/am.jpeg";

const WorkedWith = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <body>
      <div className="content2">
        <div className="container">
          <h3>Proudly Worked With</h3>
          <Carousel responsive={responsive}>
            <div>
              <img
                src={Fageeh}
                className="mw-100 d-flex d-lg-block"
                title="Hospital"
                alt="Hospital Logo"
              />
            </div>
            <div>
              <img
                src={Ab}
                className="mw-100 d-flex d-lg-block"
                title="Hospital"
                alt="Hospital Logo"
              />
            </div>
            <div>
              <img
                src={Care1}
                className="mw-100 d-flex d-lg-block"
                title="Hospital"
                alt="Hospital Logo"
              />
            </div>
            <div>
              <img
                src={Care2}
                className="mw-100 d-flex d-lg-block"
                title="Hospital"
                alt="Hospital Logo"
              />
            </div>
            <div>
              <img
                src={Am}
                className="mw-100 d-flex d-lg-block"
                title="Hospital"
                alt="Hospital Logo"
              />
            </div>
          </Carousel>
        </div>
      </div>
    </body>
  );
};

export default WorkedWith;
