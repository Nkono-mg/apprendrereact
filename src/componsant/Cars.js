import React from 'react';

const Cars = (props) => {
    const colorInfo = props.color ? (<li>Couleur: {props.color}</li>) : (<li>Couleur: Néant</li>)
    if(props.name){
        return (
            <div style = {{backgroundColor: 'pink',width:'400px', padding: '10px', margin: '5px auto'}} className="cars">
            <ul>
                 <li>Marque: {props.name}</li>
                 <li>Age: {props.year}</li>
                  { colorInfo }
            </ul>
        </div>
        );
    }else{
        return null;
    }
};

export default Cars;