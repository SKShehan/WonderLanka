import React, {Component} from 'react';
import styles from "../assets/css/HotelHome.module.css"


export default class hotelHome extends Component{
  render(){
    return(

      <div style = {{paddingTop : "50px"}} className = {styles.body}>
            <h3 className = {styles.header}><center style={{color:"black" }}><b>Hotel And Restaurant Management</b></center></h3><br/><br/>
        
        

<div style = {{paddingTop : "50px"}} className = {styles.btn_group}>
  
              
              <button className = {styles.btn_guidemng}>
                  <a href = "/View-Restaurant" style={{textDecoration:'none' ,color:"white" }}><b>VIEW  RESTAURANT</b></a>
              </button>

              <button className = {styles.btn_guidemng}>
                  <a href = "/get-hotel" style={{textDecoration:'none' ,color:"white" }}><b>VIEW HOTEL </b></a>
              </button>

           
            
              <button className = {styles.btn_guidemng}>
                  <a href = "/add-hotel" style={{textDecoration:'none' ,color:"white" }}><b>ADD HOTEL</b></a>
              </button>

             
              
              <button className = {styles.btn_guidemng}>
                  <a href = "/add-restaurant" style={{textDecoration:'none' ,color:"white" }} ><b>ADD RESTAURANT</b></a>
              </button>
        
              <button className = {styles.btn_guidemng}>
                  <a href = "#" style={{textDecoration:'none' ,color:"white" }}><b>GENARATE REPORTS</b></a>
              </button>
            
</div>
</div>
                
    
    );
    }
    
  }
