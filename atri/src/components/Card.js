import React, { Component } from 'react';
import styles from "./Card.module.css";

class Card extends Component {
    render() {
        return (
            <div className={styles.continer}>
                <img src={this.props.image} alt='' />
                <h3>{this.props.name} </h3>

                
            </div>
        );
    }
}

export default Card;