import React from 'react';
import { Link } from 'react-router-dom';

function navber() {
    return (
        <div className="navber">
            <Link to="/"  className="Link">Home</Link> |{' '}
            <Link to="about">About</Link>
        </div>
    )
}


export default navber