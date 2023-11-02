import React, { useState, useEffect } from "react";

import { CSSTransition } from 'react-transition-group';
import styles from "style/layoutComponent.module.css";

const LayoutComponent = () => {

  const [images, setImages] = useState([]); // 이미지들을 저장하는 state

  useEffect(() => {
    // 이미지 데이터를 가져오는 비동기 함수 (예: API 호출)
    const fetchImages = async () => {
      try {
        const response = []; // 이미지를 가져오는 API 호출이나 파일 경로로 변경해야 합니다.
        let addImgCount = 8;
        for (let i = 1; i <= addImgCount; i++) {
          let num = i < 10 ? "0" + String(i) : i;
          response.push({
            src: "img" + num + ".jpg",
            alt: "img" + num,
          });
        }
        
        setImages(response); // 이미지 데이터를 state에 저장
        
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };
    fetchImages(); // 이미지 데이터 가져오기
 
  }, []);
  console.log(images)
  return (
    <>
      <div className={styles.container}>
      {images.map((image, index) => (
        <CSSTransition
        >
        <div className={styles.box}>
          <img
            src={`${process.env.PUBLIC_URL}/images/${image.src}`}
            alt={`${image.alt}`}
          ></img>
        </div>
        </CSSTransition>
      ))}
      </div>
    </>
  );
};

export default LayoutComponent;
