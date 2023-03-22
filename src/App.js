import "./App.css";
import './assets/fonts/Poppins-Regular.ttf';
import Navs from "./components/Navs/Navs";
import Home from "./components/Home/Home";
import Partner from "./components/Partner/Partner";
import News from "./components/News/News";
import WorkedWith from "./components/WorkedWith/WorkedWith";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Navs />
      <Home />
      <Partner />
      <News />
      <WorkedWith />
      <Contact />
      <Footer />
    </Fragment>
  );
}

export default App;
