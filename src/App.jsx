import { Fragment } from "react";
import "./App.css";
import Header from "./Shared/Header";
import "./Styles/Responsive.css"
import Router from "./Routes/Route";
import Footer from "./Shared/Footer";

function App() {
  return (
    <Fragment>
      <div >
        <Header />
        <Router/>
        <Footer/>
      </div>
    </Fragment>
  );
}

export default App;
