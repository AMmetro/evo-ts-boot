import React from 'react';
import {HashRouter, NavLink} from "react-router-dom";
import "./marsGallery.css"
import Routes from "./Routes";


function MarsGallery() {

    return (
        <div>
           <HashRouter>
                <div>
                    <span> <NavLink to="/photos">Photos </NavLink>  </span>
                    <span> | </span>
                    <span> <NavLink to="/favorites">Favorites </NavLink>  </span>
                </div>
                <Routes/>
            </HashRouter>

        </div>
    );
}

export default MarsGallery;
