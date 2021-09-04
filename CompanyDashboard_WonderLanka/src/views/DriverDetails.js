import React, { Component } from 'react';
import driverStyles from "../assets/css/DriverDetails.module.css";

import { Link } from 'react-router-dom';
import axios from 'axios';
import { Container, FormGroup } from 'reactstrap';
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import IndexHeader from 'components/Headers/IndexHeader';
import IndexNavbar from 'components/Navbars/IndexNavbar';
import DemoFooter from 'components/Footers/DemoFooter';

toast.configure();




const Driver = props => (
  <tr>
    <td>{props.driver.driverid}</td>
    <td>{props.driver.firstname}</td>
    <td>{props.driver.lastname}</td>
    <td>{props.driver.email}</td>
    <td>{props.driver.phonenumber}</td>
    <td>{props.driver.licenseid}</td>
    <td>{props.driver.languages}</td>
    
    
    <td>
      <Link to={"/edit-driver/"+props.driver._id}> <a className="btn btn-warning">Edit</a></Link> | 
      <a className="btn btn-danger" href="#" onClick={() => { props.deleteDriver(props.driver._id) }}>Delete</a>
    </td>
  </tr>
)


export default class Driverlist extends Component {

  
  constructor(props) {
    super(props);

    this.deleteDriver = this.deleteDriver.bind(this)

    this.state = {drivers: []};
  }

  componentDidMount() {
    axios.get('http://localhost:8070/drivers/details')
      .then(response => {
        this.setState({ drivers: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteDriver(id) {
    axios.delete('http://localhost:8070/drivers/'+id)
      .then(response => { console.log(response.data);
        toast.success("Driver Deleted",{
          position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 10000,
            hideProgressBar: false,
        })
      
      });

    this.setState({
      drivers: this.state.drivers.filter(el => el._id !== id)
    })
  }

  driversList() {
    return this.state.drivers.map(currentdriver => {
      return <Driver driver={currentdriver} deleteDriver={this.deleteDriver} key={currentdriver._id}/>;
    })
  }

  render() {
    return (
      <>
      <IndexHeader/>
      <IndexNavbar/>
      
    
      <Container>
      <div>
        <center>
      <h1>Driver Details</h1>
      </center>
        <br />
        <br />
    
         

          

        
        <table width="100%" border="2px" className={driverStyles.tbldata}>
          
            <tr>
            <th className={driverStyles.tbldata}>Driver ID</th>
              <th className={driverStyles.tbldata}>First Name</th>
              <th className={driverStyles.tbldata}>Last Name</th>
              <th className={driverStyles.tbldata}>Email</th>
              <th className={driverStyles.tbldata}>Phone_Num</th>
              <th className={driverStyles.tbldata}>License_ID</th>
              <th className={driverStyles.tbldata}>Languages</th>
              <th className={driverStyles.tbldata}>Actions</th>
             
            </tr>
       
          <tbody>
            { this.driversList() }
          </tbody>
        </table>
       
      </div>
    
      
      </Container>
   
      
      <DemoFooter/>
      </>
      
    )
  }
}