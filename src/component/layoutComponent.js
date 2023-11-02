import React from "react";
import styles from "style/layoutComponent.module.css";

const layoutComponent = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.box}>
          <img
            src={`${process.env.PUBLIC_URL}/images/img01.jpg`}
            alt="img01.jpg"
          ></img>
        </div>
        <div className={styles.box}>
          <img
            src={`${process.env.PUBLIC_URL}/images/img02.jpg`}
            alt="img01.jpg"
          ></img>
        </div>
        <div className={styles.box}>
          <img
            src={`${process.env.PUBLIC_URL}/images/img03.jpg`}
            alt="img01.jpg"
          ></img>
        </div>
        <div className={styles.box}>
          <img
            src={`${process.env.PUBLIC_URL}/images/img04.jpg`}
            alt="img01.jpg"
          ></img>
        </div>
        <div className={styles.box}>
          <img
            src={`${process.env.PUBLIC_URL}/images/img05.jpg`}
            alt="img01.jpg"
          ></img>
        </div>
        <div className={styles.box}>
          <img
            src={`${process.env.PUBLIC_URL}/images/img06.jpg`}
            alt="img01.jpg"
          ></img>
        </div>
        <div className={styles.box}>
          <img
            src={`${process.env.PUBLIC_URL}/images/img07.jpg`}
            alt="img01.jpg"
          ></img>
        </div>
        <div className={styles.box}>
          <img
            src={`${process.env.PUBLIC_URL}/images/img08.jpg`}
            alt="img08.jpg"
          ></img>
        </div>
      </div>
    </>
  );
};

export default layoutComponent;
