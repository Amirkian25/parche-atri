import React, { Component } from 'react';
import Card from './Card';
import styles from "./Cards.module.css"
import image1 from "../image/1.jpg"

class Cards extends Component {
    render() {
        return (
        <div className={styles.continer}>
            <div>
                <Card image={image1} name="سرویس حوله" />
            </div>
            <div>
                <Card image={image1} name="سرویس حوله" />
            </div>
            <div>
                <Card image={image1} name="سرویس حوله" />
            </div>
            <div>
                <Card image={image1} name="سرویس حوله" />
            </div>
            
        </div>
        );
    }
}

export default Cards;

