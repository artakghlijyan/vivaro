import React from "react"
import styles from "./Footer.module.css"



const Footer = ()=>{
    return (
        <div className={styles.footer1}>
           <div className={styles.foot}>
            <h2 className={styles.vbet}>VBET</h2>
            <span>О компании</span>
            <span>Часто задаваемые вопросы</span>
            <span>Контакты</span>
            <span>Букмекерские конторы</span>
           </div>
           <div className={styles.foot}>
            <h2  className={styles.vbet}>Продукты</h2>
            <span>Спорт</span>
            <span>Казино</span>
            <span>live cazino</span>
            <span>Киберспорт</span>
            <span>TV игры</span>
            <span>Виртуальные игры</span>
            <span>Покер</span>
           </div>
           <div className={styles.foot}>
            <h2  className={styles.vbet}>Спорт</h2>
            <span>Статистика</span>
            <span>Life календарь</span>
            <span>Результаты</span>
           </div>
           <div className={styles.foot}>
            <h2  className={styles.vbet}>Турниры</h2>
            <span>Спортивные турниры</span>
            <span>Казино турниры</span>
            <span>Лайв казино турниры</span>
            <span>Джекпот</span>
           </div>
           <div className={styles.foot}>
            <h2  className={styles.vbet}>Игры</h2>
            <span>Блот</span>
            <span>Нарды</span>
            <span>Пушка</span>
            <span>Кино</span>
           </div>
           <div className={styles.foot}>
            <h2  className={styles.vbet}>Информация и правила</h2>
            <span>Ответственная игра</span>
            <span>Регламент казино</span>
            <span>Регламент спортсменка</span>
            <span>Политика конфиденциальности</span>
            <span>Покер</span>
           </div>
           <div className={styles.foot}>
            <h2  className={styles.vbet}>Приложение</h2>
            <span>Скачать приложение Web</span>
           </div>
           <div className={styles.foot}>
               <div className={styles.ins}>
               <img className={styles.nkfac} src="https://png.pngtree.com/png-clipart/20230401/original/pngtree-three-dimensional-instagram-icon-png-image_9015419.png" alt="" />
              <img className={styles.nkfac} src="https://cdn-icons-png.flaticon.com/512/1603/1603076.png" alt="" />
              <img className={styles.nkfac} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Youtube_Music_icon.svg/1200px-Youtube_Music_icon.svg.png" alt="" />
              <img className={styles.nkfac} src="https://www.facebook.com/images/fb_icon_325x325.png" alt="" />
               </div>
           </div>
        </div>
    )
}

export default Footer