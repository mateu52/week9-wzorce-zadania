import React from 'react';
import withUser from './withUser';
import NavItem from './NavItem';
function Places(props){

    return (
        <div>
            <NavItem />
            <p>places: {props.email}</p>
        </div>
    )
}

export default withUser(Places);