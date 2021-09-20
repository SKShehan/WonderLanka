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

 
  


export default class EmployeeUpdate extends Component {
  constructor(props) {
    super(props);
    
    this.onChangeEmployeeName = this.onChangeEmployeeName.bind(this);
    this.onChangeEmployeePWD = this.onChangeEmployeePWD.bind(this);
    this.onChangeEmployeeRole = this.onChangeEmployeeRole.bind(this);
    
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      empname:'',
      emppwd: '',
      emprole:'',
    
      employees: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8070/employees/'+this.props.match.params.id)
      .then(response => {
        console.log(response.data);
        this.setState({
          empname:response.data.empname,
          emppwd: response.data.emppwd,
          emprole: response.data.emprole,
         
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

  

  }
  onChangeEmployeeName(e) {
    this.setState({
      empname: e.target.value
    })
  }

  onChangeEmployeePWD(e) {
    this.setState({
      emppwd: e.target.value
    })
  }

  onChangeEmployeeRole(e) {
    this.setState({
      emprole: e.target.value
    })
  }

  

 
  onSubmit(e) {
    e.preventDefault();

    const employee = {
     
      empname:this.state.empname,
      emppwd:this.state.emppwd,
      emprole:this.state.emprole,
      
    }

    console.log(employee);

    axios.post('http://localhost:8070/employees/update/' + this.props.match.params.id, employee)
      .then(res => {console.log(res.data);
      toast.success("Employee Edited",{
        position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: 10000,
          hideProgressBar: false,
      })
    });
    
    //window.location = '/';
    
  }

  render() {
    return (

        <div>
          <IndexHeader />
            <IndexNavbar />
            <div style = {{paddingTop :"50px"}} className ={styles.body}>   
           <Container>
          
         
            

      <center><h1 className={styles.header}>Edit Employee</h1></center>
      
      
      <div className = {styles.FormContainer}>
      <form onSubmit={this.onSubmit} className="register-form">
        

        <br></br>

        <div> 
          <label>Employee Name: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.empname}
              onChange={this.onChangeEmployeeName}
              />
        </div>

        <br></br>

        <div>
          <label>Employee Password: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.emppwd}
              onChange={this.onChangeEmployeePWD}
              />
        </div>

        <br></br>

        <div>
          <label>Employee Role: </label>
              <select>
              type="select" 
              className="form-control"
              value={this.state.emprole}
              onChange={this.onChangeEmployeeRole}
              >
               <option>General Manager</option> 
               <option>Assets Manager</option>

             

           </select>     

        </div>

       

     

  

       <center>
        <div className="form-group">
        
          <input type="submit" value="Edit employee" className="btn btn-primary"/>
    
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