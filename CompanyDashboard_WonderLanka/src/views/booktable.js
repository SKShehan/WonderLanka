import React, { Component } from 'react';
import axios from 'axios' ;
import guideStyles from "../assets/css/Viewbooking.module.css";

import { post } from 'jquery';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

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
        <table width="100%" border="2px" className={guideStyles.tbldata}>
         <tr>
           
          
           <th style={{width: 50}} className ={guideStyles.tbldata}>TourID</th>
           <th style={{width: 40}}className ={guideStyles.tbldata}>ArrivalDate</th>
           <th style={{width: 40}}className ={guideStyles.tbldata}>BookingDate</th>
           <th className ={guideStyles.tbldata}>Class</th>
           <th style={{width: 30}}className ={guideStyles.tbldata}>Email</th>
           <th style={{width: 30}}className ={guideStyles.tbldata}>MobileNo</th>
           <th style={{width: 140}}className ={guideStyles.tbldata}>Itinerary</th>
           <th className ={guideStyles.tbldata}>UserName</th>
           <th className ={guideStyles.tbldata}>FullName</th>
           <th className ={guideStyles.tbldata}>Insurance</th>
           <th className ={guideStyles.tbldata}>Itinerary</th>
           <th className ={guideStyles.tbldata}>Adults</th>
           <th className ={guideStyles.tbldata}>kids18</th>
           <th className ={guideStyles.tbldata}>Kids8</th>
           <th style={{width: 50}}className ={guideStyles.tbldata}>Country</th>
           <th className ={guideStyles.tbldata}>Payment</th>
           <th className ={guideStyles.tbldata}>Action</th>

         </tr>
      
        
          {this.state.posts.map((posts) =>(
            <tr className={guideStyles.tbldata}>
      
              <td  className={guideStyles.tbldata}><a href={`/add-cancelbooking/${posts._id}`} style={{textDecoration:'none',color:'rgba(5, 0, 0, 0.658)',fontWeight:'bold'}}>{posts.tourId}</a></td>
              <td  className={guideStyles.tbldata}>{posts.arrivalDate}</td>
              <td className={guideStyles.tbldata}>{posts.bookingDate}</td>
              <td className={guideStyles.tbldata}>{posts.iclass}</td>   
              <td className={guideStyles.tbldata}>{posts.email}</td>
              <td className={guideStyles.tbldata}>{posts.mobileNo}</td>   
              <td className={guideStyles.tbldata}>{posts.itinerary}</td>  
              <td className={guideStyles.tbldata}>{posts.username}</td>   
              <td className={guideStyles.tbldata}>{posts.fullName}</td>  
              <td className={guideStyles.tbldata}>{posts.insurance}</td>
              <td className={guideStyles.tbldata}>{posts.itinerary}</td>
              <td className={guideStyles.tbldata}>{posts.noOfAdults}</td>
              <td className={guideStyles.tbldata}>{posts.noOfKids18}</td>
              <td className={guideStyles.tbldata}>{posts.noOfKids8}</td>
              <td style={{minwidth: 30}}className={guideStyles.tbldata}>{posts.country}</td>
              <td className={guideStyles.tbldata}>{posts.payment}</td>
              <td className={guideStyles.tbldata}>
              <button
                  className={guideStyles.btnEdit}
              
                >
                  <a  style={{textDecoration:'none' ,color:'white',fontweight: 700}} href={`/edit-bookingmanagement/${posts._id}`}>

                  Edit
                  </a>
                </button>
            
              
                <button
                className={guideStyles.btnDelete}
                  onClick={()=>this.onDelete(posts._id)}
                >
                  Delete
                </button>
              
              
                </td>
              </tr>
          ))}

        
        </table>
      </div>
      </div>
    )


  }
}

export default Booktable;
