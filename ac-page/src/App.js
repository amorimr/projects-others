import React from "react";

import styles from "./app.module.css";

import Carousel from "./components/Carousel/Carousel";
import ColBoxes from "./components/ColBoxes/ColBoxes";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className={styles.app} data-test="cy-test">
      <div className={styles.content}>
        <Header />
        <NavBar />
        <Carousel />
        <ColBoxes />
        <Footer />
      </div>
    </div>
  );
}

export default App;
