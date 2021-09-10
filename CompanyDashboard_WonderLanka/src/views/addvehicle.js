import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

import { useState } from 'react';

import styles from'../assets/css/AddVehicle.module.css';
import{
  Label,
  Input,
  Button
}
from 'reactstrap'

import IndexHeader from 'components/Headers/IndexHeader';
import IndexNavbar from 'components/Navbars/IndexNavbar';
import DemoFooter from 'components/Footers/DemoFooter';


export default class Addvehicle extends Component {

    constructor(props){
     super(props);

     this.onChangeVtype = this.onChangeVtype.bind(this);
     this.onChangeVname = this.onChangeVname.bind(this);
     this.onChangeVid = this.onChangeVid.bind(this);
     this.onChangeDate = this.onChangeDate.bind(this);
     this.onChangeVnumber = this.onChangeVnumber.bind(this);
     this.onSubmit = this.onSubmit.bind(this);
     

     this.state={
         vtype: '',
         vname: '',
         vid: '',
         date: new Date(),
         vnumber: '',
         types: []
     }
     
    }

    componentDidMount(){
        axios.get('http://localhost:8070/types/')
        .then(response => {
          if (response.data.length > 0) {
            this.setState({
              types: response.data.map(type => type.vtype),
              vtype: response.data[0].vtype
            })
          }
        })
        .catch((error) => {
          console.log(error);
        })
    }

    onChangeVtype(e) {
        this.setState({
          vtype: e.target.value
        });
      }
    
      onChangeVname(e) {
        this.setState({
          vname: e.target.value
        });
      }
    
      onChangeVid(e) {
        this.setState({
          vid: e.target.value
        });
      }
    
      onChangeDate(date) {
        this.setState({
          date: date
        });
      }

      onChangeVnumber(e) {
        this.setState({
          vnumber: e.target.value
        });
      }
    
      onSubmit(e) {
        e.preventDefault();

        const vehicle = {
            vtype: this.state.vtype,
            vname: this.state.vname,
            vid: this.state.vid,
            date: this.state.date,
            vnumber: this.state.vnumber
          }
          console.log(vehicle);

          axios.post('http://localhost:8070/vehicles/add', vehicle)
      .then(res => console.log(res.data));

    window.location = '/';
      }

    render() {
        return (
          <>
         <IndexHeader />
        <IndexNavbar />

          
          
        <div style = {{paddingTop : "50px"}} className = {styles.body}>
            <br/><br/><h3 className = {styles.header} style = {{textAlign : 'center'}}>Insert New Vehicle Deatils</h3><br/><br/>
            <div className = {styles.FormContainer}>
               
        

        

         <form onSubmit={this.onSubmit}>

          <div className="form-group"> 
           <label><font  color ="black"><b>Vehicle Type: </b> </font> </label>
            <select ref="userInput"
              required
              className="form-control"
              value={this.state.vtype}
              onChange={this.onChangeVtype}>
              {
                this.state.types.map(function(type) {
                  return <option 
                    key={type}
                    value={type}>{type}
                    </option>;
                })
              }
          </select>
 
          

         

        </div>

        <div className="form-group"> 
          <label> <font color ="black"><b> Vehicle Name: </b> </font> </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.vname}
              onChange={this.onChangeVname}
              />
        </div>

        

        <div className="form-group">
        
          <label > <font color ="black"><b> Vehicle ID: </b> </font> </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.vid}
              onChange={this.onChangeVid}
              />
        </div>

        

        <div className="form-group">
          <label> <font color ="black"><b> Date: </b> </font> </label>
          <div>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
        </div>

        
        
        {/* route  vehicle number  */}

        <div className="form-group"> 
        
          <label > <font color ="black"><b> Vehicle Number: </b> </font> </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.vnumber}
              onChange={this.onChangeVnumber}
              />
        </div>
        
        
        
       

         <br></br>
                
                <Button color = "success" type = "submit" style = {{float:'right' , margin : "5px" }}
                onClick = {() =>{
                  ;
                }}
                >ADD Vehicle</Button>

        
         </form>
         </div>
         </div> 
            
            
         <DemoFooter />
            </>
        )
    }
}