import React from "react";
import "../css/covid.css";


const Covid = (props) => {

  return (
    <div className="container">
      <div className="row">
        <div className="card today-cases">
          <div className="card-header ">
            <p>Today's Cases</p>
            <h1>{props.data.todayCases}</h1>
          </div>
        </div>
        <div className="card today-deaths" >
          <div className="card-header">
            <p>Today's Deaths</p>
            <h1>{props.data.todayDeaths}</h1>
          </div>
        </div>
        <div className="card today-recovered">
          <div className="card-header">
          <p>Today's Recovered</p>
            <h1>{props.data.todayRecovered}</h1>
          </div>
        </div>
        <div className="card critical-cases">
          <div className="card-header">
          <p>Critical Cases</p>
            <h1>{props.data.critical}</h1>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="card total-cases">
          <div className="card-header">
          <p>Total Cases</p>
            <h1>{props.data.cases}</h1>
          </div>
        </div>
        <div className="card total-deaths">
          <div className="card-header">
          <p>Total Deaths</p>
            <h1>{props.data.deaths}</h1>
          </div>
        </div>
        <div className="card total-recovered">
          <div className="card-header">
          <p>Total Recovered</p>
            <h1>{props.data.recovered}</h1>
          </div>
        </div>
        <div className="card total-active">
          <div className="card-header">
          <p>Total Active</p>
            <h1>{props.data.active}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Covid;
