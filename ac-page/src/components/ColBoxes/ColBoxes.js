import React from "react";
import PropTypes from "prop-types";

import Article from "../Article/Article";
import img1 from "../../images/img1.png";
import styles from "./colBoxes.module.css";

const ColBoxes = ({ count }) => {
  const leftColumnText =
    "The Truth is written in blood all is forgotten but never seen. Assasins will come to those that disrespect our laws.";

  const rightColumnText = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

  const items = [...Array(count)].map((u, i) => i);

  return (
    <section className={styles.section}>
      <div>
        <h2 className={styles.thumbnailHeader}>Life of an assassin</h2>
        <div className={styles.articles}>
          {items.map(item => (
            <Article
              key={`leftColumn${item}`}
              className="leftThumbnails"
              alt="assassins creed image"
              src={img1}
              text={leftColumnText}
            />
          ))}
        </div>
      </div>
      <div>
        <h2 className={styles.thumbnailHeader}>Life of an assassin</h2>
        <div className={styles.articles}>
          {items.map(item => (
            <Article
              key={`rightColumn${item}`}
              className="rightThumbnails"
              alt="assassins creed image"
              src={img1}
              text={rightColumnText}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

ColBoxes.propTypes = {
  count: PropTypes.number
};

ColBoxes.defaultProps = {
  count: 3
};

export default ColBoxes;
