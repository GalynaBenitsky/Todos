import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <div className="card-header-tab card-header bg-dark text-white mt-3">
            <div className="card-header-title font-size-lg text-capitalize font-weight-normal"><h3><i className="fa fa-tasks"></i>&nbsp;Todo List</h3></div>
            <header style={headerStyle}>

                <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle}
                    to="/about">About</Link>
            </header>
        </div>

    )
}
const headerStyle = {
    //background: '#333',
    // color: '#fff',
    // textAlign: 'center',
    // padding: '10px'
}
const linkStyle = {
    color: '#fff',
    // textDecoration: 'none'
}
export default Header;
