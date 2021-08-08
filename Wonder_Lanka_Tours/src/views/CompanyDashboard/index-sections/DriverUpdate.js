import React from "react";

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

function DriverUpdate() {
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
            <center><h1 className="title">Update Driver Details</h1></center>
          <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">Details</th>
      <th scope="col">Assigned Values</th>
     
    </tr>
  </thead>
  <tbody>
  <tr>
    <th scope="row">Index</th>
      <td>#</td>
    </tr>

    <tr>
      <th scope="row">First Name</th>
      <td>Gotha</td>
      
    </tr>
    
    <tr>
    <th scope="row">Last Name</th>
      <td>Gotha</td>
    </tr>
    <tr>
    <th scope="row">Email </th>
      <td>Gotha</td>
    </tr>
    <tr>
      <th scope="row">Mobile Number</th>
      <td>Gotha</td>
      
    </tr>
    
    <tr>
    <th scope="row">License ID</th>
      <td>Gotha</td>
    </tr>
    <tr>
    <th scope="row">Fluent Langages</th>
      <td>Gotha</td>
    </tr>

    <tr>
    <th scope="row">Availability</th>
      <td>Gotha</td>
    </tr>
    
  </tbody>
</table>
<center>
<Button

className="btn-round"
color="danger"
type="button"

>
 Update Details
</Button>
</center>

</Container>

      </div>{" "}
    </>
  );
}

export default DriverUpdate;
