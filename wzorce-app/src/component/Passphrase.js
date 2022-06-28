
import React from 'react';
import Content from './Content';
const MyContext = React.createContext();

const Passphrase = () => {

    return (
        <MyContext.Consumer>
            {value => value === false && (
                
                <Content />
            )}
        </MyContext.Consumer>
    )
}

export default Passphrase;