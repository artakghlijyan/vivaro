import React from "react"
import styles from "./Game.module.css"
import { CgChevronRight } from "react-icons/cg";
import { AiFillStar } from "react-icons/ai";


const Game = ()=>{
   return(
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
             
            </div>
            <div className={styles.hov2}>Влот</div>
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
            src="https://cmsbetconstruct.com/content/images/casino/icon3/4c29683ea1d0076ebb9dafc4a2718e37_casinoGameIcon3.gif"
            alt=""
          />
        </div>
        <div className={styles.slots}>
          <div className={styles.slhov}>
            <div className={styles.hov1}>
              <AiFillStar />
            
            </div>
            <div className={styles.hov2}>Blast</div>
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
            src="https://cmsbetconstruct.com/content/images/casino/icon3/e8600d4ee672f4c69d481035bc668eff_casinoGameIcon3.gif"
            alt=""
          />
        </div>
        <div className={styles.slots}>
          <div className={styles.slhov}>
            <div className={styles.hov1}>
              <AiFillStar />
             
            </div>
            <div className={styles.hov2}>Кено</div>
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
            src="https://cmsbetconstruct.com/content/images/casino/icon3/61f078d5b154f6e712e7bc8133f3aeb7_casinoGameIcon3.gif"
            alt=""
          />
        </div>
        <div className={styles.slots}>
          <div className={styles.slhov}>
            <div className={styles.hov1}>
              <AiFillStar />
              
            </div>
            <div className={styles.hov2}>Aviatrix</div>
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
            src="https://cmsbetconstruct.com/content/images/casino/icon3/67177342da498b24b517264dfd74af96_casinoGameIcon3.gif"
            alt=""
          />
        </div>
        <div className={styles.slots}>
          <div className={styles.slhov}>
            <div className={styles.hov1}>
              <AiFillStar />
              
            </div>
            <div className={styles.hov2}>Fast Flip</div>
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
            src="https://cmsbetconstruct.com/content/images/casino/icon3/6392f71ed8e75ca96b42c0222ae35767_casinoGameIcon3.gif"
            alt=""
          />
        </div>
      </div>
    </div>
   )
 
}

export  default Game