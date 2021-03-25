import React, {Component,  useState, useEffect} from 'react';
import {useCookies} from 'react-cookie';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";
import "./components/FontAwesomeIcons";
import CardService from './service/service';
import AddForm from './components/addForm';
import NavBar from './components/navBar';
import CardList from './components/cardList';
import CardDetails from './components/cardDetails';
import Search from './components/search';
import HomePage from './components/homePage';
import Register from './components/register';
import Login from './components/login';
import Footer from './components/footer';
import UserProfile from './components/userProfile'
import UserContext from './components/userContext';

import './App.css';


  
  const App = () => {
    

    const [newCard, addNew] = useState(null);

    const [deletedCardId, setDeletedCardId] = useState(null);
    
    const [keyword, setKeyword] = useState("");

    const [cookieJWT, setCookieJWT, removeCookieJWT] = useCookies(['jwt']);


    const [currentUser, setCurrentUser] = useState({id:null, email:null, fullName:null, roles:null})
    const [currentUserEmail, setCurrentUserEmail] = useState(null);
    const [currentUserFullName, setCurrentUserFullName] = useState(null);

    const service = new CardService(cookieJWT['jwt']);
    
    
    useEffect(() => {
      
        if(cookieJWT['jwt']!==undefined){
          
        service.getCurrentUser(cookieJWT['jwt'])
            .then((data)=>{
              console.log("IN effect");
              console.log(data.email);
              setCurrentUser(data);
              
            });
        }
    },[currentUser.email,cookieJWT['jwt']])
    

    return(
        <UserContext.Provider value={currentUser}>
          <Router>
            <NavBar removeCookieJWT={removeCookieJWT} setCurrentUser={setCurrentUser}/>
            <div className="conatiner wrapper mt-5">
              <Switch>
                <Route path="/card/:cardId" >
                  <CardDetails deleteCard={setDeletedCardId} service={service}/>
                </Route>
                <Route path="/allcards">
                  <Search setKeyword={setKeyword} keyword={keyword} service={service} />
                  <AddForm addNew = {addNew} service={service}/>
                  <CardList newCard = {newCard} deletedCardId={deletedCardId} keyword={keyword} service={service}/>
                </Route>
                <Route path="/registration">
                  <Register service={service}/>
                </Route> 
                <Route path="/login">
                  <Login setCookieJWT={setCookieJWT} />
                </Route> 
                <Route path="/profile">
                  <UserProfile setCurrentUser={setCurrentUser} service={service} />
                </Route>
                <Route path="/">
                  <HomePage/>
                </Route>  
              </Switch>
            </div>
            <Footer/>
          </Router>
        </UserContext.Provider>
      )
  }

  export default App;