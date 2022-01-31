import './App.css';
import Hello from './componsant/Hello';
import Mycars from './componsant/Mycars';

import React, { Component } from 'react';

class App extends Component {
   state = {
      title : 'Catalogue de voiture'
   }

   changeTitle = () =>{
      this.setState({
         title: "Nouveau titre"
      })
   }
   render() {
      return (
         <div className='app'>
            <Hello />
            <hr />
            <Mycars  title={this.state.title}/>
            <button onClick={this.changeTitle}>Chager le nom en dure</button>
         </div>
      );
   }
}

export default App;
