import React, { Component } from "react";
import Cars from "./Cars";

class Mycars extends Component {
  addStyle = (e) => {
    console.log(e);
    if (e.target.classList.contains("styled")) {
      e.target.classList.remove("styled");
    } else {
      e.target.classList.add("styled");
    }
  };
  render() {
    return (
      <div className="mycars">
        <h1 onMouseOver={this.addStyle}>{this.props.title}</h1>
        <Cars color="red">Ford</Cars>
        <Cars color="">Mercedes</Cars>
        <Cars color="Green"></Cars>
      </div>
    );
  }
}
export default Mycars;
