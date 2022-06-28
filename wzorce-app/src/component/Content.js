import React from 'react';
import Movies from './Movies';
import Places from './Places';
//import UseMobile from './UseMobile';
import { BrowserRouter as Router , Link, Routes, Route } from "react-router-dom";
function Content(){
    return(
    <div>
        <Router>
            <nav>
                <ul>
                <li>
                    <Link to="/movies">Movies</Link>
                </li>
                <li>
                    <Link to="/places">Places</Link>
                </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/places" element={<Places />} />
                <Route path="/movies" element={<Movies />} />
                
            </Routes>
        </Router>
        </div>
    )
};

export default Content;