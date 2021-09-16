import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { Button } from 'reactstrap';
import { Table } from 'reactstrap';

import {
  Label,
  Input,
  Row,
  Col,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormGroup,
  Alert,
  Container,
} from "reactstrap";

import guideStyles from "../assets/css/ViewGuides.module.css";
import IndexHeader from "components/Headers/IndexHeader";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";

import { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();



const Vehicle = (props) => {
  return (
  
    
        
    <tr className={guideStyles.tbldata}>
    <td className={guideStyles.tbldata}><b>{props.vehicle.vtype}</b></td>
    <td className={guideStyles.tbldata}><b>{props.vehicle.vname}</b></td>
    <td className={guideStyles.tbldata}><b>{props.vehicle.vid}</b></td>
    <td className={guideStyles.tbldata}><b>{props.vehicle.date.substring(0,10)}</b></td>
    <td className={guideStyles.tbldata}><b>{props.vehicle.vnumber}</b></td>
    <td className={guideStyles.tbldata}>
    
    <Link to={"/edit-vehicle/"+props.vehicle._id}>  <Button color="primary" size="sm">EDIT</Button>{''} </Link>   
             <a href="#" onClick={() => { props.deleteVehicle(props.vehicle._id) }}>   <Button color="danger" size="sm">DELETE</Button>{''}</a>
       
    </td>
    </tr>

    
  
);
}

export default class Vehiclelist extends Component {
  constructor(props) {
    super(props);

    this.deleteVehicle = this.deleteVehicle.bind(this)

    this.state = {vehicles: []};
  }

  componentDidMount() {
    axios.get('http://localhost:8070/vehicles/')
      .then(response => {
        this.setState({ vehicles: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteVehicle(id) {
    axios.delete('http://localhost:8070/vehicles/'+id)
      .then(response => { console.log(response.data)}
        
        
      );
      toast.success('Vehicle Deleted!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });

    this.setState({
      vehicles: this.state.vehicles.filter(el => el._id !== id)
    })
  }

  vehicleList() {
    return this.state.vehicles.map(currentvehicle => {
      return <Vehicle vehicle={currentvehicle} deleteVehicle={this.deleteVehicle} key={currentvehicle._id}/>;
    })
  }

  render() {
    return (
      <>

      
      
        <IndexHeader />
      <IndexNavbar />
      <div className={guideStyles.viewGuideDiv} color="black">
        <h3><b>Company Vehicle Details</b></h3>
        <br />
        <br />
        <Row>
          <Col>
            <FormGroup>
              <InputGroup className="form-group-no-border">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="nc-icon nc-zoom-split" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Search " type="text" />
              </InputGroup>
            </FormGroup>
          </Col>
          <Col>
            <div>
              <Label check>
                <Input type="checkbox" />{" "}
                <label className={guideStyles.checkBoxLabel}>Vehicle Type</label>
              </Label>

              <Label check>
                <Input type="checkbox" />{" "}
                <label className={guideStyles.checkBoxLabel}>Vehicle ID</label>
              </Label>

              <Label check>
                <Input type="checkbox" />{" "}
                <label className={guideStyles.checkBoxLabel}>Vehicle Number</label>
              </Label>
            </div>
          </Col>
          <Col></Col>
        </Row>

        <Table width="100%" border="2px" className={guideStyles.tbldata}>
          <thead className="thead-light">
            <tr>
              <th className={guideStyles.tbldata}>Vehicle Type</th>
              <th className={guideStyles.tbldata}>Vehicle Name</th>
              <th className={guideStyles.tbldata}>Vehicle ID</th>
              <th className={guideStyles.tbldata}>Date</th>
              <th className={guideStyles.tbldata}>Vehicle Number</th>
              <th className={guideStyles.tbldata}>Actions</th>
              
            </tr>
          </thead>
          
          <tbody>
            { this.vehicleList() } 
          </tbody>
          
        </Table>

       
        
        </div>
        
        <DemoFooter />
       
         
      
      </>

      
    )
  }
}