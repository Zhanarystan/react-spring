import React, {useState, useEffect, useRef} from 'react';
import './cardList.css';
import CardService from './../../service/service';
import { Link } from "react-router-dom";

const CardList = (props) => {
    
    const [cards, setCards] = useState([]);

    console.log(props.keyword)
    

    let change = props.deletedCardId, 
        change1 = props.newCard,
        change2 = props.keyword;
    let searchResultsFor = null;

    useEffect(() => {
        let k = props.keyword;
        if(props.keyword===""){
            k="all";
        }
        props.service.getAllCards(k)
        .then((list) => {
            setCards(list);
        });
        
    }, [change,change1,change2])
   
    
    
      const arr = cards.map((card) => {
        let str = card.addedDate+'';
        let timestamp = new Date(str);
        let todate=new Date(timestamp).getDate() <= 9 ? `0${new Date(timestamp).getDate()}` : new Date(timestamp).getDate();
        let tomonth=new Date(timestamp).getMonth()+1 <= 9 ? `0${new Date(timestamp).getMonth()+1}` : new Date(timestamp).getMonth()+1;
        let toyear=new Date(timestamp).getFullYear();
        let original_date=todate+'.'+tomonth+'.'+toyear;
              return (
                <div class="col mb-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{card.name}</h5>
                        <Link to={`/card/${card.id}`}>DETAILS</Link>
                        <p class="card-text">{original_date}</p>
                    </div>
                </div>
            </div>
              )
          });
      
        if(props.keyword!==""){
            searchResultsFor = <h4 className="centered">Search results for: {props.keyword}</h4>
        }
        let content = <div className="d-flex justify-content-center">
            <img className="not-found-img" src="https://www.climax4business.com/images/no_result_found.png"  />
        </div>

        if(arr.length>0){
            content = 
            <div class="row row-cols-1 row-cols-md-3 mt-5">
                {arr}
            </div>
        }
    return (
        <div className="container">
            {searchResultsFor}
            {content}
        </div>
    )
}

export default CardList;