import React, {Component} from 'react';
import NavBar from './components/navbar';
import Authentication from './components/authentication';
import Content from './components/content';
import Footer from './components/footer';

class App extends Component{

    state = {
        loggedIn:false,
        currentUser: null,
        users:[
            {email:"mukhtarkhanov25@gmail.com",password:"123123"},
            {email:"26478@edu.iitu.kz",password:"123456"}
        ],
        items: [
            {name: "Iphone 12", url:"https://htstatic.imgsmail.ru/pic_image/02e857acba35108d03761d727470df57/450/450/1909776/"},
            {name: "Xiaomi Redmi", url:"https://xiaomi.kz/upload/iblock/944/9441c62457dcfcd5cf4938e82b0e7bb9.jpg"},
            {name: "MacBook Pro", url:"https://www.technodom.kz/media/catalog/product/cache/1366e688ed42c99cd6439df4031862c6/5/f/5fb9113b0214f79d19bd9065eb80a3d729477334_211344_1.jpg"}
        ]
    }

    login = (user) => {
        console.log(user);
        this.setState({
            loggedIn:true,
            currentUser: user
        });
    }

    logout = () => {
        this.setState({
            loggedIn:false,
            currentUser:null
        })
    }

    render(){
        const {items} = this.state.items;
        return (
            <>
                <NavBar online={this.state.loggedIn} currentUser={this.state.currentUser}/>
                <div className="container mt-2">
                    <div className="row">
                        <div className="col-md-3">
                            <Authentication users={this.state.users} login={this.login} logout={this.logout} />
                        </div>
                        <div className="col-md-9">
                            <Content items={this.state.items}/>
                        </div>
                    </div>
                    <Footer/>
                </div>
            </>
        )
    }
}

export default App;