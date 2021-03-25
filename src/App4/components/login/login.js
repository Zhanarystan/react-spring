import React, {useState, useCookies} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useHistory} from "react-router-dom";
const Login = (props) => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    let history = useHistory();
    
    const onEmailChange = event =>{
        setEmail(event.target.value);
    }

    const onPasswordChange = event =>{
        setPassword(event.target.value);
    }

    const handleSubmit = event =>{
        const inputData = {email, password};
        auth(inputData);
        event.preventDefault();
    }

    async function auth(data){
        
        const response = await fetch("http://localhost:8000/auth", {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
              "Content-Type": "application/json"
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify(data)
          });

        if(response.status===200){
            let jwt = await response.json();
            props.setCookieJWT('jwt', jwt.jwtToken);
            history.push("/");
        }

    }

    return (
    <div className="container mt-5 register-container">
        <h3>Sign In</h3>
        <div className="mt-5">
            <form onSubmit={handleSubmit}>
                <div className="d-flex mb-5">
                    <FontAwesomeIcon icon="envelope" size="2x" color="#245c8c" />
                    &nbsp;&nbsp;&nbsp;
                    <input className="register-card-input" type="email" placeholder="Email" value={email} onChange={onEmailChange}/>
                </div>
                <div className="d-flex mb-5">
                    <FontAwesomeIcon icon="lock" size="2x" color="#245c8c" />
                    &nbsp;&nbsp;&nbsp;
                    <input className="register-card-input" type="password" placeholder="Password" value={password} onChange={onPasswordChange}/>
                </div>
                <div className="d-flex mb-3">
                        <input type="checkbox" className="reg-log-checkbox"/>
                        <label>Remember Me</label>
                    </div>

                    <div className="float-right">
                        <button className="reg-log-button">LOGIN &nbsp; <FontAwesomeIcon icon="paper-plane" color="white" /></button>
                    </div>
            </form>
        </div>
    </div>
    )
}

export default Login;