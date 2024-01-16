import React from 'react'
import styles from "./Slot.module.css"
import { CgChevronRight } from "react-icons/cg";
import { MdErrorOutline } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";

const Slot = () => {
  return (
    <div className={styles.slot}>
      <div className={styles.slotimej}>
        <span>ИГРЫ КАЗИНО</span>
        <a className={styles.hovslot} href="">
          Больше
          <CgChevronRight />
        </a>
      </div>
      <div className={styles.slotik}>
        <div className={styles.slots}>
          <div className={styles.slhov}>
            <div className={styles.hov1}>
              <AiFillStar />
              <MdErrorOutline />
            </div>
            <div className={styles.hov2}>Diamond Flash</div>
            <div className={styles.hov3}>
              <a href="" className={styles.buts1}>
                Играть
              </a>
              <a href="" className={styles.buts2}>
                Демо
              </a>
            </div>
          </div>
          <img
            className={styles.imgslot}
            src="https://cmsbetconstruct.com/content/images/casino/icon3/801edc88f9373b2d2319b4ecbd2b281a_casinoGameIcon3.gif"
            alt=""
          />
        </div>
        <div className={styles.slots}>
          <div className={styles.slhov}>
            <div className={styles.hov1}>
              <AiFillStar />
              <MdErrorOutline />
            </div>
            <div className={styles.hov2}>Shining crown</div>
            <div className={styles.hov3}>
              <a href="" className={styles.buts1}>
                Играть
              </a>
              <a href="" className={styles.buts2}>
                Демо
              </a>
            </div>
          </div>
          <img
            className={styles.imgslot}
            src="https://cmsbetconstruct.com/content/images/casino/icon3/6987d6fedb8c00e9eb371b84602db873_casinoGameIcon3.webp"
            alt=""
          />
        </div>
        <div className={styles.slots}>
          <div className={styles.slhov}>
            <div className={styles.hov1}>
              <AiFillStar />
              <MdErrorOutline />
            </div>
            <div className={styles.hov2}>Regal Spins 5</div>
            <div className={styles.hov3}>
              <a href="" className={styles.buts1}>
                Играть
              </a>
              <a href="" className={styles.buts2}>
                Демо
              </a>
            </div>
          </div>
          <img
            className={styles.imgslot}
            src="https://cmsbetconstruct.com/content/images/casino/icon3/2595f40e8013478fac6186cc5cd20502_casinoGameIcon3.gif"
            alt=""
          />
        </div>
        <div className={styles.slots}>
          <div className={styles.slhov}>
            <div className={styles.hov1}>
              <AiFillStar />
              <MdErrorOutline />
            </div>
            <div className={styles.hov2}>Gates of Olumpus</div>
            <div className={styles.hov3}>
              <a href="" className={styles.buts1}>
                Играть
              </a>
              <a href="" className={styles.buts2}>
                Демо
              </a>
            </div>
          </div>
          <img
            className={styles.imgslot}
            src="https://cmsbetconstruct.com/content/images/casino/icon3/f44162ae83d6f5944dfac67eb4db4582_casinoGameIcon3.webp"
            alt=""
          />
        </div>
        <div className={styles.slots}>
          <div className={styles.slhov}>
            <div className={styles.hov1}>
              <AiFillStar />
              <MdErrorOutline />
            </div>
            <div className={styles.hov2}>Vbet Golden Tree</div>
            <div className={styles.hov3}>
              <a href="" className={styles.buts1}>
                Играть
              </a>
              <a href="" className={styles.buts2}>
                Демо
              </a>
            </div>
          </div>
          <img
            className={styles.imgslot}
            src="https://cmsbetconstruct.com/content/images/casino/icon3/5d218285e374b136b38262cbd1abc6a4_casinoGameIcon3.gif"
            alt=""
          />
        </div>
      </div>

      
    </div>
  );
}

export default Slot