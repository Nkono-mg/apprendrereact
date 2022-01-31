import React from 'react';

const Cars = (props) => {

    const colorInfo = props.color ? (<li>Couleur: {props.color}</li>) : (<li>Couleur: Néant</li>)
    if(props.children){
        return (
            <div style = {{backgroundColor: 'pink',width:'400px', padding: '10px', margin: '5px auto'}} className="cars">
            <ul>
                 <li>Marque: {props.children}</li>
                  { colorInfo }
            </ul>
        </div>
        );
    }else{
        return <p style = {{backgroundColor: 'pink',width:'400px', padding: '10px', margin: '5px auto'}}>Pas d'autre voiture</p>
    }
};

export default Cars;