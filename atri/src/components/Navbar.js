import React, { Component } from 'react';
import {Link} from "react-router-dom";
import styles from "./Navbar.module.css"

class Navbar extends Component {
    render() {
        return (
            <header className={styles.header}>
                <div className={styles.continer}>
                <div className={styles.listcontiner}>  
                    <ul className={styles.list}>
                        <h1>پارچه عطری</h1>
                        <li>
                        <Link className={styles.link} to="/">صفحه اصلی</Link></li>
                        <li>
                        <Link className={styles.link} to="/products">محصولات</Link></li>
                        <li>
                        <Link className={styles.link} to="/aboutus">ارتباط باما</Link></li>      
                    </ul>    
                </div>
                <div className={styles.login}>
                    <button><Link  className={styles.linklogin} to="/login">ورود</Link></button>
                </div>
                </div>
                <div className={styles.inputSerch}>
                <svg class="svg-icon" viewBox="0 0 20 20" >
							<path d="M18.125,15.804l-4.038-4.037c0.675-1.079,1.012-2.308,1.01-3.534C15.089,4.62,12.199,1.75,8.584,1.75C4.815,1.75,1.982,4.726,2,8.286c0.021,3.577,2.908,6.549,6.578,6.549c1.241,0,2.417-0.347,3.44-0.985l4.032,4.026c0.167,0.166,0.43,0.166,0.596,0l1.479-1.478C18.292,16.234,18.292,15.968,18.125,15.804 M8.578,13.99c-3.198,0-5.716-2.593-5.733-5.71c-0.017-3.084,2.438-5.686,5.74-5.686c3.197,0,5.625,2.493,5.64,5.624C14.242,11.548,11.621,13.99,8.578,13.99 M16.349,16.981l-3.637-3.635c0.131-0.11,0.721-0.695,0.876-0.884l3.642,3.639L16.349,16.981z"></path>
				</svg>
                <input className={styles.input} placeholder='محصول مورد نظر خود را جستجو کنید' /> 
                </div>    
            </header>
        );
    }
}

export default Navbar;