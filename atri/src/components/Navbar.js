import React, { Component } from 'react';
import {Link} from "react-router-dom";
import styles from "./Navbar.module.css"

class Navbar extends Component {
    render() {
        return (
            <header className={styles.header}> 
                <div className={styles.login}>
                    <button><Link  className={styles.linklogin} to="/login">ورود</Link></button>

                </div>
                <div className={styles.listcontiner}>
                    <input className={styles.input} placeholder='محصول مورد نظر خود را جستجو کنید' />   
                    <ul className={styles.list}>
                        
                        <li>
                        <Link className={styles.link} to="/products">محصولات</Link></li>
                        <li>
                        <Link className={styles.link} to="/aboutus">ارتباط باما</Link></li>
                        <li>
                        <Link className={styles.link} to="/">صفحه اصلی</Link></li>
                         <h1>پارچه عطری</h1>
                    </ul>
                    
                </div>
                
              
                
            </header>
        );
    }
}

export default Navbar;