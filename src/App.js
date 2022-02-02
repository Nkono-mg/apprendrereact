import "./App.css";
import Hello from "./componsant/Hello";
import Mycars from "./componsant/Mycars";

import React, { Component } from "react";
import Maman from "./componsant/Maman";

class App extends Component {
  changeTitle = () => {
    this.setState({
      title: "Nouveau titre",
    });
  };
  changeViaParam = (param) => {
    this.setState({
      title: param,
    });
  };

  changeViaInput = (e) => {
    this.setState({
      title: e.target.value,
    });
  };
  getViaInput = (e) => {
    e.preventDefault();
    this.setState({
      title: this.inputName.value,
    });
  };
  render() {
    return (
      <div className="app">
        <Hello />
        <hr />
        <Mycars titre={this.getViaInput}/>
       <div>
          <button onClick={this.changeTitle}>Chager le nom en dure</button>
          <button onClick={() => this.changeViaParam("Titre  via param")}>
            Via param
          </button>
          <input
            type="text"
            name="titre"
            ref={(name) => (this.inputName = name)}
          />
          <button onClick={this.getViaInput}>getVia Input</button>
        </div>  
        <hr />
       <Maman />
      </div>
    );
  }
}
export default App;
