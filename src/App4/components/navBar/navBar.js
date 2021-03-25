import React, {Component,  useState, useEffect} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import './navBar.css';
import UserContext from './../userContext';
import {useHistory, Redirect} from "react-router-dom";

const NavBar = (props) => {

    return(
        <UserContext.Consumer>
            {
                (value) => {
                    return <Nav currentUser={value} 
                    removeCookieJWT = {props.removeCookieJWT} 
                    setCurrentUser={props.setCurrentUser}/>
                }
            }
        </UserContext.Consumer>
    )
}

const Nav = ({currentUser, removeCookieJWT, setCurrentUser}) => {
    

    const Online = () => {
        let history = useHistory();
        return(
            <>
                <li class="nav-item">
                    <Link className="nav-link" to="/allcards">All Cards</Link>
                </li>
                <li class="nav-item">
                    <Link className="nav-link" to="/profile">{currentUser.email}</Link>
                </li>
                <li class="nav-item">
                    <Link className="nav-link" onClick={() => {
                                            removeCookieJWT(['jwt']);
                                            setCurrentUser({id:null, email:null, fullName:null, roles:null});
                                            history.push("/");
                                            }}>Logout</Link>
                </li>
            </>
        )
    }

    const Offline = () => {
        return(
            <>
                <li class="nav-item">
                    <Link className="nav-link" to="/registration">Register</Link>
                </li>
                <li class="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                </li>
            </>
        )
    }

    return(
        <nav class="navbar navbar-light">
            <div className="container">
                <span className="navbar-brand mb-0 h1"><Link to="/">Task Manager</Link></span>
                <ul class="nav justify-content-end">
                {currentUser.email!==null?<Online/>:<Offline/>}
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;