import React, {useState, useEffect} from 'react';
import './cardDetails.css';
import {useParams, useHistory} from "react-router-dom";
import CardService from './../../service/service';

const CardDetails = (props) => {

    

    const [text, setText] = useState("");

    const [card, setCard] = useState({});

    const [tasks, setTasks] = useState([]);

    let history = useHistory();

    let {cardId} = useParams();

    const [newTask, setNewTask] = useState(null);

    const [v, onValueChange] = useState(null)

    useEffect(() => {
        
        props.service.getCard(cardId)
            .then((data) => {
                setCard(data);
                onValueChange(data.name);
            });

            props.service.getTasks(cardId)
        .then((data) => {
            setTasks(data);
        });
        
    },[newTask])

    const convertNormalDate = (date) => {
        let str = date+'';
        let timestamp = new Date(str);
        let todate=new Date(timestamp).getDate() <= 9 ? `0${new Date(timestamp).getDate()}` : new Date(timestamp).getDate();
        let tomonth=new Date(timestamp).getMonth()+1 <= 9 ? `0${new Date(timestamp).getMonth()+1}` : new Date(timestamp).getMonth()+1;
        let toyear=new Date(timestamp).getFullYear();
        let tohour = new Date(timestamp).getHours() <= 9 ? `0${new Date(timestamp).getHours()}` : new Date(timestamp).getHours();;
        let tominutes = new Date(timestamp).getMinutes() <= 9 ? `0${new Date(timestamp).getMinutes()}` : new Date(timestamp).getMinutes();
        
        return todate+'.'+tomonth+'.'+toyear+' '+tohour+':'+tominutes;
    }

    

    let content = tasks.map((task) => {
        
        return(
            <div className="card mb-3">
                <div className="card-body">
                   <p>{task.taskText}</p>
                   <label class="switch">
                        <input type="checkbox" checked={task.done} 
                        onClick={ () => {props.service.addData({id: task.id, done:!task.done},"addtask/"+cardId)
                        .then((data) => {setNewTask(data)})}} />
                        <span class="slider round"></span>
                    </label>
                   <p>{convertNormalDate(task.addedDate)}</p>
                </div>
            </div>
        )
    });
    if(tasks.length === 0){
        content = "There are no tasks";
    }
    
    
    
    const addTask = (e) => {
        e.preventDefault();
        if(text!==""){
            const data = {taskText: text, done:false};
            let url = "addtask/"+cardId;
            props.service.addData(data, url)
                .then((data) => {
                    setNewTask(data);
                });
            setText("");
            props.service.getTasks(cardId)
                .then((data) => {
                    setTasks(data);
                });
        }
        else{
            alert("You didn't enter any text");
        }
    }

    const deleteCard = (e) => {
        let url = "deletecard/"+cardId;
        props.service.deleteCard(url)
            .then((data) => {
                props.deleteCard(data.id);
            });
        history.push("/");
    }
   
    const updateCard = () => {
        props.service.addData({id: card.id, name: v, addedDate: card.addedDate},'addcard')
            .then((data) => {
                setCard({id: card.id, name: v, addedDate: card.addedDate});
                setH2(true);
            })
    }

    
    

    const [h2, setH2] = useState(true);
    

    let field = <h2>{card.name}</h2>;
    
    
    let editButton = <button className="btn btn-outline" onClick={() => {setH2(false)}}>EDIT</button>;
    if(!h2){
        field = <input className="form-control" type="text" value={v} onChange={(e) => {onValueChange(e.target.value)}} />
        editButton = <button className="btn btn-outline" onClick={updateCard}>SAVE</button>
    }

    return(
        <div className="container">
            <div className="card">
                <div className="card-body">
                {field}

                   <p>{convertNormalDate(card.addedDate)}</p>
                </div>
                <div className="card-footer">
                    <div className="d-flex">
                    {editButton}
                    <button className="btn btn-outline" onClick={deleteCard}>DELETE</button>
                    </div>
                </div>
            </div>

            <div className="card add-task mt-3 mb-3">
            <div className="card-body">
                <form onSubmit={addTask}>
                    <input type="text" className="create-task-input" placeholder="Create new task" 
                    onChange={(e) => setText(e.target.value)}
                    value = {text}
                    />
                    <hr/>
                    <div className="form-group">
                        <button className="create-button">ADD NEW TASK</button>
                    </div>
                </form>
            </div>
        </div>
        {content}
        </div>
    )

}

export default CardDetails;