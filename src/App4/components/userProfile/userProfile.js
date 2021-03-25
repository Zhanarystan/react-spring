import React, {useState, useEffect} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './userProfile.css';
import {useHistory} from "react-router-dom";
import SweetAlert from 'sweetalert2-react';
import CardService from './../../service/service';
import UserContext from './../userContext';

const UserProfile = (props) => {

    return(
        <UserContext.Consumer>
            {
                (value) => {
                    return <Profile currentUser={value} service={props.service}/>
                }
            }
        </UserContext.Consumer>
    )
}

const Profile = ({currentUser, service}) => {
    const [sweet, setSweet] = useState(false);

    const [fullName, setFullName] = useState(null);
    const [oldPassword, setOldPassword] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");

    const [message, setMessage] = useState(null);

    useEffect(()=> {
        setFullName(currentUser.fullName);
    },[currentUser.fullName]);

    const onFullNameChange = event => {
        setFullName(event.target.value);
    }


    const onOldPasswordChange = event => {
        setOldPassword(event.target.value);
    }

    const onPasswordChange = event => {
        setPassword(event.target.value);
    }

    const onRePasswordChange = event => {
        setRePassword(event.target.value);
    }

    const updateProfileData = event =>{
        const inputData = {email:currentUser.email,fullName};
        service.addData(inputData,"update-profile")
                .then((data) => {
                    setMessage(data.message);
                    if(data.success===true){
                        setSweet(true);
                    }     
                    alert(data.message);               
                })
        event.preventDefault();
    }

    const updatePassword = event =>{
        const inputData = {email:currentUser.email, oldPassword, password, rePassword};
        service.addData(inputData,"update-password")
                .then((data) => {
                    setMessage(data.message);
                    if(data.success===true){
                        setSweet(true);
                    }
                    alert(data.message);                    
                })
                setOldPassword("");
                setPassword("");
                setRePassword("");
        event.preventDefault();
    }

    return(
        <div className="container mt-5 register-container">
                        
            <div className="update-profile">
                <h3>Update Profile data</h3>
                <form className="mt-5" onSubmit={updateProfileData} >
                    <div className="d-flex mb-5">
                        <FontAwesomeIcon icon="envelope" size="2x" color="#245c8c" />
                        &nbsp;&nbsp;&nbsp;
                        <input className="register-card-input" type="email" placeholder="Email" value={currentUser.email}  readOnly/>
                    </div>
                    <div className="d-flex mb-5">
                        <FontAwesomeIcon icon="user-circle" size="2x" color="#245c8c" />
                        &nbsp;&nbsp;&nbsp;
                        <input className="register-card-input" type="text" placeholder="Full Name" value={fullName} onChange={onFullNameChange} />
                    </div>

                    <div className="float-right">
                        <button className="reg-log-button">UPDATE PROFILE &nbsp; <FontAwesomeIcon icon="redo-alt" color="white" /></button>
                    </div>
                </form>
            </div>
            <div className="update-profile">
                <h3>Update Password</h3>
                <form className="mt-5" onSubmit={updatePassword}>
                    <div className="d-flex mb-5">
                        <FontAwesomeIcon icon="lock" size="2x" color="#245c8c" />
                        &nbsp;&nbsp;&nbsp;
                        <input className="register-card-input" type="password" placeholder="Old Password" value={oldPassword} onChange={onOldPasswordChange} />
                    </div>
                    <div className="d-flex mb-5">
                        <FontAwesomeIcon icon="lock" size="2x" color="#245c8c" />
                        &nbsp;&nbsp;&nbsp;
                        <input className="register-card-input" type="password" placeholder="New Password" value={password} onChange={onPasswordChange} />
                    </div>
                    <div className="d-flex mb-5">
                        <FontAwesomeIcon icon="lock" size="2x" color="#245c8c" />
                        &nbsp;&nbsp;&nbsp;
                        <input className="register-card-input" type="password" placeholder="Repeat New Password" value={rePassword} onChange={onRePasswordChange} />
                    </div>

                    <div className="float-right">
                        <button className="reg-log-button">UPDATE PASSWORD &nbsp; <FontAwesomeIcon icon="redo-alt" color="white" /></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UserProfile;