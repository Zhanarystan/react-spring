import React, {Component} from 'react';
import './App.css';

class NavBar extends Component{
  
  render(){
    return(
      <nav className="navbar navbar-light navigator">
        <a className="navbar-brand" href="#">Navbar</a>
        <form className="form-inline">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
    </nav>
    )
  }
}

class CardSidebar extends Component{
  render(){
    return(
      <div class="card sidebar-card">
        <div class="card-header">
          Categories
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Cras justo odio</li>
          <li class="list-group-item">Dapibus ac facilisis in</li>
          <li class="list-group-item">Vestibulum at eros</li>
        </ul>
      </div>
    )
  }
}

class BrandsSidebar extends Component{
  render(){
    return(
      <div className="card sidebar-card">
        <div className="card-header">
          Brands
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Apple</li>
          <li className="list-group-item">Samsung</li>
          <li className="list-group-item">Xiaomi</li>
        </ul>
      </div>
    )
  }
}

class SearchPanel extends Component{
  render() {
    return(
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1" />
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroup-sizing-sm">Search</span>
        </div>
      </div> 
    ) 
  }
}

class Carousel extends Component{
  render(){
    return(
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--54ca_F2q--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/1wwdyw5de8avrdkgtz5n.png" className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="https://www.baeldung.com/wp-content/uploads/2016/10/social-Spring-Security-dark.jpg" className="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src="..." className="d-block w-100" alt="..."/>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    )
  }
}
//https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&amp;hei=1112&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1604021663000
class Cards extends Component{
  showItems(items){
    return(
    items.map((item) => {
      return(
        <div class="col mb-4">
          <div className="card">
            <img src={item.src} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5>{item.name}</h5>
              <p className="card-text">{item.description}</p>
            </div>
          </div>
      </div>
      )
    }))
    
  }
  render(){
    return(
      <div class="row row-cols-1 row-cols-md-3">
        
        {this.showItems(this.props.items)}
        
      </div>
      
    )
  }
}


class Row extends Component{
  render(){
    return(
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-3">
            <CardSidebar/>
            <BrandsSidebar/>
          </div>
          <div className="col-md-7 offset-1">
            <SearchPanel/>
            <Carousel/>
            <Cards items={this.props.items}/>
          </div>
        </div>
      </div>
    )
  }
}

class App extends Component{

  state = {
    items:[
    {name:"Apple", src: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&amp;hei=1112&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1604021663000", description:"Apple desc"},
    {name:"Apple", src: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&amp;hei=1112&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1604021663000", description:"Apple desc"},
    {name:"Apple", src: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&amp;hei=1112&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1604021663000", description:"Apple desc"},
    {name:"Apple", src: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&amp;hei=1112&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1604021663000", description:"Apple desc"}
    ]
  }

  render(){
    return (
      <>
      <NavBar/>
      <Row items={this.state.items}/>
      </>
    )
    }
  
}

export default App;
