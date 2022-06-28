import React from 'react';
import Movies from './Movies';
import Places from './Places';
import { BrowserRouter as Router , Link, Routes, Route } from "react-router-dom";
function Content(){
    return(
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
    )
};

export default Content;