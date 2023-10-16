import React from "react";
import styles from "./CirclesRowOrColumn.module.scss";

export default function CirclesRowOrColumn({ images }) {
  const imagesComponents = images.map((image, index) => {
    return (
        <img key={index} alt="" src={image} />
    );
  });

  return <div className={styles.circlesRowOrColumn}>{imagesComponents}</div>;
}
