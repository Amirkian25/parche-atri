import React, { Component } from 'react';
import Navbar from './components/Navbar';
import {Route , Switch } from "react-router-dom";
import Aboutus from './components/Aboutus';
import Products from './components/Products';
import Homepage from './components/Homepage';
import Login from './components/Login';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/products" component={Products}/>
            <Route path="/aboutus" component={Aboutus}/>
            <Route path="/" component={Homepage}/>
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;