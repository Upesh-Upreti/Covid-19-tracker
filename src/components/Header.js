import React from "react";
import '../css/header.css'


const Header = (props) => {

  
  return (
    <div className="head-line">
      <h1>Covid-19 Status of {props.country}</h1>
      <img className="flag" src={props.flag}  alt="flag here" />
    </div>
  );
};

export default Header;
