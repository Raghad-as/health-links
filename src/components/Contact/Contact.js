import React from "react";
import "../Contact/Contact.css";
import Form from "react-bootstrap/Form";
import MapBg from "../../assets/map-bg.png";
import { Container } from "react-bootstrap";

const Contact = () => {
  return (
    <body>
      <div className="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <img
                src={MapBg}
                className="mw-100 d-flex d-lg-block"
                title="Map"
                alt="Map Background"
              />
            </div>
            <div className="col-md-4 contact-us">
              <div className="container">
                <h2>Contact Us</h2>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control type="text" placeholder="Full Name" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPhone">
                    <Form.Control type="email" placeholder="Email Address" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPhone">
                    <Form.Control type="phone" placeholder="966 xxx xxxx" />
                  </Form.Group>
                  <Form.Group className="mb-4" controlId="formBasicText">
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                    ></textarea>
                  </Form.Group>
                  <button type="submit">Submit</button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Contact;
