import React, { Component,Fragment } from "react";
import Cars from "./Cars";

class Mycars extends Component {
  state = {
    voitures: [
      { name: "Ford", color: "red", annee: 2000 },
      { name: "Toyota", color: "Pink", annee: 2020 },
      { name: "Land cruser", color: "Black", annee: 2010 },
      { name: "Nissan", color: "Grey", annee: 2013 },
      { name: "Mercedes", color: "White", annee: 2014 },
      { name: "Ranger", color: "Black", annee: 2015 },
    ],
    title: "Catalogue de voiture",
  };

  addStyle = (e) => {
    if (e.target.classList.contains("styled")) {
      e.target.classList.remove("styled");
    } else {
      e.target.classList.add("styled");
    }
  };
  addTenYear = () => {
    const updateState = this.state.voitures.map((voiture) => {
      return (voiture.annee -= 10);
    });
    this.setState({
      updateState,
    });
  };
  changeTitre = ()=>{
    this.setState({
      title : this.props.titre
    })
  }
  render() {
    const yearNow = new Date().getFullYear();
    return (
      <Fragment
        className="mycars"
        style={{ width: "400px", padding: "10px", margin: "5px auto" }}
      >
        <h1 onMouseOver={this.addStyle}>{this.state.title}</h1>
        <button onClick={this.addTenYear}>+10 ans</button>
        {this.state.voitures.map((voiture, index) => {
          return (
            <Fragment key={index}> 
              <Cars
                name={voiture.name}
                color={voiture.color}
                year={yearNow - voiture.annee + ' ans'}
              />
            </Fragment>
          );
        })}
      </Fragment>
    );
  }
}
 export default Mycars;
