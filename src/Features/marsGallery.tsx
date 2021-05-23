import React from 'react';
import {HashRouter, NavLink} from "react-router-dom";
import "./marsGallery.css"
import Routes from "./Routes";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../Store/State";
import {stateItem} from "../Store/ImagesReducer";


function MarsGallery() {

    // const linkSelected = useSelector<AppStoreType, stateItem[]>(state => state.Images)
    // const dispatch=useDispatch()
    // const isSelected = fromRedux ? "photos_link_select" : "photos_link_NOselect"

    return (
        <div>
           <HashRouter>
                <div>
                    <span> <NavLink activeClassName={"activeLink"} to="/photos">Photos </NavLink>  </span>
                    <span> | </span>
                    <span> <NavLink activeClassName={"activeLink"} to="/favorites">Favorites </NavLink>  </span>
                </div>
                <Routes/>
            </HashRouter>

        </div>
    );
}

export default MarsGallery;
