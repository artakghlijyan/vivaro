import React from 'react'
import styles from "./Main.module.css"

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
            src="https://cmsbetconstruct.com/storage/medias/vbetam/media_1_413bfe5e57504a823993679d01642fc2.png"
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
            src="https://cmsbetconstruct.com/storage/medias/vbetam/media_1_98ede5a4e06135aa951f55e62fae0587.png"
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
            src="https://cmsbetconstruct.com/storage/medias/vbetam/content_1_cd0c585b4826c4cb7888348887f14093.webp"
            alt=""
          />
        </a>
        <a
          className={styles.ahnkar}
          href=""
        >
          <img
            className={styles.nkhov}
            src="https://cmsbetconstruct.com/storage/medias/vbetam/content_1_42db81ae671e9cff72950248498761da.webp"
            alt=""
          />
        </a>

        <a
          className={styles.ahnkar}
          href=""
        >
          <img
            className={styles.nkhov}
            src="https://cmsbetconstruct.com/storage/medias/vbetam/content_1_799eb076556dbd03b9c484b87de8370a.webp"
            alt=""
          />
        </a>

        <a
          className={styles.ahnkar}
          href=""
        >
          <img
            className={styles.nkhov}
            src="https://cmsbetconstruct.com/storage/medias/vbetam/content_1_937eafdeab0023c8c9aa7a86b5718b70.webp"
            alt=""
          />
        </a>
        <a
          className={styles.ahnkar}
          href=""
        >
          <img
            className={styles.nkhov}
            src="https://cmsbetconstruct.com/storage/medias/vbetam/content_1_5d68cf9c5f1ddeb7123967cc9ced84ea.webp"
            alt=""
          />
        </a>
      
      </div>
    </div>
  );
}

export default Main