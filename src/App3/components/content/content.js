import React, {Component} from 'react';
import './content.css';
import { Switch, Route, Router} from "react-router-dom";
import NewsList from './../newsList';
import BlogsList from './../blogsList';

export default class Content extends Component{


    render(){
        return(
            <div>
                <div className="row mt-3">
                    <div className="col-md-7">
                        <Switch>
                            <Route path="/sport">
                                <NewsList category="Sport" currentUser={this.props.user} />
                            </Route>
                            <Route path="/politics">
                                <NewsList category="Politics" currentUser={this.props.user} />
                            </Route>
                            <Route path="/technology">
                                <NewsList category="Technology" currentUser={this.props.user} />
                            </Route>
                            <Route path="/business">
                                <NewsList category="Business" currentUser={this.props.user} />
                            </Route>
                            <Route path="/">
                                <NewsList category="All" currentUser={this.props.user} />
                            </Route>
                        </Switch>
                    </div>
                    <div className="col-md-5">
                        <BlogsList currentUser={this.props.user}/>
                    </div>
                </div>            
               
            </div>
        )
    }

}

function Sport(){
    return (
    <div class="card">
        <div class="card-body">
            Sport
        </div>
    </div>
    )
}