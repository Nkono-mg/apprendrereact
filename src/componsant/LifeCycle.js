import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

export class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Toto",
      step: 1,
    };
    console.log(`Etape ${this.state.step}, je suis dans le constructor()`);
  }
  componentDidMount() {
    console.log("Je suis dans le componentDidMount()");
    this.setState({
      name: this.state.name,
      step: this.state.step + 1,
    });
    console.log(
      `Etape ${this.state.step}, setState() a changé  dans le compoentDidMount()`
    );
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(`Etape ${this.state.step}, je suis dans le componentDidUpdate()`);
    console.log(prevState)
    console.log(this.state);
  }

  render() {
    console.log(`Etape ${this.state.step}, je suis dans le render()`);
    return (
      <div>
        {console.log(`Etape ${this.state.step}, mise à jour DOM`)}
        Cargement de step {this.state.step}
        <p>Nom: {this.state.name}</p>
      </div>
    );
  }
}

export default LifeCycle;
