import React from "react";
import Button from "../Button/Button";

import styles from "./navBar.module.css";

const NavBar = () => {
  const buttons = [
    "game info",
    "assassins creed universe",
    "uplay",
    "forums",
    "register for updates",
    "pre-order"
  ];

  return (
    <div className={styles.navBar}>
      {buttons.map(button => (
        <Button text={button} key={button} />
      ))}
    </div>
  );
};

export default NavBar;
