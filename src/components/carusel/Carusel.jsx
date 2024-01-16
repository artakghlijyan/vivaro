import React, { useRef } from "react";
import styles from "./Carusel.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { CgAlarm } from "react-icons/cg";
import { AiFillSignal } from "react-icons/ai";
import { AiFillBell } from "react-icons/ai";
import { MdOutlineStarBorder } from "react-icons/md";
import { IoIosFootball } from "react-icons/io";
import { CgChevronRight } from "react-icons/cg";
import { CgChevronLeft } from "react-icons/cg";
const Carusel = () => {
  const swiperRef = useRef();
  return (
    <div className={styles.carusel}>
      <div className={styles.vernagi}>
        <h2>Предлагаемые ставки</h2>
      </div>
      <div className={styles.takicarusel}>
        <Swiper
          spaceBetween={9}
          slidesPerView={3}
          loop
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide className={styles.sviper}>
            <div className={styles.swip}>
              <div className={styles.posit11}>
                <div className={styles.carmejhover1}>
                  <div className={styles.lores}>
                    <CgAlarm />
                    <span>23.12.2023 19.00</span>
                  </div>
                  <div className={styles.lores1}>
                    +556
                    <AiFillSignal />
                    <AiFillBell />
                    <MdOutlineStarBorder />
                  </div>
                </div>
                <div className={styles.carmejhover2}>
                  <IoIosFootball />
                  <img
                    className={styles.fla}
                    src="data:image/jpeg;base64,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"
                    alt=""
                  />
                  <span> iTT Кубок группа</span>
                </div>
                <div className={styles.carmejhover3}>
                  <div className={styles.armeni}>
                    <img
                      className={styles.hasmik}
                      src="https://statistics.bcapps.org/images/e/s/175/351349.png"
                      alt=""
                    />
                    <span>Асмик Хачатурян</span>
                  </div>
                  <div className={styles.armeni}>
                    <img
                      className={styles.hasmik}
                      src="https://statistics.bcapps.org/images/e/s/264/529982.png"
                      alt=""
                    />
                    <span>Марина Саакян</span>
                  </div>
                </div>
                <div className={styles.carmejhover4}>
                  <div className={styles.gcikovhov1}>
                    <span>1.35</span>
                  </div>
                  <div className={styles.gcikovhov2}>
                    <span>1.95</span>
                  </div>
                </div>
              </div>
              <img
                className={styles.aryuc}
                src="https://www.vbet.am/images/featuredGames/538.png"
                alt=""
              />
            </div>
          </SwiperSlide>

          <SwiperSlide className={styles.sviper}>
            <div className={styles.swip}>
              <div className={styles.posit11}>
                <div className={styles.carmejhover1}>
                  <div className={styles.lores}>
                    <CgAlarm />
                    <span>24.12.2023 17.00</span>
                  </div>
                  <div className={styles.lores1}>
                    +88
                    <AiFillSignal />
                    <AiFillBell />
                    <MdOutlineStarBorder />
                  </div>
                </div>
                <div className={styles.carmejhover2}>
                  <IoIosFootball />
                  <img
                    className={styles.fla}
                    src="data:image/jpeg;base64,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"
                    alt=""
                  />
                  <span> iTT Кубок группа Женщины</span>
                </div>
                <div className={styles.carmejhover3}>
                  <div className={styles.armeni}>
                    <img
                      className={styles.hasmik}
                      src="https://statistics.bcapps.org/images/e/s/175/351354.png"
                      alt=""
                    />
                    <span>Асмик матевосян</span>
                  </div>
                  <div className={styles.armeni}>
                    <img
                      className={styles.hasmik}
                      src="https://statistics.bcapps.org/images/e/s/290/581633.png"
                      alt=""
                    />
                    <span>Валя асоян</span>
                  </div>
                </div>
                <div className={styles.carmejhover4}>
                  <div className={styles.gcikovhov1}>
                    <span>1.40</span>
                  </div>
                  <div className={styles.gcikovhov2}>
                    <span>1.85</span>
                  </div>
                </div>
              </div>
              <img
                className={styles.aryuc}
                src="https://www.vbet.am/static/media/feature-game-bg.0be6bce5.png"
                alt=""
              />
            </div>
          </SwiperSlide>

          <SwiperSlide className={styles.sviper}>
            <div className={styles.swip}>
              <div className={styles.posit11}>
                <div className={styles.carmejhover1}>
                  <div className={styles.lores}>
                    <CgAlarm />
                    <span>13.12.2023 20.00</span>
                  </div>
                  <div className={styles.lores1}>
                    +780
                    <AiFillSignal />
                    <AiFillBell />
                    <MdOutlineStarBorder />
                  </div>
                </div>
                <div className={styles.carmejhover2}>
                  <IoIosFootball />
                  <img
                    className={styles.fla1}
                    src="https://flagsofallnations.com.au/cdn/shop/products/italy.jpg?v=1558054656"
                    alt=""
                  />
                  <span>Серия А</span>
                </div>
                <div className={styles.carmejhover3}>
                  <div className={styles.armeni}>
                    <img
                      className={styles.hasmik}
                      src="https://statistics.bcapps.org/images/e/s/0/620.png"
                      alt=""
                    />
                    <span>Эллас Верона</span>
                  </div>
                  <span>Ничья</span>
                  <div className={styles.armeni}>
                    <img
                      className={styles.hasmik}
                      src="https://statistics.bcapps.org/images/e/s/0/773.png"
                      alt=""
                    />
                    <span>Кальяри</span>
                  </div>
                </div>
                <div className={styles.carmejhover44}>
                  <div className={styles.gcikovhov14}>
                    <span>1.15</span>
                  </div>
                  <div className={styles.gcikovhov144}>
                    <span>1.15</span>
                  </div>
                  <div className={styles.gcikovhov24}>
                    <span>1.05</span>
                  </div>
                </div>
              </div>
              <img
                className={styles.aryuc}
                src="https://www.vbet.am/images/featuredGames/545.png"
                alt=""
              />
            </div>
          </SwiperSlide>

          <SwiperSlide className={styles.sviper}>
            <div className={styles.swip}>
              <div className={styles.posit11}>
                <div className={styles.carmejhover1}>
                  <div className={styles.lores}>
                    <CgAlarm />
                    <span>13.12.2023 10.00</span>
                  </div>
                  <div className={styles.lores1}>
                    +90
                    <AiFillSignal />
                    <AiFillBell />
                    <MdOutlineStarBorder />
                  </div>
                </div>
                <div className={styles.carmejhover2}>
                  <IoIosFootball />
                  <img
                    className={styles.fla1}
                    src="https://www.greeka.com/photos/unique/greece/greece-history/flags/general/greek-flag-480.jpg"
                    alt=""
                  />
                  <span>Серия C</span>
                </div>
                <div className={styles.carmejhover3}>
                  <div className={styles.armeni}>
                    <img
                      className={styles.hasmik}
                      src="https://statistics.bcapps.org/images/e/s/0/490.png"
                      alt=""
                    />
                    <span>Торино</span>
                  </div>
                  <span>Ничья</span>
                  <div className={styles.armeni}>
                    <img
                      className={styles.hasmik}
                      src="https://statistics.bcapps.org/images/e/s/0/393.png"
                      alt=""
                    />
                    <span>Удинезе</span>
                  </div>
                </div>
                <div className={styles.carmejhover44}>
                  <div className={styles.gcikovhov14}>
                    <span>5.85</span>
                  </div>
                  <div className={styles.gcikovhov144}>
                    <span>1.85</span>
                  </div>
                  <div className={styles.gcikovhov24}>
                    <span>1.95</span>
                  </div>
                </div>
              </div>
              <img
                className={styles.aryuc}
                src="https://www.vbet.am/static/media/feature-game-bg.0be6bce5.png"
                alt=""
              />
            </div>
          </SwiperSlide>

          <SwiperSlide className={styles.sviper}>
            <div className={styles.swip}>
              <div className={styles.posit11}>
                <div className={styles.carmejhover1}>
                  <div className={styles.lores}>
                    <CgAlarm />
                    <span>13.12.2023 10.00</span>
                  </div>
                  <div className={styles.lores1}>
                    +90
                    <AiFillSignal />
                    <AiFillBell />
                    <MdOutlineStarBorder />
                  </div>
                </div>
                <div className={styles.carmejhover2}>
                  <IoIosFootball />
                  <img
                    className={styles.fla1}
                    src="https://starspangledflags.com/wp-content/uploads/spain-flag.jpg"
                    alt=""
                  />
                  <span>Серия C</span>
                </div>
                <div className={styles.carmejhover3}>
                  <div className={styles.armeni}>
                    <img
                      className={styles.hasmik}
                      src="https://statistics.bcapps.org/images/e/s/0/403.png"
                      alt=""
                    />
                    <span>Торино</span>
                  </div>
                  <span>Ничья</span>
                  <div className={styles.armeni}>
                    <img
                      className={styles.hasmik}
                      src="https://statistics.bcapps.org/images/e/s/0/392.png"
                      alt=""
                    />
                    <span>Удинезе</span>
                  </div>
                </div>
                <div className={styles.carmejhover44}>
                  <div className={styles.gcikovhov14}>
                    <span>5.85</span>
                  </div>
                  <div className={styles.gcikovhov144}>
                    <span>2.55</span>
                  </div>
                  <div className={styles.gcikovhov24}>
                    <span>1.75</span>
                  </div>
                </div>
              </div>
              <img
                className={styles.aryuc}
                src="https://www.vbet.am/static/media/feature-game-bg.0be6bce5.png"
                alt=""
              />
            </div>
          </SwiperSlide>

          <SwiperSlide className={styles.sviper}>
            <div className={styles.swip}>
              <div className={styles.posit11}>
                <div className={styles.carmejhover1}>
                  <div className={styles.lores}>
                    <CgAlarm />
                    <span>13.12.2023 20.00</span>
                  </div>
                  <div className={styles.lores1}>
                    +780
                    <AiFillSignal />
                    <AiFillBell />
                    <MdOutlineStarBorder />
                  </div>
                </div>
                <div className={styles.carmejhover2}>
                  <IoIosFootball />
                  <img
                    className={styles.fla}
                    src="data:image/jpeg;base64,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"
                    alt=""
                  />
                  <span> iTT Кубок группа Женщины</span>
                </div>
                <div className={styles.carmejhover3}>
                  <div className={styles.armeni}>
                    <img
                      className={styles.hasmik}
                      src="https://statistics.bcapps.org/images/e/s/185/371204.png"
                      alt=""
                    />
                    <span>Кристина Карапетян</span>
                  </div>
                  <div className={styles.armeni}>
                    <img
                      className={styles.hasmik}
                      src="https://statistics.bcapps.org/images/e/s/251/503163.png"
                      alt=""
                    />
                    <span>Яна Петросян</span>
                  </div>
                </div>
                <div className={styles.carmejhover4}>
                  <div className={styles.gcikovhov1}>
                    <span>1.15</span>
                  </div>
                  <div className={styles.gcikovhov2}>
                    <span>1.05</span>
                  </div>
                </div>
              </div>
              <img
                className={styles.aryuc}
                src="https://www.vbet.am/static/media/feature-game-bg.0be6bce5.png"
                alt=""
              />
            </div>
          </SwiperSlide>

          <SwiperSlide className={styles.sviper}>
            <div className={styles.swip}>
              <div className={styles.posit11}>
                <div className={styles.carmejhover1}>
                  <div className={styles.lores}>
                    <CgAlarm />
                    <span>13.12.2023 20.00</span>
                  </div>
                  <div className={styles.lores1}>
                    +780
                    <AiFillSignal />
                    <AiFillBell />
                    <MdOutlineStarBorder />
                  </div>
                </div>
                <div className={styles.carmejhover2}>
                  <IoIosFootball />
                  <img
                    className={styles.fla1}
                    src="https://flagsofallnations.com.au/cdn/shop/products/italy.jpg?v=1558054656"
                    alt=""
                  />
                  <span>Серия А</span>
                </div>
                <div className={styles.carmejhover3}>
                  <div className={styles.armeni}>
                    <img
                      className={styles.hasmik}
                      src="https://statistics.bcapps.org/images/e/s/0/620.png"
                      alt=""
                    />
                    <span>Эллас Верона</span>
                  </div>
                  <span>Ничья</span>
                  <div className={styles.armeni}>
                    <img
                      className={styles.hasmik}
                      src="https://statistics.bcapps.org/images/e/s/0/773.png"
                      alt=""
                    />
                    <span>Кальяри</span>
                  </div>
                </div>
                <div className={styles.carmejhover44}>
                  <div className={styles.gcikovhov14}>
                    <span>1.15</span>
                  </div>
                  <div className={styles.gcikovhov144}>
                    <span>1.15</span>
                  </div>
                  <div className={styles.gcikovhov24}>
                    <span>1.05</span>
                  </div>
                </div>
              </div>
              <img
                className={styles.aryuc}
                src="https://www.vbet.am/static/media/feature-game-bg.0be6bce5.png"
                alt=""
              />
            </div>
          </SwiperSlide>

          <SwiperSlide className={styles.sviper}>
            <div className={styles.swip}>
              <div className={styles.posit11}>
                <div className={styles.carmejhover1}>
                  <div className={styles.lores}>
                    <CgAlarm />
                    <span>13.12.2023 20.00</span>
                  </div>
                  <div className={styles.lores1}>
                    +780
                    <AiFillSignal />
                    <AiFillBell />
                    <MdOutlineStarBorder />
                  </div>
                </div>
                <div className={styles.carmejhover2}>
                  <IoIosFootball />
                  <img
                    className={styles.fla1}
                    src="https://flagsofallnations.com.au/cdn/shop/products/italy.jpg?v=1558054656"
                    alt=""
                  />
                  <span>Серия А</span>
                </div>
                <div className={styles.carmejhover3}>
                  <div className={styles.armeni}>
                    <img
                      className={styles.hasmik}
                      src="https://statistics.bcapps.org/images/e/s/0/620.png"
                      alt=""
                    />
                    <span>Эллас Верона</span>
                  </div>
                  <span>Ничья</span>
                  <div className={styles.armeni}>
                    <img
                      className={styles.hasmik}
                      src="https://statistics.bcapps.org/images/e/s/0/773.png"
                      alt=""
                    />
                    <span>Кальяри</span>
                  </div>
                </div>
                <div className={styles.carmejhover44}>
                  <div className={styles.gcikovhov14}>
                    <span>1.15</span>
                  </div>
                  <div className={styles.gcikovhov144}>
                    <span>1.15</span>
                  </div>
                  <div className={styles.gcikovhov24}>
                    <span>1.05</span>
                  </div>
                </div>
              </div>
              <img
                className={styles.aryuc}
                src="https://www.vbet.am/static/media/feature-game-bg.0be6bce5.png"
                alt=""
              />
            </div>
          </SwiperSlide>

          <SwiperSlide className={styles.sviper}>
            <div className={styles.swip}>
              <div className={styles.posit11}>
                <div className={styles.carmejhover1}>
                  <div className={styles.lores}>
                    <CgAlarm />
                    <span>23.12.2023 19.00</span>
                  </div>
                  <div className={styles.lores1}>
                    +556
                    <AiFillSignal />
                    <AiFillBell />
                    <MdOutlineStarBorder />
                  </div>
                </div>
                <div className={styles.carmejhover2}>
                  <IoIosFootball />
                  <img
                    className={styles.fla}
                    src="data:image/jpeg;base64,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"
                    alt=""
                  />
                  <span> iTT Кубок группа</span>
                </div>
                <div className={styles.carmejhover3}>
                  <div className={styles.armeni}>
                    <img
                      className={styles.hasmik}
                      src="https://statistics.bcapps.org/images/e/s/175/351349.png"
                      alt=""
                    />
                    <span>Асмик Хачатурян</span>
                  </div>
                  <div className={styles.armeni}>
                    <img
                      className={styles.hasmik}
                      src="https://statistics.bcapps.org/images/e/s/264/529982.png"
                      alt=""
                    />
                    <span>Марина Саакян</span>
                  </div>
                </div>
                <div className={styles.carmejhover4}>
                  <div className={styles.gcikovhov1}>
                    <span>1.35</span>
                  </div>
                  <div className={styles.gcikovhov2}>
                    <span>1.95</span>
                  </div>
                </div>
              </div>
              <img
                className={styles.aryuc}
                src="https://www.vbet.am/static/media/feature-game-bg.0be6bce5.png"
                alt=""
              />
            </div>
          </SwiperSlide>

          <SwiperSlide className={styles.sviper}>
            <div className={styles.swip}>
              <div className={styles.posit11}>
                <div className={styles.carmejhover1}>
                  <div className={styles.lores}>
                    <CgAlarm />
                    <span>13.12.2023 20.00</span>
                  </div>
                  <div className={styles.lores1}>
                    +780
                    <AiFillSignal />
                    <AiFillBell />
                    <MdOutlineStarBorder />
                  </div>
                </div>
                <div className={styles.carmejhover2}>
                  <IoIosFootball />
                  <img
                    className={styles.fla1}
                    src="https://flagsofallnations.com.au/cdn/shop/products/italy.jpg?v=1558054656"
                    alt=""
                  />
                  <span>Серия А</span>
                </div>
                <div className={styles.carmejhover3}>
                  <div className={styles.armeni}>
                    <img
                      className={styles.hasmik}
                      src="https://statistics.bcapps.org/images/e/s/0/620.png"
                      alt=""
                    />
                    <span>Эллас Верона</span>
                  </div>
                  <span>Ничья</span>
                  <div className={styles.armeni}>
                    <img
                      className={styles.hasmik}
                      src="https://statistics.bcapps.org/images/e/s/0/773.png"
                      alt=""
                    />
                    <span>Кальяри</span>
                  </div>
                </div>
                <div className={styles.carmejhover44}>
                  <div className={styles.gcikovhov14}>
                    <span>1.15</span>
                  </div>
                  <div className={styles.gcikovhov144}>
                    <span>1.15</span>
                  </div>
                  <div className={styles.gcikovhov24}>
                    <span>1.05</span>
                  </div>
                </div>
              </div>
              <img
                className={styles.aryuc}
                src="https://www.vbet.am/static/media/feature-game-bg.0be6bce5.png"
                alt=""
              />
            </div>
          </SwiperSlide>
        </Swiper>

        <div className={styles.navigation}>
          <button
            className={styles.prev}
            onClick={() => {
              console.log(swiperRef);
              swiperRef.current.slidePrev();
            }}
          >
            {<CgChevronLeft />}
          </button>
          <button
            className={styles.next}
            onClick={() => {
              swiperRef.current.slideNext();
            }}
          >
            {<CgChevronRight />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carusel;
