import logo from './logo.svg';
import './App.css';
import Hello from './componsant/Hello';
import Mycars from './componsant/Mycars';

import React, { Component } from 'react';

class App extends Component {
   state = {
      title : 'Catalogue de voiture'
   }
   render() {
      return (
         <div>
            <Hello />
            <hr />
            <Mycars  title={this.state.title}/>
         </div>
      );
   }
}

export default App;
