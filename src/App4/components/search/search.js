import React, {useState, useEffect, useRef} from 'react';
import './search.css';
import CardService from './../../service/service';

const Search = (props) => {


   
    return (
        <div className="container mb-5">
            <input className="search-card-input" type="text" value={props.keyword} onChange={(e) => props.setKeyword(e.target.value)}/>
        </div>

    )
}

export default Search; 