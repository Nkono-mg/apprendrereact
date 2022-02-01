import "./App.css";
import Hello from "./componsant/Hello";
import Mycars from "./componsant/Mycars";

import React, { Component } from "react";

class App extends Component {
  state = {
    title: "Catalogue de voiture",
  };

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
      title: this.inputNode.value,
    });
  };
  render() {
    return (
      <div className="app">
        <Hello />
        <hr />
        <Mycars title={this.state.title} />
        <button onClick={this.changeTitle}>Chager le nom en dure</button>
        <button onClick={() => this.changeViaParam("Titre  via param")}>
          Via param
        </button>
        <input
          type="text"
          onChange={this.changeViaInput}
          value={this.state.title}
        />
        <input
          type="text"
          name="titre"
          ref={(node) => (this.inputNode = node)}
        />
        <button onClick={this.getViaInput}>getVia Input</button>
      </div>
    );
  }
}

export default App;
