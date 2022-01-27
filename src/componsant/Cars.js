import React from 'react';

const Cars = (props) => {

    const colorInfo = props.color ? (<li>Couleur: {props.color}</li>) : (<li>Couleur: Néant</li>)
    if(props.children){
        return (
            <div>
            <ul>
                 <li>Marque: {props.children}</li>
                  { colorInfo }
            </ul>
        </div>
        );
    }else{
        return <p>Pas d'autre voiture</p>
    }
    
   
};

export default Cars;