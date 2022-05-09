import React from 'react';
import logoSrc from '../../assets/logo.png';
import './index.css';

// Import Link from react-router-dom.
// React-router allows us to make customizable navigation,
// pages, and more.
import { Link } from 'react-router-dom';


// Import the Authenticator component.
// This helps our app connect to Cognito.
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

const Navigation = ({signOut, user}) => {
    return (
        <header className="header-box">
            <img className="logo" src={logoSrc} alt="College Finder" id="logo"/>
            
            <nav className="nav-bar">
                <ul className="nav-list">
                    <li className="nav-list-item" id="home"><Link to="/"><i className="fa-solid fa-house-chimney"></i> Home</Link></li>
                    <li className="nav-list-item" id="yourcolleges"><Link to="/colleges"><i className="fa-solid fa-building-columns"></i> Your Colleges</Link></li>
                    <li className="nav-list-item" id="about"><Link to="/about"><i className="fa-solid fa-address-card"></i> About Us</Link></li>
                    <li className="nav-list-item" id="username"><div><i className="fa-solid fa-user-check"></i> {user.username}</div></li>
                    <li className="nav-list-item" id="signout"><a onClick={signOut}><i className="fa-solid fa-arrow-right-from-bracket"></i> Log Out</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default withAuthenticator(Navigation);