import React from "react";
import { useHistory } from "react-router-dom";




// reactstrap components
import {
  Button,
  Card,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

function DriverManagement() {
  return (
    <>
    
      <div
        className="section section-image section-login"
        style={{
          backgroundImage:
            "url(" + require("assets/img/driver.jpg").default + ")",
        }}
        
      >
        
          <Container>
        
        <center><h1 className="title"> Driver Dashboard</h1></center>  
        <center>
        
        <Button

        className="btn-round"
        color="danger"
        type="button"

        >
        Add New Driver
        </Button>
        <t></t>
      

        <Button

        className="btn-round"
        color="danger"
        type="button"

        >
        View Drivers
        </Button>
        

        

        <Button

        className="btn-round"
        color="danger"
        type="button"

        >
        Assign Driver
        </Button>
        

        </center>
       
        </Container>
      </div>{" "}
    </>
  );
}

export default DriverManagement;
