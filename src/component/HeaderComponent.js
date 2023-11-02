import React from "react";
import styles from "style/headerComponent.module.css";
import { Twitter, Github } from "react-bootstrap-icons";
const HeaderComponent = () => {
  return (
    <>
      <header>
        <div className={styles["header-container"]}>
          <div className={styles["title"]}>
            <span>Lee Sang woo</span>
          </div>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">
                  <Github />
                </a>
              </li>
              <li>
                <a href="/">
                  <Twitter />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default HeaderComponent;
