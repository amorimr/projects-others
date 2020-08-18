import React from "react";
import PropTypes from "prop-types";

import styles from "./image.module.css";

const Image = ({ src, alt }) => {
  return <img src={src} alt={alt} className={styles.image} />;
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default Image;
