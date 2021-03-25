import React, {useState} from 'react';
import './addForm.css';
import CardService from './../../service/service';

const AddForm = (props) => {

    

    const [text, setText] = useState("");

  
    const addCard = (e) => {
        e.preventDefault();
        if(text!==""){
            const data = {name: text};
            props.service.addData(data,"addcard")
                .then(data => {
                    props.addNew(data);
                })
            setText("");
        }
        else{
            alert("You didn't enter any text");
        }

    }

    return (
        <div className="card add-card">
            <div className="card-body">
                <form onSubmit={addCard}>
                    <input type="text" className="create-card-input" placeholder="Create new card" 
                    onChange={(e) => setText(e.target.value)}
                    value = {text}
                    />
                    <hr/>
                    <div className="form-group">
                        <button className="create-button">ADD NEW +</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddForm;