import React, { Component } from 'react';

import logo from "../../img/logo.jpg"
import style from "../../css/info.css"

class Logo extends Component {
    render() {
        return (
            <header>
              <img src={logo} className='App-img'></img>

            </header>
   
        );
    }
}
export default Logo;