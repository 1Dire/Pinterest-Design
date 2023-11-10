import React, { useState, useEffect } from "react";
import styles from "style/layoutComponent.module.css";
import {useDispatch } from "react-redux"
import { changeWindow } from "store";
const LayoutComponent = () => {
  const [images, setImages] = useState([]);
  let dispatch = useDispatch()
  const popOpen =  (data) =>{
    dispatch(changeWindow(data))
  
  }
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = [];
        let addImgCount = 7;
        for (let i = 1; i <= addImgCount; i++) {
          let num = i < 10 ? "0" + String(i) : i;
          response.push({
            src: `img${num}.jpg`,
            alt: `img${num}`,
          });
        }
        setImages(response);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };
    fetchImages();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(
        (entry) => {
          entry.target.classList.toggle(styles.show, entry.isIntersecting); // 컨텐츠 보일때 show
          // if (entry.isIntersecting) {
          //   observer.unobserve(entry.target); // 이미 보인거 재실행 안하게
          // }
        },
        { threshold: 1, rootMargin: "0" }
      );
    });
    const lastCardObserver = new IntersectionObserver(entries =>{
     const lastCard = entries[0]
     lastCard.target.classList.toggle(styles.show, lastCard.isIntersecting);
     if(!lastCard.isIntersecting) {
      return
     }else{
      loadNewCards()
     }
     
    },{})


    function loadNewCards (){//
      //마지막카드
      console.log('last')
    } 
    const lastCardElement = document.getElementById(`image-${images.length}`);
    if (lastCardElement) {
      lastCardObserver.observe(lastCardElement);
    }
    images.forEach((image, index) => {
      const imageRef = document.getElementById(`image-${index}`);
      if (imageRef) {
        observer.observe(imageRef);
      }
      
    });

    return () => {
      observer.disconnect();
    };
  }, [images]);

  return (
    <>
     <div className={styles.container}>
      {images.map((image, index) => (
        <div className={styles.box} key={index} id={`image-${index + 1}`} onClick={() => popOpen(image)}>
          <img
            src={`${process.env.PUBLIC_URL}/images/${image.src}`} 
            alt={image.alt}
          />
        </div>
      ))}
    </div>
    <div></div>
    </>
   
  );
};

export default LayoutComponent;
