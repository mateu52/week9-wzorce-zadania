import React, { useEffect, useState } from 'react';
import Content from './component/Content';
//import Passphrase from './component/Passphrase';
import Movies from './component/Movies';
import Places from './component/Places';
// import { BrowserRouter as Router , Link, Routes, Route } from "react-router-dom";


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
      {/* <Router>
                
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/movies">Movies</Link>
                            </li>
                            <li>
                                <Link to="/places">Places</Link>
                            </li>
                        </ul>
                    </nav>
                    <Routes>
                        <Route path="/" element={<Content />} />
                        <Route path="/movies" element={<Movies />} />
                        <Route path="/places" element={<Places />} />
                    </Routes>
                
            </Router> */}
    </div>
  )
};

export default App;
