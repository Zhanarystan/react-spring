import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './homePage.css';

const HomePage = () => {

    return (
        <div className="container mt-5">
            <div className="banner">
                <img className="banner-image" src={process.env.PUBLIC_URL + '/tms.png'} alt="tms" />
            </div>
            <div className="mt-5">
                <ul class="list-group">
                    <li class="list-group-item">
                        <div className="d-flex">
                            <div className="icon icon1"><FontAwesomeIcon icon="clock" size="2x" /></div>
                            &nbsp;&nbsp;&nbsp;
                            <div>
                                <h6>Quick Access</h6>
                                <p>Fast and easy</p>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div className="d-flex">
                            <div className="icon icon2"><FontAwesomeIcon icon="folder" size="2x" /></div>
                            &nbsp;&nbsp;&nbsp;
                            <div>
                                <h6>Great Management</h6>
                                <p>Grouping your tasks</p>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div className="d-flex">
                            <div className="icon icon3"><FontAwesomeIcon icon="chart-bar" size="2x" /></div>
                            &nbsp;&nbsp;&nbsp;
                            <div>
                                <h6>Statistics</h6>
                                <p>Monitoring with your success</p>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div className="d-flex">
                            <div className="icon icon4"><FontAwesomeIcon icon="cloud-upload-alt" size="2x" /></div>
                            &nbsp;&nbsp;&nbsp;
                            <div>
                                <h6>Cloud Service</h6>
                                <p>Store your data in cloud</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default HomePage;