import React, { Component } from 'react';
import Slider from './Slider';
import styles from "./Sliders.module.css"
import slider1 from "../image/slid1.webp";
import slider2 from "../image/slid2.webp";
import slider3 from "../image/slid3.webp"

class Sliders extends Component {
    render() {
        return (
            <div className={styles.continer}>
               <Slider image={slider1} name="parche" /> 
               <Slider image={slider2} name="parche" />
               <Slider image={slider3} name="parche" />
            </div>
        );
    }
}

export default Sliders;