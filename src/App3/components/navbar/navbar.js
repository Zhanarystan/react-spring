import React, {Component, useState} from 'react';
import './navbar.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function NavBar(props){

    const [show, toggle] = useState(false);
    const [user, auth] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    
    const {users} = props;

    let dropdownClass = "dropdown-menu hide";

    if(show){
        dropdownClass = "dropdown-menu show";
    }

    function authorization(e){
        e.preventDefault();
        if(user){
            auth(null);
            props.authApp(null);
        }
        else{
            let loggedIn = "Wrong email";
            for(let i=0;i<users.length;i++){
                if(users[i].email === email){
                    if(users[i].password === password){
                        loggedIn = true;
                        auth(users[i]);
                        props.authApp(users[i]);
                        loggedIn = "Welcome";
                        break;
                    }
                    loggedIn = "Wrong password";
                    break;
                }
            }
            
            alert(loggedIn);
        }

    }

    let form = <form className="container" onSubmit={authorization}>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" 
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-success" type="submit">SIGN IN</button>
                    </div>
                    <div className="form-group">
                        <input id="remember" type="checkbox" label="Remember me" />
                        <label for="remember">Remember me</label>
                    </div>
                </form>
        let signIn = "Sign In";
    if(user !== null){
        form = <form className="container" onSubmit={authorization}>
                    <div className="form-group mt-2">
                        <button className="btn btn-success" type="submit">SIGN OUT</button>
                    </div>
                </form>;
        signIn = user.email;
    }

    return (
            
            <nav class="navbar navbar-expand-lg navbar-dark navbar-custom">
                <Link className="navbar-brand" to="/">H A B A R.COM</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <Link className="nav-link" to="/" >All News</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="/sport">Sport</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="/politics">Politics</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="/technology">Technology</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="/business">Business</Link>
                        </li>
                        <li class="nav-item dropdown">
                            <div class="nav-link dropdown-toggle" onClick={() => toggle(!show)} id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {signIn}
                            </div>
                            <div className={dropdownClass} aria-labelledby="navbarDropdown">
                            {form}
                            </div>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
            
        )
    
}



export default NavBar;