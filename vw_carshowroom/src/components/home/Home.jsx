import React, { Component } from 'react';
import '../../App.css';
import Logo from './Logo.jsx';
import BackCover from "../../img/volkswagen_car.jpg"
import Info from "../home/Info.jsx"
import Style from "../../css/Home.css"
class Home extends Component {
  
  render() {
    return (
      <div className="App">
        <Logo text="Volkswagen"/>
         <img src={BackCover} className={Style.cover_style}></img>
         <Info/>
      </div>
    );
  }
}

export default Home;
