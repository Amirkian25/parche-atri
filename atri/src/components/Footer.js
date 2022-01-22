import React, { Component } from 'react';
import styles from "./Footer.module.css";
import wh from "../image/whatsapp.png";
import i from "../image/instagram.png";
import te from "../image/telegram.png";

class Footer extends Component {
    render() {
        return (
            <div className={styles.ever}>
            <div className={styles.continer}>
                <div className={styles.list}>
                    <ul>
                        <li><span>درباره ما</span></li>
                        <li>فروش پارچه و حوله وپتو و روفرشی<br />بصورت اقساطی در سرارسر مشهد</li>
                    </ul>
                </div>
                <div className={styles.list}>
                    <ul>
                        <li><span>محصولات</span></li>
                        <li>پتو</li>
                        <li>حوله</li>
                        <li>روفرشی</li>
                        <li>چادر</li>
                    </ul>
                </div>
                <div className={styles.list}>
                    <ul>
                        <li><span>راه های ارتباطی</span></li>
                        <li>تلفن همراه : 09153082849 عطری</li>
                    </ul>
                </div>
                <div className={styles.list}>
                    <ul className={styles.listEnd}>
                        <li><span>شبکه های اجتماعی</span></li>
                       <ul> 
                        <li><a href=""><img  src={wh} alt='wh'/></a></li>
                        <li><a href=""><img  src={i} alt='in'/></a></li>
                        <li><a href=""><img  src={te} alt='te'/></a></li>
                        </ul>   
                    </ul>
                </div>
            </div>
            
            <p>تمامی حقوق این سایت محفوظ می باشد.</p>
            </div>

        );
    }
}

export default Footer;
