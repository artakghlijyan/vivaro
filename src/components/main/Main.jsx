import React from 'react'
import styles from "./Main.module.css"
import nko1 from "../main/vivaronkar1.webp"
import nko2 from "../main/vivaronkar2.webp"
import nko3 from "../main/vivaronkar3.webp"
import nko4 from "../main/vivaronkar4.webp"
import nko5 from "../main/vivaronkar5.webp";
import nkosik from "../main/vivarojacjpot.webp"


const Main = () => {
  return (
    <div className={styles.maines}>
      <div className={styles.hashvic}>
        <div className={styles.hashvichnkar}>
          <div className={styles.hashish}>
            <span className={styles.sporti}>ДЖЕКПОТ СПОРТСВУКА</span>
            <span className={styles.tvers}>11,785,006.1դ</span>
          </div>
          <img
            className={styles.nkarruletka}
            src={nkosik}
            alt=""
          />
        </div>
        <div className={styles.hashvichnkar}>
          <div className={styles.hashish}>
            <span className={styles.sporti}>AMUSNET INTERACTIVE</span>
            <span className={styles.tvers}>65,785,006.9դ</span>
          </div>
          <img
            className={styles.nkarruletka}
            src={nkosik}
            alt=""
          />
        </div>
      </div>
      <div className={styles.nkarhoverov}>
        <a
          className={styles.ahnkar}
          href=""
        >
          <img
            className={styles.nkhov}
            src={nko3}
            alt=""
          />
        </a>
        <a
          className={styles.ahnkar}
          href=""
        >
          <img
            className={styles.nkhov}
            src={nko2}
            alt=""
          />
        </a>

        <a
          className={styles.ahnkar}
          href=""
        >
          <img
            className={styles.nkhov}
            src={nko1}
            alt=""
          />
        </a>

        <a
          className={styles.ahnkar}
          href=""
        >
          <img
            className={styles.nkhov}
            src={nko4}
            alt=""
          />
        </a>
        <a
          className={styles.ahnkar}
          href=""
        >
          <img
            className={styles.nkhov}
            src={nko5}
            alt=""
          />
        </a>
      
      </div>
    </div>
  );
}

export default Main