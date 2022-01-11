import React, { Component } from 'react';
import styles from "./Login.module.css"

class Login extends Component {
    render() {
        return (
            <div className={styles.continer}>
                <h1>ورود</h1>
                <h3>.برای ورود ابتدا شماره همراه خود را وارد کنید</h3>
                <input placeholder='0915 232 3038' />
                <button>تایید شماره همراه</button>
                
            </div>
        );
    }
}

export default Login;