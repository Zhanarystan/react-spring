import React, {Component} from 'react';
import './footer.css';

export default class Footer extends Component{
    render(){
        return(
            <div className="footer-custom">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h2>E-Shopping</h2>
                            <p>E-Shopping site. Easy to buy and cheap</p>
                        </div>
                        <div className="col-md-3">
                            <h2>Contacts</h2>
                            <p>Tel: +345444545</p>
                            <p>Almaty, Aimanova 126, Office 606</p>
                        </div>
                        <div className="col-md-3">
                            <h2>FAQ</h2>
                            <p>Feedback</p>
                            <p>Developers</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}