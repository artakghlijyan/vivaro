import React from 'react'
import styles from "./Diler.module.css"
import { AiOutlineRight } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { CgChevronRight } from "react-icons/cg";


const Diler = () => {
  return (
    <div>
     <div className={styles.slot1}>
      <div className={styles.slotimej1}>
        <span>ЛАЙВ КАЗИНО</span>
        <a className={styles.hovslot1} href="">
          Больше
          <CgChevronRight />
        </a>
      </div>
        <div className={styles.slotik1}>
        <div className={styles.slots1}>
          <div className={styles.slhov1}>
            <div className={styles.hov11}>
              <AiFillStar />
              {/* <MdErrorOutline /> */}
            </div>
            <div className={styles.hov21}>Аурум рулетка</div>
            <div className={styles.hov31}>
              <a href="" className={styles.buts11}>
                Играть
              </a>
              
            </div>
          </div>
          <img
            className={styles.imgslot1}
            src="https://cmsbetconstruct.com/content/images/casino/icon3/810448092f63743d60796f1dca72222f_casinoGameIcon3.webp"
            alt=""
          />
        </div>



        <div className={styles.slots1}>
          <div className={styles.slhov1}>
            <div className={styles.hov11}>
              <AiFillStar />
             
            </div>
            <div className={styles.hov21}>Chashout blackjack</div>
            <div className={styles.hov31}>
              <a href="" className={styles.buts11}>
                Играть
              </a>
             
            </div>
          </div>
          <img
            className={styles.imgslot1}
            src="https://cmsbetconstruct.com/content/images/casino/icon3/5a7d4efb46239014123e6c93f0e09d3d_casinoGameIcon3.gif "
            alt=""
          />
        </div>
        <div className={styles.slots1}>
          <div className={styles.slhov1}>
            <div className={styles.hov11}>
              <AiFillStar />
             
            </div>
            <div className={styles.hov21}>Speed blackjack</div>
            <div className={styles.hov31}>
              <a href="" className={styles.buts11}>
                Играть
              </a>
             
            </div>
          </div>
          <img
            className={styles.imgslot1}
            src="https://cmsbetconstruct.com/content/images/casino/icon3/d652b3375dd913d29845c8ad3f920e1a_casinoGameIcon3.webp"
            alt=""
          />
        </div>

        <div className={styles.slots1}>
          <div className={styles.slhov1}>
            <div className={styles.hov11}>
              <AiFillStar />
           
            </div>
            <div className={styles.hov21}>Мега рулетка</div>
            <div className={styles.hov31}>
              <a href="" className={styles.buts11}>
                Играть
              </a>
              
            </div>
          </div>
          <img
            className={styles.imgslot1}
            src="https://cmsbetconstruct.com/content/images/casino/icon3/678ba9e2d7bcbaaf268f1c52de85c20c_casinoGameIcon3.webp"
            alt=""
          />
        </div>

        <div className={styles.slots1}>
          <div className={styles.slhov1}>
            <div className={styles.hov11}>
              <AiFillStar />
             
            </div>
            <div className={styles.hov21}>VBET рулетка</div>
            <div className={styles.hov31}>
              <a href="" className={styles.buts11}>
                Играть
              </a>
              
            </div>
          </div>
          <img
            className={styles.imgslot1}
            src="https://cmsbetconstruct.com/content/images/casino/icon3/8062d8e08f1dd4092ac6d2c257ca2be8_casinoGameIcon3.webp"
            alt=""
          />
        </div>


        </div>
      </div>
    </div>
  );
}

export default Diler
