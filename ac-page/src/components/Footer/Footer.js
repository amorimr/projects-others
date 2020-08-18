import React from "react";

import Image from "../Image/Image";

import styles from "./footer.module.css";

import esrb from "../../images/esrb.png";
import Mrating from "../../images/Mrating.png";
import PC from "../../images/PC.png";
import ps3 from "../../images/ps3.png";
import xbox from "../../images/xbox.png";
import ubisoft from "../../images/ubisoft.png";

const Footer = () => {
  const images = {
    [ubisoft]: "Ubisoft logo",
    [xbox]: "xbox logo",
    [ps3]: "ps3 logo",
    [PC]: "PC logo",
    [esrb]: "Entertainment Software Rating Board Logo",
    [Mrating]: "rated M (Mature) logo"
  };

  return (
    <footer className={styles.footer}>
      {Object.keys(images).map(image => (
        <div key={images[image]} className={styles.image}>
          <Image src={image} alt={images[image]} />
        </div>
      ))}
      <p className={styles.copyright}>
        © 2011 Ubisoft Entertainment. All Rights Reserved. Assassin’s Creed,
        Ubisoft, and the Ubisoft logo are trademarks of Ubisoft Entertainment in
        the US and/or other countries. “PlayStation” and the “PS” Family logo
        are registered trademarks and “PS3” and the PlayStation Network logo are
        trademarks of Sony Computer Entertainment Inc. KINECT, Xbox, Xbox 360,
        Xbox LIVE, and the Xbox logos are trademarks of the Microsoft group of
        companies and are used under license from Microsoft. Software platform
        logo (TM and ©) EMA 2006.
      </p>
    </footer>
  );
};

export default Footer;
