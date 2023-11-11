import React from "react";
import CloseButton from "react-bootstrap/CloseButton";
import styles from "style/contentComponent.module.css";
import View from "component/View";
import { useDispatch, useSelector } from "react-redux";
import { changeWindow } from "store";
const CenteredComponent = () => {
  let dispatch = useDispatch();
  let state = useSelector((state) => state.openWindow);
  return (
    <>
      <div className={styles.dim} onClick={() => dispatch(changeWindow(null))}>
        <div className={styles.window} onClick={(e) => e.stopPropagation()}>
          <div className={styles.closeButtonWrapper}>
            <CloseButton
              className={`${styles.closeButton}`}
              onClick={() => dispatch(changeWindow(null))}
            />
          </div>

          <div className={styles.content}>
            {/* 컨텐츠자리 */}
            <View props={state} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CenteredComponent;
