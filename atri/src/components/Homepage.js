import React, { Component } from 'react';
import Slidshow from "./Slidshow";
import Cards from './Cards';



class Homepage extends Component {
    render() {
        return (
            <div>
               <Slidshow />
               <Cards />
               <Cards />
               
            </div>
        );
    }
}

export default Homepage;