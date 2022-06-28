import React, { useEffect, useState } from 'react';
import Content from './component/Content';
import NavItem from './component/NavItem';

function App() {
  const [ promalert, setProm ] =useState();
  const passlog = 'haslo';
  const MyContext = React.createContext();
  

  useEffect(() => {
    const passphrase = prompt('haslo?');
    setProm(passphrase);
  },[]);  
  
  const klucz = ( promalert === passlog) ? true : false;

  const Passphrase = () => {
    return (
      <MyContext.Consumer>
        {value => value === true && (
          <Content />
        )}
      </MyContext.Consumer>
    )
  }
  

  return (
    <div>
      <MyContext.Provider value = { klucz }>
          <Passphrase />
      </MyContext.Provider>
    
    </div>
  )
};

export default App;
