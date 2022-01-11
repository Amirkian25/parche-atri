import React, { Component } from 'react';
import styles from "./Slider.module.css";

class Slider extends Component {
    render() {
        const {image} =this.props
        return (
            <div className={styles.continer}>
                <img src={image} />
            </div>
        );
    }
}

export default Slider;