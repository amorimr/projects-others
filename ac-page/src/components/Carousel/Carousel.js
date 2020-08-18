import React, { useEffect, useState } from "react";

import img1 from "../../images/img1.png";
import img2 from "../../images/img2.png";
import img3 from "../../images/img3.png";

import styles from "./carousel.module.css";

import Article from "../Article/Article";
import Image from "../Image/Image";

const Carousel = () => {
  const images = {
    [img1]: "ezio and altiar",
    [img2]: "ezio on cliff",
    [img3]: "ezio kill pose"
  };

  const imageKeys = Object.keys(images);

  const [selected, setSelected] = useState(0);
  const [isStopped, setStopped] = useState(false);

  useEffect(() => {
    let interval;
    if (!isStopped) {
      interval = setInterval(() => {
        setSelected(selected === imageKeys.length - 1 ? 0 : selected + 1);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isStopped, selected, imageKeys.length]);

  const selectImage = index => {
    setSelected(index);
    setStopped(true);
  };

  return (
    <div className={styles.container}>
      <Image src={imageKeys[selected]} alt="assassins creed" />
      <div className={styles.thumbnails}>
        {imageKeys.map((image, index) => (
          <div
            key={images[image]}
            tabIndex="-1"
            role="button"
            className={
              selected === imageKeys.indexOf(image)
                ? `${styles.selected} ${styles.article}`
                : styles.article
            }
            onClick={() => selectImage(index)}
            onKeyDown={e => (e.key === "Enter" ? selectImage(index) : null)}
          >
            <Article
              src={image}
              alt={images[image]}
              text="The Truth is written in blood all is forgotten but never seen. Assasins will come to those that disrespect our laws."
              className={selected === image ? styles.selected : ""}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
