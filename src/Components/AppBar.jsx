import React from 'react';
import { Link } from 'react-router-dom';
import './AppBar.css';  // Import the CSS file

const AppBar = () => {
    return (
        <header className="app-bar">
            <div className="app-bar__title">
                <h1>Courses</h1>
            </div>
            <nav className="app-bar__nav">
                <Link to="/" className="app-bar__link">All</Link>
                <Link to="/fullstack" className="app-bar__link">Full Stack Development</Link>
                <Link to="/datascience" className="app-bar__link">Data Science</Link>
                <Link to="/cybersecurity" className="app-bar__link">Cyber Security</Link>
                <Link to="/career" className="app-bar__link">Career</Link>
            </nav>
        </header>
    );
};

export default AppBar;
