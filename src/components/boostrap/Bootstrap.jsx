import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./Bootstrap.module.css";

const Bootstrap = () => {
  const swiperRef = useRef();
  return (
    <div>
      <div className={styles.carusel}>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          loop
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide className={styles.slide}>
            <img
              src="https://cmsbetconstruct.com/storage/medias/vbetam/content_1_711fa631f8b8ed224384f886795293d4.webp"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <img
              src="https://cmsbetconstruct.com/storage/medias/vbetam/content_1_e7dc0ff0a78d624895210eaf50eb320c.webp"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <img
              src="https://cmsbetconstruct.com/storage/medias/vbetam/content_1_49d72465a960992623b539f2e85739a1.webp"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <img
              src="https://cmsbetconstruct.com/storage/medias/vbetam/content_1_176c5c93ec4c35251bd3926c2f175d66.webp"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <img
              src="https://cmsbetconstruct.com/storage/medias/vbetam/content_1_f74ba27d773a18a24d284e2eee57f698.webp"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <img
              src="https://cmsbetconstruct.com/storage/medias/vbetam/content_1_97f498422801dd54fb5394b04152b096.webp"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <img
              src="https://cmsbetconstruct.com/storage/medias/vbetam/content_1_724922593ef62d054167019a6e9f05e2.webp"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <img
              src="https://cmsbetconstruct.com/storage/medias/vbetam/content_1_34971550aa1180e873b90f6f52ca72e9.webp"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <img
              src="https://cmsbetconstruct.com/storage/medias/vbetam/content_1_00a8f5af6358b1e9e524a34d0c170a5a.webp"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <img
              src="https://cmsbetconstruct.com/storage/medias/vbetam/content_1_3b3e83693bbc833a6f4b08810548622a.webp"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <div className={styles.marselo}>
              <div className={styles.gco}>
                {" "}
                <a className={styles.tvos} href="">
                  1.32
                </a>
              </div>
              <div className={styles.gco}>
                {" "}
                <a className={styles.tvos} href="">
                  6.00
                </a>
              </div>
              <div className={styles.gco}>
                <a className={styles.tvos} href="">
                  10.00
                </a>
              </div>
            </div>
            <img
              src="https://cmsbetconstruct.com/storage/medias/vbetam/content_1_9ac161eaaf6073d0b4a1cf305c19db78.webp"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <img
              src="https://cmsbetconstruct.com/storage/medias/vbetam/content_1_fb425394ca27f9f8ffb3fae62bdf2952.webp"
              alt=""
            />
          </SwiperSlide>
          <div className={styles.navigation}>
            <button
              className={styles.prev}
              onClick={() => {
                console.log(swiperRef);
                swiperRef.current.slidePrev();
              }}
            >
              {"<"}
            </button>
            <button
              className={styles.next}
              onClick={() => {
                swiperRef.current.slideNext();
              }}
            >
              {">"}
            </button>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Bootstrap;
