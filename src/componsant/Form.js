import { Component, Fragment } from "react";

class Form extends Component {
  state = {
    pseudo: "",
    color: "",
    colors: ["", "red", "yelow", "blue", "pink", "grey"],
  };
    
    getPseudo = (e) => {
    this.setState({
      pseudo: e.target.value,
    });
  }; 

  getColor = (e) => {
    this.setState({
      color: e.target.value,
    });
  };

  getFormulaire = (e) =>{
    e.preventDefault();
    console.log(`les infos: ${this.state.pseudo} ${this.state.color}`);
  }

  render() {
    return (
      <form className="form" onSubmit={this.getFormulaire}>
        <div>
            <div>
                <label>Pseudo</label>
                <input type="text" onChange ={this.getPseudo} className="form form-control" />
            </div>
          <div>
            <label htmlFor="color">Colors</label>
            <select value={this.state.color} onChange={this.getColor}>
              {this.state.colors.map((color, index) => {
                return (
                  <option key={index} value={color}>
                    {color}
                  </option>
                );
              })}
            </select>
          </div>
          <button className="btn btn-secondary">Valider</button>
        </div>
      </form>
    );
  }
}
export default Form;
