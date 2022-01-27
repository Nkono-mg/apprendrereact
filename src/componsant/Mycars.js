import React, { Component } from 'react';
import Cars from './Cars';

class Mycars extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <Cars color="red">Ford</Cars>
                <Cars color="">Mercedes</Cars>
                <Cars color="Green"></Cars>
            </div>
        );
    }
}

export default Mycars;