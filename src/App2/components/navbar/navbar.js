import React, {Component} from 'react';
import './navbar.css';


export default class NavBar extends Component{

    state = {
        currentUser: null
    }
    loggedIn = () => {
        console.log(this.props.currentUser)
        if(this.props.online){
            this.setState({
                currentUser: this.props.currentUser
            })
             console.log(this.props.currentUser)
        }
    }

    render(){
        
        let panel = <>
                        <li className="nav-item ">
                            <a className="nav-link" href="#">Register</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Login</a>
                        </li>
                      </>

            if(this.props.online){
                console.log(this.props.online);
                console.log(this.props.currentUser)
                panel = <li className="nav-item ">
                <a className="nav-link" href="#">{this.props.currentUser.email}</a>
            </li>    
            }
       
        return (
            <nav className="navbar navbar-light navbar-custom">
                <div className="container d-flex">
                    <a className="brand-custom" href="#">
                        e - Shopping
                    </a>
                    <ul className="nav justify-content-end navbar-items-custom">
                        {panel}
                        <li className="nav-item">
                            <a className="nav-link" href="#">РУС</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">ENG</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}