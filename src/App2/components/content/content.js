import React, {Component} from 'react';
import './content.css';
export default class Content extends Component{
    
    renderItems(){

        const elements = this.props.items.map((item) => {
            return(
                <div className="col mb-4">
                    <div className="card">
                        <img src={item.url} className="card-img-top item" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <a className="custom-add-to-cart" href="#" onClick={(e) => {e.preventDefault();this.showMessage(item)}}>+ ADD TO CART</a>
                        </div>
                    </div>
                </div>
            )
        });
        return elements;
    }

    showMessage(item){
        alert(`${item.name} was added to cart`);
        
    }

    render(){
        return (
            <div className="row row-cols-1 row-cols-md-3 mt-4">
                {this.renderItems()}
            </div>
            
        )
    }
}