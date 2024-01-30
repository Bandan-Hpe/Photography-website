import { Fragment } from "react";
import "./App.css";
import Header from "./Shared/Header";
import "./Styles/Responsive.css"
import Router from "./Routes/Route";
import Footer from "./Shared/Footer";
import Carousel from "./Components/carousel";

function App() {
  return (
    <Fragment>
      <div >
        <Header />
        <Router/>

        <Carousel/>
        <Footer/>
      </div>
    </Fragment>
  );
}

export default App;
