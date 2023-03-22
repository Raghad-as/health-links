import "../Footer/Footer.css";
import logo from "../../assets/logo.png";
import linkedin from "../../assets/linkedin.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <h2>About</h2>
            <ul>
              <li>
                <a href="#mission">Mission</a>
              </li>
              <li>
                <a href="#vision">Vision</a>
              </li>
              <li>
                <a href="#values">Values</a>
              </li>
              <li>
                <a href="#serve">Who We Serve</a>
              </li>
              <li>
                <a href="#privacy">Confidentiality & Privacy</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6">
            <h2>Solutions</h2>
            <ul>
              <li>
                <a href="#patientVoice">Patient Voice</a>
              </li>
              <li>
                <a href="#employeetVoice">Employee Voice</a>
              </li>
              <li>
                <a href="#physicianVoice">Physician Voice</a>
              </li>
              <li>
                <a href="#PROMs">PROMs</a>
              </li>
              <li>
                <a href="#POC">POC</a>
              </li>
              <li>
                <a href="#NDNQI">NDNQI</a>
              </li>
              <li>
                <a href="#consultancy">Consultancy</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6">
            <h2>Popular</h2>
            <ul>
              <li>
                <a href="#mission">Join Our Team</a>
              </li>
              <li>
                <a href="#vision">Health News Intelligence Report</a>
              </li>
              <li>
                <a href="#values">Research & Resources</a>
              </li>
              <li>
                <a href="#serve">Email Login</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6">
            <img
              src={logo}
              className="mw-100 d-flex d-lg-block"
              title="logo"
              alt="Health Links Logo"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
            <div className="footer-soical">
              <div className="footer-icon">
                <a href="#link"> <img src={linkedin} title="linkedin" alt="Linkedin Logo" /> </a>
              </div>
              <div className="footer-icon">
                <a href="#link"> <img src={twitter} title="twitter" alt="Twitter Logo" /> </a>
              </div>
              <div className="footer-icon">
                <a href="#link"> <img src={instagram} title="instagram" alt="Instagram Logo" /> </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom"> 
          <p> © Copyright 2023. HealthLinks. All Rights Reserved ® </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
