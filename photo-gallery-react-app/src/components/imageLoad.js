import React, { useState } from "react";

const ImageLoad = ({ data }) => {
  const [selected, setSelected] = useState(undefined);
  console.log(selected, data[selected]);
  return (
    <div className="galleryContainer">
      <div className="gallery">
        {data.map((image) => (
          <button
            type="button"
            onClick={() => setSelected(data.indexOf(image))}
            key={image.id}
          >
            <img
              className="galleryThumb"
              src={image.urls.thumb}
              alt={image.description}
              loading="lazy"
            />
          </button>
        ))}
      </div>
      <div>
        {data[selected] ? (
          <div className="lightbox">
            <button
              type="button"
              onClick={() => setSelected(selected - 1)}
              className="previous"
            >
              &lt;
            </button>
            <button type="button">
              <img
                className="galleryImage"
                src={data[selected].urls.regular}
                alt={data[selected].description}
              />
            </button>
            <button
              type="button"
              onClick={() => setSelected(selected + 1)}
              className="previous"
            >
              &gt;
            </button>
            <button
              type="button"
              className="close"
              onClick={() => setSelected(undefined)}
            >
              X
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ImageLoad;
