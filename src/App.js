
import './App.css';
import Counter from './Counter'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardGroup from 'react-bootstrap/CardGroup';
import React, { Component } from 'react'


class App extends Component {
constructor(){
  super()
  this.state={
    fullName:"Christian Bale",
    bio: "Christian Charles Philip Bale is an English actor. Known for his versatility and physical transformations for his roles, he has been a leading man in films of several genres. He has received various accolades, including an Academy Award and two Golden Globe Awards.",
    profession: "Actor",
    image :"https://c4.wallpaperflare.com/wallpaper/568/397/313/photo-portrait-t-shirt-photographer-wallpaper-preview.jpg",
    show:true,
   
  


  }
}
Show(){

  this.setState({
    show:!this.state.show })}
componentDidMount(){
  setInterval(() => {this.setState({counter:this.state.counter+1})
}, 1000);
}
render (){
  return (
    <>
    {this.state.show && 
     <>
    <CardGroup>
    <Card style={{ width: '18rem' ,marginTop:"50px", backgroundImage: "linear-gradient(white,black)",margin:"auto"}}>
    <Card.Title><h1 style={{margin:"auto"}}>{this.state.fullName}</h1></Card.Title>
      <Card.Img style={{ width: '30rem', margin:"auto"}} variant="top" src={this.state.image} />
      <Card.Body>
        <Card.Title><h3 style={{color:"black"}}>{this.state.profession}</h3></Card.Title>
        <Card.Text style={{color:"White"}}>
        {this.state.bio}
        </Card.Text>
       
      </Card.Body>
    </Card>
    </CardGroup>
<Counter/>

</>
}

<button type="button" class="btn btn-dark" onClick={()=>this.Show()}>Show</button>

    </>
  );





  
}

}

export default App;
