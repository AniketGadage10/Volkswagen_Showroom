import React, { Component } from 'react';
import Style from "../../css/info.css" 

class Info extends Component {
  render() {
    return (
      <header>  
        <p className={Style.info_style}>Hi it's VolksWagen</p>
      </header>
    );
  }
}
 
export default Info;