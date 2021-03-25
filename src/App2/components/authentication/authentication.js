import React, {Component} from 'react';
import './authentication.css';

export default class Authentication extends Component{

    state = {
        email: '',
        password: '',
        loggedIn:false
    }


    onSubmit = (e) => {
        e.preventDefault();
        for(let i = 0; i<this.props.users.length; i++){
            if(this.state.email !== '' && this.state.email === this.props.users[i].email 
            && this.state.password !== '' && this.state.password === this.props.users[i].password){
                this.props.login(this.props.users[i]);
                this.setState({
                    loggedIn:true
                })
                break;
            }
        }

    }

    onEmailChange = (e) => {
        this.setState({
            email: e.target.value
        });
    }

    onPasswordChange = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    logout = () => {
        this.setState({loggedIn:false});
        this.props.logout();
    }

    render(){

        let form = <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" onChange={this.onEmailChange} value={this.state.email} />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control"  onChange={this.onPasswordChange} value={this.state.password} />
                        </div>
                        <div className="form-group">
                            <button className="btn-sign-in" type="submit">SIGN IN</button>
                        </div>
                        <div className="form-group">
                            <input id="remember" type="checkbox" label="Remember me" />
                            <label for="remember">Remember me</label>
                        </div>
                    </form>;

                    if(this.state.loggedIn){
                        form=<button className="btn-sign-in" type="button" onClick={this.logout}>LOGOUT</button>
                    }

        return(
        <div>
            <div className="card-custom">
                <div className="card-body">
                    {form}
                </div>
            </div>
        </div>
        )
    }
}