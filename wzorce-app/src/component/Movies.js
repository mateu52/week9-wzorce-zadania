import React from 'react';
import withUser from './withUser';
import NavItem from './NavItem';
function Movies(props){

    return (
        <div>
            <NavItem />
            <h3>movies: {props.email}</h3>
        </div>
    )
}

export default withUser(Movies);