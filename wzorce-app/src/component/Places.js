import React from 'react';
import withUser from './withUser';

function Places(props){

    return (
        <div>
            <p>places: {props.email}</p>
        </div>
    )
}

export default withUser(Places);