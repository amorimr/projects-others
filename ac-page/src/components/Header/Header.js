import React from "react";
import Image from "../Image/Image";
import styles from "./header.module.css";

import banner from "../../images/banner.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <Image src={banner} alt="assassin's creed banner" />
    </header>
  );
};

export default Header;
