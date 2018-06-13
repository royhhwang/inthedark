import React from 'react';
import { Link } from "react-router-dom";

const Error = () => (

    <div className="error-landing">
        <div className="error-page">
            <p>No page exists!</p>
            <a className={window.location.pathname === "/" ? "active" : ""}>
                <Link to="/">Click to return</Link>
            </a>
        </div>
    </div>
);

export default Error;