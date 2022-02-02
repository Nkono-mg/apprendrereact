import React from 'react';

const Enfant = (props) => {
    let ordreMaman = props.messageMaman ? (<button onClick={props.reponseEnfant}>Réponse enfant</button>) : (<button disabled>Réponse enfant</button>)
    return (
        <div className="enfant">
           <h2>Enfant</h2>
           <h3>{props.messageEnfant}</h3>
           {ordreMaman}
      </div>
    );
};

export default Enfant;