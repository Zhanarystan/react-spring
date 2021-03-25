import React, {Component, useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from "react-router-dom";
import './newsList.css';




function NewsList(props){

    let news = [
        {Title: "Egypt builds concrete security wall to protect popular Red Sea beach resort", category: "Business", description: "Egypt says a recently constructed 36-kilometer concrete and wire barrier encircling Sharm el-Sheikh will help protect tourism at the Red Sea resort on the southern tip of the Sinai peninsula.",url:"https://dynaimage.cdn.cnn.com/cnn/q_auto,w_1100,c_fill,g_auto,h_619,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F210208222058-01-sharm-el-sheikh-0206-restricted.jpg"},
        {Title: "England in India: James Anderson and Jack Leach complete famous win in Chennai", category: "Sport", description: "Anderson inspired England with 3-17 and Jack Leach took 4-76 as England inflicted just a second home defeat on their hosts in eight years. India made a decent start in their pursuit of a world record 420, before Anderson swung the game in devastating fashion when introduced.",url:"https://ichef.bbci.co.uk/onesport/cps/976/cpsprodpb/2037/production/_116874280_pan_7757.jpg"},
        {Title: "F1 bosses to discuss shorter 'sprint' races in place of qualifying to increase entertainment", category: "Sport", description: "Teams and bosses will vote on Thursday on a plan for a shorter race on Saturday, which would define the grid for Sunday's grand prix. Qualifying for the Saturday race would take place on Friday.", url: "https://ichef.bbci.co.uk/onesport/cps/976/cpsprodpb/FE3F/production/_116878056_f1_grid_body.jpg"},
        {Title: "Bitcoin sets fresh records after Elon Musk investment", category: "Technology", description: "Bitcoin rose above $48,000 (£34,820) before falling back slightly, but it remains 25% higher than five days ago. Some investors took Tesla's move as a signal that Bitcoin would become a mainstream financial asset. However, there was some criticism about a green car firm investing in such an energy intensive currency.", url: "https://ichef.bbci.co.uk/news/976/cpsprodpb/DD6F/production/_116878665_gettyimages-1229893337.jpg"},
        {Title: "Biden and Democrats prepare to act fast on judges, having learned lesson from Trump", category: "Politics", description: "The order was a victory for Texas Attorney General Ken Paxton, who crowed 'WE WON' on Twitter. In fact, Paxton, a controversial conservative Republican, had successfully gambled that his challenge would land before a judge appointed by President Donald Trump. And indeed Judge Drew B. Tipton -- appointed by Trump in 2020", url: "https://cdn.cnn.com/cnnnext/dam/assets/210208160121-joe-biden-210205-exlarge-169.jpg"}
    ]

    let [arr, setArr] = useState(news);

    let match = useRouteMatch();
    if(props.category!=="All"){
        arr = arr.filter(item => item.category === props.category);
    }

    console.log(arr[0]);
      //slice(page-1,page+2)
      //if(page+2>length) slice(page-1,length)
      
    let pagSize = Math.ceil(arr.length/3);
    let pages=[];
    for(let i = 0; i<pagSize;i++){
        pages.push(i+1);    
    }

    const [modal, showModal] = useState(false);
    const [newsTitle, setNewsTitle] = useState("");
    const [newsCategory,setNewsCategory] = useState("");
    const [newsDescription, setNewsDescription] = useState("");
    const [newsPic, setNewsPic] = useState("");


    let addNewButton = null;
    if(props.currentUser){
        addNewButton = <button className="btn btn-primary btn-sm" data-toggle="modal" data-target="#exampleModal" onClick={() => showModal(true)}>Add News</button>
    }

    let modalClass = 'modal fade';
    if(modal){
        modalClass =  'modal fade show';
    }

    pages = pages.map((item) => {
        if(match.url === '/'){
            if(item===1){
                return <li class="page-item"><Link class="page-link" to={`${match.url}`}>{item}</Link></li>
            }
            match.url = '/allnews';
            match.path = '/allnews';
         }
        if(item===1){
            return <li class="page-item"><Link class="page-link" to={`${match.url}`}>{item}</Link></li>
        }
        return <li class="page-item"><Link class="page-link" to={`${match.url}/${item}`}>{item}</Link></li>
    });

    const postNews = (e) => {
        e.preventDefault();

        console.log(`There is ${newsCategory}`);
        
        let obj = {
            Title: newsTitle,
            category: newsCategory,
            description: newsDescription,
            url: newsPic
        }

        setArr(oldArr => ([obj,...oldArr]));

        setNewsTitle("");
        setNewsCategory("");
        setNewsDescription("");
        setNewsPic("");
        
        showModal(false);
    }

    
    console.log(`MAtch path is ${match.path}`);
    return(

        <div>
            <div className="d-flex">
                <h3>{props.category}</h3>
                {addNewButton}
            </div>
            <Switch>
                <Route path={`${match.path}/:newsId`} >
                    <LList news={arr} />
                </Route>
                <Route path={match.path}>
                    <LList news={arr} />
                </Route>
                <Route path={'/'}>
                    <LList news={arr} />
                </Route>
                
            </Switch>
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item">
                        <Link class="page-link" to="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </Link>
                    </li>
                    {pages}
                    <li class="page-item">
                        <Link class="page-link" to="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </Link>
                    </li>
                </ul>
            </nav>
            <div class={modalClass} id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={() => showModal(false)}>
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form onSubmit={postNews}>
                            <div className="form-group">
                                <label>Title</label>
                                <input className="form-control" type="text" onChange={(e) => setNewsTitle(e.target.value)} value={newsTitle} />
                            </div>
                            <div className="form-group">
                                <label>Category</label>
                                <select className="form-control" onChange={(e) => setNewsCategory(e.currentTarget.value)} value={newsCategory}>
                                    <option selected>Sport</option>
                                    <option>Politics</option>
                                    <option>Technology</option>
                                    <option>Business</option>
                                </select>
                            </div>
                            
                            <div className="form-group">
                                <label>Description</label>
                                <input className="form-control" type="text" onChange={(e) => setNewsDescription(e.target.value)} value={newsDescription} />
                            </div>
                            <div className="form-group">
                                <label>Url</label>
                                <input className="form-control" type="text" onChange={(e) => setNewsPic(e.target.value)} value={newsPic} />
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={() => showModal(false)}>Close</button>
                                <button type="submit" class="btn btn-primary">Save changes</button>
                            </div>
                        </form>
                    </div>

                    </div>
                </div>
            </div>
        </div>
    )
    
}

function LList(props){

    let {newsId} = useParams();
    
    if(newsId === undefined){
        newsId=1;
    }
     
    console.log(newsId)
    let news = props.news.slice((+newsId-1)*3,(+newsId-1)*3+3).map((item) => {
        return (
            <div class="card mb-3">
                <div class="row no-gutters">
                    <div class="col-md-4 p-2">
                        <img src={item.url} class="card-img" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body overflow-auto">
                            <h5 class="card-title">{item.Title}</h5>
                            <p class="card-text">{item.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    })
    
    return(
        <>
        {news}
        </>
    )
}

export default NewsList;