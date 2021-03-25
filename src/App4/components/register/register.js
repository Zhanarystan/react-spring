import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './register.css';
import {useHistory} from "react-router-dom";
import SweetAlert from 'sweetalert2-react';
import CardService from './../../service/service';

const Register = (props) => {


    const [sweet, setSweet] = useState(false);
    
    const [email, setEmail] = useState("");
    const [fullName, setFullName] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");

    const [registrationMessage, setRegistrationMessage] = useState(null);
    
    let history = useHistory();
    

    const onFullNameChange = event => {
        setFullName(event.target.value);
    }

    const onEmailChange = event => {
        setEmail(event.target.value);
    }

    const onPasswordChange = event => {
        setPassword(event.target.value);
    }

    const onRePasswordChange = event => {
        setRePassword(event.target.value);
    }

    const handleSubmit = event =>{
        const inputData = {email, password, rePassword, fullName};
        props.service.registerUser(inputData)
                .then((data) => {
                    setRegistrationMessage(data.message);
                    if(data.success===true){
                        setSweet(true);
                    }                    
                })
        event.preventDefault();
    }

    let errorMessage = null;
        if(registrationMessage!==null){
            errorMessage =  <div class="alert alert-danger" role="alert">
                                {registrationMessage}
                            </div>
            
        }

    

    return (
        <div className="container mt-5 register-container">
                        <SweetAlert
                                show={sweet}
                                title="Demo"
                                text={registrationMessage}
                                icon="success"
                                onConfirm={() => {
                                    setSweet(false);
                                    history.push("/login");
                                }}

                            />
            <h3>Create new account</h3>
            <div className="mt-5">
            
                <form onSubmit={handleSubmit}>
                    {errorMessage}
                    <div className="d-flex mb-5">
                        <FontAwesomeIcon icon="user-circle" size="2x" color="#245c8c" />
                        &nbsp;&nbsp;&nbsp;
                        <input className="register-card-input" type="text" placeholder="Full Name" value={fullName} onChange={onFullNameChange} />
                    </div>
                    <div className="d-flex mb-5">
                        <FontAwesomeIcon icon="envelope" size="2x" color="#245c8c" />
                        &nbsp;&nbsp;&nbsp;
                        <input className="register-card-input" type="email" placeholder="Email" value={email} onChange={onEmailChange}/>
                    </div>
                    <div className="d-flex mb-5">
                        <FontAwesomeIcon icon="lock" size="2x" color="#245c8c" />
                        &nbsp;&nbsp;&nbsp;
                        <input className="register-card-input" type="password" placeholder="Password" value={password} onChange={onPasswordChange} />
                    </div>
                    <div className="d-flex mb-5">
                        <FontAwesomeIcon icon="lock" size="2x" color="#245c8c" />
                        &nbsp;&nbsp;&nbsp;
                        <input className="register-card-input" type="password" placeholder="Repeat Password" value={rePassword} onChange={onRePasswordChange} />
                    </div>
                    <div className="d-flex mb-3">
                        <input type="checkbox" className="reg-log-checkbox"/>
                        <label>I have read and accepted the terms and conditions</label>
                    </div>

                    <div className="float-right">
                        <button className="reg-log-button">REGISTER &nbsp; <FontAwesomeIcon icon="paper-plane" color="white" /></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register;