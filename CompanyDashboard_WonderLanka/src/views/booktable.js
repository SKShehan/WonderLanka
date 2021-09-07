import React, { Component } from 'react';
import axios from 'axios' ;
import './booktable.css';
import { post } from 'jquery';


class Booktable extends Component {
constructor(props){
  super(props);
  this.state = {
    posts:[]
  };

}

componentDidMount(){
  this.retrievePosts();
}

retrievePosts(){
  axios.get("/bookings").then(res =>{
    if(res.data.success){
      this.setState({
        posts:res.data.existingPosts
      });

      console.log(this.state.posts);
    }
  });
}

onDelete=(id) =>{
    axios.delete(`/post/delete/${id}`).then((res)=>{
      alert("Delete Succesfully");
      this.retrievePosts();
    })
}

//search function
filterData(posts,searchkey){
  const result = posts.filter((post)=>
  post.tourId.includes(searchkey)||
  post.arrivalDate.includes(searchkey)||
  post.bookingDate.includes(searchkey)||
  post.iclass.includes(searchkey)||
  post.fullName.includes(searchkey)||
  post.insurance.includes(searchkey)||
  post.itinerary.includes(searchkey)||
  post.tourId.includes(searchkey)||
  post.country.includes(searchkey)||
  post.email.includes(searchkey)||
  post.email.includes(searchkey)
  )
  this.setState({posts:result})
}

handleSearchArea =(e) =>{
  const searchkey=e.currentTarget.value;

  axios.get("/bookings").then(res =>{
    if(res.data.success){
      this.filterData(res.data.existingPosts,searchkey)
    }
  });

}


  render() {
    return (
      <div
      style={{
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
      }}
    >
      
      <div>
        <br/>
        <br/>
        <br/>
        <center>
        <p className="paragraph">Booking Details</p>
        </center>
        <div style={{position:'absolute' ,left:'83%' ,width:'14%'}}>
        <div className="row">
        <div className="col-lg-12 mt-2 mb-2 ">
          <input 
          className="form-control" 
          type="search" 
          placeholder="search"
          name="searchQuery"
          onChange={this.handleSearchArea}></input>
          </div>
          </div>
          </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
     <table className="table">
       <thead>
         <tr>
           
           <th scope ="col">#</th>
           <th scope ="col">TourID</th>
           <th scope ="col">Arrivaldate</th>
           <th scope ="col">Bookingdate</th>
           <th scope ="col">Class</th>
           <th scope ="col">Email</th>
           <th scope ="col">FullName</th>
           <th scope ="col">Insurance</th>
           <th scope ="col">Itinerary</th>
           <th scope ="col">Adults</th>
           <th scope ="col">Country</th>
           <th scope ="col">Payment</th>
           <th scope ="col">Action</th>

         </tr>
       </thead>
        <tbody className="hello">
          {this.state.posts.map((posts,index) =>(
            <tr key={index}>
              <th scope ="row">{index+1}</th>
            
              <td className="welcome"><a href={`/add/${posts._id}`} style={{textDecoration:'none',color:'rgba(5, 0, 0, 0.658)',fontWeight:'bold'}}>{posts.tourId}</a></td>
              <td className="welcome">{posts.arrivalDate}</td>
              <td className="welcome">{posts.bookingDate}</td>
              <td className="welcome">{posts.iclass}</td>   
              <td className="welcome">{posts.email}</td>
              <td className="welcome">{posts.fullName}</td>  
              <td className="welcome">{posts.insurance}</td>
              <td className="welcome">{posts.itinerary}</td>
              <td className="welcome">{posts.noOfAdults}</td>
              <td className="welcome">{posts.country}</td>
              <td className="welcome">{posts.payment}</td>
              
           
              
              <td><a className="btn btn-warning" href={`/edit/${posts._id}`}>
                &nbsp;Edit
                </a>
                &nbsp;
                
                <a className="btn btn-danger"  onClick={()=>this.onDelete(posts._id)}>
                &nbsp;Delete
                </a>
                </td>
              </tr>
          ))}

        </tbody>
        </table>
      </div>
      </div>
    )


  }
}

export default Booktable;
