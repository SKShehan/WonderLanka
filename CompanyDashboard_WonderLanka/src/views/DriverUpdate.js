import styles from '../assets/css/UpdateDriver.module.css'
import React, { Component } from 'react';

import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import IndexHeader from 'components/Headers/IndexHeader';
import IndexNavbar from 'components/Navbars/IndexNavbar';
import DemoFooter from 'components/Footers/DemoFooter';
toast.configure();

 
  


export default class DriverUpdate extends Component {
  constructor(props) {
    super(props);
    
    this.onChangeDriverID = this.onChangeDriverID.bind(this);
    this.onChangeFirstname = this.onChangeFirstname.bind(this);
    this.onChangeLastname = this.onChangeLastname.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePhonenumber = this.onChangePhonenumber.bind(this);
    this.onChangeLicenseid = this.onChangeLicenseid.bind(this);
    this.onChangeLanguages = this.onChangeLanguages.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      driverid:'',
      firstname: '',
      lastname:'',
      email:'',
      phonenumber: '',
      licenseid:'',
      languages:'',
      drivers: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8070/drivers/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          driverid:response.data.driverid,
          firstname: response.data.firstname,
          lastname: response.data.lastname,
          email: response.data.email,
          phonenumber: Number(response.data.phonenumber),
          licenseid: response.data.licenseid,
          languages: response.data.languages,
          
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

  

  }
  onChangeDriverID(e) {
    this.setState({
      driverid: e.target.value
    })
  }

  onChangeFirstname(e) {
    this.setState({
      firstname: e.target.value
    })
  }

  onChangeLastname(e) {
    this.setState({
      lastname: e.target.value
    })
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }

  onChangePhonenumber(e) {
    this.setState({
      phonenumber:e.target.value
    })
  }

  onChangeLicenseid(e) {
    this.setState({
      licenseid:e.target.value
    })
  }

  onChangeLanguages(e) {
    this.setState({
      languages:e.target.value
    })
  }

 
  onSubmit(e) {
    e.preventDefault();

    const driver = {
     
      driverid:this.state.driverid,
      firstname:this.state.firstname,
      lastname:this.state.lastname,
      email:this.state.email,
      phonenumber:this.state.phonenumber,
      licenseid:this.state.licenseid,
      languages:this.state.languages,
    }

    console.log(driver);

    axios.post('http://localhost:8070/drivers/update/' + this.props.match.params.id, driver)
      .then(res => {console.log(res.data);
      toast.success("Driver Edited",{
        position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: 10000,
          hideProgressBar: false,
      })
    });
    
    //window.location = '/';
    
  }

  render() {
    return (

        <div
        
      
        
        >
          <IndexHeader />
            <IndexNavbar />
            <div style = {{paddingTop :"50px"}} className ={styles.body}>   
           <Container>
          
         
            

      <center><h1 className={styles.header}>Edit Driver</h1></center>
      
      
      <div className = {styles.FormContainer}>
      <form onSubmit={this.onSubmit} className="register-form">
        

        <br></br>

        <div> 
          <label>Driver ID: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.driverid}
              //onChange={this.onChangeDriverID}
              />
        </div>

        <br></br>

        <div>
          <label>First Name: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.firstname}
              onChange={this.onChangeFirstname}
              />
        </div>

        <br></br>

        <div>
          <label>Last Name: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.lastname}
              onChange={this.onChangeLastname}
              />
        </div>

        <br></br>

        <div >
          <label>Email: </label>
          <input 
              type="email" 
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
              />
        </div>

        <br></br>

        <div >
          <label>Phone Number: </label>
          <input 
              type="number" 
              className="form-control"
              value={this.state.phonenumber}
              onChange={this.onChangePhonenumber}
              />
        </div>

        <br></br>

        <div >
          <label>License ID: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.licenseid}
              onChange={this.onChangeLicenseid}
              />
        </div>

        <br></br>

        <div >
          <label>Fluent Languages: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.languages}
              onChange={this.onChangeLanguages}
              />
        </div>

     

  

       <center>
        <div className="form-group">
        
          <input type="submit" value="Edit Driver" className="btn btn-primary"/>
    
        </div>
        </center>
      </form>
      </div>
      
      
      
          </Container> 
          <DemoFooter/>
          </div>
    </div>
   
    )
  }
}