import React from 'react';
import './footer.css';

const Footer = () => {

    return(
    <div className="footer">
        <div className="container pt-5">
            <div className="row">
                <div className="col-6">
                    <h5 className="text-light">Task Manager</h5>
                    <p className="text-light">
                        Task Manager site. Manage with your task
                    </p>
                </div>
                <div className="col-3">
                    <h5 className="text-light">Contacts</h5>
                    <p className="text-light">
                        Tel: +345444545
                        <br/>
                        Fax: +334333555
                        <br/>
                        Almaty, Aimanova 123, Office 606
                    </p>
                </div>
                <div className="col-3">
                    <h5 className="text-light">FAQ</h5>
                    <p className="text-light">
                        Feedback
                        <br/>
                        About Creators
                        <br/>
                        Developers
                    </p>
                </div>
            </div>
        </div>

    </div>
    )
}

export default Footer;