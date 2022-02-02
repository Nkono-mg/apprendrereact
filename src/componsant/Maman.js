import React, { Component } from 'react';
import Enfant from './Enfant';

export default class Maman extends Component {
    state = {
        messageMaman: null,
        messageEnfant: null
    }
    ordreMaman = ()=>{
        this.setState({
            messageMaman: this.inputMaman.value
        })
    }
    reponseEnfant = ()=>{
        this.setState({
            messageEnfant: this.inputEnfant.value
        })
    }
  render() {
    return (
    <div className="maman">
        <h2>Maman</h2>
        Message <input type="text" ref={(ma)=>(this.inputMaman=ma)} />
        <button onClick={this.ordreMaman}>Ordre Maman</button>  
        <h2>{this.state.messageMaman}</h2>   
        <hr />
        Réponse <input type="text" ref={(enf)=>(this.inputEnfant=enf)} />
        <Enfant messageMaman={this.state.messageMaman} reponseEnfant={this.reponseEnfant} messageEnfant={this.state.messageEnfant} />
    </div>);
  }
}
 