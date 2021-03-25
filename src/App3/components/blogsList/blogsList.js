import React, {useState} from 'react';
import './blogsList.css';

const BlogsList = (props) => {

    let blogs = [
        { author:"User1", message: "There are long texts, and there are short texts. In our current digital reality, there are also very short texts. Regardless of length, a text that is meaningful and successful is more than a sum of its parts, that is, its words.",url:"https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png"},
        { author:"User2", message:"In fact, however, there is no qualitative difference based solely on the length of a work. An op-ed, when written with skill, can have much wider repercussions than a nonfiction book dealing with a similar issue. ", url:"https://johannesippen.com/img/blog/humans-not-users/header.jpg"},
        { author:"User3", message:"Why are some short texts so meaningful and successful?", url: "https://www.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg"}
    ]

    const [blogArray, setBlogArray] = useState(blogs);
    
    const postBlog = (e) => {
        e.preventDefault();
        let newBlog = {author:props.currentUser.email, message: message, url:props.currentUser.avatar }
        setBlogArray(blogs => ([newBlog,...blogs]));
        setMessage("");
        showModal(false);
    
    }

    

    console.log(blogs)
    const [modal, showModal] = useState(false);

    const [message, setMessage] = useState("");

    let modalClass = 'modal fade';
    if(modal){
        modalClass =  'modal fade show';
    }
   
    
    let addBlogButton = null;
    if(props.currentUser){
        addBlogButton = <button type="button" className="btn btn-primary btn-sm ml-2"  data-target="#exampleModal" onClick={() => showModal(true)}>
                            Add blog
                        </button>
    }

    return(
        <div>
            <div className="d-flex">
                <h3>Blogs</h3>
                {addBlogButton}
            </div>
            
            <div className="blogs-wrapper">
            {blogArray.map((item) => {
        return (
            <div class="card card-custom">
                <div class="card-body">
                    <div className="row">
                        <div className="col-md-2">
                            <img src={item.url} className="card-img-blog" alt='https://oneest.com/assets/uploads/img/react-dev.png' />
                        </div>
                        <div className="col-md-9 offset-1">
                            <h5>{item.author}</h5>
                            {item.message}
                        </div>
                    </div>
                </div>
            </div>
        )
    })}
            </div>
            <div class="card subs-blog">
                <div class="card-body">
                    Subscribe to our blogs
                </div>
            </div>
            <div class="card follow-blog">
                <div class="card-body">
                    <b>Follow news on HABAR.COM</b>
                </div>
            </div>
            <div className={modalClass} id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={()=>showModal(false)}>
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form onSubmit = {postBlog}>
                            <div className="form-group">
                                <label>Message</label>
                                <input className="form-control" type="text" onChange={(e) => setMessage(e.target.value)} value={message} />
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={()=>showModal(false)}>Close</button>
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

export default BlogsList;