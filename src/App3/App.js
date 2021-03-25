import React, {Component,  useState} from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import NavBar from './components/navbar';
import Banner from './components/banner';
import Content from './components/content';


const App = () =>{
    const users = [
        {id:1, email: "mukhtarkhanov25@gmail.com", password:"1234", avatar:"https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425__340.png"},
        {id:2, email:"26478@edu.iitu.kz",password:"4321", avatar:"https://i.ytimg.com/vi/Gh4Mvo6kmkM/maxresdefault.jpg"}
    ]
    
    const [currentUser, setUser] = useState(null);
    if(currentUser!==null){
        console.log(`In APP ${currentUser.email}`);
    }
    console.log(currentUser);

    const user = currentUser;

    function authApp(u){
        setUser(u);
    }
    return (
        <Router>
            <NavBar users={users} authApp={authApp} />   
            <div className="container mt-3">
                <Banner/>
                <Content users={users} user={user}/>   
            </div>

        </Router>
        )
}

export default App;