import React from 'react';
import './navbar.css';

const navbar =() =>(
    <nav>
        <div className="logo">
            <img 
                src="https://png.pngtree.com/png-vector/20191008/ourlarge/pngtree-three-colored-pencils-icon-in-flat-style-png-image_1798424.jpg"
                alt="new" width="50px" height="50px"/>
            <div className="nav-header">Create..!</div>
        </div>
        <div className="search-bar">
            <input type="text" placeholder="Search.."></input>
            <button id ="search-button"></button>
        </div>
    </nav>
);
export default navbar;