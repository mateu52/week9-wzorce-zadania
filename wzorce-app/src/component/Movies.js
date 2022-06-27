import React from 'react';
import withUser from './withUser';

function Movies(props){

    return (
        <div>
            <h1>mowies: {props.email}</h1>
        </div>
    )
}

export default withUser(Movies);