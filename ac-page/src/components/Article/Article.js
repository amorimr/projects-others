import React from "react";
import PropTypes from "prop-types";

import Image from "../Image/Image";

import styles from "./article.module.css";

const Article = ({ alt, src, text }) => {
  return (
    <article className={styles.article}>
      <div className={styles.thumbnailImage}>
        <Image src={src} alt={alt} />
      </div>
      <div className={styles.description}>
        <h3>Assassin Creed</h3>
        <p>{text}</p>
      </div>
    </article>
  );
};

Article.propTypes = {
  text: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default Article;
